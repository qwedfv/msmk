<template>
  <div class="mm_box">
    <div class="mm_big">
      <input class="input" @click="mim" type="text" placeholder="设置密码" />
      <span></span>
    </div>
    <div class="mm_big2">
      <input class="input" type="text" placeholder="注册账号" />
      <span></span>
    </div>
    <div class="mm_button">
      <button @click="tui">退出登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods:{
        mim(){
            this.$router.push('/mim')
        },
        tui(){
            this.$router.push('/wd')
          this.$store.commit('tui')
        }
    }
};
</script>
<style scoped>
.mm_big {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.mm_big2 {
  margin-top: 5px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.mm_big2 span {
  width: 12px;
  height: 12px;
  border-top: 2px solid gainsboro;
  border-right: 2px solid gainsboro;
  transform: rotate(45deg);
  margin-right: 7px;
}
.mm_big span {
  width: 12px;
  height: 12px;
  border-top: 2px solid gainsboro;
  border-right: 2px solid gainsboro;
  transform: rotate(45deg);
  margin-right: 7px;
}
.input {
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
</style>