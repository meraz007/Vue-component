<template>
  <div>
      <h1>This is practice project!!</h1>
      <ProjectList></ProjectList>
      <ProjectDetails></ProjectDetails>
  </div>
</template>

<script>
import ProjectList from '../components/Project/projectList.vue'
import ProjectDetails from '../components/Project/projectDetails.vue'
export default {
    components:{
        ProjectList,
        ProjectDetails
    }

}
</script>

<style>

</style>