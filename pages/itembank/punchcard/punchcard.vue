<template>
  <view class="punch-card">
    <view class="punch-top">共打卡 {{ daysCount }} 天</view>
    <view>
      <view class="calendar">
        <!-- 标题 -->
        <view class="title">
          <view class="arrow" @click="changeMonth('pre')"><image src="/static/bl.png" mode=""></image></view>
          <view class="year-month">
            <text>{{ currentYear }}年{{ currentMonth }}月</text>
          </view>

          <view class="arrow" @click="changeMonth('next')"><image src="/static/br.png" mode=""></image></view>
        </view>
        <!-- 星期行 -->
        <view class="weekdays">
          <view v-for="(val, key) in weeks" :key="key">
            <text>{{ val }}</text>
          </view>
        </view>
        <!-- 日期 -->
        <view class="days">
          <view v-for="(val, key) in days" :key="key" class="day-txt" @tap="punchInfo(val)">
            <!-- 只显示本月的日期 -->
            <!-- 
            .qred 红色数字  
            .qblue 蓝色数字
            -->
            <text v-if="!((key < 6 && val.day.getDate() > 20) || (key > 27 && val.day.getDate() < 10))" class="">{{ val.day.getDate() }}</text>
            <!-- 蓝色小圆点 -->
            <!-- <view class="blue-spot"></view> -->
            <!-- 红色小圆点 -->
            <!-- <view class="red-spot"></view> -->

            <!-- 标注当前天：灰色背景 -->
            <view
              class="now-day"
              v-if="
                val.day.getDate() === nowDay.d &&
                  val.day.getMonth() === nowDay.m &&
                  val.day.getFullYear() === nowDay.y &&
                  !((key < 6 && val.day.getDate() > 20) || (key > 27 && val.day.getDate() < 10))
              "
            >
              <!-- 当前天：'待打卡' 文字 -->
              <view class="now-ddk" v-if="!isPunch">待打卡</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 指定天打卡详情 -->
    <view class="punch-info" v-show="punchInfoCard">
      <view class="punch-info-con">
        <view class="punch-info-date">{{ clickDate.mouth }}月{{ clickDate.day }} 周{{ clickDate.week | numToWeek }}</view>
        <!-- 卡片 -->
        <view class="clock-top">
          <view class="clock-card">
            <image src="/static/1.png" mode="" class="clock-bg"></image>
            <view class="clock-con">
              <text>11</text>
              <text>次</text>
            </view>
            <view class="clock-txt">大厂面试</view>
          </view>
          <view class="clock-card">
            <image src="/static/2.png" mode="" class="clock-bg"></image>
            <view class="clock-con">
              <text>11</text>
              <text>次</text>
            </view>
            <view class="clock-txt">专题练习</view>
          </view>
        </view>
        <!-- 功能按钮 -->
        <!-- 状态1 - 已打卡 -->
        <view class="punch-fun" v-if="!punchStatus">
          <!-- <view class="punch-download">
            <image src="../../../static/download.png" mode=""></image>
            <text>下载海报</text>
          </view> -->
          <view class="punch-share">
            <image src="../../../static/sharef.png" mode=""></image>
            <!-- <text>分享至好友</text> -->
            <button data-name="shareBtn" open-type="share">分享至好友</button>
          </view>
        </view>
        <!-- 状态2 - 立即打卡 -->
        <view class="punch-fun2" v-if="punchStatus === 1">
          <view class="punch-crd">
            <image src="../../../static/pun-card.png" mode=""></image>
            <text>立即打卡</text>
          </view>
        </view>
        <!-- 状态3 - 已过打卡时间 -->
        <view class="punch-fun3" v-if="punchStatus === 2">打卡时间已过时，请等待补卡功能上线</view>
        <!-- 已打卡状态 - 分割线 -->
        <!-- <view class="punch-hr" v-if="!punchStatus"></view> -->
        <view class="close-punch-info" @tap="punchInfoCard = false">╳</view>
      </view>
    </view>
  </view>
</template>

<script>
import { itembank } from '@api';
const { getDaysCount, getAnswerSituation, todayIsCard } = itembank;
export default {
  data() {
    return {
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 1,
      weeks: ['一', '二', '三', '四', '五', '六', '日'],
      days: [],
      nowDay: {
        y: '',
        m: '',
        d: ''
      },
      punchInfoCard: false, // 点击日期后显示当日打卡信息
      punchStatus: 0, // 打卡状态：0:已打卡  1:待打卡  2:已超打卡时间
      clickDate: {
        mouth: 12,
        day: 1,
        week: 1
      },
      daysCount: '', // 打卡总天数,
      isPunch: 0 // 是否打卡
    };
  },
  created() {
    this.init();
    let d = new Date();
    this.nowDay.y = d.getFullYear();
    this.nowDay.m = d.getMonth();
    this.nowDay.d = d.getDate();
  },
  async onLoad() {
    // 获取打卡总天数
    const { daysCount } = await getDaysCount({ userId: this.$store.state.userId });
    this.daysCount = daysCount;

    const isPunch = await todayIsCard({ userId: this.$store.state.userId });
    this.isPunch = isPunch
  },
  methods: {
    init(data) {
      let day;
      let _this = this;
      if (data) {
        day = new Date(data);
      } else {
        let now = new Date();
        day = new Date(_this.formDate(now.getFullYear(), now.getMonth() + 1, 1));
      }
      this.currentDay = day.getDate();
      this.currentYear = day.getFullYear();
      this.currentMonth = day.getMonth() + 1;

      this.currentWeek = day.getDay();

      if (!this.currentWeek) this.currentWeek = 7;

      this.days.length = 0;
      let str = this.formDate(_this.currentYear, _this.currentMonth, _this.currentDay);
      for (let i = 2 - this.currentWeek; i < 39 - this.currentWeek; i++) {
        let d = new Date(str);
        d.setDate(i);
        // console.info(d.getDate())
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!此处添加打卡状态！！！！！！！！！！！！！！！！！！！！！！！
        this.days.push({
          day: d
        });
      }
    },

    //切换月份
    changeMonth(a) {
      let _this = this;
      let d = new Date(_this.formDate(_this.currentYear, _this.currentMonth, 1));

      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(n) 参数n为 上月最后一天的前后n天
      a === 'pre' ? d.setDate(0) : d.setDate(35);

      this.init(_this.formDate(d.getFullYear(), d.getMonth() + 1, 1));
    },

    //返回字符串个格式的日期
    formDate(year, month, day) {
      return year + '/' + month + '/' + day;
    },

    // 查看指定日期的打卡信息
    async punchInfo({ day }) {
      // 获取当前时间
      let nowDate = new Date();
      // 获取点击日的时间
      let date = new Date(day);
      if (nowDate.getTime() < date.getTime()) return;
      this.clickDate.mouth = date.getMonth() + 1;
      this.clickDate.day = date.getDate();
      this.clickDate.week = date.getDay();
      // 显示打卡信息
      this.punchInfoCard = true;
      // 获取点击日的数据详情
      let oDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      console.info(oDate);
      console.info(this.$store.state.userId)
      const data = await getAnswerSituation({ userId: this.$store.state.userId, date: oDate });
      console.info(data);
    },

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
        console.log(eData.name); // shareBtn // 此处可以修改 shareObj 中的内容
        shareObj.path = '/pages/information/information';
        // 　　　　shareObj.path = '/pages/btnname/btnname?btn_name='+eData.name;
      } // 返回shareObj
      return shareObj;
    }
  }
};
</script>

<style lang="less" scoped>
page {
  // height: 100%;
}
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
  display: inline;
}
button::after {
  content: none;
}
.qred {
  color: #e14420 !important;
}
.qblue {
  color: #2764dd !important;
}

.punch-card {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .punch-info {
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.32);

    .punch-info-con {
      position: absolute;
      width: 560rpx;
      height: 480rpx;
      border-radius: 32rpx;
      background-color: #fff;
      left: 50%;
      top: 50%;
      margin-left: -280rpx;
      margin-top: -240rpx;

      .punch-info-date {
        font-size: 30rpx;
        color: #333;
        text-align: center;
        margin-top: 40rpx;
        margin-bottom: 35rpx;
      }

      .punch-fun {
        position: absolute;
        bottom: 0;
        height: 110rpx;
        width: 100%;
        display: flex;
        border-top: 1px solid #e8e8e8;

        > view {
          flex: 1;
          line-height: 110rpx;
          text-align: center;
          font-size: 30rpx;

          > image {
            width: 30rpx;
            height: 25rpx;
            margin-right: 7rpx;
          }

          &:nth-of-type(1) {
            color: #333;
          }

          &:nth-of-type(2) {
            color: #2764dd;
          }
        }
      }

      .punch-fun2 {
        position: absolute;
        bottom: 0;
        height: 110rpx;
        width: 100%;
        display: flex;
        border-top: 1px solid #e8e8e8;

        > view {
          flex: 1;
          line-height: 110rpx;
          text-align: center;
          font-size: 30rpx;
          color: #2764dd;

          > image {
            width: 30rpx;
            height: 25rpx;
            margin-right: 7rpx;
          }
        }
      }

      .punch-fun3 {
        position: absolute;
        bottom: 0;
        height: 110rpx;
        width: 100%;
        display: flex;
        border-top: 1px solid #e8e8e8;
        font-size: 30rpx;
        color: #999;
        line-height: 110rpx;
        padding: 0 25rpx;
      }
    }

    .close-punch-info {
      width: 56rpx;
      height: 56rpx;
      font-size: 56rpx;
      color: #fff;
      position: absolute;
      left: 50%;
      margin-left: -16rpx;
      bottom: -84rpx;
    }

    .punch-hr {
      position: absolute;
      width: 2rpx;
      height: 56rpx;
      bottom: 26rpx;
      left: 50%;
      margin-left: -1rpx;
      background-color: #e8e8e8;
    }
  }
}

.clock-top {
  height: 196rpx;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 60rpx;

  .clock-card {
    width: 196rpx;
    height: 196rpx;
    position: relative;
    z-index: 11;
    color: #fff;

    .clock-con {
      padding: 0 31rpx;
      margin-top: 56rpx;

      text:nth-of-type(1) {
        font-size: 56rpx;
        font-weight: 900;
      }

      text:nth-of-type(2) {
        font-size: 26rpx;
        display: inline-block;
        vertical-align: top;
        margin-top: 10rpx;
      }
    }

    &:nth-of-type(3) {
      text:nth-of-type(1) {
        color: #333;
      }

      text:nth-of-type(2) {
        color: #999;
      }
    }

    .clock-txt {
      padding: 0 31rpx;
      font-size: 28rpx;
    }

    &:nth-of-type(3) .clock-txt {
      color: #999;
    }
  }

  .clock-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
}

.punch-top {
  height: 48rpx;
  width: 100%;
  font-size: 26rpx;
  color: #2764dd;
  background-color: #e9effc;
  text-align: center;
  line-height: 48rpx;
  font-weight: 700;
}

.calendar {
  width: 100%;
  border-radius: 2px;
}

.title {
  font-size: 20px;
  letter-spacing: 3px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  color: #333333;
  font-size: 36rpx;
}

.title .arrow {
  padding: 20px;

  image {
    width: 34rpx;
    height: 34rpx;
  }
}

.year-month {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.weekdays {
  font-size: 30rpx;
  color: #999;
  margin: 0;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.weekdays view {
  display: inline-block;
  width: 13.6%;
  text-align: center;
}

.days {
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
}

.days .day-txt {
  margin-top: 36rpx;
  display: inline-block;
  width: 14.2%;
  text-align: center;
  padding-bottom: 8px;
  padding-top: 8px;
  position: relative;

  text {
    position: relative;
    z-index: 2;
  }
}

.now-day {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -32rpx;
  margin-top: -32rpx;
  z-index: 1;
  width: 64rpx;
  height: 64rpx;
  background-color: #e8e8e8;
  border-radius: 50%;
}
.blue-spot {
  position: absolute;
  width: 8rpx;
  height: 8rpx;
  border-radius: 50%;
  background-color: #2764dd;
  bottom: 0;
  left: 50%;
  margin-left: -4rpx;
}
.red-spot {
  position: absolute;
  width: 8rpx;
  height: 8rpx;
  border-radius: 50%;
  background-color: #e14420;
  bottom: 0;
  left: 50%;
  margin-left: -4rpx;
}
.now-ddk {
  position: absolute;
  width: 60rpx;
  height: 28rpx;
  bottom: -30rpx;
  left: 50%;
  margin-left: -30rpx;
  text-align: center;
  color: #2764dd;
  font-size: 20rpx;
}
</style>
