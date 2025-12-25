# Deployment Guide for Wix Embedding

## Overview
When embedding your website into Wix, you need to deploy the backend to a cloud hosting service since Wix doesn't support custom backend servers.

## Deployment Options

### Option 1: Render (Recommended - Free Tier Available)
1. **Create a Render account**: https://render.com
2. **Create a new Web Service**:
   - Connect your GitHub repository
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python app.py`
   - Environment Variables:
     - `GOOGLE_CREDENTIALS_PATH` or `GOOGLE_CREDENTIALS_JSON`
     - `GOOGLE_SPREADSHEET_ID`
     - `PORT` (Render will set this automatically)
3. **Get your backend URL**: `https://your-app-name.onrender.com`

### Option 2: Railway
1. **Create a Railway account**: https://railway.app
2. **Deploy from GitHub**: Connect your repo
3. **Set environment variables** in Railway dashboard
4. **Get your backend URL**: `https://your-app-name.up.railway.app`

### Option 3: Heroku
1. **Create a Heroku account**: https://heroku.com
2. **Install Heroku CLI** and login
3. **Create app**: `heroku create your-app-name`
4. **Set environment variables**: `heroku config:set GOOGLE_CREDENTIALS_PATH=...`
5. **Deploy**: `git push heroku main`

### Option 4: PythonAnywhere
1. **Create account**: https://www.pythonanywhere.com
2. **Upload files** via web interface
3. **Configure WSGI** file
4. **Set environment variables**

## Steps After Deployment

### 1. Update Frontend to Use Deployed Backend

You need to update the fetch URL in both `index.html` and `wix-embed.html`:

**Find this line:**
```javascript
const response = await fetch('http://localhost:3000/api/booking', {
```

**Replace with your deployed backend URL:**
```javascript
const response = await fetch('https://your-backend-url.com/api/booking', {
```

### 2. Environment Variables Setup

On your hosting platform, set these environment variables:
- `GOOGLE_CREDENTIALS_PATH` or `GOOGLE_CREDENTIALS_JSON`
- `GOOGLE_SPREADSHEET_ID`
- `PORT` (usually set automatically by the platform)

### 3. CORS Configuration

The backend already has CORS enabled (`CORS(app)`), which allows requests from any origin. This is needed for Wix embedding.

### 4. Update app.py for Production

You may want to update the Flask app to handle production better:

```python
if __name__ == '__main__':
    port = int(os.getenv('PORT', 3000))
    # For production, set debug=False
    app.run(debug=False, host='0.0.0.0', port=port)
```

## Quick Setup Script

Create a `render.yaml` or similar config file for easier deployment.

## Testing

After deployment:
1. Test the health endpoint: `https://your-backend-url.com/api/health`
2. Test a booking submission from your Wix-embedded site
3. Check your Google Sheet to verify data is being written

## Important Notes

- **Free tiers** may have cold starts (first request after inactivity is slow)
- **HTTPS is required** for Wix embedding (most platforms provide this)
- **Keep your credentials secure** - never commit them to git
- **Monitor your backend logs** for any errors

