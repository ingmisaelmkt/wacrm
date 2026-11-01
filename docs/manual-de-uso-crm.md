# Manual de uso del CRM de TruckCenter

Guía para el equipo de ventas y atención. Explica cómo usar el CRM de WhatsApp de TruckCenter día a día: recibir clientes, cotizar, hacer seguimiento de negocios y revisar resultados.

---

## 1. Qué es el CRM

El CRM conecta el número de WhatsApp de TruckCenter con un panel donde el equipo:

- Ve y responde todas las conversaciones de clientes en un solo lugar.
- Guarda a cada cliente con su teléfono, correo, empresa y notas.
- Sigue cada oportunidad de venta (negocio) en un embudo, desde el primer contacto hasta el cierre.
- Envía mensajes masivos a clientes usando plantillas aprobadas por WhatsApp.
- Automatiza respuestas y flujos de atención (menús, preguntas frecuentes, derivaciones).

Los montos de los negocios se muestran en **pesos chilenos (CLP)**.

---

## 2. Ingreso y roles

Para entrar, usa el correo y la contraseña que te entregó el administrador. Si olvidaste la contraseña, usa **¿Olvidaste tu contraseña?** en la pantalla de inicio de sesión.

Cada persona tiene un rol que define lo que puede hacer:

| Rol | Qué puede hacer |
|---|---|
| **Dueño** | Control total de la cuenta y la facturación |
| **Administrador** | Administra miembros, configuración y todo lo demás |
| **Agente** | Usa todas las funciones de venta y atención, sin acceso a configuración |
| **Visualizador** | Solo puede ver, no puede enviar mensajes |

Si no ves una opción del menú, es probable que tu rol no la permita.

---

## 3. Recorrido por el menú

El menú lateral tiene estas secciones:

- **Panel**: resumen de conversaciones, contactos nuevos, valor de negocios abiertos y mensajes del día.
- **Bandeja de entrada**: todas las conversaciones con clientes.
- **Notificaciones**: avisos de mensajes, asignaciones y negocios.
- **Contactos**: la base de clientes.
- **Embudos de venta**: el seguimiento de negocios por etapas.
- **Difusiones**: envíos masivos a varios clientes.
- **Automatizaciones**: reglas que actúan solas cuando pasa algo.
- **Flujos**: menús y conversaciones guiadas con botones.
- **Agentes de IA**: configuración del asistente automático.
- **Configuración**: cuenta, WhatsApp, plantillas, etiquetas, moneda, equipo y claves de API.

---

## 4. Bandeja de entrada (atención a clientes)

### 4.1 Revisar conversaciones

1. Entra a **Bandeja de entrada**.
2. En la lista de la izquierda, usa los filtros **Todas, Sin leer, Abiertas, Pendientes o Cerradas**.
3. Usa el buscador para encontrar un cliente por nombre o número.
4. Haz clic en una conversación para abrirla.

Las conversaciones sin leer aparecen destacadas. Atiende primero las que llevan más tiempo esperando.

### 4.2 Estados de una conversación

- **Abierta**: en atención.
- **Pendiente**: esperando al cliente o a un tercero.
- **Cerrada**: resuelta.

Cambia el estado desde el menú **Estado** en la parte superior de la conversación.

### 4.3 Asignar una conversación

Asigna la conversación a un compañero con **Asignar**. Así todos saben quién la atiende. Si no es tuya, déjala asignada a quien corresponda o usa **Quitar asignación** para devolverla a la cola.

### 4.4 Responder un mensaje

1. Escribe en la caja de texto de abajo.
2. Presiona **Enviar**. Para hacer un salto de línea, usa **Shift + Enter**.
3. Para responder a un mensaje específico, usa **Responder** sobre ese mensaje.

Puedes adjuntar fotos, videos, documentos o enviar una nota de voz con los botones de la caja de texto.

### 4.5 La regla de las 24 horas

WhatsApp solo permite responder con texto libre durante **24 horas después del último mensaje del cliente**. Pasado ese plazo, la conversación muestra **Sesión vencida**.

Cuando eso pase, envía una **plantilla aprobada** (botón **Plantillas**). La plantilla puede abrir de nuevo la conversación. Un visualizador no puede enviar mensajes.

### 4.6 Respuestas rápidas

Son textos guardados para respuestas frecuentes.

- **Usarlas**: en la caja de texto, abre **Respuestas rápidas** y elige una.
- **Crearlas**: escribe el texto y usa **Guardar como respuesta rápida**. Asígnale un nombre corto.
- **Administrarlas**: en **Configuración → Respuestas rápidas**.

### 4.7 Redactar con IA

Si el asistente de IA está activado, el botón ✨ de la caja de texto redacta una respuesta. **Revísala antes de enviarla**: puedes editarla o descartarla. Los mensajes enviados por la IA llevan una etiqueta **IA** en la burbuja.

### 4.8 Tomar o devolver la conversación a la IA

Cuando la IA responde sola, aparece un aviso sobre la conversación:

- **Tomar la conversación**: pausa la IA y tú atiendes al cliente.
- **Reanudar IA**: la IA vuelve a responder automáticamente.

### 4.9 Panel de contacto

A la derecha de la conversación está la información del cliente: etiquetas, notas internas y negocios abiertos. Para ocultarlo o mostrarlo, usa el botón de panel de contacto.

---

## 5. Contactos

### 5.1 Crear un contacto

1. Entra a **Contactos** y haz clic en **Agregar contacto**.
2. Completa el **nombre** (obligatorio) y el **teléfono**, con código de país. Para Chile: `+56` seguido del número, por ejemplo `+56912345678`.
3. Opcional: correo, empresa y etiquetas.
4. Haz clic en **Guardar contacto**.

Si el teléfono ya existe, el sistema te avisa y te muestra el contacto existente para no duplicarlo.

### 5.2 Buscar y filtrar

- Busca por nombre, teléfono o correo en el buscador.
- Filtra por **etiquetas** para ver grupos (por ejemplo, flotas, clientes frecuentes, cotizaciones pendientes).

### 5.3 Ficha del contacto

Al abrir un contacto puedes ver y editar sus datos, revisar su **actividad**, escribir **notas internas**, ver sus **negocios** y **enviarle una plantilla**.

### 5.4 Importar contactos desde un archivo CSV

1. Haz clic en **Importar**.
2. Sube un archivo `.csv` con una columna llamada **phone** (obligatoria). Son opcionales: **name**, **email**, **company** y **tags**.
3. Revisa la vista previa. Si hay filas con error, corrígelas en el archivo.
4. Confirma la importación.

Las etiquetas deben existir antes de importar (se crean en **Configuración → Campos y etiquetas**). Las que no existan se omiten y el sistema lo informa.

### 5.5 Campos personalizados

Son datos propios de tu negocio, por ejemplo **código postal** o **fuente del lead**. Se crean en **Contactos → Campos personalizados** y aparecen en todos los contactos.

### 5.6 Eliminar contactos

Puedes eliminar uno o varios contactos seleccionándolos. **Eliminar es permanente**: confirma solo cuando estés seguro.

---

## 6. Embudo de ventas (negocios)

Un **negocio** es una oportunidad de venta: por ejemplo, "Cotización mantención de 3 camiones para Transportes X".

### 6.1 Etapas

El embudo predeterminado tiene las etapas **Nuevo lead → … → Ganado**. Un negocio avanza de una etapa a otra arrastrándolo en el tablero.

### 6.2 Crear un negocio

1. Entra a **Embudos de venta** y elige el embudo.
2. Haz clic en **Agregar negocio**.
3. Completa:
   - **Título**, por ejemplo "Lavado flota Ruta 5".
   - **Contacto**: el cliente.
   - **Valor** y **moneda** (CLP por defecto).
   - **Etapa** y **Fecha estimada de cierre**.
   - **Asignado a**: el vendedor responsable.
   - **Notas**.
4. Haz clic en **Crear negocio**.

### 6.3 Cerrar un negocio

- Cuando el cliente acepta: **Marcar como ganado**.
- Cuando el cliente no compra: **Marcar como perdido**, y anota el motivo en las notas.
- Para reactivarlo: **Reabrir negocio**.

### 6.4 Indicadores del embudo

En la parte superior del embudo verás:

- **Total de negocios**: todos los no perdidos.
- **Valor del embudo**: suma de los montos abiertos.
- **Tamaño promedio**: valor del embudo dividido por la cantidad de negocios.
- **Valor ponderado**: ingreso esperado, según la probabilidad de cada etapa.
- **Ganados y perdidos del mes**.

Pasa el cursor sobre cada indicador para ver cómo se calcula.

### 6.5 Buenas prácticas

- Crea el negocio en cuanto el cliente pida una cotización.
- Mantén la fecha estimada de cierre actualizada.
- Cada negocio debe tener un responsable asignado.

---

## 7. Difusiones (envíos masivos)

Sirven para avisar a muchos clientes a la vez, por ejemplo una promoción de mantención o un recordatorio de revisión técnica.

Solo se pueden enviar **plantillas aprobadas por Meta**. Para crear una difusión:

1. Entra a **Difusiones** y haz clic en **Nueva difusión**.
2. **Plantilla**: elige la plantilla aprobada.
3. **Audiencia**: elige a quién enviar:
   - **Todos los contactos**.
   - **Filtrar por etiquetas** (y excluir etiquetas si hace falta).
   - **Campo personalizado** (por ejemplo, zona = Norte).
   - **Subir CSV** con los números.
4. **Personalizar**: asigna cada variable de la plantilla a un dato del contacto (nombre, empresa) o escribe un valor fijo.
5. **Revisar y enviar**: ponle un nombre, revisa el resumen y envía. También puedes **guardar como borrador**.

Después del envío, la ficha de la difusión muestra cuántos fueron **enviados, entregados, leídos, respondidos y fallidos**. Puedes exportar la lista de destinatarios en CSV.

**Importante**: no envíes difusiones a personas que no hayan dado su consentimiento para recibir mensajes.

---

## 8. Plantillas de mensaje

Las plantillas son los mensajes que WhatsApp exige para escribir fuera de la ventana de 24 horas y para las difusiones.

- **Crear**: en **Configuración → Plantillas → Nueva plantilla**. Se envían a Meta para revisión.
- **Revisión**: Meta suele aprobarlas en unas 24 horas. El estado cambia solo.
- **Sincronizar**: si la plantilla se creó directamente en Meta, usa **Sincronizar desde Meta**.
- **Editar**: cualquier cambio vuelve a enviar la plantilla a revisión.

Las variables se escriben como `{{1}}`, `{{2}}`, etc.

---

## 9. Automatizaciones

Una automatización es una regla de la forma: **cuando pasa algo, haz algo**.

### 9.1 Ejemplos de disparadores

- Llega un mensaje nuevo.
- Llega el **primer mensaje** de un contacto.
- El mensaje contiene una **palabra clave** (por ejemplo "cotizar" o "precio").
- Se crea un contacto nuevo.
- Se asigna una conversación a un agente.
- Se agrega una etiqueta a un contacto.
- Un horario definido.

### 9.2 Ejemplos de acciones

- Enviar un mensaje, botones o una lista de opciones.
- Enviar una plantilla.
- Agregar o quitar una etiqueta.
- Asignar la conversación a un agente (por turnos o uno específico).
- Actualizar un campo del contacto.
- Crear un negocio en el embudo.
- Esperar un tiempo, o seguir distintos caminos según una condición (Sí / No).
- Cerrar la conversación.

### 9.3 Crear o editar

1. Entra a **Automatizaciones**. Puedes partir de una **plantilla** o crear una **desde cero**.
2. Elige el **disparador**.
3. Agrega los **pasos** en orden.
4. Guarda como borrador y revisa. Cuando esté lista, usa **Activar**.

Para revisar qué hizo una automatización, usa **Ver registros**.

**Consejo**: prueba primero con tu propio número antes de activarla para todos.

---

## 10. Flujos (menús y conversaciones guiadas)

Los flujos son conversaciones con botones. Por ejemplo, un menú de bienvenida:

> ¡Hola! ¿En qué te ayudamos?
> [Cotizar mantención] [Lavado] [Hablar con un asesor]

Cada botón lleva a un paso distinto. El último paso puede **derivar a un agente** para que una persona continúe.

- Crea uno en **Flujos → Nuevo flujo**, desde una plantilla o en blanco.
- Un flujo se **activa** con una palabra clave o cuando un cliente escribe por primera vez.
- Revisa cada ejecución en **Ver ejecuciones**: en qué paso quedó el cliente y si fue derivado.

Un flujo activo debe pasar la validación (sin pasos incompletos ni botones sin destino).

---

## 11. Agentes de IA

El asistente de IA puede redactar respuestas y responder automáticamente.

- Se configura en **Agentes de IA** o en **Configuración → Agente**.
- Puedes definir el **contexto del negocio**: productos, tono y qué no debe prometer. Por ejemplo, nunca dar precios exactos sin revisar.
- La **base de conocimiento** guarda preguntas frecuentes, políticas y detalles de servicios que el asistente consulta al responder.
- **Respuesta automática**: el bot contesta solo cuando ningún flujo lo maneja y no hay un agente asignado. Tiene un límite de respuestas por conversación; al llegar al límite, deriva a una persona.

Si la IA responde algo incorrecto, toma la conversación y responde tú. Para que el asistente sepa la respuesta correcta en el futuro, agrega esa información a la base de conocimiento.

---

## 12. Configuración

### 12.1 Mi perfil

**Configuración → Tu perfil**: nombre, foto y correo. Para cambiar la contraseña, usa la sección **Contraseña**.

### 12.2 Conexión de WhatsApp

**Configuración → WhatsApp**. Aquí se conecta el número de WhatsApp Business. Si ves **No registrado**, usa **Verificar con Meta**. Esta sección la administra solo un administrador.

### 12.3 Etiquetas y campos

**Configuración → Campos y etiquetas**. Crea etiquetas con color (por ejemplo, "Flota", "Cotizado", "Cliente frecuente") y campos personalizados.

### 12.4 Moneda de los negocios

**Configuración → Negocios y moneda**. Elige **Peso chileno (CLP)** como moneda predeterminada. Solo un administrador puede cambiarla. Los negocios que ya existían conservan la moneda con la que se guardaron.

### 12.5 Equipo

**Configuración → Miembros del equipo**:

- **Invitar miembro**: genera un enlace de un solo uso. Puedes enviarlo por WhatsApp.
- **Revocar**: anula una invitación pendiente.
- **Quitar miembro**: elimina el acceso a la cuenta.

Cada invitación tiene un rol (Administrador, Agente o Visualizador).

### 12.6 Claves de API

**Configuración → Claves de API**. Sirven para conectar otros sistemas con TruckCenter. Solo las personas con permiso deben crearlas. Guarda la clave en un lugar seguro: se muestra una única vez.

### 12.7 Apariencia

**Configuración → Apariencia**: cambia entre modo claro y oscuro, o el color de acento. Es una preferencia de tu dispositivo.

---

## 13. Buenas prácticas del equipo

1. **Responde rápido**: la primera respuesta es lo que más pesa en la decisión del cliente.
2. **Registra todo en el CRM**: si no está en el CRM, no existe. Usa notas y etiquetas.
3. **Un negocio por necesidad**: si el cliente pide otra cotización, crea otro negocio.
4. **Cierra o pierde cada negocio**: un embudo limpio muestra el valor real.
5. **Usa respuestas rápidas** para lo repetido, pero personaliza siempre el saludo.
6. **Revisa la IA antes de enviar**: el cliente no sabe que hay un asistente, pero sí espera una respuesta exacta.
7. **Atiende las conversaciones sin leer al inicio de cada turno**.

---

## 14. Preguntas frecuentes

**¿Por qué no puedo enviar un mensaje?**
Probablemente la sesión de 24 horas venció. Envía una plantilla aprobada. Si tu rol es Visualizador, no puedes enviar.

**¿Por qué un cliente aparece dos veces?**
Revisa que el número esté escrito igual (con `+56`). Si son duplicados, elimina el que sobra desde la ficha del contacto.

**¿Por qué no aparece una plantilla?**
Puede que aún no esté aprobada por Meta. Revisa su estado en **Configuración → Plantillas**.

**¿Por qué un negocio aparece en otra moneda?**
Se guardó con otra moneda antes del cambio. Edítalo y ajusta la moneda.

**¿Cómo recupero una conversación cerrada?**
Ábrela desde el filtro **Cerradas** y cambia su estado a **Abierta**, o responde con una plantilla si pasaron 24 horas.

**¿A quién le pido ayuda?**
Al administrador de la cuenta de TruckCenter.

---

*Versión 1.0 · Octubre 2026*
