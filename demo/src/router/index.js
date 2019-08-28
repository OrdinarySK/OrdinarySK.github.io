import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cesiumcontainer',
      name: 'CesiumContainer',
      component: () => import('@/components/cesium/CesiumContainer')
    },
    {
      path: '/header',
      name: 'HeaderCenter',
      component: () => import('@/components/common/HeaderCenter')
    }
  ]
})
