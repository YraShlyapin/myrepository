<template>
    <div>
                <img v-bind:src="game[index].posterUrl" alt="">
                <p>{{ game[index].text }}</p>
    </div>
</template>
<style>
    img{
        width: 31.67062549485452%;
    }
</style>
<script>
    let Game = require("./databases/strategy.js");
    module.exports={
        data(){
            let segment = this.$route.params.index;
            return{
            game:Game,
            index: this.$route.params.index,
        }
    }
    };
</script>