import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import server from '@/server/mainPageData.js'

export const useMainPageStore = defineStore('mainPage', () => {
  const pageData = shallowRef(null)
  const isPageDataLoading = ref(false)

  async function fetchPageData() {
    try {
      isPageDataLoading.value = true
      const res = await server()
      pageData.value = res
    } catch (err) {
      console.error(err)
    } finally {
      isPageDataLoading.value = false
    }
  }

  return {
    fetchPageData,
    pageData,
    isPageDataLoading,
  }
})
