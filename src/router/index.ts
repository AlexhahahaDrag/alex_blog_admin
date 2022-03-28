import Layout from "@/layout/index.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { MenuDataItem } from "./typing";

export const routes: MenuDataItem[] = [
  {
    name: "index",
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    meta: {
      title: "仪表盘",
      hiedInMenu: false,
    },
    children: [
      {
        path: "/dashboard",
        component: () => import("@v/dashboard/index.vue"),
        meta: { title: "仪表盘", icon: "dashboard" },
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@v/login/index.vue"),
  },
  {
    name: "404",
    path: "/404",
    component: () => import("@v/exception/404.vue"),
    meta: {
      hiedInMenu: true,
    },
  },
  {
    name: "401",
    path: "/401",
    component: () => import("@v/exception/401.vue"),
    meta: {
      title: "401",
      hiedInMenu: true,
    },
  },
  {
    path: "/blog",
    component: Layout,
    redirect: "/blog/blog",
    name: "博客管理",
    meta: { title: "博客管理", icon: "edit", hiedInMenu: false },
    children: [
      {
        path: "/blog",
        name: "博客管理",
        component: () => import("@v/blog/blog/index.vue"),
        meta: { title: "博客管理", icon: "edit", hiedInMenu: false },
      },
      {
        path: "/blogTag",
        name: "标签管理",
        component: () => import("@/views/blog/blogTag/index.vue"),
        meta: { title: "标签管理", icon: "tag", hiedInMenu: false },
      },
  //     // {
  //     //     path: 'blogSort',
  //     //     name: '分类管理',
  //     //     component: () => import('@/views/blog/blogSort'),
  //     //     meta: { title: '分类管理', icon: 'sort' }
  //     // },
  //     // {
  //     //     path: 'blogRecommend',
  //     //     name: '推荐管理',
  //     //     component: () => import('@/views/blog/blogRecommend'),
  //     //     meta: { title: '推荐管理', icon: 'sort' }
  //     // },
  //     // {
  //     //     path: 'collect',
  //     //     name: '收藏管理',
  //     //     component: () => import('@/views/blog/collect'),
  //     //     meta: { title: '收藏管理', icon: 'table' }
  //     // }
    ],
  },

  // {
  //     path: '/authority',
  //     component: Layout,
  //     redirect: '/authority/admin',
  //     name: '权限管理',
  //     meta: { title: '权限管理', icon: 'authority' },
  //     children: [
  //         {
  //             path: 'admin',
  //             name: '管理员管理',
  //             component: () => import('@/views/authority/admin'),
  //             meta: { title: '管理员管理', icon: 'user' }
  //         },
  //         {
  //             path: 'role',
  //             name: '角色管理',
  //             component: () => import('@/views/authority/role'),
  //             meta: { title: '角色管理', icon: 'peoples' }
  //         },
  //         {
  //             path: 'categoryMenu',
  //             name: '菜单管理',
  //             component: () => import('@/views/authority/categoryMenu'),
  //             meta: { title: '菜单管理', icon: 'authority' }
  //         },
  //         {
  //             path: 'button',
  //             name: '按钮管理',
  //             component: () => import('@/views/authority/button'),
  //             meta: { title: '按钮管理', icon: 'authority' }
  //         }
  //     ]
  // },

  // {
  //     path: '/resource',
  //     component: Layout,
  //     redirect: '/resource/resourceSort',
  //     name: '资源管理',
  //     meta: { title: '资源管理', icon: 'resource' },
  //     children: [
  //         {
  //             path: 'resourceSort',
  //             name: '分类管理',
  //             component: () => import('@/views/resource/resourceSort'),
  //             meta: { title: '分类管理', icon: 'table' }
  //         },
  //         {
  //             path: 'studyVideo',
  //             name: '视频管理',
  //             component: () => import('@/views/resource/studyVideo'),
  //             meta: { title: '视频管理', icon: 'table' }
  //         }
  //     ]
  // },

  // {
  //     path: '/message',
  //     component: Layout,
  //     redirect: '/message/comment',
  //     name: '消息管理',
  //     meta: { title: '消息管理', icon: 'message1' },
  //     children: [
  //         {
  //             path: 'comment',
  //             name: '评论管理',
  //             component: () => import('@/views/message/comment'),
  //             meta: { title: '评论管理', icon: 'table' }
  //         },
  //         {
  //             path: 'feedback',
  //             name: '反馈管理',
  //             component: () => import('@/views/message/feedback'),
  //             meta: { title: '反馈管理', icon: 'table' }
  //         }
  //     ]
  // },

  // {
  //     path: '/picture',
  //     component: Layout,
  //     redirect: '/picture/pictureSort',
  //     name: '图片管理',
  //     meta: { title: '图片管理', icon: 'example' },
  //     children: [
  //         {
  //             path: 'pictureSort',
  //             name: '图片类别管理',
  //             component: () => import('@/views/picture/pictureSort'),
  //             meta: { title: '图片类别管理', icon: 'picture' }
  //         },
  //         {
  //             path: 'picture',
  //             name: '图片管理',
  //             hidden: true,
  //             component: () => import('@/views/picture/picture'),
  //             meta: { title: '图片管理', icon: 'picture' }
  //         }
  //     ]
  // },

  // {
  //     path: '/user',
  //     component: Layout,
  //     redirect: '/user/user',
  //     name: '用户管理',
  //     meta: { title: '用户管理', icon: 'user1' },
  //     children: [
  //         {
  //             path: 'user',
  //             name: '用户管理',
  //             component: () => import('@/views/user/user'),
  //             meta: { title: '用户管理', icon: 'table' }
  //         },
  //         {
  //             path: 'visitor',
  //             name: '游客管理',
  //             component: () => import('@/views/user/visitor'),
  //             meta: { title: '游客管理', icon: 'table' }
  //         }
  //     ]
  // },

  // {
  //     path: '/system',
  //     component: Layout,
  //     redirect: '/system/solrIndex',
  //     name: '系统管理',
  //     meta: { title: '系统管理', icon: 'system' },
  //     children: [
  //         {
  //             path: 'aboutMe',
  //             name: '关于我',
  //             component: () => import('@/views/system/aboutMe'),
  //             meta: { title: '关于我', icon: 'aboutMe' }
  //         },
  //         {
  //             path: 'blogLink',
  //             name: '友情链接',
  //             component: () => import('@/views/system/blogLink'),
  //             meta: { title: '友情链接', icon: 'blogLink' }
  //         },
  //         {
  //             path: 'sysDictType',
  //             name: '字典管理',
  //             component: () => import('@/views/system/SysDictType'),
  //             meta: { title: '字典管理', icon: 'web' }
  //         },
  //         {
  //             path: 'SysDictData',
  //             name: '字典数据',
  //             hidden: true, // 隐藏
  //             component: () => import('@/views/system/SysDictData'),
  //             meta: { title: '字典数据', icon: 'web' }
  //         },
  //         {
  //             path: 'webConfig',
  //             name: '网站配置',
  //             component: () => import('@/views/system/webConfig'),
  //             meta: { title: '网站配置', icon: 'web' }
  //         },
  //         {
  //             path: 'systemConfig',
  //             name: '系统配置',
  //             component: () => import('@/views/system/systemConfig'),
  //             meta: { title: '系统配置', icon: 'web' }
  //         }
  //     ]
  // },

  // {
  //     path: '/log',
  //     component: Layout,
  //     redirect: '/log/log',
  //     name: '操作日志',
  //     meta: { title: '操作日志', icon: 'log' },
  //     children: [
  //         {
  //             path: 'log',
  //             name: '操作日志',
  //             component: () => import('@/views/log/log'),
  //             meta: { title: '操作日志', icon: 'log' }
  //         },
  //         {
  //             path: 'exceptionLog',
  //             name: '异常日志',
  //             component: () => import('@/views/log/exceptionLog'),
  //             meta: { title: '异常日志', icon: 'exception' }
  //         },
  //         {
  //             path: 'webVisit',
  //             name: '用户日志',
  //             component: () => import('@/views/log/webVisit'),
  //             meta: { title: '用户日志', icon: 'user1' }
  //         }
  //     ]
  // },

  // {
  //     path: '/restapi',
  //     component: Layout,
  //     redirect: '/restapi/adminRestApi',
  //     name: '接口管理',
  //     meta: { title: '接口管理', icon: 'restapi' },
  //     children: [
  //         {
  //             path: 'adminRestApi',
  //             name: 'Admin接口',
  //             component: () => import('@/views/restapi/adminRestApi'),
  //             meta: { title: 'Admin接口', icon: 'table' }
  //         },
  //         {
  //             path: 'pictureRestApi',
  //             name: 'Picture接口',
  //             component: () => import('@/views/restapi/pictureRestApi'),
  //             meta: { title: 'Picture接口', icon: 'table' }
  //         },
  //         {
  //             path: 'webRestApi',
  //             name: 'Web接口',
  //             component: () => import('@/views/restapi/webRestApi'),
  //             meta: { title: 'Web接口', icon: 'table' }
  //         },
  //         {
  //             path: 'searchRestApi',
  //             name: 'Search接口',
  //             component: () => import('@/views/restapi/searchRestApi'),
  //             meta: { title: 'Search接口', icon: 'table' }
  //         }
  //     ]
  // },

  // {
  //     path: '/monitor',
  //     component: Layout,
  //     redirect: '/monitor/springBootAdmin',
  //     name: '监控中心',
  //     meta: { title: '监控中心', icon: 'log' },
  //     children: [
  //         {
  //             path: 'OnlineAdmin',
  //             name: '在线用户',
  //             component: () => import('@/views/monitor/OnlineAdmin'),
  //             meta: { title: '在线用户', icon: 'log' }
  //         },
  //         {
  //             path: 'SpringBootAdmin',
  //             name: 'SpringBootAdmin',
  //             component: () => import('@/views/monitor/SpringBootAdmin'),
  //             meta: { title: 'SpringBootAdmin', icon: 'log' }
  //         },
  //         {
  //             path: 'Zipkin',
  //             name: 'Zipkin',
  //             component: () => import('@/views/monitor/Zipkin'),
  //             meta: { title: 'Zipkin链路追踪', icon: 'log' }
  //         },
  //         {
  //             path: 'Druid',
  //             name: 'Druid',
  //             component: () => import('@/views/monitor/Druid'),
  //             meta: { title: 'Druid', icon: 'exception' }
  //         },
  //         {
  //             path: 'Eureka',
  //             name: 'Eureka',
  //             component: () => import('@/views/monitor/Eureka'),
  //             meta: { title: 'Eureka', icon: 'user1' }
  //         },
  //         {
  //             path: 'RabbitMQ',
  //             name: 'RabbitMQ',
  //             component: () => import('@/views/monitor/RabbitMQ'),
  //             meta: { title: 'RabbitMQ', icon: 'user1' }
  //         },
  //         {
  //             path: 'Solr',
  //             name: 'Solr',
  //             component: () => import('@/views/monitor/Solr'),
  //             meta: { title: 'Solr', icon: 'index' }
  //         },
  //         {
  //             path: 'ElasticSearch',
  //             name: 'ElasticSearch',
  //             component: () => import('@/views/monitor/ElasticSearch'),
  //             meta: { title: 'ElasticSearch', icon: 'exception' }
  //         },
  //         {
  //             path: 'ServerMonitor',
  //             name: '服务器监控',
  //             component: () => import('@/views/monitor/ServerMonitor'),
  //             meta: { title: '服务器监控', icon: 'exception' }
  //         },
  //     ]
  // },

  // {
  //     path: '/test',
  //     component: Layout,
  //     redirect: '/test/markdown',
  //     name: '测试页面',
  //     meta: { title: '测试页面', icon: 'log' },
  //     children: [
  //         {
  //             path: 'CropperPicture',
  //             name: 'CropperPicture',
  //             component: () => import('@/views/test/CropperPicture'),
  //             meta: { title: '图片裁剪', icon: 'log' }
  //         },
  //         {
  //             path: 'Markdown',
  //             name: 'Markdown',
  //             component: () => import('@/views/test/Markdown'),
  //             meta: { title: 'Markdown', icon: 'exception' }
  //         },
  //         {
  //             path: 'PictureList',
  //             name: 'PictureList',
  //             component: () => import('@/views/test/PictureList'),
  //             meta: { title: '图片列表', icon: 'exception' }
  //         },
  //         {
  //             path: 'FormBuild',
  //             name: 'FormBuild',
  //             component: () => import('@/views/test/build'),
  //             meta: { title: '表单构建', icon: 'exception' }
  //         }
  //     ]
  // },

  // { path: '*', redirect: '/404', hidden: true }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
