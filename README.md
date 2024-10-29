# W. Jordan Charles Portfolio

A modern, responsive portfolio showcasing my work as an Instructional Designer & Learning Solutions Developer. Built with React and Tailwind CSS, focusing on clean design and engaging user experience.

![Portfolio Screenshot](./public/images/projects/coming_soon.png)
<!-- TODO: Replace with actual screenshot of your portfolio -->

## ✨ Features

- **Modern Design**: Clean, responsive interface built with Tailwind CSS
- **Smooth Animations**: Page transitions and interactions using Framer Motion
- **Project Showcase**: Dynamic portfolio grid with filtering capabilities
- **Contact Form**: Interactive contact system
- **Responsive Layout**: Optimized for all device sizes
- **Error Handling**: Robust error boundaries and fallbacks

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/williamthe5thc/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Deploy to GitHub Pages**
```bash
npm run deploy
```

## 💻 Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router 6
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📂 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── shared/         # Common components
│   │   └── ui/             # Basic UI elements
│   ├── data/               # Site content and configuration
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   └── styles/             # Global styles
├── public/                 # Static assets
│   └── images/            
└── config files           
```

## 🔧 Configuration

The site can be customized through several configuration files:

- `src/data/siteData.js`: Main content configuration
- `tailwind.config.js`: Theme and styling customization
- `vite.config.js`: Build and development settings

## 📱 Responsive Design

The portfolio is fully responsive across devices:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Color Scheme

```javascript
// Primary Colors
primary: {
  600: '#0284c7', // Main brand color
  700: '#0369a1', // Hover states
}

// Background
background: {
  light: '#f8fafc',
  DEFAULT: '#f1f5f9',
}

// Text Colors
text: {
  primary: '#1e293b',
  secondary: '#64748b',
}
```

## 🔄 Update Guide

To update the portfolio content:

1. **Content Updates**
   - Edit `src/data/siteData.js` for text and metadata
   - Add new project images to `public/images/projects/`

2. **Deployment**
   - Run `npm run build` to create production build
   - Run `npm run deploy` to publish to GitHub Pages

## 👤 Contact

Jordan Charles
- 📧 Email: williamthe5thc@gmail.com
- 🔗 LinkedIn: [jordan-charles](https://linkedin.com/in/jordan-charles)
- 📍 Location: Salt Lake City, Utah

## 📈 Future Enhancements

Planned improvements:
- [ ] Add case studies for key projects
- [ ] Implement dark mode
- [ ] Add analytics tracking
- [ ] Enhance project filtering
- [ ] Add testimonials section

## 📄 License

This project is licensed under the MIT License.