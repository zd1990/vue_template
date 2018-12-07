<template>
  <el-container class="project-container">
    <el-aside width="200px" class="project-side">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Project"
})
export default class Project extends Vue {
  private projectList: object[] = [
    {
      proname: "telegraf",
      env: {
        pro: { template1: "123", template2: "222" },
        uat: { template3: "123", template4: "222" },
      },
    },
    {
      proname: "nginx",
      env: {
        pro: { template1: "123", template2: "222" },
        uat: { template3: "123", template4: "222" },
      },
    },
  ];
}
</script>

<style type="scss">
.project-container {
  height: 100%;
}

.project-side {
  border-right: 1px solid #e3e3e3;
  background-color: #fafafa;
}
</style>