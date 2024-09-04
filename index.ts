const greet: string = "Hello 13B Haladó nberz!"
let isTrue: boolean;

let age: number = 25

let pwd = document.getElementById("password") as HTMLInputElement

type Osztaly = {
    evfolyam: number,
    betulyel: 'A' | 'B' | 'C' | 'D'
    
}
type Diak = {
    name: string,
    age: number,
    class: Osztaly
}


let Peti: Diak
Peti = {name: "Péter", age: 1, class: {betulyel: 'B', evfolyam: 10} }

console.log(greet);