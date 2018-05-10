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
  import {mapState, mapActions} from "vuex";

  export default {
    name: "App",
    created() {
      let self = this;
      let base=sessionStorage.getItem('base')
      if(base){
        console.log('已经有基地址l')
        self.getBaseAbout(JSON.parse(base))
          .then(res=>{
            console.log('获取到数据了吗1')
            self.msg=res['data']['msg']
          })
      }else{
        self.getBase()
          .then(res => {
            self.getBaseAbout(res['data']['url'])
              .then(res=>{
                console.log('获取到数据了吗2')
                self.msg=res['data']['msg']
              })
          })
      }
    },
    data() {
      return {
        msg: ""
      };
    },
    computed: {
      ...mapState(['base'])
    },
    methods: {
      ...mapActions(["getBase", "getBaseAbout"]),
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
