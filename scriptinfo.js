function mostrarSeccion(seccionId) {

    const secciones = document.querySelectorAll('main > section');
    secciones.forEach(seccion => {
        seccion.classList.remove('visible');
        seccion.classList.add('hidden');
    });

    const seccionActiva = document.getElementById(seccionId);
    seccionActiva.classList.remove('hidden');
    seccionActiva.classList.add('visible');
}
