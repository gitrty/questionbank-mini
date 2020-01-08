<template>
  <view>
    <uni-popup ref="popup" type="center">
      <view class="t-popup">
        <image src="/static/duigou.png" mode=""></image>
        <text>{{ text }}</text>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import uniPopup from '../uni-popup/uni-popup.vue';
export default {
  components: {
    uniPopup
  },
  props: {
    text: {
      type: String,
      default: '操作成功'
    }
  },
  methods: {
    publish() {
      // 打开 popup 提示框
      this.$refs.popup.open();
      setTimeout(() => {
        this.$refs.popup.close();
      }, 1500);
    }
  }
};
</script>

<style lang="less" scoped>
.t-popup {
  width: 300rpx;
  height: 160rpx;
  border-radius: 8rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.08);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > image {
    width: 36rpx;
    height: 36rpx;
    margin-bottom: 16rpx;
  }
}
</style>
