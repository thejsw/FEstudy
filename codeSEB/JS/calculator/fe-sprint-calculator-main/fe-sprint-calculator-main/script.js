const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

// let count = '';
// let firstNum = 0;
// let secNum = 0;
// let oper = '';

// function calculate(n1, operator, n2) {
//   let result = 0;
//   // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
//   // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
//   n1 = Number(firstNum);
//   n2 = Number(secNum);
//   operator = oper;
//   if(operator === '+'){
//     result = n1 + n2;
//   }else if(operator === '-'){
//     result = n1 - n2;
//   }else if(operator === '*'){
//     result = n1 * n2;
//   }else if(operator === '/'){
//     result = n1 / n2;
//   }

//   return String(result);
// }


// buttons.addEventListener('click', function (event) {
//   // 버튼을 눌렀을 때 작동하는 함수입니다.
//   const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
//   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//   // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

//   if (target.matches('button')) {
//     // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
//     // 클릭된 HTML 엘리먼트가 button이면
//     if (action === 'number') {
//       // 그리고 버튼의 클레스가 number이면
//       // 아래 코드가 작동됩니다.
//       //console.log('숫자 ' + buttonContent + ' 버튼');
//       if(firstOperend.textContent === '0' ){
//         firstOperend.textContent=buttonContent; 
//         firstNum = firstOperend.textContent;
//       }else {
//         secondOperend.textContent=buttonContent;
//         secNum = secondOperend.textContent;
//       }
//     }

//     if (action === 'operator') {
//       //console.log('연산자 ' + buttonContent + ' 버튼');
//       operator.textContent=buttonContent; 
//       oper = operator.textContent;
//     }

//     if (action === 'decimal') {
//       // console.log('소수점 버튼');
//     }

//     if (action === 'clear') {
//       //console.log('초기화 버튼');
//       firstOperend.textContent = 0;
//       secondOperend.textContent = 0;
//       operator.textContent = '+';
//       calculatedResult.textContent = 0;
//       // firstNum = 0;
//       // secNum = 0;
//       // oper ='';
//     }

//     if (action === 'calculate') {
//       //console.log('계산 버튼');
//       calculatedResult.textContent = calculate(firstNum, oper,secNum);
//     }
//   }
// });


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.


//firstnum = 먼저 입력된 숫자
//operatorForAdvanced = 연산자 정보 
//previousKey = 이전에 클릭한 버튼 내용 저장
//previousNum
const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;
firstNum = '';
function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  n1 = Number(n1);
  n2 = Number(n2);
  if(operator === '+'){
    result = n1 + n2;
  }else if(operator === '-'){
    result = n1 - n2;
  }else if(operator === '*'){
    result = n1 * n2;
  }else if(operator === '/'){
    result = n1 / n2;
  }

  return String(result);
}


buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {   
      if(display.textContent === '0' || previousKey !== 'operator'){
        firstNum += buttonContent;
        display.textContent = firstNum;
        previousKey = firstNum;
        console.log('첫번째'+firstNum + typeof(firstNum));
      } else if(previousKey === 'operator' ){
        display.textContent = '';
        display.textContent += buttonContent;
        console.log('두번째'+display.textContent);
      }
    }
    if (action === 'operator') {
      previousNum = Number(display.textContent);
      console.log(previousNum);
      operatorForAdvanced = buttonContent;
      previousKey = 'operator';
      
    }
    if (action === 'decimal') {
      //.을 넣으면 앞에 0이 붙게 && .은 한번밖에 못쓴다 조건걸기
      
    }
    if (action === 'clear') {
      display.textContent = 0;
      firstNum = '';
      console.log('결과'+firstNum + typeof(firstNum));
      previousKey = 'clear';
    }
    if (action === 'calculate') {
      display.textContent = calculate(firstNum, operatorForAdvanced, Number(display.textContent));
      
      previousKey = 'calculate';
      
    }
  }
});


