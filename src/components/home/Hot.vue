<template>
  <div>
    <ul>
      <li v-for="item in reyingList" :key="item.id">
        <img class="img1" :src="item.img" />
        {{ item.nm }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HoT",
  props: ["reyingList"],
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
.img1{
  width: 120px;
  height: 180px;
}
</style>