<template>
  <nav
    id="nav"
    :class="{ bg_scroll_color: scrollPos > 200 }"
    toggleable="lg"
    type="dark"
  >
    <div class="logo">
      <a id="menu-mobile" v-b-toggle.savgeSidebar
        ><i class="fas fa-bars"></i
      ></a>
      <router-link class="pc-options" to="/"
        ><i class="fas fa-home"></i> HOME</router-link
      >
      <router-link class="pc-options" to="/Listagem"
        ><i class="fas fa-list"></i> LISTAGEM DE LOCAIS</router-link
      >
      <router-link class="pc-options" to="/Sobre"
        ><i class="fas fa-info-circle"></i> SOBRE</router-link
      >
    </div>
    <b-sidebar id="savgeSidebar" title="SAVGE - Menu" backdrop shadow>
      <div>
        <b-nav vertical>
          <b-nav-item
            ><router-link class="text-dark" to="/"
              ><i class="fas fa-home"></i> Home</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link class="text-dark" to="/Listagem"
              ><i class="fas fa-list"></i> Lista de locais</router-link
            ></b-nav-item
          >
          <b-nav-item>
            <router-link class="text-dark" to="/About"
              ><i class="fas fa-info-circle"></i> Sobre</router-link
            >
          </b-nav-item>
        </b-nav>
      </div>
    </b-sidebar>
    <!-- <div class="navContent">
      <router-link to="/hospitais">Hospitais</router-link>
    </div>
    <div class="navMenu">
      <i class="fas fa-bars" style="font-size: xx-large"></i>
    </div> -->
    <!-- <b-navbar-brand to="/">
        <img src="https://placekitten.com/g/30/30" alt="Kitten">
    </b-navbar-brand> -->
    <!-- <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/hospitais">Hospitais</b-nav-item>
        <b-nav-item to="/about">Sobre</b-nav-item>
      </b-navbar-nav>
    </b-collapse> -->
  </nav>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/hospitais">Hospitais</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      scrollPos: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPos = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style>
</style>