import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/Home/Main";
import Card from "../components/Shop/Card";
import Cart from "../components/Shop/Cart";
import Catalog from "../components/Shop/Catalog";
import Order from "../components/Shop/Order";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/сatalog',
            name: 'Catalog',
            component: Catalog //Каталог всех товаров
        },
        {
            path: '/сart',
            name: 'Cart',
            component: Cart, //Корзина
            props: true,
        },
         {
            path: '/Catalog/:name',
            name: 'Card',
            component: Card,
            props: true,
        },
        {
            path: '/order',
            name: 'Order',
            component: Order,
            props: true,
        },
    ]
});

export default router;