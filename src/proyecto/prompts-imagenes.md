# Prompts de Imágenes — Diapositivas Job Shadowing Noruega

Imágenes realistas para las diapositivas del proyecto Erasmus+. Estilo común sugerido: **fotografía profesional realista, luz natural, ambiente escandinavo luminoso, tonos azules y naranjas (colores institucionales), sensación de colaboración y entusiasmo, espacio negativo para texto**.

Guardar en `src/public/img/slides/`.

---

## 1. `colaboracion-centros.jpg`
**Diapositiva:** 2 · Datos Generales de la Movilidad

```
Fotografía profesional realista de dos docentes (un hombre y una mujer) de unos 40 años, sonriendo y estrechando la mano en un aula moderna de un instituto noruego de Formación Profesional. Detrás de ellos, pantallas con código y un cartel discreto del departamento de informática. Luz natural amplia de grandes ventanales, ambiente escandinavo luminoso y acogedor. Expresiones de entusiasmo y bienvenida, transmite el inicio de una colaboración fructífera entre dos instituciones educativas europeas. Estilo fotográfico editorial, alta resolución, formato horizontal 16:9.
```

---

## 2. `aula-ia-colaborativa.jpg`
**Diapositiva:** 6 · Innovación e IA: Aprendizaje Adaptativo

```
Fotografía realista de un grupo diverso de estudiantes de unos 17-19 años y su profesora trabajando entusiasmados alrededor de portátiles en un aula tecnológica noruega moderna. En las pantallas se ven interfaces de asistentes de IA y chatbots educativos generando materiales de estudio. Pizarras digitales con diagramas de aprendizaje adaptativo al fondo. Ambiente dinámico de taller colaborativo internacional, sonrisas naturales, gestos de descubrimiento. Luz diurna suave, paleta de colores azules y blancos con acentos naranjas. Estilo editorial educativo, formato horizontal 16:9.
```

---

## 3. `prospeccion-empresas.jpg`
**Diapositiva:** 12 · Prospección de Empresas (FCT)

```
Fotografía profesional realista de una reunión de trabajo cordial en la oficina moderna de una empresa tecnológica noruega con vistas a un fiordo o a una ciudad escandinava a través de grandes ventanales. Un docente visitante español y dos responsables de la empresa conversan animadamente alrededor de una mesa con un portátil mostrando un mapa de la zona Drammen-Oslo y gráficos de colaboración formativa. Apretón de manos o gesto de acuerdo, expresiones de optimismo y entusiasmo por un futuro acuerdo de prácticas para estudiantes. Ambiente corporativo nórdico cálido, luz natural, formato horizontal 16:9.
```

---

## Notas de generación

- **Herramientas sugeridas:** fal.ai (Nano Banana / Seedream), Midjourney, DALL·E 3.
- **Aspect ratio:** 16:9 (las diapositivas las muestran panorámicas).
- **Post-procesado:** si las caras salen deformadas, regenerar con `--no text, distorted faces` o similar.
- **Consistencia:** usar la misma semilla o referencia de estilo entre las tres para que compartan paleta.
- Tras generarlas, colocarlas en `src/public/img/slides/` con los nombres exactos de arriba — las rutas de [diapositivas.md](src/proyecto/diapositivas.md) ya apuntan ahí.
