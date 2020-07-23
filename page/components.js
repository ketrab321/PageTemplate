Vue.component('card-component', {
    props: {
        component: Object,
        page: Object,
        pageTheme: Function
    },
    template: `
    <a :href="component.link">
        <div class="card w3-card w3-round-large w3-shadow w3-justify"
            :class="{'w3-hover-black': component.link != undefined }"
            >
                <div  class="card-side" v-if="component.side">
                    <div>
                        <div class="card-photo" v-if="component.side.photo">
                            <img :src="component.side.photo"/>
                        </div>
                    </div>
                </div>
                <div class="card-main" v-if="component.main">
                    <div class="card-title w3-center">
                        {{component.main.title}}
                        <div class="card-hr" :class="pageTheme(page)"></div>
                    </div>
                    

                    <div class="card-text">
                    {{component.main.text}}
                    </div>
                </div>

        </div>
    </a>
    `
});