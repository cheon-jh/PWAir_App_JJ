<template>
  <div class="">
    <!--<button @click="routeMain" type="button" name="button">click</button>-->
    <input v-model="id" type="text" name="" value="" class="email_id" placeholder="ID">
    <input v-model="pw" type="password" name="" value="" class="email_pw" placeholder="Password">
    <button type="button" name="button" class="btnLogin" @click="ExcuteLogin">Login</button>
    <button type="button" name="button" class="btnCreateUser" @click="ExcuteLogin">회원가입</button>
  </div>
</template>

<script>
import { loginWithEmail,CreateWithEmail } from '../../Login.js'

export default {
  data() {
    return {
      id: '',
      pw: '',
    }
  },
  methods: {
    ExcuteLogin() {
      console.log('ExcuteLogin');
      loginWithEmail(this.id, this.pw).catch((error) => {
          console.log(error);
      }).then((user) => {
        console.log(user);
        this.$router.push("home");
      });
  },
    btnCreateUser(){
      console.log('btnCreateUser');
      CreateWithEmail(this.id,this.pw);

    }
  }
}
</script>

<style>
</style>
