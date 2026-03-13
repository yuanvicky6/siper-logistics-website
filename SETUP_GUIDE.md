# Siper Logistics Website - Setup Guide

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

## 🚀 Quick Start

### 1. Install Dependencies

Open your terminal/command prompt in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

### 2. Start Development Server

After installation completes, run:

```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

### 3. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
siper-logistics-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── admin/             # Admin panel for image management
│   ├── contact/           # Contact page with form
│   ├── routes/            # Shipping routes page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Footer
├── public/               # Static assets (images, etc.)
└── ...config files
```

## 🎨 Pages Overview

### 1. Home Page (/)
- Hero section with company tagline
- Statistics bar (15+ years, 50+ countries, etc.)
- Services overview
- Key shipping routes
- Why choose us section
- Call-to-action

### 2. About Us (/about)
- Company story and history
- Mission and vision statements
- Core values
- Team information
- Contact CTA

### 3. Services (/services)
- Air Freight services
- Sea Freight services (FCL & LCL)
- Additional services (customs, warehousing, packaging, etc.)
- Industry expertise section

### 4. Routes (/routes)
- Bangladesh routes (Dhaka, Chittagong)
- Israel routes (Tel Aviv, Haifa)
- African routes (Nigeria, Kenya, South Africa, Ghana, etc.)
- Transit times for air and sea freight
- Route highlights

### 5. Contact (/contact)
- Comprehensive inquiry form
- Contact information
- Working hours
- FAQ section

### 6. Admin (/admin)
- Image upload interface
- Image gallery
- Upload guidelines
- Image management (delete functionality)

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Fully tested on all screen sizes

### Animations
- Smooth page transitions using Framer Motion
- Scroll-triggered animations
- Hover effects on cards and buttons

### Navigation
- Fixed navbar with scroll effect
- Mobile hamburger menu
- Smooth scrolling to sections

## 🔧 Customization

### Changing Company Information

1. **Company Name & Domain**
   - Edit `app/layout.tsx` metadata
   - Update `components/Footer.tsx` contact info

2. **Services & Routes**
   - Edit content in `app/services/page.tsx`
   - Modify route data in `app/routes/page.tsx`

3. **Contact Details**
   - Update in `app/contact/page.tsx`
   - Update in `components/Footer.tsx`

### Customizing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-color-50',
        100: '#your-color-100',
        // ... etc
      }
    }
  }
}
```

### Adding Images

1. Place images in the `public/` folder
2. Use Next.js Image component for optimization
3. Or use the Admin panel to upload and manage images

## 📱 Testing the Website

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits without errors
- [ ] Mobile menu opens/closes properly
- [ ] All pages are responsive
- [ ] Animations play smoothly
- [ ] Admin panel can upload images

### Browser Testing

Test on:
- Google Chrome
- Mozilla Firefox
- Safari (Mac/iOS)
- Microsoft Edge

### Device Testing

Test on:
- Desktop (1920x1080)
- Laptop (1366x768)
- Tablet (768x1024)
- Mobile (375x667)

## 🚀 Building for Production

### 1. Create Production Build

```bash
npm run build
```

### 2. Start Production Server

```bash
npm start
```

### 3. Deployment Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

#### Traditional Hosting
```bash
npm run build
# Upload build output to your server
```

## 🔒 Security Notes

For production deployment, consider:

1. **Form Submissions**: Implement backend API route to handle form submissions
2. **Image Uploads**: Add server-side validation and storage
3. **Authentication**: Add auth for admin panel
4. **HTTPS**: Enable SSL certificate
5. **Environment Variables**: Use `.env.local` for sensitive data

## 📞 Support

If you encounter any issues:

1. Check Node.js and npm versions
2. Delete `node_modules` and `package-lock.json`, then reinstall
3. Clear Next.js cache: `rm -rf .next`
4. Check browser console for errors

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## 📝 License

Copyright © 2026 Siper Logistics Inc. All rights reserved.

---

**Website URL**: siperlogisticsinc.cn

Built with modern web technologies for the best user experience.
