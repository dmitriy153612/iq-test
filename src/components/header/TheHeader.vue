<template>
  <header class="header">
    <app-container class="header__container">
      <button
        class="header__btn-burger"
        aria-label="открыть меню навигации"
        @click="isNavOpened = !isNavOpened"
      >
        <icon-burger />
      </button>
      <header-nav v-model:is-opened="isNavOpened" :links="navLinks" />
      <div v-if="$slots.default" class="header__slot">
        <slot />
      </div>
    </app-container>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import IconBurger from '@/components/icons/IconBurger.vue'
import AppContainer from '@/components/layout/AppContainer.vue'
import HeaderNav from '@/components/header/HeaderNav.vue'

defineProps({
  navLinks: { type: Array, required: true },
})

const isNavOpened = ref(false)
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.header {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: variables.$codeGray;

  &__container {
    display: flex;
    align-items: center;
    padding-inline: 14px;
    height: variables.$header-height;
  }

  &__slot {
    flex-grow: 1;
  }

  &__btn-burger {
    padding: 0;
    width: 24px;
    height: 16px;
    border: none;
    background-color: transparent;
    color: variables.$doveGray;
  }
}
</style>
