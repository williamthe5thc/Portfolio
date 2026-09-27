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
npm ci
```
Cypress is still a devDependency, and its install step downloads a large
browser binary. The download fails on a restricted or offline network, and
that failure fails the whole install. There is no `cypress.config.*`, so the
specs in `test/cypress/` and the `cy:*` and `test:e2e*` scripts cannot run
anyway. Skip the download:
```bash
CYPRESS_INSTALL_BINARY=0 npm ci              # macOS, Linux, Git Bash
$env:CYPRESS_INSTALL_BINARY="0"; npm ci      # PowerShell
```

3. **Start development server**
```bash
npm run dev
```
Serves http://localhost:3000/ on this computer only. To try the site on a
phone on the same trusted network, run `npm run dev -- --host` for that
session. The dev server used to listen on every network interface and serve
files from the folder above the project, so anyone on the same Wi-Fi could
read them.

4. **Build**
```bash
npm run build           # production, served from /Portfolio/
npm run build:staging   # staging, served from /Portfolio-Staging/
```
The staging build adds `<meta name="robots" content="noindex, nofollow">` so
search engines don't index the copy. Neither build ships source maps.

The contact form sends through EmailJS only if the build has the three
`VITE_EMAILJS_*` variables. Copy `.env.example` to `.env.production` (and
add the same keys to `.env.staging`) and fill them in. Without them the form
opens the visitor's own email app instead. Vite reads these variables at
build time, so rebuild and redeploy after changing them.

5. **Check**
```bash
npx vitest run test/smoke   # renders every route; should always pass
npx vitest run              # full suite: many older suites are stale
npm run lint                # ESLint over src/
npm run type-check          # tsc --noEmit
npx prettier --check "src/**/*.{ts,tsx,css,md}"
```
`npm run format` rewrites files in place. So does `npm run format -- --check`,
because the script already passes `--write`. Use the `npx prettier --check`
line above to check without writing.

6. **Deploy**

There is no `npm run deploy`. Source and deploy target live in different
repositories, so there are two separate commands:

```bash
# Staging - williamthe5thc/Portfolio-Staging, gh-pages branch
# Live at https://williamthe5thc.github.io/Portfolio-Staging/
npm run deploy:staging

# Production - williamthe5thc/Portfolio, gh-pages branch
# Live at https://williamthe5thc.github.io/Portfolio/
npm run deploy:production
```

Each command builds into `dist/`, runs `git init` inside `dist/`, commits
everything there, and force-pushes that commit to the target repository's
`gh-pages` branch. What the scripts do *not* handle yet:

- **They build from your working tree, not from a commit.** Every file in
  `public/` ships, including uncommitted and git-ignored ones. A Word lock
  file (`~$ademic Resume .docx`) reached the live site this way after it had
  been removed from git. Before deploying, commit your changes and check that
  `git status --ignored public` lists nothing.
- **Delete `dist/` before every deploy** (`rm -rf dist`, or
  `rmdir /s /q dist` in cmd). Vite keeps `dist/.git` between builds. If a
  push fails and you re-run with unchanged output, the commit step finds
  nothing to commit and stops before the push, so it looks like it worked when
  it didn't. And a staging deploy followed by a production deploy from the same
  `dist/` carries the staging commit into production's history.
- **They push `main:gh-pages`**, so `git init` has to create a branch called
  `main`. If a deploy fails with `src refspec main does not match any`, run
  `git config --global init.defaultBranch main`.

GitHub Pages hosting notes: the app uses `HashRouter`, so every page lives
under `#/`. `public/404.html` sends path-style links such as `/Portfolio/about`
to `/Portfolio/#/about`. `public/.nojekyll` stops Pages running Jekyll, which
would drop any file whose name starts with `_`.

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
│   ├── content/            # Site content and configuration
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   └── styles/             # Global styles
├── public/                 # Static assets
│   └── images/            
└── config files           
```

## 🔧 Configuration

The site can be customized through several configuration files:

- `src/content/siteData.ts`: Main content configuration
- `tailwind.config.ts`: Theme and styling customization
- `vite.config.ts`: Build and development settings

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
   - `src/content/siteData.ts` - site config, tagline, contact details
   - `src/content/info.ts` - the capability cards on the home and about pages
   - `src/content/projects.ts` - which projects ship, and in what order
   - `src/content/projects/*.ts` - individual project case studies
   - `src/content/experience.ts` - work history
   - Archived projects live in `src/content/projects/archived/` and are not
     imported. Archiving means *moving* the file and removing its import; a
     file left in `archived/` that is still imported is still live.

2. **Resume PDFs**
   - Generated by script rather than exported from Word, so they can be
     regenerated when content changes instead of drifting out of sync with
     the site. Requires `pip install fpdf2`.

3. **Before publishing any document**
   - Check it for personal emails, phone numbers and credentials first. A
     case-study PDF was once served publicly with a collaborator's email and
     a plaintext password on page one.

4. **Deployment**
   - See the deploy commands above, and the caveats under them.

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

 Future Enhancements
🎯 In Progress
update code so that each function is it's own file 

Enhanced project card animations for better user engagement
Scroll improvements including Back to Top button
Enhanced core competencies animations
Analytics implementation for user behavior tracking
Accessibility improvements (WCAG compliance)
Contact form submission functionality

🧭 Navigation Improvements

Implementation of subtle underline animation for nav items
Enhanced current page indicator
Improved mobile navigation experience
Breadcrumb navigation for deeper pages

🎨 Visual and UI Enhancements

Creative loading screen with branded animation
Smoother page transitions
Dark mode implementation
Enhanced hover states and micro-interactions

📝 Content Additions

Documentation Integration

Resume PDF viewer integration
Cover letter showcase
Downloadable professional documents


Portfolio Expansion

Additional work samples with detailed case studies
Project metrics and quantifiable results
Before/after comparisons for projects
Integration with external presentations and demos


Social Proof

Testimonials section (when available)
Client feedback integration
Project success stories



🔗 External Integration

Links to live project demonstrations
Integration with presentation platforms (SlideShare, etc.)
Connection to external learning modules
Portfolio piece preview functionality

🛠 Technical Improvements

Performance Optimization

Image optimization and lazy loading
Code splitting for faster load times
Cache optimization
Performance metrics monitoring


Development Workflow

Enhanced build process
Automated testing implementation
CI/CD pipeline improvements
Code quality tools integration


SEO and Analytics

Enhanced meta data
Schema markup implementation
Advanced analytics tracking
Performance monitoring



💡 Interactive Features

Interactive project timelines
Filterable project gallery
Dynamic skill visualization
Interactive learning samples

📱 Responsive Enhancements

Enhanced mobile experience
Touch-friendly interactions
Responsive images and media
Mobile-first animations

🔒 Security Updates

Form submission security
Content protection
Data encryption
Security best practices implementation

Implementation Timeline
Phase 1 (Next 30 Days)

Navigation animations and improvements
Loading screen implementation
Initial content additions (resume, cover letter)
Basic analytics setup

Phase 2 (60-90 Days)

Project metrics integration
External presentation links
Enhanced project cards
Testimonials section structure

Phase 3 (90+ Days)

Advanced interactive features
Full accessibility implementation
Complete analytics integration
Performance optimizations

Contributing
Feedback and suggestions are welcome! Please feel free to submit issues or pull requests to help improve this portfolio.
Updates and Maintenance
This portfolio is actively maintained and updated. Check back regularly for:

New project additions
Updated content and demonstrations
Enhanced features and functionality
Improved user experience elements

## 📄 License

This project is licensed under the MIT License.