'use server'

import sql from "./db";

export async function insert(itens) {
  return await sql`INSERT INTO obras (titulo, autor, resenha) VALUES (${itens.titulo}, ${itens.autor}, ${itens.resenha})` 
}