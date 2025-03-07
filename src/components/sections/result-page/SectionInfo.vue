<template>
  <section class="section">
    <div class="section__inner">
      <h2 class="section__title">
        {{ title }}
      </h2>
      <p class="section__text" v-html="text" />
      <h3 class="section__subtitle">
        {{ subtitle }}
      </h3>
      <p class="section__subtext">
        {{ subtext }}
      </p>
      <p v-if="currentSeconds" class="section__timer">
        <span class="section__timer-text">{{ timer.text }}</span>
        <span class="section__timer-inner">
          <span class="section__timer-time">{{ formattedTime }}</span>
          <span class="section__timer-text">минут</span>
        </span>
      </p>
      <button v-if="currentSeconds" class="section__button" @click="showResult">
        <span class="section__button-icon-wrapper">
          <icon-phone class="section__button-icon" />
        </span>
        <span class="section__button-text">{{ link.name }}</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import IconPhone from '@/components/icons/IconPhone.vue'
import { useTimer } from '@/composables/useTimer'
import { useTestStore } from '@/stores/test'
import { onMounted } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  subtitle: { type: String, required: true },
  subtext: { type: String, required: true },
  timer: { type: Object, required: true },
  link: { type: Object, required: true },
})
const testStore = useTestStore()
const { formattedTime, currentSeconds, start, stop } = useTimer(props.timer.time)

async function showResult() {
  await testStore.fetchGetResult()
  stop()
}

onMounted(start)
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.section {
  $container-inline-padding: 14px;
  display: grid;
  justify-content: center;

  &__inner {
    max-width: 576px;
    padding: 36px $container-inline-padding 36px;
    text-align: center;
  }

  &__title {
    $fontSize: 16px;
    margin-block: 0 12px;
    font-family: variables.$PT-Serif;
    font-size: $fontSize;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: calc($fontSize * 10 / 100);
    color: variables.$white;
  }

  &__text {
    margin-block: 0 22px;
    font-family: variables.$PT-Serif;
    font-size: 14px;
    line-height: 1.29;
    color: variables.$white;

    & :deep(span) {
      text-decoration: underline;
    }

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__subtitle {
    margin-block: 0 12px;
    $fontSize: 18px;
    font-family: variables.$PT-Serif;
    line-height: 1.22;
    text-transform: uppercase;
    letter-spacing: calc($fontSize * 10 / 100);
    color: variables.$shamrock;
  }

  &__subtext {
    $font-size: 8px;
    margin-block: 0 12px;
    margin-inline: 32px - $container-inline-padding;
    padding: 14px 12px 10px;
    border-radius: 6px;
    font-family: variables.$Roboto;
    font-size: $font-size;
    line-height: 1.75;
    text-transform: uppercase;
    letter-spacing: calc($font-size * 25 / 100);
    background-color: variables.$cloudBurst;
    color: variables.$white;
  }

  &__timer {
    display: grid;
    margin-block: 0 14px;
    font-family: variables.$PT-Serif;
    color: variables.$shamrock;

    &-inner {
      display: flex;
      flex-wrap: wrap;
      line-height: 1;
      justify-content: center;
      align-items: flex-end;
      column-gap: 12px;
      row-gap: 4px;
      padding-top: 4px;
    }

    &-text {
      $font-size: 12px;
      font-size: $font-size;
      letter-spacing: calc($font-size * 10 / 100);
    }

    &-time {
      $font-size: 20px;
      font-size: $font-size;
      letter-spacing: calc($font-size * 10 / 100);
    }
  }

  &__button {
    justify-self: center;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 18px;
    padding: 32px 14px 30px;
    max-width: max-content;
    border: none;
    border-radius: 6px;
    background-color: variables.$scarlet;
    text-decoration: none;
    color: variables.$white;

    &-icon-wrapper {
      width: 28px;
      height: 28px;
    }

    &-icon {
      width: 100%;
      height: 100%;
      color: variables.$white;
    }

    &-text {
      text-align: left;
      $font-size: 14px;
      font-family: variables.$Roboto;
      font-size: $font-size;
      line-height: 1.29;
      letter-spacing: calc($font-size * 5 / 100);

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>
