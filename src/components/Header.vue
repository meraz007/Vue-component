<template>
  <div>
      <ul class="nav nav-pills bg-primary">
        <router-link tag="li" class="nav-item nav-link text-white" to="/">Home</router-link>
        <router-link tag="li" class=" nav-item nav-link text-white" to="/customer">Customer</router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
li{
  cursor: pointer;
}
</style>