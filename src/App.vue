<template>
  <div id="app">
    <div class="ui container">
        <bbs-list></bbs-list>
    </div>
  </div>
</template>

<script>
  import bbsList from './bbs/bbs-list'

  export default {
    name: "app",
    components :{
          bbsList
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
