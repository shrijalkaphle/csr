const c1 = () => import(/* webpackChunkName: "page--src--templates--charity-page-template-vue" */ "/Users/mac/Projects/findcharitables.org/src/templates/CharityPageTemplate.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--privacy-policy-vue" */ "/Users/mac/Projects/findcharitables.org/src/pages/PrivacyPolicy.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--charitables-vue" */ "/Users/mac/Projects/findcharitables.org/src/pages/Charitables.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/mac/Projects/findcharitables.org/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/mac/Projects/findcharitables.org/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/mac/Projects/findcharitables.org/src/pages/Index.vue")

export default [
  {
    path: "/pranavananda-ashram/",
    component: c1
  },
  {
    path: "/privacy-policy/",
    component: c2
  },
  {
    path: "/disabled-rehabilitation-center/",
    component: c1
  },
  {
    path: "/divine-service-home/",
    component: c1
  },
  {
    path: "/charitables/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
