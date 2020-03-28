<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">

    <div class="info-title">{{goods.title}}</div>

    <div class="info-price">
     <span class="n-price">{{goods.newPrice}}</span>
     <span class="o-price">{{goods.oldPrice}}</span>
     <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>

    <div class="info-other">
     <span>{{goods.columns[0]}}</span>
     <span>{{goods.columns[1]}}</span>
     <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

     <div class="border-bottom"></div>

    <div class="info-service">
    <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
     <img :src="goods.services[index-1].icon" alt="">
     <span>{{goods.services[index-1].name}}</span>
    </span>
    </div>

   

  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>

.base-info{

  margin-top: 15px;
  padding: 0 8px;
  color: rgb(134, 130, 130);
  padding-bottom: 30px;
  border-bottom: 5px solid rgba(0, 0, 0, .1);
  clear: both;

}

.border-bottom{
   width: 99.9%;
   height:1px;
   background-color: rgb(195, 188, 188);
   margin-top: 7px;
}

.info-title{

  font-size: 18px;
  font-weight: bold;
  color:#000;
  
}

.info-price{

  margin-top: 10px;
  margin-bottom: 20px;
  position: relative;

}

.info-price .n-price{

   font-size: 24px;
   color: var(--color-high-text);
   margin-right: 10px;

}

.info-price .o-price{

   font-size: 13px;
   text-decoration: line-through;
   margin-right: 6px;

}

.discount{

  background-color: rgb(235, 83, 98);
  padding:4px 6px;
  border-radius: 15px;
  color: #ffffff;
  font-size: 12px;
  position:absolute;
  bottom: 10px;

}

.info-other{

   display: flex;
   text-align: center;

}

.info-other span{

  flex: 1;


}

 .info-service{

  display: flex;
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-left: -12px;

} 

 .info-service img{

  width: 15px;
  height: 15px;

} 

.info-service-item{

   flex: 1;

} 

</style>