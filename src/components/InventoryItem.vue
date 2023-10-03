<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  id: Number,
  count: Number,
  src: String,
})
</script>
<template>
  <div class="item__container">
    <div class="item__ico">
      <img :src="src" alt="" />
    </div>
    <div class="item__count">
      {{ count }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item__container {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .item__count {
    position: absolute;
    right: -2px;
    bottom: 0;
    color: var(--white, #fff);
    opacity: 0.4;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 6px 0px 0px 0px;
    border: 2px solid var(--Primary-Border, #4d4d4d);
    background: transparent;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
}
</style>
