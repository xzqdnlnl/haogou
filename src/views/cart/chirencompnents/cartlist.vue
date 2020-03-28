<template>
   <div class="cartlist">

       <scroll class="content" ref="cartscroll">
       <ListItem v-for="(item,index)  in CartList" :key="index" :product="item"></ListItem>
       </scroll>
      
   </div>
</template>

<script>

import { mapGetters } from "vuex";

import ListItem from "./cartlistitem"

import scroll from "@/components/common/scroll/Scroll"

export default {


  components:{

    ListItem,
    scroll

  },

  computed:{

    ...mapGetters({

     //添加进购物车的商品列表数据  
     CartList:'cartList'

    })

  },

  activated(){
 
    // 进入这个页面的时候重新计算一下scrollHeight，防止你添加商品时，它没有重新计算，导致不能滚动。
    this.$refs.cartscroll.refresh();

  }

}
</script>

<style scoped>

 .content{

  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0px;
  right: 0px;
  overflow: hidden;

}


</style>