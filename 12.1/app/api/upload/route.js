import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { uploadToS3 } from '@/lib/s3';
import { analyzeImage } from '@/lib/groq';
import { getDb } from '@/lib/db';

export const maxDuration = 60;

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('image');

    if (!file || !file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Archivo no válido. Solo se aceptan imágenes.' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = buffer.toString('base64');

    // Analizar con Groq antes de subir
    const objects = await analyzeImage(base64, file.type);

    // Renombrar con UUID preservando la extensión
    const ext = file.name.split('.').pop().toLowerCase();
    const uuidName = `${uuidv4()}.${ext}`;

    // Subir a Filebase/S3
    const url = await uploadToS3(buffer, uuidName, file.type);

    // Guardar en MongoDB
    const db = await getDb();
    const doc = {
      name: uuidName,
      originalName: file.name,
      url,
      objects,
      createdAt: new Date(),
    };
    const result = await db.collection('images').insertOne(doc);

    return NextResponse.json({ success: true, image: { ...doc, _id: result.insertedId } });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
