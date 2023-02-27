function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    // arr 생성, arr[0] = 0, arr[1] = 1
    // for 문 > arr.push(arr[i-2] + arr[i-1])
    if (num === 0) {
      return [0];
    }
  
    let arr = [0, 1];
  
    for (let i=2; i<=num; i++) {
      arr.push(arr[i-2] + arr[i-1]);
    }
  
    return arr;
  }
  