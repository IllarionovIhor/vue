import {defineStore} from "pinia";
import {it} from "vuetify/locale";

export const useCartStore = defineStore("cartStore" ,{
  state: () => ({
      items: [],
  }),

    getters: {
        totalItems() {
            return this.items.reduce((sum, item) => sum + item.qty, 0);
          /*return this.items.length;*/
        },

        totalPrice() {
            return this.items.reduce((sum, item) => sum + item.price * item.qty, 0)
        }

    },

    actions: {
        add(item) {
            this.items.find(i => i.id === item.id) ?  item.qty += 1 : this.items.push(item);
        },

        remove(id) {
           this.items = this.items.filter(item => item.id !== id);
        },

        clear() {
           this.items = [];
        }
    }


})