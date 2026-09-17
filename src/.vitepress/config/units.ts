// ============================================================================
// CONFIGURACIÓN DE UNIDADES — Navegación y Contenidos
// ============================================================================
//
// 👤 EDITA ESTE ARCHIVO para definir los módulos/unidades del curso
//    y su navegación (navbar y sidebar).
//
// CONCEPTOS CLAVE:
//   Unidad (unit) — Un bloque de contenido con su propia navegación.
//                   Puede ser una sesión, un tema, un capítulo, etc.
//   Navbar        — Menú horizontal en la barra superior.
//   Sidebar       — Panel de navegación lateral izquierdo.
//   code          — Prefijo de URL de los archivos de esta unidad.
//                   Ejemplo: code = 'general' → los links apuntan a /general/...
//
// FLUJO RÁPIDO:
//   1. Crea los archivos .md en src/<code>/contenidos/ y src/<code>/ejercicios/
//   2. Añade los links aquí (en navbar y sidebar)
//   3. El sistema detecta todas las unidades automáticamente:
//        /<code>/ → carga el sidebar de esa unidad
//        /        → raíz sin sidebar (página de inicio)
//
// ============================================================================

import { DefaultTheme } from 'vitepress'
import type { NavGroup } from '../shared/navigation'

// ============================================================================
// 1. NAVBARS Y SIDEBARS
// ============================================================================
// Define aquí los ítems de navegación de cada unidad.
// Puedes definirlos inline dentro de UNITS o como constantes separadas
// (recomendado cuando el listado es largo).

// --- Navbar de la unidad principal ---
const baseNavbar: DefaultTheme.NavItem[] = [
  { text: '🏠 Inicio', link: '/' },
  {
    text: '📋 Secciones',
    items: [
      { text: '1. Datos generales', link: '/contenidos/1-datos-generales' },
      { text: '2. Motivos y justificación', link: '/contenidos/2-motivos-justificacion' },
      { text: '3. Objetivos y expectativas', link: '/contenidos/3-objetivos-expectativas' },
      { text: '4. Plan de trabajo', link: '/contenidos/4-plan-de-trabajo' },
      { text: '5. Prospección de empresas (FCT)', link: '/contenidos/5-prospeccion-fct' },
      { text: '6. Impacto y difusión', link: '/contenidos/6-impacto-difusion' },
    ]
  },
]

// --- Sidebar de la unidad principal ---
const baseSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '📋 El proyecto',
    collapsed: false,
    items: [
      { text: 'Presentación', link: '/' },
      { text: '1. Datos generales', link: '/contenidos/1-datos-generales' },
    ]
  },
  {
    text: '🎯 Justificación',
    collapsed: false,
    items: [
      { text: '2. Motivos y justificación', link: '/contenidos/2-motivos-justificacion' },
      { text: '3. Objetivos y expectativas', link: '/contenidos/3-objetivos-expectativas' },
    ]
  },
  {
    text: '🗺️ Desarrollo de la movilidad',
    collapsed: false,
    items: [
      { text: '4. Plan de trabajo', link: '/contenidos/4-plan-de-trabajo' },
      { text: '5. Prospección de empresas (FCT)', link: '/contenidos/5-prospeccion-fct' },
    ]
  },
  {
    text: '📣 Resultados',
    collapsed: false,
    items: [
      { text: '6. Impacto y difusión', link: '/contenidos/6-impacto-difusion' },
    ]
  },
]

// ============================================================================
// 2. REGISTRO DE UNIDADES
// ============================================================================
// Añade, elimina o modifica entradas para gestionar los módulos del curso.
//
// Propiedades de cada unidad:
//   id        — Identificador único (debe coincidir con la clave del objeto)
//   code      — Prefijo de URL. Los links del navbar/sidebar se prefijarán
//               automáticamente con /<code>/
//               Ejemplo: code='s1' → '/contenidos/intro' → '/s1/contenidos/intro'
//   title     — Nombre corto (usado en migas de pan y referencias internas)
//   fullTitle — Nombre completo (aparece en la pestaña del navegador)
//   siteTitle — Nombre en el sidebar (puede usar </br> para saltos de línea)
//   icon      — Emoji decorativo del módulo
//   navbar    — Ítems del menú superior de esta unidad
//   sidebar   — Ítems del panel lateral de esta unidad

export interface UnitConfig {
  id: string
  code: string
  title: string
  fullTitle: string
  siteTitle: string
  icon: string
  navbar: DefaultTheme.NavItem[]
  sidebar: DefaultTheme.SidebarItem[]
}

export const UNITS: Record<string, UnitConfig> = {

  // Página de inicio — sin navegación de curso. No suele necesitar cambios.
  root: {
    id: 'root',
    code: 'root',
    title: 'EduPress',
    fullTitle: 'Plantilla EduPress Modular',
    siteTitle: 'EduPress</br>Plantilla',
    icon: '📐',
    navbar: [{ text: '🏠 Inicio', link: '/' }],
    sidebar: []
  },

  // ──────────────────────────────────────────────────────────────────────────
  // Unidad principal: Proyecto de Trabajo (Job Shadowing Noruega).
  // Personaliza: title, fullTitle, siteTitle, y los ítems de navbar/sidebar.
  // ──────────────────────────────────────────────────────────────────────────
  PROYECTO: {
    id: 'PROYECTO',
    code: 'proyecto',    // → archivos en src/proyecto/
    title: 'Job Shadowing Noruega',
    fullTitle: 'Job Shadowing en Åssiden videregående skole (Noruega) — Erasmus+',
    siteTitle: 'Job Shadowing</br>Noruega',
    icon: '🇳🇴',
    navbar: baseNavbar,
    sidebar: baseSidebar
  },

}

// ============================================================================
// FUNCIONES DE ACCESO — No modificar
// ============================================================================

export function getAllUnitsArray(): UnitConfig[] {
  return Object.values(UNITS)
}

export function getUnitByCode(code: string): UnitConfig | undefined {
  return UNITS[code]
}

// ── Navbar dinámico por unidad (opcional) ────────────────────────────────
// Si el curso tiene múltiples sesiones/unidades, define aquí qué dropdown
// mostrar en el navbar según la URL activa.
// Ejemplo:
// export const unitNavbars: Record<string, NavGroup[]> = {
//   'general': [{ text: '📚 Módulos', items: [{ text: 'General', link: '/general/' }] }],
// }
export const unitNavbars: Record<string, NavGroup[]> = {}
