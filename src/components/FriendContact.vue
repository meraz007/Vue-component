<template>
<div>
    <h1>This is our FriendContact vue!!</h1>
    <h3>{{ fullName }}</h3>
</div>
</template>

<script>
export default {
    name:'FriendContact',
    props:['fullName'],
    data(){
        return{
            name:'saiful'
        }
    }

}
</script>

<style>

</style>