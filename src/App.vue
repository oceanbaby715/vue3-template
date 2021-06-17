<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
    class="a"
  />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="less">
.a{
  color: red;
}
</style>
