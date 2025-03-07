<template>
  <div
    class="radio"
    :class="{
      'radio--rectangle': appearance === 'rectangle',
      'radio--short-rectangle': shortRectangle,
      'radio--square': appearance === 'square',
      'radio--color': appearance === 'color',
    }"
  >
    <input
      :id="uniqId"
      v-model="updatedCheckedId"
      :value="value"
      type="radio"
      class="radio__input"
    />
    <label :for="uniqId" class="radio__label">
      <div v-if="appearance === 'rectangle'" class="radio__fake-input" />
      <div v-if="appearance !== 'color'" class="radio__descr">
        {{ label }}
      </div>
      <div v-if="appearance === 'color'" class="radio__color" :aria-label="label" />
    </label>
  </div>
</template>

<script setup>
import { computed, useId } from 'vue'

const props = defineProps({
  modelValue: { type: String, required: true },
  label: { type: String, default: null },
  value: { type: String, required: true },
  colorCode: { type: String, default: '' },
  appearance: { type: String, default: 'rectangle' },
  shortRectangle: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue'])

const uniqId = useId()

const colorCode = computed(() => {
  if (props.appearance === 'color' && props?.colorCode) {
    return props.colorCode
  }
  return ''
})

const updatedCheckedId = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue),
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/_mixins.scss' as mixins;
@use '@/assets/css/_variables.scss' as variables;

.radio {
  display: flex;
  width: 100%;
  font-family: variables.$PT-Serif;

  &--rectangle & {
    &__label {
      $fontSize: 18px;
      display: flex;
      align-items: center;
      column-gap: 16px;
      padding-block: 15px;
      padding-inline: 34px 14px;
      padding-left: 34px;
      width: 100%;
      font-size: $fontSize;
      line-height: 1;
      color: variables.$white;
      letter-spacing: calc($fontSize * 5 / 100);
      background-color: rgba(242, 243, 243, 0.4);
      transition-property: background-color, color;
      transition-duration: 0.2s;
      transition-timing-function: ease;
    }

    &__fake-input {
      flex-shrink: 0;
      height: 20px;
      width: 20px;
      border: 1px solid variables.$white;
      border-radius: 50%;
    }

    &__input:focus + &__label &__fake-input,
    &__input:checked + &__label &__fake-input {
      border-color: variables.$mineShaft;
      background-color: variables.$ceruleanBlue;
    }
  }

  &--rectangle &__input:focus + &__label &__fake-input,
  &--rectangle &__input:checked + &__label &__fake-input {
    border-color: variables.$mineShaft;
    background-color: variables.$ceruleanBlue;
  }

  &--rectangle &__input:focus + &__label,
  &--rectangle &__input:checked + &__label {
    background-color: variables.$supernova;
    color: variables.$mineShaft;
  }

  &--short-rectangle & {
    &__label {
      padding-block: 10px;
    }
  }

  &--square & {
    &__descr {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 40px;
      padding-block: 3px;
      border: 6px solid transparent;
      font-size: 20px;
      line-height: 1.1;
      color: variables.$cinder;
      background-color: variables.$white;
      @include mixins.transition(border-color);
    }
  }

  &--square &__input + &__label &__descr {
    @include mixins.transition(border-color);
  }

  &--square &__input:focus + &__label &__descr,
  &--square &__input:checked + &__label &__descr {
    border-color: variables.$supernova;
  }

  &--color {
    width: 100%;
    height: 100%;
  }

  &--color & {
    &__label {
      height: 100%;
      width: 100%;
    }

    &__color {
      background-color: v-bind(colorCode);
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
    }
  }

  &--color &__input + &__label &__color {
    border: 6px solid transparent;
    @include mixins.transition(border-color);
  }

  &--color &__input:checked + &__label &__color,
  &--color &__input:focus + &__label &__color {
    border-color: variables.$supernova;
  }

  &__input {
    position: fixed;
    z-index: -100;
    transform: scale(0);
    background-color: transparent;
  }

  &__label {
    cursor: pointer;
  }

  &__fake-input {
    transition-property: border-color, background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }

  &__descr::first-letter {
    text-transform: uppercase;
  }
}
</style>
