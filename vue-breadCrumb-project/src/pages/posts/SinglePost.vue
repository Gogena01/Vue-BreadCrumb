<template>
   <the-post v-if="myPost">
       <template #title> 
            {{ myPost.title }}
       </template>
       <template #body>
             {{ myPost.body }}
       </template>
   </the-post>
</template>

<script>
import ThePost from '@/components/UI/ThePost.vue';
export default {
    components: {
        ThePost
    },
    props: {
        id: {
            type: String,
            required: true,
            validator: function(val) {
                if (parseInt(val) < 0 || isNaN(val)) {
                    alert(new Error('This post does not exist!'));
                    return false;
                }
                return true;
            }
        }
    },
    inject: ['allPosts'],
    computed: {
        myPost() {
            return this.allPosts.find(post => post.id == this.id);
        },
    }
} 
</script>
