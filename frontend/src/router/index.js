

import Vue from 'vue'
import VueRouter from 'vue-router'
import DsControll from '../views/kok-library'
import DsAboutProject from '../views/ds-aboutProject'
import DsContent from '@/components/library/content'
import DsProjects from '@/components/library/projects'
import DsGallery from '@/components/library/gallery'
import DsObjects from '@/components/library/objects'


Vue.use(VueRouter)

const routes = [
  {
    path: '/controll',
    component: DsControll,
    children: [
      {
        name: 'DsContent',
        path: '',
        component: DsContent
      },
      {
        name: 'DsProjects',
        path: '/controll/projects',
        component: DsProjects
      },
      {
        name: 'DsGallery',
        path: '/controll/gallery',
        component: DsGallery
      },
      {
        name: 'DsObjects',
        path: '/controll/objects',
        component: DsObjects
      },
    ]
  },
  {
    path: '/',
    name: 'aboutProject',
    component: DsAboutProject
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

export default router




