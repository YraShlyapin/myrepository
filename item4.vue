<template>
    <div>
                <img v-bind:src="game[index].posterUrl" alt="">
                <p>{{ game[index].text }}</p>
    </div>
</template>
<style>

</style>
<script>
    let Game = require("./databases/role-play.js");
    module.exports={
        data(){
            let segment = this.$route.params.index;
            return{
            game:Game,
            index: this.$route.params.index,
        };
    }
    };
</script>