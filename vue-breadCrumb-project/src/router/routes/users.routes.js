
const users = [
    {
        name:'Users Page',
        path:'/users',
        meta: {
            title:'Users Page'
        },
        component:() => import('@/components/pages/users/UsersPage.vue')
    },
    {
        name:'add-user',
        path:'/addUser',
        meta: {
            title:'Add user'
        },
        component:() => import('@/components/pages/users/AddUser.vue')
    }
]


export default users