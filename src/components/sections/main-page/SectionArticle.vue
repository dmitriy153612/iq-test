<template>
  <section class="section">
    <app-container class="section__container">
      <p class="section__text">
        <icon-quotes class="section__icon section__icon--top" aria-hidden="true" />
        {{ text }}
        <icon-quotes class="section__icon section__icon--bottom" aria-hidden="true" />
      </p>
    </app-container>
  </section>
</template>

<script setup>
import AppContainer from '@/components/layout/AppContainer.vue'
import IconQuotes from '@/components/icons/IconQuotes.vue'

defineProps({
  text: { type: String, required: true },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.section {
  &__container {
    display: grid;
    justify-items: center;
    background:
      radial-gradient(circle, #2762bb 0%, #265bc7 15%, #2950c2 40%, transparent 100%),
      url('/pictures/gradient.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &__icon {
    position: absolute;
    width: 22px;
    height: 22px;
    color: variables.$white;
  }

  &__icon--top {
    top: 44px;
    left: 24px;
  }

  &__icon--bottom {
    justify-self: flex-end;
    transform: rotate(180deg);
    right: 30px;
    bottom: 26px;
  }

  &__text {
    $fontSize: 18px;
    position: relative;
    margin: 0;
    padding: 82px 48px 50px;
    max-width: 576px;
    text-align: center;
    font-family: variables.$Yeseva-One;
    font-size: $fontSize;
    line-height: 1.28;
    letter-spacing: calc($fontSize * 5 / 100);
    color: variables.$white;
  }
}
</style>
