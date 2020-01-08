<template>
  <view class="toyo-rate">
    <view class="ratex" v-for="index of value" :key="index">
      <image src="../../static/YDUI-s.png" mode="" v-if="index<checkValue"></image>
      <image src="../../static/YDUI-k.png" mode="" v-else></image>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      // 星星总数
      value: {
        type: Number,
        default: 4
      },
      // 选中星星数
      checkValue:{
        type: Number,
        default: 3
      }
    }
  }
</script>

<style lang="less" scoped>
  .toyo-rate{
    display: flex;
  }
  .ratex{
    >image{
      margin-right: 16rpx;
      width: 28rpx;
      height: 28rpx;
    }
  }
</style>
