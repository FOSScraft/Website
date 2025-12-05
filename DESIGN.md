# FOSScraft Website - Design Documentation

## Design Philosophy

The FOSScraft website follows modern web design principles:

- **Clean & Minimalist**: Focus on content and functionality
- **Dark Theme**: Easy on the eyes, modern aesthetic
- **Responsive**: Works on all devices
- **Accessible**: WCAG 2.1 AA compliant
- **Fast**: Minimal dependencies, optimized assets
- **User-Focused**: Clear call-to-actions and navigation

## Color Palette

### Primary Colors

```
Primary Purple: #7c3aed
  - Used for: Buttons, headings, gradients
  - Purpose: Main brand color

Secondary Blue: #3b82f6
  - Used for: Links, secondary buttons
  - Purpose: Secondary interactions

Accent Cyan: #06b6d4
  - Used for: Highlights, hovers
  - Purpose: Eye-catching accents
```

### Neutral Colors

```
Dark Background: #0f172a
  - Used for: Page background
  - Purpose: Main dark theme base

Secondary Dark: #1e293b
  - Used for: Card backgrounds
  - Purpose: Subtle depth

Tertiary Dark: #334155
  - Used for: Borders, dividers
  - Purpose: Visual separation

Light Text: #f1f5f9
  - Used for: Primary text
  - Purpose: Main readable text

Muted Text: #cbd5e1
  - Used for: Secondary text
  - Purpose: Lower emphasis text
```

### Semantic Colors

```
Success Green: #10b981
  - Used for: Positive actions, success states

Warning Amber: #f59e0b
  - Used for: Warnings, development builds

Border: #475569
  - Used for: Cards, dividers
```

## Typography

### Font Family

```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Fallback stack ensures compatibility across all systems.

### Font Sizes

```
h1: 4rem (64px) on desktop, 2.5rem (40px) on mobile
h2: 2.5rem (40px) on desktop, 2rem (32px) on mobile
h3: 1.5rem (24px)
p:  1rem (16px)
small: 0.875rem (14px)
```

### Font Weights

```
400: Regular text, paragraphs
500: Navigation, labels
600: Button text
700: Card titles
800: Page headings
```

### Line Height

```
1.6: Default line height for readability
1.8: Long-form content (about page)
```

## Layout & Spacing

### Container

```css
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
```

### Section Padding

```
Desktop: 80px vertical, 20px horizontal
Tablet: 60px vertical, 20px horizontal
Mobile: 40px vertical, 15px horizontal
```

### Gap/Margin Units

```
0.5rem (8px): Small gaps
1rem (16px): Standard gaps
1.5rem (24px): Medium gaps
2rem (32px): Large gaps
3rem (48px): Extra large gaps
```

## Components

### Buttons

**Variants:**
- Primary: Purple with white text
- Secondary: Transparent with border
- Download/Community/Build: Blue with white text

**States:**
- Normal: Base color
- Hover: Darker color, slight elevation, shadow
- Active: Darker color, slight scale down
- Disabled: Grayed out, no interaction

**Padding:** 12px 28px (vertical, horizontal)
**Border Radius:** 8px
**Transition:** 0.3s ease

### Cards

**Background:** rgba(51, 65, 85, 0.5)
**Border:** 1px solid #475569
**Border Radius:** 12px
**Padding:** 2rem
**Transition:** 0.3s ease

**On Hover:**
- Border color becomes accent color
- Transform: translateY(-5px)
- Background becomes more opaque

### Navigation Bar

**Position:** Sticky top
**Background:** rgba(15, 23, 42, 0.95) with backdrop blur
**Border:** 1px bottom border
**Height:** ~60px
**Transitions:** Smooth color changes (0.3s)

### Sections

**Container Width:** Max 1200px centered
**Vertical Alignment:** Top-to-bottom flow
**Background:** Either transparent or rgba(30, 41, 59, 0.5)

## Responsive Breakpoints

```css
/* Desktop */
1200px+

/* Tablet */
768px - 1199px

/* Mobile */
< 768px

/* Small Mobile */
< 480px
```

## Animations

### Fade In

```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
Duration: 0.6s ease-out
```

Used for: Cards when scrolling into view

### Slide Down

```css
@keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}
Duration: 0.5s ease-out
```

Used for: Navigation elements

### Hover Effects

- **Cards**: `translateY(-5px)` with shadow
- **Links**: Color change with underline
- **Buttons**: `translateY(-2px)` with shadow
- **Text**: Smooth color transitions

## Accessibility Features

### Color Contrast

All text meets WCAG AA standards:
- Light text on dark background: 15:1+ ratio
- Links: 8:1+ ratio with background

### Focus States

- All interactive elements have visible focus states
- Focus indicators are high contrast
- Tab order is logical

### Semantic HTML

- Proper heading hierarchy (h1, h2, h3)
- Descriptive link text
- Form labels (if applicable)
- Alt text ready for images

### Keyboard Navigation

- All links and buttons are keyboard accessible
- Tab navigation works smoothly
- No keyboard traps
- Skip links available (if needed)

## Performance Considerations

### CSS Optimization

- Single stylesheet (style.css)
- No unused styles
- Efficient selectors
- Minimal specificity conflicts

### JavaScript

- No frameworks required
- Vanilla JavaScript only
- Minimal DOM manipulation
- Event delegation where appropriate
- Efficient animations using CSS where possible

### Images

- Optimized formats (WebP with fallbacks)
- Responsive sizing
- Lazy loading ready
- Proper alt attributes

## Browser Support

### Supported

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

### Features Used

- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- Smooth Scroll
- Intersection Observer API
- Modern JavaScript (ES6+)

## Customization Guide

### Changing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #7c3aed;
    --secondary-color: #3b82f6;
    --accent-color: #06b6d4;
    /* ... etc ... */
}
```

### Changing Fonts

Update font-family in `css/style.css` body selector:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Adjusting Spacing

Modify section padding in `css/style.css`:

```css
section {
    padding: 80px 20px; /* Change these values */
}
```

### Adding Custom Styles

Add new CSS rules in `css/style.css` at the end:

```css
.your-custom-class {
    /* Your styles */
}
```

## Design Assets Needed

For complete branding implementation:

- [ ] FOSScraft logo (SVG preferred)
- [ ] Favicon (32x32 png, ico)
- [ ] Open Graph image (1200x630px for social sharing)
- [ ] Screenshots of the launcher
- [ ] Team photos (if applicable)
- [ ] Platform icons (Windows, Linux, macOS)

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Multilingual support (i18n)
- [ ] Blog section
- [ ] Screenshot gallery
- [ ] Video tutorial embeds
- [ ] Newsletter signup
- [ ] Live chat support
- [ ] Search functionality

---

For questions about design decisions, please open an issue on the [GitHub repository](https://github.com/FOSScraft/FOSScraft).
