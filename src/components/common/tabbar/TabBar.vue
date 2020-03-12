<template>
    <div class="tabbar">
     <slot></slot>
    </div>
</template>

<script>
export default {



}
</script>

<style>

   .tabbar{

      display: flex;
      background-color: #f6f6f6;
      position: fixed;
      left: 0px;
      right: 0px;
      bottom: 0px;
      box-shadow: 0px -1px 1px rgba(100, 100, 100, .1);
      z-index: 10;

   }

  

</style>