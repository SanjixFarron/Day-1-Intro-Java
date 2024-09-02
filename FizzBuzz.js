// FizzBuzzUserList = [2,5,3,7,0,15,2,3,9,4,5,2,12,34,65]


// function fizzbuzzcalc(FizzBuzzList){
//     for (let i = 0; i < FizzBuzzList.length; i++) {
//         if (FizzBuzzList[i] % 3 == 0 && FizzBuzzList[i] % 5 == 0){
//             FizzBuzzList[i] = 'FizzBuzz'
//         }
//         else if (FizzBuzzList[i] % 5 ==0){
//             FizzBuzzList[i] = 'Buzz'
//         }
//         else if (FizzBuzzList[i] % 3 == 0){
//             FizzBuzzList[i] = 'Fizz'  
//         }
        
// }
// return FizzBuzzList
// }

// FizzBuzzCompletedList = fizzbuzzcalc(FizzBuzzUserList)
// console.log(FizzBuzzCompletedList)

const FizzBuzzUserList = 15


function fizzbuzzcalc(FizzBuzzList){
    for (let i = 1; i <=FizzBuzzList; i++) {
        if (i% 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz')
        }
        else if (i % 5 ==0){
            console.log('Buzz')
        }
        else if (i % 3 == 0){
            console.log('Fizz')
        }
        else{
            console.log(i)
        }
    }
}

FizzBuzzCompletedList = fizzbuzzcalc(FizzBuzzUserList)
console.log(FizzBuzzCompletedList)

// //list.forEach(eleement => {
//     console.log Element});
// })