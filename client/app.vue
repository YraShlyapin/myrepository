<template>
    <div>
        <menue></menue>
        <div id="mn" >
        <router-view></router-view> 
        </div>
    </div>
</template>
<style>
</style>
<script>
    let menu = require("./menu.vue");
    module.exports={
        components:{
        menue:menu
    }
    };
</script>
