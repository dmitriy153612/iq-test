<template>
  <appear-transition>
    <div v-if="isOpened" class="header-nav">
      <app-container class="header-nav__container">
        <button class="header-nav__btn" aria-label="закрыть меню навигации" @click="emitCloseNav">
          <icon-cross />
        </button>
        <ul class="header-nav__list">
          <li v-for="(link, index) in links" :key="index" class="header-nav__item">
            <RouterLink
              class="header-nav__link"
              :class="{ 'header-nav__link--marked': 'marked' in link && link.marked }"
              :to="{ name: link.toName }"
              @click="emitCloseNav"
            >
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </app-container>
    </div>
  </appear-transition>
</template>

<script setup>
import AppContainer from '@/components/layout/AppContainer.vue'
import IconCross from '@/components/icons/IconCross.vue'
import AppearTransition from '@/components/AppearTransition.vue'

defineProps({
  isOpened: { type: Boolean, default: false },
  links: { type: Array, required: true },
})

const emit = defineEmits(['update:isOpened'])

function emitCloseNav() {
  emit('update:isOpened', false)
}
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.header-nav {
  position: fixed;
  inset: 0;
  min-height: 100%;
  background-color: variables.$codeGray;

  &__container {
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 64px;
    padding: 18px 12px 18px 22px;
    height: 100%;
  }

  &__btn {
    justify-self: flex-end;
    padding: 0;
    height: 28px;
    width: 28px;
    border: none;
    background-color: transparent;
    color: variables.$supernova;
  }

  &__list {
    display: grid;
    grid-auto-rows: max-content;
    row-gap: 26px;
  }

  &__link {
    font-family: variables.$Roboto;
    font-size: 16px;
    line-height: 1.375;
    color: variables.$white;
    text-transform: uppercase;
    text-decoration: none;

    &:visited {
      color: variables.$white;
    }

    &--marked,
    &--marked:visited {
      color: variables.$ripeLemon;
    }
  }
}
</style>
