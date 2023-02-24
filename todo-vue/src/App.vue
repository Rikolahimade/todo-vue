<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
const msg = ref("Belajar Vue JS");
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :msg='msg' />
  <input type="text" v-model="msg">
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

table {
  border-collapse: collapse;
  width: 100%;
}

table th,
table td {
  border: 3px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #f2f2f2;
  color: #555;
}

.active {
  background-color: aqua;
  border: o;
  padding: 10px;

}

label {
  padding-top: 50px;
  margin-top: 20px;
}
</style>
