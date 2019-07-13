/**
 * index.js - 入口文件
 */
console.log('hello world');
import Vue from 'vue';
import App from './pages/App.vue';

new Vue({
  el: '#root',
  render:h => h(App)
})
