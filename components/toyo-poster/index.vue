<template>
  <!-- 遮罩层2:打卡成功 -->
  <view class="mask2">
    <view class="poster">
      <view class="clock-success" v-if="type === 0">
        <image src="../../static/success.png" mode=""></image>
        <text>打卡成功</text>
      </view>
      <image src="../../static/clockyes0.png" mode="" class="bg1" v-if="type === 0"></image>
      <image src="../../static/bg1-1.png" mode="" class="bg1" v-if="type === 1"></image>
      <image src="../../static/fx-zt-bg.png" mode="" class="bg1" v-if="type === 2"></image>
      <view class="down-info" id="faultTree">
        <image src="../../static/clockyes.png" mode="" class="bg2" v-if="type === 0"></image>
        <image src="../../static/clockyes1.png" mode="" class="bg2" v-if="type === 1"></image>
        <image src="../../static/clockyes2.png" mode="" class="bg2" v-if="type === 2"></image>
        <view class="down-info-head"><image src="../../static/logo.png" mode=""></image></view>
        <view class="down-info-daynum" v-if="type === 0">
          我已在GPer社区题库打卡
          <text>26</text>
          天
        </view>
        <view class="down-info-daynum" v-if="type === 1">每日面试 离大厂只有一步之遥</view>
        <view class="down-info-daynum" v-if="type === 2">每日练习 离大厂只有一步之遥</view>
        <view :class="['down-info-txt', type === 1 ? 'qblue' : '']">
          赶快加入一起刷题学习吧
          <view class="down-info-txt-l"></view>
          <view class="down-info-txt-r"></view>
        </view>
        <view class="down-info-answer">
          <view class="d-i-answer-title" v-if="type === 0">今日答题情况</view>
          <view class="d-i-answer-title" v-if="type === 1">今日面试情况</view>
          <view class="d-i-answer-title" v-if="type === 2">今日练习情况</view>
          <view class="d-i-answer-con">
            <view>
              <text>2</text>
              <text>{{ type === 2 ? '练习' : '面试' }}次数</text>
            </view>
            <view>
              <text>12</text>
              <text>{{ type === 0 ? '练习次数' : '正确题数' }}</text>
            </view>
            <view>
              <text>2</text>
              <text>{{ type === 0 ? '学习打卡' : '综合得分' }}</text>
            </view>
          </view>
        </view>
        <image src="../../static/logo.png" mode="" class="ewm"></image>
        <view class="ewm-txt">扫描小程序码立即刷题学习</view>
      </view>
      <view class="down-share">
        <view class="download" @tap="downloadImage">
          <image src="../../static/download.png" mode=""></image>
          <text>下载海报</text>
        </view>
        <view class="sharefriend">
          <image src="../../static/sharef.png" mode=""></image>
          <!-- <text>分享好友</text> -->
          <button data-name="shareBtn" open-type="share">分享至好友</button>
        </view>
        <view class="down-hr"></view>
      </view>
      <view class="close-poster" @tap="hiddenPoster">╳</view>
    </view>

    </view>
</template>

<script>
export default {
  props: {
    // 0：打卡成功
    // 1：分享面试
    // 2：分享练习
    type: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {
    hiddenPoster() {
      this.$emit('closePoster', false);
    },

    // 下载海报
    downloadImage() {
      this.$emit('downloadImage',this.type)
      
    },

    // 分享好友
    onShareAppMessage: function(options) {
      var that = this; // 设置菜单中的转发按钮触发转发事件时的转发内容
      var shareObj = {
        title: 'asdasdasdasd', // 默认是小程序的名称(可以写slogan等)
        // 　　　　path: '/pages/share/share',        // 默认是当前页面，必须是以‘/’开头的完整路径
        // 　　　　imgUrl: '',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
        success: function(res) {
          // 转发成功之后的回调
          if (res.errMsg == 'shareAppMessage:ok') {
          }
        },
        fail: function() {
          // 转发失败之后的回调
          if (res.errMsg == 'shareAppMessage:fail cancel') {
            // 用户取消转发
          } else if (res.errMsg == 'shareAppMessage:fail') {
            // 转发失败，其中 detail message 为详细失败信息
          }
        },
        complete: function() {
          // 转发结束之后的回调（转发成不成功都会执行）
        }
      }; // 来自页面内的按钮的转发
      if (options.from == 'button') {
        var eData = options.target.dataset;
        console.log(eData.name); // shareBtn // 此处可以修改 shareObj 中的内容
        // 　　　　shareObj.path = '/pages/btnname/btnname?btn_name='+eData.name;
      } // 返回shareObj
      return shareObj;
    }
  }
};
</script>

<style lang="less" scoped>
button {
  box-sizing: border-box;
  font-size: 30rpx;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
  background-color: #fff;
}
button::after {
  content: none;
}

.qblue {
  color: #288dee !important;
  .down-info-txt-l {
    background-color: #288dee !important;
  }
  .down-info-txt-r {
    background-color: #288dee !important;
  }
}
.mask2 {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.32);
  top: 0;

  .poster {
    position: absolute;
    width: 560rpx;
    height: 762rpx;
    border-radius: 32rpx;
    background-color: #fff;

    padding-top: 32rpx;
    left: 50%;
    top: 50%;
    margin-top: -381rpx;
    margin-left: -280rpx;
    .clock-success {
      text-align: center;

      image {
        vertical-align: middle;
        width: 30rpx;
        height: 30rpx;
      }

      text {
        margin-left: 14rpx;
        font-weight: 700;
        font-size: 30rpx;
        color: #2764dd;
      }
    }

    .bg1 {
      position: absolute;
      z-index: 2;
      top: 59rpx;
      left: 18rpx;
      width: 525rpx;
      height: 553rpx;
      border-radius: 32rpx;
    }

    .bg2 {
      position: absolute;
      z-index: -1;
      top: 0rpx;
      left: 0rpx;
      width: 272rpx;
      height: 483rpx;
      border-radius: 16rpx;
    }

    .down-info {
      position: absolute;
      z-index: 4;
      top: 119rpx;
      left: 139rpx;
      width: 272rpx;
      height: 483rpx;
      border-radius: 16rpx;
      padding-top: 38rpx;
      .down-info-head {
        width: 100%;
        height: 68rpx;
        text-align: center;
        > image {
          width: 68rpx;
          height: 100%;
          border-radius: 50%;
        }
      }
      .down-info-daynum {
        margin: 10rpx 0;
        text-align: center;
        font-size: 14rpx;
        color: #fff;
        > text {
          color: #fdc223;
          font-size: 21rpx;
          margin: 0 6rpx;
        }
      }
      .down-info-txt {
        position: relative;
        font-size: 10rpx;
        text-align: center;
        color: #fdc223;
        .down-info-txt-l {
          position: absolute;
          width: 12rpx;
          height: 2rpx;
          background-color: #fdc223;
          border-radius: 1rpx;
          top: 50%;
          margin-top: -1rpx;
          left: 200rpx;
        }
        .down-info-txt-r {
          position: absolute;
          width: 12rpx;
          height: 2rpx;
          background-color: #fdc223;
          border-radius: 1rpx;
          top: 50%;
          margin-top: -1rpx;
          left: 60rpx;
        }
      }
      .down-info-answer {
        width: 236rpx;
        height: 88rpx;
        position: absolute;
        top: 215rpx;
        left: 19rpx;
        .d-i-answer-title {
          position: absolute;
          left: 50%;
          top: 5.5rpx;
          margin-left: -42rpx;
          width: 84rpx;
          height: 21rpx;
          color: #6f6a5b;
          background-color: #edeae3;
          border-radius: 29rpx;
          font-size: 11.5rpx;
          line-height: 21rpx;
          text-align: center;
        }
        .d-i-answer-con {
          position: absolute;
          top: 43rpx;
          height: 30rpx;
          width: 100%;
          display: flex;
          justify-content: space-between;
          > view {
            width: 66rpx;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            > text:nth-child(1) {
              font-size: 12rpx;
              color: #4c483d;
            }
            > text:nth-child(2) {
              font-size: 10rpx;
              color: #6f6a5b;
            }
          }
        }
      }
      .ewm {
        position: absolute;
        bottom: 40rpx;
        left: 50%;
        margin-left: -56rpx;
        width: 112rpx;
        height: 110rpx;
      }
      .ewm-txt {
        // margin-top: 290rpx;
        // text-align: center;
        // font-size: 10rpx;
        // color: #fff;
        position: absolute;
        bottom: 15rpx;
        width: 100%;
        text-align: center;
        font-size: 10rpx;
        color: #fff;
      }
    }

    .down-share {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 110rpx;
      // background-color: red;
      border-radius: 0 0 32rpx 32rpx;
      border-top: 1rpx solid #e8e8e8;
      display: flex;
      > view {
        font-size: 30rpx;
        color: #333333;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        > image {
          margin-right: 8rpx;
        }
      }

      .download {
        flex: 1;

        image {
          width: 30rpx;
          height: 30rpx;
        }
      }

      .sharefriend {
        flex: 1;

        image {
          width: 30rpx;
          height: 26rpx;
        }
        text {
          color: #2764dd;
        }
        button {
          color: #2764dd;
        }
      }
      .down-hr {
        width: 2rpx;
        height: 56rpx;
        background-color: #e8e8e8;
        position: absolute;
        left: 50%;
        margin-left: -1rpx;
        top: 50%;
        margin-top: -28rpx;
      }
    }
  }

  .close-poster {
    position: absolute;
    left: 50%;
    margin-left: -29rpx;
    bottom: -70rpx;
    width: 58rpx;
    height: 58rpx;
    line-height: 58rpx;
    text-align: center;
    font-size: 58rpx;
    font-weight: 700;
    color: #fff;
    margin-top: 26rpx;
  }
}
</style>
