const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(add, id) {
            if (add) {
                this.cart.push(id)
            } else {
                let index = this.cart.indexOf(id)
                if (index === -1) return
                this.cart.splice(index, 1)
            }            
        }
    }
})
