# Blossom Bytes

Sitio web de **Blossom Bytes** — soluciones digitales: ecommerce, desarrollo web y marketing.

Construido con [Astro](https://astro.build/). Reconstrucción del mockup original (alojado en Canva) con código 100% propio, listo para desplegar en GitHub Pages.

## 🚀 Comandos

Desde la raíz del proyecto:

| Comando           | Acción                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Instala las dependencias                            |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321`   |
| `npm run build`   | Genera el sitio estático en `./dist/`               |
| `npm run preview` | Previsualiza el build localmente                    |

## 🗂️ Estructura

```
blossom-bytes/
├── public/            # Estáticos (favicon, imágenes...)
├── src/
│   ├── assets/        # Recursos procesados por Astro
│   ├── components/    # Header, Hero, Services, About, CTA, Footer, Logo
│   ├── layouts/       # Layout base (head, fuentes, meta)
│   ├── pages/         # index.astro (página principal)
│   └── styles/        # global.css (design tokens + estilos)
├── astro.config.mjs
└── package.json
```

## 🎨 Diseño

- **Tema:** oscuro (negro) con acento azul acero.
- **Hero:** degradado naranja → rojo → púrpura → negro con textura de grano.
- **Tipografía:** Montserrat (display) + Poppins (texto).

## 🌐 Despliegue en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Ajusta `site` (y `base` si aplica) en `astro.config.mjs`.
3. En **Settings → Pages**, selecciona *GitHub Actions* como fuente.
4. El workflow de `.github/workflows/deploy.yml` publica automáticamente en cada push a `main`.
