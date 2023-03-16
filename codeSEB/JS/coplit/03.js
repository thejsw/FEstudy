num = 10

function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    while (num <= 1) { num = num / 2 }
    const output = (num % 2 === 1) ? true : false
    return output
  }
  