import Layout from '@/layouts/index.vue';
import { createRouter, createWebHashHistory, RouterView } from 'vue-router'
import { MenuDataItem } from './typing'
import RouteView from '@/layouts/route-view.vue';

export const routes : MenuDataItem[] = [
    {
        name: 'index',
        path: '/',
        redirect: '/exception',
        component: Layout,
        children: [
            {
                name: 'exception',
                path: '/exception',
                meta: {title: '异常页', icon: 'WarningOutLined'},
                component: RouteView,
                redirect: '/exception/403',
                children: [
                    {
                        name: 'exception403',
                        path: '/exception/403',
                        meta: { title: '403' },
                        component: () => import('@v/exception/403.vue'),
                    },
                    {
                        name: 'exception404',
                        path: '/exception/404',
                        meta: { title: '404' },
                        component: () => import('@v/exception/404.vue'),
                    },
                    {
                        name: 'exception500',
                        path: '/exception/500',
                        meta: { title: '500' },
                        component: () => import('@v/exception/500.vue'),
                    },
                ],
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        meta: {title: '登录页'},
        component: () => import('@v/login/index.vue'),
    }
];

// export const staticRoutes: MenuDataItem[] = [
//     {
//         path: '/:pathMatch(.*)',
//         component: () => import('@v/exception/404.vue'),
//     },
// ];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;