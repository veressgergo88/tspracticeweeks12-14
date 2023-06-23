function mostBigThanTen(list: number[]):number | null {
    let i=0
    while(list[i] !== undefined){
        let element = list[i]
        let isWhatWeNeed = 10 < list[i]
        if(isWhatWeNeed){
            return element
        }
    i++
    }
    return null
}

let result1: number | null = mostBigThanTen([6, 7, 11, 12, 23])
let result2: number | null = mostBigThanTen([10, 27, 611, 112, 2])
let result3: number | null = mostBigThanTen([4, 3, 511, 112, 223])
let result4: number | null = mostBigThanTen([1, 2, 9, 112, 2])

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

//Callback function find()
let numbers1: number[] = [1, 2, 5, 11, 23]
let numbers2: number[] = [2, 3, 4, 1, 9]
let strings1: string[] = ["alma", "körte", "barack", "ananász"] 
let strings2: string[] = ["galamb", "föld", "bolond", "béta"]

function find<Type>(list: Type[], seekingFunction:(elem: Type) => boolean  ): Type | null {
    let i=0
    while(list[i] !== undefined){
        let element = list[i]
        let isWhatWeNeed = seekingFunction(element)
        if(isWhatWeNeed){
            return list[i]
        }
    i++
    }
    return null
}

let firstBigThanTen = (number: number): boolean => {
    return number > 10
}

let firstCharA = (word: string): boolean => {
    return word[0] === "a"
}

let firstCharB = (word: string): boolean => {
    return word[0] === "b"
}

let result5 = find(numbers1, firstBigThanTen)
let result6 = find(numbers2, firstBigThanTen)
let result7 = find(strings1, firstCharA)
let result8 = find(strings2, firstCharB)


console.log(result5)
console.log(result6)
console.log(result7)
console.log(result8)

export {}