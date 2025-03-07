<template>
  <section class="section">
    <app-container class="section__container">
      <p class="section__descr section__descr--top">
        {{ topDescr }}
      </p>
      <h1 class="section__title">
        {{ title }}
      </h1>
      <div class="section__img-wrapper">
        <img class="section__img" src="/pictures/brain.png" alt="логотип теста" />
      </div>
      <app-button class="section__main-link" tag="router-link" :to="mainLinkRoute">
        ПРОЙТИ ТЕСТ
      </app-button>
      <p class="section__descr section__descr--bottom" v-html="bottomDescr" />
      <router-link class="section__secondary-link" :to="secondaryLinkRoute">
        <icon-arrow class="section__secondary-link-icon" />
        <span class="section__secondary-link-text">Подробнее</span>
      </router-link>
    </app-container>
  </section>
</template>

<script setup>
import AppContainer from '@/components/layout/AppContainer.vue'
import AppButton from '@/components/UI/AppButton.vue'
import IconArrow from '@/components/icons/IconArrow.vue'

defineProps({
  topDescr: { type: String, required: true },
  title: { type: String, required: true },
  bottomDescr: { type: String, required: true },
  mainLinkRoute: { type: Object, required: true },
  secondaryLinkRoute: { type: Object, required: true },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.section {
  &__container {
    display: grid;
    text-align: center;
    padding-block: 28px 14px;
    background-color: variables.$codeGray;
    background-image: url('/pictures/space.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &__descr {
    padding-inline: 20px;
    font-family: variables.$PT-Serif;
  }

  &__descr--top {
    $fontSize: 18px;
    margin-block: 0 16px;
    font-size: $fontSize;
    line-height: 1.33;
    letter-spacing: calc($fontSize * 5 / 100);
    color: variables.$white;
  }

  &__title {
    --font-size: 30px;
    position: relative;
    margin: 0;
    padding-inline: 30px;
    font-family: variables.$Yeseva-One;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.13;
    letter-spacing: calc(var(--font-size) * 3 / 100);
    color: variables.$supernova;
    text-transform: uppercase;
  }

  &__img-wrapper {
    justify-self: center;
    margin-block: -50px;
    padding-block: 50px;
    padding-inline: 82px;
    width: 320px;
    height: 256px;
    background: radial-gradient(closest-side, #057de8 -100%, transparent 100%);
  }

  &__img {
    width: 100%;
    height: auto;
  }

  &__main-link {
    justify-self: center;
    margin-bottom: 22px;
  }

  &__descr--bottom {
    --font-size: 15px;
    display: grid;
    margin-block: 0 10px;
    font-size: var(--font-size);
    line-height: 1.27;
    letter-spacing: calc(var(--font-size) * 5 / 100);
    color: variables.$white;
  }

  &__descr--bottom :deep(span) {
    color: variables.$supernova;
  }

  &__secondary-link {
    justify-self: center;
    display: grid;
    row-gap: 6px;
    text-decoration: none;
    color: variables.$white;
  }

  &__secondary-link:visited {
    color: variables.$white;
  }

  &__secondary-link-icon {
    justify-self: center;
    height: 16px;
    width: 16px;
  }

  &__secondary-link-text {
    --font-size: 8px;
    font-family: variables.$PT-Serif;
    font-size: 8px;
    line-height: 1.375;
    letter-spacing: calc(var(--font-size) * 5 / 100);
  }
}
</style>
