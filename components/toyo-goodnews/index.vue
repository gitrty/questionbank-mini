<template>
  <view style="background-color: #f0f0f0;">
    <!--  -->
    <view class="activeList" v-for="(item, index) in godNewsList" :key="index" @tap="jump('/pages/information/article/article', { id: item.id })">
      <view class="active-title">{{ item.title }}</view>
      <view class="active-content">{{ item.content | ellipsis(80) }}</view>
      <view class="active-footer clearfix">
        <image src="../../static/msg.png" class="fl"></image>
        <view class="active-comments fl">{{ item.comments }}评论</view>
        <image src="../../static/look.png" class="fl"></image>
        <view class="active-views fl">{{ item.views }}浏览</view>
        <view class="active-username fr">
          <!-- {{item.userName}} -->
          原创
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    godNewsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.activeList {
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 16rpx;
  padding: 32rpx;

  .active-title {
    font-weight: 900;
    font-size: 38rpx;
    margin-bottom: 16rpx;
  }

  .active-content {
    font-size: 30rpx;
    color: #666;
    text-align: justify;
  }

  .active-footer {
    margin-top: 10rpx;
    font-size: 28rpx;
    color: #aaa;

    > image {
      width: 28rpx;
      height: 25rpx;
      margin-top: 6rpx;
      margin-right: 8rpx;
    }

    .active-comments,
    .active-views {
      margin-right: 40rpx;
    }

    .active-username {
      width: 72rpx;
      height: 40rpx;
      font-size: 26rpx;
      border: 1rpx solid #e8e8e8;
      text-align: center;
      line-height: 38rpx;
    }
  }
}
</style>
