<template>
  <div id="sideNav">
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
}
i {
  padding: .5em;
}

</style>
