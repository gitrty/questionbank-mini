<template>
  <view class="analysis" @touchstart="start" @touchend="end">
    <view class="ex-ans">
      <view class="ex-ans-type fl">单选题</view>
      <view class="ex-ans-fraction fl">10分</view>
    </view>
    <!-- 1 - 选项/简答区域 -->
    <view class="an-container">
      <!-- 题目 -->
      <view class="an-container-title">{{ nowAnswerNum }}.下面关于目前嵌入式最小硬件系统的叙 述中,错误的是?</view>

      <!-- 选择题 -->
      <view class="" v-if="false">
        <view class="an-success">
          <image src="../../../static/success-an.png" mode=""></image>
          <text class="tgreen">正确答案 {{ paper[nowAnswerNum - 1].successAnswer }}</text>
          <text class="you-an">你的答案 {{ userAnswer[nowAnswerNum - 1] }}</text>
        </view>
        <!-- 选项 -->
        <view class="an-option" v-for="(item, index) in paper[nowAnswerNum - 1].answer" :key="index">
          <text :class="{ tred2: userAnswer[nowAnswerNum - 1].includes(item.sNum) && !item.isSuccess, tgreen: item.isSuccess }">{{ item.sNum }}.{{ item.content }}</text>
          <image src="/static/error.png" mode="" v-if="userAnswer[nowAnswerNum - 1].includes(item.sNum) && !item.isSuccess"></image>
          <image src="/static/success-an.png" mode="" v-if="item.isSuccess"></image>
        </view>
      </view>

      <!-- 简答题 -->
      <view class="" v-if="true">
        <view class="an-reference">
          <view class="an-reference-top">
            <image src="../../../static/danan-success.png" mode=""></image>
            <text>参考答案</text>
          </view>
          <view class="an-reference-con">答案内容答案内容答案内容答案内容答案内容答案 内容答案内容答案内容答案内容答案内容答案内容 答案内容答案内容答案内容答案内容</view>
        </view>
        <view class="you-reference">
          <view class="an-reference-top">
            <image src="../../../static/danan-you.png" mode=""></image>
            <text>你的答案</text>
          </view>
          <view class="an-reference-con">答案内容答案内容答案内容答案内容答案内容答案 内容答案内容答案内容答案内容答案内容答案内容 答案内容答案内容答案内容答案内容</view>
        </view>
      </view>
    </view>

    <!-- 2 - 解析区域 -->
    <view class="analysis-con" v-if="isInfo">
      <view class="analysis-con-title">
        <text class="fl">12条解析</text>
        <text :class="['fr moren', isNew ? '' : 'tgary']" @tap="isNew = true">最新</text>
        <text :class="['fr', isNew ? 'tgary' : '']" @tap="isNew = false">默认</text>
      </view>
      <!-- v-for - start -->
      <view class="analysis-container" v-for="index of 4" :key="index">
        <!-- 用户信息 -->
        <view class="analysis-user">
          <image src="../../../static/logo.png" mode=""></image>
          <view class="user-info">
            <view class="user-name">用户名用户名</view>
            <view class="user-time">1小时前回答</view>
          </view>
        </view>
        <!-- 解析内容 -->
        <view class="user-answer">
          {{ analysisContent | ellipsis(65) }}{{ ' ' }}
          <text v-if="analysisContent.length >= 65" @tap="jump('/pages/itembank/userAnalysis/userAnalysis')">查看全文</text>
        </view>
        <view class="analysis-data">
          <view class="">
            <image src="../../../static/dz1.png" mode=""></image>
            <text>67点赞</text>
          </view>
          <view class="">
            <image src="../../../static/pl1.png" mode=""></image>
            <text>11评论</text>
          </view>
        </view>
        <!-- 评论 -->
        <view class="analysis-comment">
          <view class="user-comment">
            <text>用户名用户名 ：</text>
            <text>{{ '那也就是说 这种写法是根据jdk的建议来写的，还有就是super.clone()方法是na哈哈哈哈哈' | ellipsis(45) }}</text>
          </view>
          <view class="user-comment">
            <text>用户2 ：</text>
            <text>{{ '说得很不错，点赞！' | ellipsis(50) }}</text>
          </view>
          <view class="every-comment" v-if="true" @tap="jump('/pages/itembank/userAnalysis/userAnalysis')">查看全部11条评论</view>
        </view>
      </view>
      <!-- v-for - end -->
    </view>

    <!-- 3 - 底部导航 -->
    <view class="ex-nav">
      <view class="ex-nav-con" @tap="openMore">
        <image src="../../../static/ex-1.png" mode="" v-show="!isMore"></image>
        <view class="ex-nav-txt" v-show="!isMore">更多</view>
        <image src="../../../static/close.png" mode="" v-show="isMore"></image>
        <view class="ex-nav-txt" v-show="isMore">关闭</view>
      </view>
      <view class="ex-nav-con">
        <image src="../../../static/ex-2.png" mode=""></image>
        <view class="ex-nav-txt">分享</view>
      </view>
      <view class="ex-nav-con" @tap="openAnCard">
        <image src="../../../static/ex-3.png" mode="" v-show="!isAnCard"></image>
        <view class="ex-nav-txt" v-show="!isAnCard">答题卡</view>
        <image src="../../../static/close.png" mode="" v-show="isAnCard"></image>
        <view class="ex-nav-txt" v-show="isAnCard">关闭</view>
      </view>
      <view class="ex-nav-con" @tap="tabSign">
        <image :src="paper[nowAnswerNum - 1].isSign ? '/static/sign-1.png' : '/static/ex-4.png'" mode=""></image>
        <view class="ex-nav-txt">标记</view>
      </view>
      <view class="ex-nav-con" @tap="jump('/pages/itembank/publishAnalysis/publishAnalysis')">
        <image src="../../../static/dp.png" mode=""></image>
        <view class="ex-nav-txt tblue">发表解析</view>
      </view>
    </view>

    <!-- 答题卡 -->
    <view class="an-card" v-show="isAnCard">
      <view v-for="index of paper.length" :class="['serial-number', index + 1 === nowAnswerNum ? 'active' : '']" :key="index" @tap="tabExamination(index)">
        <text>{{ index + 1 }}</text>
        <!-- 标记题目 -->
        <image src="../../../static/sign-1.png" mode="" class="ex-sign" v-show="paper[index].isSign"></image>
        <!-- 收藏题目 -->
        <image src="../../../static/collection.png" mode="" class="ex-collection" v-show="paper[index].isCollection"></image>
      </view>
    </view>

    <!-- 更多 -->
    <view class="ex-more" v-if="isMore">
      <view v-show="!paper[nowAnswerNum - 1].isInterView" @tap="paper[nowAnswerNum - 1].isInterView = true">
        <image src="../../../static/more-1.png" mode=""></image>
        <text>面过此题</text>
      </view>
      <view v-show="paper[nowAnswerNum - 1].isInterView" @tap="paper[nowAnswerNum - 1].isInterView = false">
        <image src="../../../static/yes-ct.png" mode=""></image>
        <text class="tgary">已面此题</text>
      </view>
      <view v-show="!paper[nowAnswerNum - 1].isCollection" @tap="paper[nowAnswerNum - 1].isCollection = true">
        <image src="../../../static/more-2.png" mode=""></image>
        <text>收藏题目</text>
      </view>
      <view v-show="paper[nowAnswerNum - 1].isCollection" @tap="paper[nowAnswerNum - 1].isCollection = false">
        <image src="../../../static/yes-sc.png" mode=""></image>
        <text class="tgary">已收藏此题</text>
      </view>
    </view>

    <!-- 遮罩层 -->
    <view class="ex-mask" v-show="isAnCard || isMore"></view>
    <!-- 无解析 -->
    <view class="no-info" v-if="!isInfo">
      <image src="/static/no-jx.png" mode=""></image>
      <view class="no-txt">暂时没有相关解析</view>
    </view>

    <view style="height: 94rpx;background-color: #fff;"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isAnCard: false, // 答题卡显示状态
      isMore: false, // 更多显示状态
      nowAnswerNum: 2, // 当前题号,
      isNew: false, // 默认/最新解析
      isInfo:true, // 有无解析
      // 所有题
      paper: [
        {
          id: 1,
          answer: [
            { sNum: 'A', content: '嵌入式最小硬件系统包括嵌入式处理器1', checked: false, isSuccess: false },
            { sNum: 'B', content: '嵌入式最小硬件系统包括嵌入式处理器2', checked: false, isSuccess: true },
            { sNum: 'C', content: '嵌入式最小硬件系统包括嵌入式处理器3', checked: false, isSuccess: false },
            { sNum: 'D', content: '嵌入式最小硬件系统包括嵌入式处理器4', checked: false, isSuccess: false }
          ],
          successAnswer: 'B', // 正确答案
          isSign: false, // 标记
          isCollection: false, // 收藏
          isInterView: false // 是否面过
        },
        {
          id: 2,
          answer: [
            { sNum: 'A', content: '嵌入式最小硬件系统包括嵌入式处理器111', checked: false, isSuccess: false },
            { sNum: 'B', content: '嵌入式最小硬件系统包括嵌入式处理器2222', checked: false, isSuccess: false },
            { sNum: 'C', content: '嵌入式最小硬件系统包括嵌入式处理器3333', checked: false, isSuccess: true },
            { sNum: 'D', content: '嵌入式最小硬件系统包括嵌入式处理器44444', checked: false, isSuccess: true }
          ],
          successAnswer: 'CD',
          isSign: true,
          isCollection: false,
          isInterView: false
        }
      ],
      // 用户答案
      userAnswer: ['A', 'AC'],
      // 滑动距离
      startData: { clientX: 0 },
      // 模拟解析内容
      analysisContent:
        '由于clone是object类的一个protected方法，代 码不能直接调用它子类只能受保护的clone方法 克隆他自己，为此必须重由于clone是object类的一个protected方法，代 码不能直接调用它子类只能受保护的clone方法 克隆他自己，为此必须重'
    };
  },
  onLoad() {
    // 修改当前页面标题 NavigationBarTitle
    uni.setNavigationBarTitle({
      title: `${this.nowAnswerNum}/${this.paper.length}`
    });
  },
  methods: {
    // 滑动切换考题
    start(e) {
      this.startData.clientX = e.changedTouches[0].clientX;
    },
    end(e) {
      const subX = e.changedTouches[0].clientX - this.startData.clientX;
      if (subX > 100 && this.nowAnswerNum > 1) {
        // 右滑
        this.nowAnswerNum--;
        uni.setNavigationBarTitle({
          title: `${this.nowAnswerNum}/${this.paper.length}`
        });
      } else if (subX < -100 && this.nowAnswerNum < this.paper.length) {
        // 左滑
        this.nowAnswerNum++;
        uni.setNavigationBarTitle({
          title: `${this.nowAnswerNum}/${this.paper.length}`
        });
      }
    },

    // 打开答题卡
    openAnCard() {
      this.isAnCard = !this.isAnCard;
      this.isMore = false;
    },

    // 打开更多
    openMore() {
      this.isMore = !this.isMore;
      this.isAnCard = false;
    },

    // 答题卡：点击切换题目
    tabExamination(index) {
      this.nowAnswerNum = index + 1;
    },

    // 标记/取消标记
    tabSign() {
      this.paper[this.nowAnswerNum - 1].isSign = !this.paper[this.nowAnswerNum - 1].isSign;
    }
  }
};
</script>

<style lang="less" scoped>
.analysis {
  background-color: #f4f4f4;
}
.ex-mask {
  position: fixed;
  top: 0;
  width: 100%;
  height: 90%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.32);
}
.no-info {
  width: 100%;
  height: 100%;
  margin-top: 90rpx;
  text-align: center;
  padding-bottom: 90rpx;
  > image {
    width: 122rpx;
    height: 160rpx;
  }

  .no-txt {
    font-size: 30rpx;
    color: #999;
  }
}
.analysis-con {
  margin-top: 16rpx;
  background-color: #fff;
  .analysis-con-title {
    height: 94rpx;
    line-height: 94rpx;
    padding: 0 32rpx;
    color: #333;
    .moren {
      margin-left: 56rpx;
    }
  }
  .analysis-container {
    border-top: 1rpx solid #e8e8e8;
    padding: 40rpx 32rpx 32rpx;
    .analysis-user {
      height: 72rpx;
      display: flex;
      align-items: center;
      > image {
        width: 72rpx;
        height: 72rpx;
        border-radius: 50%;
      }
      .user-info {
        margin-left: 16rpx;
        .user-name {
          font-size: 30rpx;
          color: #333;
        }
        .user-time {
          font-size: 26rpx;
          color: #999;
        }
      }
    }
    .user-answer {
      line-height: 56rpx;
      margin-top: 16rpx;
      font-size: 32rpx;
      color: #333;
      > text {
        color: #2764dd;
      }
    }
    .analysis-data {
      margin-top: 18rpx;
      font-size: 28rpx;
      color: #999;
      display: flex;
      image {
        width: 28rpx;
        height: 25rpx;
        margin-right: 8rpx;
      }
      > view {
        margin-right: 80rpx;
      }
    }
    .analysis-comment {
      margin-top: 20rpx;
      background-color: #f4f4f4;
      padding: 18rpx 24rpx;
      font-size: 28rpx;
      // height: 200rpx;
      .user-comment {
        margin-bottom: 18rpx;
        > text:nth-of-type(1) {
          color: #333;
        }
        > text:nth-of-type(2) {
          color: #666;
        }
      }
      .every-comment {
        color: #999;
      }
    }
  }
}
.an-container {
  background-color: #fff;
  padding: 32rpx;
  .an-container-title {
    font-size: 40rpx;
  }
  .an-success {
    margin-top: 24rpx;
    background-color: #fafafa;
    height: 72rpx;
    line-height: 72rpx;
    padding: 0 32rpx;
    font-size: 32rpx;
    margin-bottom: 32rpx;
    > image {
      width: 32rpx;
      height: 32rpx;
      margin-right: 16rpx;
      margin-bottom: -4rpx;
    }
    .you-an {
      color: #666;
      margin-left: 96rpx;
    }
  }
  .an-option {
    position: relative;
    margin-left: 58rpx;
    font-size: 30rpx;
    color: #666666;
    > image {
      position: absolute;
      top: 6rpx;
      left: -48rpx;
      width: 32rpx;
      height: 32rpx;
    }
  }
  .an-option + .an-option {
    margin-top: 40rpx;
  }
  .an-reference {
    padding: 25rpx 32rpx;
    color: #63dd27;
    background-color: #effce9;
    margin-top: 22rpx;
    .an-reference-top {
      font-size: 30rpx;
      margin-bottom: 10rpx;
      > image {
        width: 28rpx;
        height: 29rpx;
        margin-right: 10rpx;
      }
    }
    .an-reference-con {
      font-size: 28rpx;
    }
  }
  .you-reference {
    padding: 25rpx 32rpx;
    color: #666;
    background-color: #fafafa;
    margin-top: 32rpx;
    .an-reference-top {
      font-size: 30rpx;
      margin-bottom: 10rpx;
      > image {
        width: 28rpx;
        height: 29rpx;
        margin-right: 10rpx;
        margin-bottom: -4rpx;
      }
    }
    .an-reference-con {
      font-size: 28rpx;
    }
  }
}
.ex-ans {
  background-color: #fff;
  width: 100%;
  height: 48rpx;
  margin-top: 32rpx;
  padding: 0 32rpx;
  .ex-ans-type {
    width: 120rpx;
    height: 48rpx;
    border-radius: 6rpx;
    border: 1rpx solid #2764dd;
    line-height: 46rpx;
    text-align: center;
    font-size: 28rpx;
    color: #2764dd;
  }
  .ex-ans-fraction {
    width: 80rpx;
    height: 48rpx;
    line-height: 46rpx;
    text-align: center;
    border-radius: 6rpx;
    color: #fcd901;
    border: 1rpx solid #fcd901;
    margin-left: 16rpx;
    font-size: 28rpx;
  }
}
.ex-nav {
  background-color: #fff;
  width: 100%;
  height: 94rpx;
  position: fixed;
  z-index: 2;
  bottom: 0;
  border-top: 1rpx solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 55rpx;
  .ex-nav-con {
    width: 80rpx;
    font-size: 20rpx;
    text-align: center;
    color: #333;
    > image {
      width: 40rpx;
      height: 40rpx;
    }
    .ex-nav-txt {
    }
  }
}
.an-card {
  position: fixed;
  z-index: 10;
  bottom: 94rpx;
  width: 100%;
  height: 448rpx;
  background-color: #fff;
  border-radius: 32rpx 32rpx 0 0;
  padding: 48rpx 20rpx 0;
  .serial-number {
    width: 64rpx;
    height: 64rpx;
    background-color: #fafafa;
    color: #333;
    font-size: 32rpx;
    text-align: center;
    line-height: 64rpx;
    border-radius: 4rpx;
    float: left;
    margin: 0 12rpx 32rpx;
    position: relative;
  }
  .serial-number.active {
    background-color: #e9effc;
    color: #2764dd;
  }
  .ex-sign {
    width: 20rpx;
    height: 22rpx;
    position: absolute;
    top: -2rpx;
    left: -2rpx;
  }
  .ex-collection {
    width: 22rpx;
    height: 22rpx;
    position: absolute;
    right: -6rpx;
    bottom: -7rpx;
  }
}
.ex-more {
  position: fixed;
  z-index: 10;
  bottom: 94rpx;
  width: 100%;
  height: 218rpx;
  background-color: #fff;
  border-radius: 32rpx 32rpx 0 0;
  padding: 0 32rpx;
  display: flex;
  flex-direction: column;
  > view {
    flex: 1;
    text-align: center;
    line-height: 109rpx;
    > image {
      width: 32rpx;
      height: 32rpx;
      margin-bottom: -4rpx;
      margin-right: 16rpx;
    }
    &:nth-of-type(1) {
      border-bottom: 1rpx solid #e8e8e8;
    }
  }
}
</style>
