<template>
  <view class="examination" @touchstart="start" @touchend="end">
    <!-- 提示 -->
    <view class="ex-tip" v-if="isTip">
      <image src="../../../static/stip.png" mode="" class="img-tip"></image>
      <view class="tip-txt">左右滑动即可切换题目</view>
      <view class="tip-btn" @tap="isTip = false">我知道了</view>
    </view>

    <!-- 答题区域 -->
    <view class="">
      <view class="ex-ans">
        <view class="ex-ans-type fl">{{ nowAnswer[nowAnswerNum - 1].tiXin }}</view>
        <view class="ex-ans-fraction fl">{{ nowAnswer[nowAnswerNum - 1].score || '' }}分</view>
        <view class="ex-ans-time fr">
          <view>
            <text>{{ timer | formatDuring }}</text>
          </view>
          <!-- <image src="../../../static/stop.png" mode=""></image> -->
        </view>
      </view>
      <!-- 选项/简答区域 -->
      <view class="ex-container">
        <view class="ex-container-title">{{ nowAnswerNum }}.{{ decodeURIComponent(nowAnswer[nowAnswerNum - 1].biaoTi) || '' }}</view>
        <!-- 单选题 -->
        <view class="" v-if="nowAnswer[nowAnswerNum - 1].tiXin == '单选题'">
          <view class="ex-container-choice" @tap="danSelectA">
            <image :src="nowAnswer[nowAnswerNum - 1].neiRong == 'A' ? danYesCheck : danNoCheck" mode=""></image>
            <text :class="{ tblue: nowAnswer[nowAnswerNum - 1].neiRong == 'A' }">A.{{ decodeURIComponent(nowAnswer[nowAnswerNum - 1].optionA) }}</text>
          </view>
          <view class="ex-container-choice" @tap="danSelectB">
            <image :src="nowAnswer[nowAnswerNum - 1].neiRong == 'B' ? danYesCheck : danNoCheck" mode=""></image>
            <text :class="{ tblue: nowAnswer[nowAnswerNum - 1].neiRong == 'B' }">B.{{ decodeURIComponent(nowAnswer[nowAnswerNum - 1].optionB) }}</text>
          </view>
          <view class="ex-container-choice" @tap="danSelectC">
            <image :src="nowAnswer[nowAnswerNum - 1].neiRong == 'C' ? danYesCheck : danNoCheck" mode=""></image>
            <text :class="{ tblue: nowAnswer[nowAnswerNum - 1].neiRong == 'C' }">C.{{ decodeURIComponent(nowAnswer[nowAnswerNum - 1].optionC) }}</text>
          </view>
          <view class="ex-container-choice" @tap="danSelectD">
            <image :src="nowAnswer[nowAnswerNum - 1].neiRong == 'D' ? danYesCheck : danNoCheck" mode=""></image>
            <text :class="{ tblue: nowAnswer[nowAnswerNum - 1].neiRong == 'D' }">D.{{ decodeURIComponent(nowAnswer[nowAnswerNum - 1].optionD) }}</text>
          </view>
        </view>

        <!-- 多选题 -->
        <view class="" v-if="nowAnswer[nowAnswerNum - 1].tiXin == '多选题'">
          <view class="ex-container-choice" @tap="duoSelectA">
            <image :src="nowAnswer[nowAnswerNum - 1].neiRong.includes('A') ? duoYesCheck : duoNoCheck" mode=""></image>
            <text :class="{ tblue: nowAnswer[nowAnswerNum - 1].neiRong.includes('A') }">A.{{ decodeURIComponent(nowAnswer[nowAnswerNum - 1].optionA) }}</text>
          </view>
          <view class="ex-container-choice" @tap="duoSelectB">
            <image :src="nowAnswer[nowAnswerNum - 1].neiRong.includes('B') ? duoYesCheck : duoNoCheck" mode=""></image>
            <text :class="{ tblue: nowAnswer[nowAnswerNum - 1].neiRong.includes('B') }">B.{{ decodeURIComponent(nowAnswer[nowAnswerNum - 1].optionB) }}</text>
          </view>
          <view class="ex-container-choice" @tap="duoSelectC">
            <image :src="nowAnswer[nowAnswerNum - 1].neiRong.includes('C') ? duoYesCheck : duoNoCheck" mode=""></image>
            <text :class="{ tblue: nowAnswer[nowAnswerNum - 1].neiRong.includes('C') }">C.{{ decodeURIComponent(nowAnswer[nowAnswerNum - 1].optionC) }}</text>
          </view>
          <view class="ex-container-choice" @tap="duoSelectD">
            <image :src="nowAnswer[nowAnswerNum - 1].neiRong.includes('D') ? duoYesCheck : duoNoCheck" mode=""></image>
            <text :class="{ tblue: nowAnswer[nowAnswerNum - 1].neiRong.includes('D') }">D.{{ decodeURIComponent(nowAnswer[nowAnswerNum - 1].optionD) }}</text>
          </view>
        </view>

        <!-- 简答题 -->
        <view class="ex-container-short" v-show="nowAnswer[nowAnswerNum - 1].tiXin == '简答题'">
          <view class="ex-container-short-hr"></view>
          <textarea v-model="nowAnswer[nowAnswerNum - 1].neiRong" maxlength="-1" placeholder="请输入你的答案" @input="textInput" />
          <!-- 提示：简答题无法系统判断 -->
          <view class="shrot-tip" v-if="isShortTip">
            <image src="../../../static/tip.png" mode=""></image>
            <text>简答题暂不支持系统判断，可交卷后查看答案或解析</text>
            <view class="close-shrot-tip" @tap="noTip">不再提示</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部导航 -->
    <view class="ex-nav">
      <view class="ex-nav-con" @tap="openMore">
        <image src="../../../static/ex-1.png" mode="" v-show="!isMore"></image>
        <view class="ex-nav-txt" v-show="!isMore">更多</view>
        <image src="../../../static/close.png" mode="" v-show="isMore"></image>
        <view class="ex-nav-txt" v-show="isMore">关闭</view>
      </view>
      <view class="ex-nav-con">
        <image src="../../../static/ex-2.png" mode=""></image>
        <view class="ex-nav-txt">分享</view>
      </view>
      <view class="ex-nav-con" @tap="openAnCard">
        <image src="../../../static/ex-3.png" mode="" v-show="!isAnCard"></image>
        <view class="ex-nav-txt" v-show="!isAnCard">答题卡</view>
        <image src="../../../static/close.png" mode="" v-show="isAnCard"></image>
        <view class="ex-nav-txt" v-show="isAnCard">关闭</view>
      </view>
      <view class="ex-nav-con" @tap="tabSign">
        <image :src="nowAnswer[nowAnswerNum - 1].isSign ? '/static/sign-1.png' : '/static/ex-4.png'" mode=""></image>
        <view class="ex-nav-txt">标记</view>
      </view>
      <view class="ex-nav-con" @tap="handInHand">
        <image src="../../../static/ex-5.png" mode=""></image>
        <view class="ex-nav-txt">交卷</view>
      </view>
    </view>

    <!-- 答题卡 -->
    <view class="an-card" v-show="isAnCard">
      <view v-for="index of answerNum" :class="['serial-number', index + 1 === nowAnswerNum ? 'active' : '']" :key="index" @tap="tabExamination(index)">
        <text>{{ index + 1 }}</text>
        <!-- 标记题目 -->
        <image src="../../../static/sign-1.png" mode="" class="ex-sign" v-show="nowAnswer[index].isSign"></image>
        <!-- 收藏题目 -->
        <image src="../../../static/collection.png" mode="" class="ex-collection" v-show="nowAnswer[index].isCollection"></image>
      </view>
    </view>

    <!-- 更多 -->
    <view class="ex-more" v-if="isMore">
      <view v-show="!nowAnswer[nowAnswerNum - 1].isInterView" @tap="past">
        <image src="../../../static/more-1.png" mode=""></image>
        <text>面过此题</text>
      </view>
      <view v-show="nowAnswer[nowAnswerNum - 1].isInterView" @tap="dePast">
        <image src="../../../static/yes-ct.png" mode=""></image>
        <text class="tgary">已面此题</text>
      </view>
      <view v-show="!nowAnswer[nowAnswerNum - 1].isCollection" @tap="collection">
        <image src="../../../static/more-2.png" mode=""></image>
        <text>收藏题目</text>
      </view>
      <view v-show="nowAnswer[nowAnswerNum - 1].isCollection" @tap="deCollection">
        <image src="../../../static/yes-sc.png" mode=""></image>
        <text class="tgary">已收藏此题</text>
      </view>
    </view>

    <!-- 模态框：交卷提示 -->
    <view class="submission-tip" v-show="isSubmission">
      <view class="submission-tip-top">
        <text>离成功你只需要坚持一下</text>
        <text>还剩{{ weizuoNum }}道题没做，确认提前交卷吗？</text>
      </view>
      <view class="submission-tip-bottom">
        <text @tap="yesSubmit">确认提交</text>
        <text class="tblue" @tap="closeSub">取消</text>
      </view>
      <view class="close-tip" @tap="closeSub">╳</view>
    </view>

    <!-- 遮罩层 -->
    <view class="ex-mask" v-show="isAnCard || isMore"></view>
    <view class="ex-mask2" v-show="isSubmission"></view>
  </view>
</template>

<script>
import { itembank } from '@api';
const {
  startSuitByUserId,
  getListBySuitId,
  getFactoryContentById,
  putFactoryContent,
  commitFactory,
  getQuestionBankList,
  startExerciseByUserId,
  getQuestionContentById,
  putQuestionContent,
  commitQuestion
} = itembank;
export default {
  data() {
    return {
      isTip: false, // 左右滑动提示
      isShortTip: true, // 简单题阅卷提示
      isAnCard: false, // 答题卡显示状态
      isMore: false, // 更多显示状态
      isSubmission: false, // 交卷提示
      danNoCheck: '/static/dx-no.png', // 单选未选中图标
      danYesCheck: '/static/dx-yes.png', // 单选选中图标
      duoNoCheck: '/static/duo-no.png', // 多选未选中图标
      duoYesCheck: '/static/duo-yes.png', // 多选选中图标
      answerNum: 0, // 题目总数，
      nowAnswerNum: 1, // 当前题编号，
      weizuoNum: 0, // 交卷时未做的题
      signboard: null, // 开始考试的标识
      // 当前考试的所有题 - 模拟  （isSign:标记状态   isCollection:收藏状态   isInterView:是否面过此题）
      paper: [
        { id: 1, isSign: false, isCollection: false, isInterView: false },
        { id: 2, isSign: true, isCollection: false, isInterView: false },
        { id: 3, isSign: false, isCollection: true, isInterView: false },
        { id: 4, isSign: false, isCollection: false, isInterView: false },
        { id: 5, isSign: false, isCollection: false, isInterView: false }
      ],
      startData: {
        clientX: 0
      },
      everyList: [], //  当前考试所有题
      //  当前考试所有题 - 详情
      nowAnswer: [
        {
          score: '',
          tiXin: '',
          biaoTi: ''
        }
      ],
      category: null, // 分类  0大厂面试   1专题练习,
      thAnswer: {},
      timer: 3600 // 答题时间（时间戳）
    };
  },
  async onLoad(e) {
    console.info(e);
    this.thAnswer = e;
    uni.showLoading({ title: '正在加载题目', mask: true });
    // 获取当前套题的所有题目
    let everyList;
    if (e.id) {
      // 大厂面试 - 获取开始考试标识
      this.category = 0;
      const { signboard } = await startSuitByUserId({ userId: this.$store.state.userId });
      this.signboard = signboard;
      everyList = await getListBySuitId({ id: e.id, signboard: signboard, userId: this.$store.state.userId });
    } else {
      // 专题练习 - 获取开始考试标识
      this.category = 1;
      const { signboard } = await startExerciseByUserId({ userId: this.$store.state.userId });
      this.signboard = signboard;
      everyList = await getQuestionBankList({
        biaoQianIdList: e.biaoQianIdList,
        tiXin: e.tiXin,
        num: e.num,
        signboard: signboard,
        userId: this.$store.state.userId
      });
    }

    // 时间到后自动提交
    let times = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        clearInterval(times);
        this.yesSubmit();
      }
    }, 1000);

    this.answerNum = everyList.length;
    this.everyList = everyList;

    this.nowAnswer = [];
    everyList.forEach(async (item, index) => {
      let data;
      if (this.category === 0) {
        data = await getFactoryContentById({ id: item.id });
      } else if (this.category === 1) {
        data = await getQuestionContentById({ id: item.id });
      }
      data.isSign = false; // 标记
      data.isCollection = false; // 收藏
      data.isInterView = false; // 是否面过
      data.neiRong = ''; // 清空内容
      this.nowAnswer.push(data);
      if (index == everyList.length - 1) uni.hideLoading();
    });

    console.info(this.nowAnswer);

    // 修改当前页面标题 NavigationBarTitle
    uni.setNavigationBarTitle({
      title: `${this.nowAnswerNum}/${everyList.length}`
    });
  },
  methods: {
    // 收藏
    collection() {
      this.nowAnswer[this.nowAnswerNum - 1].isCollection = true;
    },

    // 取消收藏
    deCollection() {
      this.nowAnswer[this.nowAnswerNum - 1].isCollection = false;
    },

    // 面过此题
    past() {
      this.nowAnswer[this.nowAnswerNum - 1].isInterView = true;
    },

    // 取消面过此题
    dePast() {
      this.nowAnswer[this.nowAnswerNum - 1].isInterView = false;
    },

    // 单选
    danSelectA() {
      this.nowAnswer[this.nowAnswerNum - 1].neiRong = 'A';
    },
    danSelectB() {
      this.nowAnswer[this.nowAnswerNum - 1].neiRong = 'B';
    },
    danSelectC() {
      this.nowAnswer[this.nowAnswerNum - 1].neiRong = 'C';
    },
    danSelectD() {
      this.nowAnswer[this.nowAnswerNum - 1].neiRong = 'D';
    },

    // 多选
    duoSelectA() {
      this.nowAnswer[this.nowAnswerNum - 1].neiRong.includes('A')
        ? (this.nowAnswer[this.nowAnswerNum - 1].neiRong = this.nowAnswer[this.nowAnswerNum - 1].neiRong.replace(/A/gi, ''))
        : (this.nowAnswer[this.nowAnswerNum - 1].neiRong = this.nowAnswer[this.nowAnswerNum - 1].neiRong.concat('A'));
    },
    duoSelectB() {
      this.nowAnswer[this.nowAnswerNum - 1].neiRong.includes('B')
        ? (this.nowAnswer[this.nowAnswerNum - 1].neiRong = this.nowAnswer[this.nowAnswerNum - 1].neiRong.replace(/B/gi, ''))
        : (this.nowAnswer[this.nowAnswerNum - 1].neiRong = this.nowAnswer[this.nowAnswerNum - 1].neiRong.concat('B'));
    },
    duoSelectC() {
      this.nowAnswer[this.nowAnswerNum - 1].neiRong.includes('C')
        ? (this.nowAnswer[this.nowAnswerNum - 1].neiRong = this.nowAnswer[this.nowAnswerNum - 1].neiRong.replace(/C/gi, ''))
        : (this.nowAnswer[this.nowAnswerNum - 1].neiRong = this.nowAnswer[this.nowAnswerNum - 1].neiRong.concat('C'));
    },
    duoSelectD() {
      this.nowAnswer[this.nowAnswerNum - 1].neiRong.includes('D')
        ? (this.nowAnswer[this.nowAnswerNum - 1].neiRong = this.nowAnswer[this.nowAnswerNum - 1].neiRong.replace(/D/gi, ''))
        : (this.nowAnswer[this.nowAnswerNum - 1].neiRong = this.nowAnswer[this.nowAnswerNum - 1].neiRong.concat('D'));
    },

    // 简答题输入框内容变化
    textInput({ detail }) {
      this.nowAnswer[this.nowAnswerNum - 1].neiRong = detail.value;
    },

    // 打开答题卡
    openAnCard() {
      this.isAnCard = !this.isAnCard;
      this.isMore = false;
    },

    // 打开更多
    openMore() {
      this.isMore = !this.isMore;
      this.isAnCard = false;
    },

    // 答题卡：点击切换题目
    tabExamination(index) {
      this.nowAnswerNum = index + 1;
    },

    // 标记/取消标记
    tabSign() {
      this.nowAnswer[this.nowAnswerNum - 1].isSign = !this.nowAnswer[this.nowAnswerNum - 1].isSign;
    },

    // 交卷按钮
    handInHand() {
      this.isAnCard = this.isMore = false;
      this.isSubmission = true;
      // 检测未做的题
      let count = 0;
      this.nowAnswer.forEach(item => (item.neiRong == '' ? count++ : 0));
      this.weizuoNum = count;
    },

    // 确认提交
    async yesSubmit() {
      console.info(this.nowAnswer);
      // console.info(this.signboard);
      // 1 - 将所有的题都进行提交
      this.nowAnswer.forEach(async item => {
        // 不提交空题
        if (item.neiRong == '') return;
        // 拼接不同题型的参数
        let content;
        if (item.tiXin == '单选题') {
          content = '-' + item.neiRong + '-';
        }
        if (item.tiXin == '多选题') {
          item.neiRong.split('').forEach(val => {
            content = content + '-' + val;
          });
          content += '-';
        }
        if (item.tiXin == '简答题') {
          content = item.neiRong;
        }
        if (this.category === 0) {
          await putFactoryContent({
            id: item.id,
            signboard: this.signboard,
            userId: this.$store.state.userId,
            content: content
          });
        } else if (this.category === 1) {
          await putQuestionContent({
            id: item.id,
            signboard: this.signboard,
            userId: this.$store.state.userId,
            content: content
          });
        }
      });
      // 2 - 提交整张试卷
      if (this.category === 0) {
        await commitFactory({
          signboard: this.signboard,
          userId: this.$store.state.userId
        });
      } else if (this.category === 1) {
        await commitQuestion({
          signboard: this.signboard,
          userId: this.$store.state.userId
        });
      }

      // 提交成功，关闭考试，跳转页面
      this.redirectTo('/pages/itembank/results/results', { signboard: this.signboard, category: this.category, thAnswer: JSON.stringify(this.thAnswer) });
    },

    // 关闭简答题提示
    noTip() {
      this.isShortTip = false;
    },

    // 关闭交卷提示
    closeSub() {
      this.isSubmission = false;
    },

    // 滑动切换考题
    start(e) {
      this.startData.clientX = e.changedTouches[0].clientX;
    },
    end(e) {
      const subX = e.changedTouches[0].clientX - this.startData.clientX;
      if (subX > 100 && this.nowAnswerNum > 1) {
        // 右滑
        this.nowAnswerNum--;
        uni.setNavigationBarTitle({
          title: `${this.nowAnswerNum}/${this.everyList.length}`
        });
      } else if (subX < -100 && this.nowAnswerNum < this.nowAnswer.length) {
        // 左滑
        this.nowAnswerNum++;
        uni.setNavigationBarTitle({
          title: `${this.nowAnswerNum}/${this.everyList.length}`
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.examination {
  position: fixed;
  width: 100%;
  height: 100%;
  padding-bottom: 94rpx;
}
.ex-mask {
  position: fixed;
  top: 0;
  width: 100%;
  height: 90%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.32);
}
.ex-mask2 {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.32);
}
.submission-tip {
  width: 560rpx;
  height: 290rpx;
  border-radius: 32rpx;
  background-color: #fff;
  position: fixed;
  z-index: 11;
  left: 50%;
  margin-left: -280rpx;
  top: 50%;
  margin-top: -145rpx;
  font-size: 30rpx;
  .submission-tip-top {
    width: 100%;
    height: 180rpx;
    border-bottom: 1rpx solid #e8e8e8;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .submission-tip-bottom {
    width: 100%;
    height: 110rpx;
    display: flex;
    align-items: center;
    > text {
      height: 56rpx;
      width: 50%;
      line-height: 56rpx;
      text-align: center;
      &:nth-of-type(1) {
        border-right: 1rpx solid #e8e8e8;
      }
    }
  }
  .close-tip {
    width: 56rpx;
    height: 56rpx;
    font-size: 56rpx;
    color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -16rpx;
    bottom: -84rpx;
  }
}
.ex-more {
  position: fixed;
  z-index: 10;
  bottom: 94rpx;
  width: 100%;
  height: 218rpx;
  background-color: #fff;
  border-radius: 32rpx 32rpx 0 0;
  padding: 0 32rpx;
  display: flex;
  flex-direction: column;
  > view {
    flex: 1;
    text-align: center;
    line-height: 109rpx;
    > image {
      width: 32rpx;
      height: 32rpx;
      margin-bottom: -4rpx;
      margin-right: 16rpx;
    }
    &:nth-of-type(1) {
      border-bottom: 1rpx solid #e8e8e8;
    }
  }
}
.an-card {
  position: fixed;
  z-index: 10;
  bottom: 94rpx;
  width: 100%;
  height: 448rpx;
  background-color: #fff;
  border-radius: 32rpx 32rpx 0 0;
  padding: 48rpx 20rpx 0;
  .serial-number {
    width: 64rpx;
    height: 64rpx;
    background-color: #fafafa;
    color: #333;
    font-size: 32rpx;
    text-align: center;
    line-height: 64rpx;
    border-radius: 4rpx;
    float: left;
    margin: 0 12rpx 32rpx;
    position: relative;
  }
  .serial-number.active {
    background-color: #e9effc;
    color: #2764dd;
  }
  .ex-sign {
    width: 20rpx;
    height: 22rpx;
    position: absolute;
    top: -2rpx;
    left: -2rpx;
  }
  .ex-collection {
    width: 22rpx;
    height: 22rpx;
    position: absolute;
    right: -6rpx;
    bottom: -7rpx;
  }
}
.shrot-tip {
  position: fixed;
  top: 0;
  height: 45rpx;
  width: 100%;
  background-color: #fcece8;
  padding: 0 32rpx;
  font-size: 20rpx;
  color: #e14420;
  display: flex;
  align-items: center;
  > image {
    width: 20rpx;
    height: 20rpx;
    margin-right: 8rpx;
    margin-bottom: -4rpx;
  }
  .close-shrot-tip {
    width: 88rpx;
    height: 32rpx;
    border-radius: 4rpx;
    border: 1rpx solid #e14420;
    margin-left: 110rpx;
    text-align: center;
    line-height: 30rpx;
  }
}
.ex-container {
  margin-top: 32rpx;
  .ex-container-title {
    padding: 0 32rpx;
    font-size: 40rpx;
    color: #333;
  }
  .ex-container-choice {
    padding: 0 32rpx;
    margin-top: 40rpx;
    > image {
      margin-bottom: -4rpx;
      width: 32rpx;
      height: 32rpx;
      margin-right: 16rpx;
    }
  }
  .ex-container-short {
    margin-top: 33rpx;
    .ex-container-short-hr {
      height: 16rpx;
      background-color: #f4f4f4;
    }
    > textarea {
      width: 700rpx;
      padding: 32rpx;
      font-size: 32rpx;
      color: #333;
    }
  }
}

.ex-ans {
  width: 100%;
  height: 48rpx;
  margin-top: 32rpx;
  padding: 0 32rpx;
  .ex-ans-type {
    width: 120rpx;
    height: 48rpx;
    border-radius: 6rpx;
    border: 1rpx solid #2764dd;
    line-height: 46rpx;
    text-align: center;
    font-size: 28rpx;
    color: #2764dd;
  }
  .ex-ans-fraction {
    width: 80rpx;
    height: 48rpx;
    line-height: 46rpx;
    text-align: center;
    border-radius: 6rpx;
    color: #fcd901;
    border: 1rpx solid #fcd901;
    margin-left: 16rpx;
    font-size: 28rpx;
  }
  .ex-ans-time {
    height: 48rpx;
    font-size: 28rpx;
    color: #333333;
    display: flex;
    align-items: center;
    > image {
      width: 38rpx;
      height: 38rpx;
    }
    > view {
      margin-right: 19rpx;
      > text {
        margin-top: 4rpx;
        display: inline-block;
        width: 40rpx;
        height: 40rpx;
        line-height: 40rpx;
        text-align: center;
        background-color: #fafafa;
      }
    }
  }
}
.ex-nav {
  background-color: #fff;
  width: 100%;
  height: 94rpx;
  position: fixed;
  z-index: 2;
  bottom: 0;
  border-top: 1rpx solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 55rpx;
  .ex-nav-con {
    width: 60rpx;
    font-size: 20rpx;
    text-align: center;
    color: #333;
    > image {
      width: 40rpx;
      height: 40rpx;
    }
    .ex-nav-txt {
    }
  }
}
.ex-tip {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  color: #fff;
  .img-tip {
    width: 333rpx;
    height: 310rpx;
    margin-top: 284rpx;
    margin-left: 177rpx;
  }
  .tip-txt {
    font-size: 32rpx;
    margin-top: 43rpx;
    margin-left: 215rpx;
  }
  .tip-btn {
    width: 300rpx;
    height: 72rpx;
    font-size: 28rpx;
    border: 2rpx solid #fff;
    line-height: 72rpx;
    text-align: center;
    margin-left: 225rpx;
    margin-top: 41rpx;
    border-radius: 6rpx;
  }
}
</style>
