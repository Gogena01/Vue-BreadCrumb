const wildCard = [
    {
        name:'wildcard',
        meta: {
            title:'Not found'
        },
        path: '/:notFound(.*)',
        component: () => import('@/components/pages/notFound/NotFound.vue')

    }
]


export default wildCard