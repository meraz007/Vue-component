<template>
  <div id="app">
    <div class="container">
      <Header />
      <transition name="appear">
        <div class="bg-success" v-if="display">
        <h1 class="text-white">Headding</h1>
      </div>
      </transition>
      <div>
        <button 
        class="btn btn-info"
        @click="changeHeading"
         >Toggle</button>
         <hr>
         <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  },
  data(){
    return{
      display:false
    }
  },
  methods:{
    changeHeading(){
      this.display=!this.display
    }
  }
}
</script>

<style>
.appear-enter{
  opacity: 0;
}
.appear-enter-active{
  transition: opacity 3s;
}
.appear-leave-active{
  opacity: 0;
  transition: opacity 3s;
}
</style>
