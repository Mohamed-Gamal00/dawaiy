import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'services',

      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/articles/ArticlesView.vue')
    },
    {
      path: '/articles/article/:id',
      name: 'article',
      component: () => import('../views/articles/ArticleView.vue')
    },
    {
      path: '/server-erro',
      name: 'servererror',
      component: () => import('../views/ServerError.vue')
    },
    {
      path: "/:catchAll(.*)*",
      name: "errorpage",
      component: () =>
        import(/* webpackChunkName: "errorpage" */ "../views/ErrorView.vue"),
    },
  ]
})

export default router
