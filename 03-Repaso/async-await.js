// let getNombre = async() => {
//     // undefined.name

//     throw new Error('no hay usuario')
//     return 'miguel';
// }

let getNombre = () => {
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            resolve('miguel')
        }, 3000);

    })
}

let saludo = async() => {
    let nombre = await getNombre();
    return 'hola ' + nombre;
}
getNombre().then(nombre => {
        console.log(nombre);
    }).catch(err => {
        console.log(err);
    })
    // saludo().then(mensaje => {
    //     console.log(mensaje);
    // })