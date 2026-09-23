import confetti from 'canvas-confetti';
import { calcularPeso, obtenerFechaActual } from './utils.js';

const formulario = document.querySelector('#form-planificador');
const listaPlanificaciones = document.querySelector('#lista-planificaciones');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const descripcion = document.querySelector('#descripcion').value.trim();
  const minutosInput = document.querySelector('#minutos').value;
  const minutos = parseInt(minutosInput, 10);

  if (!descripcion || isNaN(minutos) || minutos <= 0) return;

  const dificultad = calcularPeso(minutos);
  const fechaHora = obtenerFechaActual();

  // Clase CSS dinámica según la dificultad (baja, media, alta)
  const claseBadge = `badge-${dificultad.toLowerCase()}`;

  // Crear elemento en la lista estructurado
  const li = document.createElement('li');
  li.innerHTML = `
    <div>
      <strong>${descripcion}</strong>
      <div style="font-size: 0.8rem; color: #6b7280; margin-top: 2px;">
        📅 ${fechaHora} | ⏱️ ${minutos} min
      </div>
    </div>
    <span class="badge ${claseBadge}">Dificultad: ${dificultad}</span>
  `;

  listaPlanificaciones.appendChild(li);

  // Animación de confeti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  formulario.reset();
});