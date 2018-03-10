<template>
  <div class="">
    네비게이션바자리 PWAir
    <button type="button" name="button" @click="btnLogout">로그아웃</button>
  </div>
</template>

<script>
import {Logout} from '../../Login.js'
export default {
  methods:{
    btnLogout(){
      Logout().then(()=> {
        console.log('로그아웃 성공');
        this.$router.push("/");
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
    }
  },
}
</script>

<style>
</style>
