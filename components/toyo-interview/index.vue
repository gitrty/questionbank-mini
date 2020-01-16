<template>
  <view style="background-color: #f0f0f0;">
    <view class="activeList clearfix" v-for="(item,index) in interViewList" :key="index" @tap="jump('/pages/information/article/article',{id:item.id})">
      <view class="active-title">
        {{item.title}}
      </view>
      <view class="active-content fl">
        {{ item.content | ellipsis(40) }}
      </view>
      <image :src="item.logo" class="fl" mode=""></image>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      interViewList: {
        type: Array,
        default () {
          return [];
        }
      },
    }
  }
</script>

<style lang="less" scoped>
    .activeList {
      background-color: #fff;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 20rpx;
      padding: 32rpx;

      .active-title {
        font-weight: 900;
        font-size: 38rpx;
        margin-bottom: 16rpx;
      }

      .active-content {
        width: 393rpx;
        font-size: 30rpx;
        color: #666;
        text-align: justify;
        margin-right: 43rpx;
      }

      >image {
        width: 250rpx;
        height: 140rpx;
      }
    }
</style>
