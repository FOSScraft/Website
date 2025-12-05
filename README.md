# FOSScraft Website

A modern, responsive website for FOSScraft - a free and open-source Minecraft launcher.

## Project Structure

```
website/
├── index.html          # Main landing page
├── download.html       # Download page with all platform options
├── community.html      # Community and contribution information
├── about.html          # About FOSScraft and credits
├── css/
│   └── style.css       # Main stylesheet (responsive design)
├── js/
│   └── script.js       # Interactive features and animations
└── assets/             # Images, icons, and other assets
```

## Pages

### Home (index.html)
- Hero section with call-to-action buttons
- Features overview
- Installation quick links
- Community platforms
- Build instructions
- About section with sponsors and license info

### Download (download.html)
- Stable releases for Windows, Linux, and macOS
- Development builds information
- Distribution-specific packages
- Build status links

### Community (community.html)
- Community platforms (Discord, Matrix, Reddit, GitHub)
- How to contribute guide
- Community guidelines and code of conduct

### About (about.html)
- Project mission and history
- Credits to Prism Launcher
- Sponsors and partners
- License information
- Forking and redistribution policy
- Contact information

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Styling**: Dark theme with accent colors
- **Smooth Navigation**: Smooth scroll to sections
- **Accessibility**: Semantic HTML and proper contrast
- **Performance**: Optimized CSS and minimal JavaScript
- **Cross-browser**: Works on all modern browsers

## Customization

### Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #7c3aed;
    --secondary-color: #3b82f6;
    --accent-color: #06b6d4;
    /* ... more colors ... */
}
```

### Content
Edit HTML files directly to update content and links.

### Styling
Modify `css/style.css` to customize the design.

## Deployment

### Static Hosting
This website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `website` folder
- **GitHub Pages**: Push to a `gh-pages` branch
- **Vercel**: Connect your repository
- **Firebase Hosting**: Deploy with Firebase CLI

### Local Testing
Simply open `index.html` in your browser:

```bash
# On Windows
start website/index.html

# On Linux/macOS
open website/index.html
```

Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js with http-server
npx http-server
```

Then navigate to `http://localhost:8000/website/`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Mobile Optimization

The website is fully responsive and optimized for:
- Desktop (1200px and up)
- Tablet (768px to 1199px)
- Mobile (up to 767px)

## Accessibility

- Semantic HTML structure
- Sufficient color contrast
- Keyboard navigation support
- ARIA labels where appropriate

## Performance

- Minimal external dependencies
- No JavaScript frameworks required
- Optimized CSS with no redundant code
- Fast load times and smooth animations

## Analytics Integration

The website includes placeholder code for analytics integration. To enable tracking:

1. Add Google Analytics, Plausible, or similar
2. Uncomment and configure the Analytics object in `js/script.js`

## License

FOSScraft Website - Licensed under the same terms as FOSScraft (GPLv3)
Logo and assets - CC BY-SA 4.0

## Contributing

To contribute to the website:

1. Make your changes to HTML, CSS, or JavaScript files
2. Test on multiple browsers and devices
3. Ensure all links are working
4. Submit a pull request

## Contact

- Discord: https://fosscraft.org/discord
- Matrix: https://fosscraft.org/matrix
- Reddit: https://fosscraft.org/reddit
- GitHub: https://github.com/FOSScraft

