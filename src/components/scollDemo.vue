<template>
    <div class="demo">
      <virtual-list ref="scroller" :items="items" uniqueKey="id" :iscrollOptions="options" :variable="variable" :infinite="true" :pulldown="false" @loadMore="getMoreData" @pullRefresh="refreshData">
        <template slot="content" slot-scope="props">
          <div class="demo-item">
            <span>
              {{props.item.text}}
            </span>
          </div>
        </template>
      </virtual-list>
    </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      items: [],
      options: {
        scrollbars: true,
        interactiveScrollbars: true,
        probeType: 3,
        mouseWheel: true,
        mouseWheelSpeed: 1
      },
      variable: false
    }
  },
  created () {
    let list = []
    for (let i = 0; i < 100; i++) {
      list.push({
        text: i,
        id: i,
        height: Math.max(Math.floor(Math.random() * 50), 20)
      })
    }
    this.items = list
  },
  methods: {
    getMoreData ($stateChange) {
      if (this.items.length > 1000) {
        $stateChange('complete')
      } else {
        setTimeout(() => {
          let length = this.items.length
          for (let i = length; i < length + 20; i++) {
            this.items.push({
              text: i,
              id: i,
              height: Math.max(Math.floor(Math.random() * 50), 20)
            })
          }
          $stateChange('loaded')
        }, 1500)
      }
    },
    refreshData ($pullStateChange) {
      setTimeout(() => {
        this.items.splice(0)
        for (let i = 0; i < 50; i++) {
          this.items.push({
            text: i,
            id: i,
            height: Math.max(Math.floor(Math.random() * 50), 20)
          })
        }
        $pullStateChange('complete')
      }, 1500)
    }
  }}
</script>
<style lang="postcss">
  .demo {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 10px;
    right: 10px;
  }
</style>