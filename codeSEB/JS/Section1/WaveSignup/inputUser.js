// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputName = document.querySelector('#username');
let elInputAddress = document.querySelector('#useraddress');
let elSelectorMF = document.querySelector('#usermf');
let elInputAge = document.querySelector('#userage');

let wave1 = document.querySelector('#wave1');
let wave2 = document.querySelector('#wave2');

// 이름을 유효성 만족해서 채우면 파도 높이 up
// 주소 채우면 up
//성별, 나이 채우면 50% full
elInputName.onkeyup = function (e) {
    if(elInputName.value.length > 0){
        wave1.style.top = '500px';
        wave2.style.top = '450px';
    }
    else {
        wave1.style.top = '600px';
        wave2.style.top = '550px';
    }
}

elInputAddress.onkeyup = function (e) {
    if(elInputName.value.length > 0){
        wave1.style.top = '450px';
        wave2.style.top = '400px';
    }
    else {
        wave1.style.top = '500px';
        wave2.style.top = '450px';
    }
}

elSelectorMF.onchange = function (e) {
    if(elInputName.value !== 'default'){
        wave1.style.top = '400px';
        wave2.style.top = '350px';
    }
    else {
        wave1.style.top = '450px';
        wave2.style.top = '400px';
    }
}

elInputAge.onkeyup = function (e) {
    if(elInputName.value.length > 0){
        wave1.style.top = '350px';
        wave2.style.top = '300px';
    }
    else {
        wave1.style.top = '400px';
        wave2.style.top = '350px';
    }
}
