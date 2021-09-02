<template>
  <div>
    <div>
      <van-tabs v-model="active" @change="dian">
        <van-tab :title="'全部'">
          <van-card
            v-for="(item,index) in zx_list"
            :key="index"
            num="2021/07/05 16:57"
            :price="item.click_rate"
            :desc="item.description"
            :title="item.title"
            :thumb="item.thumb_img"
            @click="go(item.id)"
          />
        </van-tab>
        <van-tab v-for="(item,index) in zxtop" :key="index" :title="item.name" :name="item.id">
          <van-card
            v-for="(item,index) in zx_list"
            :key="index"
            num="2021/07/05 16:57"
            :price="item.click_rate"
            :desc="item.description"
            :title="item.title"
            :thumb="item.thumb_img"
            @click="go(item.id)"
          />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { classify, index } from "@/utils/apii.js";
export default {
  data() {
    return {
      zxtop: [],
      zx_list: [],
      active: 0,
    };
  },
  async created() {
    var res = await classify();
    // console.log(res);
    this.zxtop = res.data.data;
    console.log(this.zxtop);
    var ress = await index({
      classify_id: 0,
      limit: 10,
      page: 1,
    });
    // console.log(ress);
    this.zx_list = ress.data.data.list;
  },
  methods: {
    async dian(name) {
      var ress = await index({
        classify_id: name
      });
    //   console.log(ress);
      this.zx_list = ress.data.data.list;
    },
    go(id){
        this.$router.push({
            path:'/zxxq',
            query:{id:id}
        })
    }
  },
};
</script>
<style scoped>
</style>