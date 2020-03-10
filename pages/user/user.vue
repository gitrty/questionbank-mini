<template>
  <view>
    <view class="user-info">
      <image src="../../static/mybg.png" mode="" class="bg"></image>
      <view class="user">
        <view class=""></view>
        <view class="user-top">
          <view class="user-head">
            <!-- 用户头像 -->
            <image src="../../static/logo.png" mode=""></image>
          </view>
          <!-- 用户名 -->
          <view class="user-name">{{ userInfo.name }}</view>
        </view>
      </view>
      <!-- 收藏、分享、足迹 -->
      <view class="user-grid">
        <view @tap="jump('./collection/collection')">
          <image src="../../static/mysc.png" mode=""></image>
          <view class="grid-top">0</view>
          <view class="grid-bottom">收藏</view>
        </view>
        <view @tap="jump('./share/share')">
          <image src="../../static/mgfx.png" mode=""></image>
          <view class="grid-top">0</view>
          <view class="grid-bottom">分享</view>
        </view>
        <view @tap="jump('./footprint/footprint')">
          <image src="../../static/myzj.png" mode=""></image>
          <view class="grid-top">0</view>
          <view class="grid-bottom" @tap="jump('./login/login')">足迹</view>
        </view>
      </view>
      <!-- 答题详情、在线反馈 -->
      <view class="answer">
        <view class="answer-detaile" @tap="jump('/pages/itembank/answer/answer')">
          <image src="../../static/tabbar/information.png" class="fl" mode=""></image>
          <text class="fl">答题详情</text>
          <image src="../../static/right.png" mode="" class="fr"></image>
        </view>
        <button class="feedback" open-type="contact">
          <image src="../../static/msg2.png" mode="" class="fl"></image>
          <text class="fl">在线反馈</text>
          <image src="../../static/right.png" mode="" class="fr"></image>
        </button>
      </view>
      <!-- 下部分阴影 -->
      <view class="shadow"></view>
      <!-- 分割线 -->
      <view class="myhr"></view>
    </view>
    <!-- 退出账号 -->
    <!-- <view class="esc-login" v-show="userStatus"><text @tap="escLogin">退出登录</text></view> -->

    <!-- 登录注册 - start -->
    <view class="user-popup-mask" v-if="modelStatus"></view>
    <view :class="['user-popup-box', modelStatus ? 'user-popup-box-show' : '']">
      <!-- 登录：绑定邮箱 -->
      <view class="user-login" v-show="isLogin">
        <view class="close-popup"><image src="../../static/guanbi.png" class="fr" mode="" @tap="closeModel"></image></view>
        <view class="user-login-title">登录GPer</view>
        <view class="user-login-txt">请绑定邮箱</view>
        <view class="user-login-form">
          <view :class="{ uName: true, 'uName-active': loginAnimate.uNameActive }">账号</view>
          <!-- <view :class="{ uPwd: true, 'uPwd-active': loginAnimate.uPwdActive }">密码</view> -->
          <input
            type="text"
            placeholder="请输入邮箱"
            v-model="loginForm.uName"
            placeholder-style="color:#e2e4ea;"
            @focus="loginAnimate.uNameActive = true"
            @blur="loginAnimate.uNameActive = loginForm.uName == '' ? false : true"
          />
          <!--   <input
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.uPwd"
            placeholder-style="color:#e2e4ea;"
            @focus="loginAnimate.uPwdActive = true"
            @blur="loginAnimate.uPwdActive = loginForm.uPwd == '' ? false : true"
          /> -->
          <view class="login-btn" @tap="wxLogin">确认绑定</view>
          <view class="user-go-reg fr">
            没有账号？
            <text @tap="isLogin = false">去注册</text>
          </view>
        </view>
        <view class="wx-login" v-show="false">
          <text>其他登录方式</text>
          <view><image src="../../static/weixin.png" mode="" @tap="wxLogin"></image></view>
        </view>
      </view>
      <!-- 注册 -->
      <view class="user-register" v-show="!isLogin">
        <view class="close-popup"><image src="../../static/guanbi.png" class="fr" mode="" @tap="closeModel"></image></view>
        <view class="user-reg-title">注册GPer</view>
        <view class="user-reg-form">
          <view :class="{ uName: true, 'uName-active': regAnimate.uNameActive }">昵称</view>
          <view :class="{ uEmail: true, 'uEmail-active': regAnimate.uEmailActive }">邮箱</view>
          <view :class="{ uPwd: true, 'uPwd-active': regAnimate.uPwdActive }">密码</view>
          <view :class="{ repeatPwd: true, 'uRepeat-active': regAnimate.repeatPwd }">确认密码</view>
          <input
            type="text"
            placeholder="昵称"
            v-model="regForm.uName"
            placeholder-style="color:#e2e4ea;"
            @focus="regAnimate.uNameActive = true"
            @blur="regAnimate.uNameActive = regForm.uName == '' ? false : true"
          />
          <input
            type="text"
            placeholder="请输入邮箱"
            v-model="regForm.uEmail"
            placeholder-style="color:#e2e4ea;"
            @focus="regAnimate.uEmailActive = true"
            @blur="regAnimate.uEmailActive = regForm.uEmail == '' ? false : true"
          />
          <input
            type="password"
            placeholder="请输入密码"
            v-model="regForm.uPwd"
            placeholder-style="color:#e2e4ea;"
            @focus="regAnimate.uPwdActive = true"
            @blur="regAnimate.uPwdActive = regForm.uPwd == '' ? false : true"
          />
          <input
            type="password"
            placeholder="请再次输入密码"
            v-model="regForm.uRepeat"
            placeholder-style="color:#e2e4ea;"
            @focus="regAnimate.repeatPwd = true"
            @blur="regAnimate.repeatPwd = regForm.uRepeat == '' ? false : true"
          />
          <view class="login-btn" @tap="register">注册并登录</view>
          <view class="user-go-login fr">
            已有账号？
            <text @tap="isLogin = true">去绑定</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 登录注册 - end -->
  </view>
</template>

<script>
import { util } from '@api/http';
import { user } from '@api';
const { wxLogin, wxBinding, register } = user;
export default {
  data() {
    return {
      modelStatus: false, // 登录注册页面出现状态
      userStatus: false, // 用户登录状态
      isLogin: true, // 登录/注册 切换
      isEmail: false, // 是否绑定了邮箱
      // 登录输入框动画
      loginAnimate: {
        uNameActive: false,
        uPwdActive: false
      },
      // 登录状态账号密码绑定
      loginForm: {
        uName: '',
        uPwd: ''
      },
      // 注册状态输入框动画
      regAnimate: {
        uNameActive: false,
        uEmailActive: false,
        uPwdActive: false,
        repeatPwd: false
      },
      // 注册状态信息绑定
      regForm: {
        uName: '',
        uEmail: '',
        uPwd: '',
        uRepeat: ''
      },
      userInfo: ''
    };
  },
  onTabItemTap() {
    // this.userStatus = this.$store.state.userStatus;
    // this.modelStatus = !this.$store.state.userStatus;
    // if (!this.userStatus) {
    //   uni.hideTabBar({ animation: true });
    // }
  },
  async onShow() {
    if (this.$store.state.userId == '') {
      const { code } = await util.login();
      const userInfo = await wxLogin({ code: code });
      this.userInfo = userInfo;
      this.$store.state.userInfo = userInfo;
      console.info(userInfo);
      // 用户没有绑定邮箱
      if (!userInfo.userId) {
        // 测试使用
        this.userStatus = this.$store.state.userId;
        this.modelStatus = !this.$store.state.userId;
        if (!this.userStatus) {
          uni.hideTabBar({ animation: true });
        }
        return;
      }
      uni.removeStorageSync('visitorToken')
      uni.setStorageSync('accessToken', userInfo.accessToken);
      uni.setStorageSync('userId', this.$store.state.userId);
      this.$store.state.userId = userInfo.userId;
    } else {
      const { code } = await util.login();
      const userInfo = await wxLogin({ code: code });
      uni.removeStorageSync('visitorToken')
      uni.setStorageSync('accessToken', userInfo.accessToken);
      this.userInfo = this.$store.state.userInfo = userInfo;
      uni.setStorageSync('userId', this.$store.state.userId);
    }
  },
  methods: {
    // 登录
    login() {
      // 正则验证...
      this.showToast('密码不正确');

      // 登录成功
      this.successLogin();
    },

    // 绑定邮箱并登录
    async wxLogin() {
      // 验证邮箱格式
      if (/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.loginForm.uName)) {
        const data = await wxBinding({ email: this.loginForm.uName, openId: this.userInfo.openId });
        console.info(data);
        // 邮箱不存在
        if (!data.userId) {
          this.showToast('邮箱不存在，请先注册');
        } else {
          // 绑定成功
          this.$store.state.userId = data.userId;
          uni.setStorageSync('userId', this.$store.state.userId);
          this.userInfo = data;
          this.successLogin();
        }
      } else {
        this.showToast('请输入正确的邮箱');
      }
    },

    // 注册并登录
    async register() {
      // 正则验证...
      if (this.regForm.uName == '' || this.regForm.uEmail == '' || this.regForm.uPwd == '' || this.regForm.uRepeat == '') {
        this.showToast('请输入完整信息');
        return;
      }
      if (!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.regForm.uEmail)) {
        this.showToast('请输入正确的邮箱');
        return;
      }
      if (this.regForm.uPwd.length < 6) {
        this.showToast('密码不能小于6位');
        return;
      }
      if (this.regForm.uPwd !== this.regForm.uRepeat) {
        this.showToast('两次密码不一致');
        return;
      }
      const data = await register({ email: this.regForm.uEmail, name: this.regForm.uName, password: this.regForm.uPwd });
      if (data === null) {
        this.showToast('邮箱已存在');
        return;
      }
      // 注册成功后自动绑定邮箱
      const data2 = await wxBinding({ email: this.regForm.uEmail, openId: this.userInfo.openId });
      uni.setStorageSync('userId', this.$store.state.userId);
      this.$store.state.userId = data2.userId;
      this.userInfo = data2;
      // 注册并登录成功
      this.successLogin();
    },

    // 取消登录/注册
    closeModel() {
      this.modelStatus = false;
      uni.showTabBar({ animation: true });
      this.jump('/pages/information/information');
    },

    // 登录/注册并登录 成功
    successLogin() {
      // 登录成功够关闭 登录/注册 框
      this.modelStatus = false;
      // 登录成功 -> 更新用户登录状态
      this.userStatus = this.$store.state.userId;
      uni.showTabBar({ animation: true });
    },

    // 退出登录
    escLogin() {
      let _this = this;
      uni.showModal({
        title: '温馨提示',
        content: '确认退出登录吗？',
        success: function(res) {
          if (res.confirm) {
            // console.log('用户点击确定');
            _this.userStatus = _this.$store.state.userId = '';
            _this.jump('/pages/information/information');
          } else if (res.cancel) {
            // console.log('用户点击取消');
          }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.user-popup-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(37, 38, 45, 0.7);
  top: 0;
  z-index: 99;
}
.user-popup-box-show {
  bottom: 0rpx !important;
}
.user-popup-box {
  height: 1180rpx;
  width: 100%;
  background-color: #fff;
  position: fixed;
  z-index: 100;
  border-radius: 48rpx 48rpx 0 0;
  bottom: -1180rpx;
  transition: all 0.3s;
  .user-register {
    .close-popup {
      height: 120rpx;
      padding: 40rpx 40rpx 0 0;
      > image {
        width: 42rpx;
        height: 42rpx;
      }
    }
    .user-reg-title {
      height: 80rpx;
      width: 100%;
      line-height: 80rpx;
      text-align: center;
      color: #2764dd;
      font-size: 56rpx;
    }
    .user-reg-form {
      position: relative;
      height: 780rpx;
      padding: 40rpx;
      > input {
        height: 100rpx;
        border-bottom: 1rpx solid #e2e4ea;
        margin-top: 20rpx;
        // padding-top: 20rpx;
        font-size: 30rpx;
      }
      .login-btn {
        height: 88rpx;
        background-color: #2764dd;
        color: #fff;
        font-size: 32rpx;
        line-height: 88rpx;
        text-align: center;
        border-radius: 12rpx;
        margin-top: 60rpx;
      }
      .user-go-login {
        margin-top: 24rpx;
        font-size: 28rpx;
        color: #333;
        > text {
          color: #2764dd;
        }
      }
      .uName,
      .uEmail,
      .uPwd,
      .repeatPwd {
        position: absolute;
        font-size: 28rpx;
        color: #999;
        transition: all 0.3s;
        opacity: 0;
      }
      .uName {
        top: 80rpx;
      }
      .uEmail {
        top: 200rpx;
      }
      .uPwd {
        top: 320rpx;
      }
      .repeatPwd {
        top: 440rpx;
      }
      .uName-active {
        opacity: 1;
        top: 50rpx;
      }
      .uEmail-active {
        opacity: 1;
        top: 172rpx;
      }
      .uPwd-active {
        opacity: 1;
        top: 292rpx;
      }
      .uRepeat-active {
        opacity: 1;
        top: 412rpx;
      }
    }
  }
  .user-login {
    .close-popup {
      height: 120rpx;
      padding: 40rpx 40rpx 0 0;
      > image {
        width: 42rpx;
        height: 42rpx;
      }
    }
    .user-login-title {
      height: 80rpx;
      width: 100%;
      line-height: 80rpx;
      text-align: center;
      color: #2764dd;
      font-size: 56rpx;
    }
    .user-login-txt {
      margin-top: 8rpx;
      height: 40rpx;
      width: 100%;
      left: 40rpx;
      text-align: center;
      color: #2764dd;
      font-size: 28rpx;
    }
    .user-login-form {
      position: relative;
      height: 536rpx;
      padding: 40rpx;
      > input {
        height: 100rpx;
        border-bottom: 1rpx solid #e2e4ea;
        margin-top: 20rpx;
        // padding-top: 20rpx;
        font-size: 30rpx;
      }
      .login-btn {
        height: 88rpx;
        background-color: #2764dd;
        color: #fff;
        font-size: 32rpx;
        line-height: 88rpx;
        text-align: center;
        border-radius: 12rpx;
        margin-top: 60rpx;
      }
      .user-go-reg {
        margin-top: 24rpx;
        font-size: 28rpx;
        color: #333;
        > text {
          color: #2764dd;
        }
      }
      .uName,
      .uPwd {
        position: absolute;
        font-size: 28rpx;
        color: #999;
        transition: all 0.3s;
        opacity: 0;
      }
      .uName {
        top: 80rpx;
      }
      .uPwd {
        top: 200rpx;
      }
      .uName-active {
        opacity: 1;
        top: 50rpx;
      }
      .uPwd-active {
        opacity: 1;
        top: 172rpx;
      }
    }
    .wx-login {
      font-size: 28rpx;
      color: #999;
      > text {
        display: block;
        text-align: center;
      }
      > view {
        margin: 30rpx auto 0;
        width: 104rpx;
        height: 104rpx;
        background-color: #f4f4f4;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        > image {
          width: 80rpx;
          height: 80rpx;
        }
      }
    }
  }
}
.user-info {
  position: relative;
  width: 100%;
  height: 646rpx;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .user {
    padding-top: 1rpx;

    .user-top {
      width: 100%;
      height: 104rpx;
      margin-top: 136rpx;
      margin-bottom: 58rpx;
      display: flex;

      .user-head {
        width: 104rpx;
        height: 104rpx;
        margin-left: 33rpx;

        > image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .user-name {
        font-family: 'SimHei';
        height: 104rpx;
        line-height: 104rpx;
        font-size: 38rpx;
        color: #fff;
        margin-left: 32rpx;
      }
    }
  }

  .user-grid {
    height: 166rpx;
    display: flex;
    justify-content: space-between;

    > view {
      // width: 58rpx;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
      margin: 0 84rpx;
      color: #ffffff;
      font-family: 'SimHei';

      > image {
        width: 58rpx;
        height: 58rpx;
      }

      > view {
        text-align: center;
        font-size: 26rpx;
      }

      .grid-top {
        font-size: 40rpx;
      }

      .grid-bottom {
        font-size: 28rpx;
      }
    }
  }
}

.answer {
  position: absolute;
  width: 686rpx;
  height: 248rpx;
  background-color: #fff;
  border-radius: 16rpx;
  bottom: -124rpx;
  left: 50%;
  margin-left: -343rpx;
  display: flex;
  flex-direction: column;

  > view {
    width: 100%;
    position: relative;
    background-color: #fff;
    border: none;
    flex-grow: 1;
    line-height: 124rpx;
    padding: 0 42rpx;
    color: #333;
    font-size: 30rpx;
    font-weight: 900;
    display: flex;
    align-items: center;
    border-radius: 16rpx 16rpx 0 0;
    image {
      width: 30rpx;
      height: 30rpx;
      margin-right: 18rpx;
    }
    image:nth-of-type(2) {
      position: absolute;
      right: 40rpx;
    }
  }
  > button {
    border-radius: 0 0 16rpx 16rpx;
    width: 100%;
    position: relative;
    background-color: #fff;
    border: none;
    flex-grow: 1;
    line-height: 124rpx;
    padding: 0 42rpx;
    color: #333;
    font-size: 30rpx;
    font-weight: 900;
    display: flex;
    align-items: center;
    image {
      width: 30rpx;
      height: 30rpx;
      margin-right: 18rpx;
    }
    image:nth-of-type(2) {
      position: absolute;
      right: 40rpx;
    }
  }
}

.shadow {
  position: absolute;
  width: 686rpx;
  height: 124rpx;
  background-color: #fff;
  border-radius: 0 0 16rpx 16rpx;
  bottom: -124rpx;
  left: 50%;
  margin-left: -343rpx;
  box-shadow: 0 4rpx 20rpx #ccc;
  z-index: -1;
}

.myhr {
  position: absolute;
  width: 100%;
  height: 1rpx;
  border: 1rpx dashed #999;
  bottom: 0;
  z-index: 1;
}

.esc-login {
  margin-top: 172rpx;
  text-align: center;
  color: #999999;
  font-size: 28rpx;
}
</style>
