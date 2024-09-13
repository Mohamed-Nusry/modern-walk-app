import { createStore } from "vuex";
import router from "../router";

//Create Store 
const store = createStore({
    //Define State 
    state: {
        isLoading: false,
        products: null,
        categoryProducts: null,
        currentCategory: null,
    },

    //Define Getters 
    getters: {
        products : (state) => {
            return state.products;
        },

        productByCategory : (state) => {
            return state.categoryProducts;
        },

        currentCategoryData : (state) => {
            return state.currentCategory;
        },
        
        isLoading : (state) => {
            return state.isLoading;
        },
    },

    //Define Mutations 
    mutations: {
        CHANGE_LOADING(state, payload) {
            state.isLoading = payload;
        },

        CLEAR_DATA(state) {
            state.products = null;
            state.categoryProducts = null;
        },

        COMMIT_PRODUCTS(state, payload) {
            state.products = payload;
        },

        COMMIT_PRODUCTS_BY_CATEGORY(state, payload) {
            state.categoryProducts = payload;
        },

        COMMIT_SET_CURRENT_CATEGORY_DATA(state, payload) {
            state.currentCategory = payload;
        }
    },

    //Define Actions 
    actions: {
        getAllProducts(context, payload) {
            context.commit("CHANGE_LOADING", true)
            context.commit("CLEAR_DATA", true)
            fetch(`https://fakestoreapi.com/products?sort=${payload.sort}&limit=${payload.limit}`)
            .then(res=>res.json())
            .then((data)=>{
                context.commit("COMMIT_PRODUCTS", data)
                context.commit("CHANGE_LOADING", false)
            })
            .catch(ex=>alert("Error while fetching from API " + ex))
            .finally(context.commit("CHANGE_LOADING", false))
        },

        getProductsByCategory(context, payload) {
            context.commit("CHANGE_LOADING", true)
            context.commit("CLEAR_DATA", true)
            fetch(`https://fakestoreapi.com/products/category/${payload.category}?sort=${payload.sort}&limit=${payload.limit}`)
            .then(res=>res.json())
            .then((data)=>{
                context.commit("COMMIT_PRODUCTS_BY_CATEGORY", data)
                context.commit("CHANGE_LOADING", false)
            })
            .catch((ex)=>{
                alert("Error while fetching from API " + ex);
                router.push({ path: '/'}) 
            })
            .finally(context.commit("CHANGE_LOADING", false))
        },

        setCurrentSelectedCategoryData(context, payload) {
            context.commit("COMMIT_SET_CURRENT_CATEGORY_DATA", payload)
        }
    },
})

export default store;