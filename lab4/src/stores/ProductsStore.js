import {defineStore} from "pinia";
import productsItems from "../data/products.json"
export const useProductsStore = defineStore("productsStore" ,{
    state: () => ({
       products: productsItems
    })

})