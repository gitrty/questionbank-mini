<template>
  <view>
    <button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
      授权登录
    </button>
  </view>
</template>

<script>
  import {
    util
  } from "@api/http"
  
  export default {
    data() {
      return {

      };
    },
    methods: {
      
      // 获取用户授权
      async wxGetUserInfo() {
        try {
          uni.showLoading({ title: "正在授权中", mask: true });
          const { code } = await util.login();
          console.info(code)
          const {
            rawData,
            iv,
            signature,
            encryptedData
          } = await util.getUserInfo();
          console.info(rawData)
          // 后台获取到token
          const token = `token值`;
          uni.setStorageSync("access_token", token);
          getApp().globalData.access_token = token;
          uni.hideLoading();
          // uni.navigateBack();
        } catch (e) {
          console.info(e)
          uni.hideLoading();
          this.showToast('请授权登录')
        }
      }
  
    }
  }
</script>

<style lang="less">

</style>
