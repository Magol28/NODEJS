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

let getEmploye = (id) => {

        return new Promise((resolve, reject) => {
            let employeeDB = empleados.find(employee => employee.id === id)
            if (!employeeDB) {

                reject(`no existe el empleado con id ${id}`)
            } else {

                resolve(employeeDB)
            }
        })
    }
    // getEmploye(10).then(empleado => {
    //     console.log(empleado);
    // }, (err) => {
    //     console.log(err);
    // })

let getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let employeeS = salarios.find(employeSalary => employee.id === employeSalary.id)

        if (!employeeS) {
            reject('no se encuentra el salario del empleado');
        } else {

            resolve({
                nombre: employee.nombre,
                salario: employeeS.salario
            });
        }
    })

}
getEmploye(3).then(empleado => {
        return getSalary(empleado);
    }).then(empleado => {
        console.log(empleado);
    })
    .catch(err => {
        console.log(err);
    })