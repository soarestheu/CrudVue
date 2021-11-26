<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Inicio</router-link>
      <div v-if="Logado" class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/list" class="nav-link">Listar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/novo" class="nav-link">Cadasatrar Usuário</router-link>
        </li>
      </div>
      <li class="nav-item navbar-text">
        <a href="#" @click="logout" class="nav-link">Logout </a>
      </li>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import CRUDDataService from "./services/CrudDataService";
import Cookie from "js-cookie";

export default {
  name: "app",
  data(){
    return {
      Logado: null, 
    }
  },
  methods: {
    getAll() {
        CRUDDataService.getAll()
        .then(response => {
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    logout() {
        CRUDDataService.logout()
        .then(response =>{
          console.log(response.data);
          Cookie.remove("Crud_token");
          this.$router.replace({
            name: '/'
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>