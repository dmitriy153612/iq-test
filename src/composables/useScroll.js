import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const remainingScroll = ref(0)
  let resizeObserver = null

  function updateRemainingScroll() {
    const documentHeight = document.documentElement.scrollHeight
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight

    remainingScroll.value = documentHeight - (scrollPosition + windowHeight)
  }

  onMounted(() => {
    updateRemainingScroll()

    window.addEventListener('scroll', updateRemainingScroll, { passive: true })
    window.addEventListener('resize', updateRemainingScroll, { passive: true })

    resizeObserver = new ResizeObserver(updateRemainingScroll)
    resizeObserver.observe(document.documentElement)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateRemainingScroll)
    window.removeEventListener('resize', updateRemainingScroll)

    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })

  return {
    remainingScroll,
  }
}
