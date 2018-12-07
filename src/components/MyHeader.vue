<template>
  <el-menu
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item index="home">主页</el-menu-item>
    <el-menu-item index="project">项目管理</el-menu-item>
    <el-menu-item index="config">节点管理</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "MyHeader"
})
export default class MyHeader extends Vue {}
</script>

<style scoped>
</style>