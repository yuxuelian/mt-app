<template>
  <div class="search-root">
    <el-row type="flex" justify="space-around" class="search-container">
      <el-col :span="5">
        <img
        class="logo"
        src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团"
        >
      </el-col>
      <el-col :span="12" class="search">
        <div class="input-container">
          <el-input
          v-model="searchKey"
          placeholder="搜索商家或地点"
          class="input"
          @focus="searchInputFocus"
          @blur="searchInputBlur"
          ></el-input>
          <el-button type="primary" icon="el-icon-search" class="btn"></el-button>
          <div class="search-panel" v-if="showFocusPanel">
            <div>热门搜索</div>
            <div>大熊猫繁育研究基地</div>
            <div>大熊猫繁育研究基地</div>
            <div>大熊猫繁育研究基地</div>
          </div>
          <div class="search-panel" v-if="showSearchTipsPanel">
            <div>aaa</div>
            <div>测试1</div>
            <div>测试2</div>
            <div>测试3</div>
          </div>
        </div>
        <div class="tags">
          <nuxt-link class="tag" to="/hot-1">大熊猫繁育研究基地</nuxt-link>
          <nuxt-link class="tag" to="/hot-2">国色天乡二期水上乐园</nuxt-link>
          <nuxt-link class="tag" to="/hot-3">国色天乡一期童话世界</nuxt-link>
          <nuxt-link class="tag" to="/hot-4">成都欢乐谷</nuxt-link>
        </div>
        <div class="menu">
          <nuxt-link class="menu-item color1" to="/takeout">美团外卖</nuxt-link>
          <nuxt-link class="menu-item color2" to="/movie">猫眼电影</nuxt-link>
          <nuxt-link class="menu-item color2" to="/hotel">美团酒店</nuxt-link>
          <nuxt-link class="menu-item color1" to="/apartment">民宿／公寓</nuxt-link>
          <nuxt-link class="menu-item color3" to="/business-in">商家入驻</nuxt-link>
          <nuxt-link class="menu-item color2" to="/mt-pub-benefit">美团公益</nuxt-link>
        </div>
      </el-col>
      <el-col :span="7">
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'search',
  components: {},
  props: {},
  data() {
    return {
      searchKey: '',
      isSearchFocus: false,
    }
  },
  watch: {},
  computed: {
    showFocusPanel() {
      return this.isSearchFocus && !this.searchKey
    },
    showSearchTipsPanel() {
      return this.isSearchFocus && this.searchKey
    }
  },
  methods: {
    searchInputFocus() {
      this.isSearchFocus = true
    },
    searchInputBlur() {
      this.isSearchFocus = false
    }
  },
  mounted() {
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.input >>> .el-input__inner
  padding 0 10px
  border-right none
  border-top-right-radius 0
  border-bottom-right-radius 0
  font-size 16px

  &:hover
    border 1px solid #00C48D
    border-right none

  &:focus
    border 1px solid #00C48D
    border-right none

.search-root
  width 100%
  height 160px

  .search-container
    width 1190px
    margin 0 auto
    height 100%

    .logo
      margin-top 30px
      width 126px
      height 46px

    .search
      position relative

      .input-container
        margin-top 30px
        width 550px
        display flex
        flex-direction row
        position relative

        .input
          width 0
          flex 1
          border-top-right-radius 0
          border-bottom-right-radius 0
          box-sizing border-box

        .btn
          width 88px
          background-color #00C48D
          border none
          border-top-left-radius 0
          border-bottom-left-radius 0

        .search-panel
          box-sizing border-box
          position absolute
          left 0
          width 100%
          top 40px
          background-color white
          border-radius 4px
          padding 10px
          z-index 10
          color #666
          box-shadow 0 3px 5px 0 rgba(0, 0, 0, .1)

      .menu
        position absolute
        width 100%
        height 40px
        font-size 16px
        font-weight bold
        left 0
        bottom 6px
        display flex
        flex-direction row
        justify-content space-between
        align-items center

        .menu-item
          color #333

          &.color1:hover
            color #FBC700

          &.color2:hover
            color #EE1E24

          &.color3:hover
            color #00C48D

      .tags
        margin-top 6px
        margin-left 10px
        font-size 12px
        color #999

        .tag
          margin-right 10px

          &:last-child
            margin-right 0
</style>

