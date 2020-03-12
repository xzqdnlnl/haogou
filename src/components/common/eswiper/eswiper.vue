<template>
  <el-carousel :interval="2000" arrow="always" class="swiper" autoplay height="180px">
    <el-carousel-item v-for="(item) in imgs" :key="item.link" class="swiper-item">
      <a :href="item.link">
       <img :src="item.image" alt="">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>


<script>
export default {

  props:{

    imgs:{

     type:Array

    }

  }
  

}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .swiper-item img{
   
    width: 100%;
    height: 100%;
    background-size:percentage;


  }
</style>




