<template>
  <view class="details">
    <view class="details-logo"><image :src="interInfo.cover" mode=""></image></view>
    <view class="details-subject">
      <view class="details-title">{{ interInfo.title }}</view>
      <view class="details-con">{{ interInfo.abstract }}</view>
      <view class="details-introduce">
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">题型</view>
          <view class="details-introduce-col-r">
            <text v-if="interInfo.radioCount">单选{{ interInfo.radioCount }}道</text>
            <text v-if="interInfo.multipleCount">多选{{ interInfo.multipleCount }}道</text>
            <text v-if="interInfo.judgeCount">判断{{ interInfo.judgeCount }}道</text>
            <text v-if="interInfo.shortAnswerCount">简答{{ interInfo.shortAnswerCount }}道</text>
          </view>
        </view>
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">时间</view>
          <view class="details-introduce-col-r">60分钟</view>
        </view>
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">难度</view>
          <view class="details-introduce-col-r"><toyoRate :value="'4'" :checkValue="interInfo.difficulty"></toyoRate></view>
        </view>
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">热度</view>
          <view class="details-introduce-col-r">{{ interInfo.hot }}</view>
        </view>
        <view class="details-introduce-col">
          <!-- 小圆点 -->
          <view class="details-introduce-col-li"></view>
          <view class="details-introduce-col-l">分值</view>
          <view class="details-introduce-col-r">{{ interInfo.score || '' }}分</view>
        </view>
      </view>
    </view>
    <view class="details-bottom">
      <view class="details-bottom-head">
        <view class="details-bottom-icon">
          <view class="details-bottom-icon-t"></view>
          <view class="details-bottom-icon-b"></view>
        </view>
        <view class="details-bottom-tip">答前须知</view>
      </view>
      <view class="details-bottom-con">
        <view class="">1、本套试卷来源于各网络渠道，仅限GPer注册用户使用，除非经特别声明，GPer不拥有该资料版权，亦不承担任何法律责任。</view>
        <view class="">2、未经GPer或作者的同意不得随意转载，否则构成侵权，本网站或作者保留诉诸法律的权利。</view>
        <view class="">
          3、如发现本网站载有侵犯您著作权的侵权信息，请
          <button class="feedback" open-type="contact">点击发送</button>
          相关信息至GPer。
        </view>
      </view>
    </view>
    <view class="details-fixed">
      <button data-name="shareBtn" open-type="share">
        <view class="details-fixed-fx">
          <image src="../../../static/fx.png" mode=""></image>
          <view class="">分享</view>
        </view>
      </button>
      <button>
        <view class="details-fixed-sc">
          <image src="../../../static/sc.png" mode=""></image>
          <view class="">收藏</view>
        </view>
      </button>
      <view class="details-start" @tap="redirectTo('/pages/itembank/examination/examination', { id: interInfo.id })">开始考试</view>
    </view>
  </view>
</template>

<script>
import { itembank } from '@api';
const { viewSuitById } = itembank;
export default {
  data() {
    return {
      interInfo: {}
    };
  },
  methods: {},
  async onLoad(e) {
    const data = await viewSuitById({ id: e.id });
    this.interInfo = data;
    this.$store.state.viewTitle = data.title;
  },
  methods: {
    // 分享好友
    onShareAppMessage: function(options) {
      var that = this; // 设置菜单中的转发按钮触发转发事件时的转发内容
      var shareObj = {
        title: 'GPer', // 默认是小程序的名称(可以写slogan等)
        // 　　　　path: '/pages/share/share',        // 默认是当前页面，必须是以‘/’开头的完整路径
        // 　　　　imgUrl: '',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
        success: function(res) {
          // 转发成功之后的回调
          if (res.errMsg == 'shareAppMessage:ok') {
          }
        },
        fail: function() {
          // 转发失败之后的回调
          if (res.errMsg == 'shareAppMessage:fail cancel') {
            // 用户取消转发
          } else if (res.errMsg == 'shareAppMessage:fail') {
            // 转发失败，其中 detail message 为详细失败信息
          }
        },
        complete: function() {
          // 转发结束之后的回调（转发成不成功都会执行）
        }
      }; // 来自页面内的按钮的转发
      if (options.from == 'button') {
        var eData = options.target.dataset;
        shareObj.path = '/pages/information/information';
        console.log(eData.name); // shareBtn // 此处可以修改 shareObj 中的内容
        // 　　　　shareObj.path = '/pages/btnname/btnname?btn_name='+eData.name;
      } // 返回shareObj
      return shareObj;
    }
  }
};
</script>

<style lang="less" scoped>
button {
  box-sizing: border-box;
  font-size: 30rpx;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
  background-color: #fff;
  font-size: 20rpx;
  line-height: none;
  line-height: 18rpx;
}
button::after {
  content: none;
}
.feedback {
  color: #2d98f2;
}
button::after {
  content: none;
}
.details {
  .details-logo {
    width: 100%;
    height: 406rpx;
    > image {
      width: 100%;
      height: 100%;
    }
  }
  .details-subject {
    position: relative;
    padding: 38rpx 32rpx 0;
    height: 400rpx;
    .details-title {
      font-size: 40rpx;
      color: #333;
    }
    .details-con {
      font-size: 32rpx;
      color: #666;
      margin-top: 7rpx;
    }
    .details-introduce {
      background-color: #fff;
      position: absolute;
      left: 50%;
      bottom: -174rpx;
      margin-left: -335rpx;
      width: 670rpx;
      height: 348rpx;
      border-radius: 16rpx;
      box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.06);
      padding: 26rpx 25rpx;
      .details-introduce-col {
        margin-bottom: 24rpx;
        font-size: 28rpx;
        > view {
          display: inline-block;
        }
        .details-introduce-col-li {
          width: 12rpx;
          height: 12rpx;
          border-radius: 50%;
          border: 2rpx solid #999;
          vertical-align: middle;
          margin-right: 12rpx;
        }
        .details-introduce-col-l {
          color: #999;
          margin-right: 40rpx;
        }
        .details-introduce-col-r {
          color: #333;
          > text {
            margin-right: 10rpx;
          }
        }
      }
    }
  }
  .details-bottom {
    padding: 208rpx 40rpx 100rpx;
    background-color: #f4f4f4;
    .details-bottom-head {
      display: flex;
    }
    .details-bottom-icon {
      height: 25rpx;
      width: 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 9rpx;
      margin-right: 7rpx;
      .details-bottom-icon-t {
        width: 20rpx;
        height: 20rpx;
        border-radius: 50%;
        border: 2rpx solid #999;
      }
      .details-bottom-icon-b {
        width: 16rpx;
        height: 2rpx;
        background-color: #999;
        border-radius: 2rpx;
      }
    }
    .details-bottom-tip {
      font-size: 28rpx;
      color: #999;
    }
    .details-bottom-con {
      margin-top: 12rpx;
      font-size: 28rpx;
      color: #999;
      > view {
        margin-bottom: 10rpx;
        > text {
          color: #2d98f2;
        }
        > button {
          position: static;
          display: inline-block;
          padding: 0;
          overflow: visible;
          line-height: 28rpx;
          font-size: 28rpx;
          border: none;
          color: #2d98f2;
        }
      }
    }
  }
  .details-fixed {
    width: 100%;
    height: 94rpx;
    background-color: #fff;
    position: fixed;
    bottom: 0rpx;
    z-index: 10;
    display: flex;
    .details-fixed-fx {
      margin-left: 84rpx;
    }
    .details-fixed-sc {
      margin-left: 103rpx;
    }
    view {
      margin-top: 14rpx;
      image {
        width: 40rpx;
        height: 40rpx;
      }
      view {
        font-size: 20rpx;
        color: #333;
      }
    }
    .details-start {
      width: 386rpx;
      height: 72rpx;
      background-color: #2764dd;
      font-size: 28rpx;
      line-height: 72rpx;
      text-align: center;
      color: #fff;
      border-radius: 6rpx;
      margin-left: 83rpx;
    }
  }
}
</style>
