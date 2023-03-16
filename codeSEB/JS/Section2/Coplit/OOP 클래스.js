class Counter {
    constructor() {
      this.value = 0; // 생성자 호출을 할 경우, this는 new 키워드로 생성한 Counter의 인스턴스입니다
      this.adnl = 'dlahld'
    }
    increase() {
      this.value++
    }
    decrease() {
      this.value--
    }
    getValue() {
      return this.value
    }
    adnl() {
      return this.adnl
    }
  }
  
  let counter1 = new Counter() // 생성자 호출
  counter1.increase()
  counter1.getValue() // 1
  counter1.adnl()