<template>
  <div id="nav">
    <Header/>
    <button @click="increment">increment</button>
    <router-view v-bind="isLogin" />
    <Footer/>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "./components/Footer/footer.vue";
import Header from "./components/Header/header.vue";

@Options({
  components: {
    Footer,
    Header
  },
})
export default class App extends Vue {
 created(){
  //  console.log(store.state);
 }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
