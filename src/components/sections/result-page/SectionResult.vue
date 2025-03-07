<template>
  <section class="section">
    <div class="section__inner">
      <h2 class="section__title">{{ title }}</h2>
      <dl class="section__dl">
        <div class="section__dl-inner">
          <dt class="section__dt">Имя:</dt>
          <dd class="section__dd">{{ name }}</dd>
        </div>

        <div class="section__dl-inner">
          <dt class="section__dt">Пол:</dt>
          <dd class="section__dd">{{ gender }}</dd>
        </div>

        <div class="section__dl-inner">
          <dt class="section__dt">Цвет кожи:</dt>
          <dd class="section__dd">{{ skinColor }}</dd>
        </div>

        <div class="section__dl-inner">
          <dt class="section__dt">Год рождения:</dt>
          <dd class="section__dd">{{ birthYear }}</dd>
        </div>

        <div class="section__dl-inner">
          <dt class="section__dt">Вес:</dt>
          <dd class="section__dd">{{ mass }}</dd>
        </div>

        <div class="section__dl-inner">
          <dt class="section__dt">Рост:</dt>
          <dd class="section__dd">{{ height }}</dd>
        </div>

        <div class="section__dl-inner">
          <dt class="section__dt">Цвет глаз:</dt>
          <dd class="section__dd">{{ eyeColor }}</dd>
        </div>

        <div class="section__dl-inner">
          <dt class="section__dt">Цвет волос:</dt>
          <dd class="section__dd">{{ hairColor }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  skinColor: { type: String, required: true },
  birthYear: { type: String, required: true },
  mass: { type: String, required: true },
  height: { type: String, required: true },
  eyeColor: { type: String, required: true },
  hairColor: { type: String, required: true },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/_variables.scss' as variables;

.section {
  width: 100%;
  justify-items: center;

  &__inner {
    width: 100%;
    max-width: 568px;
    padding-inline: 24px;
  }

  &__title {
    margin-block: 0 24px;
    text-align: center;
    font-family: variables.$Roboto;
    font-weight: 400;
    color: variables.$white;
  }

  &__dl {
    display: grid;
    row-gap: 12px;
    margin-block: 0;
    width: 100%;
    font-family: variables.$Yeseva-One;
    line-height: 0.7;
  }

  &__dl-inner {
    display: flex;
  }

  &__dt {
    flex-grow: 1;
    display: flex;
    margin: 0;
    color: variables.$supernova;
    font-weight: 400;
    font-size: 16px;

    &::after {
      content: '';
      flex-grow: 1;
      margin-inline: 4px;
      border-bottom: 1px dashed variables.$white;
    }
  }

  &__dd {
    margin: 0;
    color: variables.$shamrock;
  }
}
</style>
