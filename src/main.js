import Vue from 'vue'
import App from './App.vue'
import SideNav from './SideNav.vue'
import Songs from './Songs.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#sideNav',
  render: h => h(SideNav)
})

new Vue({
  el: '#songs',
  render: h => h(Songs)
})
