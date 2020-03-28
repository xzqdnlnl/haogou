<template>
  <div class="detail">
 
    <DetailNavBar @navbarclick="titleclick" ref="detailnavbar"/>

    <scroll class="content" ref="detailscroll"   @scroll="detailscroll" :probeType="3">

       <!-- <div>{{this.$store.state.cartList}}</div> -->

      <DetailSwiper :topimage="topImage" />

      <DetailBaseInfo :goods="goods" class="baseinfo" />

      <detail-shop-info :shop="shopgoods" />

      <DetailGoodsInfo :detailInfo="detailInfo" @detailimageLoad="imageLoad" />

      <DetailParamInfo :GoodsParam="goodsparam" ref="params" />

      <DetailCommentInfo :CommentInfo="commentInfo" ref="comment"/>

      <GoodsList :goods="recommend"  ref="recommend"/>

    </scroll>

     <BackTop @click.native="backtopclick"  v-show="showbacktop" class="backtop"/>

    <DetailBottombar @addtocart="addTocart"/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComponents/DetailNavBar/DetailNavBar";

import DetailSwiper from "@/views/detail/childComponents/Detailswiper/Detailswiper";

import DetailBaseInfo from "@/views/detail/childComponents/DetailBaseInfo/DetailBaseInfo";

import DetailShopInfo from "@/views/detail/childComponents/DetailShopInfo/DetailShopInfo";

import DetailGoodsInfo from "@/views/detail/childComponents/DetailGoodsInfo/DetailGoodsInfo";

import DetailParamInfo from "@/views/detail/childComponents/DetailParamInfo/DetailParamInfo";

import DetailCommentInfo from "@/views/detail/childComponents/DetailCommentInfo/DetailCommentInfo";

import DetailBottombar from "@/views/detail/childComponents/DetailBottombar/DetailBottombar";

// import BackTop from "@/components/content/backTop/BackTop";

import GoodsList  from '@/components/content/goods/GoodsList'

import { decounde } from '@/common/utils'

import { backTopMixin } from '@/common/mixin'

import scroll from "@/components/common/scroll/Scroll";



//导入用来请求数据的模块
import { getDetail, Goods, Shop, GoodsParam , getRecommend } from "@/network/detail";

export default {

  name: "Detail",

  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    // BackTop,
    scroll,
    DetailBottombar
  },

  mixins:[backTopMixin],

  data() {
    return {
      // iid : this.$route.params.iid
      iid: null,

      topImage: [],

      goods: {},

      shopgoods: {},

      detailInfo: {},

      goodsparam: {},

      commentInfo:{},

      recommend:[],

      // showbacktop:false,

      themeTopYs: [],

      getThemeTopY: null,

      currentIndex:0,


    };
  },



   


  methods: {

    //每加载完一张图片就做一次刷新
    imageLoad() {

        this.$refs.detailscroll.refresh();

                 // 获取这几个组件的offsetTop,这里的重点是在什么地方，或者说什么时期获取是正确的合适的，因为有的
        // 时候你获取的是图片还没有加载完的，这个时候的offsetTop，也就是这个组件距离顶部的距离数据时不正确的。
        this.getThemeTopY = decounde(()=>{

        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopYs)

      },300)

      this.getThemeTopY();

    },

    // 点击回到顶部的方法。
    // backtopclick(){

    //   this.$refs.detailscroll.totop(0,0,1000)

    // },


    detailscroll(position){

     //负负得正
    //  this.showbacktop = (-position.y > 3500)
    // 因为使用了mixin（混入）所以可以把上面的代码注释，然后写成下面的代码。
    this.listenShow(position);

    // 联动效果
    // 距离顶部的距离:positionY
    const positionY = -position.y;
    let length = this.themeTopYs.length;
    for(let i=0 ; i<length ; i++){

      if( this.currentIndex !==i && ( i<length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || ( i === length-1 && positionY >= this.themeTopYs[i]) ){

        // console.log(this.currentIndex)
        this.currentIndex = i
        //改变这个组件中的currentIndex，来改变选中的是谁。
        this.$refs.detailnavbar.currentIndex = this.currentIndex
        
      }

    }

    },

    // 监听标题的点击移动到相应的位置。
    titleclick(index){

       //  
       this.$refs.detailscroll.totop(0,-this.themeTopYs[index],500)
      
    },

    addTocart(){

      //1: 获取购物车需要展示的页面
      const product = {}
      // 在topImage里随便拿一张图片做为购物车页面展示的图片
      product.image = this.topImage[0]
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      
      // 2: 将商品添加到购物车里,其实就是添加到vuex中。
      this.$store.dispatch("addCart",product).then((res)=>{

         this.$toast.show(res,2000)

      })

      


    }

  },

  created() { 
    //保存iid
    this.iid = this.$route.params.iid;

    //根据iid，发送请求，获取对应的数据。
    getDetail(this.iid).then(res => {
      const data = res.result;

      console.log(res);

      // 1.获取顶部的轮播图要用到的图片数据
      this.topImage = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息的对象,获取具体数据。
      this.shopgoods = new Shop(data.shopInfo);

      // 4.商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.goodsparam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6.取出评论的信息
      if(data.rate.cRate !== 0){

         this.commentInfo = data.rate.list[0];

      }

      // 7.请求推荐的数据
      getRecommend().then((res)=>{

         this.recommend = res.data.list;

      })

     
    });
  },

  computed: {}
};
</script>

<style scoped>
.detail {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}



</style>