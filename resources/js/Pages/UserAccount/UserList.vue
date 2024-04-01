<template>
    <div>
        <h1>User List</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Is Admin</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ formatDate(user.created_at) }}</td>
                    <td>{{ formatDate(user.updated_at) }}</td>
                    <td>{{ user.is_admin ? 'Yes' : 'No' }}</td>
                </tr>
            </tbody>
        </table>
        <div>
    <BaseButton>
      Click Me
    </BaseButton>
   &nbsp;
    <BaseButton>
        <span class="fa fa-caret-down"></span>
      Submit
    </BaseButton>
  </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
    components: {
        BaseButton
    },
    props: {
        users: Array // Assume users are passed as props
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toISOString().split('T')[0]; // Convert to Y-m-d format
        }
    }
}
</script>

<style scoped>
/* Add custom styling as needed */
</style>
