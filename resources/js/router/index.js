import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Forms from "../pages/Forms.vue";
import Cards from "../pages/Cards.vue";
import Tables from "../pages/Tables.vue";
import Buttons from "../pages/Buttons.vue";
import Charts from "../pages/Charts.vue";
import Modals from "../pages/Modals.vue";

import DefaultLayout from "../layouts/DefaultLayout.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
