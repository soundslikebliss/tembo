import Vue from 'vue'
import App from './App.vue'
import TopNav from './TopNav.vue'
import SideNav from './SideNav.vue'
import Songs from './Songs.vue'
import FooterNav from './FooterNav.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#topNav',
  render: h => h(TopNav)
})

new Vue({
  el: '#sideNav',
  render: h => h(SideNav)
})

new Vue({
  el: '#songs',
  render: h => h(Songs)
})

new Vue({
  el: '#footer-nav',
  render: h => h(FooterNav)
})

let hamburger = document.querySelector('.fa-bars')
let sideNav = document.querySelector('#sideNav')
let mobileBurger = document.querySelector('.mobile-burger')

hamburger.onclick = () => { 
	sideNav.classList.toggle('active')
}
mobileBurger.onclick = () => { 
	sideNav.classList.toggle('active')
}
