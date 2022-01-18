<template>
  <div>
      <p>Please select a customer</p>
      <hr>
      <ul class="list-group">
          <router-link tag="li" to="customer/1" class="list-group-item">Customer 1</router-link>
          <router-link tag="li" to="customer/2" class="list-group-item">Customer 2</router-link>
          <router-link tag="li" to="customer/3" class="list-group-item">Customer 3</router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>