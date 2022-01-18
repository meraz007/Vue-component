<template>
<div>
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
   
</template>

<script>
import FriendContact from '../components/Home/FriendContact.vue'
import CreateFriend from '../components/Home/CreateFriend.vue'
export default {
    components:{
    FriendContact,
    CreateFriend,
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