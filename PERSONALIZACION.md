# Portafolio de Desarrollador - Guía de Personalización

## 🎯 Bienvenido

Tu portafolio ha sido estructurado y diseñado. Ahora es momento de personalizarlo con tu información.

## 📝 Qué Personalizar

### 1. **Información Personal** - Todas las páginas

Busca y reemplaza estos datos en todos los archivos:

```
Tu Nombre Aquí → Tu nombre completo
tu@email.com → Tu email real
+1 (XXX) XXX-XXXX → Tu teléfono
Tu Ciudad, País → Tu ubicación
https://github.com → Tu perfil de GitHub
https://linkedin.com → Tu perfil de LinkedIn
```

### 2. **Página de Inicio** (`src/app/pages/PortfolioHome.jsx`)

**Líneas a personalizar:**

- **Título Principal**: "Hola, Soy Desarrollador Web" → Tu título personalizado
- **Subtítulo**: "Transformo ideas en soluciones..." → Tu frase personal
- **Stats**: Números de proyectos, habilidades, años de experiencia
- **Servicios**: Descripción de qué ofreces

**Sugerencias de títulos:**
- "Desarrollador Web Full Stack"
- "Desarrollador Frontend Especializado en React"
- "Desarrollador Web y Diseñador"

### 3. **Acerca de Mí** (`src/app/pages/PortfolioAbout.jsx`)

Personaliza:

- **Descripción General**: Párrafos sobre ti
- **Metas y Aspiraciones**: Tu corto, mediano y largo plazo
- **Información General**: Todos los datos personales

### 4. **Habilidades** (`src/app/pages/PortfolioSkills.jsx`)

Modifica:

```javascript
const skills = [
  { name: 'Tu Habilidad', level: 90, category: 'Categoría' },
  // ... más habilidades
];

const categories = ['Frontend', 'Backend', 'Herramientas']; // Ajusta según necesites
```

### 5. **Proyectos** (`src/app/pages/PortfolioProjects.jsx`)

Para cada proyecto reemplaza:

```javascript
{
  id: 1,
  title: 'Nombre del Proyecto',
  description: 'Descripción del proyecto',
  technologies: ['React', 'Tailwind CSS'], // Tecnologías usadas
  image: '🏪', // Emoji representativo
  link: 'https://github.com/tu-repo',
  skills: ['Frontend', 'Backend'], // Habilidades aplicadas
}
```

### 6. **Educación y Experiencia** (`src/app/pages/PortfolioEducation.jsx`)

Actualiza:

**Educación:**
```javascript
{
  id: 1,
  degree: 'Tu Titulo de Estudio',
  institution: 'Tu Instituto/Universidad',
  year: '2024',
  description: 'Descripción del programa',
  skills: ['Habilidades aprendidas'],
}
```

**Experiencia:**
```javascript
{
  id: 1,
  position: 'Tu Posición',
  company: 'Nombre de la Empresa',
  year: '2024',
  description: 'Descripción del trabajo',
  achievements: ['Logro 1', 'Logro 2'],
}
```

### 7. **Contacto** (`src/app/pages/PortfolioContact.jsx`)

- Actualiza el email, teléfono y ubicación
- Conecta el formulario a un servicio (EmailJS, Formspree, etc.)
- Verifica los enlaces de LinkedIn y GitHub

### 8. **Navegación** (`src/shared/components/layout/PortfolioNavbar.jsx`)

Personaliza:

```javascript
const navLinks = [
  { label: 'Inicio', to: '/portfolio' },
  { label: 'Acerca de mí', to: '/portfolio/about' },
  // ... más enlaces
];
```

### 9. **Footer** (`src/shared/components/layout/PortfolioFooter.jsx`)

- Actualiza los links en "Enlaces Rápidos"
- Verifica las URLs de redes sociales
- Personaliza el copyright

## 🎨 Personalizaciones Visuales (Opcional)

### Colores

El portafolio usa una paleta de colores. Para cambiarla, busca y reemplaza:

- `blue-600` → Tu color primario
- `purple-600` → Tu color secundario
- `slate-900` → Tu color de texto

Tailwind colors disponibles: gray, red, orange, yellow, green, teal, blue, cyan, indigo, violet, purple, pink

### Emojis

Reemplaza los emojis en:

- Página de inicio: "💻" → Tu emoji preferido
- Proyectos: "🏪", "🛍️", etc.
- Metas: "🎯", "📈", "🚀"

## 🔗 Integración de Formulario de Contacto

El formulario actualmente es estático. Para hacerlo funcional, usa:

**Opción 1: EmailJS**
```bash
npm install @emailjs/browser
```

**Opción 2: Formspree**
Solo necesitas cambiar la acción del formulario

**Opción 3: API Backend**
Conecta a tu servidor backend

## 📸 Agregar Fotos

1. Coloca tus imágenes en `src/assets/img/`
2. Impórtalas en los componentes
3. Reemplaza los emojis/gradientes con `<img>` tags

Ejemplo:
```jsx
<img src={profileImage} alt="Mi foto" className="w-80 h-80 rounded-lg" />
```

## 🚀 Próximos Pasos

1. ✅ Personaliza toda la información
2. ✅ Conecta el formulario de contacto
3. ✅ Agrega tus proyectos reales
4. ✅ Prueba en móvil
5. ✅ Despliega en hosting (Vercel, Netlify, etc.)

## 📱 Verificar Responsividad

```bash
npm run dev
```

Prueba en diferentes tamaños de pantalla:
- Desktop (1920px)
- Tablet (768px)
- Móvil (375px)

## ✨ Tips Finales

- Mantén el texto conciso y al grano
- Las imágenes deben ser de alta calidad
- Usa URLs cortas para GitHub
- Verifica todos los enlaces antes de publicar
- Solicita feedback a otros desarrolladores

---

¡Tu portafolio está listo para personalizarse! 🎉
