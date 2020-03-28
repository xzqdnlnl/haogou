<template>
  
  
      <div class="fenleileft">
    
      <scroll class="content">


     <div class="left">
      
      <div class="left-item" v-for="(item , index) in categorylisttitle" :key="index" @click="titleclick">{{item}}</div>
        
     </div>

     </scroll>

  </div>

   
</template>

<script>

// 导入请求数据的模块
import { getCategory , } from "@/network/category"

import scroll from '@/components/common/scroll/Scroll'

export default {

   components:{

     scroll
     
   },

   data(){

     return{
  
      // 总数据
      categorylist:[],
      // 从总数据取出来的标题数据放在这里
      categorylisttitle:[]     

     }

   },

   methods:{

    titleclick(){

     console.log("1")

    }

   },

   mounted(){

     getCategory()
        .then(res => {
          //保存我们请求来的数据
         console.log(res)
         //先把list这个总体数据取出  
         this.categorylist = res.data.category.list
         console.log(this.categorylist)
         
        }).then(res=>{
         
         //在从总体数据里面取出标题数据title  
         for(let index in this.categorylist){
           this.categorylisttitle.push(this.categorylist[index].title)
         }
         console.log(this.categorylisttitle)
        })
        .catch(err => {
          console.log("数据请求失败！！！");
        });

   }

}
</script>

<style scoped>

.fenleileft{

   height: 100vh;
   position: relative;
   background-color: #cccccc;
   width: 80px;

}

.content{

  position: absolute;
  top: 44px;
  bottom: 49px; 
  overflow: hidden;
  
}

.left-item{

  margin-top: 20px;


}

</style>