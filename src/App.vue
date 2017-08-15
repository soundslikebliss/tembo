<template>
  <div id="app">
    <topNav></topNav>
    <sideNav></sideNav>
    <songs></songs>
    <footerNav></footerNav>
  </div>
</template>

<script>
import TopNav from './TopNav.vue'
import SideNav from './SideNav.vue'
import Songs from './Songs.vue'
import FooterNav from './FooterNav.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    TopNav,
    SideNav,
    Songs,
    FooterNav
  }
}
</script>


<style>
html, body {
  background-color: #000;
}
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  font-weight: 700;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: block;
  border-bottom: 1px solid #2c3e50;
  text-align: left;
}
li:hover {
  background-color: green;
  cursor: pointer;
}
span:hover {
  cursor: pointer;
}

i {
  display: inline-block;
  vertical-align: middle;
}

a {
  color: #42b983;
}
</style>
