<template>
  <div class="goodslist">

     <goods-list-item v-for="(item , index ) in goods" :key="index" :goodsitem="item"></goods-list-item>

  </div>
</template>

<script>

import GoodsListItem from '@/components/content/goods/GoodsListItem'

export default {

  props:{

   goods:{

    type:Array,

    default(){

      return []

    }

   }

  },

  components:{

    GoodsListItem

  }

}
</script>

<style>

  .goodslist{

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
    margin-bottom: 49px;

  }

</style>