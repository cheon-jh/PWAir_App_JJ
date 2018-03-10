<template>
  <div class="">
    <button type="button" name="button" class="btnGoogle" @click="btnGoogle">Google</button>
    <button type="button" name="button" class="btnFaceBoock" @click="btnFaceBoock">FaceBook</button>
  </div>
</template>

<script>
import {LoginGoogle,LoginFaceBook} from '../../Login.js'

export default {
  methods:{
    btnGoogle(){
    console.log('btnGoogle');

    // 1. 구글 인증 진행.
    LoginGoogle().then((result)=> {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);

    //2. 사용자 정보가 있을 때, 로그인 패쓰 완료
    alert('로그인 인증 완료');

    //3. 홈 화면으로 이동.
    this.$router.push("home");
    //** 심화버전은 가져온 사용자 정보로, 가입여부 확인 후, 새로운 사용자일경우, 회원가입 권유.
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(error)
      alert('Google 인증을 진행할 수 없습니다.');
    });
    },
    btnFaceBoock(){
      LoginFaceBook().then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);

      //2. 사용자 정보가 있을 때, 로그인 패쓰 완료
      alert('로그인 인증 완료');

      //3. 홈 화면으로 이동.
      this.$router.push("home");
      //** 심화버전은 가져온 사용자 정보로, 가입여부 확인 후, 새로운 사용자일경우, 회원가입 권유.
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      console.log(error)
      alert('FaceBook 인증을 진행할 수 없습니다.');

    });
    },
  }
}
</script>

<style>
</style>
