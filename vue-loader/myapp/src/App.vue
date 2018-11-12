<template>
  <div id="app">
    <ul>
      <li v-for="task in tasks" v-bind:key="task">
        {{ task }}
      </li>
    </ul>
    <message></message>
  </div>
</template>

<script>
import MyService from './services/myservice';
import Message from './components/Message.vue';

export default {
  name: 'app',
  components: { Message },
  data () {
    return {
      tasks: []
    }
  },
  mounted() {
    MyService.all(tasks => {
      this.tasks = tasks;
    }, error => {
      console.error(error);
    });
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
