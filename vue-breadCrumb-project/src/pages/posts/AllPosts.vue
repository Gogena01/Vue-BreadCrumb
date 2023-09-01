<template>
    <router-view></router-view>
    <div>
        <search-form></search-form>
    </div>
    <div v-if="postsGenerated">
        <post-preview v-for="post in filteredElements" :key="post.id">
            <template #title>
                <h2>{{ post.title }}</h2>
            </template>
            <template #controls>
                <router-link :to="{ name: 'single-post', params: { id: post.id } }">View Details</router-link>
            </template>
        </post-preview>
    </div>
    <loading-view v-else></loading-view>
</template>

<script>
import LoadingView from '@/components/UI/LoadingView.vue';
import PostPreview from '@/components/UI/PostPreview.vue';
import SearchForm from './SearchForm.vue';

export default {
    components: {
        PostPreview,
        SearchForm,
        LoadingView
    },

    data() {
        return {
            filterValue: ''
        }
    },

    inject: ['allPosts'],

    beforeRouteUpdate(to, from, next) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        next();
    },

    watch: {
        '$route.query': {
            immediate: true,
            handler(val) {
                this.filterValue = val.postName
            },
            deep: true
        }
    },

    computed: {
        postsGenerated() {
            return this.allPosts.length > 0;
        },

        filteredElements() {
            return this.filterValue !== undefined ? this.allPosts.filter(post => post.title.includes(this.filterValue)) : this.allPosts
        }
    }
}
</script>
