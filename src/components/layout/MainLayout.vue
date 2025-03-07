<template>
  <div class="layout">
    <div class="layout__header">
      <slot name="header" />
    </div>
    <div class="layout__content">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.layout {
  display: grid;
  min-height: 100vh;
  background-color: variables.$codeGray;
  overflow-x: hidden;

  &__header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 50;
  }

  &__content {
    display: grid;
    margin-top: variables.$header-height;
  }
}
</style>
