<template>
  <div id="footer-nav">
    <ul>
      <li v-for="link in links">
         <i :class="link.icon"></i>
      </li>
    </ul>
     <ul>
      <li v-for="link in links">
         <span>{{link.text}}</span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'links',
  data () {
    return {
      links: [
        {
          icon: 'fa fa-music fa-2x',
          text: 'Playlists'
        },
        {
          icon: 'fa fa-line-chart fa-2x',
          text: 'Charts'
        },
        {
          icon: 'fa fa-database fa-2x',
          text: 'Browse'
        },
        {
          icon: 'fa fa-star fa-2x',
          text: 'Match'
        },
        {
          icon: 'fa fa-history fa-2x',
          text: 'Hisory'
        }
      ] 
    }
  }
}
</script>


<style scoped>
#footer-nav {
  clear: both;
  border-top: 1px solid #2c3e50;
  padding: 2em 0;
  background-color: rgba(255, 255, 255, 0.1);
}
li {
  display: inline-block;
  border: none;
  padding: 0 1em;
}
li:hover {
  background-color: rgba(255, 255, 255, 0);
}
i {
  color: green;
  padding: .2em .4em;
}
i:hover {
  color: #fff;
}

@media screen and (max-width: 768px) {
  i {
    font-size: 20px;
  }
  li {
  padding: 0 .5em;
  }
  span {
    font-size: 12px;
  }
}
</style>
