function getFoodRecipe (foodName) {
  let ingredient1, ingredient2;
  return `${ingredient1} + ${ingredient2} = ${foodName}!`;
}

console.log(ingredient1); // ReferenceError: ingredient1 is not defined (함수 내부에 선언한 변수에 접근 불가)
console.log(foodName); // ReferenceError: foodName is not defined (매개변수에 접근 불가)