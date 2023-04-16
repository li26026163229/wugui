<template>
  <div class="header2">
    <div>
      <img
        src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png"
        alt="imgtitle"
      />
    </div>
    <div>发现最新最热电影</div>
    <div>打开App</div>
  </div>
</template>
<script>
export default {
  name: "HeaDer2",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
.header2 {
  width: 100%;
  height: 1.6rem;
  line-height: 1.6rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.header2 div:nth-of-type(1) {
  width: 30%;
}
.header2 div:nth-of-type(1) img {
  width: 2.506667rem;
  height: 1.04rem;
  margin-top: 0.266667rem;
}
.header2 div:nth-of-type(2) {
  width: 40%;
  font-size: 18px;
}
.header2 div:nth-of-type(3) {
  width: 30%;
}
</style>