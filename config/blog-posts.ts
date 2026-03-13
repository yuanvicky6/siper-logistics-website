export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  coverImage: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'china-to-usa-shipping-guide',
    title: 'Complete Guide to Shipping from China to the USA in 2025',
    excerpt: 'Everything you need to know about shipping freight from China to the United States — modes, costs, timelines, and customs tips.',
    date: 'March 10, 2025',
    category: 'Shipping Guide',
    readTime: '6 min read',
    coverImage: '',
    content: `
International shipping from China to the USA is one of the world's busiest trade lanes. Whether you're moving small parcels or full container loads, understanding your options helps you save time and money.

## Ocean Freight vs. Air Freight

**Ocean Freight** is the most cost-effective method for large shipments. Transit time is typically 15–30 days depending on the origin port (Shanghai, Shenzhen, Guangzhou) and destination (Los Angeles, New York, Seattle). It is ideal for non-urgent, high-volume cargo.

**Air Freight** cuts transit time to 3–7 days, making it perfect for time-sensitive goods, high-value electronics, or small parcels. The cost is significantly higher — roughly 4–6 times that of ocean freight per kilogram.

## Key Steps in the Shipping Process

1. **Prepare documentation** — Commercial invoice, packing list, bill of lading (or airway bill), and any required certificates.
2. **Choose your Incoterms** — FOB (Free On Board) is the most common for China exports. The seller handles costs to the port; the buyer covers ocean freight and import duties.
3. **Clear customs** — Work with a licensed customs broker in the USA to ensure smooth clearance. HS codes must be accurate to avoid delays.
4. **Arrange delivery** — Once cleared, cargo is trucked from the port to the final destination (warehouse or Amazon FBA center).

## Tips to Reduce Costs

- Consolidate shipments (LCL — Less than Container Load) when volume is below 15 CBM.
- Book early, especially before Chinese New Year and Golden Week when space is tight.
- Compare quotes from at least 3 freight forwarders.

Spider Logistics offers door-to-door service from China to the USA with competitive rates and real-time tracking. Contact us for a free quote.
    `.trim(),
  },
  {
    slug: 'cross-border-ecommerce-logistics-tips',
    title: '5 Logistics Tips Every Cross-Border E-Commerce Seller Must Know',
    excerpt: 'Running an online store and shipping internationally? These five practical tips will help you cut costs, speed up delivery, and keep customers happy.',
    date: 'February 25, 2025',
    category: 'E-Commerce',
    readTime: '5 min read',
    coverImage: '',
    content: `
Cross-border e-commerce is booming, but logistics remains one of the biggest challenges. Here are five tips to streamline your shipping operations.

## 1. Choose the Right Shipping Method for Each Product

Not all products ship the same way. Small, lightweight items (under 2 kg) often go cheapest by postal services like ePacket or small packet air. Heavier items benefit from dedicated courier services (DHL, FedEx, UPS) or consolidated air freight.

## 2. Use a Bonded Warehouse to Speed Up Delivery

Storing inventory in an overseas bonded warehouse means orders are fulfilled locally, reducing delivery time from weeks to days. This dramatically improves customer satisfaction and return rates.

## 3. Understand Destination Country Import Duties

Different countries have different de minimis thresholds — the value below which no import duty is charged. The USA threshold is USD 800, while the EU is EUR 150. Understanding these helps you structure shipments and invoices correctly.

## 4. Offer Real-Time Tracking

Modern customers expect to know where their package is at all times. Partner with a logistics provider that offers end-to-end tracking integrated with your e-commerce platform.

## 5. Plan for Peak Seasons

Black Friday, Christmas, and Chinese New Year all cause major disruptions. Build inventory buffers and book freight capacity at least 6–8 weeks in advance during peak periods.

Spider Logistics specializes in cross-border e-commerce fulfillment from China. Get in touch to discuss a tailored solution for your business.
    `.trim(),
  },
  {
    slug: 'lcl-vs-fcl-which-to-choose',
    title: 'LCL vs. FCL: Which Container Shipping Option Is Right for You?',
    excerpt: 'Confused about LCL and FCL shipping? We break down the differences, costs, and best use cases to help you make the right decision.',
    date: 'February 10, 2025',
    category: 'Ocean Freight',
    readTime: '4 min read',
    coverImage: '',
    content: `
When shipping by sea, one of the first decisions is whether to book LCL (Less than Container Load) or FCL (Full Container Load). Here's how to decide.

## What Is LCL?

LCL means your cargo shares a container with other shippers' goods. You only pay for the space you use, measured in CBM (cubic meters). This is ideal for shipments under 15 CBM.

**Pros of LCL:**
- Lower cost for small shipments
- No need to wait until you have enough goods to fill a container
- Flexible — ship as needed

**Cons of LCL:**
- Slower transit (consolidation and deconsolidation add time)
- Higher risk of damage from handling
- Less suitable for fragile or high-value goods

## What Is FCL?

FCL means you book an entire container (20-foot or 40-foot). Even if your goods don't fill it completely, you pay for the whole container.

**Pros of FCL:**
- Faster transit — no consolidation delays
- Lower risk of damage (container is sealed at origin)
- More economical at scale (usually above 15 CBM)

**Cons of FCL:**
- Higher upfront cost
- Not flexible for small volumes

## General Rule of Thumb

| Shipment Size | Recommended Option |
|---|---|
| Under 5 CBM | LCL |
| 5–15 CBM | Compare LCL vs FCL |
| Over 15 CBM | FCL |

Spider Logistics can arrange both LCL and FCL shipments from all major Chinese ports. Request a quote and we'll recommend the best solution for your cargo.
    `.trim(),
  },
  {
    slug: 'customs-clearance-china-export',
    title: 'How to Clear Customs Smoothly When Exporting from China',
    excerpt: 'Customs delays are costly. Learn the essential documents and best practices for smooth export clearance from China.',
    date: 'January 20, 2025',
    category: 'Customs',
    readTime: '5 min read',
    coverImage: '',
    content: `
Customs clearance is one of the most critical — and most misunderstood — parts of international shipping. Getting it wrong can mean delays, fines, or even seizure of goods. Here's what you need to know.

## Essential Export Documents from China

1. **Commercial Invoice** — Must accurately state the goods description, quantity, unit price, total value, and buyer/seller information.
2. **Packing List** — Detailed breakdown of each carton: dimensions, weight, and contents.
3. **Bill of Lading (B/L) or Airway Bill (AWB)** — Issued by the carrier, this is proof of shipment and the key document for taking delivery.
4. **Export License** — Required for certain controlled goods (chemicals, electronics, military items).
5. **Certificate of Origin** — Required for preferential tariff treatment under trade agreements (e.g., RCEP, ASEAN).
6. **Inspection Certificate** — Some destinations require third-party inspection (e.g., CCIC for certain goods going to Africa or the Middle East).

## Common Mistakes to Avoid

- **Undervaluing goods** — Customs authorities are increasingly sophisticated. Under-invoicing to reduce import duties can result in severe penalties.
- **Wrong HS Code** — The Harmonized System (HS) code determines the duty rate. An incorrect code causes delays and potential fines.
- **Missing documents** — Even one missing document can hold up a shipment for days.

## Working with a Freight Forwarder

A good freight forwarder handles export customs on your behalf, ensuring all documents are correct and submitted on time. Spider Logistics has an in-house customs team with deep experience in China export procedures.

Contact us to discuss your next shipment.
    `.trim(),
  },
  {
    slug: 'shenzhen-logistics-hub',
    title: 'Why Shenzhen Is China\'s Most Powerful Logistics Hub',
    excerpt: 'Shenzhen\'s location, infrastructure, and tech ecosystem make it the go-to hub for international freight. Here\'s what makes it unique.',
    date: 'January 5, 2025',
    category: 'Industry Insights',
    readTime: '4 min read',
    coverImage: '',
    content: `
Shenzhen has transformed from a small fishing village into one of the world's most dynamic cities — and one of China's most important logistics hubs. Here's why it matters for international shipping.

## Strategic Location

Shenzhen sits at the heart of the Pearl River Delta, bordering Hong Kong. It is home to Yantian International Container Terminal, one of Asia's busiest ports, and has direct access to Hong Kong's Kwai Tsing Container Terminals — giving shippers access to an unparalleled concentration of shipping capacity.

## Manufacturing Proximity

Shenzhen and the surrounding Guangdong province account for a huge share of China's electronics, consumer goods, and apparel manufacturing. Being close to the source means shorter trucking distances, faster loading times, and lower inland transportation costs.

## Air Freight Capabilities

Shenzhen Bao'an International Airport is a major cargo hub with direct connections to all major global air freight destinations. For time-sensitive e-commerce shipments, this is a major advantage.

## Technology and Innovation

Shenzhen's logistics industry is being transformed by technology — automated warehouses, AI-powered route optimization, and blockchain-based supply chain transparency are all being piloted and scaled here.

## Spider Logistics — Based in Shenzhen

As a Shenzhen-headquartered company, Spider Logistics is perfectly positioned to move your cargo efficiently from South China to anywhere in the world. Our local expertise, carrier relationships, and on-the-ground team give our clients a real competitive advantage.

Get in touch to learn how we can serve your business.
    `.trim(),
  },
]
