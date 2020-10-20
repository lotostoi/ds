

import Vue from 'vue'
import VueRouter from 'vue-router'
import DsControll from '../views/controll-menu'
import DsAboutProject from '../views/ds-aboutProject'
import DsContent from '@/views/content/content'
import DsProjects from '@/views/projects/projects'
import DsProject from '@/views/projects/project'
import DsProjectObjects from '@/views/projects/project-objects'
import DsProjectObjectsObjectSingle from '@/views/projects/project-objects-object-single'
import DsProjectObjectsObject from '@/views/projects/project-objects-object'
import DsGallery from '@/views/gallery/gallery'
import DsPlug from '@/views/plug'
import DsDashboard from '@/views/dashboard/dashboard'

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
        name: 'DsDashboard',
        path: 'dashboard',
        component: DsDashboard
      },
      {
        name: 'DsProjects',
        path: 'projects',
        component: DsProjects,
      },
      {
        path: 'projects/:title',
        component: DsProject,
        props: true,

      },
      {
        path: 'projects/:title/objects',
        component: DsProjectObjects,
        props: true,
      },
      {
        path: 'projects/:title/objects/single/:id',
        component: DsProjectObjectsObjectSingle,
        props: true,
      },
      {
        path: 'projects/:title/objects/slider/:id',
        component: DsProjectObjectsObjectSingle
      },


      /* 
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
              name: 'DsPlug',
              path: '/controll/plug',
              component: DsPlug
            },
            {
              path: '*',
              redirect: { name: 'DsPlug' },
            }, */
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




