<template>
  <div>
    <!--https://github.com/ratiw/vuetable-2-tutorial/wiki/lesson-01-->
    <vuetable ref="vuetable"
              api-url="https://vuetable.ratiw.net/api/users"
              :fields="['name','email','birthdate']"></vuetable>
    <vuetable-pagination ref="pagination"></vuetable-pagination>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'

  export default {
    name: "bbs-list",
    components: {
      Vuetable,
      VuetablePagination
    }
  }
</script>

<style scoped>

</style>
