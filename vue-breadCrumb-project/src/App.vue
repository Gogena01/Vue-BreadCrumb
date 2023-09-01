<template>
  <h1>Test</h1>
  <header>
    <NavigationComp />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
  </footer>
</template>

<script>
import NavigationComp from '@/pages/navigation/NavigationComp.vue';
import service from '@/services/service.js';
import { computed } from 'vue';


export default {
  components: {
    NavigationComp
  },

  data() {
    return {
      posts: []
    }
  },

  async created() {
    this.posts = await service.getPosts()
  },

  provide() {
    return {
      allPosts: computed(() => this.posts)
    }
  }
}
</script>

<style scoped lang="scss">
@import "./styles/variables.scss";

h1 {
  @include h1-styler
}

</style>