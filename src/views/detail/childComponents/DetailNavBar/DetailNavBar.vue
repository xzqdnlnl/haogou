<template>
  
    <div class="detailnavbar">

       <nav-bar>

         <div slot="left" @click="back"><img src="~@/assets/img/common/back.svg" alt="" class="back"></div>

          <div slot="center" class="title">
            <div v-for="(item , index) in titles" 
                 :key="item" 
                 class="titleitem"
                 :class="{active : currentIndex === index}" 
                 @click="titleclick(index)"
                 >
               {{item}}
            </div>
          </div>

       </nav-bar>

    </div>

</template>

<script>

// 导入顶部导航条组件
import NavBar from '@/components/common/navbar/NavBar'


export default {

  components:{

    NavBar,

  },

  data(){

    return{

      titles:['商品','参数','评论','推荐'],
      currentIndex : 0
    }

  },

  methods:{

   titleclick(index){

     this.currentIndex = index
 
     this.$emit('navbarclick',index)

   },

   back(){

     //后退一页  
     this.$router.go(-1)
   }

  }

}
</script>

<style scoped>

 .title{

   display: flex;
   clear:both;

 }

 .titleitem{

   flex: 1;

 }

 .active{

   color:var(--color-high-text)
 }

 .back{

   margin-top: 12px;

 }

</style>