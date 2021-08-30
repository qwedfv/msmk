<template>
  <div class="big">
    <div class="dl_big">
      <img src="@/assets/sh.png" alt />
    </div>
    <div class="dl_kong"></div>
    <div class="dl_big2">
      <div class="dl_input">
        <span class="dl_input_sp">
          <input type="text" placeholder="请输入手机号" v-model="mobile" />
        </span>
      </div>
      <p>
        <input class="input" type="password" placeholder="请输入密码" v-model="password" />
      </p>
      <div class="dl_zc">
        <span @click="$router.push('/mim')">找回密码</span>
        <span @click="$router.push('/dl')">注册/验证码登录</span>
      </div>
      <div class="dl_dibu">
        <button @click="login">登录</button>
        <p>
          <img class="dl_dibu_img" src="@/assets/dg.png" alt /> 我同意
          <span class="dl_dibu_ys">用户注册协议</span>和
          <span class="dl_dibu_ys">隐私保护协议</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { smsCode, login, password } from "@/utils/apii.js";
export default {
  data() {
    return {
      mobile: "",
      password: "",
    };
  },
  methods: {
    async login() {
      var res = await login({
        mobile: this.mobile,
        password: `${this.password}`,
        type: 1,
        client: "1",
      });
      console.log(res.data.data.remember_token);
      if (res.data.code == 200) {
        this.$router.push("/wd");
        this.$toast.success("登陆成功");
        this.$store.commit("token", res.data.data.remember_token);
      }
    },
  },
};
</script>
<style>
.big {
  width: 100%;
  height: 800px;
  position: relative;
}
.dl_big {
  width: 100%;
  height: 300px;
}
.dl_big img {
  width: 100%;
  height: 350px;
}
.dl_kong {
  width: 100%;
  height: 15px;
  background: whitesmoke;
}
.dl_big2 {
  width: 85%;
  margin: auto;
  height: 300px;
  line-height: 100px;
}
.dl_input {
  width: 100%;
  height: 80px;
  display: flex;
  font-size: 20px;
  border-bottom: 1px solid gainsboro;
}
.dl_input_sp {
  width: 70%;
  line-height: 100px;
}
.dl_input_sp input {
  width: 100%;
  height: 50px;
  border: none;
}

.input {
  width: 100%;
  height: 50px;
  border: none;
  font-size: 20px;
  border-bottom: 1px solid gainsboro;
}
.dl_zc {
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  color: gray;
}
.dl_dibu {
  padding-top: 30px;
  width: 100%;
  height: 200px;
  line-height: 60px;
}
.dl_dibu button {
  width: 100%;
  height: 50px;
  border: none;
  background: linear-gradient(
    to right,
    rgb(245, 90, 141),
    rgba(219, 11, 11, 0.836)
  );
  box-shadow: 0px 3px 8px rgb(224, 9, 9);
  color: white;
  font-size: 25px;
  line-height: 50px;
}
.dl_dibu p {
  font-size: 15px;
}
.dl_dibu_ys {
  color: rgb(255, 28, 28);
}
.dl_dibu_img {
  width: 15px;
}
.dl_tk {
  width: 300px;
  height: 60px;
  background: black;
  color: white;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.dl_tkk {
  width: 300px;
  height: 60px;
  background: black;
  color: white;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.dl_tkkk {
  width: 500px;
  height: 100px;
  background: black;
  color: white;
  text-align: center;
  line-height: 100px;
  font-size: 40px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
</style>