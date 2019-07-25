<template>
  <div class="quality-container">
    <ul class="quality-title" :style="`background-color:${titleBgColor};`">
      <li class="title nvg-item">{{qualityTitle[0]}}</li>
      <li
      class="nvg-item"
      v-for="(item,index) in qualityTitle.slice(1)"
      :key="index"
      :class="navIndex-1===index?'active':''"
      @mouseenter="itemMouseenter(index+1)"
      @mouseleave="itemMouseleave"
      >
        {{item}}
      </li>
    </ul>

    <div class="grid-container">
      <div v-for="item in qualityDetailData" :key="item.id" class="grid-item">
        <img class="img" :src="item.imageUrl" alt="商家图片">
        <div class="title-name nowrap">{{item.name}}</div>
        <div class="des nowrap">{{item.des}}</div>
        <div>
          <span class="price-symbol">¥</span><span class="current-price">{{item.price}}</span><span
        class="old-price">门市价¥{{item.oldPrice}}</span>
          <span class="sold">{{item.address}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'quality-container',
  components: {},
  props: {
    qualityTitle: {
      type: Array,
      required: true
    },
    titleBgColor: {
      type: String,
      default() {
        return '#BFA77A'
      }
    }
  },
  data() {
    return {
      navIndex: 1,
      qualityDetailData: [],
    }
  },
  watch: {},
  computed: {},
  methods: {
    itemMouseenter(index) {
      this._updateTimer = setTimeout(() => {
        this.navIndex = index
      }, 150)
    },
    itemMouseleave() {
      clearTimeout(this._updateTimer)
    }
  },
  created() {
    for (let i = 0; i < 6; i++) {
      this.qualityDetailData.push({
        id: i,
        imageUrl: 'http://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@368w_208h_1e_1c',
        name: 'XCAKE艾蛋糕（天府广场店）',
        des: '蛋糕2选1,约8英寸，圆形',
        price: 169,
        oldPrice: 269,
        address: '天府广场/盐市口'
      })
    }
  },
  mounted() {
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.nowrap
  white-space nowrap
  overflow hidden
  text-overflow ellipsis

.quality-container
  width 100%
  margin-top 40px
  box-sizing border-box
  border 1px solid #E5E5E5
  border-top-left-radius 8px
  border-top-right-radius 8px

  .quality-title
    width 100%
    height 44px
    background-color #BFA77A
    color white
    border-top-left-radius 8px
    border-top-right-radius 8px
    display flex
    flex-direction row
    align-items center
    justify-content left

    .nvg-item
      font-size 14px
      padding 0 5px
      cursor pointer
      height 44px
      line-height 44px
      position relative

      &.title
        font-size 20px
        font-weight bold
        margin-left 13px
        margin-right 10px

      &.active:after
        position absolute
        border-left 5px solid transparent
        border-right 5px solid transparent
        border-bottom 7px solid #fff
        content " "
        display block
        width 2px
        height 0
        top 37px
        left 0
        right 0
        margin auto

  .grid-container
    padding 10px
    display flex
    flex-direction row
    flex-wrap wrap

    .grid-item
      width 33.333%
      height 314px
      display flex
      flex-direction column
      padding 10px
      box-sizing border-box
      cursor pointer

      .img
        width 100%
        border-radius 4px

      .title-name
        margin-top 8px
        font-size 16px
        color #222
        height 22px
        line-height 22px
        margin-bottom 8px
        font-weight 500

      .des
        font-size 12px
        color #999
        line-height 18px
        height 18px
        margin-bottom 7px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis

      .price-symbol
        font-size 14px
        color #BE9E4D
        font-weight 500

      .current-price
        font-size 22px
        color #BE9E4D
        margin-right 6px
        letter-spacing -.8px
        cursor pointer

      .old-price
        font-size 12px
        color #999
        text-decoration line-through

      .sold
        font-size 12px
        color #999
        float right
        margin-top 10px
</style>

