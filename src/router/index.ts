//引入
import {createRouter,createWebHistory} from 'vue-router'
//引入要配置的组件
import AboutVue from '@/components/About.vue';
import HomeVue from '@/components/Home.vue';
import NewsVue from '@/components/News.vue';
//创建路由器
const router = createRouter({
    history: createWebHistory(),//路由器工作模式，忘了都
    routes: [
        {
            path: '/home',
            component: HomeVue
        },
        {
            path: '/news',
            component: NewsVue
        },
        {
            path: '/about',
            component: AboutVue
        },
    ]
})

export default router;