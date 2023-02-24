<script setup>
import { ref, watch } from 'vue'

let props = defineProps({
  msg: String,
  checked: true
})

const count = ref(props.msg.length)
const newMsg = ref("")

watch(() => props.msg, (newMsg) => {
  count.value = newMsg.length;
})


</script>

<template>
  <h1>{{ props.msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
