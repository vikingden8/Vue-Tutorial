new Vue({
    el: '#vue-app-one',
    data: {
        output: 'Your favourite food'
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs);
            this.output = 'Your favourite food: ' + this.$refs.input.value;
        }
    }
});