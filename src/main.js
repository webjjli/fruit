import Vue from 'vue'
import App from './App.vue'
/* import "mand-mobile/components/_style/global.styl";
import "normalize.css"; */
import VueRouter from "vue-router";
import router from "./router/router.js";
import Vant from 'vant';
import 'vant/lib/index.css';

/* import { Search,Icon,Swipe, SwipeItem,Tabbar, TabbarItem } from 'vant'; */

Vue.use(Vant);
/* Vue.use(Search).use(Icon).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem); */

Vue.use(VueRouter);


/* 
import FastClick from 'fastclick'
 if ('addEventListener' in document && 'ontouchstart' in window) { 
FastClick.prototype.focus = function (targetElement) { 
targetElement.focus() 
} 
document.addEventListener('DOMContentLoaded', function () { FastClick.attach(document.body) }, false)
 } */


Vue.config.productionTip = false

new Vue({
	el:'#app',
	router,
  render: h => h(App),
}).$mount('#app')
