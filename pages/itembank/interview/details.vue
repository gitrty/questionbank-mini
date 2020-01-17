<template>
  <view class="details">
    <view class="details-logo"><image :src="interInfo.cover" mode=""></image></view>
    <view class="details-subject">
      <view class="details-title">{{ interInfo.title }}</view>
      <view class="details-con">{{ interInfo.abstract }}</view>
      <view class="details-introduce">
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">题型</view>
          <view class="details-introduce-col-r">
            <text v-if="interInfo.radioCount">单选{{ interInfo.radioCount }}道</text>
            <text v-if="interInfo.multipleCount">多选{{ interInfo.multipleCount }}道</text>
            <text v-if="interInfo.judgeCount">判断{{ interInfo.judgeCount }}道</text>
            <text v-if="interInfo.shortAnswerCount">简答{{ interInfo.shortAnswerCount }}道</text>
          </view>
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
          <view class="details-introduce-col-r"><toyoRate :value="'4'" :checkValue="interInfo.difficulty"></toyoRate></view>
        </view>
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">热度</view>
          <view class="details-introduce-col-r">{{ interInfo.hot }}</view>
        </view>
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">分值</view>
          <view class="details-introduce-col-r">{{ interInfo.score || '' }}分</view>
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
      <view class="details-bottom-con">
        <view class="">1、本套试卷来源于各网络渠道，仅限GPer注册用户使用，除非经特别声明，GPer不拥有该资料版权，亦不承担任何法律责任。</view>
        <view class="">2、未经GPer或作者的同意不得随意转载，否则构成侵权，本网站或作者保留诉诸法律的权利。</view>
        <view class="">
          3、如发现本网站载有侵犯您著作权的侵权信息，请
          <button class="feedback" open-type="contact">点击发送</button>
          相关信息至GPer。
        </view>
      </view>
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
      <view class="details-start" @tap="redirectTo('/pages/itembank/examination/examination', { id: interInfo.id })">开始考试</view>
    </view>
  </view>
</template>

<script>
import { itembank } from '@api';
const { viewSuitById } = itembank;
export default {
  data() {
    return {
      interInfo: {}
    };
  },
  methods: {},
  async onLoad(e) {
    const data = await viewSuitById({ id: e.id });
    this.interInfo = data;
    this.$store.state.viewTitle = data.title;
  }
};
</script>

<style lang="less" scoped>
.feedback {
  color: #2d98f2;
}
button::after{
  content: none;
}
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
          > text {
            margin-right: 10rpx;
          }
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
      > view {
        margin-bottom: 10rpx;
        > text {
          color: #2d98f2;
        }
        > button {
          position: static;
          display: inline-block;
          padding: 0;
          overflow:visible ;
          line-height: 28rpx;
          font-size: 28rpx;
          border: none;
          color: #2d98f2;
        }
      }
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
    .details-start {
      width: 386rpx;
      height: 72rpx;
      background-color: #2764dd;
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
