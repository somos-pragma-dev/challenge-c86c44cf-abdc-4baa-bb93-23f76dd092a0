# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto arrancable. Si el adjunto es una carcasa (docs/placeholders),
el asistente debe materializar la estructura del stack del briefing, sin resolver las fases del reto.

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Componentes standalone con signals y nuevo control flow syntax

### Reto
- Tema: Angular 21 con RxJS 7
- Seniority: junior-l1
- Tipo: practical
- Título: Implementación de componentes standalone con signals y nuevo control flow syntax en Angular
- Tiempo estimado: 3 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Diseño del componente standalone — objetivo: Definir la estructura y las responsabilidades del componente standalone que manejará la visualización y actualización de saldos de cuentas. — entregable (NO resolver): Especificación del componente standalone con signals y nuevo control flow syntax.
- Fase 2: Implementación del componente — objetivo: Implementar el componente standalone con signals y nuevo control flow syntax, asegurando la idempotencia y tolerancia a fallos. — entregable (NO resolver): Código implementado del componente standalone con signals y nuevo control flow syntax.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
import { Component } from '@angular/core';
import { BalanceService } from '../services/balance.service';
import { Balance } from '../models/balance.model';
import { ErrorHandler } from '../utils/error-handler';

@Component({
  selector: 'app-balance',
  template: `<div>Saldo: {{ balance$ | async }}</div>`
})
export class BalanceComponent {
  balance$ = this.balanceService.getBalance();

  constructor(private balanceService: BalanceService) {}
}

// === ARCHIVO: src/app/components/balance-component/balance.component.ts ===

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Balance } from '../models/balance.model';
import { ErrorHandler } from '../utils/error-handler';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private balance: Balance = { amount: 100 };

  getBalance(): Observable<number> {
    try {
      return of(this.balance.amount);
    } catch (error) {
      ErrorHandler.handleError(error);
      return of(0);
    }
  }

  updateBalance(amount: number): Observable<number> {
    try {
      this.balance.amount += amount;
      return of(this.balance.amount);
    } catch (error) {
      ErrorHandler.handleError(error);
      return of(0);
    }
  }
}

// === ARCHIVO: src/app/services/balance.service.ts ===

export interface Balance {
  amount: number;
}

// === ARCHIVO: src/app/models/balance.model.ts ===

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandler {
  static handleError(error: any) {
    console.error('An error occurred:', error);
  }
}

// === ARCHIVO: src/app/utils/error-handler.ts ===

export const environment = {
  production: false
};

// === ARCHIVO: src/environments/environment.ts ===

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
 .catch(err => console.error(err));

// === ARCHIVO: main.ts ===

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BalanceComponent } from './components/balance-component/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// === ARCHIVO: src/app/app.module.ts ===

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-balance></app-balance>'
})
export class AppComponent {
  title = 'balance-app';
}

// === ARCHIVO: src/app/app.component.ts ===

{
  "name": "balance-app",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    '@angular/animations': '^21.0.0',
    '@angular/common': '^21.0.0',
    '@angular/compiler': '^21.0.0',
    '@angular/core': '^21.0.0',
    '@angular/forms': '^21.0.0',
    '@angular/platform-browser': '^21.0.0',
    '@angular/platform-browser-dynamic': '^21.0.0',
    '@angular/router': '^21.0.0',
    'rxjs': '^7.0.0',
    'tslib': '^2.3.0',
    'zone.js': '~0.11.4'
  },
  "devDependencies": {
    '@angular-devkit/build-angular': '~12.0.0',
    '@angular/cli': '~12.0.0',
    '@angular/compiler-cli': '^21.0.0',
    '@types/jasmine': '~3.6.0',
    '@types/node': '^12.11.1',
    'jasmine-core': '~3.7.0',
    'karma': '~6.3.0',
    'karma-chrome-launcher': '~3.1.0',
    'karma-coverage': '~2.0.3',
    'karma-jasmine': '~4.0.0',
    'karma-jasmine-html-reporter': '^1.5.0',
    'typescript': '~4.2.3'
  }
}

// === ARCHIVO: package.json ===
```
