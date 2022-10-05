import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Forms from "../pages/Forms.vue";
import Cards from "../pages/Cards.vue";
import Tables from "../pages/Tables.vue";
import Buttons from "../pages/Buttons.vue";
import Charts from "../pages/Charts.vue";
import Modals from "../pages/Modals.vue";

import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";
import ForgotPassword from "../pages/auth/ForgotPassword.vue";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: DefaultLayout,
        children: [
            {
                path: "/dashboard",
                component: Dashboard,
                name: "dashboard",
            },

            {
                path: "/forms",
                component: Forms,
                name: "forms",
            },
            {
                path: "/cards",
                component: Cards,
                name: "cards",
            },
            {
                path: "/tables",
                component: Tables,
                name: "tables",
            },
            {
                path: "/buttons",
                component: Buttons,
                name: "buttons",
            },
            {
                path: "/charts",
                component: Charts,
                name: "charts",
            },
            {
                path: "/modals",
                component: Modals,
                name: "modals",
            },
        ],
    },

    {
        path: "/auth",
        redirect: "/auth/login",
        component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                name: "login",
                component: Login,
            },

            {
                path: "/auth/register",
                name: "register",
                component: Register,
            },

            {
                path: "/auth/forgot-password",
                name: "forgot-password",
                component: ForgotPassword,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
