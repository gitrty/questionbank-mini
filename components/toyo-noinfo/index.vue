<template>
  <view class="no-info">
    <image :src="imgSrc" mode=""></image>
    <view class="no-txt">
      暂时没有相关{{type}}
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      imgSrc: {
        type: String,
        default: '/static/no-footer.png'
      },
      type: {
        type: String,
        default: '信息'
      }
    }
  }
</script>

<style lang="less" scoped>
  .no-info {
    width: 100%;
    height: 100%;
    margin-top: 298rpx;
    text-align: center;

    >image {
      width: 160rpx;
      height: 160rpx;
    }

    .no-txt {
      font-size: 30rpx;
      color: #999;
    }
  }
</style>
