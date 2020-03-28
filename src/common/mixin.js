import { decounde } from './utils'

export const itmeListenerMixin={

  data() { 

    return {

      itemimageload: null

    }

  },

  mounted() { 

    const refresh = debouce(this.$refs.scroll.refresh, 200)
    
    this.itemimageload = () => { 

      refresh()

    }

    this.$bus.$on('itemimageload', this.itemimageload)
 
  }

}


// 把回到顶部以mixin的方式进行封装。
import BackTop from "@/components/content/backTop/BackTop";
export const backTopMixin = {

  components: {

    BackTop

  },

  data() { 

    return {
      showbacktop: false,

    }
  },

  methods: {
        // 点击回到顶部的方法。
        backtopclick(){
          this.$refs.detailscroll.totop(0,0,1000)
        },
      
        listenShow(position){
          //负负得正  
          this.showbacktop = (-position.y > 2000)
     
         },
  }

}