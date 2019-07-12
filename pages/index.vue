<template>
  <div class="page-root">
    <div class="page-content">
      <banner-container/>
      <quality-container :qualityTitle="qualityTitle" :titleBgColor="'#BFA77A'"/>
      <quality-container :qualityTitle="qualityTitle" :titleBgColor="'#FE5F47'"/>
      <quality-container :qualityTitle="qualityTitle" :titleBgColor="'#FB3F5E'"/>
      <quality-container :qualityTitle="qualityTitle" :titleBgColor="'#F3BF48'"/>
      <quality-container :qualityTitle="qualityTitle" :titleBgColor="'#10C9CD'"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BannerContainer from "@/components/home/banner-container"
import QualityContainer from "@/components/home/quality-container"
export default {
  name: 'index',
  components: {
    QualityContainer,
    BannerContainer
  },
  props: {},
  data() {
    return {
      qualityTitle: [
        '有格调',
        '全部',
        '约会聚餐',
        '丽人spa',
        '电影演出',
        '品质出游',
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {},
  beforeCreate() {
  },
  created() {
  },
  mounted() {
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.page-root
  width 100%

  .page-content
    margin 0 auto
    width 1190px
</style>

