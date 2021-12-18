const app = Vue.createApp({
    // data, functions are going in here
    // template:"<h2>this is the template</h2>"
    data() {
        return {
            title: 'The Final Language',
            author: 'Sam Dickensen',
            age: 21
        }
    },
    methods: {
        changeTitle() {
           this.title = 'Words of Schmocks' 
        }
    }
})

app.mount("#app")