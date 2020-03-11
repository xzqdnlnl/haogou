<template>
  <div class="slide">
    
    <slot></slot>

  </div>
</template>

<script>
export default {

}
</script>

<style>

.slide{

   width: 100%;
   /* flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。 */
   flex-shrink: 0;

}

.slide img{

   width: 100%;

}
</style>