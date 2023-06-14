function beginB(stringArray:string[]):string[]{
    let result: string[] = []
    let i = 0
    while(stringArray[i] !== undefined){
        let word = stringArray[i]
        if(word[0] === "b"){
            result = [...result, word]
        }
        i++
    }
    return result
}

let result1:string[] = beginB(["hello", "nyaralás", "baba", "beteg", "bolond", "galamb"])
let result2:string[] = beginB(["béke", "hologram", "buta", "kiváncsi"])
let result3:string[] = beginB(["fullad", "farolás", "alma", "béta", "bokor"])
let result4:string[] = beginB(["nyavalyás", "nyamvadt", "béka", "bárány", "butus", "tészta"])

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)