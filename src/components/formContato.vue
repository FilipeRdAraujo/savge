<template>
  <b-form>
    <h2>Preencha este formulário</h2>
    <label for="inline-form-input-username">Insira seu nome</label>
    <b-form-input
      id="inline-form-input-username"
      class="mr-sm-2 mb-sm-0"
      required
    ></b-form-input>

    <label class="mt-2" for="inline-form-input-email"
      >Insira seu email de contato</label
    >
    <b-form-input
      id="inline-form-input-email"
      class="mr-sm-2 mb-sm-0"
      type="email"
      required
    ></b-form-input>

    <label class="mt-2" for="inline-form-input-textarea">Insira sua mensagem</label>
    <b-form-textarea id="inline-form-input-textarea" rows="3" max-rows="6" required></b-form-textarea>

    <b-button class="mt-2 mb-2" type="submit" variant="primary">Enviar</b-button>
  </b-form>
</template>

<script>
export default {
  name: "formContato",
};
</script>

<style>
</style>