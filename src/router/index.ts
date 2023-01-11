import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'admin',
      redirect: '/dashboard',
      component: () => import("@/views/Admin/AdminBaseView.vue"),
      meta: {
        title: "管理",
        parentMenu: true,
      },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import("@/views/Admin/dashboard/dashbaord.vue"),
          meta: {
            isMenu: true,
            title: "面板",
            icon: "PieChartOutlined"
          }
        }
      ]
    }
  ]
})

export default router
