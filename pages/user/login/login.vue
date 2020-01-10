<template>
  <view>
    <!-- <button class="bottom" type="primary" open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">授权登录</button> -->

    <view>
      <view>
        <view class="header"><image src="/static/wx_login.png"></image></view>
        <view class="content">
          <view>申请获取以下权限</view>
          <text>获得你的公开信息(昵称，头像、地区等)</text>
        </view>

        <button class="bottom" type="primary" open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">授权登录</button>
      </view>
    </view>
  </view>
</template>

<script>
import { util } from '@api/http';

export default {
  data() {
    return {};
  },
  methods: {
    // 获取用户授权
    async wxGetUserInfo() {
      try {
        uni.showLoading({ title: '正在授权中', mask: true });
        const { code } = await util.login();
        console.info(code);
        const { rawData, iv, signature, encryptedData } = await util.getUserInfo();
        console.info(rawData);
        // 后台获取到token
        const token = `token值`;
        uni.setStorageSync('access_token', token);
        getApp().globalData.access_token = token;
        uni.hideLoading();
        // uni.navigateBack();
      } catch (e) {
        console.info(e);
        uni.hideLoading();
        this.showToast('请授权登录');
      }
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  margin: 90rpx 0 90rpx 50rpx;
  border-bottom: 1px solid #ccc;
  text-align: center;
  width: 650rpx;
  height: 300rpx;
  line-height: 450rpx;
}

.header image {
  width: 200rpx;
  height: 200rpx;
}

.content {
  margin-left: 50rpx;
  margin-bottom: 90rpx;
}

.content text {
  display: block;
  color: #9d9d9d;
  margin-top: 40rpx;
}

.bottom {
  border-radius: 80rpx;
  margin: 70rpx 50rpx;
  font-size: 35rpx;
}
</style>
