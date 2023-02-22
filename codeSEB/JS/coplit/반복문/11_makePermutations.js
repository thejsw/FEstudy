function makePermutations(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 입력: ab
    // 출력: aa,ab,ba,bb
    // 출력: 00,01,10,11
  
    let output = '';
  
    for(let i = 0; i <= str.length-1; i++) {
      for (let j = 0; j <= str.length-1; j++) {
        output += ',';
        output += str[i];
        output += str[j];
      }
    }
    return output.substring(1);
  }
  