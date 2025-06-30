/*
   ДЗ 5.4. Просте число чи ні
   Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
*/

const inputNumber = prompt("Введіть ціле число:");

if (inputNumber !== null && inputNumber.trim() && Number.isInteger(+inputNumber) && +inputNumber > 1) {
  let isPrimeNumber = true;
  const number = +inputNumber;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrimeNumber = false;
      break;
    }
  }
  console.log(isPrimeNumber ? number + " — просте число" : number + " — не просте число");
} else {
  console.log("Помилка: потрібно вводити ціле та додатне ціле число більше 1!");
}
