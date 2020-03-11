<template>

    <div id="home">
     <!--顶部导航-->
     <navbar class="home-nav"><div slot="center">购物街</div></navbar>
     <!--:imgs="banners" : 把轮播图的图片数据传递过去-->
     <!-- 轮播图 -->
     <eswiper :imgs="banners"></eswiper>
     <!-- 推荐 -->
     <recommend :recommenddata="recommends"></recommend>
     <!-- 本周流行 -->
     <feature></feature>
     
    </div>

</template>

<script>



// 导入顶部导航条组件
import navbar from '@/components/common/navbar/NavBar'
// 导入轮播图组件
import eswiper from '@/components/common/eswiper/eswiper'
// 导入推荐组件
import recommend from '@/views/home/childComponents/RecommendView'
// 导入本周流行
import feature from '@/views/home/childComponents/Feature'

import {getHomeMultidata} from '@/network/home'



export default {

  //要记得注册组件
  components:{
   navbar,
   eswiper,
   recommend,
   feature
  },


  data(){

    return{

      banners:[],
      recommends:[]

    }

  },

  // 生命周期函数，这个是组件创建完成时调用。
  created(){
     
     //请求数据,我们知道getHomeMultidata()是会返回一个Promise对象的。
     getHomeMultidata().then(res=>{

       //保存我们请求来的数据  
       console.log(res)
       this.banners=res.data.banner.list;
       this.recommends=res.data.recommend.list;

     }).catch(err=>{

      

     })

  }

}
</script>

<style>
 .home-nav{

   background:var(--color-ting);
   color: #ffffff;

 }

</style>