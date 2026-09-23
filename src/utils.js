export function calcularPeso(minutos) {
  if (minutos < 10) return 'Baja';
  if (minutos <= 29) return 'Media';
  return 'Alta';
}

export function obtenerFechaActual() {
  const ahora = new Date();
  const dia = String(ahora.getDate()).padStart(2, '0');
  const mes = String(ahora.getMonth() + 1).padStart(2, '0');
  const anio = ahora.getFullYear();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
}