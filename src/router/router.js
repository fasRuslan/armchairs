import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/Home/Main";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Main
        },
    ]
});

export default router;