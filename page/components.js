Vue.component('card-component', {
    props: {
        component: Object,
        page: Object,
        pageTheme: Function
    },
    template: `
        <div class="card w3-card w3-round-large w3-shadow w3-justify">
            <div class="card-title w3-center">
                {{component.title}}
                <div class="card-hr" :class="pageTheme(page)"></div>
            </div>
            

            <div class="card-text">
             {{component.text}}
             </div>
        </div>
    `
});