<template>
  <el-container class="el-calendar">
    <el-header height="200px" class="el-header">
      <m-header/>
    </el-header>

    <el-main class="el-main">
      <nuxt/>
    </el-main>

    <el-footer class="el-footer">

    </el-footer>
  </el-container>
</template>

<script type="text/ecmascript-6">
import MHeader from "@/components/home/header/"
export default {
  name: 'default',
  components: {MHeader},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.el-calendar
  padding 0

  .el-header
    padding 0

  .el-main
    padding 0
    overflow visible

  .el-footer
    padding 0
</style>

