// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Cuando despleguemos en GitHub Pages, ajusta `site` (y `base` si el repo
  // no es <usuario>.github.io). Ejemplo para un repo de proyecto:
  //   site: 'https://<usuario>.github.io',
  //   base: '/blossom-bytes',
  // Para un dominio propio (blossom-bytes.com) basta con `site`:
  site: 'https://gerardorosas.github.io/',
  base: '/blossom-bytes'
});
