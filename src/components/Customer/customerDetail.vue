<template>
  <div>
      <p>customer Details{{$route.params.id}}</p>
      <router-link 
      tag="button"
      :to="{name:'customerEdit',params:{id:$route.params.id}}"
      class="btn btn-info">
       Edit User
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>