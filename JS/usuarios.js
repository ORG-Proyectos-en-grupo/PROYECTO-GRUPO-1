
let usuarios = [];


function agregarUsuario(nombres, apellidos, correo, clave) {
    const nuevoUsuario = {
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        clave: clave
    };
    usuarios.push(nuevoUsuario);
    console.log('Usuario agregado:', nuevoUsuario);
}
function actualizarListaUsuarios() {
    const listaUsuarios = $('#listaUsuarios');
    listaUsuarios.empty(); 

    usuarios.forEach(function(usuario) {
        listaUsuarios.append(`<li>${usuario.nombres} ${usuario.apellidos} - ${usuario.correo}</li>`);
    });
}

// Llamar a la función de actualización de la lista después de agregar un usuario
agregarUsuario(nombres, apellidos, correo, clave);
actualizarListaUsuarios();