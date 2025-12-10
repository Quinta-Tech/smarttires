# Sistema de Demos de Llantas

Sistema reutilizable para crear páginas demo de diferentes modelos de llantas.

## 🎯 Rutas Disponibles

- `/rlb400-demo` - Demo del modelo RLB400
- `/fr610-demo` - Demo del modelo FR610
- `/rt500-demo` - Demo del modelo RT500

## 📁 Estructura

```
TireDemo/
├── TireDemo.tsx          # Componente genérico reutilizable
├── TireDemo.css          # Estilos compartidos
├── data/
│   ├── rlb400Data.ts     # Datos del RLB400
│   ├── fr610Data.ts      # Datos del FR610
│   └── rt500Data.ts      # Datos del RT500
└── README.md
```

## 🚀 Cómo Agregar una Nueva Llanta

### 1. Crear archivo de datos

Crea un nuevo archivo en `src/components/TireDemo/data/tuModeloData.ts`:

```typescript
export const tuModeloData = {
  modelName: 'TU-MODELO',
  subtitle: 'Descripción corta del neumático',
  description: 'Descripción larga y detallada...',
  heroImage: '/tu-imagen-hero.jpg',
  slides: [
    {
      id: 1,
      image: '/tu-imagen-1.png',
      points: [
        {
          number: '1.1',
          text: 'Descripción de la ventaja',
          position: { top: '10%', left: '68%' }
        }
      ]
    },
    // Más slides...
  ],
  specifications: [
    {
      codigo: 'XXX',
      tamano: 'XXX',
      // ... más campos
    }
  ]
};
```

### 2. Crear componente

Crea `src/components/TuModeloDemo/TuModeloDemo.tsx`:

```typescript
import TireDemo from '../TireDemo/TireDemo';
import { tuModeloData } from '../TireDemo/data/tuModeloData';

export default function TuModeloDemo() {
  return (
    <TireDemo
      modelName={tuModeloData.modelName}
      subtitle={tuModeloData.subtitle}
      description={tuModeloData.description}
      heroImage={tuModeloData.heroImage}
      slides={tuModeloData.slides}
      specifications={tuModeloData.specifications}
    />
  );
}
```

### 3. Agregar ruta

En `src/main.tsx`:

```typescript
import TuModeloDemo from './components/TuModeloDemo/TuModeloDemo';

// En el router:
{
  path: "/tu-modelo-demo",
  element: <TuModeloDemo />
}
```

## 🎨 Personalización

### Posicionar puntos en las imágenes

Los puntos se posicionan con porcentajes:

```typescript
position: { top: '50%', left: '68%' }
```

- `top`: 0% (arriba) a 100% (abajo)
- `left`: 0% (izquierda) a 100% (derecha)

**Recomendaciones:**
- Lado izquierdo: `left: '5%'` a `'20%'`
- Lado derecho: `left: '68%'` a `'80%'`
- Arriba: `top: '10%'` a `'25%'`
- Centro: `top: '45%'` a `'55%'`
- Abajo: `top: '75%'` a `'85%'`

### Imágenes requeridas

Para cada modelo necesitas:
1. **Imagen hero** (fondo de la sección principal)
2. **Imagen slide 1** (vista general de la llanta)
3. **Imagen slide 2** (zoom o detalle de la llanta)
4. **Imagen slide 3** (sensor.png - compartida)
5. **Imagen slide 4** (quinta_tire_sensor.png - compartida)

### Slides 3 y 4

Los últimos dos slides son estándar para todas las llantas:
- **Slide 3**: Muestra el sensor con descripción de tecnología
- **Slide 4**: Muestra la plataforma con animación de transmisión de datos

## 📱 Responsive

- **Desktop (>1024px)**: Puntos flotantes con líneas y recuadros
- **Tablet/Móvil (≤1024px)**: Bullet points debajo de la imagen

## 🎯 Características

✅ Componente 100% reutilizable
✅ Animaciones con Framer Motion
✅ Responsive automático
✅ Slider con 4 slides por defecto
✅ Tabla de especificaciones
✅ Sección de tecnología IoT
✅ Animación de transmisión de datos en último slide
