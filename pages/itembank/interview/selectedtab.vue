<template>
  <view class="selected-tab">
    <!-- 选中总数 -->
    <view class="select-num">已选择 {{ selectNum }} 家公司</view>
    <!-- 公司标签 -->
    <view class="select-mincard" v-for="(item, index) in companyList" :key="index">
      <view :class="['select-mincard-con', 'fl', item.cur ? 'cur' : '']" @tap="checkCom(index)">{{ item.name }}</view>
    </view>
    <!-- 保存按钮 -->
    <view class="select-btn"><view class="select-btn-con" @tap="backToInter">开始考试</view></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      companyList: [],
      selectNum: 0
    };
  },
  methods: {
    // 选中的公司，选中公司的总数
    checkCom(index) {
      if (index === 0 && this.companyList[0].cur) {
        this.companyList.forEach(item => (item.cur = false));
        this.selectNum = this.$store.state.selectNum = 0;
        return;
      }
      if (index === 0 && !this.companyList[0].cur) {
        this.companyList.forEach(item => (item.cur = true));
        this.selectNum = this.$store.state.selectNum = this.companyList.length - 1;
        return;
      }
      this.companyList[index].cur = !this.companyList[index].cur;
      this.companyList[0].cur = this.companyList.every(item => item.cur);
      let count = 0;
      this.companyList.forEach(item => (item.cur ? count++ : ''));
      this.selectNum = this.$store.state.selectNum = count;
    },
    // 返回上一级
    backToInter() {
      let pages = getCurrentPages(); // 获取当前存在的所有页面
      let currPage = pages[pages.length - 1]; // 当前页面
      let prevPage = pages[pages.length - 2]; // 上一个页面
      if (this.selectNum == this.companyList.length - 1) this.selectNum = this.$store.state.selectNum = '···';
      uni.navigateBack();
    }
  },
  onLoad(e) {
    this.companyList = this.$store.state.companyList;
    this.selectNum = this.$store.state.selectNum;
  }
};
</script>

<style lang="less" scoped>
.select-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 94rpx;
  border-top: 1rpx solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  .select-btn-con {
    width: 686rpx;
    height: 72rpx;
    background-color: #2764dd;
    color: #fff;
    border-radius: 6rpx;
    line-height: 72rpx;
    font-size: 28rpx;
    text-align: center;
  }
}
.select-num {
  font-size: 30rpx;
  color: #333;
  margin: 32rpx;
}
.select-mincard {
  padding: 0 16rpx;
  .select-mincard-con {
    height: 64rpx;
    padding: 12rpx 17rpx;
    border: 1rpx solid #e8e8e8;
    border-radius: 6rpx;
    font-size: 28rpx;
    color: #666;
    margin: 16rpx;
  }
  .select-mincard-con.cur {
    border: 1rpx solid #e9effc;
    color: #2764dd;
    background-color: #e9effc;
  }
}
</style>
