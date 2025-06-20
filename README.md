# Philos Himm - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing my professional experience, projects, and skills in Business Technology Management.

## 🚀 Live Demo

[View Live Portfolio](https://philoshimm.ca/) <!-- Add your deployed URL -->

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Key Improvements from HTML Version](#key-improvements-from-html-version)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contact](#contact)

## 🎯 Overview

This portfolio website represents a complete redesign and rebuild from my previous HTML-based portfolio. It showcases my journey as a Business Technology Management student at Toronto Metropolitan University, highlighting my experience in data analytics, automation, and front-end development.

## ✨ Features

### Core Functionality
- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Theme Toggle** - User preference with system detection
- **Smooth Animations** - Framer Motion animations throughout
- **Interactive Navigation** - Smooth scrolling and modern navigation
- **Resume Integration** - PDF viewing in new tabs
- **Dynamic Routing** - Individual pages for each work experience

### Sections
- **Hero Section** - Professional introduction with animated typography
- **Work Experience** - Detailed professional history with individual pages
- **Projects** - Showcase of key projects and achievements
- **Skills** - Technical and professional competencies
- **Education** - Academic background and certifications
- **Contact** - Direct communication options

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - Modern, accessible component library
- **Lucide React** - Beautiful, customizable icons
- **Framer Motion** - Smooth animations and transitions

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **VS Code** - Development environment

## 🔄 Key Improvements from HTML Version

### Technical Enhancements
| Aspect | Old HTML Version | New Next.js Version |
|--------|------------------|-------------------|
| **Framework** | Static HTML/CSS/JS | Next.js 14 with TypeScript |
| **Styling** | Custom CSS | Tailwind CSS + shadcn/ui |
| **Responsiveness** | Basic media queries | Advanced responsive design |
| **Performance** | Standard loading | Optimized images, lazy loading |
| **SEO** | Basic meta tags | Next.js SEO optimization |
| **Animations** | CSS transitions | Framer Motion animations |

### User Experience Improvements
- ✅ **Dark/Light Theme Toggle** - Previously not available
- ✅ **Smooth Page Transitions** - Enhanced navigation experience
- ✅ **Individual Experience Pages** - Detailed view of each role
- ✅ **Resume PDF Integration** - Direct viewing in browser
- ✅ **Mobile-First Design** - Improved mobile experience
- ✅ **Accessibility Features** - Screen reader support, keyboard navigation
- ✅ **Loading States** - Better user feedback
- ✅ **Interactive Elements** - Hover effects, button animations

### Content & Design Improvements
- 🎨 **Modern UI Components** - Professional component library
- 📱 **Better Mobile Layout** - Optimized for all screen sizes
- 🎭 **Consistent Theming** - Unified color scheme and typography
- 📊 **Enhanced Project Showcase** - Better visual presentation
- 💼 **Detailed Work Experience** - Comprehensive role descriptions
- 🔗 **Social Media Integration** - LinkedIn, GitHub, Email links

### Development Experience
- 🔧 **Type Safety** - TypeScript for fewer runtime errors
- 🧩 **Component Reusability** - Modular, maintainable code
- 🚀 **Performance Optimization** - Next.js built-in optimizations
- 📦 **Modern Build Process** - Automated bundling and optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PhilosHimm/NewWebsiteportfolio.git
   cd NewWebsiteportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
NewWebsiteportfolio/
├── app/                    # Next.js 14 App Router
│   ├── experience/[id]/    # Dynamic experience pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   ├── hero-section.tsx   # Landing section
│   ├── work-experience-section.tsx
│   └── ...
├── public/                # Static assets
│   ├── ProfilePic.jpg
│   ├── Philos Himm Resume.pdf
│   └── ...
├── styles/                # Custom CSS
└── lib/                   # Utility functions
```

## 🌐 Deployment

This project is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean App Platform**

### Deploy with Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

## 📈 Performance Features

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based code splitting
- **SEO Optimization** - Meta tags, Open Graph, structured data
- **Progressive Web App** - Service worker for offline functionality
- **Fast Loading** - Optimized bundle sizes and caching

## 🎨 Customization

### Theme Colors
Colors are defined in `tailwind.config.ts` and can be easily customized:
```typescript
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      // Add your custom colors
    }
  }
}
```

### Content Updates
- Update experience data in `app/experience/[id]/page.tsx`
- Modify project information in `components/projects-section.tsx`
- Edit skills in `components/skills-section.tsx`

## 📧 Contact

**Philos Himm**
- 📧 Email: [phimm@torontomu.ca](mailto:phimm@torontomu.ca)
- 💼 LinkedIn: [linkedin.com/in/philos-himm](https://www.linkedin.com/in/philos-himm/)
- 🐙 GitHub: [github.com/PhilosHimm](https://github.com/PhilosHimm)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ by Philos Himm - Business Technology Management Student at Toronto Metropolitan University*