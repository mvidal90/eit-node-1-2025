
import colors from "colors"
import prompt from "prompt-sync"

const promptFunc = prompt()

console.log(colors.cyan("Bienvenido a la calculadora en NodeJS!"))

// const num1 = promptFunc(colors.bgMagenta("Ingrese el primer número"))
// const operation = promptFunc(colors.magenta("Ingrese la operación a realizar (+ - * /)"))
// const num2 = promptFunc(colors.bgMagenta("Ingrese el segundo número"))

// let result;

// switch (operation) {
//     case "+":
//         result = parseInt(num1) + parseInt(num2)
//         break;
//     case "-":
//         result = parseInt(num1) - parseInt(num2)
//         break;
//     case "*":
//         result = parseInt(num1) * parseInt(num2)
//         break;
//     case "/":
//         result = nuparseInt(num1) / parseInt(num2)
//         break;

//     default:
//         result = "Err"
//         break;
// }

// console.log(colors.green("El resultado es: " + result))

const array = ["+"];

let value

do {
    if (
        array[array.length - 1] === "+" ||
        array[array.length - 1] === "-" ||
        array[array.length - 1] === "*" ||
        array[array.length - 1] === "/" 
    ) {
        do {
            value = promptFunc(colors.bgMagenta("Ingrese un número: "))
        } while (isNaN(parseInt(value)));
    } else {
        do {
            value = promptFunc(colors.magenta("Ingrese una operación (+ - * / =): "))
        } while (
            value !== "+" &&
            value !== "-" &&
            value !== "*" &&
            value !== "/" &&
            value !== "="
        );
    }
    if (value !== "=") {
        array.push(value)
    }
} while (value !== "=");

// [ 12, "+", 345, "-", 4, "*"]

const result = array.reduce(
    (acc, val, index, arr) => {
        switch (val) {
            case "+":
                return acc + parseInt(arr[index + 1])
            case "-":
                return acc - parseInt(arr[index + 1])
            case "*":
                return acc * parseInt(arr[index + 1])
            case "/":
                return acc / parseInt(arr[index + 1])
        
            default:
                return acc;
        }
    }, 0
)

console.log(colors.green("El resultado es: " + result))

// console.log(eval(" 4 + 3 "))