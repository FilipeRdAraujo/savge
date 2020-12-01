<template>
  <div class="about fadeInDown">
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
        <b-col md class="p-3">
          <h2>Sobre</h2>
          <p>
            A SAVGE ou Sistema de apoio ao visitante em grandes eventos, é um site desenvolvido com intuito de ajudar estrangeiros ou
            visitantes durante a estadia no Brasil, trazendo uma gama de informações como praias, pontos turisticos, delegacias e etc.
          </p>
          <p>A listagem dos locais podem ser organizadas das mais distantes para as mais próximas e vice versa, também pode ser organizada por preço e avaliação. Para visualizar mais detalhes do local em questão basta clicar no local escolhido que você será levado a uma página de detalhes onde terá um mapa.</p>
          <!-- <p>detalhada do local em questão ocorre por meio de um mapa onde, é possível ~~Continuar isso aqui~~</p> -->
        </b-col>
      </b-row>
      <b-row class="mt-10">
        <b-col md>
          <h2>Outras formas de contato:</h2>
          <p>
            Além de nossas redes sociais você também pode entrar em contato por
            nosso email <a href="emailaqui@gmail.com">emailaqui@gmail.com</a> ou
            pelo formulário nesta página.
          </p>
          <p>Envie-nos dúvidas ou dicas para que nós sempre consigamos evoluir!</p>
        </b-col>
        <b-col md>
          <FormContato />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import FormContato from "../components/formContato.vue";

export default {
  name: "Sobre",
  components: {
    FormContato,
  },
};
</script>

<style>
</style>