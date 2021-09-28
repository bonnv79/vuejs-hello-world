import { createRouter, createWebHistory } from 'vue-router';

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
    path: "/:catchAll(.*)",
    component: () => import('@/pages/NotFound'),
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
        component: () => import('@/demo/Introduction'),
      },
      {
        path: "instances",
        name: "Instances",
        component: () => import('@/demo/Instances'),
      },
      {
        path: "template",
        name: "Template",
        component: () => import('@/demo/Template'),
      },
      {
        path: "components",
        name: "Components",
        component: () => import('@/demo/Components'),
      },
      {
        path: "computed-properties",
        name: "ComputedProperties",
        component: () => import('@/demo/ComputedProperties'),
      },
      {
        path: "watch-property",
        name: "WatchProperty",
        component: () => import('@/demo/WatchProperty'),
      },
      {
        path: "binding",
        name: "Binding",
        component: () => import('@/demo/Binding'),
      },
      {
        path: "events",
        name: "Events",
        component: () => import('@/demo/Events'),
      },
      {
        path: "rendering",
        name: "Rendering",
        component: () => import('@/demo/Rendering'),
      },
      {
        path: "transition-animation",
        name: "TransitionAnimation",
        component: () => import('@/demo/TransitionAnimation'),
      },
      {
        path: "directives",
        name: "Directives",
        component: () => import('@/demo/Directives'),
      },
      {
        path: "mixins",
        name: "Mixins",
        component: () => import('@/demo/Mixins'),
      },
      {
        path: "render-function",
        name: "RenderFunction",
        component: () => import('@/demo/RenderFunction'),
      },
      {
        path: "reactive-interface",
        name: "ReactiveInterface",
        component: () => import('@/demo/ReactiveInterface'),
      },
      {
        path: "lifecycle-hooks",
        name: "LifecycleHooks",
        component: () => import('@/demo/LifecycleHooks'),
      },
      {
        path: "examples",
        name: "Examples",
        component: () => import('@/demo/Examples'),
      },
      {
        path: "demo",
        name: "Demo",
        component: () => import('@/demo/Demo')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
