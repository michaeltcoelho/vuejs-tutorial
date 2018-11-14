<template>
  <div id="app">
    <div v-show="error">
      <p>Error loading tasks...</p>
    </div>
    <div>
      <input type="text" v-model="description" v-on:keyup.13="onNewTask">
    </div>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.description">
        {{ task.description }} - <input type="checkbox" :checked="task.completed" @click="onClick(task.id, task.completed)">
      </li>
    </ul>
  </div>
</template>

<script>
import MyService from './services/myservice';

export default {
  name: 'app',
  components: { },
  data () {
    return {
      tasks: [],
      error: false,
      description: null
    }
  },
  mounted() {
    MyService.all(tasks => {
      this.tasks = tasks;
    }, error => {
      this.error = true;
    });
  },
  methods: {
    onClick(taskId, completed) {
      MyService.complete(taskId, !completed)(
        data => console.log(data),
        error => console.error(error)
      )
    },
    onNewTask() {
      MyService.add(this.description)(
        data => {
          this.tasks.push(data);
          this.description = null;
        },
        error => console.error(error)
      )
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
