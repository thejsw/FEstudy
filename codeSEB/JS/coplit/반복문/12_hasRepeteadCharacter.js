function hasRepeatedCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    if (str === '') {
      return false;
    }
  
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (i !== j) {
          if (str[i] === str[j]) {
            return true
          }
        }
      }
    }
  
    return false;
  }
  