<template>
  <view>
    <view class="user-info">
      <image src="../../static/mybg.png" mode="" class="bg"></image>
      <view class="user">
        <view class="">

        </view>
        <view class="user-top">
          <view class="user-head">
            <!-- 用户头像 -->
            <image src="../../static/logo.png" mode=""></image>
          </view>
          <!-- 用户名 -->
          <view class="user-name">
            用户名11111
          </view>
        </view>
      </view>
      <!-- 收藏、分享、足迹 -->
      <view class="user-grid">
        <view @tap="jump('./collection/collection')">
          <image src="../../static/mysc.png" mode=""></image>
          <view class="grid-top">
            100
          </view>
          <view class="grid-bottom">
            收藏
          </view>
        </view>
        <view @tap="jump('./share/share')">
          <image src="../../static/mgfx.png" mode=""></image>
          <view class="grid-top">
            100
          </view>
          <view class="grid-bottom">
            分享
          </view>
        </view>
        <view @tap="jump('./footprint/footprint')">
          <image src="../../static/myzj.png" mode=""></image>
          <view class="grid-top">
            111
          </view>
          <view class="grid-bottom" @tap="jump('./login/login')">
            足迹
          </view>
        </view>
      </view>
      <!-- 答题详情、在线反馈 -->
      <view class="answer">
        <view class="answer-detaile">
          <image src="../../static/tabbar/information.png" class="fl" mode=""></image>
          <text class="fl">答题详情</text>
          <image src="../../static/right.png" mode="" class="fr"></image>
        </view>
        <view class="feedback">
          <image src="../../static/msg2.png" mode="" class="fl"></image>
          <text class="fl">在线反馈</text>
          <image src="../../static/right.png" mode="" class="fr"></image>
        </view>
      </view>
      <!-- 下部分阴影 -->
      <view class="shadow "></view>
      <!-- 分割线 -->
      <view class="myhr"></view>

    </view>
    <!-- 退出账号 -->
    <view class="esc-login">
      <text>退出登录</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        isCanUse: false
      };
    },
    onLoad() {
      // console.info(getApp().globalData)
    }

  }
</script>

<style lang="less" scoped>
  .user-info {
    position: relative;
    width: 100%;
    height: 646rpx;

    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .user {
      padding-top: 1rpx;

      .user-top {
        width: 100%;
        height: 104rpx;
        margin-top: 136rpx;
        margin-bottom: 58rpx;
        display: flex;

        .user-head {
          width: 104rpx;
          height: 104rpx;
          margin-left: 33rpx;

          >image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        .user-name {
          font-family: 'SimHei';
          height: 104rpx;
          line-height: 104rpx;
          font-size: 38rpx;
          color: #fff;
          margin-left: 32rpx;
        }
      }
    }

    .user-grid {
      height: 166rpx;
      display: flex;
      justify-content: space-between;

      >view {
        // width: 58rpx;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        margin: 0 84rpx;
        color: #FFFFFF;
        font-family: 'SimHei';


        >image {
          width: 58rpx;
          height: 58rpx;
        }

        >view {
          text-align: center;
          font-size: 26rpx;
        }

        .grid-top {
          font-size: 40rpx;
        }

        .grid-bottom {
          font-size: 28rpx;
        }
      }
    }
  }

  .answer {
    position: absolute;
    width: 686rpx;
    height: 248rpx;
    background-color: #fff;
    border-radius: 16rpx;
    bottom: -124rpx;
    left: 50%;
    margin-left: -343rpx;
    display: flex;
    flex-direction: column;

    >view {
      position: relative;
      font-family: 'SimHei';
      flex-grow: 1;
      line-height: 124rpx;
      padding: 0 42rpx;
      color: #333;
      font-size: 30rpx;
      font-weight: 900;
      display: flex;
      align-items: center;
      >text{
      }
      image {
        width: 30rpx;
        height: 30rpx;
        margin-right: 18rpx;
      }
      image:nth-of-type(2){
          position: absolute;
          right: 40rpx;
      }
    }
  }

  .shadow {
    position: absolute;
    width: 686rpx;
    height: 124rpx;
    background-color: #fff;
    border-radius: 0 0 16rpx 16rpx;
    bottom: -124rpx;
    left: 50%;
    margin-left: -343rpx;
    box-shadow: 0 4rpx 20rpx #ccc;
    z-index: -1;
  }

  .myhr {
    position: absolute;
    width: 100%;
    height: 1rpx;
    border: 1rpx dashed #999;
    bottom: 0;
    z-index: 1;
  }

  .esc-login {
    margin-top: 172rpx;
    text-align: center;
    color: #999999;
    font-size: 28rpx;
  }
</style>
