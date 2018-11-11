Vue.component('tabs', {
    props: [],
    template: `
        <div>    
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive}">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: []
        }
    },
    mounted() {
        console.log(this.$children)
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)
            });
        }
    }
})


Vue.component('tab', {
    props: {
        name: { required: true },
        selected: { default: false }
    },
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>
    `,
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.isActive = this.selected;
    },
    computed: {
        href() {
            return `#${this.name.toLowerCase().replace(/ /g, '-')}`;
        }
    }
})


new Vue({
    el: '#root',
    data: {
        showModal: false
    }
})
