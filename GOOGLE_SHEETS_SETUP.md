# Google Sheets Database Setup (FREE & EASY)

## Step 1: Create a Google Sheet
1. Go to https://sheets.google.com
2. Create a new spreadsheet named "BeastDrive Registrations"
3. Create two sheets (tabs):
   - Sheet 1: "Registrations"
   - Sheet 2: "Enquiries"

## Step 2: Add Headers
In both sheets, add these column headers in row 1:
```
Timestamp | Name | Email | Phone | City | Vehicle | Vehicle Model | Event | Message | Type
```

## Step 3: Create Google Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = data.type === 'registration' 
      ? SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Registrations')
      : SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Enquiries');
    
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.city,
      data.vehicle || '',
      data.vehicleModel || '',
      data.event || '',
      data.message || '',
      data.type
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 4: Deploy the Script
1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ > Select **Web app**
3. Settings:
   - Description: "BeastDrive Form Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/XXXXX/exec`)

## Step 5: Update Your Code
Open `app/contact/page.tsx` and replace `YOUR_WEB_APP_URL` with your actual Web app URL from step 4.

Find this line (around line 27):
```javascript
const response = await fetch('https://script.google.com/macros/s/YOUR_WEB_APP_URL/exec', {
```

Replace `YOUR_WEB_APP_URL` with your actual deployment URL.

## Done! 🎉
Your form will now save to Google Sheets. You can:
- View submissions in real-time
- Export to Excel/CSV anytime
- Share with team members
- No cost, no limits!

## Testing
1. Submit a test registration on your website
2. Check your Google Sheet - the data should appear instantly
3. If it doesn't work, check the Apps Script logs: **Execution log** tab in Apps Script editor
