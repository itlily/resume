interface UserInterface {
  name: string
  email: string
  age: number
}
class User implements UserInterface {
  name: string
  email: string
  age: number

  constructor ( name: string, email: string, age: number) {
    this.name = name
    this.email  =  email
    this.age = age
  }
}

let lily: User = new User('李孝香','lily-626@163.com',31)
console.log(lily)