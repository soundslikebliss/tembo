<template>
  <div id="sideNav">
    <div class="mobile-burger">
      <i class="fa fa-bars fa-2x"></i>
    </div>
    <ul>
      <li v-for="category in categories">
         <i class="fa fa-music fa-2x"></i>
         {{category}}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'categories',
  data () {
    return {
      categories: ['Lounge and Chill Out', 'Oldies', 'Progressive House', 'Rap / R&B', 'Reggae', 'Rock', 'Rock N Roll', 'Techno', 'Top DJs']
    }
  }
}
</script>


<style scoped>
#sideNav {
  width: 25%;
  float: left;
  clear: both;
}
.mobile-burger {
  position: absolute;
  top: -81px;
  height: 81px;
  width: 100%;
  background-color: green;
  cursor: pointer;
}
.mobile-burger i {
  position: absolute;
  top: .5em;
  left: 0;
}
i {
  padding: .5em;
}
#sideNav.active {
  display: block;
  position: fixed;
  background-color: gray;
  height: 100%;
  width: 50%;
}
@media (max-width: 1024px) {
  #sideNav {
    width: 35%;
  }
}
@media (max-width: 768px) {
  #sideNav {
    display: none;
  }
}
</style>
