<template>
    <div id="inMenu">
        <router-link to="/strategy" class="menu_item"><li>стратегии</li></router-link>
        <router-link to="/shooters" class="menu_item"><li>шутеры</li></router-link>
        <router-link to="/mmorpg" class="menu_item"><li>мморпг</li></router-link>
        <router-link to="/quest" class="menu_item"><li>квесты</li></router-link>
        <router-link to="/role-play" class="menu_item"><li>ролевые</li></router-link>
        <router-link to="/" class="menu_item"><li>главная</li></router-link>
    </div>
</template>
<style>
    li{
        list-style-type: none;
    }
    .menu_item{
        color: #000;
        text-decoration: none;
        display: inline-block;
        margin-right: 25px;
        padding-bottom: 25px;
        padding-top: 25px;
    }
    #inMenu{
        display: flex;
        justify-content: center;
    }
</style>