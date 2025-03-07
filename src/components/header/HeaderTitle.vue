<template>
  <h1 class="title">
    <span v-if="imgUrl" class="title__img-wrapper">
      <img class="title__img" :src="imgUrl" alt="логотип теста" />
    </span>
    <span
      class="title__text"
      :class="{
        'title__text--small': size === 'small',
        'title__text--big': size === 'big',
      }"
    >
      <slot />
    </span>
  </h1>
</template>

<script setup>
defineProps({
  imgUrl: { type: String, default: null },
  size: { type: String, default: 'small' },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.title {
  display: flex;
  align-items: center;
  margin: 0;
  padding-left: 8px;
  width: 100%;

  &__img-wrapper {
    width: 48px;
    height: 46px;
  }

  &__img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &__text {
    font-family: variables.$Yeseva-One;
    line-height: 1.16;
    text-transform: uppercase;
    color: variables.$supernova;
    &--small {
      $fontSize: 12px;
      font-size: $fontSize;
      letter-spacing: calc($fontSize * 5 / 100);
      padding-left: 8px;
    }
    &--big {
      $fontSize: 20px;
      font-size: $fontSize;
      letter-spacing: calc($fontSize * 10 / 100);
      padding-left: 24px;
    }
  }
}
</style>
