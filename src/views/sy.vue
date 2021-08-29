<template>
  <div>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    <div class="lb">
      <van-swipe  class="van-swipe" :autoplay="3000">
        <van-swipe-item class="van-sw">
          <img src="http://120.53.31.103:84/uploads/image/2021-07-02/eWIwuaHogrdpTM8POFMGCSWuhkK3yUkgK58F6L0x.png" />
        </van-swipe-item>
        <van-swipe-item class="van-sw">
          <img src="http://120.53.31.103:84/uploads/image/2021-04-08/3g04sBbCgNAG6WRlnJANB7BtWVHXhwdiZHTM6uDp.jpeg" />
        </van-swipe-item>
      </van-swipe>
      <div class="icon_big">
        <van-icon class="icon" size="30px" name="comment-o" />
        <p>大威天龙</p>
      </div>
    </div>
    <div class="zs_big">
      <div class="zs_t">
        <p>
          <span style="color:red">||</span>
          <span>资深讲师</span>
        </p>
        <p @click="$router.push('/kc')">更多 ></p>
      </div>
      <div class="zs_1" v-for="(item,index) in zsjs" :key="index">
        <div class="zs_1_left">
          <img :src="item.teacher_avatar" alt />
        </div>
        <div class="zs_1_right">
          <p>{{item.teacher_name}}</p>
          <p style="color:gray;font-size:12px">{{item.introduction}}</p>
        </div>
      </div>
      <div class="zs_t">
        <p>
          <span style="color:red">||</span>
          <span>推荐课程</span>
        </p>
        <p>更多 ></p>
      </div>
      <div class="tjkc_big" v-for="(item,index) in tjkc" :key="index">
        <div class="tjkc_big_left">
            <img :src="item.cover_img" alt="">
        </div>
        <div class="tjkc_big_right">
          <p>{{item.title}}</p>
          <div class="right_box">
            <span>{{item.sales_num}}人已报名</span>
            <span>{{item.price}}</span>
          </div>
        </div>
      </div>
      <div class="zs_t">
        <p>
          <span style="color:red">||</span>
          <span>名师</span>
        </p>
        <p @click="$router.push('/kc')">更多 ></p>
      </div>
      <div class="zs_1" v-for="(item,index) in ms" :key="index">
        <div class="zs_1_left">
          <img :src="item.teacher_avatar" alt />
        </div>
        <div class="zs_1_right">
          <p>{{item.teacher_name}}</p>
          <p style="color:gray;font-size:12px">{{item.introduction}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { banner, appIndex } from "@/utils/apii.js";
export default {
  data() {
    return {
      value: "",
      zsjs: [],
      tjkc: [],
      ms:[]
    };
  },
  async created() {
    var res = await banner();
    // console.log(res);
    var zi = await appIndex();
    // console.log(zi);
    this.zsjs = zi.data.data[0].list;
    this.tjkc = zi.data.data[1].list;
    this.ms = zi.data.data[2].list;
    // console.log(this.ms);
  },
  methods: {},
};
</script>
<style scoped>
.lb {
  width: 100%;
  height: 300px;
  border-bottom: 1px solid gainsboro;
}
.van-swipe {
  width: 100%;
  height: 200px;
  border-bottom: 1px solid gainsboro;
}
.van-sw img{
  width: 100%;
  height: 200px;
}
.icon_big p {
  color: gray;
  line-height: 50px;
}
.icon {
  color: gainsboro;
}
.zs_big {
  width: 100%;
  height: 1900px;
  background: whitesmoke;
}
.zs_t {
  width: 90%;
  height: 40px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  line-height: 50px;
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
.tjkc_big{
  width: 90%;
  height: 100px;
  background: white;
  margin: auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 15px;
}
.tjkc_big_left{
    width: 40%;
}
.tjkc_big_left img{
    width: 90%;
}
.tjkc_big_right{
    width: 100%;
    line-height: 55px;
}
.right_box{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>