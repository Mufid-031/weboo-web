<script setup>
import { ref, onMounted } from 'vue'

const name = ref('Mufid')
const status = ref('active')
const tasks = ref(['Learn Vue.js', 'Build a Vue.js App', 'Learn PHP'])
// const link = ref('https://google.com')
const newTask = ref('')

const changeStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
    setTimeout(() => {
      status.value = 'inactive'
    }, 1000)
  } else {
    status.value = 'pending'
    setTimeout(() => {
      status.value = 'active'
    }, 1000)
  }
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map((task) => task.title)
  } catch (error) {
    console.log("Error fetching data:")
  }
})
</script>

<template>
  <main>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is not active</p>
    <ul>
      <li v-for="(task, index) in tasks" :key="task" ref="finishLi">
        <span>
          {{ task }}
        </span>
        <button @click="deleteTask(index)">X</button>
      </li>
    </ul>

    <form @submit.prevent="addTask()">
      <label for="task">Task</label>
      <input type="text" name="task" id="task" v-model="newTask" />
      <button type="submit">Add Task</button>
    </form>

    <!-- <a :href="link">Go to Google</a> -->

    <button @click="changeStatus()">Click to Change Status</button>
  </main>
</template>
