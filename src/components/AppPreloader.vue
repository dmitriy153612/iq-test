<template>
  <div class="preloader">
    <div class="preloader__inner">
      <component :is="titleTag" class="preloader__title">
        {{ title }}
      </component>
      <div>
        <app-spinner />
      </div>

      <p ref="descrRef" class="preloader__descr" />
      <div class="preloader__underline" />
    </div>
  </div>
</template>

<script setup>
import AppSpinner from '@/components/AppSpinner.vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
  titleTag: { type: String, default: 'h2' },
  title: { type: String, required: true },
  text: { type: String, required: true },
})

const descrRef = ref(null)

function formatDescr(descrRef, text) {
  const textArr = text.split(' ')
  const wordElements = []

  textArr.forEach((word) => {
    if (!word.length) return

    const span = document.createElement('span')
    span.className = 'word'
    span.textContent = word
    wordElements.push(span)
  })

  wordElements.at(-1).classList.add('word--last')

  const dotElement = () => {
    const span = document.createElement('span')
    span.className = 'dot'
    return span
  }

  descrRef.append(...wordElements, dotElement())
}

onMounted(() => {
  formatDescr(descrRef.value, props.text)
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.preloader {
  $inner-inline-padding: 22px;

  &__inner {
    display: grid;
    justify-items: center;
    padding-top: 48px;
    padding-inline: $inner-inline-padding;
    font-family: variables.$PT-Serif;
    line-height: 1.35;
    color: variables.$white;
  }

  &__title {
    $fontSize: 24px;
    margin-block: 0 32px;
    padding-inline: 42px - $inner-inline-padding;
    text-align: center;
    font-weight: 400;
    font-size: $fontSize;
    letter-spacing: calc($fontSize * 5 / 100);
    color: variables.$white;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__descr {
    justify-self: stretch;
    display: flex;
    flex-wrap: wrap;
    margin-block: 0 14px;
    padding-top: 28px;
    $fontSize: 14px;
    font-size: $fontSize;
    letter-spacing: calc($fontSize * 5 / 100);

    :deep(.word) {
      margin-right: 5px;
    }

    :deep(.word--last) {
      margin-right: 0;
    }

    :deep(.dot) {
      flex-grow: 1;
      border-bottom: 2px dotted;
      margin-bottom: 4px;
    }
  }

  &__underline {
    justify-self: stretch;
    border-bottom: 2px dotted;
  }
}
</style>
