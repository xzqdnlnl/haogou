<template>
   <div class="toast" v-show="isShow">
    {{message}}
   </div>
</template>

<script>
export default {

  data(){

    return {

     message:'',
     
     isShow : false

    }

  },

  methods:{

   show(message,duration){

     this.isShow = true;

     this.message = message

      setTimeout(()=>{

        this.isShow = false;
        this.message = ''

      },duration)

   }

  }

}
</script>

<style scoped>

.toast{

  z-index: 100;
  padding: 8px 10px;
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #ffffff;
  background-color: rgba(0, 0, 0, .75);

}

</style>