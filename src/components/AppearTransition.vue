<template>
  <transition name="appear" :mode="mode">
    <slot />
  </transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  duration: { type: String, default: '0.2s' },
  mode: { type: String, default: '' },
})

const duration = computed(() => props.duration)
</script>

<style lang="scss">
.appear-enter-active,
.appear-leave-active {
  transition: opacity v-bind(duration) ease;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}
</style>
