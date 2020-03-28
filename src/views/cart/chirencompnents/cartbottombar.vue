<template>
  <div class="cartbottombar">

    <div class="check-content">
    <bottombar class="botton" :isactive="ischeckAll" @click.native="all"></bottombar>
    </div>
    <span class="checked">全选</span>

    <div class="num">
      <span>合计：{{totalPrice}}</span>
    </div>

    <div class="js" @click="calcclick">
      <span>去计算{{checkLength}}</span>
    </div>

  </div>
</template>

<script>

import bottombar from "./checkbottom"

export default {

  components:{

    bottombar

  },

  computed:{

    totalPrice(){

     return "¥" + this.$store.state.cartList.filter(item => {

       return item.checked === true

     }).reduce((preValue,item)=>{

       //第一次这个“上一个”是没有的，所以就是这个第一个的价格和数量。  
       return preValue + item.price * item.count

     },0).toFixed(2)

    },

    checkLength(){

      return this.$store.state.cartList.filter(item => item.checked).length

    },

    ischeckAll(){
      
      if(this.$store.state.cartList.length === 0){

         return false

      }else{

         //如果找到了里面有未被选中的，那全选按钮要是未被选中状态。即你要返回false
         return  !(this.$store.state.cartList.filter(item => !item.checked).length)
        
      }
     

    },

   

  },

    methods:{

       all(){

         //如果全部都是选中状态的时候,你点击,那么全部都设置为不选中。  
         if(this.ischeckAll){
           this.$store.state.cartList.forEach(item => item.checked = false)
         }else{
          //如果有没有被选中的,那么全部都选中。
           this.$store.state.cartList.forEach(item => item.checked = true)
         }

       },

        calcclick(){

        // 如果你在购物车中没有选中一件商品时，就点击结算按钮。
        const nan = this.$store.state.cartList.filter(item => item.checked === true).length === 0
        // this.ischeckAll为true是，代表的是全部购物车中商品都被选中=
        if(nan){

        this.$toast.show("请选择要购买的商品",2000)

        }

    }

    }

}
</script>

<style scoped>
.cartbottombar{

  height: 40px;
  background-color: #eee;
  display: flex;
  position: relative;
  bottom:-533px;
  align-items: center;

}

.check-content{

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 28px;
  margin-left: 10px;

}

.botton{

  bottom: 30px;

}

.checked{

  margin-left: 6px;

}

.num{
  
  margin-left: 20px;

}

.js{

  height: 40px;
  width: 100px;
  background-color: #ff4400;
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
}

.js span{

  line-height: 40px;
  text-align: center;
  color: white;
  

}
</style>