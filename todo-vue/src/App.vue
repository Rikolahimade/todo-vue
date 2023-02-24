<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
const msg = ref("Todo List");

const data = {
  title: 'Belajar',
  deskripsi: 'ada kegiatan belajar pada hari ini',
  waktu: '08.00'
};
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :msg='msg' />
  <table border="1">
    <tr>
      <th>No</th>
      <th>Title</th>
      <th>Deskripsi</th>
      <th>Waktu</th>
      <th>Action</th>
    </tr>
    <tr>
      <td>1</td>
      <td>{{ data.title }}</td>
      <td>{{ data.deskripsi }}</td>
      <td>{{ data.waktu }}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  </table>
  <br>
  <form>
    <input type="text" autofocus placeholder="Judul" size="20"/>
    <br />
    <input type="text" autofocus placeholder="Deskripsi" size="20" />
    <br />
    <input type="datetime" autofocus placeholder="Waktu" size="20" />
    <br />
    <button type="button">Add</button>
  </form>
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
  text-align: center;
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
