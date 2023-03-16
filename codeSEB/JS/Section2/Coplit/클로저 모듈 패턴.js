function makeCounter() {
    let value = 0;
    return {
      increase: function() {
        value++;
      },
      decrease: function() {
        value--;
      },
      getValue: function() {
        return value;
      }
    }
  }
  
  let counter1 = makeCounter()
  counter1.increase()
  counter1.getValue() // 1
  
  let counter2 = makeCounter()
  counter2.decrease()
  counter2.decrease()
  counter2.getValue() // -2