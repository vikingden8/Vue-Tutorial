var app = new Vue({
    el: '#vue-app',
    data: {
        x: 0,
        y: 0,
        age: 20,
    },
    methods: {
        add: function(years){
            this.age += years;
        },
        subtract: function (years) {
            this.age -= years;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})