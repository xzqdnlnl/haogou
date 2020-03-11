<template>
  <div class="tab-bar-item" @click="itemClick" >

    <!-- 里面东西不想写死，所以使用插槽,这里使用的是具名插槽 -->
    <!-- 插槽外套个div，防止替换时出现问题，就是防止替换这个插槽的东西把插槽里面的一些属性也给替换掉了 -->
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <!-- 我们知道如果我们自己没有设置字体颜色，那它会继承父亲的颜色 -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    
  </div>
</template>

<script>
export default {
  
  // 把你要跳转到哪里这个信息数据传递过来。
  props:{

    path:String,

    activeColor:{

      type:String,


    }

  },


  methods:{

    itemClick(){

      this.$router.push(this.path)
      
    }

  },

  computed:{

    isActive(){

       // $route:就是表示处于活跃状态的那个路由,在这里就是下面那四个那个被选中那个就是处于活跃状态
       // 处于活跃状态的路由的path是不是等于我们这个的path ,其实就是判断哪个被点击了。
      return this.$route.path == this.path
    },

    activeStyle(){

      // 判读是否被选中
      return this.isActive ? {color:this.activeColor} : {}

    }

  }

}
</script>

<style>

 .tab-bar-item{

     flex: 1;
     text-align: center;
     height: 49px;
     font-size: 14px;
   }
   
  .tab-bar-item img{

    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;

  }

</style>