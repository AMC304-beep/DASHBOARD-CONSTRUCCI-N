# Dashboard de Ausencias, Aprobaciones y Cronograma (Monday.com)

Aplicación web interactiva conectada **en tiempo real y de forma bidireccional** con el tablero de Monday.com:
- **Tablero ID**: `18432588237`
- **URL Monday**: [https://ibm.monday.com/boards/18432588237](https://ibm.monday.com/boards/18432588237)
- **Acceso Web GitHub Pages**: [https://amc304-beep.github.io/DASHBOARD-CONSTRUCCI-N/](https://amc304-beep.github.io/DASHBOARD-CONSTRUCCI-N/)

---

## ⚡ Sincronización Automática con Monday.com

Cualquier acción realizada dentro del dashboard se refleja de forma inmediata en el tablero de Monday:

1. **Crear Solicitud**: Crea un nuevo elemento (*item*) en el tablero con los valores de estado, cronograma (fechas) y observaciones.
2. **Editar Solicitud**: Al modificar el estado, las fechas, el nombre o los motivos desde el modal de edición, ejecuta las mutaciones GraphQL `change_multiple_column_values` y `change_simple_column_value` directamente sobre Monday.
3. **Aprobar / Rechazar rápido**: Actualiza en vivo la columna de estado en Monday.
4. **Eliminar**: Elimina el elemento correspondiente del tablero en Monday (`delete_item`).
5. **Carga y Sincronización Inicial**: Detecta automáticamente la estructura de columnas del tablero (Estado, Cronograma, Fechas y Texto) para mapear los campos dinámicamente.

---

## 🖥️ Estructura de Slides

### Slide 1: Gestión de Aprobaciones y Solicitudes
- **KPIs y Métricas**: Conteo en vivo de Total, Aprobadas, Rechazadas y Pendientes.
- **Cuadro de Nueva Solicitud**: Formulario con validación de fechas e inserción inmediata a Monday.
- **Tabla Interactiva**: Botones de **Editar**, **Aprobar** (✅) y **Rechazar** (❌).
- **Gráficos**: Distribución por estado (Doughnut) y volumen por tipo de ausencia (Bar Chart).

### Slide 2: Cronograma y Calendario General
- **FullCalendar**: Vista mensual, semanal y en lista de las ausencias aprobadas.
- **Filtro por Colaborador**: Visualización aislada por miembro del equipo o general.
- **Edición desde el Calendario**: Al hacer clic en cualquier bloque o evento del calendario se abre la ventana de edición para ajustar fechas o detalles en tiempo real.

---

## 🔒 Configuración del Token
1. Haz clic en el botón superior derecho **"Configurar Token"**.
2. Pega tu Token personal de Monday y pulsa **"Guardar y Conectar"**.
3. El token queda guardado únicamente en tu navegador (`localStorage`), garantizando máxima seguridad sin exponer claves en el repositorio.
