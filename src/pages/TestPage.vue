<template>
  <div class="page">
    <app-container class="page__container">
      <div class="page__progress-bar">
        <progress-bar :step="test.page + 1" :step-amount="test.totalPages" />
      </div>
      <main class="page__main">
        <appear-transition mode="out-in" duration="0.1s">
          <section v-if="!isAnswerLoading" class="page__section">
            <appear-transition mode="out-in" duration="0.1s">
              <test-card
                v-if="isTestVisible"
                :key="test.page"
                :test-answers="test.answers"
                :picture="test.picture"
                :question="test.question"
                :test-id="test.testId"
                :appearance="test.appearance"
                :page="test.page"
                :total-pages="test.totalPages"
                @submit="onFormSubmit"
              />
            </appear-transition>
          </section>
          <app-preloader v-else title="обработка результатов" text="Определение стиля мышления" />
        </appear-transition>
      </main>
    </app-container>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppContainer from '@/components/layout/AppContainer.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import TestCard from '@/components/TestCard.vue'
import AppPreloader from '@/components/AppPreloader.vue'
import AppearTransition from '@/components/AppearTransition.vue'
import { useRouter } from 'vue-router'
import { useTestStore } from '@/stores/test'

const testStore = useTestStore()
const router = useRouter()

const test = computed(() => testStore.testData)

const isAnswerLoading = ref(false)
const isTestVisible = ref(true)

async function onFormSubmit({ page, answerId, testId }) {
  if (page < test.value.totalPages - 1) {
    await testStore.fetchSendTest({ page, answerId, testId })
  } else if (page === test.value.totalPages - 1) {
    isAnswerLoading.value = true
    isTestVisible.value = false
    await testStore.fetchGetAnswer({ page, answerId, testId })
    router.replace({ name: 'result' })
    isAnswerLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: grid;

  &__container {
    display: grid;
    grid-template-rows: auto 1fr;
    background-image: url('/pictures/space.jpg');
    padding-top: 16px;
  }

  &__main,
  &__section {
    display: grid;
  }

  &__progress-bar {
    padding-inline: 30px;
  }
}
</style>
