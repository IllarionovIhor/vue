import { createRouter, createWebHistory } from "vue-router";

export const routes = [
    {
        name: 'header',
        path: '/',
        component: () => import('../views/HeaderView.vue'),
        children: [
            {
                name: 'products',
                path: '/products',
                component: () => import('../views/ProductsView.vue'),
                meta: { title: 'Products' }
            },
            {
                name: 'cart',
                path: '/cart',
                component: () => import('../views/CartView.vue'),
                meta: { title: 'About'}
            },
            {
                name: 'Profile',
                path: '/profile',
                component: () => import('../views/ProfileView.vue'),
                meta: { title: 'Profile' }
            },
        ],
        meta: { title: 'Home' }
    },

];

export const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    linkActiveClass: 'is-active',
});
