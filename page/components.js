Vue.component('card-component', {
    props: {
        component: Object,
        page: Object,
        pageTheme: String,
        pageTextColor: String,
    },
    template: `
        <div class="card w3-card w3-round-large w3-shadow w3-justify">
                <div  class="card-side" v-if="component.side && component.order!='reverse'">
                    
                        <div class="card-photo" v-if="component.side.photo">
                            <img :src="component.side.photo"/>
                        </div>
                    
                </div>
                <div class="card-main" v-if="component.main">
                    <div class="card-title w3-center">
                        {{component.main.title}}
                        <div class="card-hr" :class="pageTheme"></div>
                    </div>

                    <card-content v-bind:content="component.main.content" v-bind:pageTextColor="pageTextColor" v-bind:page="page"/>
                    
                </div>
                <div  class="card-side-reverse" v-if="component.side && component.order=='reverse'">
                    
                        <div class="card-photo" v-if="component.side.photo">
                            <img :src="component.side.photo"/>
                        </div>
                    
                </div>
        </div>
    `
});

Vue.component("card-content",{
    props: {
        content: Array,
        pageTextColor: String,
        page: Object,
    },
    template: `
    <div class="card-content">
        <a :href="paragraph.link" :class="pageTextColor" v-for="paragraph in content">
            <div class="card-content-item w3-round-large w3-justify"
            :class="{'w3-hover-black': paragraph.link != undefined,
                    'w3-text-black': paragraph.link == undefined}">
                <p>{{paragraph.text}}</p>
                <div class="paragraph-list">
                    <div class="paragraph-list-item" v-for="listItem in paragraph.list">
                        <i class="icon-circle w3-tiny" :class="pageTextColor"></i> {{listItem.text}}
                        <div class="paragraph-list" v-if="listItem.sublist != undefined">
                            <div class="paragraph-sublist-item" v-for="sublistItem in listItem.sublist">
                                <i class="icon-circle-empty w3-tiny" :class="pageTextColor"></i> {{sublistItem.text}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `
});