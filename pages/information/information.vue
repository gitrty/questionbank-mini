<template>
  <view class="home">
    <!-- top -->
    <view class="information-top">
      <view class="information-top-left" @tap="tabBar = true"><text :class="{ active: tabBar }">圈内好文</text></view>
      <view class="information-top-right" @tap="tabBar = false"><text :class="{ active: !tabBar }">面试经验</text></view>
    </view>

    <!-- container -->
    <view class="information-container">
      <!-- 圈内好文container区域 -->
      <view class="information-container-left" v-show="tabBar">
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
      <view class="information-container-right" v-show="!tabBar">
        <!-- <toyoInterview :interViewList="interViewList"></toyoInterview> -->
        <toyoGoodnews :godNewsList="interViewList"></toyoGoodnews>
      </view>
    </view>
  </view>
</template>

<script>
import { home } from '@api';
const { selectArticlesByPage } = home;

export default {
  data() {
    return {
      tabBar: true,
      godNewsArr: [
        {
          name: '全部',
          select: true
        },
        {
          name: '开发语言',
          select: false
        },
        {
          name: 'JAVA开发',
          select: false
        },
        {
          name: '前端开发',
          select: false
        },
        {
          name: '大数据',
          select: false
        },
        {
          name: '软件测试',
          select: false
        },
        {
          name: '开发工具',
          select: false
        },
        {
          name: '数据库',
          select: false
        }
      ],
      godNewsList: [],
      interViewList: [],
      pageNum1: 1, // 圈内好文当前页数
      pageSize1: 10,
      pageNum2: 1, // 面试经验当前页数
      pageSize2: 10
    };
  },
  mounted() {},
  async onShow() {
    // uni.showLoading({
    //   title: '文章加载中...',
    //   mask: true
    // });
    // 圈内好文
    const { list } = await selectArticlesByPage({ pageNum: this.pageNum1, pageSize: this.pageSize1 });
    this.godNewsList = list || [];

    // 面试经验
    const data = await selectArticlesByPage({ pageNum: this.pageNum2, pageSize: this.pageSize2, title: '面试经验' });
    this.interViewList = data.list || [];
    uni.hideLoading();
  },

  // 下拉刷新
  async onPullDownRefresh() {
    uni.showLoading({
      title: '文章刷新中...',
      mask: true
    });
    // 圈内好文
    const { list } = await selectArticlesByPage({ pageNum: 1, pageSize: this.pageSize1 });
    this.godNewsList = list || [];

    // 面试经验
    const data = await selectArticlesByPage({ pageNum: 1, pageSize: this.pageSize2, title: '面试经验' });
    this.interViewList = data.list || [];
    uni.hideLoading();
    wx.stopPullDownRefresh();
  },

  // 触底事件
  async onReachBottom() {
    if (this.tabBar) {
      // 圈内好文
      this.pageNum1 += 1;
      const { list } = await selectArticlesByPage({ pageNum: this.pageNum1, pageSize: this.pageSize1 });
      this.godNewsList = [...this.godNewsList, ...list];
    } else {
      // 面试经验
      this.pageNum2 += 1;
      const { list } = await selectArticlesByPage({ pageNum: this.pageNum2, pageSize: this.pageSize2, title: '面试经验' });
      this.interViewList = [...this.interViewList, ...list];
    }
  },
  methods: {
    // 技术类型切换
    movableTab(index) {
      this.godNewsArr.forEach(el => (el.select = false));
      this.godNewsArr[index].select = true;
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  overflow: hidden;
}
.information-top {
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 999;
  width: 100%;
  height: 88rpx;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;

  > view {
    width: 50%;
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

movable-area {
  height: 70rpx;
}

movable-view {
  height: 100%;
  width: 1120rpx;
  display: flex;

  > view {
    width: 140rpx;
    height: 100%;
    line-height: 70rpx;
    text-align: center;
    font-size: 24rpx;
  }
}

.information-container {
  margin-top: 88rpx;
}

.information-container-left {
  background-color: #f0f0f0;
}

.information-container-right {
  background-color: #f0f0f0;
}
</style>
