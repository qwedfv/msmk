<template>
  <div>
    <div class="xq_top">
      <span>
        <img :src="js.avatar" alt />
      </span>
      <span>{{js.real_name}}</span>
    </div>
    <van-tabs>
      <van-tab title="讲师介绍">
        <p>老师简介</p>
        <p>{{js.introduction}}</p>
      </van-tab>
      <van-tab title="主讲课程">
        <div class="zs_1" v-for="(item,index) in zjkc" :key="index"  @click="go(item.id)">
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
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { teacher, mainCourse } from "@/utils/apii.js";
export default {
  data() {
    return {
      js: [],
      id: "",
      zjkc:[]
    };
  },
  async created() {
    this.id = this.$route.query.id;
    var res = await teacher(this.id);
    // console.log(res);
    this.js = res.data.data.teacher;
    var ress = await mainCourse({
        teacher_id:this.id
    });
    console.log(ress);
    this.zjkc=ress.data.data.list
    console.log(this.zjkc);             
  },
  methods: {
    go(id){
      // console.log(id);
      this.$router.push({
        path:'/xqjxq',
        query:{id:id}
      })
    }
  },
};
</script>
<style  scoped>
.xq_top {
  width: 90%;
  height: 100px;
  margin: auto;
  border-bottom: 1px solid gainsboro;
  display: flex;
  align-items: center;
  font-size: 20px;
}
.xq_top span {
  width: 80px;
  height: 80px;
  border-radius: 50px;
}
.xq_top img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
}
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
.zs_1_right_ri{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>