<script setup lang="ts">

import { ref, onMounted } from 'vue'

import InventoryItem  from '@/components/InventoryItem.vue'
import ModalWindow from '@/components/ModalWindow.vue'

const deleteItem = (payload: { id: any; count: any }) => {
  const { id, count } = payload
  const itemIndex = items.value.findIndex(item => item.id === id)
  if (itemIndex !== -1) {
    if (count <= 0) {
      items.value[itemIndex].filled = false
      items.value[itemIndex].count = 0
      showModal.value = false
    } else {
      items.value[itemIndex].count = count
    }
    localStorage.setItem('items', JSON.stringify(items.value))
  }
}

const showModal = ref(false)
const selectedItem = ref()
const openModal = (item: itemData) => {
  if (item.filled) {
    selectedItem.value = item
    showModal.value = true
  }
}
interface itemData {
  id: number
  filled: boolean
  count: number
  src: string
}

const items = ref<itemData[]>([
  {
    id: 1,
    filled: true,
    count: 4,
    src: require('@/assets/images/card1.svg'),
  },
  {
    id: 2,
    filled: true,
    count: 5,
    src: require('@/assets/images/card2.svg'),
  },
  {
    id: 3,
    filled: true,
    count: 7,
    src: require('@/assets/images/card3.svg'),
  },
  ...Array.from({ length: 22 }, (_, index) => ({
    id: index + 4,
    filled: false,
    count: 0,
    src: '',
  })),
])

const startDrag = (event: DragEvent, item: { id: number; filled: boolean }) => {
  if (event.dataTransfer && item.filled) {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('itemID', item.id.toString())
    console.log(item)
  }
}

const onDrop = (event: DragEvent, index: number) => {
  if (event.dataTransfer) {
    const itemID = event.dataTransfer.getData('itemID')
    const itemIndex = items.value.findIndex(item => item.id.toString() == itemID)
    if (itemIndex !== -1) {
      const item = items.value.findIndex(item => item.id == index)
      if (item !== -1) {
        const temp = items.value[itemIndex]
        items.value[itemIndex] = items.value[item]
        items.value[item] = temp
        localStorage.setItem('items', JSON.stringify(items.value))
      }
    }
  }
}
const initLocalStorage = () => {
  const storedItems = localStorage.getItem('items')
  if (storedItems) {
    items.value = JSON.parse(storedItems)
  }
}

onMounted(() => {
  initLocalStorage()
})
</script>

<template>
  <div class="inventory__grid">
    <div
      class="inventory__cell"
      v-for="item in items"
      :key="item.id"
      :draggable="item.filled"
      @dragstart="startDrag($event, item)"
      @drop="onDrop($event, item.id)"
      @dragenter.prevent
      @dragover.prevent
      @click="openModal(item)"
    >
      <InventoryItem :id="item.id" :count="item.count" :src="item.src" v-if="item.filled == true" />
    </div>
    <div class="modal" :class="{ hide: !showModal }">
      <ModalWindow
        :showModal="showModal"
        :selectedItem="selectedItem"
        @deleteItem="deleteItem"
        @closeModal="showModal = false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inventory__grid {
  position: relative;
  display: flex;
  width: 525px;
  height: 500px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  border-radius: 12px;
  border: 1px solid var(--primary-border, #4d4d4d);
  background: var(--seondary-bg, #262626);
  .modal {
    position: absolute;
    width: 250px;
    height: 500px;
    flex-shrink: 0;
    right: 0;
    border-left: 1px solid var(--Primary-Border, #4d4d4d);
    background: rgba(38, 38, 38, 0.5);
    backdrop-filter: blur(8px);
    border-radius: 0 12px 12px 0;
    transition:
      right 0.5s,
      opacity 0.5s;
    z-index: 0;
  }
  .hide {
    right: -240px;
    opacity: 0;
  }
  .inventory__cell {
    width: calc(20%);
    height: 100px;
    border: 1px solid var(--primary-border, #4d4d4d);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  .inventory__cell:first-child {
    border-top-left-radius: 12px;
  }
  .inventory__cell:nth-child(5) {
    border-top-right-radius: 12px;
  }
  .inventory__cell:nth-child(21) {
    border-bottom-left-radius: 12px;
  }
  .inventory__cell:nth-child(25) {
    border-bottom-right-radius: 12px;
  }
}
</style>
