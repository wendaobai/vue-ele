<template>
  <div id="app">
    <div class="header-wrap">
      <v-header :seller="seller"></v-header>
    </div>
    <div class="tab clear border-1-px tab-wrap">
      <div class="clear">
        <div class="tab-item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings">评价</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
      </div>

    </div>
    <div class="main-wrap">
      <router-view></router-view>
    </div>
    <div class="footer-wrap"></div>
  </div>
</template>


<script>

import header from './components/header/header.vue';
export default {
  name: 'app',
  data: function(){
    return {
      seller: {}
    }
  },
//  props: ['seller'],
  components: {
    'v-header': header
  },
  created: function(){
    this.getSeller();
  },
  methods: {
    getSeller: function(){
      this.$http.post('http://localhost:3000/api/seller').then(function(response){
        this.seller = response.body.data;
        console.log(this.seller)
      });
    }
  }
}
</script>

<style type="stylesheet/less" lang="less">
  html,body{
    height: 100%;
    width: 100%;
  }
  @import 'common/less/icon.less';
  #app{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .header-wrap{
    position: absolute;
    top:0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 286/32rem;
  }
  .tab-wrap{
    position: absolute;
    top:286/32rem;
    left: 0;
    z-index: 999;
    width: 100%;
  }
  .main-wrap{
    position: absolute;
    left: 0;
    top:183/16rem;
    z-index: 500;
    overflow-x: hidden;
    overflow-y: hidden;
    bottom:116/32rem;
    width: 100%;
  }
  .footer-wrap{
    position: absolute;
    bottom:0;
    left: 0;
    z-index: 999;
    height: 116/32rem;
    background: pink;
    width: 100%;
  }
  #app .tab{
    height: 80/32rem;
    text-align: center;
    line-height: 80/32rem;
  }
  #app .tab .tab-item{
    float: left;
    width: 33.33%;

  }
  #app .tab-item a{
    font-size: 28/32rem;
    color: rgb(77,85,93);
    font-weight:bold;
    display: block;
    height: inherit;
  }
  #app .tab-item .router-link-active{
    color: rgb(240,20,20);
  }
</style>
