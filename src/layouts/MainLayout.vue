<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <div class="layout__container">
    <div class="layout__content">
      <SideBar />
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout__container {
  padding: 32px;
  width: 100%;
  height: 100dvh;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .layout__content {
    display: flex;
    gap: 24px;
  }
}
</style>
