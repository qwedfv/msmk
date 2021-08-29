<template>
  <div class="Index">
    <router-view></router-view>
    <div class="big">
      <div
        v-for="(item, index) in shou"
        :key="index"
        @click="$router.push(`${index=shou[index].url}`)"
      >
        <p>
          <img :src="item.nav_img" alt />
        </p>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { bottom } from "@/utils/apii.js";
export default {
  data() {
    return {
      active: 0,
      shou: [],
    };
  },
  async created(index) {
    var res = await bottom();
    // console.log(res);
    this.shou = res.data.data.index;
    // console.log(this.shou);
    var list = ["/sy", "/kc", "/zx", "/ts", "/wd"];
    this.shou.forEach((element, key) => {
      element.url = list[key];
    });
    this.shu = index;
  },
};
</script>
<style scoped>
.Index {
  width: 100%;
  height: 100%;
}
.big {
  display: flex;
  width: 100%;
  height: 50px;
  border-top: 1px solid gainsboro;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
}
.big img {
  width: 30px;
}
</style>