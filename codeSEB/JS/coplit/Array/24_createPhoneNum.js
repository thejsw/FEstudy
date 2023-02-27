function createPhoneNumber(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 길이가 8인 경우 > (010) + arr[0]arr[1]arr[2]arr[3] + - + ~
    // 길이가 11인 경우 > (arr[0], arr[1], arr[2]) 
  
    if (arr.length === 8) {
      return `(010)${arr[0]}${arr[1]}${arr[2]}${arr[3]}-${arr[4]}${arr[5]}${arr[6]}${arr[7]}`;
    }
    else if (arr.length === 11) {
      return `(${arr[0]}${arr[1]}${arr[2]})${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
    }
  }
  