<template>
  <div id="sideNav">
    <ul>
      <li v-for="song in songs">
        {{song.image}}{{song.title}}{{song.artist}}{{song.length}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'songs',
  data () {
    return {
      songs: [
        {
          image: 'image',
          title: 'Levels - Radio Edit',
          artist: 'Avicii',
          length: '03:20'
        },
        {
          image: 'image',
          title: 'Let It Go - Axwell Remix',
          artist: 'Dirty South Ft Rudy',
          length: '07:05'
        },
        {
          image: 'image',
          title: 'Submariner',
          artist: 'Axwell',
          length: '07:10'
        },
        {
          image: 'image',
          title: 'Lost in Acid - Tim Bergs Acidic Remix',
          artist: 'David Tort',
          length: '06:49'
        }
      ]
    }
  }
}
</script>

<style scoped>
#sideNav {
  width: 25%;
  float: left;
}

</style>
