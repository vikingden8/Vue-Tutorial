var app = new Vue({
  el:"#vue-app",
  data:{
    name:'Viking Den',
    job:'developer',
  },
  methods:{
    greet:function(time){
      return 'Good ' + time + ", " + this.name;
    }
  }
})
