<template>
    <div id="move">
        <div>
            <img v-bind:src="posterUrl" alt="" id="inMove">
            <p id="textInMove" v-html="text"></p>
        </div>
    </div>
</template>
<style>
    #inMove {
        /* width: 100%; */
        width: 240px;
        height: 360px;
    }

    #textInMove {
        display: flex;
        justify-content: center;
    }

    #move {
        /* width: 19.00237529691211%; */
        margin-left: auto;
    }
</style>
<script>
    module.exports = {
        props: ["text", "posterUrl", ]
    };
</script>