<template>
  <view class="special">
    <view
      :class="['special-card', 'fl', index === 0 ? 'custom' : '']"
      v-for="(item, index) in specialList"
      :key="index"
      @tap="jump('/pages/itembank/special/selectTab', { title: item.title })"
    >
      <image :src="item.imgSrc" mode=""></image>
      <text>{{ item.title }}</text>
      <text>题库量 {{ item.num }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      specialList: [
        { imgSrc: '/static/diy-b.png', title: '自定义练习', num: 999 },
        { imgSrc: '/static/zt-java.png', title: 'JAVA', num: 999 },
        { imgSrc: '/static/zt-jg.png', title: '架构', num: 999 },
        { imgSrc: '/static/zt-py.png', title: '人工智能', num: 999 },
        { imgSrc: '/static/zt-dsj.png', title: '大数据', num: 999 },
        { imgSrc: '/static/zj-qd.png', title: '前端', num: 999 },
        { imgSrc: '/static/zt-qt.png', title: '其他', num: 999 }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.special {
  padding: 40rpx 16rpx;
  border: none;
  .custom {
    background-color: #e9effc;
    > text:nth-of-type(1) {
      font-weight: 700;
      font-size: 30rpx;
      margin-top: 16rpx;
      margin-bottom: 6rpx;
      color: #2764dd;
    }
    > text:nth-of-type(2) {
      font-size: 26rpx;
      color: #2764dd;
    }
  }
}
.special-card {
  width: 207rpx;
  height: 198rpx;
  border: 1rpx solid #e8e8e8;
  border-radius: 6rpx;
  margin: 0 16rpx;
  margin-bottom: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > image {
    width: 48rpx;
    height: 48rpx;
  }
  > text:nth-of-type(1) {
    font-weight: 700;
    font-size: 30rpx;
    margin-top: 16rpx;
    margin-bottom: 6rpx;
    color: #333;
  }
  > text:nth-of-type(2) {
    font-size: 26rpx;
    color: #999;
  }
}
</style>
