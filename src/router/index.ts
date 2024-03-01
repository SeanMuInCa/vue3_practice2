//引入
import {createRouter,createWebHistory} from 'vue-router'
//引入要配置的组件
import AboutVue from '@/views/About.vue';
import HomeVue from '@/views/Home.vue';
import NewsVue from '@/views/News.vue';
//创建路由器
const router = createRouter({
    history: createWebHistory(),//路由器工作模式，忘了都
    routes: [
        {
            name: 'homePage',
            path: '/home',
            component: HomeVue
        },
        {
            name: 'newsPage',
            path: '/news',
            component: NewsVue
        },
        {
            name: 'aboutPage',
            path: '/about',
            component: AboutVue
        },
    ]
})

export default router;