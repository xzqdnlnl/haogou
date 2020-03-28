<template>
  <div class="check-button" :class="{active:isactive}">
    <img src="~@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {

  props:{

    isactive:{

     type:Boolean,

     default:false

    }

  }

}
</script>

<style scoped>
.check-button{

  position: relative;
  top: 44%;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;


}


.active{

   border: 2px solid #f40;
   background-color: #f40;

}
</style>