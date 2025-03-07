<template>
  <main-layout>
    <template #header>
      <the-header :nav-links="NAV_LINKS">
        <header-title v-if="title" :img-url="title.pictureUrl" :size="title.size">
          {{ title.text }}
        </header-title>
      </the-header>
    </template>
    <template #content>
      <router-view v-slot="{ Component }">
        <appear-transition mode="out-in" duration="0.1s">
          <component :is="Component" :key="$route.path" />
        </appear-transition>
      </router-view>
    </template>
  </main-layout>
</template>

<script setup>
import MainLayout from '@/components/layout/MainLayout.vue'
import TheHeader from '@/components/header/TheHeader.vue'
import HeaderTitle from '@/components/header/HeaderTitle.vue'
import AppearTransition from '@/components/AppearTransition.vue'
import { useTestStore } from '@/stores/test'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const testStore = useTestStore()

const route = useRoute()

const NAV_LINKS = [
  { toName: 'main', name: 'главная' },
  { toName: 'main', name: 'информация о тесте' },
  { toName: 'test', name: 'пройти тест', marked: true },
]

const title = computed(() => {
  if (route.name === 'test') {
    return {
      text: testStore.testData?.title,
      pictureUrl: testStore.testData?.logoUrl,
      size: 'small',
    }
  } else if (route.name === 'result') {
    return {
      text: testStore.testAnswer?.mainTitle,
      pictureUrl: testStore.testAnswer?.logoUrl,
      size: 'big',
    }
  }
  return null
})
</script>
