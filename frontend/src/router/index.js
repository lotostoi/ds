

import Vue from 'vue'
import VueRouter from 'vue-router'
import DsControll from '../views/kok-library'
import DsAboutProject from '../views/ds-aboutProject'
import DsContent from '@/components/library/content'
import DsProjects from '@/views/projects/projects'
import DsProject from '@/views/projects/project'
import DsProjectObjects from '@/views/projects/project-objects'
import DsProjectObjectsObject from '@/views/projects/project-objects-object'
import DsGallery from '@/components/library/gallery'
import DsObjects from '@/components/library/objects'
import DsPlug from '@/components/library/plug'
import DsDashboard from '@/components/library/dashboard'

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
        component: DsProjects,

      },
      {
        name: 'DsProjects',
        path: '/controll/projects/:title',
        component: DsProject,
        props: true,  
      },
      {    
        path: '/controll/projects/:title/objects',
        component: DsProjectObjects,
        props: true,  
      },
      {    
        path: '/controll/projects/:title/objects/:title',
        component:  DsProjectObjectsObject,
        props: true,  
      },
      {
        name: 'DsGallery',
        path: '/controll/gallery',
        component: DsGallery
      },
      {
        name: 'DsDashboard',
        path: '/controll/dashboard',
        component: DsDashboard
      },
      {
        name: 'DsObjects',
        path: '/controll/objects',
        component: DsObjects
      },
      {
        name: 'DsPlug',
        path: '/controll/plug',
        component: DsPlug
      },
      {
        path: '*',
        redirect: { name: 'DsPlug' },
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




