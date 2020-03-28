<template>
  <div class="wrapper" ref="wrapper">
 
      <div class="content">

          <slot></slot>

      </div>

  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {

  data(){

   return{

    scroll : null

   }

  },

  props:{

   probeType:{
     type:Number,
     default:0
    },

  pullupload:{
     type:Boolean,
     default:false
  }

  },

  mounted(){

   this.scroll = new BScroll(this.$refs.wrapper,{
   
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullupload,
    
   })

  if(this.probeType == 2 || this.probeType == 3){

     //监听滚动
     this.scroll.on('scroll',(position)=>{
     //子组件向父组件传递数据  
     this.$emit('scroll' , position)
   })

  }

  if(this.pullupload){

    //监听上拉
    this.scroll.on('pullingUp',()=>{
    this.$emit('pullingUp')
  })


  }

  },



  // 封装一个返回顶部的方法。
  methods:{

   totop(x , y ,time=300){
    // 其实还是利用的是BScroll对象的方法，我们这是就是对其进行了封装。
    this.scroll && this.scroll.scrollTo(x,y,time)

   },

    finishPullUp(){

    //这样做的目的是保证你要有this.scroll这个东西，因为有可能我们要使用这个方法时，还没有这个对象。
    this.scroll && this.scroll.finishPullUp()

   },

   refresh(){
    //其实我们这样就可以，因为只要有this.scroll,也就是我们上面new BScroll出来的对象，那一定会有refresh() ...等这些方法。
    this.scroll &&  this.scroll.refresh()
   },

   getScrollY(){

    return this.scroll ? this.scroll.y : 0

   },

  }

}
</script>

<style scoped>



</style>