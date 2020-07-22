var app = new Vue({
    el: "#vue",
    methods: {
        pagesCount: function(){
            return this.pages_config.pages.length;
        },
        selectPage: function(event, index){
            this.selectedPageIndex = index;
        },
        pageTheme: function(page){
            return 'w3-' + page.theme;
        }
    },
    computed: {
        
    },
    data: {
        selectedPageIndex: 0,
        pages_config: config,
    }
})