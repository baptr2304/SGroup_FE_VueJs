<script setup>
import { useRouter } from 'vue-router'
import { useCounterStore } from '../store';
const counterStore = useCounterStore()
const user = ref(null)
const changeNumber = (isPlus) =>{
    isPlus ? counterStore.increment() : counterStore.decrement()
    counterStore.$reset()
}
</script>
<template>
    <div class="flex">
        <div class="border-solid px-3" @click="counterStore.decrement()">-</div>
        <span>{{ counterStore.count }}</span>
        <div class="border-solid px-3" @click="counterStore.increment()">+</div>
    </div>
</template>