import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import userInfo from '@/views/userInfo'
import Form from '@/views/Form'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: 'userInfo',
                    name: 'userInfo',
                    component: userInfo
                },
                {
                    path: 'form',
                    name: 'Form',
                    component: Form
                }
            ]
        },

    ]
})