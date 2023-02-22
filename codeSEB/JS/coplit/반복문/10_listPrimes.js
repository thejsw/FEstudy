function listPrimes(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 입력: 17
    // 출력: 2-3-5-7-11-13
  
    let output = '2-';
  
    for (let i = 3; i <= num; i++) {
      for (let j = 2; j <= i; j++) {
        if (j == i) {
          output += String(j);
          output += '-';
        }
        if (i % j === 0) {
          break;
        }
      }
  }
    return output.substring(0, output.length-1);
  }