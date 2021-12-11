<template>
    <el-menu
    :default-active="activeMenu"
    :unique-opened="true"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
    >
      <sidebar-item v-for="item in routes" :key="item.path" :route="item"></sidebar-item>
    </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'
const router = useRouter()

const routes = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  console.log('fRoutes', fRoutes)
  return generateMenus(fRoutes)
})

// 默认激活项
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
console.log('routes', routes.value)
</script>
<style lang="scss" scoped>

</style>
