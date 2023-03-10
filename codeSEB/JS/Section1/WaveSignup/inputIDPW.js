// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUserID = document.querySelector('#userid');
let elInputPassword = document.querySelector('#password');
let elInputPasswordConfirm = document.querySelector('#password-retype');

let elSuccessMessage = document.querySelector('.success-message');
let elFailureMessage = document.querySelector('.failure-message');
let elPasswordSuccessMessae = document.querySelector('.match-message');
let elPasswordFailuerMessage = document.querySelector('.mismatch-message');

let wave1 = document.querySelector('#wave1');
let wave2 = document.querySelector('#wave2');


wave1.style.top = '350px';
wave2.style.top = '300px';

function isMoreThan4Length(value) {
  return elInputUserID.value.length >= 4;
}

function isMatch (password1, password2) {
  return password1 === password2;
}

elInputUserID.onkeyup = function (e) {
  if(isMoreThan4Length(elInputUserID.value)) {
    elSuccessMessage.classList.remove('hide');
    elFailureMessage.classList.add('hide');
    wave1.style.top = '200px';
    wave2.style.top = '150px';
  }
  else {
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
    wave1.style.top = '350px';
    wave2.style.top = '300px';
  }
}

elInputPassword.onkeyup = function(e) {
  if(elInputPassword.value.length > 0){
    wave1.style.top = '100px';
    wave2.style.top = '50px';
  }
  else {
      wave1.style.top = '200px';
      wave2.style.top = '150px';
  }
}

elInputPasswordConfirm.onkeyup = function(e) {
  if(isMatch(elInputPassword.value, elInputPasswordConfirm.value)) {
    elPasswordSuccessMessae.classList.remove('hide');
    elPasswordFailuerMessage.classList.add('hide');
    wave1.style.top = '-10px';
    wave2.style.top = '-10px';

  }
  else {
    elPasswordSuccessMessae.classList.add('hide');
    elPasswordFailuerMessage.classList.remove('hide');
    wave1.style.top = '100px';
    wave2.style.top = '50px';
  }

}