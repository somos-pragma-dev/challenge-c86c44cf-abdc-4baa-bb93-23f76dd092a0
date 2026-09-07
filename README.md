# Implementación de componentes standalone con signals y nuevo control flow syntax en Angular

En el dominio de la banca, se requiere desarrollar un componente standalone que maneje la visualización y actualización de saldos de cuentas. Este componente debe utilizar signals para reaccionar a cambios en los datos y el nuevo control flow syntax para gestionar la lógica de presentación. El componente debe ser idempotente en la actualización de saldos y tolerante a fallos temporales en la conexión con el servicio de saldos.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Angular 21 con RxJS 7 |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 3 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Diseño del componente standalone

**Objetivo:** Definir la estructura y las responsabilidades del componente standalone que manejará la visualización y actualización de saldos de cuentas.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identificar los datos necesarios para la visualización de saldos.
- Definir las signals que se utilizarán para reaccionar a cambios en los datos.
- Establecer criterios de aceptación para la idempotencia y tolerancia a fallos.

**Entregable:** Especificación del componente standalone con signals y nuevo control flow syntax.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejarás la persistencia de estado en el componente.
- Piensa en cómo el componente reaccionará a cambios en los datos de saldos.

</details>

### Fase 2: Implementación del componente

**Objetivo:** Implementar el componente standalone con signals y nuevo control flow syntax, asegurando la idempotencia y tolerancia a fallos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Implementar el componente siguiendo la especificación generada en la fase anterior.
- Utilizar signals para reaccionar a cambios en los datos de saldos.
- Asegurar que el componente sea idempotente en la actualización de saldos y tolerante a fallos temporales en la conexión con el servicio de saldos.

**Entregable:** Código implementado del componente standalone con signals y nuevo control flow syntax.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejarás los edge cases en la actualización de saldos.
- Piensa en cómo el componente reaccionará a fallos temporales en la conexión con el servicio de saldos.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente standalone en Angular y por qué se utiliza en este caso?
- **paraQueSirve**: ¿Para qué sirve utilizar signals y el nuevo control flow syntax en este componente?
- **comoSeUsa**: ¿Cómo se utilizan signals para reaccionar a cambios en los datos de saldos?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar un componente standalone con signals y nuevo control flow syntax?
- **queDecisionesImplica**: ¿Qué decisiones implica asegurar la idempotencia y tolerancia a fallos en la implementación del componente?

## Criterios de Evaluacion

- Definición clara de la estructura y responsabilidades del componente standalone.
- Uso correcto de signals para reaccionar a cambios en los datos.
- Implementación idempotente de la actualización de saldos.
- Tolerancia a fallos temporales en la conexión con el servicio de saldos.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
