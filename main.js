Vue.component('task', {
    template: '<li><slot></slot></li>'
})

Vue.component('task-list', {
    template: `
        <ul>
            <task v-for="task in tasks">{{ task.description }}</task>
        </ul>`,
    data() {
        return {
            tasks: [
                { description: 'Go to the store', completed: true},
                { description: 'Make the dishes', completed: false},
                { description: 'Make donation', completed: true},
                { description: 'Wash the car', completed: false},
                { description: 'Cleam room', completed: true},
            ]
        }
    }
})

new Vue({
    el: '#root'
})