<template>
  <div>{{ct}}</div>
  <button @click="ck">按钮</button>
</template>

<script setup>
import { ref } from 'vue'
const ct = ref(0)
const ck = () => {
  ct.value++
}
</script>

<style>
</style>
