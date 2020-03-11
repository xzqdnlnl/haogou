<template>
  <div class="recommend">
    
    <div v-for="item in recommenddata" :key="item.link" class="recommend-item">
       <a :href="item.link">
       <!-- 图片 -->
       <img :src="item.image" alt="">
       <!-- 文字 -->
       <div>{{item.title}}</div>
       </a>
    </div>

  </div>
</template>

<script>
export default {

  props:{

    recommenddata:{

      type:Array

    }

  }

}
</script>

<style>

   .recommend{

     display: flex;
     justify-content: center;
     width: 100%;
     padding-bottom: 12px;
     border-bottom: 10px solid #eee;


   }

   .recommend-item{

     flex: 1;
     text-align: center;
     font-size: 12px;
     margin: 10px 5px;
     
   }

   .recommend-item img{

     width: 70px;
     height: 70px;
     margin-bottom: 8px;
     
   }
 
</style>