<template>
  <view class="special">
    <!-- , index === 0 ? 'custom' : '' -->
    <view :class="['special-card', 'fl']" v-for="(item, index) in viewClassify" :key="index" @tap="jumpSelect(index)">
      <image src="/static/diy-b.png" mode="" v-if="item.classifyName.includes('自定义')"></image>
      <image src="/static/zt-java.png" mode="" v-if="item.classifyName.includes('JAVA')"></image>
      <image src="/static/zt-jg.png" mode="" v-if="item.classifyName.includes('架构')"></image>
      <image src="/static/zt-py.png" mode="" v-if="item.classifyName.includes('人工智能')"></image>
      <image src="/static/zt-dsj.png" mode="" v-if="item.classifyName.includes('大数据')"></image>
      <image src="/static/zj-qd.png" mode="" v-if="item.classifyName.includes('前端')"></image>
      <image src="/static/zt-qt.png" mode="" v-if="item.classifyName.includes('其')"></image>
      <text>{{ item.classifyName }}</text>
      <text>题库量 {{ item.questionCountClassify }}</text>
    </view>
  </view>
</template>

<script>
import { itembank } from '@api';
const { viewClassifyList } = itembank;
export default {
  data() {
    return {
      viewClassify: []
    };
  },
  async onLoad() {
    // const viewClassify = await viewClassifyList({ userId: this.$store.state.userId });
    const viewClassify = await viewClassifyList({ userId: 5250 });
    console.info(viewClassify);
    this.viewClassify = viewClassify;
  },
  methods: {
    jumpSelect(index) {
      this.$store.state.exTitle = this.viewClassify[index].classifyName;
      this.jump('/pages/itembank/special/selectTab', { classifyId: this.viewClassify[index].classifyId });
    }
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
