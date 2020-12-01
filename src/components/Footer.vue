<template>
  <footer id="footer" class="text-light">
    <!-- <div class="container">
        <div class="row">
          <div id="bottom-navbar">
            <router-link to="/about">Sobre</router-link>
          </div>
        </div>
      </div> -->
    <div class="card-footer row m-0">
      <div class="col-md">
        <!-- <b-select style="width: fit-content;">
          <b-select-option value="PT-BR">PT-BR</b-select-option>
          <b-select-option value="EN">EN</b-select-option>
        </b-select> -->
        <!-- <p>
          <label>
            <i class="fas fa-phone fa-rotate-90 text-primary"></i>
          </label>
        </p> -->
      </div>
      <div class="col-md">
        <p id="footer-siganos">
          <small class="follow-text">SIGA-NOS NAS REDES SOCIAIS: </small>
          <label>
            <a title="Instagram" href="#"
              ><i style="padding: 5px" class="fab fa-instagram"></i
            ></a>
            <a title="Facebook" href=""
              ><i style="padding: 5px" class="fab fa-facebook-square"></i
            ></a>
            <a title="Linkedin" href=""
              ><i style="padding: 5px" class="fab fa-linkedin"></i
            ></a>
            <a title="Twitter" href=""
              ><i style="padding: 5px" class="fab fa-twitter-square"></i
            ></a>
          </label>
        </p>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="#" title="SAVGE link">SAVGE.com</a>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style>
</style>