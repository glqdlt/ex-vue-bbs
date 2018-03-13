<template>
  <div id="app">
    <!--https://github.com/matiastucci/vue-input-tag-->
    <div>
      <input-tag :tags.sync="myTags"></input-tag>
    </div>

    <!--https://github.com/chmln/vue-wysiwyg-->
    <wysiwyg v-model="myHTML" />
    <pre>{{$data}}</pre>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myHTML : '',
      myTags : []
    }
  }
}
</script>

<style>
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
