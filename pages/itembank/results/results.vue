<template>
  <view class="results">
    <!-- 考试结果 -->
    <view :class="['results-card', isInterView ? 'tgold' : 'tred']">
      <image :src="isInterView ? '/static/pf-ks.png' : '/static/pf-lx.png'" mode="" class="resutls-bg"></image>
      <view class="res-num">{{ assessmentResult.myScore }}</view>
      <view class="res-txt">本次得分</view>
      <view class="res-tip">{{ assessmentResult.myScore > 60 ? '真厉害，继续加油！' : '不要灰心，继续加油！' }}</view>
      <view class="res-con">
        <view>
          <image src="../../../static/res-1.png" mode=""></image>
          <text>{{ assessmentResult.correctCount }}/{{ assessmentResult.allCount }}</text>
          <text>正确题数</text>
        </view>
        <view>
          <image src="../../../static/res-2.png" mode=""></image>
          <text>{{ assessmentResult.score }}</text>
          <text>考卷分值</text>
        </view>
        <view>
          <image src="../../../static/res-3.png" mode=""></image>
          <text>{{ assessmentResult.duration | sToMs }}</text>
          <text>考试用时</text>
        </view>
      </view>
      <view class="res-btns">
        <view class="" @tap="again">重考一次</view>
        <view :class="[isInterView ? 'fx-ms' : 'fx-lx']" @tap="createImage">分享得分</view>
        <view :class="[isInterView ? 'jx-ms' : 'jx-lx']" @tap="jump('/pages/itembank/analysis/analysis', { signboard: signboard })">查看解析</view>
      </view>
    </view>

    <!-- 分享得分 0->面试  1->练习  -->
    <toyoPoster2
      v-if="showPoster"
      @closePoster="showPoster = false"
      :type="isInterView ? 0 : 1"
      :assessmentResult="assessmentResult"
      :viewTitle="viewTitle"
      :exTitle="exTitle"
      @downloadImage="downloadImage"
    ></toyoPoster2>

    <!-- 相关推荐 -->
    <view class="recommend">
      <view class="recommend-title">已为你推荐相关面试题</view>
      <view class="interv-con">
        <view class="interv-con-card fl" v-for="(item, index) in viewSuitList" :key="index" @tap="jump('/pages/itembank/interview/details', { id: item.id })">
          <view class="inter-img">
            <image :src="item.cover" mode=""></image>
            <view class="inter-mask">
              <view class="inter-mask-hot">
                <image src="/static/hot.png" mode="" class="heat"></image>
                <text>{{ item.jobInterviewCount }}热度</text>
              </view>
              <view class="inter-mask-qnum">
                <image src="/static/pnum.png" mode="" class="qnum"></image>
                <text>共{{ item.radioCount + item.multipleCount + item.judgeCount + item.shortAnswerCount }}题</text>
              </view>
            </view>
          </view>
          <view class="inter-txt">
            <view class="inter-txt-title">{{ item.title }}</view>
            <view class="inter-rate"><toyoRate :value="'4'" :checkValue="item.difficulty"></toyoRate></view>
          </view>
        </view>
      </view>
    </view>
    <!-- 绘制海报 -->
    <canvas style="width: 750rpx; height: 1334rpx;position:fixed ; left:100%;background-color: red;" canvas-id="myCanvas"></canvas>
  </view>
</template>

<script>
import { itembank } from '@api';
const { getCommitFactoryList, getAssessmentResult, viewSuitList } = itembank;
export default {
  data() {
    return {
      isInterView: false, // true:大厂面试  false：专题练习
      showPoster: false, // 分享得分拟态框状态,
      assessmentResult: {
        allCount: '', //总题数
        correctCount: '', //正确题数
        score: '', //试卷分值
        myScore: '', //用户的考试得分
        duration: '' //面试用时,单位是秒
      },
      viewSuitList: [],
      thAnswer: {},
      signboard: null,
      viewTitle: '',
      exTitle: ''
    };
  },
  async onLoad(e) {
    // console.info(e);
    // 大厂面试/专题练习
    uni.showLoading({ title: '正在阅卷...', mask: true });
    e.category == 1 ? (this.isInterView = false) : (this.isInterView = true);

    // 获取考试结果
    const assessmentResult = await getAssessmentResult({ signboard: e.signboard });
    this.assessmentResult = assessmentResult;

    // 获得所有面试套题列表
    const data2 = await viewSuitList();
    this.viewSuitList = data2;

    // 将当前题的获取信息记录下来（重考一遍）
    this.thAnswer = JSON.parse(e.thAnswer);

    // 记录signboard（查看解释使用）
    this.signboard = e.signboard;

    // 记录当前试卷名或专题名
    this.viewTitle = this.$store.state.viewTitle;
    this.exTitle = this.$store.state.exTitle;
    uni.hideLoading();
  },
  methods: {
    // 重考一遍
    again() {
      this.redirectTo('/pages/itembank/examination/examination', this.thAnswer);
    },

    // 绘制分享图片
    createImage() {
      this.showPoster = true;

      // 开始绘制
      let context = uni.createCanvasContext('myCanvas');

      // 1 - 背景图片
      if (this.isInterView) context.drawImage('/static/bg2-1.png', 0, 0, 375, 667);
      else context.drawImage('/static/fx-zt-bg2.png', 0, 0, 375, 667);

      // 本次得分
      context.textAlign = 'center';
      context.setFontSize(55);
      if (this.isInterView) context.setFillStyle('#FDC223');
      else context.setFillStyle('#F45E77');
      context.fillText(this.assessmentResult.myScore, 188, 120);

      // 2 - 用户头像
      context.save(); // 先保存状态 已便于画完圆再用
      context.beginPath(); //开始绘制
      //先画个圆
      context.arc(245, 147, 30, 0, Math.PI * 2);
      context.setFillStyle('#ffffff');
      context.fill(); //保证图片无bug填充
      context.clip(); //画了圆 再剪切 原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内
      context.drawImage('/static/logo.png', 215, 117, 60, 60); // 推进去图片
      context.restore();

      // 3 - 打卡总天数
      context.textAlign = 'left';
      context.setFillStyle('#fff');
      context.setFontSize(20);
      if (this.isInterView) context.fillText('本次我面试了', 130, 220);
      else context.fillText('本次我练习了', 130, 220);

      //
      context.textAlign = 'center';
      context.setFontSize(18);
      if (this.isInterView) {
        context.setFillStyle('#288DEE');
        context.fillText(`【${this.$store.state.viewTitle}】`, 190, 250);
      } else {
        context.setFillStyle('#FDC223');
        context.fillText(`【${this.$store.state.exTitle}】`, 190, 250);
      }

      context.setFillStyle('#fff');
      context.setFontSize(14);
      context.fillText('本次面试情况', 141, 343);

      // 5 - 今日答题情况
      context.textAlign = 'left';
      context.setFillStyle('#6F6A5B');
      context.setFontSize(16);
      if (this.isInterView) context.fillText('本次面试情况', 141, 343);
      else context.fillText('本次练习情况', 141, 343);

      context.setFontSize(13);
      context.fillText('正确题数', 42, 410);
      context.fillText('考卷分值', 163, 410);
      if (this.isInterView) context.fillText('面试用时', 284, 410);
      else context.fillText('练习用时', 284, 410);

      context.setFillStyle('#4C483D');
      context.setFontSize(20);
      context.textAlign = 'center';

      context.fillText(`${this.assessmentResult.correctCount}/${this.assessmentResult.allCount}`, 68, 388);
      context.fillText(this.assessmentResult.score, 188, 388);
      context.setFontSize(18);
      context.fillText(this.sToMs(this.assessmentResult.duration), 308, 388);

      // 6 - 小程序码
      context.drawImage('/static/ewm.png', 110, 460, 155, 152); // 推进去图片

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
      let _this = this;
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
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function() {
                _this.showToast('保存成功');
              }
            });

            // uni.previewImage({
            //   urls: [res.tempFilePath],
            //   success() {
            //     console.info('预览成功');
            //   }
            // });
          }
        },
        this
      );
    },
    sToMs(s) {
      //计算分钟
      //算法：将秒数除以60，然后下舍入，既得到分钟数
      let h;
      h = Math.floor(s / 60);
      //计算秒
      //算法：取得秒%60的余数，既得到秒数
      s = s % 60;
      //将变量转换为字符串
      h += '';
      s += '';
      //如果只有一位数，前面增加一个0
      h = h.length == 1 ? '0' + h : h;
      s = s.length == 1 ? '0' + s : s;
      return h + '分' + s + '秒';
    }
  }
};
</script>

<style lang="less" scoped>
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
