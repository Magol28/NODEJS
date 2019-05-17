$(document).ready(function() {
    $("#buscar").click(function() {
        $.ajax({
            url: "https://productoapp.herokuapp.com/app/producto/5cdd6c3c17cd730017d82011",
            type: 'GET',
            dataType: 'json',
            success(response) {
                document.getElementById('name').value = response.nombre;
                document.getElementById('price').value = response.precio;
                document.getElementById('description').value = response.descripcion;
            },
            error(jqXHR, status, errorThrown) {
                console.log(jqXHR);
            }
        });

    });
    $("#agregar").click(function() {
        let nombre = document.getElementById('name').value;
        let precio = document.getElementById('price').value;
        let descripcion = document.getElementById('description').value;

        $.ajax({
            url: "https://productoapp.herokuapp.com/app/producto",
            type: 'POST',
            data: JSON.stringify({
                nombre,
                precio,
                descripcion
            }),
            contentType: 'application/json',
            dataType: 'json',
            success(response) {
                console.log("agregado correctamente");
            },
            error(jqXHR, status, errorThrown) {
                console.log(status, jqXHR);
            }
        });
    });
    $("#editar").click(function() {
        let id = document.getElementById('id').value;
        let nombre = document.getElementById('name').value;
        let precio = document.getElementById('price').value;
        let descripcion = document.getElementById('description').value;

        console.log({
            nombre,
            precio,
            descripcion
        });
        $.ajax({
            url: "http://localhost:3000/app/prodcto/" + id,
            type: 'PUT',
            data: JSON.stringify({
                nombre,
                precio,
                descripcion
            }),
            contentType: 'application/json',
            dataType: 'json',
            success(response) {
                console.log("editado correctamente");
            },
            error(jqXHR, status, errorThrown) {
                console.log(status, jqXHR);
            }
        });
    });
});