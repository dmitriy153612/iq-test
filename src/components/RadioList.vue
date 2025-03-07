<template>
  <div
    class="radio-list"
    :class="{
      'radio-list--rectangle': appearance === 'rectangle',
      'radio-list--square': appearance === 'square',
      'radio-list--square radio-list--long-square': appearance === 'square' && dataList.length > 4,
      'radio-list--color': appearance === 'color',
    }"
  >
    <ul class="radio-list__list">
      <li v-for="(item, index) in dataList" :key="index" class="radio-list__item">
        <slot :id="item.id" :label="item.name" :color-code="'code' in item ? item.code : null" />
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  dataList: { type: Array, required: true },
  appearance: { type: String, default: 'rectangle' },
})
</script>

<style lang="scss" scoped>
.radio-list {
  &--rectangle & {
    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }
  }

  &--square & {
    &__list {
      display: flex;
      flex-wrap: wrap;
      column-gap: 28px;
    }
  }

  &--long-square & {
    &__list {
      gap: 8px;
    }
  }

  &--color & {
    &__list {
      display: grid;
      grid-template-columns: repeat(3, minmax(74px, 148px));
      gap: 20px;
      padding-inline: 26px;
    }
  }

  &__list {
    justify-content: center;
  }
}
</style>
