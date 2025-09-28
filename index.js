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

/*
2. Calculate the factorial of a given number using a while loop.
*/

/*
3. Generate the first n numbers of the Fibonacci sequence using a while loop.
*/

/*
4. Count the number of vowels in a given string using a while loop to iterate through each character.
*/

/*
5. Calculate x^y without using Math.pow(), using a while loop for multiplication.
*/


// DO-WHILE LOOP PROBLEMS

/*
6. Keep asking the user to enter a number between 1-100 until they provide valid input. The prompt should appear at least once.
*/

/*
7. Keep prompting the user to enter a password until they meet certain criteria (minimum length, contains uppercase, etc.). Must ask at least once.
*/

/*
8. Simulate rolling two dice and keep rolling until you get doubles (same number on both dice). Display each roll and count total attempts.
*/

/*
9. Simulate an ATM pin entry system. Give the user 3 attempts to enter the correct pin. Must prompt at least once, and lock account after 3 failed attempts.
*/

/*
10. Create a temperature converter that shows a menu (Celsius to Fahrenheit, Fahrenheit to Celsius, Exit) and runs until user chooses exit.
*/