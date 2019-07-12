<template>
  <div class="m-header">
    <m-nav/>
    <search/>
  </div>
</template>

<script type="text/ecmascript-6">
import MNav from "./m-nav"
import Search from "./search"
export default {
  name: 'index',
  components: {Search, MNav},
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
.m-header
  height 100%
  box-shadow 0 2px 27px 0 rgba(0, 0, 0, .1)
</style>

