<template>
  <div id="app">
    <div class="container">
      <div class="mt-4">
        <router-link to="/"><button class="btn btn-success">Home</button></router-link>
        <router-link to="/project"><button class="btn btn-info mx-4">Project</button></router-link>
      </div>
      <router-view></router-view>
     
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
 
  }
</script>

<style>

</style>
