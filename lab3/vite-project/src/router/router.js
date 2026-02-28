// import { createRouter, createWebHistory } from "vue-router";
//
// export const routes = [
//     {
//         name: 'header',
//         path: '/',
//         component: () => import('../views/HeaderView.vue'),
//         children: [
//             {
//                 name: 'home',
//                 path: '/',
//                 component: () => import('../views/ArticlesView.vue'),
//             },
//             {
//                 name: 'about',
//                 path: '/about',
//                 component: () => import('../views/AboutView.vue'),
//                 meta: { title: 'About' }
//             },
//             {
//                 name: 'article',
//                 path: 'article/:id',
//                 component: () => import('../views/ArticleView.vue'),
//                 meta: { title: 'Article' }
//             },
//
//         ],
//         meta: { title: 'Home' }
//     },
//     {
//         name: 'not-found',
//         path: '/:pathMatch(.*)*',
//         component: () => import('../views/NotFoundView.vue')
//     }
// ];
//
// export const router = createRouter({
//     history: createWebHistory(),
//     scrollBehavior: () => ({ x: 0, y: 0 }),
//     routes,
//     linkActiveClass: 'is-active',
// });
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/ArticlesView.vue'),
        meta: { title: 'Home' },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: { title: 'About' },
    },
    {
        path: '/article/:id',
        name: 'article',
        component: () => import('../views/ArticleView.vue'),
        meta: { title: 'Article' },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFoundView.vue'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({ top: 0 }),
})
