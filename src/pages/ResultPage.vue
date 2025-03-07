<template>
  <div class="page">
    <main class="page__main">
      <app-container class="page__container">
        <section-info
          :title="testAnswer.title"
          :text="testAnswer.text"
          :subtitle="testAnswer.subtitle"
          :subtext="testAnswer.subtext"
          :timer="testAnswer.timer"
          :link="testAnswer.link"
        />
        <section-result
          v-if="testResult"
          title="Ваша характеристика"
          :name="testResult.name"
          :gender="testResult.gender"
          :skin-color="testResult.skin_color"
          :birth-year="testResult.birth_year"
          :mass="testResult.mass"
          :height="testResult.height"
          :eye-color="testResult.eye_color"
          :hair-color="testResult.hair_color"
        />
        <teleport to="body">
          <footer class="page__footer">
            <p class="page__footer-text">
              TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI
              DECLARATI CA AVETI 18 ANI IMPLINITI,
            </p>
          </footer>
        </teleport>
      </app-container>
    </main>
  </div>
</template>

<script setup>
import SectionInfo from '@/components/sections/result-page/SectionInfo.vue'
import SectionResult from '@/components/sections/result-page/SectionResult.vue'
import AppContainer from '@/components/layout/AppContainer.vue'
import { useTestStore } from '@/stores/test'
import { useScroll } from '@/composables/useScroll'
import { computed, onUnmounted } from 'vue'

const testStore = useTestStore()
const { remainingScroll } = useScroll()

const HIDDEN_FOOTER_HEIGHT = 12

const testAnswer = computed(() => testStore.testAnswer)
const testResult = computed(() => testStore.testResult)

const footerPositionBottom = computed(
  () => `${-Math.min(HIDDEN_FOOTER_HEIGHT, remainingScroll.value)}px`,
)

onUnmounted(() => testStore.clearTestResult())
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.page {
  $container-inline-padding: 14px;
  display: grid;
  overflow-y: hidden;

  &__main {
    display: grid;
  }

  &__container {
    display: grid;
    grid-template-rows: auto 1fr;
    justify-items: center;
    padding-bottom: 144px;
    background-image: url('/pictures/space.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &__footer {
    position: fixed;
    right: 0;
    bottom: v-bind(footerPositionBottom);
    left: 0;
    display: grid;
    justify-items: center;

    &-text {
      padding-block: 2px;
      max-width: 292px;
      width: 100%;
      margin-block: 0;
      $font-size: 7px;
      font-family: variables.$Roboto;
      font-size: $font-size;
      line-height: 1.29;
      letter-spacing: calc($font-size * 42 / 100);
      text-transform: uppercase;
      color: rgba(#fff, 0.5);
    }
  }
}
</style>
