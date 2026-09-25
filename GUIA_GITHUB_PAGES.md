# Conexión Dinámica y Sincronización con Monday.com

Este dashboard carga en vivo la estructura del tablero **18432588237** (columnas, tipos, labels, grupos e items) y permite sincronización bidireccional.

## 🔑 1. Configuración del Token de Monday

Para conectar el dashboard con Monday:
1. Abre el dashboard en [https://amc304-beep.github.io/DASHBOARD-CONSTRUCCI-N/](https://amc304-beep.github.io/DASHBOARD-CONSTRUCCI-N/).
2. Haz clic en el botón superior derecho **"Token Monday"** (o en la barra de aviso amarilla).
3. Obtén tu Personal API Token desde Monday.com:
   - Haz clic en tu **Foto de perfil** (abajo a la izquierda en Monday).
   - Ve a **Desarrolladores (Developers)** o **Administration**.
   - Haz clic en **Developer** > **My Access Tokens**.
   - Presiona **Show**, copia el token y pégalo en el modal del dashboard.
4. Presiona **Guardar y Sincronizar**. El token se guardará en tu navegador de forma segura (`localStorage`) para que no tengas que escribirlo nuevamente.

---

## 🚀 2. Subir la Versión Actualizada a GitHub

Para que la versión con el soporte actualizado de Monday API esté disponible en GitHub Pages:

1. Ingresa a tu repositorio: [https://github.com/AMC304-beep/DASHBOARD-CONSTRUCCI-N](https://github.com/AMC304-beep/DASHBOARD-CONSTRUCCI-N)
2. Abre el archivo `index.html`.
3. Haz clic en el icono del lápiz ✏️ (**Edit this file**).
4. Reemplaza todo el contenido con el contenido del archivo local `index.html`.
5. Haz clic en **Commit changes...** > **Commit changes**.
6. En 1-2 minutos GitHub Pages actualizará el sitio en vivo.

---

## ✨ 3. Características Implementadas

- **Extracción Dinámica**: Lee directamente todas las columnas y opciones de configuración (`settings_str`) de cada columna de Monday.
- **Slide 1 - Gestión**:
  - KPIs automáticos según los labels y estados de tu tablero.
  - Formulario que genera inputs para cada columna detectada en Monday.
  - Tabla completa con opciones de búsqueda, visualización y edición en tiempo real.
- **Slide 2 - Cronograma**:
  - Calendario interactivo (FullCalendar) conectado a las columnas de fechas y líneas de tiempo (`timeline` / `date`).
  - Filtro por colaborador y vista mensual, semanal y de lista.
