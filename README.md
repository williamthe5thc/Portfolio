# W. Jordan Charles Portfolio

A modern, responsive portfolio website showcasing instructional design projects and expertise. Built with React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](public/Images/projects/preview.png)

## 🌟 Features

- **Modern Design System**
  - Custom color theming with Tailwind CSS
  - Consistent component library
  - Responsive layouts
  - Smooth animations and transitions

- **Modular Architecture**
  - Reusable UI components
  - Centralized data management
  - DRY principles
  - Type-safe implementations

- **SEO Optimized**
  - Meta tag management
  - Semantic HTML structure
  - OpenGraph support
  - Proper heading hierarchy

- **Interactive Elements**
  - Dynamic project filtering
  - Animated transitions
  - Form validation
  - Loading states

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router
- **Build Tool**: Vite
- **Type Safety**: JavaScript
- **Form Handling**: Custom implementation

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/williamthe5thc/Portfolio.git
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🗂️ Project Structure

```
src/
├── components/
│   ├── about/
│   │   └── index.jsx
│   ├── contact/
│   │   └── index.jsx
│   ├── shared/
│   │   └── index.jsx
│   ├── ui/
│   │   └── index.jsx
│   ├── EnhancedComponents.jsx
│   ├── LoadingScreen.jsx
│   └── Navigation.jsx
├── data/
│   └── siteData.js
├── pages/
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   └── PortfolioPage.jsx
├── App.jsx
└── main.jsx
```

## 🎨 Color System

- **Primary Colors**: Blue shades (primary-50 to primary-900)
- **Secondary Colors**: Purple shades (secondary-50 to secondary-900)
- **Accent Colors**:
  - Green (light/default/dark)
  - Orange (light/default/dark)
  - Red (light/default/dark)
- **Background Colors**: Light/Default/Dark
- **Text Colors**: Primary/Secondary/Light

## 🧩 Components

### UI Components
- `<Button>` - Versatile button component with variants
- `<Card>` - Container component with consistent styling
- `<Tag>` - Label/badge component with color variants
- `<Section>` - Section wrapper with background options

### Shared Components
- `<SEO>` - Meta tag management
- `<PageHeader>` - Consistent page headers
- `<PageLayout>` - Base layout wrapper
- `<GridContainer>` - Responsive grid system

### Page-Specific Components
- About page components (Journey, Philosophy cards)
- Contact form components
- Portfolio grid and filters

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint system:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🚀 Deployment

1. Update `vite.config.js` with your base URL:
```javascript
export default defineConfig({
  base: '/Portfolio/',
  // ... other config
})
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## 💡 Development Notes

- Use the shared components from `components/ui` for consistency
- Follow the color system defined in `tailwind.config.js`
- Keep data updates centralized in `data/siteData.js`
- Maintain responsive design patterns
- Use animation variants from shared components

## 📝 Future Enhancements

- [ ] Add dark mode support
- [ ] Implement blog section
- [ ] Add case studies
- [ ] Enhance animations
- [ ] Add search functionality
- [ ] Implement CMS integration

## 👤 Contact

W. Jordan Charles
- LinkedIn: [jordan-charles](https://linkedin.com/in/jordan-charles)
- Email: williamthe5thc@gmail.com

