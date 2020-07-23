var app = new Vue({
    el: "#vue",
    methods: {
        pagesCount: function(){
            return this.pages_config.pages.length;
        },
        selectPage: function(event, index){
            this.selectedPageIndex = index;
            this.slider.scrollTop = 0;
            this.scrollPosition = 0;
        },
        pageTheme: function(page){
            return 'w3-' + page.theme;
        },
        updateScroll() {
            this.scrollPosition = this.slider.scrollTop;
        }
    },
    mounted: function() {
        this.slider = document.getElementById("vue");
        this.slider.addEventListener('scroll', this.updateScroll);
    },
    computed: {
        
    },
    data: {
        slider: null,
        scrollPosition: 0,
        selectedPageIndex: 0,
        pages_config: config,
    }
})