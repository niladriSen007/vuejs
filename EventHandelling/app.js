Vue.createApp({
  data() {
    return {
      counter : 0,
      name:"",
      confirmedName:""
    };
  },
  methods: {
    add(){
        this.counter++;
    },
    remove(){
        if(this.counter >0)
            this.counter--;
    },
    // setName(e,title){
    //   // setTimeout(()=>{
    //   //   this.name = e.target.value + " " + title
    //   // },1000)

    //   this.name = e.target.value + " " + title
    // },
    setName(e){

      this.name = e.target.value
    },

    submit(){

    },
    confirmName(){
      this.confirmedName = this.name;
      this.name = ""
    },
    
  }
}).mount("#events")