<template>
  <div class="main-page">
    <main>
      <section-main
        :top-descr="mainSecData.topDescr"
        :title="mainSecData.title"
        :bottom-descr="mainSecData.bottomDescr"
        :main-link-route="{ name: 'test' }"
        :secondary-link-route="{ name: 'main' }"
      >
      </section-main>
      <section-article :text="articleSecData.text" />
      <section-additional :text="additionalSecData.text" :link-route="{ name: 'test' }" />
      <section-secondary-additional
        :text-top="secondaryAdditionalSecData.textTop"
        :text-bottom="secondaryAdditionalSecData.textBottom"
        :link-route="{ name: 'test' }"
      />
    </main>
    <app-footer class="main-page__footer" />
  </div>
</template>

<script setup>
import SectionMain from '@/components/sections/main-page/SectionMain.vue'
import SectionArticle from '@/components/sections/main-page/SectionArticle.vue'
import SectionAdditional from '@/components/sections/main-page/SectionAdditional.vue'
import SectionSecondaryAdditional from '@/components/sections/main-page/SectionSecondaryAdditional.vue'
import AppFooter from '@/components/sections/main-page/AppFooter.vue'
import { useMainPageStore } from '@/stores/mainPage'
import { computed } from 'vue'

const pageStore = useMainPageStore()

const mainSecData = computed(() => pageStore.pageData?.sectionMain)
const articleSecData = computed(() => pageStore.pageData?.sectionArticle)
const additionalSecData = computed(() => pageStore.pageData?.sectionAdditional)
const secondaryAdditionalSecData = computed(() => pageStore.pageData?.sectionSecondaryAdditional)
</script>

<style lang="scss" scoped>
.main-page {
  position: relative;

  &__footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
