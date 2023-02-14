// DOM Tree 호출
document.documentElement
document.body;
document.body.style;
document.body.style.opacity = '0';

// Tag name(getElementsByName)으로 DOM TREE 호출 (HTMLCollection)
let divList = document.getElementsByName('div');
console.log(divList);

// DOM TREE 호출을 for문으로 응용한 예제
let pList = document.getElementsByTagName('p');

for(p of pList){
    p.style.fontSize = '30px';
}

// querySelectorAll 사용 (NodeList)
let spanList = document.querySelectorAll('span');

for(span of spanList){
    span.style.fontSize = '30px';
}

// 부모노드, 자식노드
document.parentNode
document.childNodes
document.parentElement
document.childElementCount

divList.firstChild;
divList.lastChild;
divList.firstElementChild;
divList.lastElementChild;
divList.previousSibling;
divList.nextSibling;
divList.previousElementSibling;
divList.nextElementSibling;

// 노드 활용
p1.nodeName;
p1.nodeType;
p1.nodeValue;