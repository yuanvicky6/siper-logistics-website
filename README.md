# Siper Logistics Inc. Website

A modern, professional international logistics company website built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Fully responsive design for all devices
- **Multi-Page Architecture**:
  - Home page with hero section, services overview, and key routes
  - About Us page with company information and team
  - Services page detailing air freight, sea freight, and additional services
  - Routes page with detailed shipping routes to Bangladesh, Israel, and Africa
  - Contact page with inquiry form
  - Admin page for image management

- **Interactive Elements**:
  - Animated navigation with scroll effects
  - Smooth page transitions
  - Contact form with validation
  - Image upload functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: SVG icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
siper-logistics-website/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── admin/
│   │   └── page.tsx          # Admin page for image management
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── routes/
│   │   └── page.tsx          # Shipping routes page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Navbar.tsx            # Navigation component
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Key Features

### Homepage
- Animated hero section with statistics
- Services overview with icons
- Key shipping routes display
- Why choose us section
- Call-to-action sections

### About Page
- Company story and history
- Mission and vision
- Core values
- Team information

### Services Page
- Air freight details with popular routes
- Sea freight options (FCL & LCL)
- Additional services (customs, warehousing, etc.)
- Industry expertise

### Routes Page
- Detailed routes to Bangladesh, Israel, and Africa
- Air and sea freight transit times
- Special notes for each destination
- Route highlights

### Contact Page
- Comprehensive inquiry form
- Contact information
- Working hours
- FAQ section

### Admin Page
- Image upload functionality
- Image gallery management
- Upload guidelines
- Image usage examples

## 🌐 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Domain Configuration
The website is configured for: `siperlogisticsinc.cn`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1920px and above)
- Laptops (1024px - 1919px)
- Tablets (768px - 1023px)
- Mobile devices (320px - 767px)

## 🎯 Customization

### Colors
The primary color scheme is blue. To customize, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
- Edit page content in respective `app/*/page.tsx` files
- Update navigation links in `components/Navbar.tsx`
- Modify footer information in `components/Footer.tsx`

## 🔧 Future Enhancements

- Backend integration for contact forms
- Database for image storage
- User authentication for admin panel
- Real-time shipment tracking
- Multi-language support (English, Chinese)
- Payment gateway integration

## 📄 License

Copyright © 2025 Siper Logistics Inc. All rights reserved.

## 👥 Support

For questions or support, contact:
- Email: info@siperlogisticsinc.cn
- Phone: +86 755 1234 5678

---

Built with ❤️ using Next.js and Tailwind CSS
