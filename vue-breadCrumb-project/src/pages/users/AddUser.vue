<template>
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
        <button type="submit">Submit</button>
    </form>
    <div v-if="username !== null">
         <h2>{{ username }}</h2>
    </div>
    <div v-else>
         <h2>No user shown</h2>
    </div>
</template>

<script>
export default {
    data() {
      return {
        username: null
      }
    },
    watch: {
        '$route.query': {
            immediate: true,
            handler(val) {
                this.username = val.username
            },
            deep: true
        }
    }
}
</script>