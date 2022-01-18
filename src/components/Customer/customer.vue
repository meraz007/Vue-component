<template>
  <div>
      <h1>customer vue!</h1>
      <button class="btn btn-info" @click="backToHome" >Back To Home</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    methods:{
        backToHome(){
            this.$router.push('/')
        }
    }

}
</script>

<style>

</style>