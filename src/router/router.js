import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home/Home";
import ProductDetail from "../components/Shop/ProductDetail";
import Cart from "../components/Shop/Cart";
import Catalog from "../components/Shop/Catalog";
import Order from "../components/Shop/Order";
//import CatalogItem from "../components/Shop/CatalogItem";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
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
            name: 'ProductDetail',
            component: ProductDetail,
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