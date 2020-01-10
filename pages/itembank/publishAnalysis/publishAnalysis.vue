<template>
  <view class="publish-analysis">
    <view class="publish-top">
      <text @tap="navigateBack()">取消</text>
      <view class="publish-btn tblue">发表</view>
    </view>
    <view class="publish-title">{{ title }}</view>
    <!-- 输入框 -->
    <view class="ex-container-short"><textarea value="" maxlength="-1" placeholder="请输入解析内容" /></view>
    <!-- 添加图片 -->
    <view class="add-photo">
      <image src="../../../static/addphoto.png" mode=""></image>
      <text @tap="addImage">添加图片</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '题目：如果一个头条的客户端程序，冷启动时间为冷启动时间为冷启动时间为'
    };
  },
  methods: {
    addImage() {
      // 添加图片
      uni.chooseImage({
        // count: 6, //默认9
        // sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        // sourceType: ['album'], //从相册选择
        success: function({ tempFilePaths, tempFiles }) {
          console.info(tempFilePaths);
          console.info(tempFiles);
          // 获取图片信息
          uni.getImageInfo({
            src: tempFilePaths[0],
            success: function(image) {
              console.info(image)
            }
          });
          
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.publish-top {
  height: 96rpx;
  font-size: 32rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32rpx;
  > text {
    color: #999;
  }
  .publish-btn {
    width: 160rpx;
    height: 64rpx;
    border-radius: 6rpx;
    border: 1rpx solid #2764dd;
    line-height: 64rpx;
    text-align: center;
  }
}
.publish-title {
  height: 90rpx;
  background-color: #f4f4f4;
  padding: 0 32rpx;
  line-height: 90rpx;
  font-size: 30rpx;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ex-container-short {
  > textarea {
    height: 405rpx;
    width: 700rpx;
    padding: 32rpx;
    font-size: 32rpx;
    color: #333;
  }
}
.add-photo {
  width: 100%;
  // position: fixed;
  // bottom: 0;
  // height: 92rpx;
  border-top: 1rpx solid #e8e8e8;
  padding: 0 32rpx;
  font-size: 30rpx;
  color: #333;
  line-height: 92rpx;
  > image {
    width: 28rpx;
    height: 28rpx;
    margin-right: 12rpx;
    margin-bottom: -4rpx;
  }
}
</style>
