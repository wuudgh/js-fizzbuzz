// TODO: Write your function in this file
const arrays =["Fizz", "Buzz", "FizzBuzz", "NotDevisible"]


function divisible (lower, upper){
    const newArray = []

    for (let i = lower; i <= upper; i++){
        
        if( i % 3 === 0 && i % 5 === 0){
            return newArray.push(arrays[2] )
        }
        else if( i % 3 === 0){
            return newArray.push(arrays[0]) 
        }
        else if( i % 5 === 0){
            return newArray.push(arrays[1]) 
        }
        else {
            return newArray.push(i)
        }
          
    }
    return newArray;
    
}

// TODO: Change undefined below to the name of your function
module.exports = divisible
