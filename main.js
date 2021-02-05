//
let Vue = require("vue");
let App = require("./app.vue");
let VueRouter = require("vue-router");
let VueResource=require("vue-resource");
Vue.use(VueResource);
//переменные с файлами
let Shooter = require("./shooters.vue")
let Strategy = require("./strategy.vue");
let Mmo = require("./mmorpg.vue");
let quest = require("./quest.vue");
let rolePlay = require("./role-play.vue");
let main = require("./main.vue");
let Item = require("./item.vue");
let Item1 = require("./item1.vue");
let Item2 = require("./item2.vue");
let Item3 = require("./item3.vue");
let Item4 = require("./item4.vue");
let NotFounded = require("./notFounded.vue")


//все остальное
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[
        {path: "/strategy",component:Strategy},
        {path: "/shooters",component:Shooter},
        {path: "/mmorpg",component:Mmo},
        {path: "/quest",component:quest},
        {path: "/role-play",component:rolePlay},
        {path: "/",component:main},
    {path: "/strategy/:index",component:Item},
    {path: "/shooters/:index",component:Item1},
    {path: "/mmorpg/:index",component:Item2},
    {path: "/quest/:index",component:Item3},
    {path: "/role-play/:index",component:Item4},
    { path: "*", component: NotFounded}
 ]
 });


let vm = new Vue({
    el:"#root",
    router:router,
    render: function(createElement){
        return createElement(App);
    }
});