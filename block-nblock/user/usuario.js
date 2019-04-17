function getuser(id) {
    const start = new Date().getTime()
    while (new Date().getTime() - start <= 3000) {
        // esperando
    }

    return {
        id,
        nombre: `Usuario ${id}`
    };
}

function getUsuario(id, callback) {
    let user = {
        id,
        nombre: `Usuario ${id}`
    };
}