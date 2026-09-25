# Dashboard Completo de Monday.com (Todas las Columnas & Labels)

Dashboard conectado **en tiempo real y de forma automática** con el tablero de Monday.com:
- **Tablero ID**: `18432588237`
- **URL Monday**: [https://ibm.monday.com/boards/18432588237](https://ibm.monday.com/boards/18432588237)

---

## ⚡ Extracción y Renderizado Completo de Columnas y Labels

El sistema ya no depende de estructuras fijas. Realiza una introspección completa del tablero de Monday y extrae:

1. **Todas las Columnas del Tablero**:
   - `status` (Estados / Labels configurados con sus estilos y colores).
   - `people` (Colaboradores / Asignaciones).
   - `timeline` / `date` (Cronograma, Rangos de fechas e inicio/fin).
   - `text` / `long_text` (Comentarios, descripciones y notas).
   - `dropdown`, `numbers`, `tags`, etc.

2. **Extracción Dinámica de Labels**:
   - Los KPIs superiores y los gráficos se adaptan a los labels y grupos reales que existan en el tablero.
   - El formulario de creación y de edición autogenera los desplegables (`<select>`) con las opciones/labels exactos de Monday.

3. **Edición Bidireccional en Tiempo Real**:
   - Al editar cualquier columna de un elemento desde el modal, se envían las mutaciones GraphQL a Monday para actualizar el nombre y todos los valores de las columnas.
   - Si creas un nuevo elemento, se crea en Monday con todas sus columnas asignadas.
   - Si eliminas un elemento, se borra de Monday automáticamente.

4. **Slide 2 - Cronograma & Calendario**:
   - Detecta automáticamente las columnas de tipo `timeline` o `date` de cada persona y las plasma en el calendario interactivo con vista mensual, semanal y en lista.

---

## 🚀 Despliegue con Token Oculto (Vercel)

1. Sube los archivos a tu repositorio de GitHub:
   - `index.html`
   - `api/monday.js`
   - `vercel.json`
2. En [Vercel.com](https://vercel.com), importa tu repositorio y agrega en **Environment Variables**:
   - **Key**: `MONDAY_API_KEY`
   - **Value**: *(Tu API Token personal de Monday)*
3. Haz clic en **Deploy**. ¡Tu equipo podrá usar el dashboard y editar todas las columnas de Monday sin ingresar ningún token!
