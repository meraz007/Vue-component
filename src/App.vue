<template>
  <div id="app">
    <div class="container">
      <FriendContact :fullName="fullName"></FriendContact>
      <FriendContact></FriendContact>
      <FriendContact></FriendContact>
      <FriendContact></FriendContact>
      <h1>fghjk</h1>
      <p>Lorem ipsum dolor siconsequuntur laborum? Expedita?</p>
    </div>
  </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default {
  name: 'App',
  components:{
    FriendContact
  },
  data(){
    return{
      firstName:'Saiful',
      lastName:'Islam'
    }
  },
  computed:{
    fullName(){
      return this.firstName + " " + this.lastName
    }
  }
  
}
</script>

<style>

</style>
