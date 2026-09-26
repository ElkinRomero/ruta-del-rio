(() => {
  'use strict';
  const form = document.getElementById('formInscripcion');
  const rango = document.getElementById('personas');
  const rangoValor = document.getElementById('personasValor');
  const modalExito = new bootstrap.Modal(document.getElementById('modalExito'));

  // Fecha mínima de la excursión: hoy
  document.getElementById('fecha').min = new Date().toISOString().split('T')[0];

  // Muestra el valor del rango en vivo
  rango.addEventListener('input', () => rangoValor.textContent = rango.value);

  // Validación visual de Bootstrap y mensaje de éxito
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      form.querySelector(':invalid').focus();
      return;
    }

    // Se guardan los datos antes de limpiar el formulario
    const recorrido = document.getElementById('recorrido');
    const [anio, mes, dia] = document.getElementById('fecha').value.split('-');
    document.getElementById('resNombre').textContent = document.getElementById('nombre').value.trim();
    document.getElementById('resRecorrido').textContent = recorrido.options[recorrido.selectedIndex].text;
    document.getElementById('resFecha').textContent = `${dia}/${mes}/${anio}`;
    document.getElementById('resPersonas').textContent = rango.value;
    document.getElementById('resCorreo').textContent = document.getElementById('correo').value.trim();

    modalExito.show();
    form.reset();
    form.classList.remove('was-validated');
    rangoValor.textContent = rango.value;
  });

  // Al limpiar, se quita el estado de validación
  form.addEventListener('reset', () => {
    form.classList.remove('was-validated');
    setTimeout(() => rangoValor.textContent = rango.value);
  });
})();
