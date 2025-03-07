<template>
  <div class="bar">
    <div class="bar__line" :style="{ width: lineWidth }" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  stepAmount: { type: Number, required: true },
  step: { type: Number, required: true },
})

const lineWidth = computed(() => `${(props.step / props.stepAmount) * 100}%`)
</script>

<style lang="scss" scoped>
@use '@/assets/css/_mixins.scss' as mixins;
@use '@/assets/css/_variables.scss' as variables;

.bar {
  height: 10px;
  border-radius: 10px;
  background-color: rgba(242, 243, 243, 0.6);
  width: 100%;
  overflow: hidden;

  &__line {
    height: 100%;
    background-color: variables.$shamrock;
    border-radius: 10px;
    @include mixins.transition(width);
  }
}
</style>
