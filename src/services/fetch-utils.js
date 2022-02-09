import { client, checkError } from './client';

export async function getOrbs(from = 0, to = 40) {
  const response = await client
    .from('space_orbs')
    .select()
    .range(from, to);

  return checkError(response);
}

export async function getSingleOrb(name) {
  const response = await client 
    .from('space_orbs')
    .select()
    .match({ name })
    .single();

  return checkError(response);
}