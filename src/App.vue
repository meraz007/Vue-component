<template>
  <div id="app">
    <div class="container">
      <FriendContact
       v-for="(friend,index) in friends"
       :key="index"
       :fName="friend.name"
       :lName="friend.phone"
       :email="friend.email"
       ></FriendContact>
      <h1>fghjk</h1>
      <p>Lorem ipsum dolor siconsequuntur laborum? Expedita?</p>
      <CreateFriend @adduser="add_user"></CreateFriend>
    </div>
  </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
import CreateFriend from './components/CreateFriend.vue'
export default {
  name: 'App',
  components:{
    FriendContact,
    CreateFriend
  },
  data(){
    return{
      friends:[
        {
          name:'Saiful',
          phone:'01234567',
          email:'saiful@gmail.com'
        },
        {
          name:'Nahidul',
          phone:'98759088',
          email:'tanvir@gmail.com'
        },
      ] 
    }
  },
  computed:{
    fullName(){
      return this.firstName + " " + this.lastName
    }
  },
  methods:{
    add_user(name,email,phone){
        this.friends.push({
          name:name,
          phone:phone,
          email:email
        })
    }
  }
  }
</script>

<style>

</style>
