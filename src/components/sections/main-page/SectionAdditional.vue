<template>
  <section class="section">
    <app-container class="section__container">
      <p class="section__text" v-html="text" />
      <div class="section__img-wrapper">
        <img class="section__img" src="/pictures/brain-2.png" alt="логотип теста" />
      </div>
      <app-button class="section__link" tag="router-link" :to="linkRoute"> ПРОЙТИ ТЕСТ </app-button>
    </app-container>
  </section>
</template>

<script setup>
import AppContainer from '@/components/layout/AppContainer.vue'
import AppButton from '@/components/UI/AppButton.vue'

defineProps({
  text: { type: String, required: true },
  linkRoute: { type: Object, required: true },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.section {
  &__container {
    display: grid;
    padding: 38px 18px 42px 12px;
    background-color: variables.$desertStorm;
  }

  &__text {
    $fontSize: 16px;
    justify-self: center;
    margin-block: 0 30px;
    max-width: 576px;
    font-family: variables.$PT-Serif;
    font-size: $fontSize;
    line-height: 1.5;
    color: variables.$mineShaft;
    letter-spacing: calc($fontSize * 5 / 100);
  }

  &__text :deep(strong) {
    text-transform: uppercase;
  }

  &__img-wrapper {
    justify-self: center;
    margin-bottom: 28px;
    width: 232px;
    height: 140px;
  }

  &__img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &__link {
    justify-self: center;
  }
}
</style>
