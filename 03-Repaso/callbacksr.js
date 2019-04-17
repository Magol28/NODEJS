let obtenerNombre = () => {
    return new Promise((resolve, reject) => {
        resolve('miguel');
    })
}

let salud = async() => {
    let saludar = await obtenerNombre();
    console.log(`hola ${saludar}`);
}

salud();