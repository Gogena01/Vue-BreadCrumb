<template>
  <ul class="breadcrumb">
    <li v-for="(breadcrumb, index) in breadcrumbItems" :key="index">
      <router-link :to="breadcrumb.to">
        {{ breadcrumb.label }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    breadcrumbItems() {
      const matchedRoutes = this.$route.matched;
      const breadcrumbItems = [];

      matchedRoutes.forEach((route) => {
        if (route.meta && route.meta.title) {
          breadcrumbItems.push({
            label: route.meta.title,
            to: route.path,
          });
        }
      });

      return breadcrumbItems;
    },
  },
};
</script>


<style scoped>
ul.breadcrumb {
  padding: 0;
  margin: 0 0 1rem 0;
  list-style: none;
  display: flex;
  padding: 0.5rem;
  background-color: #eee;
}

ul.breadcrumb li {
  display: block;
  padding: 1rem 0;
  font-size: 18px;
}

ul.breadcrumb li+li:before {
  padding: 0 8px;
  color: black;
  content: "/\00a0";
}

ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}

ul.breadcrumb li a.active {
  color: black;
}

ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
</style>
