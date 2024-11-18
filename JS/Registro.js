
$(document).ready(function () {
   
    $('#registroForm').parsley();
  

    $('#registroForm').on('submit', function (e) {
      e.preventDefault(); 
  
      
      if ($(this).parsley().isValid()) {
      
        const datos = {
          nombre: $('#nombre').val(),
          apellido: $('#apellido').val(),
          correo: $('#correo').val(),
          clave: $('#clave').val()
        };
  
        console.log('Formulario enviado con éxito:', datos);

      } else {
        console.log('Formulario no válido');
      }
    });
  
    // Resetear validaciones al cerrar el modal
    $('#registroModal').on('hidden.bs.modal', function () {
      $('#registroForm')[0].reset(); // Resetear los campos
      $('#registroForm').parsley().reset(); 
    });
  });
  