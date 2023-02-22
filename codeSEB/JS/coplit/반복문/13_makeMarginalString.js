function makeMarginalString(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 입력: abc
    // 출력: a|ab|abc
    // 출력: 0|01|012
  
    let output = '';
  
    for (let i = 0; i <= str.length - 1; i++){
      for (let j = 0; j <= i; j++) {
        output += str[j]
      }
    }
    return output;
  }
  