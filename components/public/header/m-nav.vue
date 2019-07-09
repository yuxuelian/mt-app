<template>
  <div class="nav-container">
    <div class="nav-content">
      <ul class="nav-left-container">
        <li class="city-text">
          <i class="el-icon-location  city-text"></i>
          <span>成都</span>
        </li>
        <li class="city-text ">
          <nuxt-link to="/switch-city" class="switch-btn">切换城市</nuxt-link>
        </li>
        <li class="quick-city">[
          <nuxt-link to="/quick-1">新津县</nuxt-link>
        </li>
        <li class="quick-city">
          <nuxt-link class="quick-city" to="/quick-2">崇州</nuxt-link>
        </li>
        <li class="quick-city">
          <nuxt-link class="quick-city" to="/quick-3">彭州</nuxt-link>
          ]
        </li>
        <li>
          <nuxt-link to="/login" class="login">立即登录</nuxt-link>
        </li>
        <li class="register">
          <nuxt-link to="/register">注册</nuxt-link>
        </li>
      </ul>
      <ul class="nav-right-container">
        <li class="menu-item sub-menu-hover">
          <nuxt-link to="/my-mt">我的美团</nuxt-link>
          <ul class="sub-menu">
            <li class="sub-menu-item">
              <nuxt-link to="/my-order">我的订单</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/my-like">我的收藏</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/coupon">抵用券</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/account-setting">账户设置</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <nuxt-link to="/phone-app">手机APP</nuxt-link>
        </li>
        <li class="menu-item sub-menu-hover">
          <nuxt-link to="/business-center" class="nth-a">商家中心</nuxt-link>
          <ul class="sub-menu sub-menu-center">
            <li class="sub-menu-item">
              <nuxt-link to="/my-order">登录商家中心</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/my-like">美团智能收银</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/coupon">我想合作</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/account-setting">手机免费开店</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/account-setting">餐饮代理商招募</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/account-setting">商家申请开票</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/account-setting">免费合作美团排队</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="menu-item sub-menu-hover">
          <nuxt-link to="/mt-rule" class="nth-a">美团规则</nuxt-link>
          <ul class="sub-menu">
            <li class="sub-menu-item">
              <nuxt-link to="/my-order">规划中心</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/my-like">规则目录</nuxt-link>
            </li>
            <li class="sub-menu-item">
              <nuxt-link to="/coupon">规则评议院</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="menu-item sub-menu-hover">
          <nuxt-link to="/web-nvg" class="nth-a">网站导航</nuxt-link>
          <div class="sub-web-nvg">

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'm-nav',
  components: {},
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
.nav-container
  font-size 12px
  color #999
  background-color #F8F8F8
  text-decoration none

  .nav-content
    height 40px
    width 1190px
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center

    .nav-left-container
      width 340px

      .city-text
        color #666

      .switch-btn
        margin-left 6px
        margin-right 10px
        border 2px solid #E0E0E0
        border-radius 3px

        &:hover
          color #00C48D

      .quick-city
        margin-left 2px
        margin-right 2px

      .login
        margin-left 20px
        margin-right 10px
        color #00C48D

    .nav-right-container
      height 100%
      width 390px

      .menu-item
        width 0
        flex 1
        height 100%
        display flex
        align-items center
        justify-content center
        position relative

        &.sub-menu-hover:hover
          .sub-menu
            display flex

        &.sub-menu-hover:hover
          .sub-web-nvg
            display block

        .sub-menu
          position absolute
          top 40px
          width 100%
          right 0
          display none
          flex-direction column
          z-index 10
          box-shadow 0 3px 5px 0 rgba(0, 0, 0, .1)
          background-color white

          .sub-menu-item
            height 40px
            display flex
            justify-content center
            align-items center

        .sub-menu-center
          width 150%

        .sub-web-nvg
          display none
          position absolute
          top 40px
          right 0
          width 1190px
          height 300px
          box-shadow 0 3px 5px 0 rgba(0, 0, 0, .1)
          background-color white
          z-index 50

        &:hover
          background-color white
          box-shadow 0 3px 5px 0 rgba(0, 0, 0, .1)

          .nth-a
            color #00C48D

        &:nth-child(2)
          background-color transparent
          box-shadow none
</style>

