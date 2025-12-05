# FOSScraft Website - Quick Start Guide

## 📋 Overview

This directory contains the complete website for **FOSScraft** - a free and open-source Minecraft launcher based on Prism Launcher.

The website is built with:
- **HTML5** for structure
- **CSS3** for responsive design
- **Vanilla JavaScript** for interactivity

No build tools, no frameworks - pure, fast web standards.

## 📁 Directory Structure

```
website/
├── index.html              # Home page
├── download.html           # Download page
├── community.html          # Community page
├── about.html              # About page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # Interactive features
├── assets/                 # Images, icons, etc.
├── README.md               # Website documentation
├── SITEMAP.md              # Site structure and URLs
├── DESIGN.md               # Design guidelines
├── DEPLOYMENT.md           # Deployment instructions
├── netlify.toml            # Netlify configuration
├── package.json            # Project metadata
└── .gitignore              # Git ignore rules
```

## 🚀 Getting Started

### 1. Local Testing

**Option A: Python (Recommended)**
```bash
cd website
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

**Option B: Node.js**
```bash
cd website
npx http-server
# Then open http://localhost:8080 in your browser
```

**Option C: Direct**
Simply open `index.html` in your browser (no server required for basic testing)

### 2. File Organization

- **HTML Pages**: All `.html` files in the root directory
- **Styles**: Everything in `css/style.css`
- **Scripts**: Everything in `js/script.js`
- **Assets**: Images and icons in `assets/` folder

### 3. Navigation

Internal links are relative:
```html
<a href="index.html">Home</a>
<a href="download.html">Download</a>
<a href="community.html">Community</a>
<a href="about.html">About</a>
```

Anchor links work within pages:
```html
<a href="#features">Jump to Features</a>
```

## 🎨 Customization

### Change Colors

Edit CSS variables at the top of `css/style.css`:

```css
:root {
    --primary-color: #7c3aed;      /* Purple */
    --secondary-color: #3b82f6;    /* Blue */
    --accent-color: #06b6d4;       /* Cyan */
}
```

### Update Content

Simply edit the HTML files - they're straightforward and well-commented.

### Modify Styling

All CSS is in `css/style.css`. Changes are immediately visible in browser.

### Add Interactivity

Edit `js/script.js` to add or modify functionality.

## 📱 Responsive Design

The website automatically adapts to:
- 📱 Mobile phones (< 480px)
- 📱 Tablets (480px - 768px)
- 💻 Desktops (768px+)

Test responsiveness using browser DevTools:
- Press `F12` to open DevTools
- Press `Ctrl+Shift+M` to toggle device mode
- Try different screen sizes

## ✨ Features

### ✅ Implemented
- [x] Responsive design for all devices
- [x] Smooth scrolling navigation
- [x] Animated card elements
- [x] Dark theme with accent colors
- [x] Cross-browser compatible
- [x] Accessibility features (WCAG AA)
- [x] Fast load times
- [x] SEO-optimized

### 🔄 Ready to Add
- [ ] Analytics tracking (Google Analytics, Plausible)
- [ ] Light/Dark mode toggle
- [ ] Multi-language support
- [ ] Newsletter signup
- [ ] Blog section
- [ ] Contact form

## 🚢 Deployment

### Fastest: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `website` folder
3. Done! 🎉

### Popular Alternatives

- **GitHub Pages**: Free, built-in to GitHub
- **Vercel**: Amazing performance, made by Next.js creators
- **Firebase Hosting**: Google's hosting platform
- **Traditional Hosting**: Any FTP-based host works

See `DEPLOYMENT.md` for detailed instructions.

## 📊 Pages Overview

### Home (`index.html`)
- Hero section with CTAs
- Features showcase
- Download links
- Community platforms
- About section

### Download (`download.html`)
- Windows/Linux/macOS downloads
- Development builds
- Distribution packages
- Build status

### Community (`community.html`)
- Discord, Matrix, Reddit
- How to contribute
- Community guidelines

### About (`about.html`)
- Project mission
- Credits to Prism Launcher
- Sponsors and partners
- License information

## 🔗 Important Links

Update these in the HTML files:

```html
<!-- External Links -->
https://github.com/FOSScraft/FOSScraft          <!-- Main repo -->
https://fosscraft.org/discord                   <!-- Discord -->
https://fosscraft.org/matrix                    <!-- Matrix -->
https://fosscraft.org/reddit                    <!-- Reddit -->
https://opencollective.com/fosscraft            <!-- Donations -->
https://hosted.weblate.org/projects/fosscraft   <!-- Translations -->
```

## 🧪 Testing Checklist

Before deploying:

- [ ] All links work (internal and external)
- [ ] All pages load without errors
- [ ] Responsive design works on mobile
- [ ] No console errors (F12 → Console)
- [ ] Images display correctly
- [ ] Forms work (if applicable)
- [ ] Performance is acceptable
- [ ] Accessibility is good (WAVE tool)

## 📈 Analytics

The website is set up for analytics integration. To enable:

### Google Analytics

Add to `<head>` of pages:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Plausible Analytics (Privacy-friendly)

Add to `<head>` of pages:

```html
<script defer data-domain="fosscraft.org" src="https://plausible.io/js/script.js"></script>
```

## 🆘 Troubleshooting

### Site doesn't load locally
- Make sure you're serving from the correct directory
- Try a different port: `python -m http.server 8001`
- Clear browser cache (Ctrl+Shift+Del)

### CSS/JS not loading
- Check file paths in HTML
- Verify files exist in correct folders
- Check browser console for errors (F12)

### Links broken after deployment
- Verify all paths use relative links
- Check domain configuration
- Test on different browsers

### Mobile design looks wrong
- Test in browser DevTools device mode
- Check CSS media queries in style.css
- Ensure viewport meta tag is present

## 📚 Documentation Files

- **README.md** - Website documentation
- **SITEMAP.md** - Site structure and URL mapping
- **DESIGN.md** - Design guidelines and customization
- **DEPLOYMENT.md** - How to deploy the website

## 📝 License

- **Code**: GPLv3 (same as FOSScraft)
- **Assets**: CC BY-SA 4.0

## 🤝 Contributing

To contribute to the website:

1. Make your changes
2. Test locally
3. Submit a pull request

See the main FOSScraft repository for more details.

## 📞 Support

- **GitHub Issues**: [FOSScraft Issues](https://github.com/FOSScraft/FOSScraft/issues)
- **Discord**: https://fosscraft.org/discord
- **Matrix**: https://fosscraft.org/matrix

## 🎯 Next Steps

1. ✅ Review website structure
2. ✅ Test locally
3. ✅ Update links and content as needed
4. ✅ Deploy to your hosting provider
5. ✅ Configure analytics
6. ✅ Share with the community!

---

**Happy building!** 🚀

For more information, visit [fosscraft.org](https://fosscraft.org)
