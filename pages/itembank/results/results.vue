<template>
  <view class="results">
    <!-- 考试结果 -->
    <view :class="['results-card', isInterView ? 'tgold' : 'tred']">
      <image :src="isInterView ? '/static/pf-ks.png' : '/static/pf-lx.png'" mode="" class="resutls-bg"></image>
      <view class="res-num">50</view>
      <view class="res-txt">本次得分</view>
      <view class="res-tip">{{ true ? '真厉害，继续加油！' : '不要灰心，继续加油！' }}</view>
      <view class="res-con">
        <view>
          <image src="../../../static/res-1.png" mode=""></image>
          <text>8/20</text>
          <text>正确题数</text>
        </view>
        <view>
          <image src="../../../static/res-2.png" mode=""></image>
          <text>100</text>
          <text>考卷分值</text>
        </view>
        <view>
          <image src="../../../static/res-3.png" mode=""></image>
          <text>40分40秒</text>
          <text>考试用时</text>
        </view>
      </view>
      <view class="res-btns">
        <view class="">重考一次</view>
        <view :class="[isInterView ? 'fx-ms' : 'fx-lx']">分享得分</view>
        <view :class="[isInterView ? 'jx-ms' : 'jx-lx']" @tap="jump('/pages/itembank/analysis/analysis')">查看解析</view>
      </view>
    </view>
    <!-- 相关推荐 -->
    <view class="recommend">
      <view class="recommend-title">已为你推荐相关面试题</view>
      <!-- 面试题 -->
      <view class="interv-con">
        <!-- 数据区域 -->
        <view class="interv-con-card fl" v-for="index of 7" :key="index" @tap="jump('/pages/itembank/interview/details')">
          <view class="inter-img">
            <image src="/static/timg.png" mode=""></image>
            <view class="inter-mask">
              <view class="inter-mask-hot">
                <image src="/static/hot.png" mode="" class="heat"></image>
                <text>123热度</text>
              </view>
              <view class="inter-mask-qnum">
                <image src="/static/pnum.png" mode="" class="qnum"></image>
                <text>共456题</text>
              </view>
            </view>
          </view>
          <view class="inter-txt">
            <view class="inter-txt-title">咕泡第一节答题大赛咕泡第一节答题大赛</view>
            <view class="inter-rate"><toyoRate :value="'5'" :checkValue="'1'"></toyoRate></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isInterView: true // true:大厂面试  false：专题练习
    };
  }
};
</script>

<style lang="less">
.results {
  background-color: #f4f4f4;
}
.recommend {
  margin-top: 16rpx;
  width: 100%;
  background-color: #fff;
  .recommend-title {
    padding: 32rpx 32rpx 0;
    font-size: 36rpx;
  }
}
.results-card {
  width: 100%;
  height: 954rpx;
  background-color: #fff;
  position: relative;
  .resutls-bg {
    position: absolute;
    z-index: 1;
    top: 24rpx;
    left: 32rpx;
    width: 686rpx;
    height: 890rpx;
  }
  .res-tip,
  .res-num,
  .res-txt {
    width: 100%;
    position: absolute;
    z-index: 2;
    text-align: center;
  }
  .res-num {
    top: 125rpx;
    font-size: 120rpx;
  }
  .res-txt {
    top: 276rpx;
    font-size: 21rpx;
  }
  .res-tip {
    font-size: 48rpx;
    color: #fff;
    top: 420rpx;
  }
  .res-btns {
    width: 686rpx;
    height: 72rpx;
    position: absolute;
    left: 50%;
    margin-left: -343rpx;
    top: 790rpx;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    padding: 0 33rpx;
    > view {
      width: 186rpx;
      height: 72rpx;
      line-height: 70rpx;
      text-align: center;
      border-radius: 8rpx;
      font-size: 30rpx;
      &:nth-of-type(1) {
        border: 1rpx solid #cfccbc;
        color: #cfccbc;
      }
    }
    .fx-ms {
      border: 1rpx solid #fcd901;
      color: #fcd901;
    }
    .jx-ms {
      background-color: #fcd901;
      color: #fff;
    }
    .fx-lx {
      border: 1rpx solid #f45834;
      color: #f45834;
    }
    .jx-lx {
      background-color: #f45834;
      color: #fff;
    }
  }
  .res-con {
    width: 686rpx;
    height: 152rpx;
    position: absolute;
    left: 50%;
    margin-left: -343rpx;
    top: 524rpx;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    padding: 0 28rpx;
    > view {
      width: 160rpx;
      height: 100%;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      &:nth-of-type(1) {
        > image {
          width: 35rpx;
          height: 38rpx;
        }
      }
      &:nth-of-type(2) {
        > image {
          width: 40rpx;
          height: 37rpx;
        }
      }
      &:nth-of-type(3) {
        > image {
          width: 38rpx;
          height: 38rpx;
        }
      }
      > text:nth-of-type(1) {
        font-size: 32rpx;
        margin-top: 14rpx;
      }
      > text:nth-of-type(2) {
        font-size: 30rpx;
      }
    }
  }
}
.interv-con {
  padding: 32rpx;
  .interv-con-card:nth-of-type(odd) {
    margin-right: 32rpx;
  }
  .inter-img {
    width: 327rpx;
    height: 177rpx;
    position: relative;

    > image {
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
    }

    .inter-mask {
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: 2;
      background-color: #b2b2b2;
      color: #fff;
      height: 40rpx;
      font-size: 26rpx;
      display: flex;

      > view {
        flex: 1;
        text-align: center;
        line-height: 40rpx;

        > image {
          margin-right: 10rpx;
        }
      }

      .heat {
        width: 24rpx;
        height: 24rpx;
      }

      .qnum {
        width: 18rpx;
        height: 20rpx;
      }
    }
  }
  .inter-txt {
    width: 327rpx;

    .inter-txt-title {
      margin-top: 19rpx;
      color: #333;
      font-size: 30rpx;
    }

    .inter-rate {
      margin-top: 16rpx;
    }
  }
}
</style>
