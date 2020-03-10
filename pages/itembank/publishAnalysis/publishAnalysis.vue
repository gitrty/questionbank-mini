<template>
  <view class="publish-analysis">
    <view class="publish-top">
      <text @tap="navigateBack()">取消</text>
      <view class="publish-btn tblue" @tap="publish">发表</view>
    </view>
    <view class="publish-title">{{ title }}</view>
    <!-- 输入框 -->
    <view class="ex-container-short"><textarea v-model="value" @input="onInput" maxlength="-1" placeholder="请输入解析内容" /></view>
    <!-- 添加图片 -->
    <view class="add-photo">
      <!--  <image src="../../../static/addphoto.png" mode=""></image>
      <text @tap="addImage">添加图片</text> -->
    </view>
    <!-- 添加后预览图片 -->
    <view class="bottom-image fl" v-for="(item, index) in photoList" :key="index">
      <image :src="item" mode="aspectFit" class="min-image"></image>
      <image src="../../../static/close.png" mode="" class="close-min-image" @tap="delImage(index)"></image>
    </view>
  </view>
</template>

<script>
import { itembank } from '@api';
const { getAnswerList, getAnswerById, selectCommentsByPage, addUpdateComments, pageQueryByCommentsReply, replyComment } = itembank;

export default {
  data() {
    return {
      value: '',
      title: '',
      photoList: [], // 添加的所有图片地址
      sourceId: ''
    };
  },

  onLoad(e) {
    console.info(e);
    this.title = e.bt;
    this.sourceId = e.sourceId;
  },

  methods: {
    onInput() {
      console.info();
    },

    // 添加图片
    addImage() {
      let _this = this;
      // 添加图片
      uni.chooseImage({
        // count: 6, //默认9
        // sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        // sourceType: ['album'], //从相册选择
        success: function({ tempFilePaths, tempFiles }) {
          console.info(tempFilePaths); // 可同时选择多张图片
          // 将选中的所有图片添加到预览区
          tempFilePaths.forEach(item =>
            // 获取图片信息
            uni.getImageInfo({
              src: item,
              success: function(image) {
                console.info(image);
                _this.photoList.push(image.path);
              }
            })
          );
        }
      });
    },

    // 删除图片
    delImage(index) {
      this.photoList.splice(index, 1);
    },

    // 发表
    async publish() {
      const addPl = await addUpdateComments({
        userId: this.$store.state.userId,
        content: this.value,
        sourceId: this.sourceId,
        sourceType: 'App\\Models\\exercise',
        type: 'add'
      });
      this.showToast('发表成功');
      
      
      // await addUpdateComments({
      //   userId: this.$store.state.userId,
      //   content: '哈哈哈哈哈',
      //   sourceId: this.sourceId,
      //   sourceType: 'App\\Models\\Comment',
      //   type: 'add'
      // });
      
      
      
      uni.navigateBack()
    }
  }
};
</script>

<style lang="less" scoped>
.bottom-image {
  width: 200rpx;
  height: 200rpx;
  margin-left: 32rpx;
  margin-bottom: 20rpx;
  border: 1rpx solid #ddd;
  position: relative;
  .min-image {
    width: 100%;
    height: 100%;
  }
  .close-min-image {
    width: 40rpx;
    height: 40rpx;
    position: absolute;
    top: -20rpx;
    right: -20rpx;
  }
}
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
