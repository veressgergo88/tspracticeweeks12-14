type Person = {
    name: string,
    age: number,
    gender: "male" | "female"
}

let people1: Person[] = [
    {
      name: "John Wick",
      age: 55,
      gender: "male"
    },
    {
      name: "Obi-Wan Kenobi",
      age: 64,
      gender: "male"
    },
    {
      name: "Princess Amidala",
      age: 25,
      gender: "female"
    },
  ];
  
  let people2: Person[] = [
    {
      name: "Kovács Béla",
      age: 44,
      gender: "male"
    },
    {
      name: "Kiss Petra",
      age: 15,
      gender: "female"
    },
    {
      name: "Ferenc József",
      age: 102,
      gender: "male"
    },
  ];
  
  let people3: Person[] = [
    {
      name: "Margitka",
      age: 13,
      gender: "female"
    },
    {
      name: "Peter Parker",
      age: 72,
      gender: "male"
    },
    {
      name: "Franciska",
      age: 25,
      gender: "female"
    },
  ];

function getFilterGender(persons: Person[], filter:string):Person[] {
    let result:Person[] = []
    
    let index = 0
    while(persons[index] !== undefined){
        let person = persons[index]
        
        if (person.gender === filter){
            result = [...result, person]
        }
        index += 1
    }
    return result
}

let result1: Person[] = getFilterGender(people1, "female")
let result2: Person[] = getFilterGender(people2, "female")
let result3: Person[] = getFilterGender(people3, "female")

console.log(result1)
console.log(result2)
console.log(result3)



export {}