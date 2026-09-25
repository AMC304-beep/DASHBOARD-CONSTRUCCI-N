# Tablero Monday.com - Dashboard de Gestión & Cronograma

Este proyecto es un Dashboard interactivo de 2 vistas (Slides) diseñado para conectarse en tiempo real con el tablero de Monday.com:
- **Board URL**: [https://ibm.monday.com/boards/18432588237](https://ibm.monday.com/boards/18432588237)
- **Board ID**: `18432588237`

---

## 📌 Columnas Mapeadas del Tablero

El dashboard reconoce y mapea dinámicamente las columnas clave del tablero:
1. **Adcar**: Identificador / Código del colaborador o proyecto.
2. **Motivo Gerencia**: Tipo de novedad o solicitud (*Vacaciones, Permiso Personal, Incapacidad Médica, Capacitación, etc.*).
3. **Cronograma**: Fechas de inicio y fin (Línea de tiempo / Timeline).
4. **Estado de Aprobación**: Estado de la solicitud (*Aprobado, Pendiente, Rechazado*).

---

## ⚡ Actualización Inmediata en Monday (Bidireccional)

Al editar cualquier dato desde la interfaz web (modal de edición), el dashboard ejecuta inmediatamente la mutación GraphQL `change_multiple_column_values` y `change_simple_column_value` hacia la API de Monday (`https://api.monday.com/v2`), reflejando los cambios al instante en el tablero en la nube.

---

## 🚀 Despliegue en GitHub Pages

1. Abre tu repositorio: [https://github.com/AMC304-beep/DASHBOARD-CONSTRUCCI-N](https://github.com/AMC304-beep/DASHBOARD-CONSTRUCCI-N)
2. Edita el archivo `index.html` y pega el código actualizado.
3. Haz clic en **Commit changes**.
4. Accede al sitio publicado: [https://amc304-beep.github.io/DASHBOARD-CONSTRUCCI-N/](https://amc304-beep.github.io/DASHBOARD-CONSTRUCCI-N/)
5. Ingresa tu Personal API Token desde el botón **"Token Monday"** una sola vez para sincronizar en vivo.
