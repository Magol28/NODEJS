let empleados = [{
        id: 1,
        nombre: 'miguel'
    },
    {
        id: 2,
        nombre: 'angel'
    },
    {
        id: 3,
        nombre: 'nombre'
    }
]

let salarios = [{
    id: 1,
    salario: 800
}, {
    id: 2,
    salario: 1000
}]



let getEmploye = async(id) => {

        let employeeDB = empleados.find(employee => employee.id === id)
        if (!employeeDB) {

            throw new Error(`no existe el empleado con id ${id}`)
        } else {

            return employeeDB
        }

    }
    // getEmploye(10).then(empleado => {
    //     console.log(empleado);
    // }, (err) => {
    //     console.log(err);
    // })

let getSalary = async(employee) => {

    let employeeS = salarios.find(employeSalary => employee.id === employeSalary.id)

    if (!employeeS) {
        throw new Error('no se encuentra el salario del empleado');
    } else {

        return ({
            nombre: employee.nombre,
            salario: employeeS.salario
        });
    }


}

let info = async(id) => {
    let empleado = await getEmploye(id);
    let salario = await getSalary(empleado)
    return salario;
}
info(1).then(mensaje => {
    console.log(mensaje);
}).catch(error => {
    console.log(error);
})