<template>
    <div id="inGallery">
        <router-link v-for="(g, index) in game" :to="'/role-play/'+index" class="classichesciy"> 
            <move v-bind:text="g.text" v-bind:posterUrl="g.posterUrl"></move>
            </router-link>
    </div>
</template>
<style>
    #move{
    display: inline-block;
    margin-left: 5px;
    }   
    .classichesciy{
        text-decoration: none;
        color: black;
    }
    </style>
<script>
let Move = require("./move.vue");
let Game = require("./databases/role-play.js");
 module.exports={
     data(){
        let segment = this.$route.params.index;
        return{
        game:Game,
        index: this.$route.params.index,
        }
     },
    components:{
    move: Move,
}
};
</script>