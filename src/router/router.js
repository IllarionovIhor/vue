import {createRouter, createWebHistory} from "vue-router";
import {routes} from "@/router/routes.js"
export const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ y: -1 }),
    routes: routes,
    linkActiveClass: 'is-active',
});

router.beforeEach((to, from) => {
    const isAuthenticated = !!localStorage.getItem('authU')
    if(to.meta.requiresAuth && !isAuthenticated) {
        return {name: 'login'};
    }

})