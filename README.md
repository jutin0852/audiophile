Audiophile E-commerce Website
A pixel-perfect e-commerce platform for premium audio equipment built with Next.js 14, Convex, and Resend.
✨ Features

🛒 Shopping cart with add/remove/update quantities
💳 Complete checkout flow with form validation
📧 Automated order confirmation emails
💾 Real-time order storage with Convex
📱 Fully responsive (mobile, tablet, desktop)
✅ Accessibility compliant forms
🎨 Pixel-perfect design matching Figma

🛠️ Tech Stack

Next.js 14 (App Router)
React 18
TailwindCSS 3.4
Convex (Backend)
Resend (Email Service)
Lucide React (Icons)
Context API (State Management)

📦 Installation
bashgit clone https://github.com/yourusername/audiophile-ecommerce.git
cd audiophile-ecommerce
npm install
🔐 Environment Variables
Create .env.local file:
envCONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APP_URL=http://localhost:3000
Getting API Keys:

Convex: Sign up at convex.dev, create project, copy deployment URL
Resend: Sign up at resend.com, create API key, verify domain for production

⚙️ Convex Setup
bashnpx convex dev
Schema is in convex/schema.ts with tables for orders storing:

Customer details (name, email, phone)
Shipping info (address, city, zip, country)
Order items (id, name, price, quantity)
Totals (subtotal, shipping, VAT, grand total)
Order status and timestamp

Operations in convex/orders.ts include:

createOrder - Save new orders
getOrderById - Retrieve specific order
getOrdersByEmail - Get user's order history

📧 Email Configuration
Email template in lib/email-template.ts includes:

Personalized greeting
Order summary with items
Shipping details
Payment method
"View Order" button
Support contact info

API route at app/api/send-confirmation/route.ts handles sending via Resend.
🏃 Running the App
bash# Terminal 1: Start Convex
npx convex dev

# Terminal 2: Start Next.js
npm run dev
Visit http://localhost:3000
📁 Project Structure
audiophile-ecommerce/
├── app/
│   ├── api/send-confirmation/    # Email endpoint
│   ├── checkout/                 # Checkout page
│   └── orders/[orderId]/         # Order confirmation
├── components/
│   ├── cart/                     # Cart components
│   ├── checkout/                 # Checkout forms
│   └── layout/                   # Header, footer
├── context/CartContext.tsx       # Global cart state
├── convex/                       # Backend (schema, mutations)
├── lib/email-template.ts         # Email HTML
└── public/icons/                 # SVG icons
🎯 Key Features
Shopping Cart

Add/remove items
Update quantities
Persistent state across pages
Cart count badge
Modal cart view

Checkout Process

Form validation (email, phone, address)
Inline error messages
Payment method selection
Order summary
Success modal

Order Management

Save to Convex database
Send confirmation email
Order confirmation page
Real-time updates

🚀 Deployment
Deploy to Vercel
bashgit push origin main

Import repo to vercel.com
Add environment variables
Deploy

Configure Convex for Production
bashnpx convex deploy
Update Vercel environment variables with production Convex URL.
🧪 Testing Checklist

 Add items to cart
 Update quantities
 Remove items
 Submit checkout form
 Validate all fields
 Check email received
 View order confirmation
 Test on mobile/tablet
 Check accessibility
