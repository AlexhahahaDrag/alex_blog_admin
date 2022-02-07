import Layout from '@/layouts/index.vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import { MenuDataItem } from './typing'

export const routes: MenuDataItem[] = [
    {
        name: 'index',
        path: '/',
        redirect: '/dashboard',
        component: Layout,
        children: [
            {
                path: '/dashboard',
                component: () => import('@v/dashboard/index.vue'),
                meta: { title: '仪表盘', icon: 'dashboard' }
            }
        ],
    },
    // {
    //     name: 'index',
    //     path: '/',
    //     redirect: '/exception',
    //     component: Layout,
    //     children: [
    //         {
    //             name: 'exception',
    //             path: '/exception',
    //             meta: {title: '异常页', icon: 'WarningOutLined'},
    //             component: RouteView,
    //             redirect: '/exception/403',
    //             children: [
    //                 {
    //                     name: 'exception403',
    //                     path: '/exception/403',
    //                     meta: { title: '403' },
    //                     component: () => import('@v/exception/403.vue'),
    //                 },
    //                 {
    //                     name: 'exception404',
    //                     path: '/exception/404',
    //                     meta: { title: '404' },
    //                     component: () => import('@v/exception/404.vue'),
    //                 },
    //                 {
    //                     name: 'exception500',
    //                     path: '/exception/500',
    //                     meta: { title: '500' },
    //                     component: () => import('@v/exception/500.vue'),
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'login',
    //             path: '/login',
    //             component: () => import('@v/login/index.vue'),
    //         }
    //     ]
    // },
    // {
    //     name: 'dashboard',
    //     path: '/dashboard',
    //     component: () => import('@v/dashboard/index.vue'),
    // },
    {
        name: 'login',
        path: '/login',
        component: () => import('@v/login/index.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;