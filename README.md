# Registro de horas extra (versión instalable)

Aplicación web para llevar el registro de horas extra y nocturnidades: calendario del mes, gráficos, sueldo estimado y planilla mensual en CSV (se abre en Excel). Funciona sin conexión una vez abierta.

## Cómo publicarla en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Descomprime el zip y sube **todos** los archivos sueltos con **Add file > Upload files**: `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` y `README.md`.
3. Ve a **Settings > Pages**. En *Build and deployment* elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`, y guarda.
4. En un par de minutos el link queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## Cómo instalarla en el celular

- **Android (Chrome):** abre el link, toca el menú de los tres puntos y elige **Instalar aplicación** o **Añadir a pantalla de inicio**. Se abre a pantalla completa, sin barra del navegador.
- **iPhone (Safari):** botón Compartir y **Añadir a pantalla de inicio**.

## Cómo actualizarla

Sube el `index.html` nuevo con el mismo nombre y confirma el cambio (**Commit changes**). El link no cambia. La app instalada muestra la versión nueva la segunda vez que se abre.

## Qué funciona

- Registro de horas extra, gráficos, sueldo estimado, perfil, temas y paletas.
- Marcar nocturnidades en la cuadrícula semanal.
- Descarga de la planilla mensual (CSV).

## Qué no está en esta versión

Novedades, eventos, comentarios, lista compartida de nocturnidades y lectura automática de recibos solo funcionan dentro de Claude, por eso se ocultan acá. Para compartirlos entre compañeros fuera de Claude haría falta un servidor propio.

## Importante

- Los datos se guardan solo en el navegador de cada persona. No se sincronizan entre dispositivos y se pierden si se borran los datos del navegador.
- El código no incluye datos de sueldo ni recibos de nadie.
- Si el repositorio es público, el código y las imágenes (logo y escudo del municipio) son públicos. Consulta en la oficina si hay algún criterio para publicarlos.
