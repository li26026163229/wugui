<template>
  <div>
    <div v-html="haoping"></div>
  </div>
</template>

<script>
export default {
  name: "HaoPing",
  props: ["haoPing"],
};
</script>

<style >
.top-rated {
  padding: 12px 0 12px 15px;
  background-color: #fff;
  margin-bottom: 10px;
}
.top-rated .title {
  margin: 0;
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
}
.top-rated-list {
  overflow: scroll;
  white-space: nowrap;
}
.top-rated-item {
  display: inline-block;
  width: 85px;
  overflow: hidden;
  margin-right: 10px;
}
.top-rated-item .poster {
  width: 85px;
  height: 115px;
  position: relative;
  margin-bottom: 6px;
}
.default-img-bg {
  background-color: #e1e1e1;
  background-size: 100% 100%;
}
</style>