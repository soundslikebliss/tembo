<template>
  <div id="songs">
    <ul>
      <li v-for="song in songs">
        <i :class="song.image"></i>
        <span class="song-title">{{song.title}}</span>
        <span class="song-artist">{{song.artist}}</span>
        <span class="song-length">{{song.length}}</span>
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
          image: 'fa fa-file-audio-o fa-3x',
          title: 'Levels - Radio Edit',
          artist: 'Avicii',
          length: '03:20'
        },
        {
          image: 'fa fa-file-audio-o fa-3x',
          title: 'Let It Go - Axwell Remix',
          artist: 'Dirty South Ft Rudy',
          length: '07:05'
        },
        {
          image: 'fa fa-file-audio-o fa-3x',
          title: 'Submariner',
          artist: 'Axwell',
          length: '07:10'
        },
        {
          image: 'fa fa-file-audio-o fa-3x',
          title: 'Lost in Acid - Tim Bergs Acidic Remix',
          artist: 'David Tort',
          length: '06:49'
        },
        {
          image: 'fa fa-file-audio-o fa-3x',
          title: 'Human After All/Together/One More T ...',
          artist: 'Daft Punk - Stardust',
          length: '09:59'
        },
        {
          image: 'fa fa-file-audio-o fa-3x',
          title: 'Century',
          artist: 'Tiesto feat. Calvin Harris',
          length: '04:42'
        },
        {
          image: 'fa fa-file-audio-o fa-3x',
          title: 'Out There - Original Mix',
          artist: 'Basto!, John Dahlback',
          length: '06:25'
        },
        {
          image: 'fa fa-file-audio-o fa-3x',
          title: 'Souvenir - Original mix',
          artist: 'Arno Cost',
          length: '07:05'
        },
        {
          image: 'fa fa-file-audio-o fa-3x',
          title: 'Shake It (Move a Little Closer)(Terrac...',
          artist: 'Lee Cabrera, Thomas G...',
          length: '07:24'
        },
        {
          image: 'fa fa-file-audio-o fa-3x',
          title: 'You Used to Hold Me',
          artist: 'Calvin Harris',
          length: '03:49'
        },
        {
          image: 'fa fa-file-audio-o fa-3x',
          title: 'Feel It In My Bones',
          artist: 'Tiesto feat. Tegan & Sara',
          length: '04:52'
        }
      ]
    }
  }
}
</script>


<style scoped>
#songs {
  width: 74%;
  float: left;
  border-left: 1px solid #2c3e50;
}
i {
  padding: .25em;
}
span {
  display: inline-block;
}
.song-title {
  width: 50%;
}
.song-artist, .song-length {
  width: 20%;
}
@media screen and (max-width: 1024px) {
  #songs {
    width: 60%;
  }
  .song-title {
    width: 40%;
  }
}
@media screen and (max-width: 768px) {
  #songs {
    width: 100%;
  }
}
</style>
