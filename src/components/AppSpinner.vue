<template>
  <div class="spinner">
    <svg
      ref="svgRef"
      class="spinner__svg"
      viewBox="0 0 65 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.992 14.9627C34.127 14.9627 37.4791 11.6132 37.4791 7.48135C37.4791 3.34951 34.127 0 29.992 0C25.857 0 22.5049 3.34951 22.5049 7.48135C22.5049 11.6132 25.857 14.9627 29.992 14.9627Z"
        fill="currentColor"
      />
      <path
        d="M44.657 18.2974C48.4177 18.2974 51.4664 15.2511 51.4664 11.4933C51.4664 7.73551 48.4177 4.68921 44.657 4.68921C40.8963 4.68921 37.8477 7.73551 37.8477 11.4933C37.8477 15.2511 40.8963 18.2974 44.657 18.2974Z"
        fill="currentColor"
      />
      <path
        d="M55.2326 28.5432C58.6168 28.5432 61.3603 25.8019 61.3603 22.4203C61.3603 19.0387 58.6168 16.2974 55.2326 16.2974C51.8484 16.2974 49.105 19.0387 49.105 22.4203C49.105 25.8019 51.8484 28.5432 55.2326 28.5432Z"
        fill="currentColor"
      />
      <path
        d="M64.1271 38.084C64.609 35.1174 62.593 32.3222 59.6241 31.8407C56.6553 31.3591 53.8579 33.3736 53.376 36.3402C52.8941 39.3067 54.9101 42.1019 57.879 42.5834C60.8478 43.065 63.6452 41.0505 64.1271 38.084Z"
        fill="currentColor"
      />
      <path
        d="M54.2373 56.4805C56.8685 56.4805 59.0015 54.3491 59.0015 51.72C59.0015 49.0908 56.8685 46.9595 54.2373 46.9595C51.6061 46.9595 49.4731 49.0908 49.4731 51.72C49.4731 54.3491 51.6061 56.4805 54.2373 56.4805Z"
        fill="currentColor"
      />
      <path
        d="M42.9487 65.9935C45.2056 65.9935 47.0351 64.1654 47.0351 61.9103C47.0351 59.6552 45.2056 57.827 42.9487 57.827C40.6919 57.827 38.8623 59.6552 38.8623 61.9103C38.8623 64.1654 40.6919 65.9935 42.9487 65.9935Z"
        fill="currentColor"
      />
      <path
        d="M28.0419 68.3223C29.9222 68.3223 31.4466 66.7992 31.4466 64.9202C31.4466 63.0413 29.9222 61.5182 28.0419 61.5182C26.1615 61.5182 24.6372 63.0413 24.6372 64.9202C24.6372 66.7992 26.1615 68.3223 28.0419 68.3223Z"
        fill="currentColor"
      />
      <path
        d="M13.6785 62.643C15.1824 62.643 16.4015 61.4248 16.4015 59.9221C16.4015 58.4195 15.1824 57.2013 13.6785 57.2013C12.1747 57.2013 10.9556 58.4195 10.9556 59.9221C10.9556 61.4248 12.1747 62.643 13.6785 62.643Z"
        fill="currentColor"
      />
      <path
        d="M3.86886 50.3457C4.99619 50.3457 5.91008 49.4325 5.91008 48.306C5.91008 47.1795 4.99619 46.2664 3.86886 46.2664C2.74152 46.2664 1.82764 47.1795 1.82764 48.306C1.82764 49.4325 2.74152 50.3457 3.86886 50.3457Z"
        fill="currentColor"
      />
      <path
        d="M1.36346 34.678C2.11647 34.678 2.72692 34.068 2.72692 33.3156C2.72692 32.5632 2.11647 31.9532 1.36346 31.9532C0.610439 31.9532 0 32.5632 0 33.3156C0 34.068 0.610439 34.678 1.36346 34.678Z"
        fill="currentColor"
      />
      <path
        d="M6.85323 19.8222C6.71807 19.8238 6.5855 19.7852 6.47235 19.7113C6.3592 19.6374 6.27059 19.5315 6.21777 19.4072C6.16496 19.2829 6.15032 19.1457 6.17572 19.013C6.20112 18.8804 6.26542 18.7582 6.36044 18.6622C6.45546 18.5661 6.57691 18.5005 6.70936 18.4735C6.84182 18.4466 6.97929 18.4596 7.10433 18.5109C7.22936 18.5622 7.3363 18.6495 7.41157 18.7617C7.48683 18.8739 7.52703 19.0059 7.52704 19.141C7.52705 19.3203 7.45631 19.4924 7.33017 19.6199C7.20403 19.7474 7.03266 19.8201 6.85323 19.8222Z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  duration: { type: Number, default: 1 },
})

const svgRef = ref(null)
const duration = computed(() => `${props.duration}s`)

function createAnimation(duration, svgRef) {
  const circles = svgRef.value?.querySelectorAll('path')
  if (!circles) return

  const itemAmount = circles.length
  const itemDuration = duration / itemAmount

  circles.forEach((item, index) => {
    item.style.animationDelay = `${itemDuration * index}s`
  })
}

onMounted(() => {
  if (svgRef.value) {
    createAnimation(props.duration, svgRef)
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.spinner {
  display: flex;
  width: 64px;
  height: 68px;

  &__svg path {
    animation: colorChange v-bind(duration) infinite;
    color: variables.$shamrock;
  }
}

@keyframes colorChange {
  0% {
    color: variables.$shamrock;
  }

  50% {
    color: transparent;
  }

  100% {
    color: variables.$shamrock;
  }
}
</style>
