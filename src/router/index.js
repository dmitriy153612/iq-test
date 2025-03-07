import { createRouter, createWebHistory } from 'vue-router'
import { useMainPageStore } from '@/stores/mainPage'
import { useTestStore } from '@/stores/test'
const MainPage = () => import('@/pages/MainPage.vue')
const TestPage = () => import('@/pages/TestPage.vue')
const ResultPage = () => import('@/pages/ResultPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
      beforeEnter: async () => {
        const mainPageStore = useMainPageStore()
        await mainPageStore.fetchPageData()
      },
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage,
      beforeEnter: async () => {
        const testStore = useTestStore()
        await testStore.fetchGetTest()
      },
    },
    {
      path: '/result',
      name: 'result',
      component: ResultPage,
      beforeEnter: async () => {
        const testStore = useTestStore()
        if (!testStore.testAnswer) {
          return { name: 'main' }
        }
      },
    },
  ],
})

export default router
