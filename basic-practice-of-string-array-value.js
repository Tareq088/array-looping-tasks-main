const statement = 'I am Tareq'
console.log(statement)
let splitStatement = statement.split(" ")
console.log(splitStatement)
// let reverse_state = [];
let valueArray = []
for(state of splitStatement){
    console.log(state)
    valueArray.push(state)
    // reverse_state.unshift(state);
}
console.log(valueArray)

let reverseString = valueArray.join(" ")
console.log(reverseString)

// console.log(reverse_state)
// let final_reverse = reverse_state.join(" ")
// console.log(final_reverse)