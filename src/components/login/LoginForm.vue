<template>
  <div class="">
    <!--<button @click="routeMain" type="button" name="button">click</button>-->
    <input v-model="id" type="text" name="" value="" class="email_id" placeholder="ID">
    <input v-model="pw" type="password" name="" value="" class="email_pw" placeholder="Password">
    <button type="button" name="button" class="btnLogin" @click="btnExcuteLogin">Login</button>
    <button type="button" name="button" class="btnCreateUser" @click="btnCreateUser">회원가입</button>
  </div>
</template>

<script>
import { loginWithEmail, CreateWithEmail } from '../../Login.js'

export default {
  data() {
    return {
      id: '',
      pw: '',
    }
  },
  methods: {
    btnExcuteLogin() {
      console.log('ExcuteLogin');
      loginWithEmail(this.id, this.pw).catch((error) => {
          console.log(error);
          alert('로그인 정보를 확인해주세요');
      }).then((user) => {
        console.log(user);
        if(user != null || user != undefined)
          this.$router.push("home");
      });
  },
    btnCreateUser(){
      console.log('btnCreateUser');
      CreateWithEmail(this.id,this.pw).catch((error) => {
          console.log(error);
          alert('회원가입 중 문제가 발생했습니다.');
      }).then((user) => {
        console.log(user);
        if(user != null || user != undefined)
        alert('회원가입이 완료되었습니다.');
      });
    },
  }
}
</script>

<style>
</style>
