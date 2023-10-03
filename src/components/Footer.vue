<script setup lang="ts"></script>
<template>
  <div class="footer__container">
    <div class="footer__skeleton"></div>
    <div class="footer__close">
			<img src="@/assets/images/close.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer__container {
  width: 785px;
  height: 72px;
  border-radius: 12px;
  border: 1px solid var(--primary-border, #4d4d4d);
  background: var(--seondary-bg, #262626);
  display: flex;
  .footer__skeleton {
    width: 699px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--skeleton, linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%));
    margin: 18px;
  }
  .footer__close {
    margin: 8px 18px 40px 8px;
  }
}
</style>
