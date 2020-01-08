<template>
  <view>
    <view class="share" v-if="shareList.length">
      <view class="share-top">
        已分享考题给 {{shareList.length}} 位好友
      </view>
      <view class="share-con" v-for="(item,index) in shareList" :key="index">
        <image src="../../../static/1.png" class="share-head" mode=""></image>
        <view class="share-username clearfix">
          <text class="fl">用户名</text>
          <text class="fr">1个月前</text>
        </view>
        <view class="share-info">
          <text>接收面试题</text>
          <text>【下面关于目前嵌入式最小硬件系统的叙述中,错误的是?】</text>
        </view>
      </view>
    </view>
    <!-- 无分享 -->
    <view class="no-quest" v-if="!shareList.length">
       <toyoNoinfo :imgSrc="'/static/no-quest.png'" :type="'分享'"></toyoNoinfo>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        shareList: [1,2]   // 分享
      };
    }
  }
</script>

<style lang="less" scoped>
  .share-top {
    height: 92rpx;
    width: 100%;
    background-color: #F4F4F4;
    padding: 0 32rpx;
    line-height: 92rpx;
    font-size: 30rpx;
    color: #333;
  }

  .share-con {
    position: relative;
    padding: 50rpx 32rpx 0;

    .share-head {
      position: absolute;
      top: 40rpx;
      width: 64rpx;
      height: 64rpx;
      border-radius: 50%;
    }

    .share-username {
      margin-bottom: 36rpx;

      >text:nth-of-type(1) {
        margin-left: 80rpx;
        font-size: 30rpx;
        color: #333;
      }

      >text:nth-of-type(2) {
        font-size: 28rpx;
        color: #999;
      }
    }

    .share-info {
      font-size: 30rpx;
      padding-bottom: 24rpx;
      border-bottom: 1px solid #E8E8E8;

      >text:nth-of-type(1) {
        color: #666;
      }

      >text:nth-of-type(2) {
        color: #333;
      }
    }
  }
  
  .no-quest{
    padding-top: 88rpx;
  }
</style>
