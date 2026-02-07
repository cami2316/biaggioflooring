# Deployment Guide

## Quick Start

The Biaggio Flooring website is a static website with no build process required. Simply serve the files with any web server.

## Local Development

### Using Python (included in most systems)
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

### Using Node.js
```bash
npx serve
```

### Using PHP
```bash
php -S localhost:8000
```

## Production Deployment

### GitHub Pages
1. Go to repository Settings > Pages
2. Select source: Deploy from a branch
3. Select branch: `main` (or your branch)
4. Select folder: `/ (root)`
5. Click Save

Your site will be available at: `https://username.github.io/biaggioflooring`

### Netlify
1. Sign up at https://netlify.com
2. Click "Add new site" > "Import an existing project"
3. Connect to your GitHub repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
5. Click "Deploy site"

### Vercel
1. Sign up at https://vercel.com
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Framework Preset: Other
5. Root Directory: `./`
6. Click "Deploy"

### Traditional Web Hosting (cPanel, FTP)
1. Upload all files to your web server's public directory
   - `index.html`
   - `styles/` folder
   - `js/` folder
2. Ensure proper file permissions (644 for files, 755 for directories)
3. Access your site via your domain

### AWS S3 + CloudFront
1. Create an S3 bucket
2. Enable static website hosting
3. Upload all files
4. Create CloudFront distribution pointing to S3
5. Configure custom domain (optional)

## Custom Domain Setup

After deploying to any platform:

1. Add a CNAME record in your DNS settings:
   - Name: `www` or `@` (for root domain)
   - Value: your deployment URL

2. For GitHub Pages, add a CNAME file containing your domain:
   ```bash
   echo "www.biaggioflooring.com" > CNAME
   ```

3. Wait for DNS propagation (can take up to 48 hours)

## Environment Configuration

No environment variables or configuration needed! The site works out of the box.

### Optional Customizations

**Contact Form Integration:**
To connect the form to an actual email service:
1. Edit `js/main.js`
2. Find the form submission handler (line ~94)
3. Replace the console.log with your backend API call

Example with FormSpree:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        service: service.value,
        message: message.value
    })
})
```

**Google Analytics:**
Add tracking code before closing `</head>` tag in `index.html`:
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

## Performance Tips

1. **Enable Compression:** Most hosting services enable gzip/brotli automatically
2. **Use CDN:** CloudFlare (free) or AWS CloudFront
3. **Cache Headers:** Set long cache times for static assets
4. **Image Optimization:** Replace SVG placeholders with optimized images

## Troubleshooting

**Fonts not loading:**
- Check browser console for CORS errors
- Fonts are loaded from Google Fonts CDN and should work everywhere

**Smooth scroll not working on Safari:**
- This is expected; Safari will use instant scrolling instead

**Contact form not sending:**
- The form currently uses client-side validation only
- Integrate with a backend service (see Optional Customizations above)

## Support

For issues or questions:
- Check the README.md file
- Review browser console for errors
- Ensure all files are uploaded correctly

## License

© 2024 Biaggio Flooring. All rights reserved.
