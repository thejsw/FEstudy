// DOM Tree 호출
document.documentElement
document.body;
document.body.style;
document.body.style.opacity = '0';

// Tag name으로 DOM TREE 호출
let divList = document.getElementsByName('div');
console.log(divList);

// DOM TREE 호출을 for문으로 응용한 예제
let pList = document.getElementsByTagName('p');

for(p of pList){
    p.style.fontSize = '30px';
}

// querySelectorAll 사용
let pList = document.querySelectorAll('p');

for(p of pList){
    p.style.fontSize = '30px';
}
