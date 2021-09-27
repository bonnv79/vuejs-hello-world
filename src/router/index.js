import { createRouter, createWebHistory } from 'vue-router';
import Instances from '@/components/Instances';

export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "Home",
    component: () => import('@/pages/Home'),
  },
  {
    path: "/about",
    name: "About",
    component: () => import('@/pages/About'),
  },
  {
    path: "/example",
    name: "Example",
    component: () => import('@/pages/Example'),
    to: '/example/introduction',
    children: [
      {
        path: "introduction",
        name: "Introduction",
        component: () => import('@/components/Introduction'),
      },
      {
        path: "instances",
        name: "Instances",
        component: Instances,
      },
      {
        path: "template",
        name: "Template",
        component: () => import('@/components/Template'),
      },
      {
        path: "components",
        name: "Components",
        component: () => import('@/components/Components'),
      },
      {
        path: "computed-properties",
        name: "ComputedProperties",
        component: () => import('@/components/ComputedProperties'),
      },
      {
        path: "watch-property",
        name: "WatchProperty",
        component: () => import('@/components/WatchProperty'),
      },
      {
        path: "binding",
        name: "Binding",
        component: () => import('@/components/Binding'),
      },
      {
        path: "events",
        name: "Events",
        component: () => import('@/components/Events'),
      },
      {
        path: "rendering",
        name: "Rendering",
        component: () => import('@/components/Rendering'),
      },
      {
        path: "transition-animation",
        name: "TransitionAnimation",
        component: () => import('@/components/TransitionAnimation'),
      },
      {
        path: "directives",
        name: "Directives",
        component: () => import('@/components/Directives'),
      },
      {
        path: "mixins",
        name: "Mixins",
        component: () => import('@/components/Mixins'),
      },
      {
        path: "render-function",
        name: "RenderFunction",
        component: () => import('@/components/RenderFunction'),
      },
      {
        path: "reactive-interface",
        name: "ReactiveInterface",
        component: () => import('@/components/ReactiveInterface'),
      },
      {
        path: "lifecycle-hooks",
        name: "LifecycleHooks",
        component: () => import('@/components/LifecycleHooks'),
      },
      {
        path: "examples",
        name: "Examples",
        component: () => import('@/components/Examples'),
      },
      {
        path: "demo",
        name: "Demo",
        component: () => import('@/components/Demo')
      }
    ]
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
