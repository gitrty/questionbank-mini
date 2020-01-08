<template>
  <view class="filtering">
    <view class="filtering-con">
      <!-- 已选标签 -->
      <view class="filtering-con-tag">
        <view class="filtering-tit fw">已选标签</view>
        <view class="tab-details">
          <text>#</text>
          <text v-for="index of 5" :key="index">标签1</text>
        </view>
      </view>
      <!-- 选择题型 -->
      <view class="filtering-con-type clearfix">
        <view class="filtering-tit fw">选择题型 (可多选)</view>
        <view class="font28">
          <view :class="['con-tab-card', ' fl', item.isChecked ? 'card-active' : '']" v-for="(item, index) in topicType" :key="index" @tap="topicTypeClick(index)">
            {{ item.name }}
          </view>
        </view>
      </view>

      <!-- 出题来源 -->
      <view class="filtering-con-type clearfix">
        <view class="filtering-tit fw">出题来源</view>
        <view class="font28">
          <view :class="['con-tab-card', ' fl', item.isChecked ? 'card-active' : '']" v-for="(item, index) in topicSource" :key="index" @tap="topicSourceClick(index)">
            {{ item.name }}
          </view>
        </view>
      </view>

      <!-- 出题数量 -->
      <view class="filtering-con-type clearfix">
        <view class="filtering-tit fw">出题数量</view>
        <view class="font28">
          <view :class="['con-tab-card', ' fl', item.isChecked ? 'card-active' : '']" v-for="(item, index) in topicNum" :key="index" @tap="topicNumClick(index)">
            {{ item.num }}题
          </view>
        </view>
      </view>
    </view>

    <view style="height: 94rpx; background-color: #fff;"></view>
    <!-- 底部导航 -->
    <view class="bottom-nav">
      <view class="nav-prev" @tap="navigateBack()">上一步</view>
      <view class="nav-next" @tap="jump('/pages/itembank/examination/examination')">确认练习</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 题型
      topicType: [
        { name: '随机出题', isChecked: true },
        { name: '单选题', isChecked: false },
        { name: '多选题', isChecked: false },
        { name: '判断题', isChecked: false },
        { name: '简答题', isChecked: false }
      ],
      // 出题来源
      topicSource: [{ name: '随机出题', isChecked: true }, { name: '只出新题', isChecked: false }, { name: '只出错题', isChecked: false }, { name: '新题+错题', isChecked: false }],
      // 出题数量
      topicNum: [{ num: 5, isChecked: true }, { num: 10, isChecked: false }, { num: 15, isChecked: false }, { num: 20, isChecked: false }]
    };
  },
  methods: {
    topicTypeClick(index) {
      // 可多选但不包括第一项
      this.topicType[index].isChecked = !this.topicType[index].isChecked;
      if (!index && this.topicType[index].isChecked) this.topicType.forEach((item, i) => (i === 0 ? 0 : (item.isChecked = false)));
      if (index && this.topicType[index].isChecked) this.topicType[0].isChecked = false;
    },
    topicSourceClick(index) {
      this.topicSource.forEach(item => (item.isChecked = false));
      this.topicSource[index].isChecked = true;
    },
    topicNumClick(index) {
      this.topicNum.forEach(item => (item.isChecked = false));
      this.topicNum[index].isChecked = true;
    }
  }
};
</script>

<style lang="less" scoped>
.font28 {
  font-size: 28rpx;
}
.filtering-con {
  padding: 32rpx 0;
}
.filtering-tit {
  font-size: 30rpx;
  color: #333;
  margin-bottom: 16rpx;
}
.con-tab-card {
  height: 64rpx;
  border: 1rpx solid #e8e8e8;
  line-height: 62rpx;
  padding: 0 17rpx;
  border-radius: 6rpx;
  margin: 0 16rpx;
  margin-bottom: 32rpx;
}
.card-active {
  background-color: #e9effc;
  color: #2764dd;
  border: 1rpx solid #e9effc;
}

.filtering-con-tag {
  padding: 0 32rpx;
  margin-bottom: 32rpx;
  .tab-details {
    color: #999;
    > text {
      font-size: 28rpx;
      margin-right: 36rpx;
    }
  }
}
.filtering-con-type {
  margin-bottom: 8rpx;
  padding: 0 16rpx;
  .filtering-tit {
    margin-left: 16rpx;
  }
}
.bottom-nav {
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 2;
  height: 94rpx;
  border-top: 1rpx solid #e8e8e8;
  padding: 0 32rpx;
  font-size: 28rpx;
  display: flex;
  text-align: center;
  padding-top: 12rpx;
  .nav-prev {
    width: 246rpx;
    height: 72rpx;
    border-radius: 6rpx;
    border: 1rpx solid #2764dd;
    line-height: 70rpx;
    background-color: #fff;
    color: #2764dd;
  }
  .nav-next {
    width: 408rpx;
    height: 72rpx;
    border-radius: 6rpx;
    line-height: 72rpx;
    background-color: #2764dd;
    color: #fff;
    margin-left: 32rpx;
  }
}
</style>
