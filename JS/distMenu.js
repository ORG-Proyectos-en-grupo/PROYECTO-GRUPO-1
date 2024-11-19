function fmenu(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido de la página cargada en el contenedor
            document.getElementById('cuerpoPag').innerHTML = data;

            // Configurar Parsley en el formulario de registro cargado dinámicamente
            const registroForm = document.getElementById('registroForm');
            if (registroForm) {
                $(registroForm).parsley({ trigger: 'input' });

                registroForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    if ($(registroForm).parsley().isValid()) {
                        alert('Formulario de registro enviado con éxito.');
                        registroForm.reset();
                        $(registroForm).parsley().reset();
                    } else {
                        alert('Por favor, complete todos los campos correctamente en el registro.');
                    }
                });

                $('input, select').on('input', function () {
                    $(this).parsley().validate();
                });
            } else {
                console.error('El formulario de registro no se encontró en la página cargada.');
            }

            // Configurar Parsley en el formulario de inicio de sesión cargado dinámicamente
            const loginForm = document.getElementById('loginForm');
            if (loginForm) {
                $(loginForm).parsley({ trigger: 'input' });

                loginForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    if ($(loginForm).parsley().isValid()) {
                        alert('Inicio de sesión exitoso.');
                        loginForm.reset();
                        $(loginForm).parsley().reset();
                    } else {
                        alert('Por favor, complete todos los campos correctamente en el inicio de sesión.');
                    }
                });

                // Validación en tiempo real para los campos del formulario de inicio de sesión
                $('#loginForm input').on('input', function () {
                    $(this).parsley().validate();
                });
            } else {
                console.error('El formulario de inicio de sesión no se encontró en la página cargada.');
            }

            // Mostrar el modal cargado dinámicamente
            const modalElement = document.getElementById('exampleModal');
            if (modalElement) {
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
            } else {
                console.error('El modal no se encontró en la página cargada.');
            }
        })
        .catch(error => console.error('Error al cargar la página:', error));
}
