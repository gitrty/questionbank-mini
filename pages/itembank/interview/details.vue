<template>
  <view class="details">
    <view class="details-logo"><image src="/static/timg.png" mode=""></image></view>
    <view class="details-subject">
      <view class="details-title">咕泡第一节答题大赛</view>
      <view class="details-con">简介内容简介内容简介内容简介内容简介内容简 介内容简介内容简介内容简介内容</view>
      <view class="details-introduce">
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">题型</view>
          <view class="details-introduce-col-r">单选10道</view>
        </view>
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">时间</view>
          <view class="details-introduce-col-r">60分钟</view>
        </view>
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">难度</view>
          <view class="details-introduce-col-r"><toyoRate :value="'4'" :checkValue="'4'"></toyoRate></view>
        </view>
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">热度</view>
          <view class="details-introduce-col-r">387</view>
        </view>
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">分值</view>
          <view class="details-introduce-col-r">100分</view>
        </view>
      </view>
    </view>
    <view class="details-bottom">
      <view class="details-bottom-head">
        <view class="details-bottom-icon">
          <view class="details-bottom-icon-t"></view>
          <view class="details-bottom-icon-b"></view>
        </view>
        <view class="details-bottom-tip">答前须知</view>
      </view>
      <view class="details-bottom-con">相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容</view>
    </view>
    <view class="details-fixed">
      <view class="details-fixed-fx">
        <image src="../../../static/fx.png" mode=""></image>
        <view class="">分享</view>
      </view>
      <view class="details-fixed-sc">
        <image src="../../../static/sc.png" mode=""></image>
        <view class="">收藏</view>
      </view>
      <view class="details-start" @tap="redirectTo('/pages/itembank/examination/examination')">
        开始考试
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.details {
  .details-logo {
    width: 100%;
    height: 406rpx;
    > image {
      width: 100%;
      height: 100%;
    }
  }
  .details-subject {
    position: relative;
    padding: 38rpx 32rpx 0;
    height: 400rpx;
    .details-title {
      font-size: 40rpx;
      color: #333;
    }
    .details-con {
      font-size: 32rpx;
      color: #666;
      margin-top: 7rpx;
    }
    .details-introduce {
      background-color: #fff;
      position: absolute;
      left: 50%;
      bottom: -174rpx;
      margin-left: -335rpx;
      width: 670rpx;
      height: 348rpx;
      border-radius: 16rpx;
      box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.06);
      padding: 26rpx 25rpx;
      .details-introduce-col {
        margin-bottom: 24rpx;
        font-size: 28rpx;
        > view {
          display: inline-block;
        }
        .details-introduce-col-li {
          width: 12rpx;
          height: 12rpx;
          border-radius: 50%;
          border: 2rpx solid #999;
          vertical-align: middle;
          margin-right: 12rpx;
        }
        .details-introduce-col-l {
          color: #999;
          margin-right: 40rpx;
        }
        .details-introduce-col-r {
          color: #333;
        }
      }
    }
  }
  .details-bottom {
    padding: 208rpx 40rpx 100rpx;
    background-color: #f4f4f4;
    .details-bottom-head {
      display: flex;
    }
    .details-bottom-icon {
      height: 25rpx;
      width: 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 9rpx;
      margin-right: 7rpx;
      .details-bottom-icon-t {
        width: 20rpx;
        height: 20rpx;
        border-radius: 50%;
        border: 2rpx solid #999;
      }
      .details-bottom-icon-b {
        width: 16rpx;
        height: 2rpx;
        background-color: #999;
        border-radius: 2rpx;
      }
    }
    .details-bottom-tip {
      font-size: 28rpx;
      color: #999;
    }
    .details-bottom-con {
      margin-top: 12rpx;
      font-size: 28rpx;
      color: #999;
    }
  }
  .details-fixed {
    width: 100%;
    height: 94rpx;
    background-color: #fff;
    position: fixed;
    bottom: 0rpx;
    z-index: 10;
    display: flex;
    .details-fixed-fx {
      margin-left: 84rpx;
    }
    .details-fixed-sc {
      margin-left: 103rpx;
    }
    > view {
      margin-top: 14rpx;
      > image {
        width: 40rpx;
        height: 40rpx;
      }
      > view {
        font-size: 20rpx;
        color: #333;
      }
    }
    .details-start{
      width: 386rpx;
      height: 72rpx;
      background-color: #2764DD;
      font-size: 28rpx;
      line-height: 72rpx;
      text-align: center;
      color: #fff;
      border-radius: 6rpx;
      margin-left: 83rpx;
    }
  }
}
</style>
