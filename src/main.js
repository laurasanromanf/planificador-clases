import confetti from 'canvas-confetti';
import { calcularPeso, obtenerFechaActual } from './utils.js';

const formulario = document.querySelector('#form-planificador');
const lista = document.querySelector('#lista-planificaciones');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const descripcion = document.querySelector('#descripcion').value.trim();
  const minutos = parseInt(document.querySelector('#minutos').value, 10);

  if (!descripcion || isNaN(minutos) || minutos <= 0) return;

  const dificultad = calcularPeso(minutos);
  const fechaHora = obtenerFechaActual();

  const li = document.createElement('li');
  li.textContent = `${descripcion} - ${fechaHora} - ${minutos} min - Dificultad: ${dificultad}`;
  lista.appendChild(li);

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  formulario.reset();
});