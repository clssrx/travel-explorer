import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienceDetailView from '../views/ExperienceDetailsView.vue'

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
  ],
  // scrollBehavior() {
  //   return { top: 0 }
  // },
})

export default routes
