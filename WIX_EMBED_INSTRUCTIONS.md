# Wix Embedding Instructions

## Overview
The `index-wix-embed.html` file is a self-contained, embeddable version of the Minika Japan website optimized for embedding into Wix or other platforms via iframe.

## Features
- ✅ **Self-contained** - No external CDN dependencies (Bootstrap removed, replaced with vanilla CSS/JS)
- ✅ **All functionality preserved** - Language switching, navigation, forms, etc.
- ✅ **Iframe-friendly** - Optimized styling for embedded contexts
- ✅ **Responsive** - Works on all screen sizes
- ✅ **Configurable API** - API endpoint can be set via data attribute

## Required Files
Make sure these files are uploaded to your hosting/server:
- `index-wix-embed.html` (main file)
- `mineka_japan_logo.png` (logo image)
- `hero-image.jpg` (hero background image)

## Embedding in Wix

### Method 1: Using HTML iframe Element

1. **In Wix Editor:**
   - Go to Add → More → HTML iframe
   - Add the iframe element to your page

2. **Configure the iframe:**
   - **Source URL:** Enter the full URL to your `index-wix-embed.html` file
     Example: `https://yourdomain.com/index-wix-embed.html`
   
   - **Width:** 100% (or specific width like 1200px)
   - **Height:** Auto or specific height (recommended: 2500px for full page)
   - **Scrolling:** Auto
   - **Frame Border:** 0
   - **Allow Fullscreen:** Enabled

3. **Styling:**
   - Set iframe to full width
   - Adjust height as needed
   - Remove any padding/margins from the iframe container

### Method 2: Using Wix Custom Code

1. **In Wix Editor:**
   - Go to Settings → Custom Code
   - Add code to page

2. **Add this HTML:**
```html
<iframe 
    src="https://yourdomain.com/index-wix-embed.html" 
    width="100%" 
    height="2500" 
    frameborder="0" 
    scrolling="auto"
    style="border: none; width: 100%; min-height: 2500px;">
</iframe>
```

## Configuring API Endpoint

If you need to change the booking form API endpoint, modify the body tag in the HTML file:

```html
<body data-api-endpoint="https://your-api-url.com/api/booking">
```

Or add this script before the closing `</body>` tag:

```html
<script>
document.body.setAttribute('data-api-endpoint', 'https://your-api-url.com/api/booking');
</script>
```

## Image URLs

If your images are hosted on a different domain, update the image sources:

1. **Logo:** Search for `mineka_japan_logo.png` and replace with full URL
2. **Hero Image:** Search for `hero-image.jpg` and replace with full URL

Example:
```html
<img src="https://yourdomain.com/images/mineka_japan_logo.png" ... />
```

## Testing

1. Upload all files to your hosting
2. Test the embed URL directly in a browser
3. Verify all images load correctly
4. Test language switching
5. Test form submission (if API is configured)
6. Test on mobile devices

## Troubleshooting

### Images not loading:
- Check image file paths are correct
- Ensure images are accessible (not blocked by CORS)
- Use absolute URLs if hosting on different domain

### Styling issues:
- Ensure iframe has proper width/height
- Check for CSS conflicts with Wix styles
- Verify viewport meta tag is present

### Form not submitting:
- Check API endpoint is correctly configured
- Verify CORS settings on your API server
- Check browser console for errors

### Navigation not working:
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify all script tags are properly closed

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## Notes

- The footer is now relative (not fixed) for better iframe compatibility
- All Bootstrap dependencies have been replaced with vanilla CSS/JS
- Heroicons dependency removed (SVG icons are inline)
- The page is fully self-contained and works offline (except API calls)
