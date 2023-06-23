const app = Vue.createApp({
    data(){
        return {
            lessThan1:"Value is less than 1",
            greaterThan1:"Value is Greater than 1",
        }
    },
    methods:{
        generateVal(){
            let val = Math.floor(Math.random() * 10)
            // console.log(first)
            if(val < 1)
                return this.lessThan1 
            return this.greaterThan1 
        }
    }
})

app.mount("#app")

