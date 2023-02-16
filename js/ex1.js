function calc() {
    let num1 = prompt('Enter the first number')
    let num2 = prompt('Enter the second number')
    let math = prompt('Enter the operation (+, -, *, /)')

    num1 = Number(num1)
    num2 = Number(num2)

    let result;
    switch (math) {
        case "+":
          result = number1 + number2;
          break;
        case "-":
          result = number1 - number2;
          break;
        case "*":
          result = number1 * number2;
          break;
        case "/":
          result = number1 / number2;
          break;
        default:
          result = "Invalid operation";
      }
      console.log(number1 + " " + math + " " + number2 + " = " + result);
}