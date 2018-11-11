Vue.component('modal', {
    props: [],
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close is-large"
                    aria-label="close"
                    @click="$emit('close')"></button>
        </div>
    `,
    data() {
        return {}
    },
    methods: {}
})

new Vue({
    el: '#root',
    data: {
        showModal: false
    }
})
