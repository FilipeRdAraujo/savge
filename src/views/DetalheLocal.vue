<template>
  <div id="detalhe">
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
      <b-row class="mt-10 shadow-border">
        <b-col md class="p-5">
          <h2>{{ local.name }}</h2>
          <b-form-rating
            size="sm"
            v-model="local.rating"
            readonly
            precision="2"
          ></b-form-rating>
          <p><strong>Endereço: </strong> {{ local.formatted_address }}</p>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col md class="p-5">
          <h2>Mapa</h2>
          <gmap-map
            id="gmap"
            :center="local.geometry.location"
            :zoom="16"
            class="shadow-border"
            style="height: 90vh"
          >
            <gmap-marker :position="local.geometry.location"></gmap-marker>
          </gmap-map>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "DetalheLocal",
  data() {
    return {
      id: this.$route.params.id,
      local: this.$route.params.local,
    };
  },
};
</script>

<style>
</style>