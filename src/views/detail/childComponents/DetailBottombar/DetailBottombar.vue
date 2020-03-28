<template>
  <div class="bottombar">

    <div class="bar-item  bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>

    <div class="bar-item bar-right">
      <div class="cart" @click="toCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {

   methods:{
  
    // 将商品添加到购物车
    toCart(){

      // 我们这里是没有商品数据的，所以
      this.$emit("addtocart")

    }

   }

}
</script>

<style scoped>
.bottombar{

  background-color:#fff;
  height: 54px;
  position: fixed;
  bottom: 0px;
  left:0px;
  right: 0px;
  z-index: 100;
  display: flex;
  text-align: center;


}

.bar-item{

  flex: 1;
  display: flex;

}

.bar-item > div{

  flex: 1;

}

.bar-item .text{

  font-size: 13px;

}

.bar-left .icon{

  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 2px;
  /* 一张雪碧图 */
  background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;

}

.bar-left .service{

  background-position: 0 -53px;

}

.bar-left .shop{

   background-position: 0 -98px;

}

/* .bar-left .select{
   background-position: 0 0px;
} */

.bar-right{

  font-size: 15px;
  color:#fff;
  line-height: 54px;
  
}

.bar-right .cart{

  background-color: #ffe817;
  color: #000;

}

.bar-right .buy{

   background-color: #f69;

}

</style>