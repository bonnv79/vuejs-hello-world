import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    redirect: '/Introduction'
  },
  {
    path: "/Introduction",
    name: "Introduction",
    component: () => import('@/components/Introduction'),
  },
  {
    path: "/Instances",
    name: "Instances",
    component: () => import('@/components/Instances'),
  },
  {
    path: "/Template",
    name: "Template",
    component: () => import('@/components/Template'),
  },
  {
    path: "/Components",
    name: "Components",
    component: () => import('@/components/Components'),
  },
  {
    path: "/ComputedProperties",
    name: "ComputedProperties",
    component: () => import('@/components/ComputedProperties'),
  },
  {
    path: "/WatchProperty",
    name: "WatchProperty",
    component: () => import('@/components/WatchProperty'),
  },
  {
    path: "/Binding",
    name: "Binding",
    component: () => import('@/components/Binding'),
  },
  {
    path: "/Events",
    name: "Events",
    component: () => import('@/components/Events'),
  },
  {
    path: "/Rendering",
    name: "Rendering",
    component: () => import('@/components/Rendering'),
  },
  {
    path: "/TransitionAnimation",
    name: "TransitionAnimation",
    component: () => import('@/components/TransitionAnimation'),
  },
  {
    path: "/Directives",
    name: "Directives",
    component: () => import('@/components/Directives'),
  },
  {
    path: "/Mixins",
    name: "Mixins",
    component: () => import('@/components/Mixins'),
  },
  {
    path: "/RenderFunction",
    name: "RenderFunction",
    component: () => import('@/components/RenderFunction'),
  },
  {
    path: "/ReactiveInterface",
    name: "ReactiveInterface",
    component: () => import('@/components/ReactiveInterface'),
  },
  {
    path: "/LifecycleHooks",
    name: "LifecycleHooks",
    component: () => import('@/components/LifecycleHooks'),
  },
  {
    path: "/Examples",
    name: "Examples",
    component: () => import('@/components/Examples'),
  },
  {
    path: "/Demo",
    name: "Demo",
    component: () => import('@/components/Demo')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('@/components/NotFound'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
