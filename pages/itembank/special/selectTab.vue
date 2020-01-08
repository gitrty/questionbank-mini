<template>
  <view class="select-tab">
    <view class="select-tab-con">
      <view class="select-tab-title fw">请选择以下专题标签（{{ selectedNum }}/5）</view>

      <view class="select-tab-vfor clearfix" v-for="(item, index) in cardList" :key="index">
        <view class="s-t-top fw">{{ item.name }}</view>
        <view class="s-t-con" v-for="(tagItem, tagIndex) in item.card" :key="tagIndex">
          <view :class="['con-tab-card', ' fl', tagItem.isChecked ? 'card-active' : '']" @tap="selectTag(index, tagIndex)">{{ tagItem.tag }}</view>
        </view>
      </view>
    </view>

    <view style="height: 94rpx; background-color: #fff;"></view>

    <!-- 底部导航 -->
    <view class="bottom-nav">
      <view class="nav-prev" @tap="navigateBack()">上一步</view>
      <view class="nav-next" @tap="jump('/pages/itembank/special/filtering')">下一步</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          // 专题名称
          name: 'JAVA',
          // 专题所有标签（isChecked：选中状态）
          card: [
            { tag: '标签11', isChecked: false },
            { tag: '标签122', isChecked: false },
            { tag: '标签421', isChecked: false },
            { tag: '标签14', isChecked: false },
            { tag: '标签1643', isChecked: false }
          ]
        },
        {
          name: 'python',
          card: [
            { tag: '标签标签11', isChecked: false },
            { tag: '标签11', isChecked: false },
            { tag: '标签11', isChecked: false },
            { tag: '标签11', isChecked: false },
            { tag: '标签11', isChecked: false }
          ]
        },
        {
          name: '前端',
          card: [
            { tag: '标签11', isChecked: false },
            { tag: '标签11', isChecked: false },
            { tag: '标签11', isChecked: false },
            { tag: '标签11', isChecked: false },
            { tag: '标签11', isChecked: false }
          ]
        }
      ],
      selectedNum: 0 // 选中的标签数量
    };
  },
  onLoad(e) {
    // 修改当前页面标题 NavigationBarTitle
    uni.setNavigationBarTitle({
      title: e.title
    });
  },
  methods: {
    selectTag(index, tagIndex) {
      // 当前标签的状态
      const nowCheck = this.cardList[index].card[tagIndex].isChecked;

      // 最多选择5个标签
      if (!nowCheck && this.selectedNum >= 5) return;

      // 切换选中/未选中
      this.cardList[index].card[tagIndex].isChecked = !nowCheck;

      // 控制选中数量
      if (nowCheck) this.selectedNum--;
      else this.selectedNum++;
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
