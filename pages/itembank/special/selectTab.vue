<template>
  <view class="select-tab">
    <view class="select-tab-con">
      <!-- （{{ selectedNum }}/5） -->
      <view class="select-tab-title fw">请选择以下专题标签</view>

      <!--  v-for="(item, index) in cardList" :key="index" -->
      <view class="select-tab-vfor clearfix">
        <!-- <view class="s-t-top fw">{{ item.name }}</view> -->
        <view class="s-t-con" v-for="(tagItem, tagIndex) in labelList" :key="tagIndex">
          <view :class="['con-tab-card', ' fl', tagItem.isChecked ? 'card-active' : '']" @tap="selectTag(tagItem.labelId, tagItem.labelName, tagIndex)">
            {{ tagItem.labelName }}
          </view>
        </view>
      </view>
    </view>

    <view style="height: 94rpx; background-color: #fff;"></view>

    <!-- 底部导航 -->
    <view class="bottom-nav">
      <view class="nav-prev" @tap="navigateBack()">上一步</view>
      <view class="nav-next" @tap="nextBack">下一步</view>
    </view>
  </view>
</template>

<script>
import { itembank } from '@api';
const { getLabelListByClassifyId } = itembank;
export default {
  data() {
    return {
      selectedNum: 0, // 选中的标签数量
      labelList: [],
      labelId: null,
      labelName: null
    };
  },
  async onLoad(e) {
    const labelList = await getLabelListByClassifyId({ classifyId: e.classifyId });
    labelList.forEach(item => (item.isChecked = false));
    this.labelList = labelList;
  },
  methods: {
    // 选择标签
    selectTag(labelId, labelName, index) {
      this.labelId = labelId;
      this.labelName = labelName;
      this.labelList.forEach(item => (item.isChecked = false));
      this.labelList[index].isChecked = true;
    },

    // 下一步
    nextBack() {
      if (!this.labelId) this.showToast('请选择标签');
      else this.jump('/pages/itembank/special/filtering', { labelId: this.labelId, labelName: this.labelName });
    }
  }
};
</script>

<style scoped lang="less">
.select-tab {
}
.select-tab-con {
  padding: 32rpx;
}
.select-tab-title {
  font-size: 30rpx;
  color: #333;
  margin-bottom: 40rpx;
}
.select-tab-vfor {
  .s-t-top {
    font-size: 30rpx;
    color: #333;
    margin-bottom: 16rpx;
  }
  .s-t-con {
    font-size: 28rpx;
    color: #666;
    .con-tab-card {
      height: 64rpx;
      border: 1rpx solid #e8e8e8;
      line-height: 62rpx;
      padding: 0 17rpx;
      border-radius: 6rpx;
      margin-bottom: 32rpx;
      margin-right: 32rpx;
    }
    .card-active {
      background-color: #e9effc;
      color: #2764dd;
      border: 1rpx solid #e9effc;
    }
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
