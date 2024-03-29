//引入
import {createRouter,createWebHistory} from 'vue-router'
//引入要配置的组件
import AboutVue from '@/views/About.vue';
import HomeVue from '@/views/Home.vue';
import NewsVue from '@/views/News.vue';
import DetailVue from '@/views/Detail.vue';
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
            component: NewsVue,
            children: [
                {
                    name: 'detailPage',
                    path: 'detail',///:id/:title/:content?',//这里是配合params写法的改动,加问号同样是表示可以有也可以没有
                    component: DetailVue,
                    // props:true//路由传参配置的第一种写法，只针对params参数
                    props(route) {//函数式写法,这个办法也适用于query
                        return route.query
                    },
                }
            ]
        },
        {
            name: 'aboutPage',
            path: '/about',
            component: AboutVue
        },
        {
            path:'/',
            redirect:'/home'//重定向
        }
    ]
})

export default router;