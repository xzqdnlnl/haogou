<template>
  <div id="home">
    <!--顶部导航-->
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <!--:imgs="banners" : 把轮播图的图片数据传递过去-->
    <!-- 轮播图 -->
    <eswiper :imgs="banners"></eswiper>
    <!-- 推荐 -->
    <recommend :recommenddata="recommends"></recommend>
    <!-- 本周流行 -->
    <feature></feature>
    <!-- 切换 -->
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>

    <!-- 商品列表 -->
    <!-- 这里通过点击进行切换显示商品列表，点击对应项，把对应数据传递过去，这里传递的数据不是固定的，show是一个计算属性 -->
    <goods-list :goods="show"></goods-list>

  </div>
</template>

<script>
// 导入顶部导航条组件
import navbar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabcontrol/TabControl";
// 导入商品列表组件
import GoodsList from "@/components/content/goods/GoodsList";

// 导入轮播图组件
import eswiper from "@/components/common/eswiper/eswiper";
// 导入推荐组件
import recommend from "@/views/home/childComponents/RecommendView";
// 导入本周流行
import feature from "@/views/home/childComponents/Feature";

//首页对应的网络请求模块
import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  //要记得注册组件
  components: {
    navbar,
    TabControl,
    GoodsList,
    eswiper,
    recommend,
    feature
  },

  data() {
    return {
      banners: [],
      recommends: [],

      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },

      currentType: "pop"
    };
  },

  // 生命周期函数，这个是组件创建完成时调用。
  created() {
    this.getHomeMultidata(), 
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      //请求数据,我们知道getHomeMultidata()是会返回一个Promise对象的。
      getHomeMultidata()
        .then(res => {
          //保存我们请求来的数据
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch(err => {
          console.log("数据请求失败！！！");
        });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      //请求商品数据
      getHomeGoods(type, page)
        .then(res => {
          // 保存数据
          this.goods[type].list.push(...res.data.list);

          // 因为你请求了数据，数据增多了，页码自然也多了。
          this.goods[type].page++;
        })
        .catch(err => {
          console.log("首页商品数据请求失败！");
        });
    }
  },
  
  // 计算属性
  computed: {
    show() {

     return this.goods[this.currentType].list

    }
  }
};
</script>

<style>
#home {
  margin-top: 44px;
}

.home-nav {
  background: var(--color-ting);
  color: #ffffff;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 100;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>