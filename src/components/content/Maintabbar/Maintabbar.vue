<template>
  
   <div>
 
    <router-view></router-view>
    
    <tab-bar>

      <tab-bar-item  path="/home" activeColor="#ff4400">
        <img slot="item-icon" src="@/assets/img/tabbar/sy.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/sy2.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>

       <tab-bar-item path="/category" activeColor="#ff4400">
        <img slot="item-icon" src="@/assets/img/tabbar/fl1.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/fl2.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>

       <tab-bar-item path="/cart" activeColor="#ff4400">
       <img slot="item-icon" src="@/assets/img/tabbar/gwc1.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/gwc2.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      
       <tab-bar-item path="/profile" activeColor="#ff4400">
         <img slot="item-icon" src="@/assets/img/tabbar/grzx.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/grzx2.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    
    </tab-bar>

   </div>

   

</template>

<script>

// 导入组件
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {

    // 注册要使用的组件
  components:{

     TabBar,
     TabBarItem,


  }


}
</script>

<style>

</style>