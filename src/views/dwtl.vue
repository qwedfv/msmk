<template>
  <div>
    <van-search placeholder="搜索课程" />
    <div class="zs_1" v-for="(item,index) in kec" :key="index">
      <div class="zs_1_left">
        <img :src="item.cover_img" alt />
      </div>
      <div class="zs_1_right">
        <p>{{item.title}}</p>
        <div class="zs_1_right_ri">
          <span>{{item.sales_num}}人已报名</span>
          <span>{{item.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { courseBasis } from "@/utils/apii.js";
export default {
  data() {
    return {
      kec: [],
    };
  },
  async created() {
    var res = await courseBasis();
    console.log(res);
    this.kec = res.data.data.list;
    console.log(this.kec);
  },
};
</script>
<style scoped>
.zs_1 {
  width: 92%;
  height: 100px;
  background: white;
  margin: auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 15px;
}
.zs_1_left {
  width: 30%;
}
.zs_1_left img {
  width: 100%;
  height: 60px;
  border-radius: 50px;
}
.zs_1_right {
  width: 70%;
  line-height: 50px;
  font-size: 15px;
}
.zs_1_right_ri {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>