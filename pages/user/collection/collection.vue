<template>
  <view>
    <!-- top -->
    <view class="collection-top">
      <view class="collection-top-l" @tap="tabBar=true">
        <text :class="{'active':tabBar}">面试题 111</text>
      </view>
      <view class="collection-top-r" @tap="tabBar=false">
        <text :class="{'active':!tabBar}">题目 111</text>
      </view>
    </view>
    <!-- container - 面试题 -->
    <toyoQuestions :questionsList="questionsList" v-if="tabBar"></toyoQuestions>
    <!-- container - 题目 -->
    <toyoSubject :subjectList="subjectList" v-if="!tabBar"></toyoSubject>
    <!-- 无收藏 -->
    <toyoNoinfo :imgSrc="'/static/no-sc.png'" :type="'收藏'" v-if="tabBar&&!questionsList.length||!tabBar&&!subjectList.length"></toyoNoinfo>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        tabBar: true,
        questionsList: [], // 面试题
        subjectList: [1, 2] // 题目
      };
    }
  }
</script>

<style lang="less" scoped>
  .collection-top {
    width: 100%;
    height: 88rpx;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;

    >view {
      width: 50%;
      height: 100%;
      line-height: 88rpx;
      text-align: center;

      >text {
        display: inline-block;
        height: 100%;
        color: #999;
        font-size: 32rpx;
      }

      >text.active {
        border-bottom: 4rpx solid #2764DD;
        color: #2764DD;
      }
    }
  }
</style>
