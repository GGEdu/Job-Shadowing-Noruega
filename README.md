# 🇳🇴 Job Shadowing en Noruega — Proyecto de Trabajo Erasmus+

Sitio web del **Proyecto de Trabajo** de la movilidad Erasmus+ (*Job Shadowing*) del
**CEEDCV** en el **Åssiden videregående skole** (Drammen, Noruega).

Construido con [VitePress](https://vitepress.dev/) a partir de la plantilla
[EduPress](https://github.com/GGEdu/EduPress) y publicado en GitHub Pages.

---

## 🔗 Acceso web

**https://ggedu.github.io/Job-Shadowing-Noruega/**

---

## 📑 Contenido del proyecto

| Apartado | Archivo |
|----------|---------|
| Presentación | `src/proyecto/index.md` |
| 1. Datos generales de la movilidad | `src/proyecto/contenidos/1-datos-generales.md` |
| 2. Motivos y justificación | `src/proyecto/contenidos/2-motivos-justificacion.md` |
| 3. Alineación con proyectos de innovación e IA | `src/proyecto/contenidos/3-innovacion-ia.md` |
| 4. Objetivos y expectativas | `src/proyecto/contenidos/4-objetivos-expectativas.md` |
| 5. Plan de trabajo y actividades | `src/proyecto/contenidos/5-plan-de-trabajo.md` |
| 6. Prospección de empresas (FCT) | `src/proyecto/contenidos/6-prospeccion-fct.md` |
| 7. Impacto y difusión esperada | `src/proyecto/contenidos/7-impacto-difusion.md` |

---

## 🚀 Desarrollo local

```bash
npm install
npm run docs:dev      # → http://localhost:5173/Job-Shadowing-Noruega/
```

Otros comandos:

```bash
npm run docs:build    # genera el sitio estático en docs/
npm run docs:preview  # sirve la build local
```

---

## 🌐 Despliegue en GitHub Pages

El repositorio incluye el workflow `.github/workflows/deploy.yml`. Un `push` a la
rama `main` compila el sitio y lo publica automáticamente.

Requisito en GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

---

## ⚙️ Personalización

Toda la configuración del sitio vive en `src/.vitepress/config/`:

| Archivo | Qué configura |
|---------|---------------|
| `project.ts` | URL base (`basePath`), idioma, descripción, copyright, licencia |
| `colors.ts` | Paleta activa (actualmente *navy-naranja*) |
| `logos.ts` | Logos institucionales y modo claro/oscuro |
| `units.ts` | Secciones, navbar y sidebar |

> **Sustituir los logos:** reemplaza los archivos `src/public/img/logo.png` y
> `logo-dark.png` (navbar) por los logos definitivos del CEEDCV / Erasmus+ cuando
> estén disponibles.

---

## 🙏 Créditos

Plantilla base: **EduPress** de [GGEdu](https://github.com/GGEdu) (licencia MIT).
