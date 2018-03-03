// var inputid = document.querySelectorAll('.email_id');
// var inputpwd = document.querySelectorAll('.email_pw');
// var buttonLogin = document.querySelectorAll('.btnLogin');
export function loginWithEmail(id, pw){
  console.log(id +'/'+pw);
  return firebase.auth().signInWithEmailAndPassword(id, pw);
}

export function CreateWithEmail(id, pw){
  console.log(id +'/'+pw);
  firebase.auth().createUserWithEmailAndPassword(id, pw).catch(function(error){
    alert('이미 가입된 ID입니다.');
  }).then(function(user){
    console.log(user);
  });
}
// function getEmail(){
//   return inputid[0].value;//input[0].value;
// }
// function getPW(){
//   return inputpwd[0].value;//input[1].value;
// }
