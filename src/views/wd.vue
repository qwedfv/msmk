<template>
  <div class="box">
    <div class="wd_big">
      <div class="wd_bu">
        <p class="wd_icon">
          <van-icon name="user-o" size="50px"/>
        </p>
        <span @click="$router.push('/dl')">登录</span>/
        <span>注册</span>
      </div>
    </div>
    <div class="wd_xx">
      <div class="wd_xx_p">
        <p>0</p>
        <p>我的学习</p>
      </div>
       <div class="wd_xx_p">
        <p>0</p>
        <p>本周课时</p>
      </div>
       <div class="wd_xx_p">
        <p>0</p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="wd_db_big">
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>我的作业</span>
        <span class="sj">  </span>
      </div>
      <div class="wd_sp">
        <span><van-icon name="like-o" size="15px"/>我的社区</span>
        <span class="sj">  </span>
      </div>
    </div>
    <div class="wd_db_big">
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>课程订单</span>
        <span class="sj">  </span>
      </div>
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>图书订单</span>
        <span class="sj">  </span>
      </div>
    </div>
    <div class="wd_db_big2">
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>优惠卷</span>
        <span class="sj">  </span>
      </div>
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>学习本</span>
        <span class="sj">  </span>
      </div>
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>分销中心</span>
        <span class="sj">  </span>
      </div>
    </div>
    <div class="wd_db_big" :height="250">
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>消息中心</span>
        <span class="sj">  </span>
      </div>
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>地址管理</span>
        <span class="sj">  </span>
      </div>
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>关于我们</span>
        <span class="sj">  </span>
      </div>
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>意见反馈</span>
        <span class="sj">  </span>
      </div>
      <div class="wd_sp">
        <span><van-icon name="notes-o" size="15px"/>设置</span>
        <span class="sj">  </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.box{
  width: 100%;
  height: 1200px;
}
.wd_big {
  width: 100%;
  height: 200px;
  background: linear-gradient(
    to bottom,
    rgb(245, 90, 141),
    rgba(189, 9, 9, 0.836)
  );
  color: white;
  font-size: 20px;
}
.wd_bu{
  width: 100px;
  margin: auto;
  padding-top: 50px;
}
.wd_icon{
  width: 60px;
  height: 60px;
  background: gainsboro;
  text-align: center;
  margin-left: 15px;
  border-radius: 50px;
}
.wd_xx{
  width: 100%;
  height: 80px;
  display: flex;
}
.wd_xx_p{
  width: 33%;
  height: 100%;
  text-align: center;
  font-size: 15px;
  line-height: 30px;
}
.wd_db_big{
  width: 100%;
  height: 120px;
  background: whitesmoke;
  padding-top: 20px;
  font-size: 15px;
}
.wd_db_big2{
  width: 100%;
  height: 180px;
  background: whitesmoke;
  padding-top: 20px;
}
.sj{
  width: 12px;
  height: 12px;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
  transform: rotate(45deg);
  margin-right: 10px;
}
.wd_sp{
  width: 100%;
  height: 60px;
  background: white;
  line-height: 50px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gainsboro;
}
</style>