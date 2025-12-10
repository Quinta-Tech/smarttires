# Configuración del Pixel de Meta (Facebook)

## Instalación Completada ✅

Ya se ha instalado y configurado `react-facebook-pixel` en tu aplicación con los siguientes eventos:

## Eventos Implementados

### 1. **Eventos de Página**
- `PageView` - Se dispara automáticamente en cada página
- `ViewContent` - Para páginas específicas (Home, Contact, Privacy Policy)

### 2. **Eventos de Formulario de Contacto**
- `InitiateCheckout` - Cuando el usuario inicia el formulario
- `Lead` - Cuando el usuario completa el formulario exitosamente

### 3. **Eventos de Interacción**
- `ClickButton` - Para botones CTA (Get in Touch, Calendly)
- `CustomizeProduct` - Cuando cambia el idioma

### 4. **Eventos de Engagement**
- Scroll tracking (50% y 75% de la página)
- Time on page (30s y 60s)

## Configuración Requerida

### 1. Obtener tu Pixel ID
1. Ve a [Facebook Business Manager](https://business.facebook.com)
2. Navega a **Eventos Manager**
3. Selecciona tu pixel o crea uno nuevo
4. Copia el **Pixel ID** (número de 15-16 dígitos)

### 2. Configurar Variables de Entorno
Edita el archivo `.env` en la raíz del proyecto:

```env
REACT_APP_FB_PIXEL_ID=123456789012345
```

**⚠️ Importante:** Reemplaza `123456789012345` con tu Pixel ID real.

### 3. Verificar la Instalación

#### Opción 1: Facebook Pixel Helper (Recomendado)
1. Instala la extensión [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visita tu sitio web
3. Verifica que aparezca el pixel en verde

#### Opción 2: Eventos Manager
1. Ve a Facebook Business Manager > Eventos Manager
2. Selecciona tu pixel
3. Ve a la pestaña "Prueba de eventos"
4. Navega por tu sitio y verifica que lleguen los eventos

## Eventos por Página

### Página Principal (Home)
- `PageView`
- `ViewContent` (Home Page)
- `ClickButton` (Get in Touch, Calendly)
- Scroll y tiempo en página

### Página de Contacto
- `PageView`
- `ViewContent` (Contact Page)
- `InitiateCheckout` (al iniciar formulario)
- `Lead` (al completar formulario)

### Políticas de Privacidad
- `PageView`
- `ViewContent` (Privacy Policy)

## Personalización Adicional

### Agregar Nuevos Eventos
Edita `src/utils/fbPixel.js` y agrega nuevas funciones:

```javascript
export const fbPixelEvents = {
  // Evento personalizado
  customEvent: (data) => {
    ReactPixel.track('CustomEvent', data);
  }
};
```

### Usar en Componentes
```javascript
import { fbPixelEvents } from '../utils/fbPixel';

// En tu componente
const handleClick = () => {
  fbPixelEvents.clickCTA('Button Name');
};
```

## Debugging

### Modo Desarrollo
El pixel está configurado para mostrar logs en desarrollo. Abre las DevTools para ver los eventos.

### Verificar Configuración
```javascript
// En la consola del navegador
console.log(process.env.REACT_APP_FB_PIXEL_ID);
```

## Consideraciones de Privacidad

- El pixel respeta las configuraciones de privacidad del navegador
- Se recomienda agregar un banner de cookies si es requerido por tu jurisdicción
- Los eventos no incluyen información personal identificable

## Soporte

Si tienes problemas:
1. Verifica que el Pixel ID sea correcto
2. Revisa la consola del navegador por errores
3. Usa Facebook Pixel Helper para debugging
4. Consulta la [documentación oficial de Meta](https://developers.facebook.com/docs/facebook-pixel)