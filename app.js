Vue.createApp({
    data(){
        return{
            goals:[],
            enteredVal:""
        }
    },
    methods:{
        addGoals(){
            this.goals.push(this.enteredVal)
            this.enteredVal = ""
        }
    }
}).mount("#app")