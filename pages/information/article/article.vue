<template>
  <view class="article-info">
    <view class="title">{{ articleInfo.title }}</view>

    <view class="analysis-user">
      <image src="../../../static/logo.png" mode=""></image>
      <view class="user-info">
        <view class="user-name">用户名用户名</view>
        <view class="user-time">1小时前发布</view>
      </view>
    </view>

    <view class="content">{{ articleInfo.summary }}</view>
  </view>
</template>

<script>
import { home } from '@api';
const { selectArticlesById } = home;

export default {
  data() {
    return {
      articleInfo: {
        title: '',
        userName: '',
        summary: ''
      }
    };
  },
  async onLoad(e) {
    // console.info(e)
    const { articleInfo } = await selectArticlesById({ id: e.id });
    this.articleInfo = articleInfo || {};
    // console.info(articleInfo)
  }
};
</script>

<style lang="less" scoped>
.article-info {
  padding: 0 32rpx;

  .title {
    margin: 32rpx 0;
    font-weight: 900;
    font-size: 40rpx;
  }

  .analysis-user {
    margin-bottom: 32rpx;
    height: 72rpx;
    display: flex;
    align-items: center;
    > image {
      width: 72rpx;
      height: 72rpx;
      border-radius: 50%;
    }
    .user-info {
      margin-left: 16rpx;
      .user-name {
        font-size: 30rpx;
        color: #333;
      }
      .user-time {
        font-size: 26rpx;
        color: #999;
      }
    }
  }
}
</style>
