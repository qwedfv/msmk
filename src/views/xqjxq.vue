<template>
  <div class="box">
    <div class="xqjxq_img">
      <img :src="xqjxq.cover_img" alt />
    </div>
    <div class="xqjxq_na">
      <h2>{{xqjxq.title}}</h2>
      <div class="wen">
        <p>剩余名额：{{xqjxq.store_num}}</p>
        <p>报名截止时间：2021.07.15 00：00</p>
        <p>开课时间：2021/07/05 00:00-2021/07/06 00:00</p>
        <p>开课地点：{{xqjxq.city_name}}{{xqjxq.address}}</p>
        <p>{{xqjxq.underlined_price}}</p>
      </div>
    </div>
    <div style="width:100%;height:16px;background:whitesmoke"></div>
    <div class="xqjxq_yh" @click="showPopup">
      <div>
        <span>优惠</span>:&emsp;领取优惠券最多可减
        <span style="color:orange">80</span>
      </div>
      <div>领取 ></div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">优惠券</van-popup>
    <div class="xqjxq_yh" @click="showPopup2">
      <div>
        <span>服务</span>:&emsp;课程售后
      </div>
      <div>详情 ></div>
    </div>
    <van-popup v-model="show2" position="bottom" :style="{ height: '50%' }" >
      <h2 style="text-align:center">课程服务</h2>
      <p style="font-size:15px">{{sh.name}}</p>
      <p style="font-size:15px">{{sh.description}}</p>
    </van-popup>
    <div style="width:100%;height:16px;background:whitesmoke"></div>
    <div class="xqjxq_td">
      <h2>教学团队</h2>
      <div class="xqjxq_dhz">
        <ul class="ul" v-for="(item,index) in jxtd" :key="index">
          <li>
            <img :src="item.teacher_avatar" alt  @click="go(item.teacher_id)"/>
            <span>{{item.teacher_name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="课程介绍"></van-tab>
      <van-tab title="课程大纲"></van-tab>
      <van-tab title="课程评价"></van-tab>
    </van-tabs>
    <div class="kcjs">
      <h3>课程教程</h3>
      <span v-html="xqjxq.course_details"></span>
    </div>
    <div style="width:100%;height:16px;background:whitesmoke"></div>
    <div class="kcdg">
      <h3>课程大纲</h3>
      <div class="kcdg_box">
        <div>1、站马步</div>
        <div>></div>
      </div>
    </div>
    <div class="kcpl">
      <h3>课程评论</h3>
      <van-empty description="暂无评论">
        <van-button round type="danger" class="bottom-button" @click="$router.push('/dz')">立即报名</van-button>
      </van-empty>
    </div>
  </div>
</template>
<script>
import { courseInfo } from "@/utils/apii.js";
export default {
  data() {
    return {
      id: "",
      xqjxq: [],
      jxtd: [],
      sh: [],
      show: false,
      show2: false,
      active: 2,
    };
  },
  async created(id) {
    this.id = this.$route.query.id;
    var res = await courseInfo(this.id);
    console.log(res);
    this.xqjxq = res.data.data.info;
    this.jxtd = res.data.data.teachers;
    this.sh = res.data.data.info.service[0];

    console.log(this.sh);
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showPopup2() {
      this.show2 = true;
    },
    go(id){
      console.log(id);
      this.$router.push({
        path:'/xq',
        query:{id:id}
      })
    }
  },
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 1500px;
  background: whitesmoke;
}
.xqjxq_img {
  width: 100%;
  height: 200px;
}
.xqjxq_img img {
  width: 50%;
}
.xqjxq_na {
  width: 100%;
  height: 250px;
  background: white;
  font-size: 15px;
  line-height: 40px;
}
.wen {
  color: gray;
}
.xqjxq_dhz {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  flex-wrap: wrap;
}
.ul li {
  width: 70px;
  text-align: center;
}
.ul li img {
  width: 60px;
  height: 60px;
  border-radius: 50px;
}
.xqjxq_yh {
  width: 100%;
  height: 50px;
  background: white;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.xqjxq_td {
  width: 100%;
  height: 250px;
  background: white;
}
.tu {
  width: 100%;
}
.p {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.p img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
.kcjs {
  width: 100%;
  height: 100px;
  background: white;
  line-height: 25px;
}
.kcdg {
  width: 100%;
  height: 100px;
  background: white;
}
.kcdg_box {
  width: 90%;
  height: 60px;
  line-height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom-button {
  width: 370px;
  height: 40px;
}
</style>