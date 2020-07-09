<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div style="height:400px">
    <VirtualList :listData="items" :loadMore="loadMore" :distance="distance" :noData="noData" @update=update>
        <template  v-slot:item="slotProps">
           <div style="background:yellow">{{slotProps.item.value}}{{slotProps.index}}</div> 
        </template>
    </VirtualList> 
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import VirtualList from './components/VirtualList.vue'

import './test/demo1.js'
export default {
  name: 'App',
  components: {

    VirtualList
  },
  data() {
        let i = 0
        let items = []
        while(i< 20) {
                items.push({
                        uid: `unique_+${i}`, value: `abc+${i}`,
                })
                ++i
        }
    return {
      items,
      loadMore: true,
      noData: false,
      isLoaded: false,
      distance: 20
    }
  },
  mounted() {
    window.that = this
  },
  methods: {
    update() {
      console.log('update')
      setTimeout(()=>{
                let i = 0

                while(i< 20) {
                        this.items.unshift({
                                uid: `unique_+${i}`, value: `abc+${i}`,
                        })
                        ++i
                }
      }, 0)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
