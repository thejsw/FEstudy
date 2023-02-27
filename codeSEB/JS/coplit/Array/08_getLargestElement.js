function getLargestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let output = arr[0];
  
    for (let i=1; i<=arr.length-1; i++) {
      if (output < arr[i]) {
        output = arr[i];
      }
    }
  
    return output;
  }
  