<template>
  <div class="hello">
    <router-link to="todo">GO to Todo List</router-link>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="i in cats" v-bind:key="i">{{i}}</li>
    </ul>

    <div v-if="name === 'Kyle'">
      <h2>{{name}}</h2>
    </div>

    <div :class="{
      myCustomClass: canNotSeeMePlease
    }">
      <h3>Unhidden!</h3>
    </div>
    <div>
      <p v-for="img in posts" v-bind:key="img">This URL is: {{img}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      cats: [
        "Garfield",
        "Chloe",
        "WigglesWorth",
        "Felix"
      ],
      name: "Kyle",
      canNotSeeMePlease: true,
      posts: [],
    }
  },
  mounted() {
    const API_URL="https://www.reddit.com/r/aww.json"
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        this.posts = json.data.children.map(child => {
          return child.data.preview.images[0].source.url;
        })
      })
  }
}
</script>

<style>
</style>
