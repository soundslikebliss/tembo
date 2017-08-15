<template>
  <div id="footer-nav">
    <ul>
      <li v-for="link in links">
         
         {{link.text}}
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
          icon: '',
          text: 'Playlists'
        },
        {
          icon: '',
          text: 'Charts'
        },
        {
          icon: '',
          text: 'Browse'
        },
        {
          icon: '',
          text: 'Match'
        },
        {
          icon: '',
          text: 'Hisory'
        }
      ] 
    }
  }
}
</script>

<style scoped>
#footer-nav {
  border-top: 1px solid #2c3e50;
  padding: 2em 0 3em 0;
  background-color: rgba(255, 255, 255, 0.1);
}

ul {

}
li {
  display: inline-block;
  border: none;
}
li:hover {
  background-color: rgba(255, 255, 255, 0);
}

p {

}
i {
color: green;
padding: 0 .5em;
}
i:hover {
  color: #fff;
}

@media (max-width: 1024px) {

}
@media (max-width: 768px) {

}

</style>
