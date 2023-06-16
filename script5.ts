//User

type User = {
    id: number
    userName: string
    passWord: string
  }

  let users: User[] = [
    { id: 128, userName: "Joco", passWord: "Kicsimicsi125" },
    { id: 230, userName: "Feri", passWord: "Golamolusz225" },
    { id: 666, userName: "The_Devil", passWord: "Luciferidelivery45" },
  ]

function discordFilter(usersArr: User[]):string[]{
    let result:string[] = []

    let index = 0
    while (usersArr[index] !== undefined) {
        result = [...result, usersArr[index].userName + "#" + usersArr[index].id]
        index += 1
    }
  return result
}

let result1: string[] = discordFilter(users)

console.log(result1)

//Account

type Account = {
    id: number
    balance: number
    isActive: boolean
  }

  let accounts: Account[] = [
    { id: 128, balance: 100000, isActive: true },
    { id: 230, balance: 2500000, isActive: false },
    { id: 666, balance: 53400, isActive: true },
  ]

function accountFilter(accountsArr: Account[]):number[]{
    let result:number[] = []

    let index = 0
    while (accountsArr[index] !== undefined) {
        result = [...result, accountsArr[index].balance]
        index += 1
    }
  return result
}


let result2: number[] = accountFilter(accounts)

console.log(result2)

//Callback Function

function convert<InputType, OutputType>(list: InputType[], pushFunction: (elem: InputType) => OutputType): OutputType[] {
    let result: OutputType[] = []
  
    let index = 0
    while (list[index] !== undefined) {
      let element = list[index]
      result = [ ...result, pushFunction(element) ]
      index += 1
    }
  
    return result
  }

  let result3 = convert(users, user => user.userName + "#" + user.id)
  console.log(result3)

  let result4 = convert(accounts, account => account.balance)
  console.log(result4)


export{}