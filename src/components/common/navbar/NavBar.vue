<template>
  <div class="nav-bar">
    <!-- 我们不会对slot进行布局或者样式处理，因为这样等有人用这个组件时，替换这个slot的元素，将slot整个替换掉，那slot里面设置的一些属性，比如：class，style等也就被替换掉了，我们一般会在外面包一层div或者...，这个把要给slot设置的一些属性设置到div中，这样slot元素虽然被替换掉了，但是它需要的一些属性可以从它的父元素也就是外边包着它的div继承。 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

.nav-bar{

  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, .2);
}

.left,
.right{

  width: 60px;
 

}

.center{
  
  /* 占据剩下的空间 */
  flex: 1;
 
  
}

</style>