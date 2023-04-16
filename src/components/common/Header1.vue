<template>
  <div class="header1">
    <div></div>
    <div>猫眼电影</div>
    <div><i class="iconfont icon-hanbaobao"></i></div>
  </div>
</template>
<script>
export default {
  name: "HeaDer1",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
.header1 {
  width: 100%;
  height: 1.333333rem;
  line-height: 1.333333rem;
  background: #e54847;
  color: #fff;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.header1 div:nth-of-type(1) {
  width: 10%;
}
.header1 div:nth-of-type(2) {
  width: 80%;
  font-size: 18px;
}
.header1 div:nth-of-type(3) {
  width: 10%;
}
</style>