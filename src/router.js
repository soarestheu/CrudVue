import { createWebHistory, createRouter } from "vue-router";
import Login from "./services/middleware"
//Rotas do projeto
/**
 * path: caminho onde a rota pode ser encontrada
 * name:
 * path: o caminho url onde esta rota pode ser encontrada.
 * name: nome opcional para usar quando vincularmos a esta rota.
 * component: componente para carregar quando esta rota é chamada.
 */
const routes = [{
        path: "/",
        alias: "/login",
        name: "login",
        component: () =>
            import ("./components/Login")
    },
    {
        path: "/list",
        name: "list",
        beforeEnter: Login.auth,
        component: () =>
            import ("./components/List")

    },
    {
        path: "/user/:id",
        name: "user-detalhe",
        beforeEnter: Login.auth,
        component: () =>
            import ("./components/User")
    },
    {
        path: "/novo",
        name: "novo",
        beforeEnter: Login.auth,
        component: () =>
            import ("./components/NovoUser")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;