<template>
<div class="wrap-goods">
  <div class="menu">
    <h1>asfda</h1>

    <div class="scroll-box">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </div>

    <h1>88</h1>
  </div>
  <div class="content-wrap">
    <h3>7666676</h3>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
export default {
  data(){
    return {
      list: [1, 155, 15, 11, 155, 15, 11, 155, 15, 11, 155, 15, 11, 155, 15, 11, 155, 15, 11, 155, 15, 11, 15],
      loading: true
    }
  },
  name: 'goods',
  mounted(){
    console.log(23423423);
    Toast({
      message: '提示',
      position: 'bottom',
      duration: 5000
    });
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  }
};
</script>

<style lang="less" type="stylesheet/less" >
  .scroll-box{
    height: 350/32rem;
    background: blue;
    overflow-y: hidden;
  }
  .wrap-goods{
    width: 100%;
    position: relative;
    height: 100%;

    .menu{
      position: absolute;
      top:0;
      left: 0;
      width:160/32rem;
      height: 100%;
      background: red;
      overflow-y: hidden;

    }
    .content-wrap{
      margin-left: 160/32rem;
      background: yellow;
    }
  }
</style>
