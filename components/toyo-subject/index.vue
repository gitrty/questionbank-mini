<template>
  <view>
    <view class="subject" v-for="(item,index) of subjectList" :key="index">
      <view class="sub-con">
        <view class="sub-label">
          单选题
        </view>
        <view class="sub-txt">
          题目题目题目题目题目题目题目题目题目题目题目题目题目题目题目题目题
        </view>
        <view class="sub-tab">
          <view class="sub-tab-l fl">
            #
            <text v-for="ind of 3" :key="ind">
              标签1
            </text>
          </view>
          <view class="sub-tab-r fr">
            1个月前
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      subjectList: {
        type: Array,
        default () {
          return [1, 2, 3, 4];
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .subject {
    padding: 0 32rpx;

    .sub-con {
      height: 198rpx;
      width: 100%;
      border-bottom: 1rpx solid #E8E8E8;
      padding-top: 32rpx;
      position: relative;

      .sub-label {
        position: absolute;
        top: 37rpx;
        width: 72rpx;
        height: 33rpx;
        border-radius: 4rpx;
        border: 1rpx solid #2764DD;
        color: #2764DD;
        font-size: 20rpx;
        text-align: center;
        line-height: 31rpx;
      }

      .sub-txt {
        text-indent: 86rpx;
        font-size: 30rpx;
        color: #333;
      }

      .sub-tab {
        margin-top: 14rpx;
        font-size: 32rpx;
        color: #999;

        .sub-tab-l {
          >text {
            margin: 0 16rpx;
          }
        }
      }
    }
  }
</style>
