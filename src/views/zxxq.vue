<template>
  <div>
    <div class="img">
      <img :src="zxxq.thumb_img" alt />
    </div>
    <div class="di">
      <h1>{{zxxq.title}}</h1>
      <div class="ll">
        <div>{{zxxq.click_rate}}次浏览</div>
        <div>07-5</div>
      </div>
      <div class="gkzw">
        <p class="gkzw_p">高考作文</p>
      </div>
    </div>
    <div v-html="zxxq.content" style="font-size:20px;padding-top:25px"></div>
   
  </div>
</template>
<script>
import { detail } from "@/utils/apii.js";
export default {
  data() {
    return {
      id: "",
      zxxq: [],
     
    };
  },
  async created() {
    this.id = this.$route.query.id;
    console.log(this.id);
    var res = await detail({
      information_id: this.id,
    });
    console.log(res);
    this.zxxq = res.data.data;
  },
  methods: {
    
  },
};
</script>
<style scoped>
.img {
  width: 100%;
  height: 350px;
}
.img img {
  width: 100%;
  height: 350px;
}
.di {
  width: 95%;
  margin: auto;
}
.ll {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: gray;
}
.gkzw {
  width: 25%;
  margin: auto;
  padding-top: 40px;
  font-size: 20px;
  text-align: center;
  color: gray;
}
.gkzw_p {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid gray;
}
</style>