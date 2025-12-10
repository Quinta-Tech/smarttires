# Configuración de Google Analytics 4 (GA4)

## ✅ Instalación Completada

Se ha configurado Google Analytics 4 en tu aplicación React con tracking avanzado de eventos y engagement.

## 📊 Eventos Implementados

### **1. Eventos Automáticos de Página**
- `page_view` - Vista de página automática
- `scroll` - Tracking de scroll (25%, 50%, 75%, 90%)
- `timing_complete` - Tiempo en página (30s, 60s, 2min, 5min)

### **2. Eventos de Formulario de Contacto**
- `form_start` - Usuario inicia el formulario
- `form_progress` - Progreso por pasos del formulario
- `form_submit` - Formulario completado exitosamente
- `exception` - Errores en el formulario

### **3. Eventos de Interacción (CTA)**
- `click` - Botones "Get in Touch"
- `click` - Botón Calendly "Request Demo"
- Incluye ubicación del botón para análisis detallado

### **4. Eventos de Personalización**
- `language_change` - Cambio de idioma (ES ↔ EN)

### **5. Eventos de Contenido**
- `view_item` - Visualización de secciones importantes
- `view_item` - Testimonios y prueba social
- `calculator_use` - Uso de calculadora de ahorros

### **6. Eventos de Navegación Externa**
- `click` - Links externos
- `social_interaction` - Redes sociales
- `file_download` - Descargas de recursos

### **7. Eventos de Video (si implementas)**
- `video_play` - Reproducción de video
- `video_pause` - Pausa de video
- `video_complete` - Video completado

## 🔧 Configuración Requerida

### 1. Crear Propiedad GA4
1. Ve a [Google Analytics](https://analytics.google.com)
2. Crea una nueva propiedad GA4
3. Configura el stream de datos web
4. Copia el **Measurement ID** (formato: G-XXXXXXXXXX)

### 2. Configurar Variables de Entorno
Edita el archivo `.env`:

```env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Verificar Instalación

#### Opción 1: Google Analytics DebugView
1. En GA4, ve a **Configure > DebugView**
2. Navega por tu sitio en modo desarrollo
3. Verifica que lleguen los eventos en tiempo real

#### Opción 2: Google Tag Assistant
1. Instala [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Verifica que GA4 esté funcionando correctamente

## 📈 Métricas Clave para Analizar

### **Engagement y Comportamiento**
- **Scroll Depth**: ¿Qué porcentaje de usuarios llega al 75% de la página?
- **Time on Page**: ¿Cuánto tiempo pasan en cada sección?
- **Section Views**: ¿Qué secciones son más vistas?

### **Conversión y Lead Generation**
- **Form Completion Rate**: % de usuarios que completan el formulario
- **Demo Requests**: Clicks en Calendly
- **CTA Performance**: Efectividad de botones "Get in Touch"

### **Experiencia de Usuario**
- **Language Preferences**: ¿Prefieren español o inglés?
- **Device Usage**: Desktop vs Mobile
- **Traffic Sources**: ¿De dónde vienen tus visitantes?

### **Funnel de Conversión**
1. **Page View** → **Section Views** → **CTA Clicks** → **Form Start** → **Form Complete**

## 🎯 Eventos Sugeridos Adicionales

### **Para Mejorar el Análisis de Tráfico:**

```javascript
// Búsqueda interna (si implementas)
gaEvents.search('telemetría', 5);

// Interacción con calculadora
gaEvents.useSavingsCalculator(15000);

// Visualización de testimonios
gaEvents.viewTestimonials();

// Clicks en información de contacto
gaEvents.viewContactInfo();

// Descargas de brochures/PDFs
gaEvents.downloadResource('brochure_quinta_tech.pdf', 'pdf');
```

### **Para Medir Engagement Avanzado:**

```javascript
// Hover en elementos importantes
gaEvents.sendGAEvent('hover_interaction', {
  category: 'engagement',
  label: 'pricing_section'
});

// Clicks en números/estadísticas
gaEvents.sendGAEvent('stat_interaction', {
  category: 'engagement',
  label: 'savings_statistic'
});

// Interacción con imágenes/videos
gaEvents.sendGAEvent('media_interaction', {
  category: 'engagement',
  label: 'product_image'
});
```

## 📊 Configuración de Conversiones en GA4

### 1. Eventos de Conversión Recomendados:
- `form_submit` (Formulario completado)
- `click` con `button_name: 'Request Demo'` (Demo solicitada)
- `timing_complete` con `time_seconds >= 120` (Engagement alto)

### 2. Configurar en GA4:
1. Ve a **Configure > Conversions**
2. Marca estos eventos como conversiones
3. Configura objetivos y embudos

## 🔍 Debugging y Monitoreo

### Verificar Eventos en Desarrollo:
```javascript
// En la consola del navegador
console.log('GA Measurement ID:', process.env.REACT_APP_GA_MEASUREMENT_ID);

// Ver dataLayer
console.log(window.dataLayer);
```

### Eventos en Tiempo Real:
1. GA4 > **Reports > Realtime**
2. Navega por tu sitio
3. Verifica que aparezcan los eventos

## 🚀 Optimizaciones Recomendadas

### 1. **Segmentación de Audiencias:**
- Usuarios que ven >75% de la página
- Usuarios que pasan >2 minutos
- Usuarios que cambian idioma
- Usuarios que interactúan con CTA

### 2. **Análisis de Cohortes:**
- Comportamiento por fuente de tráfico
- Retención por idioma preferido
- Conversión por dispositivo

### 3. **Atribución Personalizada:**
- Último click vs primer click
- Análisis de touchpoints múltiples
- Valor de cada interacción

## 📱 Consideraciones de Privacidad

- ✅ Respeta configuraciones de Do Not Track
- ✅ Compatible con GDPR/CCPA
- ✅ No trackea información personal
- ✅ Modo debug solo en desarrollo

## 🆘 Troubleshooting

### Eventos no aparecen:
1. Verifica el Measurement ID
2. Revisa la consola por errores
3. Confirma que el script se carga
4. Usa DebugView en GA4

### Datos inconsistentes:
1. Verifica filtros en GA4
2. Revisa la configuración de timezone
3. Confirma que no hay adblockers activos