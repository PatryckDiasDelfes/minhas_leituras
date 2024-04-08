'use server'

import sql from "@/app/lib/db";

export async function select() {
  return await sql`SELECT * FROM obras`
}

export async function insert(itens) {
  return await sql`INSERT INTO obras (titulo) VALUES (${itens.titulo})` 
}