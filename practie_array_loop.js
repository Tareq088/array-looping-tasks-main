// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
                        // way 1: reverse()
// console.log(colors.reverse())
                        // way-2 :Unshift
const reverse_colors = [];
// for (const color of colors){
//     reverse_colors.unshift(color)
// }
// console.log(reverse_colors)
                            // way-3: push
for(i=colors.length-1; i>=0; i--){
    reverse_colors.push(colors[i])
}
console.log(reverse_colors)

                                // ### Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumber = [];
for (number of numbers){
    if(number%2 === 0){
        evenNumber.push(number)
    }
}
console.log(evenNumber)

                                    // ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.
let numbersArray = ['Tom', 'Tim', 'Tin', 'Tik']
let combine="";
for(num of numbersArray){
    combine = combine + num
}
console.log(combine)

                                // ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output


const statement = 'I am a hard working person'