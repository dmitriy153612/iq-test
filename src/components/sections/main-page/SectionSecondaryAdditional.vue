<template>
  <section class="section">
    <app-container class="section__container">
      <p class="section__text section__text--top" v-html="textTop" />
      <p class="section__text section__text--bottom" v-html="textBottom" />
      <app-button class="section__link" :transparent="true" tag="router-link" :to="linkRoute">
        ПРОЙТИ ТЕСТ
      </app-button>
    </app-container>
  </section>
</template>

<script setup>
import AppContainer from '@/components/layout/AppContainer.vue'
import AppButton from '@/components/UI/AppButton.vue'

defineProps({
  textTop: { type: String, required: true },
  textBottom: { type: String, required: true },
  linkRoute: { type: Object, required: true },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.section {
  &__container {
    display: grid;
    justify-items: center;
    padding-block: 54px 86px;
    background-image:
      url('/pictures/lightning-right.png'), url('/pictures/lightning-left.png'),
      url('/pictures/space.jpg');
    background-repeat: no-repeat;
    background-position:
      right 68px,
      left bottom 52px,
      center;
    background-size: 110px, 110px, cover;
  }

  &__text {
    margin: 0;
    max-width: 576px;
    font-family: variables.$Merriweather;
  }

  &__text--top {
    --font-size: 15px;
    padding: 0 28px 22px 10px;
    font-size: var(--font-size);
    line-height: 1.33;
    letter-spacing: calc(var(--font-size) * 5 / 100);
    color: variables.$white;
  }

  &__text--top :deep(span) {
    color: variables.$supernova;
  }

  &__text--bottom {
    $fontSize: 16px;
    margin: 0 10px 32px;
    padding: 28px 12px;
    border-radius: 20px;
    font-size: $fontSize;
    line-height: 1.44;
    letter-spacing: calc($fontSize * 5 / 100);
    color: variables.$codeGray;
    background-color: rgba(243, 243, 242, 0.8);
  }

  &__link {
    justify-self: center;
  }
}
</style>
