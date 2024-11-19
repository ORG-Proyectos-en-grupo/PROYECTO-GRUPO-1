function validateAndRedirect() {
  const form = document.getElementById('loginForm');

  // Inicializar Parsley en el formulario
  $(form).parsley().validate();

  // Verificar si el formulario es válido
  if ($(form).parsley().isValid()) {
      // Redirigir si todo está correcto
      window.location.href = 'main2.html'; // Cambia esto por tu URL
  } else {
      // Mostrar un mensaje si no es válido
      alert('Por favor, complete todos los campos correctamente antes de continuar.');
  }
}

// Opcional: Mostrar el modal al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  const modalElement = document.getElementById('exampleModal');
  if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
  }
});

  