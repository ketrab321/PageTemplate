Vue.component('card-component', {
    props: {
        component: Object,
        page: Object,
        pageTheme: String,
        pageTextColor: String,
    },
    template: `
        <div class="card w3-card w3-round-large w3-shadow w3-justify">
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
                        <div class="card-hr" :class="pageTheme"></div>
                    </div>

                    <card-content v-bind:content="component.main.content" v-bind:pageTextColor="pageTextColor"/>
                    
                </div>

        </div>
    `
});

Vue.component("card-content",{
    props: {
        content: Array,
        pageTextColor: String
    },
    template: `
    <div class="card-content">
        <a :href="paragraph.link" :class="pageTextColor" v-for="paragraph in content">
            <div class="card w3-round-large w3-justify"
            :class="{'w3-hover-black': paragraph.link != undefined,
                    'w3-text-black': paragraph.link == undefined}">
                    {{paragraph.text}}
            </div>
        </a>
    </div>
    `
});