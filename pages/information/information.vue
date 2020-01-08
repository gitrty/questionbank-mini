<template>
  <view>
    <!-- top -->
    <view class="information-top">
      <view class="information-top-left" @tap="tabBar=true">
        <text :class="{'active':tabBar}">圈内好文</text>
      </view>
      <view class="information-top-right" @tap="tabBar=false">
        <text :class="{'active':!tabBar}">面试经验</text>
      </view>
    </view>
    <!-- container -->
    <view class="information-container">
      <!-- 圈内好文container区域 -->
      <view class="information-container-left" v-show='tabBar'>

        <!-- 可移动区域 -->
        <!--    <movable-area style='width:auto'>
          <movable-view animation scroll-x direction='horizontal' inertia='true'>
            <view v-for="(item,index) in godNewsArr" :key="index" @tap="movableTab(index)" :style="{'font-weight':item.select?900:500}">
              {{item.name}}
            </view>
          </movable-view>
        </movable-area> -->

        <!-- 文章列表 -->
        <toyoGoodnews :godNewsList="godNewsList"></toyoGoodnews>
      </view>
      <!-- 面试经验container区域 -->
      <view class="information-container-right" v-show='!tabBar'>
        <toyoInterview :interViewList="interViewList"></toyoInterview>
      </view>
    </view>
  </view>
</template>

<script>
  // import {
  // 	uniTag
  // } from "@dcloudio/uni-ui"
  import {
    home
  } from "@api";
  const {
    selectArticlesByPage
  } = home;

  export default {
    components: {
      // uniTag
    },
    data() {
      return {
        tabBar: false,
        godNewsArr: [{
          name: '全部',
          select: true
        }, {
          name: '开发语言',
          select: false
        }, {
          name: 'JAVA开发',
          select: false
        }, {
          name: '前端开发',
          select: false
        }, {
          name: '大数据',
          select: false
        }, {
          name: '软件测试',
          select: false
        }, {
          name: '开发工具',
          select: false
        }, {
          name: '数据库',
          select: false
        }],
        godNewsList: [],
        interViewList: []
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
    methods: {
      // 技术类型切换
      movableTab(index) {
        this.godNewsArr.forEach(el => el.select = false)
        this.godNewsArr[index].select = true
      }
    }
  }
</script>

<style lang="less" scoped>
  .information-top {
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

  movable-area {
    height: 70rpx;
  }

  movable-view {
    height: 100%;
    width: 1120rpx;
    display: flex;

    >view {
      width: 140rpx;
      height: 100%;
      line-height: 70rpx;
      text-align: center;
      font-size: 24rpx;
    }
  }

  .information-container-left {
    background-color: #f0f0f0;
  }

  .information-container-right {
    background-color: #f0f0f0;
  }
</style>
