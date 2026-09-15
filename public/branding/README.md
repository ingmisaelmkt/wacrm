# Branding assets

El wordmark de TruckCenter hoy **no es un archivo de imagen** — se dibuja
como texto en `src/components/brand/wordmark.tsx`, usando Montserrat y el
magenta de marca, siguiendo el brandbook oficial. Así se ve nítido en
cualquier tamaño y se adapta solo al modo claro/oscuro.

## Si más adelante quieres usar el logo oficial en imagen

1. Guarda el archivo aquí, por ejemplo `truckcenter-logo.png` (o `.svg`,
   mejor aún — vectorial).
2. Edita `src/components/brand/wordmark.tsx` y reemplaza el texto por la
   imagen. Ese componente es el único lugar que hay que tocar: la barra
   lateral y el login lo usan a través de él.

Ojo al guardarlo: Windows oculta las extensiones por defecto, así que al
renombrar puede quedar `logo.png.png`. Verifica que el archivo pese más de
0 KB — si pesa 0, no es una imagen real.
