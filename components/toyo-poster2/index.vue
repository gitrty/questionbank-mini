<template>
  <!-- 分享评分海报 -->
  <view class="mask2">
    <view class="poster">
      <image :src="type ? '/static/fx-zt-bg.png' : '/static/bg1-1.png'" mode="" class="bg1"></image>
      <view class="down-info" id="faultTree">
        <image :src="type ? '/static/fx-zt-bg2.png' : '/static/bg2-1.png'" mode="" class="bg2"></image>
        <view :class="[type ? 'defen2' : 'defen1']">{{ assessmentResult.myScore }}</view>
        <image src="../../static/logo.png" mode="" class="touxiang"></image>
        <view class="txt1">本次我{{ type ? '练习' : '面试' }}了</view>
        <view :class="['txt2', type ? 'qgold' : '']" v-if="!type">【{{ viewTitle }}】</view>
        <view :class="['txt2', type ? 'qgold' : '']" v-if="type">【{{ exTitle }}】</view>
        <view class="down-info-answer">
          <view class="d-i-answer-title">本次{{ type ? '练习' : '面试' }}情况</view>
          <view class="d-i-answer-con">
            <view>
              <text>{{ assessmentResult.correctCount }}/{{ assessmentResult.allCount }}</text>
              <text>正确题数</text>
            </view>
            <view>
              <text>{{ assessmentResult.score }}</text>
              <text>考卷分值</text>
            </view>
            <view>
              <text>{{ assessmentResult.duration | sToMs }}</text>
              <text>{{ type ? '练习' : '考试' }}用时</text>
            </view>
          </view>
        </view>
        <image src="/static/ewm.png" mode="" class="ewm"></image>
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
    // 0：大厂面试
    // 1：专题练习
    type: {
      type: Number,
      default: 0
    },
    assessmentResult: {
      type: Object,
      default() {
        return {
          allCount: '', //总题数
          correctCount: '', //正确题数
          score: '', //试卷分值
          myScore: '', //用户的考试得分
          duration: '' //面试用时,单位是秒
        };
      }
    },
    viewTitle: {
      type: String,
      default: '123'
    },
    exTitle: {
      type: String,
      default: '456'
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
      this.$emit('downloadImage', this.type);
    },

    // 分享好友
    onShareAppMessage: function(options) {
      var that = this; // 设置菜单中的转发按钮触发转发事件时的转发内容
      var shareObj = {
        title: 'GPer', // 默认是小程序的名称(可以写slogan等)
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
        shareObj.path = '/pages/information/information';
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
.qgold {
  color: #fdc223 !important;
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
      .defen1 {
        margin-top: 10rpx;
        font-size: 40rpx;
        color: #fdc223;
        text-align: center;
      }
      .defen2 {
        margin-top: 10rpx;
        font-size: 40rpx;
        color: #f45e77;
        text-align: center;
      }
      .touxiang {
        position: absolute;
        top: 85rpx;
        left: 156rpx;
        width: 43rpx;
        height: 43rpx;
        border-radius: 50%;
      }
      .txt1 {
        margin-top: 46rpx;
        color: #fff;
        font-size: 14.5rpx;
        text-align: center;
      }
      .txt2 {
        margin-top: 8rpx;
        color: #288dee;
        font-size: 13rpx;
        text-align: center;
      }
      .down-info-answer {
        width: 236rpx;
        height: 88rpx;
        position: absolute;
        top: 229rpx;
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
        bottom: 38rpx;
        left: 50%;
        margin-left: -56rpx;
        width: 112rpx;
        height: 110rpx;
      }
      .ewm-txt {
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
