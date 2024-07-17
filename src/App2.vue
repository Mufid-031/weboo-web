<script>
export default {
  data() {
    return {
      name: 'MUfid',
      status: 'active',
      tasks: ['Learn Vue.js', 'Build a Vue.js App', 'Learn PHP'],
      link: 'https://google.com'
    }
  },
  methods: {
    changeStatus() {
      if (this.status === 'active') {
        this.status = 'pending'
        setTimeout(() => {
          this.status = 'inactive'
        }, 1000)
      } else {
        this.status = 'pending'
        setTimeout(() => {
          this.status = 'active'
        }, 1000)
      }
    },
  }
}
</script>

<template>
  <main>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is not active</p>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>

    <!-- <a :href="link">Go to Google</a> -->

    <button @click="changeStatus()">Click to Change Status</button>
  </main>
</template>
