<template>
  <div class="goods-item">
    <img :src="goodsitem.show.img" alt />
    <!-- info:信息 -->
    <div class="goods-info">
      <p class="title">{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: {
      type: Object,

      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0px;
  right: 0px;
  overflow: hidden;
  text-align: center;
}

.goods-info .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~@/assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>