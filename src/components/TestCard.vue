<template>
  <div class="test-card" :class="cardClass">
    <form class="test-card__form" @submit.prevent="onFormSubmit">
      <div class="test-card__form-inner">
        <p class="test-card__question">{{ question }}</p>
        <div v-if="picture" class="test-card__picture">
          <div class="test-card__picture-inner">
            <img :src="picture.url" alt="изображение теста" class="test-card__picture-img" />
          </div>
        </div>
        <radio-list
          v-slot="{ id, label, colorCode }"
          :data-list="testAnswers"
          :appearance="appearance.button"
        >
          <radio-input
            v-model="checkedAnswerId"
            :value="id"
            :label="label"
            :color-code="colorCode"
            :appearance="appearance.button"
            :short-rectangle="appearance.button === 'rectangle' && testAnswers.length > 5"
          />
        </radio-list>
      </div>
      <app-button class="test-card__button" :disabled="!checkedAnswerId" type="submit">
        ДАЛЕЕ
      </app-button>
    </form>
  </div>
</template>

<script setup>
import RadioList from '@/components/RadioList.vue'
import RadioInput from '@/components/UI/RadioInput.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { computed, ref } from 'vue'

const props = defineProps({
  testAnswers: { type: Array, required: true },
  question: { type: String, required: true },
  picture: { type: Object || null, default: null },
  appearance: { type: Object, default: null },
  testId: { type: String, required: true },
  page: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})

const emit = defineEmits(['submit'])

const checkedAnswerId = ref('')

const cardClass = computed(() => {
  if (props.appearance.button === 'square' && !props.appearance.underlined) {
    return 'test-card--high-picture'
  } else if (props.appearance.button === 'rectangle' && props.picture) {
    return 'test-card--low-picture'
  } else if (props.appearance.button === 'square' && props.appearance.underlined) {
    return 'test-card--square-picture'
  }
  return ''
})

async function onFormSubmit() {
  if (!checkedAnswerId.value) {
    return
  }
  const requestData = {
    page: props.page,
    answerId: checkedAnswerId.value,
    testId: props.testId,
  }

  emit('submit', requestData)
  checkedAnswerId.value = ''
}
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.test-card {
  display: grid;
  padding-bottom: 24px;

  &--high-picture & {
    &__picture {
      padding: 0 68px 24px;

      &-inner {
        max-width: 368px;
        aspect-ratio: 184 / 234;
      }
    }
  }

  &--low-picture & {
    &__question {
      padding-bottom: 18px;
      font-size: 16px;
    }

    &__picture {
      padding: 0 74px 18px;

      &-inner {
        max-width: 348px;
        aspect-ratio: 172 / 114;
      }
    }
  }

  &--square-picture & {
    &__question {
      padding-bottom: 18px;
    }

    &__picture {
      padding: 0 46px 24px;
      margin-bottom: 24px;
      border-bottom: 4px solid rgba(242, 243, 243, 0.4);

      &-inner {
        max-width: 456px;
        aspect-ratio: 228 / 206;
      }
    }
  }

  &__form {
    display: grid;
    grid-template-rows: 1fr auto;
  }

  &__form-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 16px;
  }

  &__question {
    $fontSize: 18px;
    margin: 0;
    padding: 16px 16px 38px;
    font-family: variables.$PT-Serif;
    font-size: $fontSize;
    letter-spacing: calc($fontSize * 5 / 100);
    text-align: center;
    color: variables.$white;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__picture {
    display: flex;
    justify-content: center;

    &-inner {
      width: 100%;
    }

    &-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__line {
    margin-bottom: 24px;
  }

  &__button {
    justify-self: center;
    align-self: flex-end;
    flex-grow: 1;
  }
}
</style>
