import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AnimesView from '@/views/AnimesView.vue'
import AnimeView from '@/views/AnimeView.vue'
import EpisodeView from '@/views/EpisodeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/animes/page/:pageID',
      name: 'animes',
      component: AnimesView
    },
    {
      path: '/animes/anime/:id',
      name: 'anime',
      component: AnimeView
    },
    {
      path: '/animes/anime/:id/episodes/:ep',
      name: 'episodes',
      component: EpisodeView
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundView
    },
  ]
})

export default router
