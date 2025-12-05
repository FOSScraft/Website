# FOSScraft Website - Sitemap

## Site Structure

```
fosscraft.org/
├── /                          # Home page (index.html)
├── /download                  # Download page (download.html)
├── /community                 # Community page (community.html)
├── /about                     # About page (about.html)
└── /assets                    # Static assets directory
```

## Page Navigation Map

### Home (/)
- Hero section with main CTA buttons
- Features section
- Installation section (quick download links)
- Community section
- Build instructions section
- About section
- Footer with links

### Downloads (/download)
- Stable releases for multiple platforms
- Development builds section
- Distribution-specific packages
- Build status

### Community (/community)
- Discord server link
- Matrix space link
- Reddit community link
- GitHub issues link
- How to contribute section
- Community guidelines

### About (/about)
- Project mission
- History and origins
- Credits and sponsors
- License information
- Forking and redistribution policy
- Contact information

## URL Mapping

When deployed, the website should have the following URL structure:

```
https://fosscraft.org/
https://fosscraft.org/download.html  or  https://fosscraft.org/download
https://fosscraft.org/community.html or  https://fosscraft.org/community
https://fosscraft.org/about.html     or  https://fosscraft.org/about
```

## Internal Links

All internal links should be relative for portability:
- From any page to home: `href="index.html"`
- From any page to download: `href="download.html"`
- From any page to community: `href="community.html"`
- From any page to about: `href="about.html"`

## External Links

Key external links included:
- GitHub Repository: https://github.com/FOSScraft/FOSScraft
- Discord: https://fosscraft.org/discord
- Matrix: https://fosscraft.org/matrix
- Reddit: https://fosscraft.org/reddit
- Official Website: https://fosscraft.org

## Sections and Anchors

### Home Page Anchors
- `#home` - Hero section
- `#features` - Features section
- `#download` - Installation section
- `#community` - Community section
- `#build` - Build instructions section
- `#about` - About section

## Meta Information

All pages include proper meta tags:
- `charset="UTF-8"`
- `viewport` for responsive design
- `description` for SEO
- `keywords` for search engines
- `author` information

## SEO Considerations

- All pages have unique, descriptive titles
- Meta descriptions are included
- Headers (H1, H2, H3) are properly structured
- Links are descriptive and relevant
- Mobile-friendly design is implemented
- Fast load times are optimized

## Analytics Tracking

The website includes infrastructure for tracking:
- Page views by section
- Button clicks and conversions
- Scroll depth
- Community link clicks
- Download button interactions

Ready for integration with:
- Google Analytics
- Plausible
- Matomo
- Hotjar (for heatmaps)
