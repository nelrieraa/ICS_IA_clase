import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';

    const db = await getDb();
    let query = {};

    if (search.trim()) {
      // Separar por comas y filtrar vacíos
      const terms = search
        .split(',')
        .map((t) => t.trim().toLowerCase())
        .filter(Boolean);

      if (terms.length > 0) {
        // OR: mostrar imágenes que contengan CUALQUIERA de los términos buscados
        query = {
          objects: {
            $in: terms.map((t) => new RegExp(t, 'i')),
          },
        };
      }
    }

    const images = await db
      .collection('images')
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Images fetch error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
