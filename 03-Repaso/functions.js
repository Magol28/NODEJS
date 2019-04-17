// function sumar(a, b) {
//     return a + b;
// }


// let sumar = (a, b) => a + b;

// function saludar() {
//     return 'hola mundo';
// }

let saludar = () => 'hola mundo';

// console.log(sumar(10, 20));
console.log(saludar());

let persona = {
    nombre: 'miguel',
    apellido: 'guaño',

    getName: () => `el nombre es: ${this.nombre}`

}


let { nombre, apellido } = persona;
console.log(persona.getName());