<template>
  <footer class="footer"><icon-copyright class="footer__icon" /> 2019</footer>
</template>

<script setup>
import IconCopyright from '@/components/icons/IconCopyright.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.footer {
  $fontSize: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
  padding-bottom: 12px;
  font-family: variables.$Roboto;
  font-size: $fontSize;
  line-height: 2.3;
  letter-spacing: calc($fontSize * 5 / 100);
  color: rgba(255, 255, 255, 0.5);

  &__icon {
    height: 10px;
    width: 10px;
  }
}
</style>
