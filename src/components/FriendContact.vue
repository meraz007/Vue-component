<template>
<div>
    <h1>This is our FriendContact vue!!</h1>
    <h3>{{ fName }} {{ lName  }} {{email}}</h3>
</div>
</template>

<script>
export default {
    name:'FriendContact',
    props:['fName','lName','email'],
    data(){
        return{
            name:'saiful'
        }
    }

}
</script>

<style>

</style>