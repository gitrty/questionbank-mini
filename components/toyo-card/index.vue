<template>
  <view class="toyo-card">
    <view class="card-content">
      <!-- 次数 -->
      <view class="frequency">
        <text>111</text>
        <text>{{type}}次数</text>
      </view>
      <!-- 正确题数 -->
      <view class="success-num">
        <text>111</text>
        <text>正确题数</text>
      </view>
      <!-- 综合得分 -->
      <view class="fraction">
        <text>111</text>
        <text>综合得分</text>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default () {
          return {

          };
        }
      },
      type: {
        type: String,
        default: '面试'
      }
    }
  }
</script>

<style lang="less" scoped>
  .card-content {
    width: 100%;
    position: absolute;
    z-index: 1;
    display: flex;

    >view {
      >text:nth-of-type(1) {
        margin-top: 82rpx;
      }
    }

    >view {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      line-height: 48rpx;

      >text:nth-of-type(1) {
        font-size: 36rpx;
      }

      >text:nth-of-type(2) {
        font-size: 28rpx;
      }
    }
  }
</style>
