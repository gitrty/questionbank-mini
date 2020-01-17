<template>
  <view class="article-info">
    <view class="title">{{ articleInfo.title }}</view>

    <view class="analysis-user">
      <image :src="articleInfo.avatarUrl" mode=""></image>
      <view class="user-info">
        <view class="user-name">{{ articleInfo.userName }}</view>
        <view class="user-time">发布时间：{{ articleInfo.createdAt }}</view>
      </view>
    </view>

    <rich-text class="content" :nodes="articleInfo.content"></rich-text>
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
        createdAt: '',
        avatarUrl: '',
        content: ''
      }
    };
  },
  async onLoad(e) {
    const { articleInfo } = await selectArticlesById({ id: e.id });
    // 处理图片过大的问题
    articleInfo.content = articleInfo.content.replace(/\<img/gi, '<img style="display:-webkit-box;width:100% !important;margin:10px auto !important;" ');

    this.articleInfo = articleInfo || {};
  }
};
</script>

<style lang="less" scoped>
.article-info {
  width: 100%;
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

rich-text {
  // width: 670rpx;
  // display: block;
  // font-size: 28rpx;
  // color: #353535;
  // letter-spacing: 1rpx;
}
</style>
