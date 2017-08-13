<template>
  <div id="app">
    <sideNav></sideNav>
    <songs></songs>
  </div>
</template>

<script>
import SideNav from './SideNav.vue'
import Songs from './Songs.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    SideNav,
    Songs
  }
}
</script>


<style>
html, body {
  background-color: #000;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
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
}

li {
  display: block;
  border-top: 1px solid #2c3e50;
}

a {
  color: #42b983;
}
</style>
