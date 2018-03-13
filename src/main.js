import Vue from 'vue'
import App from './App.vue'

import wysiwyg from "vue-wysiwyg"
import InputTag from 'vue-input-tag'




Vue.use(wysiwyg, {});
Vue.component('input-tag', InputTag);


new Vue({
  el: '#app',
  render: h => h(App)
})

