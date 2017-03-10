import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';

import Goods from 'components/goods/Goods';
import Ratings from 'components/ratings/Ratings';
import Seller from 'components/seller/Seller';

Vue.use(Router);
Vue.use(VueResource);
var route = new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/seller',
      component: Seller
    },
    {
      path: '/ratings',
      component: Ratings
    }
  ]
});
route.push('/goods')
export default route;

