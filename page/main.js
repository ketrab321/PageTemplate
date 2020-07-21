var app = new Vue({
    el: "#vue",
    methods: {
        pagesCount: function(){
            return this.pages_config.pages.length;
        },
        selectPage: function(event, index){
            console.log(index)
            this.selectedPageIndex = index;
        }
    },
    computed: {
        
    },
    data: {
        selectedPageIndex: 0,
        pages_config: config,
    }
})