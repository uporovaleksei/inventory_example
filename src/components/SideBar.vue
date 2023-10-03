<script setup lang="ts"></script>
<template>
  <div class="sidebar__container">
    <div class="sidebar__image">
      <img src="@/assets/images/SideImg.png" alt="" />
    </div>
    <div class="sidebar__skeletons">
      <img src="@/assets/images/Skeletons.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar__container {
  display: flex;
  width: 236px;
  padding: 18px 14px 24px 14px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid #4d4d4d;
  background: var(--secondary-bg, #262626);
  .sidebar__image {
    width: 208px;
    height: 240px;
    position: relative;
    border-radius: 8px;
    background-position: 75% 75%;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      border-radius: 8px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('@/assets/images/Blur.svg') #ffffff1a;
    }
    img {
      width: 100%;
      height: 100%;
      filter: blur(16px);
      object-fit: cover;
      object-position: 75% 75%;
      border-radius: 8px;
      background: lightgray 50% / cover no-repeat;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(0);
    }
  }
  .sidebar__skeletons {
    width: 190px;
    height: 198px;
  }
}
</style>
