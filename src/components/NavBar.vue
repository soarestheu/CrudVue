<template>
    <div id="navBar">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">Inicio</router-link>
        <div v-if="Logado"  class="navbar-nav mr-auto">
            <li class="nav-item">
            <router-link to="/list" class="nav-link">Listar</router-link>
            </li>
            <li class="nav-item">
            <router-link to="/novo" class="nav-link">Cadasatrar Usuário</router-link>
            </li>
        </div>
        <li class="nav-item navbar-text logout">
            <a href="#" @click="logout" class="nav-link">Logout </a>
        </li>
        </nav>
    </div>
</template>

<script>
import CRUDDataService from "../services/CrudDataService";
import Cookie from "js-cookie";

    export default {
        name: "navBar",
        data() {
            return {
                Logado:false,
            }
        },
        methods: {
            logout() {
                CRUDDataService.logout()
                .then(response =>{
                    console.log(response.data);
                    Cookie.remove("Crud_token");
                    location.reload();
                })
                .catch(e => {
                console.log(e);
                });
            },
            exibeMenu(){
                 CRUDDataService.validatedToken()
                    .then(responseApi => {
                        if (responseApi.data.status) {
                            this.Logado = false;
                        } else {
                            this.Logado = true;
                        }
                    }).catch(e => {
                        console.log(e);
                    });
            },
        },
        mounted() {
            this.exibeMenu();
        },

    }
</script>