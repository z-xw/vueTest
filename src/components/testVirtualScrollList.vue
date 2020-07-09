<template>
  <div class="scrollList">
    <VirtualList
        ref="vlist"
        height="400px"
        :list-data="data"
        :estimated-item-size="100"
        :top-load-more="true"
        :top-method="update"
        v-slot="slotProps"
    >
        <div class="context">
            {{ slotProps.item.value }}
        </div>
    </VirtualList>

        
  </div>
</template>

<script>
// import VirtualList from 'vue-virtual-scroll-list'
// import Item from './item'

import VirtualList from 'vue-virtual-listview'
export default {
    components: {
      VirtualList  
    },
    data() {
        let i = 0
        let items = []
        while(i< 1000) {
                items.push({
                        uid: `unique_+${i}`, text: `abc+${i}`,
                })
                ++i
        }
        
        return {
            items,
            data: [],
        }
    },
    methods: {
        update(){
            this.data = this.items;
            this.$refs.vlist.onBottomLoaded();
        },
    }
}
</script>

<style>
.scrollList{
    height: 400px;
}
.context{
    height: 100px;
    font-size:16px;
}
</style>