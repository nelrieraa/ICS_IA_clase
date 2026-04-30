'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import pool from '@/lib/db';

export async function crearReceta(prevState, formData) {
  const titulo = formData.get('titulo')?.toString().trim();
  const descripcion_corta = formData.get('descripcion_corta')?.toString().trim();
  const ingredientes = formData.get('ingredientes')?.toString().trim();
  const instrucciones = formData.get('instrucciones')?.toString().trim();
  const tiempo_coccion = formData.get('tiempo_coccion')?.toString().trim();

  if (!titulo || !descripcion_corta || !ingredientes || !instrucciones || !tiempo_coccion) {
    return { error: 'Todos los campos son obligatorios.' };
  }

  const tiempoNum = parseInt(tiempo_coccion, 10);
  if (isNaN(tiempoNum) || tiempoNum <= 0) {
    return { error: 'El tiempo de cocción debe ser un número positivo.' };
  }

  const [result] = await pool.execute(
    'INSERT INTO recetas (titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion) VALUES (?, ?, ?, ?, ?)',
    [titulo, descripcion_corta, ingredientes, instrucciones, tiempoNum]
  );

  redirect(`/recetas/${result.insertId}`);
}

export async function editarReceta(id, prevState, formData) {
  const titulo = formData.get('titulo')?.toString().trim();
  const descripcion_corta = formData.get('descripcion_corta')?.toString().trim();
  const ingredientes = formData.get('ingredientes')?.toString().trim();
  const instrucciones = formData.get('instrucciones')?.toString().trim();
  const tiempo_coccion = formData.get('tiempo_coccion')?.toString().trim();

  if (!titulo || !descripcion_corta || !ingredientes || !instrucciones || !tiempo_coccion) {
    return { error: 'Todos los campos son obligatorios.' };
  }

  const tiempoNum = parseInt(tiempo_coccion, 10);
  if (isNaN(tiempoNum) || tiempoNum <= 0) {
    return { error: 'El tiempo de cocción debe ser un número positivo.' };
  }

  await pool.execute(
    'UPDATE recetas SET titulo=?, descripcion_corta=?, ingredientes=?, instrucciones=?, tiempo_coccion=? WHERE id=?',
    [titulo, descripcion_corta, ingredientes, instrucciones, tiempoNum, id]
  );

  revalidatePath(`/recetas/${id}`);
  revalidatePath('/');
  redirect(`/recetas/${id}`);
}

export async function borrarReceta(id) {
  await pool.execute('DELETE FROM recetas WHERE id=?', [id]);
  revalidatePath('/');
  redirect('/');
}

export async function agregarComentario(recetaId, prevState, formData) {
  const autor = formData.get('autor')?.toString().trim();
  const texto = formData.get('texto')?.toString().trim();

  if (!autor || !texto) {
    return { error: 'El nombre y el comentario son obligatorios.' };
  }

  await pool.execute(
    'INSERT INTO comentarios (receta_id, autor, texto) VALUES (?, ?, ?)',
    [recetaId, autor, texto]
  );

  revalidatePath(`/recetas/${recetaId}`);
  return { success: true };
}
