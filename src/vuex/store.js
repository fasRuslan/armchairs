
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
        SET_PRODUCT_TO_STATE:(state : S, products) => {
            state.products = products;
        }
    },
    actions:{
        GET_PRODUCTS_FROM_API({commit}){
            return axios('http://localhost:3000/products' , {
            method:"GET"
            })
            .then(products) => {
                commit('SET_PRODUCT_TO_STATE',products);
            }
        },
    },
    getters:{
        PRODUCTS:{state}{
            return state.products
        }
    }
});

export default store;