//A számok nagyobb-e 5-nél
function biggerThanFive(list: number[]):boolean {
    let i=0
    while(list[i] !== undefined){
        if(list[i] < 5){
            return false
        }
        i++
    }
    return true
}

let result1: boolean = biggerThanFive([6, 7, 11, 12, 23])
let result2: boolean = biggerThanFive([16, 27, 611, 112, 2])
let result3: boolean = biggerThanFive([60, 72, 511, 112, 223])
let result4: boolean = biggerThanFive([16, 2, 611, 112, 2])

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

//K betűvel kezdődnek-e a szavak
function beginK(list: string[]):boolean {
    let i=0
    while(list[i] !== undefined){
        let word = list[i]
        if(word[0] !== "k"){
            return false
        }
        i++
    }
    return true
}

let result5: boolean = beginK(["kedves", "kölyök", "katona", "kalap"])
let result6: boolean = beginK(["kikapcsol", "köcsög", "bolond", "kettes"])
let result7: boolean = beginK(["gurul", "galamb", "fordul", "lebeg"])
let result8: boolean = beginK(["kínai", "kötöz", "kalap", "kutya"])

console.log(result5)
console.log(result6)
console.log(result7)
console.log(result8)

//every own method
let numbers1 = [6, 7, 11, 12, 23]
let numbers2 = [16, 27, 611, 112, 2]
let numbers3 = [60, 72, 511, 112, 223]
let numbers4 = [16, 2, 611, 112, 2]

let words1 = ["kedves", "kölyök", "katona", "kalap"]
let words2 = ["kikapcsol", "köcsög", "bolond", "kettes"]
let words3 = ["gurul", "galamb", "fordul", "lebeg"]
let words4 = ["kínai", "kötöz", "kalap", "kutya"]

let every = <InputType>(list: InputType[], validate: (elem: InputType) => boolean): boolean => {
    let i=0
    while(list[i] !== undefined){
        let isValid = validate(list[i])
        if(!isValid){
            return false
        }
        i++
    }
    return true
}

let startsWithK = (word:string):boolean => {
    return word[0] === "k"
}

let isBiggerThan5 = (number:number):boolean => {
    return number > 5
}

let result9 = every(words1, startsWithK)
let result10 = every(numbers1, isBiggerThan5)

console.log(result9)
console.log(result10)

//The every method

let result11 = numbers1.every(number => number > 5)
let result12 = numbers2.every(number => number > 5)
let result13 = numbers3.every(number => number > 5)
let result14 = numbers4.every(number => number > 5)

let result15 = words1.every(word => word[0] === "k")
let result16 = words2.every(word => word[0] === "k")
let result17 = words3.every(word => word[0] === "k")
let result18 = words4.every(word => word[0] === "k")

console.log(result11)
console.log(result12)
console.log(result13)
console.log(result14)
console.log(result15)
console.log(result16)
console.log(result17)
console.log(result18)

export{}