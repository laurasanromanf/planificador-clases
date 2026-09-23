import { describe, it, expect } from 'vitest';
import { calcularPeso } from '../src/utils.js';

describe('Pruebas para calcularPeso', () => {
  it('debe devolver "Baja" para valores menores de 10 minutos', () => {
    expect(calcularPeso(5)).toBe('Baja');
  });

  it('debe devolver "Media" para valores entre 10 y 29 minutos', () => {
    expect(calcularPeso(15)).toBe('Media');
  });

  it('debe devolver "Alta" para valores de 30 minutos o más', () => {
    expect(calcularPeso(45)).toBe('Alta');
  });
});