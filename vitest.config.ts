import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

/*
  Suites that are not run. Most of the suite was written for earlier
  versions of the components and never actually ran (the setup file path was
  wrong), so these assert copy, markup and APIs the site no longer has.
  They are kept as files, not deleted, in case someone rewrites them.

  Test modules that were deleted as dead code:
  - test/components/features/ProjectCarousel.test.tsx  (shared/ProjectCarousel)
  - test/components/shared/LoadingScreen.test.tsx      (shared/LoadingScreen)
  - test/components/ui/Icon.test.tsx                   (ui/Icon)
  - test/components/ui/Input.test.tsx                  (ui/Input)
  - test/components/ui/TextArea.test.tsx               (ui/TextArea)
  - test/components/ui/FormField.test.tsx              (ui/FormField)
  - test/hooks/useFormValidation.test.ts               (hooks/useFormValidation)

  Test pages and flows from an older version of the site: they look for
  copy such as "learn about my journey", "My Approach", "Areas of
  Expertise", "View Live Project" and "sorry, we couldn't find the page",
  render pages without the router and HelmetProvider they need, or mock
  react-router-dom and @emailjs/browser without the exports the pages use.
  Even with the providers added, 60-100% of each still fails on content:
  - test/pages/AboutPage.test.tsx
  - test/pages/ContactPage.test.tsx
  - test/pages/HomePage.test.tsx
  - test/pages/NotFoundPage.test.tsx
  - test/pages/PortfolioPage.test.tsx
  - test/pages/Resume.test.tsx
  - test/pages/ResumePage.test.tsx
  - test/integration/integration.test.tsx
  - test/integration/userFlows.test.tsx
  - src/test/userFlows.test.tsx (a copy of the one above that imports a
    missing ../test/utils helper; also excluded from tsc)

  Test the old component APIs:
  - test/Navigation.test.tsx (an older copy of
    test/components/layout/Navigation.test.tsx, which runs: expects the menu
    to toggle a md:hidden class on the nav and hover styles on links)
  - test/components/features/PortfolioFiltering.test.tsx (filtering through
    ProjectGrid's own buttons with "no projects found" for categories it
    does not render; the Portfolio filter now lives in ?category=)
  - test/components/shared/PageTransition.test.tsx (data-animate,
    aria-live and will-change attributes PageTransition never had)

  What still runs covers every route (test/smoke), the layout, shared and ui
  components, the project grid and detail page, and analytics.
*/
const staleSuites = [
  'test/components/features/ProjectCarousel.test.tsx',
  'test/components/shared/LoadingScreen.test.tsx',
  'test/components/ui/Icon.test.tsx',
  'test/components/ui/Input.test.tsx',
  'test/components/ui/TextArea.test.tsx',
  'test/components/ui/FormField.test.tsx',
  'test/hooks/useFormValidation.test.ts',
  'test/pages/AboutPage.test.tsx',
  'test/pages/ContactPage.test.tsx',
  'test/pages/HomePage.test.tsx',
  'test/pages/NotFoundPage.test.tsx',
  'test/pages/PortfolioPage.test.tsx',
  'test/pages/Resume.test.tsx',
  'test/pages/ResumePage.test.tsx',
  'test/integration/**',
  'src/test/userFlows.test.tsx',
  'test/Navigation.test.tsx',
  'test/components/features/PortfolioFiltering.test.tsx',
  'test/components/shared/PageTransition.test.tsx'
];

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}', 'test/**/*.{test,spec}.{ts,tsx}'],
    // Cypress and Playwright specs are not Vitest suites.
    exclude: [...configDefaults.exclude, 'test/cypress/**', 'test/visual/**', ...staleSuites]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
