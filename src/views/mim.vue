<template>
  <div class="dl_big">
    <div class="dl_input">
      <span class="dl_input_sp">
        <input type="text" placeholder="请输入手机号" v-model="mobile" />
      </span>
      <span class="dl_input_sp2" @click="hq" v-show="!spp">获取验证码</span>
      <span class="dl_input_sp3" v-show="spp">{{shu}}s</span>
    </div>
    <div class="mm_big2">
      <input class="input" type="text" placeholder="请输入验证码" v-model="yzm" />
    </div>
    <div class="mm_big2">
      <input class="input" type="text" placeholder="请输入密码" v-model="password"/>
    </div>
    <div class="mm_button">
      <button @click="que">确定</button>
    </div>
    <div class="dl_tk" v-show="flag">手机号格式不对</div>
    <div class="dl_tkk" v-show="flag2">验证码格式不对</div>
    <div>

    </div>
  </div>
</template>
<script>
import { password, smsCode ,login } from "@/utils/apii";
export default {
  data() {
    return {
      mobile: "",
      password: "",
      yzm: "",
      spp: false,
      shu: 60,
      num: 3,
      flag: false,
      flag2: false,
      flag3: false,
    };
  },
  methods: {
    async hq() {
      if (this.mobile == "") {
        this.flag = true;
        var tiem = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            this.num = 3;
            this.flag = false;
            clearInterval(tiem);
          }
        }, 1000);
      } else {
        this.spp = true;
        var tir = setInterval(() => {
          this.shu--;
          if (this.shu == 0) {
            this.shu = 60;
            clearInterval(tir);
            this.spp = false;
          }
        }, 1000);
        var res = await smsCode({ mobile: this.mobile, sms_type: "login" });
        console.log(res);
      }
    },
    async que() {
      if (this.yzm == "") {
        this.flag2 = true;
        var tiem = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            this.num = 3;
            this.flag2 = false;
            clearInterval(tiem);
          }
        }, 1000);
      } else {
        var res = await password({
          mobile: `${this.mobile}`,
          sms_code: `${this.yzm}`,
          password:`${this.password}`
        });
        console.log(res);
        if (res.data.code == 200) {
          this.$router.push("/pass");
          this.$toast.success('设置成功')
        } else {
          this.flag3 = true;
          var tiem = setInterval(() => {
            this.num--;
            if (this.num == 0) {
              this.num = 3;
              this.flag3 = false;
              clearInterval(tiem);
            }
          }, 1000);
        }
      }
    },
  },
};
</script>
<style scoped>
.dl_big {
  width: 100%;
  height: 500px;
  position: relative;
}
.dl_input {
  width: 100%;
  height: 60px;
  display: flex;
  font-size: 20px;
  border-bottom: 1px solid gainsboro;
}
.dl_input_sp {
  width: 70%;
}
.dl_input_sp input {
  width: 100%;
  height: 60px;
  border: none;
  line-height: 60px;
  font-size: 15px;
}
.dl_input_sp2 {
  width: 30%;
  height: 60px;
  line-height: 60px;
  font-size: 15px;
  text-align: center;
  color: red;
}
.dl_input_sp3 {
  width: 30%;
  height: 60px;
  line-height: 60px;
  font-size: 15px;
  text-align: center;
  color: red;
}
.mm_big2 {
  margin-top: 5px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.mm_big2 input {
  width: 100%;
  height: 50px;
  border: none;
  font-size: 15px;
  border-bottom: 1px solid gainsboro;
}
.mm_button {
  width: 90%;
  height: 100px;
  margin-top: 80px;
  margin-left: 17px;
}
.mm_button button {
  width: 100%;
  height: 40px;
  border: none;
  background: red;
  color: white;
  font-size: 15px;
  border-radius: 5px;
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
</style>