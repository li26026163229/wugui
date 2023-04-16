<template>
  <div id="nav">
    <router-link to="/">
      <div><i class="iconfont icon-dianying"></i></div>
      <div>电影/影院</div>
    </router-link>

    <router-link to="/video">
      <div><i class="iconfont icon-shipin1"></i></div>
      <div>视频</div>
    </router-link>

    <router-link to="/minivideo">
      <div><i class="iconfont icon-shipin-"></i></div>
      <div>小视频</div>
    </router-link>

    <router-link to="/show">
      <div><i class="iconfont icon-yanchu-xianxing2-0"></i></div>
      <div>演出</div>
    </router-link>

    <router-link to="/me">
      <div><i class="iconfont icon-xiazai4"></i></div>
      <div>我的</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "FooTer",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
#nav {
  width: 100%;
  height: 45px;
  line-height: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-top: 5px;
  background: #fff;
}
#nav .iconfont {
  font-size: 20px;
}

#nav a {
  color: #696969;
}
/* 激活状态链接样式 */
#nav a.router-link-exact-active {
  color: #f03d37;
}
</style>