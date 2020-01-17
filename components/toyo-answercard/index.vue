<template>
  <view class="">
    <view class="bigFactory" v-for="(item, index) in bigFactoryList" :key="index">
      <view class="bigFactory-top">
        <view class="bigFactory-top-title">
          <image src="/static/gplogo.png" mode=""></image>
          <text>{{ item.title }}</text>
        </view>
        <!-- <view class="bigFactory-top-date">1个月前</view> -->
      </view>
      <view class="bigFactory-mid">
        <view class="bigFactory-mid-success">
          <view class="bigFactory-success-num">{{ item.result.correctCount }}/{{ item.result.allCount }}</view>
          <view class="bigFactory-success-txt">正确题数</view>
        </view>
        <view class="bigFactory-mid-time">
          <view class="bigFactory-success-num">{{ item.duration || '' | sToMs }}</view>
          <view class="bigFactory-success-txt">{{ type == 'practice' ? '练习用时' : '面试用时' }}</view>
        </view>
        <view class="bigFactory-mid-score">
          <view class="bigFactory-success-num">{{ item.result.myScore }}</view>
          <view class="bigFactory-success-txt">{{ type == 'practice' ? '练习得分' : '考试得分' }}</view>
        </view>
      </view>
      <view class="bigFactory-bottom">
        <view class="bigFactory-bottom-l" @tap="again(index)">
          <image src="/static/ckyb.png" mode=""></image>
          <text>{{ type == 'practice' ? '重练一遍' : '重考一遍' }}</text>
        </view>
        <view class="bigFactory-bottom-r" @tap="jump('/pages/itembank/analysis/analysis', { signboard: item.signboard })">
          <image src="/static/lookjx.png" mode=""></image>
          <text>查看解析</text>
        </view>
        <view class="bigFactory-hr"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    bigFactoryList: {
      type: Array,
      default() {
        return [];
      }
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 重考一遍
    again(index) {
      this.$emit('again', index);
    }
  }
};
</script>

<style lang="less" scoped>
.bigFactory {
  height: 338rpx;
  margin-bottom: 16rpx;

  > view {
    display: flex;
  }

  .bigFactory-top {
    height: 103rpx;
    padding: 0 32rpx;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

    .bigFactory-top-title {
      font-size: 32rpx;
      color: #333;

      > image {
        width: 36rpx;
        height: 36rpx;
        margin-right: 16rpx;
        margin-bottom: -4rpx;
      }
    }

    .bigFactory-top-date {
      font-size: 26rpx;
      color: #999;
    }
  }

  .bigFactory-mid {
    height: 126rpx;
    background-color: #fafafa;
    justify-content: space-between;
    align-items: center;
    padding: 0 52rpx;
    text-align: center;

    .bigFactory-success-num {
      margin-bottom: 8rpx;
      font-size: 32rpx;
      color: #333;
    }

    .bigFactory-success-txt {
      font-size: 28rpx;
      color: #999;
    }
  }

  .bigFactory-bottom {
    position: relative;
    height: 109rpx;
    font-size: 30rpx;
    color: #333;
    align-items: center;
    text-align: center;
    background-color: #fff;

    > view {
      flex: 1;

      > image {
        margin-right: 7rpx;
        margin-bottom: -2rpx;
      }

      &:nth-of-type(1) {
        > image {
          width: 30rpx;
          height: 30rpx;
        }
      }

      &:nth-of-type(2) {
        > image {
          width: 22rpx;
          height: 30rpx;
        }
      }
    }

    .bigFactory-hr {
      position: absolute;
      width: 2rpx;
      height: 56rpx;
      background-color: #e8e8e8;
      top: 50%;
      left: 50%;
      margin-left: -1rpx;
      margin-top: -28rpx;
    }
  }
}
</style>
