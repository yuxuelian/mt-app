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
          <a class="menu-item color1" href="https://waimai.meituan.com/" target="_blank">美团外卖</a>
          <a class="menu-item color2" href="https://maoyan.com/?utm_source=meituanweb" target="_blank">猫眼电影</a>
          <a class="menu-item color2" href="https://hotel.meituan.com/chengdu/" target="_blank">美团酒店</a>
          <a class="menu-item color1" href="https://phoenix.meituan.com/" target="_blank">民宿／公寓</a>
          <a class="menu-item color3" href="https://bizvisualmeishi.meituan.com/bizsettle/settle/merchantsSettle?utm_source=mtxz" target="_blank">商家入驻</a>
          <a class="menu-item color2" href="https://gongyi.meituan.com/" target="_blank">美团公益</a>
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
  border-top-right-radius 0
  border-bottom-right-radius 0
  font-size 16px
  border 1px solid #13D1BE
  border-right none

  &:hover
    border 1px solid #13D1BE
    border-right none

  &:focus
    border 1px solid #13D1BE
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
          background-color #13D1BE
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

