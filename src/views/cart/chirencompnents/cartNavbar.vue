<template>
    <div class="cartnavbar">

       <cartnav class="navbar">
      <div slot="center">购物车({{length}})</div>
       </cartnav>

    </div>
</template>

<script>

import cartnav from '@/components/common/navbar/NavBar'

import {mapGetters} from "vuex";

export default {

  components:{

    cartnav

  },

   computed:{

    ...mapGetters({

      length:'cartLength',

    })

  }

}
</script>

<style scoped>

.navbar{

  background-color: var(--color-ting);
  color: #fff;
  z-index: 30;

}

</style>