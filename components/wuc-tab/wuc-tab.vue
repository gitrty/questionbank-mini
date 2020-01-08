<template>
  <scroll-view class="wuc-tab" :class="tabClass" scroll-with-animation scroll-x :scroll-left="scrollLeft">
    <div v-if="!textFlex">
      <div class="wuc-tab-item" v-for="(item, index) in tabList" :key="index" :class="[item.cur ? selectClass + ' cur' : '']" @tap="tabSelect(index, $event)">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </scroll-view>
</template>
<script>
export default {
  name: 'wuc-tab',
  data() {
    return {};
  },
  props: {
    tabList: {
      type: Array,
      default() {
        return [];
      }
    }
    // tabClass: {
    //   type: String,
    //   default() {
    //     return '';
    //   }
    // },
    // tabStyle: {
    //   type: String,
    //   default() {
    //     return '';
    //   }
    // },
    // selectClass: {
    //   type: String,
    //   default() {
    //     return 'text-blue';
    //   }
    // }
  },
  methods: {
    tabSelect(index, e) {
      this.$emit('change', index);
    }
  },
  computed: {
    scrollLeft() {
      return (this.tabCur - 1) * 60;
    }
  }
};
</script>
<style scoped lang="less">
div,
scroll-view,
swiper {
  box-sizing: border-box;
}
.wuc-tab {
  white-space: nowrap;
}
.wuc-tab-item {
  border-radius: 6rpx;
  height: 64rpx;
  display: inline-block;
  line-height: 64rpx;
  padding: 0 17rpx;
  margin: 0 16rpx;
  border: 1rpx solid #e8e8e8;
  font-size: 28rpx;
  color: #666666;
  &:nth-last-of-type(1) {
    margin-right: 32rpx;
  }
  &:nth-of-type(1) {
    margin-left: 32rpx;
  }
}

.wuc-tab-item.cur {
  color: #2764dd;
  background-color: #e9effc;
  border: 1rpx solid #e9effc;
}
.flex {
  display: flex;
}
</style>
