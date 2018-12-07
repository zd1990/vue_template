<template>
  <el-container>
    <el-header :heigth="bodySizeObjStat.headerHeight">
      <MyHeader></MyHeader>
    </el-header>
    <el-main :style="{height:bodySizeObjStat.bodyHeight+'px'}">
      <router-view :key="key"></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import MyHeader from "@/components/MyHeader.vue";
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";

@Component({
  components: {
    MyHeader
  }
})
export default class Common extends Vue {
  @State private bodySizeObjStat: object;
  @Mutation private changeTotalHeight: (num:number) => void;

  get key() {
    return this.$route.fullPath;
  }

  private mounted() {
    window.onresize = () => {
      const nowHeight = document.documentElement.clientHeight;
      this.changeTotalHeight(nowHeight);
    };
  }
}
</script>

<style lang="scss">
.el-header {
  padding-left: 0em;
  padding-right: 0em;
}

.el-main {
  padding: 0em;
}
</style>