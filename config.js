// Backend API Configuration
// Update BACKEND_URL to your deployed backend URL when deploying to Wix
const BACKEND_CONFIG = {
    // For local development
    LOCAL: 'http://localhost:3000',
    
    // For production/Wix embedding - UPDATE THIS with your deployed backend URL
    PRODUCTION: 'https://your-backend-url.onrender.com', // Example: https://mineka-backend.onrender.com
    
    // Auto-detect: use production if not on localhost
    getCurrentUrl: function() {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return this.LOCAL;
        }
        return this.PRODUCTION;
    }
};

// Export for use in HTML files
window.BACKEND_URL = BACKEND_CONFIG.getCurrentUrl();

