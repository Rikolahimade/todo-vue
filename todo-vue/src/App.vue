<script setup>
//buat class todo

import { reactive, watch, ref } from 'vue';
import Todo from './model/todo';

const form = reactive(new Todo());
const data = ref([
  new Todo()
]);

watch(form, () => {
  console.log(form)
})

const deleteTodo = (index) => {
  const result = confirm('Are You Sure?');
  if (result) {
    data.value.splice(index, 1);
    alert('successfully')
  }
};

</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <table>
    <tbody v-if="data.length > 0">
      <tr>
        <th>No</th>
        <th>Title</th>
        <th>Deskripsi</th>
        <th>Waktu</th>
        <th>Action</th>
      </tr>
      <tr v-for="(todo, index) in data" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ todo.Title }}</td>
        <td>{{ todo.Description }}</td>
        <td>{{ todo.Waktu }}</td>
        <td>
          <button>Edit</button>
          <button @click="deleteTodo
            (index)">Delete</button>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <th>
      <td coldspan="5">Empty data</td>
      </th>
    </tbody>
  </table>

  <br>
  <form>
    <input type="text" autofocus placeholder="Judul" size="20" v-model="form.Title
    " />
    <br />
    <input type="text" autofocus placeholder="Deskripsi" size="20" v-model="form.Deskripsi
    " />
    <br />
    <input type="datetime" autofocus placeholder="Waktu" size="20" v-model="form.Deadline
    " />
    <br />
    <button>Add</button>
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
  border: 1px;
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
