# FOSScraft Website - Deployment Guide

## Overview

The FOSScraft website is a static website with no server-side requirements. It can be deployed to any static hosting provider.

## Deployment Options

### 1. Netlify (Recommended)

**Simplest option - Drag and drop deployment**

1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Drag and drop the `website` folder
4. Your site will be live at a random URL
5. Connect a custom domain in settings

**Or connect via GitHub:**

1. Push your code to GitHub
2. On Netlify, select "New site from Git"
3. Choose your GitHub repository
4. Set publish directory to `website`
5. Netlify will auto-deploy on push

The `netlify.toml` file includes all necessary configuration.

### 2. GitHub Pages

1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select `main` branch and `/docs` folder, or create `gh-pages` branch
4. Copy the `website` folder contents to the publish directory
5. Your site will be live at `https://yourusername.github.io/FOSScraft`

### 3. Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set "Root Directory" to `website`
4. Deploy
5. Your site will be live at a Vercel URL

### 4. Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Choose the website folder
firebase deploy
```

### 5. Traditional Web Host

1. Connect via FTP/SFTP
2. Upload the `website` folder contents to your public_html or www directory
3. Make sure `index.html` is in the root directory
4. Configure a custom domain in your hosting control panel

### 6. AWS S3 + CloudFront

1. Create an S3 bucket
2. Upload `website` folder contents
3. Enable static website hosting
4. Create CloudFront distribution pointing to your bucket
5. Configure Route 53 for your domain

## Pre-Deployment Checklist

- [ ] All links are correct and working
- [ ] External links point to correct URLs
- [ ] No broken images or assets
- [ ] Mobile responsiveness verified
- [ ] CSS and JavaScript load correctly
- [ ] Meta tags and SEO information is accurate
- [ ] No console errors in browser dev tools
- [ ] All pages tested in multiple browsers
- [ ] Offline functionality tested (if needed)

## Testing Before Deployment

### Local Testing

**Using Python:**
```bash
cd website
python -m http.server 8000
# Open http://localhost:8000 in browser
```

**Using Node.js:**
```bash
npx http-server website
# Open http://localhost:8080 in browser
```

**Using PHP:**
```bash
cd website
php -S localhost:8000
# Open http://localhost:8000 in browser
```

### Verification Checklist

1. Open each page and verify content
2. Click all navigation links
3. Test on mobile device (use browser DevTools)
4. Check console for JavaScript errors
5. Verify all external links work
6. Test form submissions (if any)
7. Check loading times (open DevTools → Network tab)

## Performance Optimization

### Already Implemented

- ✅ Minified CSS (production ready)
- ✅ Efficient JavaScript (no frameworks)
- ✅ Responsive images
- ✅ Lazy loading ready
- ✅ Browser caching configured (in netlify.toml)

### Additional Optimizations (Optional)

1. **Image Optimization**
   - Use WebP format with PNG fallbacks
   - Compress all images with TinyPNG or similar
   - Use responsive images with srcset

2. **CDN Configuration**
   - Netlify provides CDN automatically
   - Configure cache rules in netlify.toml

3. **Monitoring**
   - Set up Sentry for error tracking
   - Use Plausible Analytics for privacy-friendly stats
   - Monitor uptime with Uptime Robot

## SSL/HTTPS

All modern hosting providers (Netlify, Vercel, GitHub Pages) automatically provide:
- Free SSL certificates
- Automatic HTTPS redirect
- Auto-renewal

## Domain Configuration

### Connecting Custom Domain

**On Netlify:**
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS instructions
4. Wait for DNS propagation (usually 24-48 hours)

**On GitHub Pages:**
1. Add CNAME file to repository with your domain
2. Configure DNS A records in your domain provider
3. Wait for DNS propagation

### DNS Records Needed

For most providers, you'll need to update your domain's DNS records:

**Option 1: CNAME Record**
```
CNAME   www   your-hosting-provider.netlify.app
```

**Option 2: A Records**
```
A   @   your-hosting-provider-ip-address
A   www your-hosting-provider-ip-address
```

Check your hosting provider's documentation for specific DNS records.

## Analytics Setup

The website is ready for analytics integration. To enable:

### Google Analytics

1. Create a Google Analytics account
2. Add to `index.html` in `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible Analytics (Privacy-friendly)

```html
<script defer data-domain="fosscraft.org" src="https://plausible.io/js/script.js"></script>
```

## Monitoring & Maintenance

### Regular Checks

- [ ] Weekly: Check for broken links
- [ ] Monthly: Review analytics
- [ ] Monthly: Update content as needed
- [ ] Quarterly: Test all external integrations
- [ ] Quarterly: Security audit

### Update Process

1. Make changes locally
2. Test thoroughly
3. Commit and push to GitHub
4. Hosting provider auto-deploys
5. Verify live site

## Rollback Procedure

If deployment has issues:

**On Netlify:**
1. Go to Deploys section
2. Click on previous successful deploy
3. Click "Publish deploy"

**On GitHub Pages:**
1. Revert the commit: `git revert <commit-hash>`
2. Push to repository
3. GitHub automatically rebuilds

## Support & Help

- [Netlify Documentation](https://docs.netlify.com)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)

## Troubleshooting

### Site Not Loading
- Clear browser cache (Ctrl+Shift+Del)
- Check if index.html is in root directory
- Verify DNS settings if using custom domain
- Check hosting provider status page

### CSS/JS Not Loading
- Verify file paths are correct
- Check browser console for 404 errors
- Ensure files uploaded to correct directory
- Clear CDN cache if using one

### Links Not Working
- Verify relative paths in HTML
- Test on different browsers
- Check for typos in href attributes
- Test with JavaScript disabled

## Performance Metrics

Target metrics after deployment:

- **Page Load**: < 2 seconds
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

Check with [PageSpeed Insights](https://pagespeed.web.dev)

---

For questions or issues, open an issue on the [GitHub repository](https://github.com/FOSScraft/FOSScraft).
