<template>
  <component
    :is="tag"
    :disabled="disabled"
    :tabindex="disabled ? -1 : 0"
    class="button"
    :class="{
      'button--colored': !transparent,
      'button--transparent': transparent,
      'button--disabled': disabled,
    }"
  >
    <span class="button__inner">
      <slot />
    </span>
  </component>
</template>

<script setup>
defineProps({
  tag: { type: String, default: 'button' },
  transparent: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/_mixins.scss' as mixins;
@use '@/assets/css/_variables.scss' as variables;

.button {
  $fontSize: 14px;
  display: flex;
  justify-content: center;
  min-width: 188px;
  padding: 12px 16px 10px;
  border-radius: 20px;
  font-family: variables.$Merriweather;
  font-size: $fontSize;
  text-decoration: none;
  letter-spacing: calc($fontSize * 10 / 100);
  @include mixins.transition(color, background-color);

  &--colored {
    border: none;
    color: variables.$cinder;
    background-color: variables.$supernova;

    &:visited {
      color: variables.$cinder;
    }
  }

  &--transparent {
    border: 1px solid variables.$white;
    color: variables.$white;
  }

  &:disabled,
  &--disabled,
  &--disabled:visited {
    pointer-events: none;
    color: variables.$gray;
    background-color: variables.$alto;
    cursor: default;
    box-shadow: inset 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  }
}
</style>
