# Style Consistency Fixes Required

## Priority 1: Spacing Standardization

### Update HomePage.tsx
```tsx
// Line ~100: Change from py-16 to py-20
<section id="impact" className="py-20 bg-primary-50">

// Ensure all major sections use py-20
```

### Update AboutPage.tsx  
```tsx
// Line ~165: Change from py-10 to py-12
<SectionContainer className="py-12">

// Standardize all section spacing to py-20 or py-12 (subsections)
```

## Priority 2: Container Width Standardization

**Rule:** 
- Reading content: `max-w-4xl`
- Grid layouts: `max-w-6xl`
- Full width: `container mx-auto`

## Priority 3: Button Styling

**ContactPage.tsx - Line ~158:**
```tsx
// Standardize CTA buttons
<Button 
  href="/contact" 
  variant="primary" 
  size="lg"
  className="bg-primary-700 text-white hover:bg-primary-800 border-primary-700 font-semibold shadow-md"
>
  Let's Connect
</Button>
```

## Priority 4: Gradient Consistency

**HomePage.tsx - Line ~148:**
```tsx
// Standardize gradient
<section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
```

## Priority 5: Color Class Usage

**Find and replace hardcoded colors:**
- `text-blue-600` → `text-primary-600`
- `bg-blue-600` → `bg-primary-600`
- etc.
