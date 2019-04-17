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

let getEmploye = (id, callback) => {
        let employeeDB = empleados.find(employee => employee.id === id)
        if (!employeeDB) {
            callback(`no existe el empleado con id ${id}`)
        } else {
            callback(null, employeeDB)

        }
    }
    // getEmploye(1, (err, employee) => {

//     if (err) {
//         console.log(err);;
//     }
//     console.log(employee);



// });

let getSalary = (employee, callback) => {
    let employeeS = salarios.find(employeSalary => employee.id === employeSalary.id)

    if (!employeeS) {
        callback('no se encuentra el salario del empleado');
    } else {

        callback(null, {
            nombre: employee.nombre,
            salario: employeeS.salario
        });
    }
}

getSalary(empleados[2], (err, employee) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(employee);
})