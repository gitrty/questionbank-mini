<template>
  <view class="answer">
    <!-- top -->
    <view class="answer-top">
      <view class="answer-left" @tap="tabBar = 0"><text :class="{ active: tabBar === 0 }">大厂面试</text></view>
      <view class="answer-middle" @tap="tabBar = 1"><text :class="{ active: tabBar === 1 }">专题练习</text></view>
      <view class="answer-right" @tap="tabBar = 2"><text :class="{ active: tabBar === 2 }">错题集</text></view>
    </view>

    <!-- 大厂面试 -->
    <view class="BF-bgc" v-show="tabBar === 0">
      <!--  -->
      <toyoAnswercard :bigFactoryList="bigFactoryList" :type="'examination'" @again="again"></toyoAnswercard>
    </view>

    <!-- 专题练习 -->
    <view class="BF-bgc" v-show="tabBar === 1">
      <!-- 可移动区域 -->
      <!--  <movable-area style="width:auto">
        <movable-view animation scroll-x direction="horizontal" inertia="true">
          <view v-for="(item, index) in classification" :key="index">
            <view class="answer-subject">
              <image src="../../../static/zt-java.png" mode=""></image>
              <text>{{ item.name }}</text>
            </view>
            <view class="answer-info">
              <text class="answer-info-k">练习次数</text>
              <text class="answer-info-v">{{ item.num }}次</text>
            </view>
            <view class="answer-info">
              <text class="answer-info-k">正确题数</text>
              <text class="answer-info-v">{{ item.success }}/{{ item.successSum }}</text>
            </view>
            <view class="answer-info">
              <text class="answer-info-k">综合得分</text>
              <text class="answer-info-v">{{ item.fraction }}分</text>
            </view>
          </view>
        </movable-view>
      </movable-area> -->

      <toyoAnswercard :bigFactoryList="exercisesList" :type="'practice'" @again="again"></toyoAnswercard>
    </view>
    <!-- 错题集 -->
    <toyoSubject :subjectList="subjectList" v-if="tabBar === 2"></toyoSubject>
    <!-- 无相关答题 -->
    <toyoNoinfo
      :type="'答题'"
      :imgSrc="'/static/no-quest.png'"
      v-if="(!bigFactoryList.length && !tabBar) || (!exercisesList.length && tabBar === 1) || (!subjectList.length && tabBar === 2)"
    ></toyoNoinfo>
  </view>
</template>

<script>
import { itembank } from '@api';
const { getCommitFactoryList, getCommitQuestionList, getAssessmentResult } = itembank;
export default {
  data() {
    return {
      tabBar: 0,
      bigFactoryList: [], // 大厂面试
      exercisesList: [], // 专题练习
      subjectList: [1, 2], // 错题集
      classification: [
        {
          // 专题练习滑动区域
          name: 'JAVA',
          num: 10,
          successSum: 100,
          success: 20,
          fraction: 99
        },
        {
          name: 'JAVA',
          num: 10,
          successSum: 100,
          success: 20,
          fraction: 99
        },
        {
          name: 'JAVA',
          num: 10,
          successSum: 100,
          success: 20,
          fraction: 99
        },
        {
          name: 'JAVA',
          num: 10,
          successSum: 100,
          success: 20,
          fraction: 99
        },
        {
          name: 'JAVA',
          num: 10,
          successSum: 100,
          success: 20,
          fraction: 99
        }
      ]
    };
  },
  async onLoad(e) {
    this.tabBar = Number(e.tabBar) || 0;
    // 获取用户考过的大厂面试
    const data1 = await getCommitFactoryList({ userId: this.$store.state.userId });
    // 获取每场考试用时
    data1.forEach(async item => {
      const { duration } = await getAssessmentResult({ signboard: item.signboard });
      item.duration = duration;
    });
    this.bigFactoryList = data1;
    // console.info(data1);

    // 获取用户考过的专题练习
    const data2 = await getCommitQuestionList({ userId: this.$store.state.userId });
    // 获取每场考试用时
    data2.forEach(async item => {
      const { duration } = await getAssessmentResult({ signboard: item.signboard });
      item.duration = duration;
    });
    this.exercisesList = data2;
    console.info(data2);
  },
  methods: {
    // 重考一遍
    again(index) {
      console.info(index);
      if (this.tabBar == 1) {
        // 重考专题
        this.jump('/pages/itembank/special/special');
      }
      if (this.tabBar == 0) {
        // 重考面试
        this.jump('/pages/itembank/examination/examination', { id: this.bigFactoryList[index].suitId });
      }
    }
  }
};
</script>

<style lang="less" scoped>
movable-area {
  height: 346rpx;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 16rpx;
}

movable-view {
  height: 100%;
  width: 2006rpx;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  > view {
    width: 350rpx;
    height: 266rpx;
    box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.06);
    background-color: #fff;
    margin-top: 40rpx;
    padding: 0 32rpx;

    image {
      width: 32rpx;
      height: 32rpx;
      margin-right: 16rpx;
      margin-bottom: -4rpx;
    }

    &:nth-of-type(1) {
      margin-left: 32rpx;
    }

    &:nth-last-of-type(1) {
      margin-right: 32rpx;
    }

    .answer-subject {
      margin-top: 23rpx;
      margin-bottom: 18rpx;
      font-size: 32rpx;
      color: #333;
    }

    .answer-info {
      font-size: 28rpx;
      margin-bottom: 16rpx;

      .answer-info-k {
        color: #999;
        margin-right: 48rpx;
      }

      .answer-info-v {
        color: #333;
      }
    }
  }
}

.BF-bgc {
  background-color: #f4f4f4;
}

.answer-top {
  width: 100%;
  height: 88rpx;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;

  > view {
    flex: 1;
    height: 100%;
    line-height: 88rpx;
    text-align: center;

    > text {
      display: inline-block;
      height: 100%;
      color: #999;
      font-size: 32rpx;
    }

    > text.active {
      border-bottom: 4rpx solid #2764dd;
      color: #2764dd;
    }
  }
}
</style>
