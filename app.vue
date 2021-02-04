<template>
    <div>
        <menue></menue>
        <router-view></router-view> 
    </div>
</template>
<script>
    let menu = require("./menu.vue");
    module.exports={
        components:{
        menue:menu
    }
    };
</script>
