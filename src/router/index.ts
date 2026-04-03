import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienceDetailView from '../views/ExperienceDetailsView.vue'
import FavoritesView from '@/views/FavoritesView.vue'

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/experience/:id',
      name: 'experience-detail',
      component: ExperienceDetailView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default routes
