<template>
  <div id="app">
    <div>
      <input type="text" v-model="title">
    </div>
    <!--https://github.com/chmln/vue-wysiwyg-->
    <wysiwyg v-model="body"/>
    <!--https://github.com/matiastucci/vue-input-tag-->
    <div>
      <input-tag :tags.sync="tags"></input-tag>
    </div>
    <pre>{{$data}}</pre>
  </div>

</template>

<script>
  export default {
    name: 'bbs-new',
    data() {
      return {
        title: '',
        body: '',
        tags: []
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
