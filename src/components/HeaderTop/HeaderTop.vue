<template>
  <div>
    <header class="header">
      <slot name="left"></slot>
      <span class="header_title">
        <span class="header_title_text ellipsis">{{title}}</span>
      </span>
      <slot name="right"></slot>
    </header>
  </div>
</template>

<script>
// import x from ''
export default {
  data () {
    return {
    }
  },
  props: {
    title: String
  },
  methods: {}

}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.header
  background-color #02a774
  // 注意：这里设为固定定位的元素，脱离文档流。会引起引用这个子组件的父级高度塌陷
  position fixed
  z-index 100
  left 0
  top 0
  width 100%
  height 45px
  .header_search
    position absolute
    left 15px
    top 50%
    transform translateY(-50%)
    width 10%
    height 50%
    .icon-sousuo
      font-size 25px
      color #fff
  .header_title
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 50%
    color #fff
    text-align center
    .header_title_text
      font-size 20px
      color #fff
      display block
  .header_login
    font-size 14px
    color #fff
    position absolute
    right 15px
    top 50%
    transform translateY(-50%)
    .header_login_text
      color #fff
</style>
