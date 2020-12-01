<template>
  <div class="home">
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
      <b-row class="mt-10">
        <b-col class="p-5">
          <h2>Bem vindo</h2>
          <p>Bem vindo ao Sistema de apoio ao visitante em grandes eventos, aqui você pode encontrar informações de locais como hospitais, delegacias, onde dormir, onde comer ou pontos turisticos mais próximos para visitar durante sua estadia no Brasil.</p>
          <p>Para mais informações das funcionalidades vá em Sobre no menu.</p>
        </b-col>
        <b-col class="p-5 img-area">
          <img class="brad-5" src="../assets/museum_of_tomorrow_Andres_Otero.jpg" width="100%" title="Museu do Amanhã - Centro, Rj" alt="Museu do Amanhã">
          <small class="link-s"><a href="https://www.colorkinetics.com/global/showcase/museum-of-tomorrow" title="Foto tirada por Andrés Otero" class="text-dark">Foto tirada por Andrés Otero</a></small>
        </b-col>
      </b-row>
      <b-row class="mt-10">
        <b-col class="p-5 img-area">
          <img width="50%" src="../assets/Info_icon.png" alt="Icone de informação">
        </b-col>
        <b-col class="p-5">
          <h2>Mantenha-se seguro!</h2>
          <p>Presamos pela segurança dos usuários, a baixo você irá encontrar uma lista de números de emergência.</p>
          <ul>
            <li>Ambulâncias (SAMU): <strong>192</strong></li>
            <li>Corpo de Bombeiros: <strong>193</strong></li>
            <li>Polícia Militar: <strong>190</strong></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>
