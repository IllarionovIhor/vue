export const routes =  [
    {
        name: 'header',
        path: '/',
        component: () => import('@/views/HeaderView.vue'),
        children: [
            {
                name: 'admin',
                path: '/admin',
                children: [
                    {
                        name: 'admin.page',
                        path: '',
                        component: () => import('@/views/Admin/AdminView.vue'),
                        meta: {
                            title: 'Admin',
                            requiresAuth: true
                        }
                    },
                    {
                        name: 'admin.users',
                        path: 'users',
                        component: () => import('@/views/Admin/UsersView.vue'),
                        meta: {
                            title: 'Users',
                            requiresAuth: true
                        }
                    },
                      {
                        name: 'admin.user.id',
                        path: 'user/:id',
                        component: () => import('@/views/Admin/UserView.vue'),
                        meta: {
                            title: 'User',
                            requiresAuth: true
                        }
                    }
                ]
            },
            {
                name: 'home',
                path: '/',
                component: () => import('@/views/HomeView.vue'),
                meta: {
                    title: 'Home',
                    requiresAuth: true
                }
            }
        ],
        meta: {
            title: 'Home',
            requiresAuth: true
        }
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/LoginView.vue'),
        meta: {
            title: 'Login',
            public: true
        }
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('@/views/RegisterView.vue'),
        meta: {
            title: 'RegisterForm',
            public: true
        }
    },
    {
        name: 'not-found',
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFoundView.vue')
    },
]