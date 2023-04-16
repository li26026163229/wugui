<template>
  <div>
    <div class="headertitle">
      <Header1></Header1>
      <Header2></Header2>
    </div>
    <div class="content">
      <!--好评电影-->
      <Haoping :haoping="haoping"></Haoping>
      <!-- 热映电影 -->
      <Hot :reyingList="reyingList"></Hot>
    </div>
  </div>
</template>

<script>
//引入 头部
import Header1 from "../../components/common/Header1.vue"; //相对路径
import Header2 from "../../components/common/Header2.vue";
//引入 热映的组件
import Hot from "@/components/home/Hot.vue"; //绝对路径
import Haoping from "@/components/home/Haoping.vue";
import axios from "axios";
export default {
  name: "MoVie",
  data: function () {
    return {
      reyingList: [],
      haoping: "",
    };
  },
  components: {
    Header1,
    Header2,
    Hot,
    Haoping,
  },
  mounted() {
    //热映
    axios
      .get(
        "/ajax/movieOnInfoList?token=&optimus_uuid=3084E8D0146211ECA50A477D88250D251D93073CCDCC41D9A4CAC797521EC42D&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        console.log(res);
        res.data.movieList.forEach((item) => {
          item.img = item.img.replace("w.h", "128.180");
        });
        this.reyingList = res.data.movieList;
      });
    //好评
    axios
      .get(
        "/ajax/topRatedMovies?token=&optimus_uuid=3084E8D0146211ECA50A477D88250D251D93073CCDCC41D9A4CAC797521EC42D&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        console.log(res);
        this.haoping = res.data;
      });
  },
};
</script>

<style scoped>
/* css 在本页面起效 */
.headertitle {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
}
.content {
  margin-top: 110px;
  margin-bottom: 50px;
}
</style>