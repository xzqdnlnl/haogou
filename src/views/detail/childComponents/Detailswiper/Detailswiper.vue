<template>
  <div class="swiper">

     <el-carousel :interval="2000" arrow="always" autoplay  direction="vertical" class="detailswiper" >
    <el-carousel-item v-for="(item) in topimage" :key="item" class="detailswiperitem">
      <a>
        <img :src="item" class=/>
      </a>
    </el-carousel-item>
  </el-carousel>


  </div>
</template>


<script>
export default {
  props: {
    topimage: {
      type: Array,
      default(){

        return []
         
      }
    }
  },



 
};
</script>

<style scoped>


img{
 
  height: 500px;
  width: 100%;
  clear: both;
  
}





</style>




