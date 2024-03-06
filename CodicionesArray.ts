let lista: string[] = ["Riohacha", "Allenmar", "Jairo", "Jose", "Carro", "TXL"];
console.log(lista);

let numbers: number[] = [1,2,3,4,5];
console.log(numbers);

let segundoLista: string = lista[2];
console.log(segundoLista)

lista[2]="Allenmar Sierra"
console.log(lista[2])

lista.push("Uniguajira");
console.log(lista);

lista.pop();
console.log(lista);

lista.unshift("Desarrollo")
console.log(lista);

lista.shift()
console.log(lista);

lista.splice(0,2)
console.log(lista);

lista.splice(1,0,'Base de Datos'); 
console.log(lista);


let a = ['1', '2', '3'];
let b = ['4', '5', '6'];
a.push.apply(a, b);
console.log(a)
