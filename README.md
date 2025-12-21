# Mineka Hokkaido Website

A multilingual website for Mineka Hokkaido's private car hire service and children's clothing shop.

## Features

- **Multilingual Support**: Japanese, English, and Chinese
- **Product Gallery**: Display of kids' clothing products (suits and dresses)
- **Booking System**: Form to submit ride bookings to Google Sheets
- **Responsive Design**: Mobile-friendly interface

## Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Configure Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API and Google Drive API
4. Create a Service Account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Create a service account and download the JSON key file
5. Create a Google Spreadsheet:
   - Create a new Google Spreadsheet
   - Share it with the service account email (found in the JSON key file)
   - Copy the Spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Google Sheets Configuration
# Paste the entire contents of your service account JSON file as a single-line JSON string
GOOGLE_CREDENTIALS_JSON={"type":"service_account","project_id":"your-project-id",...}

# Google Spreadsheet ID (from the spreadsheet URL)
GOOGLE_SPREADSHEET_ID=your-spreadsheet-id-here

# Server Configuration
PORT=5000
```

**Important**: The `GOOGLE_CREDENTIALS_JSON` should be the entire JSON content from your service account key file, formatted as a single line. You can use a tool like `jq` to convert it:

```bash
cat your-service-account-key.json | jq -c . > credentials.json
# Then copy the contents into .env
```

### 4. Run the Backend Server

```bash
python app.py
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

### 5. Open the Website

Open `index.html` or `wix-embed.html` in your web browser. The booking form will submit data to the backend server.

## Project Structure

```
.
├── index.html              # Main website file
├── wix-embed.html          # Wix embed version
├── app.py                  # Flask backend server
├── requirements.txt        # Python dependencies
├── .env                    # Environment variables (create this)
├── .env.example           # Example environment file
├── README.md              # This file
└── info/                   # Product images directory
    └── Mineka Web制作用_商品信息一覧/
        ├── スーツ/        # Suits
        └── ドレス/        # Dresses
```

## API Endpoints

### POST `/api/booking`

Submit a booking form.

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "+1234567890",
  "time": "2024-01-15T10:00",
  "location": "Sapporo Station"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Booking submitted successfully"
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

## Notes

- The booking form automatically switches language based on the selected site language
- Product images are loaded from the `info/` directory
- The backend creates a "Bookings" worksheet automatically if it doesn't exist
- Make sure the service account has edit permissions on the Google Spreadsheet
