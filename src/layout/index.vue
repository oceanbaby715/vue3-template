<template>
  <a-layout style="min-height: 100vh">
    <Sider></Sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="page-container">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Vue3 Template ©2021 Created by <a
          href="https://intolearn.com/"
          target="_blank"
        >前端_逗叔</a>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">

import { defineComponent, ref } from "vue";
import Sider from "./components/siderbar/index.vue"
export default defineComponent({
  components: {
    Sider
  }
});
</script>
<style lang="less" scoped>
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>