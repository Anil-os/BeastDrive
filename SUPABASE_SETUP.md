# Supabase Setup Guide (FREE & EASY)

## Step 1: Create Supabase Account
1. Go to https://supabase.com
2. Click **Start your project**
3. Sign up with GitHub (recommended) or email
4. It's 100% FREE forever for your use case!

## Step 2: Create a New Project
1. Click **New Project**
2. Fill in:
   - **Name**: BeastDrive
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to India (Singapore or Mumbai if available)
3. Click **Create new project**
4. Wait 1-2 minutes for setup to complete

## Step 3: Get Your API Keys
1. In your project dashboard, click **Settings** (gear icon in sidebar)
2. Click **API** in the settings menu
3. You'll see:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (long string)
4. Copy both of these

## Step 4: Add Keys to .env.local
Open your `.env.local` file and add these lines:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-long-key-here
```

Replace with your actual values from Step 3.

## Step 5: Create Database Tables
1. In Supabase dashboard, click **SQL Editor** in the sidebar
2. Click **New query**
3. Paste this SQL:

```sql
-- Create registrations table
CREATE TABLE registrations (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  vehicle TEXT,
  vehicle_model TEXT,
  event TEXT,
  message TEXT,
  type TEXT DEFAULT 'registration',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create enquiries table
CREATE TABLE enquiries (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT,
  message TEXT,
  type TEXT DEFAULT 'contact',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (but allow all for now)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Create policies to allow inserts from anyone
CREATE POLICY "Allow public inserts" ON registrations
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON enquiries
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow you to read the data in dashboard
CREATE POLICY "Allow authenticated reads" ON registrations
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated reads" ON enquiries
  FOR SELECT TO authenticated
  USING (true);
```

4. Click **Run** (or press Ctrl+Enter)
5. You should see "Success. No rows returned"

## Step 6: Test Your Form
1. Restart your dev server (stop and run `npm run dev` again)
2. Go to http://localhost:3000/contact
3. Fill out and submit the form
4. Check Supabase dashboard > **Table Editor** > **registrations** or **enquiries**
5. You should see your submission!

## Done! 🎉

Benefits of Supabase:
- ✅ FREE forever (up to 500MB database)
- ✅ No complex rules setup
- ✅ Real-time updates
- ✅ Beautiful dashboard to view data
- ✅ Export to CSV anytime
- ✅ Built-in authentication if you need it later
- ✅ No timeouts or connection issues

## View Your Data
- Go to **Table Editor** in Supabase dashboard
- Click on `registrations` or `enquiries` tables
- See all submissions in real-time!
