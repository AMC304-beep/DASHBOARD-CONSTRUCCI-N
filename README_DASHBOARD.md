# Dashboard de Ausencias, Aprobaciones y Cronograma (Monday.com)

Aplicación web interactiva creada para visualizar, gestionar y solicitar ausencias del equipo conectada con el tablero de Monday.com:
- **Tablero ID**: `18432588237`
- **URL Monday**: [https://ibm.monday.com/boards/18432588237](https://ibm.monday.com/boards/18432588237)

---

## 🎯 Características Principales

### 1. Slide 1: Gestión de Solicitudes y Decisiones
- **KPIs y Métricas**: Resumen visual de solicitudes Totales, Aprobadas, Rechazadas y Pendientes.
- **Cuadro de Nueva Solicitud de Ausencias**: Formulario con validación de fechas (Inicio / Fin), tipo de ausencia (Vacaciones, Permisos, Incapacidad, Día de la Familia, Capacitaciones, etc.) y comentarios.
- **Tabla de Gestión**: Visualización del historial, estado actual, filtrado rápido (`Todos`, `Aprobados`, `Rechazados`, `Pendientes`) y botones de acción rápida para aprobar o rechazar solicitudes pendientes.
- **Gráficos Estadísticos**: Gráficos interactivos de dona (distribución por estado) y barras (tipos de ausencia más solicitados).

### 2. Slide 2: Calendario y Cronograma General
- **Calendario Interactivo (FullCalendar)**: Vista mensual, semanal y en lista del cronograma aprobado de todo el equipo.
- **Filtro por Colaborador**: Capacidad de filtrar la vista del calendario para una persona específica o ver a todo el equipo simultáneamente.
- **Código de Colores por Ausencia**:
  - 🟢 **Verde**: Vacaciones
  - 🔵 **Azul**: Permiso Personal
  - 🟡 **Amarillo**: Día de la Familia / Cumpleaños
  - 🟣 **Morado**: Capacitación / Formación
  - 🔴 **Rojo**: Incapacidades Médicas / Calamidades

### 3. Conexión con Monday.com
- Configuración mediante **API Token personal de Monday** directamente desde la interfaz del dashboard (botón *Conexión Monday.com*).
- Integración con GraphQL API v2 de Monday para crear items automáticamente en el tablero `18432588237` y sincronizar estados.
- Soporta persistencia local (`localStorage`) para uso inmediato o modo demo sin requerir backend adicional.

---

## 🚀 Cómo abrir y usar el Dashboard

1. Abre el archivo [`dashboard_ausencias.html`](dashboard_ausencias.html) en cualquier navegador moderno (Chrome, Edge, Firefox).
2. Haz clic en el botón superior **"Conexión Monday.com"** para agregar tu token de API si deseas sincronizar en tiempo real con Monday.
3. Navega libremente entre los dos slides con los botones superiores:
   - **Gestión & Solicitudes**
   - **Calendario de Equipo**
