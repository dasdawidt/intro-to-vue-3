app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    template: 
    /* html */
    `<ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>`
})