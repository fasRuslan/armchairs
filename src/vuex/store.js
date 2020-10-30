import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let cart_data = [];

if (localStorage.getItem("cart") !== null) {
    cart_data = JSON.parse(localStorage.getItem("cart"));
}

if (cart_data.length < 0) {
    cart_data = [];
    localStorage.setItem("cart", JSON.stringify(cart_data));
}

let store = new Vuex.Store({
    state:{
        products:[],
        cart: cart_data,
    },
    mutations:{
        SET_PRODUCT_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART:(state, product) => {
            let isProduct = false;
            state.cart.map(function(item){
                if (item.article === product.article) {
                 isProduct = true;
                 item.quantity++;   
                }
            });
            let temp = isProduct || state.cart.push({ ...product, quantity: 1 });
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return temp
        },
        REMOVE_CART: (state, index) => {
            let temp = state.cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return temp
        },
        INCREMENT: (state, index) => {
            let temp = state.cart[index].quantity++
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return temp
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                let temp = state.cart[index].quantity--
                localStorage.setItem("cart", JSON.stringify(state.cart));
                return temp
            }
        },
        CLEAR: (state) => {
            state.cart = [];
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    },
    actions:{
        ADD_TO_CART({commit}, product){
            commit("SET_CART", product) 
        },
        DELETE_CART({commit}, index) {
            commit('REMOVE_CART', index)
        },
        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
        },
        CLEAR_CART({commit}) {
            commit('CLEAR')
        },
        GET_PRODUCTS({commit}) {
            return axios('http://www.json-generator.com/api/json/get/cegvxXyWXm?indent=2', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCT_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        CART(state){
            return state.cart;
        },
    }
});

export default store;