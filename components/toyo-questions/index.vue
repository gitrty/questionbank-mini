<template>
  <view class="">
    <view class="interview" v-for="(item,index) in questionsList" :key="index">
      <view class="inter-con">
        <!-- 左边 -->
        <view class="inter-img">
          <image src="../../static/timg.png" mode=""></image>
          <view class="inter-mask">
            <view class="inter-mask-hot">
              <image src="../../static/hot.png" mode="" class="heat"></image>
              <text>123热度</text>
            </view>
            <view class="inter-mask-qnum">
              <image src="../../static/pnum.png" mode="" class="qnum"></image>
              <text>共456题</text>
            </view>
          </view>
        </view>
        <!-- 右边 -->
        <view class="inter-txt">
          <view class="inter-txt-title">
            咕泡第一节答题大赛咕泡第一节答题大赛
          </view>
          <view class="inter-rate">
            <toyoRate :value="'5'" :checkValue="'1'"></toyoRate>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      questionsList: {
        type: Array,
        default () {
          return [1, 2, 3,4];
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .interview {
    margin-top: 40rpx;
    padding: 0 32rpx;
  }

  .inter-con {
    height: 177rpx;
    width: 100%;
    display: flex;

    .inter-img {
      width: 327rpx;
      height: 177rpx;
      position: relative;

      >image {
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
        background-color: #B2B2B2;
        color: #fff;
        height: 40rpx;
        font-size: 26rpx;
        display: flex;

        >view {
          flex: 1;
          text-align: center;
          line-height: 40rpx;

          >image {
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
      width: 358rpx;

      .inter-txt-title {
        margin-top: 8rpx;
        margin-left: 24rpx;
        color: #333;
        font-size: 30rpx;
      }

      .inter-rate {
        margin-top: 16rpx;
        margin-left: 24rpx;
      }
    }
  }
</style>
