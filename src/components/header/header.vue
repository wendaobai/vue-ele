<template>
  <div class="header">
    <div class="content-wrapper clear">
      <div class="avatar-box fl">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="info-box fl">
        <p class="info-title"><span class="icon"></span><span class="name">{{seller.name}}</span></p>
        <p class="info-mail">{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
        <div class="info-pay">
          <div v-if="seller.supports">
            <span class="type"></span>
            <span>{{seller.supports[0].description}}</span>
          </div>
        </div>
      </div>
      <div class="supports-num" v-if="seller.supports" @click="showDetails()">
        {{seller.supports.length}}个<span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="notice-wrapper" @click="showDetails()">
      <span class="icon-notice"></span>
      <span class="title">{{seller.bulletin}}</span>
    <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="header-bg">
      <img :src="seller.avatar">
    </div>
    <transition name="fade">
    <div class="detail" v-if="showDetail">
      <div class="detail-wrap clear">
        <div class="detail-main">
          <div class="title-info">
            <p class="seller">{{seller.name}}</p>
            <p class="star">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
            <p class="discount">
              <span class="line"></span>
              <span class="info">优惠信息</span>
              <span class="line"></span>
            </p>
          </div>
          <div class="discount-info" v-if="seller.supports">
            <p class="list" v-for="(item,key) in seller.supports">
              <span class="icon">
                <i :class="iconClassMap[item.type]"></i>
              </span>
              <span class="info">{{item.description}}</span>
            </p>

          </div>

          <p class="discount notice">
            <span class="line"></span>
            <span class="info">商家公告</span>
            <span class="line"></span>
          </p>

          <div class="notice-content">
            {{seller.bulletin}}
          </div>
        </div>

      </div>
      <div class="detail-close">
        <span class="icon-close" @click="hideDetails"></span>
      </div>
    </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  name: 'header',
  data(){
    return {
      showDetail: false
    }
  },
  methods: {
    showDetails(){
      this.showDetail = true;
    },
    hideDetails(){
      this.showDetail = false;
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  created(){
    this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
}
</script>

<style type="stylesheet/less" lang="less">
  .header {
    position: relative;
  }

  .content-wrapper {
    background-color: rgba(7, 17, 27, .5);
    /*filter: blur(10px);*/
  }

  .header .content-wrapper {
    position: relative;
    padding: 48/32rem 0 48/32rem 36/32rem;

  .avatar-box {
    margin-right: 1rem;
  }

  .avatar-box img {
    width: 128/32rem;
    height: 128/32rem;
    border-radius: 4px;
  }

  .info-box {
    padding: 4/32rem 0;
    color: #fff;

  .info-title {

  .icon {
    display: inline-block;
    width: 60/32rem;
    height: 36/32rem;
    background: url("../../common/images/brand@2x.png") no-repeat 0 0;
    background-size: contain;
    vertical-align: middle;
    margin-right: 12/32rem;
  }

  .name {
    display: inline-block;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1rem;
    vertical-align: middle;
  }

  }
  .info-mail {
    margin: 16/32rem 0 20/32rem 0;
    font-size: 24/32rem;
  }

  .info-pay {
    font-size: 20/32rem;
    line-height: 24/32rem;

  span {
    display: inline-block;
    vertical-align: middle;

  &
  .type {
    background: url("../../common/images/decrease_1@2x.png") no-repeat;
    background-position: center center;
    background-size: cover;
    width: 0.75rem;
    height: 24/32rem;
  }

  }
  }
  }
  .supports-num {
    position: absolute;
    right: 24/32rem;
    bottom: 30/32rem;
    padding: 14/32rem 24/32rem;
    background-color: rgba(0, 0, 0, .2);
    color: #fff;
    border-radius: 52/32rem;
    line-height: 24/32rem;
    font-size: 20/32rem;
    font-weight: 200;

  .icon-keyboard_arrow_right {
    font-size: 1rem;
    vertical-align: middle;
    margin-left: 10/32rem;
  }

  }

  }
  .notice-wrapper {
    position: relative;
    height: 56/32rem;
    width: 100%;
    overflow: hidden;
    line-height: 56/32rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 52/32rem 0 78/32rem;
    box-sizing: border-box;
    font-size: 20/32rem;
    background-color: rgba(7, 17, 27, .8);
    color: #fff;

  .icon-notice {
    position: absolute;
    width: 44/32rem;
    display: block;
    height: 24/32rem;
    top: 16/32rem;
    left: 24/32rem;
    background: url("../../common/images/bulletin@2x.png") no-repeat center center;
    background-size: contain;
  }

  .icon-keyboard_arrow_right {
    position: absolute;
    top: 16/32rem;
    right: 24/32rem;
  }

  }
  .header-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -9999;
    filter: blur(10/32rem);

  img {
    width: 100%;
    height: 100%;
  }

  }

  .detail{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow:auto ;
    background: rgba(7,17,27,.8);
    z-index: 100;
    color: #fff;
    font-size: 24/32rem;
    .detail-close{
      position: relative;
      clear: both;
      width: 100%;
      height: 64/32rem;
      font-size:64/32rem;
      color:rgba(255,255,255,.5);
      text-align: center;
      margin-top: -128/32rem;
    }
    .detail-wrap{
      width:100%;
      min-height:100%;
    }
    .detail-main{
      padding:128/32rem 0;
      .title-info{
        text-align: center;
        .seller{
          font-size:1rem;
          font-weight: 700;
          line-height: 1rem;
        }
        .star{
          padding:1rem 0 56/32rem 0;
          span{
            display: inline-block;
            width:45/32rem;
            height: 44/32rem;
            background: url("../../common/images/star36_on@3x.png") 0 0 no-repeat;
            background-size: contain;
            margin-right: 0.5rem;
          }
        }

      }

      .discount{
        font-size: 28/32rem;
        position:relative;
      .info{
        height:1rem;
        line-height:1rem;
        padding:0 24/32rem;
        display: inline-block;
      }
      .line{
        display: inline-block;
        width:224/32rem;
        box-sizing: border-box;
        height:1px;
        background-color: rgba(255,255,255,.2);
        vertical-align: middle;

      }
      }

      .discount-info{
        padding:48/32rem 0 56/32rem 72/32rem;
        .list {
          margin-bottom:24/32rem;
          font-weight:200;
          line-height:24/32rem;
          font-size:24/32rem;
          i{
            height:1rem;
            width: 1rem;
            background: url("../../common/images/decrease_4@2x.png") 0 0 no-repeat;
            background-size: contain;
            display: inline-block;
            vertical-align: middle;
            margin-left: 24/32rem;
            margin-right: 12/32rem;
            &.decrease{
               background-image: url("../../common/images/decrease_4@2x.png");
             }
            &.guarantee{
               background-image: url("../../common/images/guarantee_4@2x.png");
             }
            &.invoice{
               background-image: url("../../common/images/invoice_4@2x.png");
             }
            &.special{
               background-image: url("../../common/images/special_4@2x.png");
             }
            &.discount{
              background-image: url("../../common/images/discount_4@2x.png");
             }
          }
        }
      }
      .notice{
        padding-left: 72/32rem;
      }

      .notice-content{
        padding:48/32rem 96/32rem;
        line-height: 48/32rem;
        font-size:24/32rem;
        font-weight: 200;
      }
    }

  }

  /**********  transition **********/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>
