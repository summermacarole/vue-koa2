<template>
  <div id="app">
    {{msg}}
    <ul>
      <router-link to="/" tag="li">home</router-link>
      <router-link to="/about" tag="li">about</router-link>
      <router-link to="/contact" tag="li">contact</router-link>
    </ul>
    <router-view class="wrapper"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  created() {
    let self = this;
    self.getBase().then(res => {
      console.log(res);
      console.log('还会出发没')
    });
  },
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    ...mapActions(["getBase", "getBaseAbout"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app li {
  display: inline-block;
}
.wrapper {
  width: 500px;
  height: 500px;
  background: lightblue;
  margin: 0 auto;
}
</style>
