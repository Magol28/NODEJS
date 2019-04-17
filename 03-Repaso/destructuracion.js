let persona = {
    nombre: 'miguel',
    apellido: 'guaño',

    getName: function() {
        return `el nombre es: ${this.nombre}`;
    }
}

// console.log(persona.getName());

// let nombre = persona.nombre;
// let apellido = persona.apellido;

let { nombre, apellido } = persona;
console.log(nombre);