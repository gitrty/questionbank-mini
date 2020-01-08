<template>
  <view>
    <!-- 选择公司 -->
    <view class="interv-top">
      <view class="interv-top-gs"><wuc-tab :tab-list="companyList"></wuc-tab></view>
      <view class="interv-top-hr"></view>
      <view class="interv-top-select" @tap="jump('/pages/itembank/interview/selectedtab')">
        <image src="../../../static/select.png" mode=""></image>
        <view class="select-num">{{ selectNum }}</view>
      </view>
    </view>
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
</template>

<script>
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
export default {
  components: {
    WucTab
  },
  data() {
    return {
      companyList: [],
      selectNum: 99
    };
  },
  methods: {
    watchStore() {
      this.companyList = this.$store.state.companyList;
      this.selectNum = this.$store.state.selectNum;
    }
  },
  onShow() {
    this.watchStore();
  }
};
</script>

<style lang="less" scoped>
.interv-top-hr {
  position: absolute;
  top: 50%;
  right: 103rpx;
  margin-top: -40rpx;
  width: 2rpx;
  height: 80rpx;
  background-color: #707070;
  opacity: 0.4;
  box-shadow: -2rpx 0 5rpx #000;
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

.interv-top {
  position: relative;
  height: 128rpx;
  border-bottom: 1rpx solid #e8e8e8;
  padding-top: 24rpx;

  .interv-top-select {
    width: 104rpx;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    line-height: 128rpx;

    > image {
      width: 40rpx;
      height: 28rpx;
    }

    .select-num {
      position: absolute;
      top: 24rpx;
      left: 60rpx;
      width: 32rpx;
      height: 32rpx;
      font-size: 26rpx;
      background-color: #e9effc;
      color: #2764dd;
      line-height: 37rpx;
      border-radius: 50%;
    }
  }

  .interv-top-gs {
    width: 645rpx;
    height: 80rpx;
    overflow: hidden;
    padding-top: 8rpx;
  }
}

.swiper {
  height: 140upx;
}

.cu-bar {
  display: flex;
  position: relative;
  align-items: center;
  min-height: 100upx;
  justify-content: space-between;
}

.cu-bar .action {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  max-width: 100%;
  background-color: #ffffff;
}

.cu-bar .action:first-child {
  margin-left: 30upx;
  font-size: 30upx;
}

.solid,
.solid-bottom {
  position: relative;
}

.solid::after,
.solid-bottom::after {
  content: ' ';
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;
  transform: scale(0.5);
  transform-origin: 0 0;
  pointer-events: none;
  box-sizing: border-box;
}

.text-center {
  text-align: center;
}
</style>
