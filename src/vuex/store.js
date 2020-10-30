import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


let store = new Vuex.Store({
    state:{
        products:[],
        cart:[],
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
             isProduct || state.cart.push({...product,quantity:1})

        }
    },
    actions:{
        ADD_TO_CART({commit}, product){
            commit("SET_CART", product) 
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