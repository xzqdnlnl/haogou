<template>
  <div class="tabcontrol">
    <div
      v-for="(item,index) in titles"
      :key="item"
      class="tabcontrol-item"
      :class="{active:index === currentIndex}"
      @click="clickactive(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  data() {
    return {
      currentIndex: 0
    };
  },

  methods: {
    clickactive(index) {
      this.currentIndex = index;
      // 子向父传递数据，通过向外‘发射’一个事件，把要传递的数据当成参数，然后父组件监听这个事件
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style>
.tabcontrol {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  z-index: 1;
  background-color: #ffffff;
}

.tabcontrol-item {
  flex: 1;
}

.tabcontrol-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-ting);
}
</style>