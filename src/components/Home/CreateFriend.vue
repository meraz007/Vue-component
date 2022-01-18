<template>
  <div>
      <div class="row">
          <div class="col-md-4 bg-success p-4">
             <form @submit.prevent="formSubmit">
                <label class="text-white">Name:</label>
                <input type="name" class="form-control" v-model="name">
                <label class="text-white">Phone Number:</label>
                <input type="number" class="form-control" v-model="phone">
                <label class="text-white">Email:</label>
                <input type="email" class="form-control" v-model="email">
                <button class="btn btn-info mt-4">Submit</button>
            </form> 
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'CreateFriend',
    data(){
        return{
                name:'',
                phone:'',
                email:''
        }
    },
    methods:{
        formSubmit(){
            this.$emit('adduser',
            this.name,
            this.phone,
            this.email )
        }
    }

}
</script>

<style>

</style>