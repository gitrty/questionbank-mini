<template>
  <view class="itembank">
    <!-- 今日答题 -->
    <view class="today-answer">
      <view class="answer-top">
        <view class="answer-top-left">
          <text class="answer-title">今日答题</text>
          <text class="answer-date">{{ today.m }}月{{ today.d }}日 周{{ today.day | numToWeek }}</text>
        </view>
        <view class="right" @tap="jump('./punchcard/punchcard')">
          <image src="../../static/right.png" class="fr"></image>
          <text class="answer-record fr">打卡记录</text>
        </view>
      </view>
      <!-- 分割线 -->
      <view class="answer-hr" v-if="!showClock"></view>
      <view class="answer-bottom" v-if="!showClock" @tap="showClock = !showClock">
        <image src="../../static/down.png" mode=""></image>
        <view class="">展开</view>
      </view>
    </view>
    <!-- 打卡 -->
    <view class="punch-clock" v-if="showClock">
      <!-- 练习、打卡数据 -->
      <view class="clock-top">
        <view class="clock-card">
          <image src="../../static/1.png" mode="" class="clock-bg"></image>
          <view class="clock-con">
            <text>11</text>
            <text>次</text>
          </view>
          <view class="clock-txt">大厂面试</view>
        </view>
        <view class="clock-card">
          <image src="../../static/2.png" mode="" class="clock-bg"></image>
          <view class="clock-con">
            <text>11</text>
            <text>次</text>
          </view>
          <view class="clock-txt">专题练习</view>
        </view>
        <view class="clock-card">
          <image src="../../static/3.png" mode="" class="clock-bg"></image>
          <view class="clock-con">
            <text>11</text>
            <text>天</text>
          </view>
          <view class="clock-txt">学习打卡</view>
        </view>
      </view>
      <!-- 打卡按钮 -->
      <view class="clock-bottom">
        <image src="../../static/noclock.png" mode=""></image>
        <text @tap="immediatelyClock" v-show="!isPunch">立即打卡</text>
        <image src="../../static/yelllow-success.png" mode="" v-show="isPunch"></image>
        <text v-show="isPunch">已打卡</text>
      </view>
    </view>

    <!-- 遮罩层1 -->
    <view class="mask" v-if="showClock" @tap="showClock = !showClock"></view>

    <!-- 打卡成功 -->
    <toyoPoster v-if="showPoster0" @closePoster="showPoster0 = false" :type="0" @downloadImage="downloadImage"></toyoPoster>

    <!-- 分享面试 -->
    <toyoPoster v-if="showPoster1" @closePoster="showPoster1 = false" :type="1" @downloadImage="downloadImage"></toyoPoster>

    <!-- 分享练习 -->
    <toyoPoster v-if="showPoster2" @closePoster="showPoster2 = false" :type="2" @downloadImage="downloadImage"></toyoPoster>

    <!-- 大厂面试 -->
    <view class="interview">
      <view class="interview-top">
        <view class="interview-top-l">大厂面试</view>
        <view class="interview-top-r">
          <text @tap="jump('/pages/itembank/answer/answer', { tabBar: 0 })">查看详情</text>
          <image src="../../static/right.png" mode=""></image>
        </view>
      </view>
      <view class="interview-con">
        <image src="../../static/1_25.png" mode="" class="card-bg"></image>
        <view class="inter-imgs">
          <view><image src="../../static/m1.png" mode=""></image></view>
          <view><image src="../../static/m2.png" mode=""></image></view>
          <view><image src="../../static/m3.png" mode=""></image></view>
        </view>

        <toyoCard :type="'面试'"></toyoCard>
        <view class="card-bottom">
          <view class="share" @tap="shareInterview">
            <image src="../../static/share.png" mode=""></image>
            <text>分享成果</text>
          </view>
          <view class="gointerview" @tap="jump('/pages/itembank/interview/interview')">
            <image src="../../static/goms.png" mode=""></image>
            <text>前往面试</text>
          </view>
          <!-- 分割线 -->
          <view class="card-hr"></view>
        </view>
      </view>
    </view>
    <!-- 专题练习 -->
    <view class="interview">
      <view class="interview-top">
        <view class="interview-top-l">专题练习</view>
        <view class="interview-top-r">
          <text @tap="jump('/pages/itembank/answer/answer', { tabBar: 1 })">查看详情</text>
          <image src="../../static/right.png" mode=""></image>
        </view>
      </view>
      <view class="interview-con">
        <image src="../../static/1_26.png" mode="" class="card-bg"></image>
        <view class="inter-imgs">
          <view><image src="../../static/l1.png" mode=""></image></view>
          <view><image src="../../static/l2.png" mode=""></image></view>
          <view><image src="../../static/l3.png" mode=""></image></view>
        </view>
        <toyoCard :type="'练习'"></toyoCard>
        <view class="card-bottom">
          <view class="share" @tap="sharePractice">
            <image src="../../static/share.png" mode=""></image>
            <text>分享成果</text>
          </view>
          <view class="gointerview" @tap="jump('/pages/itembank/special/special')">
            <image src="../../static/goms.png" mode=""></image>
            <text>立即练习</text>
          </view>
          <!-- 分割线 -->
          <view class="card-hr"></view>
        </view>
      </view>
    </view>
    <!-- 绘制海报 -->
    <canvas style="width: 750rpx; height: 1334rpx;position:fixed ; left:100%;background-color: red;" canvas-id="myCanvas"></canvas>
  </view>
</template>

<script>
// import html2canvas from 'html2canvas';
export default {
  data() {
    return {
      today: {
        m: '',
        d: '',
        day: ''
      },
      showClock: false,
      showPoster0: false, // 打卡成功拟态框状态
      showPoster1: false, // 分享面试拟态框状态
      showPoster2: false, // 分享练习拟态框状态
      isPunch: false // 是否打卡
    };
  },
  onLoad() {
    this.getDate();
  },
  methods: {
    // 获取今日日期
    getDate() {
      let date = new Date();
      let m = date.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      let d = date.getDate();
      let day = date.getDay();
      this.today.m = m;
      this.today.d = d;
      this.today.day = day;
    },

    // 立即打卡
    immediatelyClock() {
      this.showClock = false;
      this.showPoster0 = true;
      this.createImage();
    },

    // 分享大厂面试
    shareInterview() {
      this.showPoster1 = true;
      this.createImage();
    },

    // 分享专题练习
    sharePractice() {
      this.showPoster2 = true;
      this.createImage();
    },

    // 生成海报图片
    createImage() {
      let context = uni.createCanvasContext('myCanvas');
      // 1 - 背景图片
      context.drawImage('/static/clockyes.png', 0, 0, 375, 667);

      // 2 - 用户头像
      context.save(); // 先保存状态 已便于画完圆再用
      context.beginPath(); //开始绘制
      //先画个圆
      context.arc(187, 99, 47, 0, Math.PI * 2);
      context.setFillStyle('#ffffff');
      context.fill(); //保证图片无bug填充
      context.clip(); //画了圆 再剪切 原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内
      context.drawImage('/static/logo.png', 140, 52, 94, 94); // 推进去图片
      context.restore();

      // 3 - 打卡总天数
      context.setFillStyle('#fff');
      context.setFontSize(20);
      context.fillText('我已在GPer社区题库打卡', 36, 180);
      context.fillText('天', 325, 180);

      context.setFillStyle('#FDC223');
      context.setFontSize(36);
      context.textAlign = 'center';
      const dayNum = 99; // 模拟数据：打卡总天数
      context.fillText(dayNum, 294, 180);

      // 4 - 赶快加入一起刷题学习吧
      context.textAlign = 'left';
      context.setFontSize(14);
      context.fillText('赶快加入一起刷题学习吧', 110, 215);
      context.fillText('一', 83, 215);
      context.fillText('一', 275, 215);

      // 5 - 今日答题情况
      context.setFillStyle('#6F6A5B');
      context.setFontSize(16);
      context.fillText('今日答题情况', 141, 325);

      context.setFontSize(13);
      context.fillText('面试次数', 42, 392);
      context.fillText('练习次数', 163, 392);
      context.fillText('学习打卡', 284, 392);

      const mianshiNum = 1;
      const lianxiNum = 100;
      const dakaNum = 26;
      context.setFillStyle('#4C483D');
      context.setFontSize(20);
      context.textAlign = 'center';
      context.fillText(mianshiNum, 68, 370);
      context.fillText(lianxiNum, 188, 370);
      context.fillText(dakaNum, 308, 370);

      // 6 - 小程序码
      context.drawImage('/static/logo.png', 110, 460, 155, 152); // 推进去图片

      // 7 - 扫描小程序码立即刷题学习
      context.textAlign = 'left';
      context.setFillStyle('#fff');
      context.setFontSize(14);
      context.fillText('扫描小程序码立即刷题学习', 104, 640);

      // 8 - 完成绘制
      context.draw();
    },

    // 下载海报
    downloadImage() {
      // 将 canvas 绘制的海报生成图片
      uni.canvasToTempFilePath(
        {
          x: 0,
          y: 0,
          width: 375,
          height: 667,
          // destWidth: 200,
          // destHeight: 200,
          canvasId: 'myCanvas',
          fileType: 'jpg',
          success: function(res) {
            // 在H5平台下，tempFilePath 为 base64
            console.log(res.tempFilePath);
            uni.previewImage({
              urls: [res.tempFilePath],
              success() {
                console.info('预览成功');
              }
            });
          }
        },
        this
      );
    }
  }
};
</script>

<style lang="less" scoped>
.itembank {
  background-color: #f4f4f4;
  position: relative;
  z-index: 999;
}

.mask {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.32);
  top: 0;
}

.punch-clock {
  background-color: #fff;
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 530rpx;
  top: 122rpx;
  padding: 0 32rpx;
  border-radius: 0rpx 0rpx 32rpx 32rpx;

  .clock-top {
    height: 196rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .clock-card {
      width: 196rpx;
      height: 196rpx;
      position: relative;
      color: #fff;

      .clock-con {
        padding: 0 31rpx;
        margin-top: 56rpx;

        text:nth-of-type(1) {
          font-size: 56rpx;
          font-weight: 900;
        }

        text:nth-of-type(2) {
          font-size: 26rpx;
          display: inline-block;
          vertical-align: top;
          margin-top: 10rpx;
        }
      }

      &:nth-of-type(3) {
        text:nth-of-type(1) {
          color: #333;
        }

        text:nth-of-type(2) {
          color: #999;
        }
      }

      .clock-txt {
        padding: 0 31rpx;
        font-size: 28rpx;
      }

      &:nth-of-type(3) .clock-txt {
        color: #999;
      }
    }

    .clock-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
    }
  }

  .clock-bottom {
    width: 686rpx;
    height: 286rpx;
    position: absolute;
    bottom: 0;
    text-align: center;

    > image:nth-of-type(1) {
      width: 555rpx;
      height: 286rpx;
    }
    > image:nth-of-type(2) {
      position: absolute;
      top: 102rpx;
      left: 266rpx;
      width: 32rpx;
      height: 32rpx;
      margin-right: 8rpx;
    }

    > text {
      position: absolute;
      font-size: 36rpx;
      font-weight: 700;
    }
    > text:nth-of-type(1) {
      top: 92rpx;
      left: 266rpx;
      color: #2764dd;
    }
    > text:nth-of-type(2) {
      top: 92rpx;
      left: 304rpx;
      color: #fcd901;
    }
  }
}

.today-answer {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 204rpx;
  margin-bottom: 16rpx;
  padding: 0 32rpx;
  background-color: #fff;

  .answer-top {
    height: 115rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    text {
      display: inline-block;
      // line-height: 115rpx;
    }

    image {
      margin-top: 9rpx;
      width: 22rpx;
      height: 22rpx;
      margin-left: 2rpx;
    }
  }

  .answer-hr {
    width: 100%;
    height: 1rpx;
    border: 1rpx solid #e8e8e8;
  }

  .answer-bottom {
    height: 89rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > image {
      width: 28rpx;
      height: 28rpx;
    }

    > view {
      margin-left: 8rpx;
      color: #999;
      font-size: 28rpx;
    }
  }
}

.answer-title {
  color: #333;
  font-size: 36rpx;
  font-weight: 900;
  margin-right: 24rpx;
}

.answer-date {
  width: 200rpx;
  height: 40rpx;
  border-radius: 39rpx;
  background-color: #f4f4f4;
  color: #2764dd;
  text-align: center;
  color: #2764dd;
  font-size: 26rpx;
  line-height: 40rpx;
  font-weight: 900;
}

.answer-record {
  color: #999999;
  font-size: 28rpx;
}

.interview {
  position: relative;
  height: 490rpx;
  width: 100%;
  padding: 0 32rpx;
  background-color: #fff;

  .interview-top {
    height: 114rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .interview-top-l {
      color: #333;
      font-size: 36rpx;
      font-weight: 900;
    }

    .interview-top-r {
      color: #999999;
      font-size: 28rpx;

      image {
        width: 22rpx;
        height: 22rpx;
        margin-left: 2rpx;
      }
    }
  }

  .interview-con {
    position: relative;
    height: 264rpx;
    width: 100%;

    .card-bg {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 0;
    }

    .inter-imgs {
      position: absolute;
      top: 32rpx;
      z-index: 1;
      width: 100%;
      height: 40rpx;
      display: flex;
      justify-content: space-between;
      text-align: center;

      > view {
        flex: 1;
      }

      image {
        width: 40rpx;
        height: 36rpx;

        &:nth-of-type(1) {
          width: 36rpx;
          height: 40rpx;
        }
      }
    }
  }

  .card-bottom {
    position: absolute;
    width: 606rpx;
    height: 108rpx;
    bottom: -54rpx;
    left: 50%;
    margin-left: -303rpx;
    background-color: #fff;
    border-radius: 8rpx;
    box-shadow: 0 4rpx 20rpx #ccc;
    font-size: 30rpx;
    font-weight: 900;
    display: flex;

    > view {
      flex: 1;
      text-align: center;
      line-height: 108rpx;

      > image {
        width: 30rpx;
        height: 30rpx;
        margin-right: 7rpx;
        vertical-align: middle;
      }
    }

    .share {
      color: #333;
    }

    .gointerview {
      color: #2764dd;
    }

    .card-hr {
      position: absolute;
      width: 1rpx;
      height: 56rpx;
      background-color: #e8e8e8;
      left: 50%;
      top: 50%;
      margin-top: -28rpx;
    }
  }
}
</style>
