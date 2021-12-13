<template>
<el-breadcrumb class="breadcrumb">
  <transition-group name="breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in breadcrumData" :key="item.path">
      <!-- 不可点击 -->
      <span class="no-redirect" v-if="index === breadcrumData.length - 1">{{item.meta.title}}</span>
      <!-- 可点击 -->
      <span class="redirect" v-else @click="onLinkClick(item)">{{item.meta.title}}</span>
    </el-breadcrumb-item>
  </transition-group>
</el-breadcrumb>
</template>
<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const breadcrumData = ref([])
const getBreadcrumData = () => {
  // 当前路由的标准化路由记录
  breadcrumData.value = route.matched.filter(item => item.meta && item.meta.title)
}
// 监听路由变化
const route = useRoute()
watch(route, () => {
  getBreadcrumData()
}, {
  immediate: true
})

// 跳转的点击事件
const router = useRouter()
const onLinkClick = (item) => {
  router.push(item.path)
}

// 将业要主题替换， 所以hover的颜色我们设置为主色
const store = useStore()
const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>
<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left:8px;
  .redirect {
    color: #666;
    font-weight: 600;
    cursor: pointer;
  }

  .redirect:hover {
    color: v-bind(linkHoverColor);
    font-weight: 600;
  }
  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}

</style>
