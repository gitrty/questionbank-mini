<template>
  <view class="user-analysis">
    <view class="u-a-top">
      <!-- 用户信息 -->
      <view class="analysis-user">
        <image src="../../../static/logo.png" mode=""></image>
        <view class="user-info">
          <view class="user-name">用户名用户名</view>
          <view class="user-time">1小时前回答</view>
        </view>
      </view>
      <!-- 解析内容 -->
      <view class="user-answer">
        由于clone是object类的一个protected方法，代 码不能直接调用它子类只能受保护的clone方法 克隆他自己，为此必须重由于clone是object类的一个protected方法
      </view>
    </view>
    <view class="" v-if="isComment">
      <view class="u-a-mid">11条评论</view>
      <view class="u-a-bottom tbottom-hr" v-for="index of isComment" :key="index">
        <!-- 用户信息 -->
        <view class="analysis-user">
          <image src="../../../static/logo.png" mode=""></image>
          <view class="user-info">
            <view class="user-name">用户名222</view>
            <view class="user-time">10分钟前回复</view>
          </view>
        </view>
        <!-- 评论内容 -->
        <view class="user-answer">评论评论评论评论评论评论</view>
      </view>
      <view style="height: 93rpx; background-color: #fff;"></view>
    </view>

    <!-- 无评论 -->
    <view class="no-info" v-if="!isComment">
      <image src="/static/no-pl.png" mode=""></image>
      <view class="no-txt">暂时没有相关评论</view>
    </view>

    <!-- 评论输入框 -->
    <view class="comment-ipt">
      <view class="comment-ipt-dz">
        <image src="../../../static/dianzan.png" mode=""></image>
        <view>9999点赞</view>
      </view>
      <view class="comment-ipt-r"><input type="text" placeholder="想对解析者说些什么？" v-model="inputVal" @confirm="commentVal" ref="comment" /></view>
    </view>
    <toyoPopup ref="tPopup" :text="'评论成功'"></toyoPopup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isComment: 4,
      inputVal: ''
    };
  },
  methods: {
    // 输入内容后点击完成触发
    commentVal() {
      const userComment = this.inputVal; // 用户输入内容
      if (userComment == '') return;
      this.inputVal = '';
      this.$refs.tPopup.publish();
    }
  }
};
</script>

<style lang="less">
.tbottom-hr {
  border-bottom: 1rpx solid #e8e8e8;
}
.comment-ipt {
  width: 100%;
  height: 94rpx;
  border-top: 1rpx solid #e8e8e8;
  background-color: #fff;
  position: fixed;
  z-index: 2;
  bottom: 0;
  display: flex;
  .comment-ipt-dz {
    margin-left: 20rpx;
    width: 90rpx;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // text-align: center;
    font-size: 20rpx;
    color: #333;
    // margin-left: 20rpx;
    // margin-top: 15rpx;
    > image {
      width: 36rpx;
      height: 38rpx;
    }
  }
  .comment-ipt-r {
    margin-top: 12rpx;
    margin-left: 40rpx;
    font-size: 28rpx;
    color: #333;
    > input {
      width: 534rpx;
      height: 72rpx;
      padding: 0 24rpx;
      background-color: #f4f4f4;
    }
  }
}
.user-analysis {
  background-color: #f4f4f4;
  height: 100%;
}
.u-a-mid {
  height: 92rpx;
  padding: 0 32rpx;
  background-color: #fff;
  line-height: 92rpx;
  margin-top: 18rpx;
  border-bottom: 1rpx solid #e8e8e8;
}
.u-a-top {
  padding: 40rpx 32rpx 32rpx;
  background-color: #fff;
}
.u-a-bottom {
  padding: 40rpx 32rpx 32rpx;
  background-color: #fff;
}
.analysis-user {
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
.user-answer {
  line-height: 56rpx;
  margin-top: 16rpx;
  font-size: 32rpx;
  color: #333;
  > text {
    color: #2764dd;
  }
}
.no-info {
  width: 100%;
  height: 100%;
  margin-top: 298rpx;
  text-align: center;
  padding-bottom: 298rpx;

  > image {
    width: 160rpx;
    height: 160rpx;
  }

  .no-txt {
    font-size: 30rpx;
    color: #999;
  }
}
</style>
