# Wix Embed Instructions

## File: `wix-embed.html`

This file is specifically designed to be embedded into Wix websites. It includes all necessary scoping to avoid conflicts with Wix's own CSS and JavaScript.

## How to Embed in Wix:

### Option 1: Using HTML iframe (Recommended)
1. Upload `wix-embed.html` to your web hosting or file storage
2. Get the direct URL to the file
3. In Wix Editor:
   - Add an HTML iframe element
   - Set the source URL to your `wix-embed.html` file
   - Set width: 100%, height: auto (or specific height)
   - Enable scrolling if needed

### Option 2: Using Wix HTML Embed Code
1. Upload `wix-embed.html` to your hosting
2. Get the direct URL
3. In Wix Editor:
   - Add "HTML Code" element
   - Paste this code:
   ```html
   <iframe src="YOUR_FILE_URL_HERE" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
   ```

### Option 3: Direct HTML Embed (if Wix allows)
1. Copy the entire content of `wix-embed.html`
2. In Wix Editor:
   - Add "HTML Code" element
   - Paste the entire HTML code

## Key Features for Wix Compatibility:

✅ **Scoped Styles**: All CSS is prefixed with `.mineka-wix-wrapper` to avoid conflicts
✅ **Relative Positioning**: Fixed elements changed to relative for iframe compatibility
✅ **Isolated Styles**: Uses CSS isolation to prevent style leakage
✅ **Self-Contained**: All CSS and JavaScript embedded in one file
✅ **Responsive**: Works on all screen sizes
✅ **No External Dependencies**: Only Bootstrap CDN (which Wix can handle)

## Notes:

- The menubar and footer are set to `position: relative` instead of `fixed` for better iframe compatibility
- All styles are scoped to `.mineka-wix-wrapper` class
- JavaScript selectors are updated to work within the wrapper
- The file maintains all original functionality (language switching, animations, etc.)

## Testing:

Before embedding, test the file by:
1. Opening `wix-embed.html` directly in a browser
2. Verifying all sections work correctly
3. Testing language switching
4. Checking mobile responsiveness

## Support:

If you encounter issues embedding:
- Ensure the file is hosted on a server that allows iframe embedding
- Check that CORS headers are properly set
- Verify Bootstrap CDN is accessible from Wix
- Test in different browsers




