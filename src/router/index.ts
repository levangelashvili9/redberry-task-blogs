import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import CreateBlogView from '@/views/CreateBlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'defaultLayout',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/form',
      name: 'formLayout',
      component: FormLayout,
      children: [
        {
          path: '/form/createBlog',
          name: 'createBlog',
          component: CreateBlogView
        }
      ]
    },
    {
      path: '/:notFound(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
