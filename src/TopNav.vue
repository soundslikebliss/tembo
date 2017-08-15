<template>
  <div id="topNav">
    <ul>
    <span>Cancel</span>
      <li v-for="link in links">
         <i :class="link"></i>
      </li>
    </ul>
    <div class="search">
      <i class="fa fa-bars fa-2x"></i>
      <p>Browse</p>
      <form>
        <input placeholder="Search"></input>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'links',
  data () {
    return {
      links: ['fa fa-spotify fa-2x', 'fa fa-compress fa-2x', 'fa fa-sun-o fa-2x'] 
    }
  }
}
</script>


<style scoped>
#topNav {
  border-bottom: 1px solid #2c3e50;
  padding: 2em 0 3em 0;
  background-color: rgba(255, 255, 255, 0.2);
}
span {
  color: green;
}
ul {
  width: 25%;
  float: left;
  text-align: left;
  padding-left: .5em;
}
li {
  display: inline-block;
  border: none;
}
li:hover {
  background-color: rgba(255, 255, 255, 0);
}

.fa-bars {
  display: none;
  position: absolute;
  left: 0;
  cursor: pointer;
}
.search {
  width: 70%;
  float: left;
}
form {
  display: inline-block;
  width: 30%;
  float: right;
  margin-right: 2em;
}
input {
  border: 1px solid #2c3e50;
  padding: .5em 1.5em;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  width: 100%;
}
p {
  display: inline-block;
  font-size: 20px;
  margin-top: 0;
}
i {
color: green;
padding: 0 .5em;
}
i:hover, span:hover {
  color: #fff;
}

@media (max-width: 1024px) {
  ul {
    width: 35%;
  }
  .search {
    width: 60%;
  }
}
@media (max-width: 768px) {
  ul {
    display: none;
  }
  .fa-bars {
    display: inline-block;
  }
  .search {
    width: 90%;
  }
}
</style>
