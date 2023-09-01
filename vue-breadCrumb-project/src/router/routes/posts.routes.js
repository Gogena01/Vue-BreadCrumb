const posts = [
    {
        name:'allPosts-Page',
        path:'/posts',
        meta: {
            title:'All Posts page'
        },
        component:() => import('@/pages/posts/AllPosts.vue'),
        children: [
            {
                meta: {
                    title:'Single post'
                },
                name:'single-post',
                path:':id',
                component: () => import('@/pages/posts/SinglePost.vue'),
                props:true
            }
        ]
    },
]

export default posts