<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
const showDelete = ref(false)
const emit = defineEmits(['closeModal', 'deleteItem'])
const props = defineProps(['selectedItem'])
const closeModal = () => {
  emit('closeModal')
}
const delCount: any = ref(null)

const confirmDelete = () => {
  if (delCount.value < -1) {
    emit('deleteItem', { id: props.selectedItem.id, count: 0 })
  } else {
    emit('deleteItem', { id: props.selectedItem.id, count: props.selectedItem.count - delCount.value })
  }
  showDelete.value = false
}
</script>
<template>
  <div class="modal__container">
    <div class="modal__close" @click="closeModal">
			<img src="@/assets/images/close.svg" alt="">
    </div>
    <div class="modal__image">
      <img v-if="selectedItem" :src="selectedItem.src" alt="" />
    </div>
    <div class="modal__skeleton" v-if="selectedItem">
      <h2>Информация</h2>
      <p>Количество: {{ selectedItem.count }}</p>
    </div>
    <div class="modal__delete">
      <div class="delete" v-if="showDelete">
        <div class="delete__input">
          <input type="text" placeholder="Введите количество" v-model="delCount" />
        </div>
        <div class="delete__btns">
          <button class="cancel" @click="showDelete = false">Отмена</button>
          <button class="submit" @click="confirmDelete">Подтвердить</button>
        </div>
      </div>
      <button v-if="!showDelete" @click="showDelete = true">Удалить предмет</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .modal__close {
    align-self: flex-end;
    margin: 8px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .modal__image img {
    width: 130px;
    height: 130px;
    flex-shrink: 0;
  }
  .modal__skeleton {
    width: calc(100% - 25px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 15px 15px;
    padding: 15px 0;
    border-top: 1px solid #4d4d4d;
    border-bottom: 1px solid #4d4d4d;
    color: #fff;
  }
  .modal__delete {
    .delete {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      .delete__input input {
        width: 200px;
        height: 40px;
        flex-shrink: 0;
        padding: 12px;
        border-radius: 4px;
        outline: none;
        color: #fff;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        opacity: 0.4;
        border: 1px solid var(--Primary-Border, #4d4d4d);
        background: var(--Seondary-BG, #262626);
      }
      .delete__btns {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .cancel {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          display: flex;
          width: 88px;
          padding: 8px 28px;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border-radius: 8px;
          background: var(--Primary-White, #fff);
          color: var(--Primary-Black, #2d2d2d);
        }
        .submit {
          display: flex;
          width: 112px;
          padding: 8px 28px;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border-radius: 8px;
          background: var(--Primary-Red, #fa7272);
          color: var(--Primary-White, #fff);
          font-family: 'SF Pro Display', sans-serif;

          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
    button {
      width: 220px;
      height: 39px;
      flex-shrink: 0;
      border-radius: 8px;
      background: var(--Primary-Red, #fa7272);
      border: 0;
      font-family: 'SF Pro Display', sans-serif;
      color: var(--Primary-White, #fff);
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 5px var(--Primary-Red, #fa7272);
      }
      &:active {
        scale: 0.9;
      }
    }
  }
}
</style>
