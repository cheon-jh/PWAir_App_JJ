// var inputid = document.querySelectorAll('.email_id');
// var inputpwd = document.querySelectorAll('.email_pw');
// var buttonLogin = document.querySelectorAll('.btnLogin');
export function loginWithEmail(id, pw){
  console.log(id +'/'+pw);
  return firebase.auth().signInWithEmailAndPassword(id, pw);
}

export function CreateWithEmail(id, pw){
  console.log(id +'/'+pw);
  return firebase.auth().createUserWithEmailAndPassword(id, pw);
}

export function Logout(){
  return firebase.auth().signOut();
}

export function LoginGoogle(){
  //객체 인스턴스 생성.
  var provider = new firebase.auth.GoogleAuthProvider();
  //선택 사항. 여기서는 뺏음.
  //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //provider.setCustomParameters({
  //  'login_hint': 'user@example.com'
  //});

  //팝업 창을 이용하여 로그인 인증 진행.
  return firebase.auth().signInWithPopup(provider)

}
export function LoginFaceBook(){
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}
// function getEmail(){
//   return inputid[0].value;//input[0].value;
// }
// function getPW(){
//   return inputpwd[0].value;//input[1].value;
// }
