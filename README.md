# Biaggio Flooring Website

Modern, responsive, SEO-optimized contractor website for Biaggio Flooring - Central Florida's premier flooring and bathroom remodeling company.

## About

Biaggio Flooring has been serving Central Florida for over 15 years, specializing in:
- Tile Installation (Ceramic, Porcelain, Natural Stone)
- Hardwood Flooring (Installation, Refinishing, Restoration)
- Laminate & Vinyl Flooring
- Bathroom Remodeling
- Shower Installation (Walk-in, Frameless Glass, Custom Tile)
- Commercial Services

## Features

- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **SEO Optimized**: Semantic HTML, meta tags, and proper structure for search engine visibility
- **Modern UI**: Clean, professional design with conversion-focused layout
- **Interactive Portfolio**: Filterable gallery showcasing completed projects
- **Contact Form**: Functional contact form with client-side validation
- **Fast Performance**: Optimized assets and minimal dependencies
- **Accessible**: WCAG compliant with proper ARIA labels and semantic markup

## Brand Colors

- Primary Green: `#46C038`
- Light Green: `#4FF233`
- Black: `#000000`
- White: `#FFFFFF`

## Project Structure

```
biaggioflooring/
├── index.html          # Main HTML file with all sections
├── styles/
│   └── main.css        # Complete stylesheet with responsive design
├── js/
│   └── main.js         # JavaScript for interactivity and form handling
└── README.md          # This file
```

## Pages/Sections

1. **Home**: Hero section with call-to-action and key features
2. **Services**: Comprehensive list of flooring and remodeling services
3. **Bathroom & Shower**: Dedicated section for bathroom remodeling expertise
4. **Portfolio**: Filterable gallery of completed projects
5. **About**: Company information, experience, and values
6. **Contact**: Contact form with business information

## Getting Started

Simply open `index.html` in a web browser. No build process or dependencies required.

For local development with live reload, you can use any static server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- Google Fonts (Montserrat, Open Sans)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Updating Colors

Colors are defined as CSS custom properties in `styles/main.css`:

```css
:root {
    --primary-color: #46C038;
    --primary-light: #4FF233;
    --text-dark: #000000;
    --text-white: #ffffff;
}
```

### Adding Portfolio Items

Add new portfolio items in the portfolio section of `index.html`. Each item should follow this structure:

```html
<div class="portfolio-item" data-category="flooring|bathroom|shower">
    <!-- Portfolio content -->
</div>
```

### Contact Form Integration

The contact form currently uses client-side validation and console logging. To integrate with a backend:

1. Update the form submission handler in `js/main.js`
2. Add your API endpoint or email service
3. Handle the server response appropriately

## License

© 2024 Biaggio Flooring. All rights reserved.

## Contact

- **Phone**: (407) 555-1234
- **Email**: info@biaggioflooring.com
- **Service Area**: Central Florida, Orlando & Surrounding Areas 
