<template>
  <div>
    <div class="zs_1_big">
      <div class="zs_1" v-for="(item,index) in ms" :key="index">
        <div class="zs_1_left">
          <img :src="item.teacher_avatar" alt />
        </div>
        <div class="zs_1_right">
          <p>{{item.teacher_name}}</p>
          <p style="color:gray;font-size:12px">{{item.introduction}}</p>
        </div>
      </div>
      <p class="p">没有更多了</p>
    </div>
  </div>
</template>
<script>
import { banner, appIndex } from "@/utils/apii.js";
export default {
  data() {
    return {
      ms: [],
    };
  },
  async created() {
    var zi = await appIndex();
    console.log(zi);
    this.ms = zi.data.data[2].list;
  },
};
</script>
<style scoped>
.zs_1_big{
    width: 100%;
    height: 670px;
    background: whitesmoke;
}
.zs_1 {
  width: 90%;
  height: 80px;
  background: white;
  margin: auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 15px;
}
.zs_1_left {
  width: 20%;
}
.zs_1_left img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
.zs_1_right {
  width: 100%;
  line-height: 30px;
  font-size: 15px;
}
.p{
    width: 100%;
    text-align: center;
}
</style>