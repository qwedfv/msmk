<template>
  <div class="box">
    <div class="big">
      <div class="big_box">
        <div class="big_1">
          <div class="big_1_img">
            <img src="@/assets/avatar.jpg" alt />
          </div>
          <div>
            <p>{{$store.state.name}}</p>
            <p>积分：0</p>
          </div>
        </div>
        <div class="big_2">签到规则</div>
      </div>
      <div>
        <van-calendar
          :poppable="false"
          :show-confirm="false"
          :style="{ height: '300px' }"
          :row-height="35"
           class="rl"
        />
      </div>
    </div>
    <div class="hui"></div>
    <div class="dibu">
      <div class="za_big">
        <div class="zs_t">
          <p>
            <span style="color:red">||</span>
            <span>好课推荐</span>
          </p>
          <p>更多 ></p>
        </div>
        <div class="tj_tu">
          <div>
            <img src="@/assets/2.jpeg" alt />
          </div>
          <div>
            <div>论渣男的自我修养</div>
            <div class="tj_tu2">
              <span>1积分</span>
              <span>去兑换</span>
            </div>
          </div>
        </div>
      </div>
      <div class="za_big">
        <div class="zs_t">
          <p>
            <span style="color:red">||</span>
            <span>热门图书</span>
          </p>
          <p>更多 ></p>
        </div>
        <div class="tj_tu">
          <div>
            <img src="@/assets/3.jpeg" alt />
          </div>
          <div>
            <div>VUE开发后台管理系统</div>
            <div class="tj_tu2">
              <span>1积分</span>
              <span>去兑换</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { signRecord } from "@/utils/apii.js";
export default {
  data() {
    return {};
  },
  async created() {
    var res = await signRecord();
    console.log(res);
  },
  methods: {},
};
</script>
<style>
.dibu {
  margin-top: 150px;
}
.tj_tu {
  width: 95%;
  height: 100px;
  display: flex;
  line-height: 50px;
}
.tj_tu img {
  width: 100px;
  height: 100px;
}
.tj_tu2 {
  width: 200px;
  display: flex;
  justify-content: space-between;
}
.big {
  width: 100%;
  height: 300px;
  background: #e55e6a;
}
.big_1_img {
  width: 60px;
  height: 60px;
  background: gainsboro;
  border-radius: 50px;
}
.big_1_img img {
  width: 60px;
  height: 60px;
  background: gainsboro;
  border-radius: 50px;
}
.big_1 {
  display: flex;
  line-height: 30px;
  align-items: center;
  color: white;
  font-size: 20px;
}
.big_box {
  display: flex;
  height: 130px;
  justify-content: space-around;
  align-items: center;
}
.big_2 {
  width: 80px;
  height: 20px;
  line-height: 20px;
  border: 1px solid whitesmoke;
  border-radius: 10px;
  color: whitesmoke;
  text-align: center;
}
.rl {
  margin: auto;
  width: 90%;
  height: 300px;
  background: white;
  border-radius: 20px;
}
.zs_t {
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  line-height: 50px;
  padding-left: 20px;
}
.za_big {
  width: 100%;
  height: 150px;
}
.box {
  width: 100%;
  height: 1000px;
  background: whitesmoke;
}
.tj_tu {
  width: 92%;
  height: 100px;
  border: 1px solid gainsboro;
  border-radius: 10px;
  margin: auto;
  background: white;
}
</style>