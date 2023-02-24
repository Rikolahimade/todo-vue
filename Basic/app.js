const app = Vue.createApp({

    //data, function
    data() {
        return {
            showArticle: true,
            title: 'Belajar Vue 3',
            author: 'Riko Rendy  Lahimade',
            read_count: 25
        }
    },
    methods: {
        toggleShowArticle() {
            this.showArticle = !this.showArticle

        }
    }
})

app.mount('#app')