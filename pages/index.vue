<template>
  <div class="page-root">
    <div class="page-content">
      <div class="banner-container">
        <dl class="menu-container">
          <dt class="menu-title">全部分类</dt>
          <dd
          class="menu-item"
          v-for="(item,index) in menuData" :key="item.id"
          @mouseenter="itemMouseEnter(index)"
          @mouseleave="itemMouseLeave"
          >
            {{item.name}}
          </dd>
          <transition name="fade">
            <dd
            v-if="isShowDetailPanel"
            class="menu-detail-panel"
            @mouseenter="panelMouseEnter"
            @mouseleave="panelMouseLeave"
            >

            </dd>
          </transition>
        </dl>
        <div class="left-empty"></div>
        <div class="banner-right">
          <div class="column-1">
            <div class="slide">
              <el-carousel height="240px">
                <el-carousel-item v-for="item in bannerUrls" :key="item">
                  <img class="banner-img" :src="item" alt="轮播">
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="pic-1"></div>
            <div class="user-default">
              <img class="avatar"
                   src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="默认头像">
              <p>Hi! 你好</p>
              <el-button round class="round-btn">注册</el-button>
              <el-button round class="round-btn">登录</el-button>
            </div>
          </div>
          <div class="column-2">
            <div class="pic-2"></div>
            <div class="pic-3"></div>
            <div class="pic-4"></div>
            <div class="pic-5">
              <img
              class="down-load-qr-code"
              src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
              alt="App下载二维码">
              <p class="app-name">美团APP手机版</p>
              <p class="sl">
                <span style="color: red;margin-right: 5px">1元起</span>
                <span class="gary">吃喝玩乐</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'index',
  components: {},
  props: {},
  data() {
    return {
      currentIndex: -1,
      menuData: [],
      isShowDetailPanel: false,
      bannerUrls: [
        'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
        'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    itemMouseEnter(index) {
      // 清除定时器
      clearTimeout(this._clearTimer)
      this.isShowDetailPanel = true
      // 延迟一下再进行更新
      this._updateTimer = setTimeout(() => {
        // 更新当前位置
        this.currentIndex = index
        console.log(`currentIndex = ${this.currentIndex}`)
      }, 300)
    },
    itemMouseLeave() {
      clearTimeout(this._updateTimer)
      this._clearTimer = setTimeout(() => {
        this.isShowDetailPanel = false
      }, 150)
    },
    panelMouseEnter() {
      // 清除定时器
      clearTimeout(this._clearTimer)
    },
    panelMouseLeave() {
      this._timer = setTimeout(() => {
        this.isShowDetailPanel = false
      }, 150)
    }
  },
  beforeCreate() {

  },
  created(){
    for (let i = 0; i < 16; i++) {
      this.menuData.push({
        id: i,
        name: '美食'
      })
    }
  },
  mounted() {
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.fade-enter-active, .fade-leave-active
  transition opacity .5s

.fade-enter, .fade-leave-to
  opacity 0

.el-carousel__item .banner-img
  width 100%
  height 100%

.page-root
  width 100%

  .page-content
    margin 0 auto
    width 1190px

    .banner-container
      position relative
      height 420px
      margin-top 10px
      display flex
      flex-direction row
      width 100%

      .menu-container
        z-index 20
        position absolute
        height 486px
        left 0
        top -66px
        width 230px
        background -webkit-linear-gradient(-90deg, rgba(2, 181, 157, .85) 2%, rgba(22, 146, 183, .85) 100%)
        color white

        .menu-title
          margin-left 15px
          margin-top 20px
          font-size 16px
          margin-bottom 30px

        .menu-item
          width 100%
          font-size 14px
          height 26px
          line-height 26px

          &:hover
            background-color rgba(255, 255, 255, .4)

        .menu-detail-panel
          position absolute
          left 230px
          top 71px
          width 400px
          height 415px
          background-color white

    .left-empty
      width 230px

    .banner-right
      width 0
      margin-left 10px
      margin-top 5px
      height 415px
      flex 1

      .column-1
        height 240px
        width 100%
        display flex
        flex-direction row

        .slide
          width 550px
          height 100%

        .pic-1
          width 150px
          height 100%
          margin-left 10px
          background-size 150px
          background-image url('http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg')

        .user-default
          margin-left 10px
          width 0
          flex 1
          height 100%
          display flex
          flex-direction column
          align-items center
          box-sizing border-box
          border 1px solid #E5E5E5
          justify-content space-evenly

          .avatar
            width 47px
            height 47px
            border-radius 50%
            border 4px solid #E5E5E5

          .round-btn
            width 120px
            height 40px
            display flex
            align-items center
            justify-content center
            font-size 14px
            margin-left 0

      .column-2
        margin-top 10px
        height 165px
        width 100%
        display flex
        flex-direction row

        .pic-2
          height 100%
          width 270px
          background-size 270px
          background-image url('http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png')

        .pic-3
          margin-left 10px
          height 100%
          width 270px
          background-size 270px
          background-image url('http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg')

        .pic-4
          margin-left 10px
          height 100%
          width 150px
          background-size 150px
          background-image url('http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg')

        .pic-5
          margin-left 10px
          width 0
          flex 1
          height 100%
          box-sizing border-box
          border 1px solid #E5E5E5
          display flex
          flex-direction column
          align-items center
          justify-content center

          .down-load-qr-code
            width 95px
            height 95px

          .app-name
            font-size 16px
            font-weight 500
            color #222

          .sl
            font-size 12px
            font-weight 500
            color #3f3f3f
</style>

