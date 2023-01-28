import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "@/views/DashBoard";
import GridSystem from "@/views/GridSystem";
import GridListPage from "@/views/GridListPage";
import BreakPoints from "@/views/BreakPoints";
import TypographyPage from "@/views/TypographyPage"
import TablesPage from "@/views/TablesPage"
import FormsPage from "@/views/FormsPage"
import ButtonsPage from "@/views/ButtonsPage"
import IconsPage from "@/views/IconsPage"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem
  },
  {
    path: '/grid-list-page',
    name: 'GridListPage',
    component: GridListPage
  },
  {
    path: '/break-points',
    name: 'BreakPoints',
    component: BreakPoints
  },
  {
    path: '/typography',
    name: 'TypographyPage',
    component: TypographyPage
  },
  {
    path: '/tables',
    name: 'TablesPage',
    component: TablesPage
  },
  {
    path: '/forms',
    name: 'FormsPage',
    component: FormsPage
  },
  {
    path: '/buttons',
    name: 'ButtonsPage',
    component: ButtonsPage
  },
  {
    path: '/icons',
    name: 'IconsPage',
    component: IconsPage
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
