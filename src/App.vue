<template>
  <div id="app">
    <Header />
    <!-- <b-container fluid class="headerImg">
      <b-row> </b-row>
    </b-container> -->
    <!-- <b-container class="p-0">
      Foto de Matheus Bertelli no Pexels
    </b-container> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<!--<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
-->