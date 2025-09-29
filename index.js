/*

    // While-Loop
    - executes the code block until a given condition is satisfied


    // WHILE-LOOP Examples

    let myNum = Math.floor(Math.random() * 10);
    let input = prompt('Guess my number: ');

    while (input != myNum) {

        let isWrong = input != myNum;
        let isRight = input == myNum;
        if (isRight) {
            break;

        } else if (isWrong) {

            alert('Wrong guess');
            input = prompt('Guess my number: ');
        }
    }

    alert('Correct!');


    // Slot Machine Game

    console.log(`****** SLOT MACHINE GAME ******`);
    console.log(' '.repeat(10));


    let options = ['*', '&', '#']
    let rollCounter = 0;

    isRunning = true;

    while (isRunning) {
        let char1 = options[Math.floor(Math.random() * 3)];
        let char2 = options[Math.floor(Math.random() * 3)];
        let char3 = options[Math.floor(Math.random() * 3)];

        if (char1 != char2 || char2 != char3 || char3 != char1) {
            rollCounter++;
            console.log(`|  ${char1}  |  ${char2}  |  ${char3}  |`);
            console.log('You lose');
            console.log('Rerolling...');
            console.log(' '.repeat(10));

        } else {
            console.log('You win');
            console.log(`|  ${char1}  |  ${char2}  |  ${char3}  |`);
            console.log(' '.repeat(10));
            console.log(`Number of rolls: ${rollCounter}`);
            isRunning = false;
        }
    }

    let num = 0;

    while (num < 10) {
        console.log(`My value is currently: ${num}`);
        num++; // 10
    }

    console.log(`I am now ${num}`);

    let evenNumArr = [];

    while (evenNumArr.length < 10) {
        let arrElem = prompt('Enter an array element: ');
        evenNumArr.push(arrElem);
    }

    console.log(`I now have ${evenNumArr.length} elements.`);
    console.log(`Array: ${evenNumArr}`);

    // DO-WHILE LOOP
    - executes the code block before checking the condition to satisfy


    let num = 1;

    do {
        num *= 2;
        console.log(num);

    } while(num < 50);

    console.log(`${num} is now greater than 50`);

*/

// 1. BASIC COUNTING
// console.log("=== 1. Count from 1 to 5 ===");
// let count = 1;
// while (count <= 5) {
//     console.log("Count:", count);
//     count++;
// }

// let num = 1;
// while (num <= 100) {
//     num *= 2;
//     console.log(num);
// }

/*

const emojisFaces = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '🥰'];

const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '.', ',', '!', '?', ';', ':', '"', "'", '-', '_', '(', ')', '[', ']', '{', '}', '+', '-', '*', '/', '=', '<', '>', '%', '^', '&', '|', '~', '$', '€', '£', '¥', '₹', '₽', '₩', '¢', '₦', '₡'];

const newArr = [];
while (newArr.length < 10) {

    const elems = [];
    for (let i = 0; i <= 8; i++) {
        let subElem = randomNumGenerator()
        elems.push(chars[subElem]);
    }

    const finalElement = elems.join('');

    newArr.push(finalElement);
}
console.log(newArr);

let password = newArr.join('');
console.log(password);

function randomNumGenerator() {
    return Math.floor(Math.random() * chars.length) + 1;
}

*/



/*

let myNum = Math.floor(Math.random() * 10);
let input = prompt('Guess my number: ');

while (input != myNum) {

    let isRight = input == myNum;
    let isAlmostRight = myNum - input == 1 || myNum - input == -1 ;
    console.log(isAlmostRight);
    
    if (isRight) {
        break;

    } else {

        if (isAlmostRight) {
            alert(`Close! ${emojisFaces[6]}`);
            input = prompt('Guess my number: ');
            
        } else {
            alert(`Too far! ${emojisFaces[2]}`);
            input = prompt('Guess my number: ');
        }
    }
}

alert(`Correct! ${emojisFaces[11]}`);

*/

// WHILE-LOOP PROBLEMS

/*
1. Sum of Digits (Beginner-Intermediate)
Given a number, calculate the sum of all its digits using a while loop.
Example: 1234 → 1+2+3+4 = 10
*/

    // function sumOfDigits(num) {
    //     let sum = 0;
    //     let str = String(num);
    //     let x = 0;

    //         while (x < str.length) {
    //             sum = sum + Number(str[x]);
    //             x = x + 1;
    //         }

    //         return sum;
    //     }

    // console.log(sumOfDigits(1234));

/*
2. Calculate the factorial of a given number using a while loop.
*/

    // function factorialOf(num) {
    //     let factorial = 1;
    //     let y = 1;

    //         while (y <= num) {
    //             factorial = factorial * y;
    //             y = y + 1;
    //         }

    //     return factorial;
    //     }

    // console.log(factorialOf(5));

/*
3. Generate the first n numbers of the Fibonacci sequence using a while loop.
*/

    // function fibonacci(n) {
    //     let first = 0
    //     let second = 1;
    //     let i = 1;
    //     let sequence = [];

    //         while (i <= n) {
    //             sequence.push(first);
    //             let next = first + second;
    //             first = second;
    //             second = next;
    //             i = i + 1;
    //         }

    //         return sequence;
    //     }

    // console.log(fibonacci(10));


/*
4. Count the number of vowels in a given string using a while loop to iterate through each character.
*/

    // function countVowels(str) {
    //     let vowels = "aeiouAEIOU";
    //     let count = 0;
    //     let i = 0;

    //         while (i < str.length) {
    //             if (vowels.includes(str[i])) {
    //                 count = count + 1;
    //             }
    //             i = i + 1;
    //         }

    //         return count;
    //     }

    // console.log(countVowels("AnselleKristine"));

/*
5. Calculate x^y without using Math.pow(), using a while loop for multiplication.
*/

    // function power(x, y) {
    //     let result = 1;
    //     let i = 1;

    //         while (i <= y) {
    //             result = result * x;
    //             i = i + 1;
    //         }

    //         return result;
    //     }

    // console.log(power(2, 3));


// DO-WHILE LOOP PROBLEMS

/*
6. Keep asking the user to enter a number between 1-100 until they provide valid input. The prompt should appear at least once.
*/

    // let number;

    // do {
    //     number = parseInt(prompt("Enter a number between 1 and 100:"));
    // } while (isNaN(number) || number < 1 || number > 100);

    // alert(`You entered a number within the range: ${number}`);

/*
7. Keep prompting the user to enter a password until they meet certain criteria (minimum length, contains uppercase, etc.). Must ask at least once.
*/

    // let password;

    // do {
    //     password = prompt("Enter your password: ");

    //     let isLongEnough = password.length >= 8;
    //     let hasUppercase = /[A-Z]/.test(password);
    //     let hasNumber = /[0-9]/.test(password);

    //     if (!isLongEnough) {
    //         alert("Password must be at least 8 characters long.");

    //     } else if (!hasUppercase) {
    //         alert("Password must contain at least one uppercase letter.");

    //     } else if (!hasNumber) {
    //         alert("Password must contain at least one number.");
    //     }    

    //     } while (!(password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)));

    // alert("Password accepted");

/*
8. Simulate rolling two dice and keep rolling until you get doubles (same number on both dice). Display each roll and count total attempts.
*/

    // console.log(`****** TWO DICE DOUBLES GAME ******`);
    // console.log(' '.repeat(10));

    // let rollCounter = 0;
    // let isRunning = true;

    // while (isRunning) {
    //     let dice1 = Math.floor(Math.random() * 6) + 1;
    //     let dice2 = Math.floor(Math.random() * 6) + 1;

    //     rollCounter++;
    //     console.log(`Roll ${rollCounter}: Dice1 = ${dice1}, Dice2 = ${dice2}`);

    //     if (dice1 == dice2) {
    //         console.log('You rolled doubles!');
    //         console.log(' '.repeat(10));
    //         console.log(`Total attempts: ${rollCounter}`);
    //         isRunning = false;

    //     } else {
    //         console.log('Not a double. Rolling again...');
    //         console.log(' '.repeat(10));
    //     }
    // }


/*
9. Simulate an ATM pin entry system. Give the user 3 attempts to enter the correct pin. Must prompt at least once, and lock account after 3 failed attempts.
*/

    // let correctPin = "1234";
    // let attemptsLeft = 3;
    // let isLocked = false;

    // while (attemptsLeft > 0 && !isLocked) {
    //     let enteredPin = prompt("Enter your 4-digit PIN: ");
    //     attemptsLeft--;

    //     if (enteredPin == correctPin) {
    //         alert("Correct Pin. Welcome to your account!");
    //         isLocked = true;
    //     } else {
    //         if (attemptsLeft > 0) {
    //             alert(`Incorrect PIN. You have ${attemptsLeft} attempt(s) left.`);
    //         } else {
    //             alert("Your account has been LOCKED.");
    //             isLocked = true;
    //         }
    //     }
    // }


/*
10. Create a temperature converter that shows a menu (Celsius to Fahrenheit, Fahrenheit to Celsius, Exit) and runs until user chooses exit.
*/

    // let choice;

    // do {
    //     choice = prompt(
    //         "Temperature Converter Menu:\n" +
    //         "1. Celsius ➡ Fahrenheit\n" +
    //         "2. Fahrenheit ➡ Celsius\n" +
    //         "3. Exit\n\n" +
    //         "Enter your choice (1-3):"
    //     );

    //     if (choice == "1") {
    //         let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
    //         let fahrenheit = (celsius * 9/5) + 32;
    //         alert(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);

    //     } else if (choice == "2") {
    //         let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
    //         let celsius = (fahrenheit - 32) * 5/9;
    //         alert(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);

    //     } else if (choice == "3") {
    //         alert("Exiting Temperature Converter. Goodbye!");
    //     } else {
    //         alert("Invalid choice. Please enter 1, 2, or 3.");
    //     }
    // } while (choice !== "3");
