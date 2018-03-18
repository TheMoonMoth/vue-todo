<template>
  <div>
      <form class="form" @submit.prevent="addTodo()">
          <div class="form-group" >
              <label for="newTodo"></label>
              <input v-model="newTodo" type="text" class="form-control"
              placeholder="" >
              <p class="help-block" >Add your todo.</p>
          </div>
          <h3>{{newTodo}}</h3>
          <button type="submit" class="btn btn-success">
              Add ToDo
          </button>
      </form>

      <ul>
          <Todo :todo="todo" v-for="todo in todos" v-bind:key="todo"></Todo>
      </ul>
  </div>
</template>

<script>
import Todo from "./todoItem"
export default {
    components: {
        Todo
    },
  data() {
      return {
          newTodo: '',
          todos: [],
      };
  },
  methods: {
      addTodo(){
          if(this.newTodo){
            this.todos.push(this.newTodo)
            this.newTodo = ''
          }
      },
  }
}
</script>

