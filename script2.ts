function maxNumber(numberArray:number[]):number[]{
    let result:number[] = []
    
    let i = 0
    let moreThanTen = 0
    while(numberArray[i] !== undefined){
        if(numberArray[i] > 10){
            moreThanTen = numberArray[i]
            result = [...result, moreThanTen]
        }
        i++
    }
  return result
}

let result1:number[] = maxNumber([10,32,55,66,102])
let result2:number[] = maxNumber([234, 1000, 24, 85, 133])
let result3:number[] = maxNumber([36,89,100,444,521])
let result4:number[] = maxNumber([104,90,77,5000])

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)



export{}