<template>
  <view class="footprint">
    <!-- top -->
    <view class="footprint-top">
      <view class="footprint-left" @tap="tabBar=0">
        <text :class="{'active':tabBar===0}">圈内好文</text>
      </view>
      <view class="footprint-middle" @tap="tabBar=1">
        <text :class="{'active':tabBar===1}">面试经验</text>
      </view>
      <view class="footprint-right" @tap="tabBar=2">
        <text :class="{'active':tabBar===2}">面试题</text>
      </view>
    </view>
    <!-- container -->
    <!-- 圈内好文 -->
    <toyoGoodnews :godNewsList="godNewsList" v-if="tabBar===0"></toyoGoodnews>
    <!-- 面试经验 -->
    <toyoInterview :interViewList="interViewList" v-if="tabBar===1"></toyoInterview>
    <!-- 面试题 -->
    <toyoQuestions :questionsList="questionsList" v-if="tabBar===2"></toyoQuestions>
    
    <!-- 无足迹 -->
    <toyoNoinfo :imgSrc="'/static/no-footer.png'" :type="'足迹'" v-if="!godNewsList.length&&!tabBar||!interViewList.length&&tabBar===1||!questionsList.length&&tabBar===2"></toyoNoinfo>
  </view>
</template>

<script>
  import {
    home
  } from "@api";
  const {
    selectArticlesByPage
  } = home;

  export default {
    data() {
      return {
        tabBar: 2,
        godNewsList: [],   // 圈内好文
        interViewList: [],  // 面试经验
        questionsList: []   // 面试题
      };
    },
    async onLoad() {
      const {
        list
      } = await selectArticlesByPage()
      // console.info(list)
      // 处理文章列表文字详情过长
      list.forEach(item => item.summary = item.summary.slice(0, 80) + '...')
      this.godNewsList = list || []
      // 面试经验
      this.interViewList = JSON.parse(JSON.stringify(this.godNewsList))
      this.interViewList.forEach(item => item.summary = item.summary.slice(0, 40) + '...')
    },
  }
</script>

<style lang="less" scoped>
  .footprint-top {
    width: 100%;
    height: 88rpx;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;

    >view {
      flex: 1;
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
