import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'about'
    },,
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/Home')
    },
    {
      path: '/bsList',
      name: 'BsList',
      component: () => import('@/pages/Details/List')
    },
    {
      path: '/business1',
      name: 'Business1',
      component: () => import('@/pages/Details/Business1.vue')
    },
    {
      path: '/business2',
      name: 'Business2',
      component: () => import('@/pages/Details/Business2.vue')
    },
    {
      path: '/business3',
      name: 'Business3',
      component: () => import('@/pages/Details/Business3.vue')
    },
    {
      path: '/business4',
      name: 'Business4',
      component: () => import('@/pages/Details/Business4.vue')
    },
    {
      path: '/business5',
      name: 'Business5',
      component: () => import('@/pages/Details/Business5.vue')
    },
    {
      path: '/business6',
      name: 'Business6',
      component: () => import('@/pages/Details/Business6.vue')
    },
    {
      path: '/business7',
      name: 'Business7',
      component: () => import('@/pages/Details/Business7.vue')
    },
    {
      path: '/caseList',
      name: 'CaseList',
      component: () => import('@/pages/case/List')
    },
    {
      path: '/caseone',
      name: 'caseone',
      component: () => import('@/pages/case/CaseOne.vue')
    },
    {
      path: '/casetwo',
      name: 'casetwo',
      component: () => import('@/pages/case/CaseTwo.vue')
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: () => import('@/pages/AboutUs.vue')
    },
    {
      path: '/newsList',
      name: 'NewsList',
      component: () => import('@/pages/news/List'),
    },
    {
      path: '/hotNews',
      name: 'HotNews',
      component: () => import('@/pages/news/HotNews.vue')
    },
    {
      path: '/news1',
      name: 'News1',
      component: () => import('@/pages/news/News1.vue')
    },
    {
      path: '/news2',
      name: 'News2',
      component: () => import('@/pages/news/News2.vue')
    },
    {
      path: '/news3',
      name: 'News3',
      component: () => import('@/pages/news/News3.vue')
    },
    {
      path: '/news5',
      name: 'News5',
      component: () => import('@/pages/news/News5.vue')
    },
    {
      path: '/news6',
      name: 'News6',
      component: () => import('@/pages/news/News6.vue')
    },
    
  ]
})

// router.beforeEach((to, from, next) => {
//   if (sessionStorage.getItem('u')) {
//     next()
//   } else {
//     if (to.path === '/login') { //这就是跳出循环的关键
//       next()
//    } else {
//     next({path: '/login'})
//    }
//   }
// })
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
  next()
  });
export default router
