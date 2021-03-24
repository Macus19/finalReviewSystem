<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.global.token = sessionStorage.getItem('token');
  },
};
</script>

<style>
 html,body{
  margin:0;
  padding: 0;
  height:100%;
  overflow-x: hidden
}
#app{
  height:100%;
}
</style>
