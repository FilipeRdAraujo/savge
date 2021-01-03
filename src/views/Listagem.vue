<template>
  <div class="listagem">
    <b-container fluid class="headerImg fadeIn">
      <b-row>
        <b-col>
          <div id="header-title" class="text-center text-light">
            <h1>SAVGE - Sistema de apoio ao visitante em grandes eventos</h1>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="mb-5">
        <b-col md="3"></b-col>
        <b-col md class="p-3">
          <b-nav pills align="right">
            <b-nav-item>
              <b-input-group class="mb-3">
                <b-form-input
                  placeholder="Procurar"
                  v-model.lazy="searchInput"
                ></b-form-input>
                <b-input-group-append>
                  <b-button
                    size=""
                    text="Button"
                    variant="primary"
                    @click="pesquisarPorTexto()"
                    ><i class="fas fa-search"></i
                  ></b-button>
                </b-input-group-append>
              </b-input-group>
            </b-nav-item>
            <b-nav-item-dropdown
              id="nav-type-dropdown"
              text="Organizar por"
              toggle-class="nav-link-custom"
              right
            >
              <b-dropdown-item @click="maisBemAvaliados()"
                >Maior avaliação</b-dropdown-item
              >
              <b-dropdown-item @click="maisMalAvaliados()"
                >Menor avaliação</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-nav>
          <b-alert
            v-show="!lugaresEncontrados"
            :show="!lugaresEncontrados"
            variant="danger"
            >Nada encontrado.</b-alert
          >
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col md="3">
          <h2>Categorias - {{ caminho }}</h2>
          <b-button-group style="width: 100%" vertical>
            <b-button
              squared
              variant="light"
              @click="pesquisarLocal($event.target)"
              ><i class="fas fa-hospital"></i> Hospitais</b-button
            >
            <b-button
              squared
              variant="light"
              @click="pesquisarLocal($event.target)"
              ><i class="fas fa-exclamation"></i> Delegacias</b-button
            >
            <b-button
              squared
              variant="light"
              @click="pesquisarLocal($event.target)"
              ><i class="fas fa-concierge-bell"></i> Hoteis</b-button
            >
            <b-button
              squared
              variant="light"
              @click="pesquisarLocal($event.target)"
              ><i class="fas fa-utensils"></i> Restaurantes</b-button
            >
            <b-button
              squared
              variant="light"
              @click="pesquisarLocal($event.target)"
              ><i class="fas fa-umbrella-beach"></i> Praias</b-button
            >
            <b-button
              squared
              variant="light"
              @click="pesquisarLocal($event.target)"
              ><i class="fas fa-thumbtack"></i> Pontos turísticos</b-button
            >
          </b-button-group>
        </b-col>
        <b-col md>
          <b-card-group deck>
            <b-card
              v-for="(place, i) in lugaresEncontrados"
              :key="i"
              :title="place.name"
              img-src="../assets/VectorBuildings.jpg"
              style="
                cursor: pointer;
                user-select: none;
                min-width: 12em;
                max-width: 12em;
                margin: 5px;
              "
              class="cards-size text-center"
              :img-alt="place.name"
              img-top
            >
              <b-card-text>
                <b-form-rating
                  v-model="place.rating"
                  readonly
                  precision="2"
                ></b-form-rating>
              </b-card-text>
              <router-link
                tag="p"
                :to="{
                  name: 'detalhe',
                  params: {
                    id: i,
                    local: place,
                  },
                }"
              >
                <b-button>VER DETALHES</b-button>
              </router-link>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Listagem",
  data() {
    return {
      caminho: "Home",
      center: { lat: 0, long: 0 },
      searchInput: null,
    };
  },
  computed: {
    ...mapGetters(["lugaresEncontrados"]),
  },
  methods: {
    ...mapActions(["pegarLocaisMaisProximosPorTexto"]),

    pesquisarPorTexto() {
      //console.log("LOG", elem.innerText.split(' ')[1]);
      if (this.searchInput) {
        this.searchStatus = "procurando";
        this.pegarLocaisMaisProximosPorTexto({
          lat: this.center.lat,
          long: this.center.long,
          search: this.searchInput.replaceAll(" ", "+"),
        });
      }
    },
    pesquisarLocal(elem) {
      this.caminho = elem.innerText;
      this.pegarLocaisMaisProximosPorTexto({
        lat: this.center.lat,
        long: this.center.long,
        search: elem.innerText.replaceAll(" ", "+").toLowerCase(),
      });
    },
    maisBemAvaliados() {
      this.lugaresEncontrados.sort((a, b) => b.rating - a.rating);
    },
    maisMalAvaliados() {
      this.lugaresEncontrados.sort((a, b) => a.rating - b.rating);
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.center = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          };
        },
        null,
        { enableHighAccuracy: true }
      );
    },
  },

  mounted() {
    this.geolocate();
  },
};
</script>

<style>
</style>