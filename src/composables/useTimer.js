import { computed, onUnmounted, ref } from 'vue'

export function useTimer(initialSeconds) {
  const currentSeconds = ref(initialSeconds)

  const intervalId = ref(null)

  const formattedTime = computed(() => {
    const addZero = (value) => {
      return value.toString().padStart(2, '0')
    }
    const seconds = currentSeconds.value % 60
    const minutes = Math.floor(currentSeconds.value / 60)
    return `${addZero(minutes)}:${addZero(seconds)}`
  })

  function start() {
    tick()
    intervalId.value = setInterval(() => tick(), 1000)
  }

  function pause() {
    clearInterval(intervalId.value)
  }

  function stop() {
    clearInterval(intervalId.value)
    currentSeconds.value = 0
  }

  function reset() {
    pause()
    currentSeconds.value = initialSeconds
  }

  function tick() {
    if (currentSeconds.value <= 1) {
      currentSeconds.value = 0
      pause()
      return
    }
    currentSeconds.value -= 1
  }

  onUnmounted(pause)

  return {
    currentSeconds,
    formattedTime,
    start,
    pause,
    reset,
    stop,
  }
}
