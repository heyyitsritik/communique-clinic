# 🏥 Communiqué Clinic Website — Project Guide

> **Your personal reference document. Keep this open whenever you need to make changes.**

---

## 🌐 Live Links

| What | Link |
|---|---|
| **Live Website** | https://communiqueclinic.com |
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **GitHub Repository** | https://github.com/heyyitsritik/communique-clinic |
| **Google Analytics** | https://analytics.google.com |
| **Formspree (Contact Form)** | https://formspree.io/dashboard |

---

## 🗂️ Project Folder Structure

```
communique-clinic/
│
├── public/                        ← Images & static files
│   ├── logo.png                   ← Clinic logo (used in navbar & footer)
│   ├── doctor.jpg                 ← Dr. Saurabh's photo
│   └── partner.jpg                ← Mrs. Sale Sravanthi's photo
│
├── src/
│   ├── app/                       ← Core Next.js files
│   │   ├── layout.tsx             ← SEO, page title, Google Analytics, fonts
│   │   ├── page.tsx               ← Main page (assembles all sections)
│   │   ├── globals.css            ← All colors, fonts, animations
│   │   ├── icon.png               ← Browser tab icon (favicon)
│   │   └── apple-icon.png         ← iPhone home screen icon
│   │
│   ├── components/                ← Each section of the website
│   │   ├── Navbar.tsx             ← Top navigation bar
│   │   ├── Hero.tsx               ← First full-screen section
│   │   ├── About.tsx              ← Doctor & partner profiles
│   │   ├── WhyUs.tsx              ← "Why Choose Us" section
│   │   ├── Services.tsx           ← All 6 service categories
│   │   ├── Timings.tsx            ← Clinic hours & Google Maps
│   │   ├── Blog.tsx               ← Health articles section
│   │   ├── Testimonials.tsx       ← Patient reviews
│   │   ├── Contact.tsx            ← Appointment form & WhatsApp
│   │   ├── Footer.tsx             ← Bottom section with all links
│   │   └── FloatingButtons.tsx    ← Fixed WhatsApp & Call buttons
│   │
│   └── lib/
│       └── useReveal.ts           ← Scroll animation (sections fade in)
│
├── package.json                   ← Project dependencies list
├── tailwind.config.js             ← Design colors & fonts config
├── next.config.js                 ← Next.js settings
└── tsconfig.json                  ← TypeScript settings
```

---

## ✏️ Common Changes — Quick Reference

### 📞 Update Phone Numbers
**Files to edit:**
- `src/components/Timings.tsx` → inside the "Call Us" card
- `src/components/Contact.tsx` → the "Call Us" sidebar buttons
- `src/components/Footer.tsx` → contact list at the bottom
- `src/components/FloatingButtons.tsx` → the fixed call button (bottom right)
- `src/app/layout.tsx` → inside the schema script (for Google SEO)

Search for `8796270575` to find all instances quickly (`Cmd + Shift + F` in VS Code).

---

### 🕐 Update Clinic Timings
**File:** `src/components/Timings.tsx`

Look for the `days` array near the top:
```tsx
const days = [
  { day: 'Monday',    open: true },
  ...
]
```
- Change `open: true` to `open: false` to mark a day as closed
- Find `10:30 AM – 7:30 PM` to change the hours (appears inside the map loop)

---

### 👨‍⚕️ Update Doctor's Bio or Credentials
**File:** `src/components/About.tsx`

- **Dr. Saurabh's credentials:** Find `saurabhCredentials` array at the top
- **Mrs. Sale's credentials:** Find `saleCredentials` array at the top
- **Bio text:** Find the `bio={...}` section inside each `<TeamCard />` call
- **Designation:** Change the `designation="..."` prop

---

### 🏠 Update Hero Section (First Screen)
**File:** `src/components/Hero.tsx`

| What to change | Search for this text |
|---|---|
| Tagline (gold text) | `Precision in Diagnosis` |
| Main headline | `Complete` |
| Subheading paragraph | `Assessment, management` |
| 3 pill badges | `Better Hearing` |
| Floating card badge | `AIISH Trained` |
| Stats in the card | `6+` / `20+` / `All` / `10:30` |

---

### 🩺 Update Services
**File:** `src/components/Services.tsx`

Find the `serviceCategories` array. Each category looks like:
```tsx
{
  id: 'hearing',
  icon: '👂',
  title: 'Hearing Assessment',
  tagline: '...',
  services: [
    { name: 'Service Name', desc: 'Description here.' },
    ...
  ],
},
```
Add, remove, or edit services inside the `services: []` array of any category.

---

### ⭐ Update Testimonials / Reviews
**File:** `src/components/Testimonials.tsx`

Find the `testimonials` array. Each review looks like:
```tsx
{
  name: 'Patient Name',
  location: 'Area, Gurugram',
  stars: 5,
  text: 'What they said about the clinic...',
  service: 'Which Service',
},
```
Replace the placeholder reviews with real patient reviews as you collect them.

---

### 📝 Add a New Blog Post
**File:** `src/components/Blog.tsx`

Find the `POSTS` array and add a new entry:
```tsx
{
  title: 'Your Article Title Here',
  excerpt: 'A 1-2 sentence summary of what the article is about.',
  date: 'July 2025',
  readTime: '4 min read',
  category: 'Hearing Health',   // Pick one of the existing categories
  emoji: '👂',
  url: 'https://your-hashnode-article-link-here',
},
```
Write the full article on **https://hashnode.com** first, then paste the link into `url`.

**Available categories:**
`Hearing Health` / `Balance & Vestibular` / `Speech Therapy` / `Tinnitus` / `Child Hearing` / `Hearing Aid`

---

### 🗺️ Update Google Maps Location
**File:** `src/components/Timings.tsx`

Search for `<iframe` — replace the `src="..."` URL with a new Google Maps embed link.

To get a new embed link:
1. Open Google Maps → search your clinic
2. Click **Share** → **Embed a map** → Copy the `src="..."` link only

---

### 📍 Update Clinic Address
**Files to edit:**
- `src/components/Timings.tsx` → "Find Us" card
- `src/components/Footer.tsx` → contact section
- `src/app/layout.tsx` → `streetAddress` inside the schema script

---

### 🔗 Update Social Media Links
**File:** `src/components/Footer.tsx`

Find the social links section — look for `instagram.com/communiq.in` and update accordingly.

Also check `src/components/FloatingButtons.tsx` for the WhatsApp number in the link.

---

### 📧 Update Contact Form Email
**File:** `src/components/Contact.tsx`

The form uses Formspree. To change where emails go:
1. Log in to **https://formspree.io**
2. Go to your form settings
3. Change the notification email there (no code change needed)

---

### 🏷️ Update Page Title & SEO Description
**File:** `src/app/layout.tsx`

Find the `metadata` object near the top:
```tsx
export const metadata: Metadata = {
  title: 'Communiqué — Speech, Hearing & Balance Clinic | Gurugram',
  description: 'Expert audiological care in Gurugram...',
  keywords: ['audiologist Gurugram', ...],
```
Update `title`, `description`, and `keywords` as needed.

---

### 🖼️ Replace Doctor / Partner Photos
1. Rename your new photo to `doctor.jpg` or `partner.jpg`
2. Drop it into the `public/` folder (replace the old file)
3. Push to GitHub — done!

> Photo tips: Use a portrait-orientation image. The display area is roughly 320×440px. The image will be cropped from the top (`object-top`), so make sure the face is in the upper portion.

---

### 🌈 Change Brand Colors
**File:** `tailwind.config.js`

| Color | Variable | Current Value |
|---|---|---|
| Deep Teal | `teal-900` | `#1B4D3E` |
| Gold | `gold-600` | `#B8892A` |
| Background | `cream` | `#FAF6F0` |

Also update matching values in `src/app/globals.css` under `:root`.

---

### 🔔 Update Navbar Links
**File:** `src/components/Navbar.tsx`

Find the `navLinks` array at the top:
```tsx
const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  ...
]
```
Add, remove, or rename links here.

---

## 🚀 How to Push Any Change Live

Every time you make a change, run these 3 commands in your terminal:

```bash
git add .
git commit -m "Brief description of what you changed"
git push
```

**Vercel auto-deploys in ~1 minute. That's it.**

Examples of good commit messages:
```
git commit -m "Update clinic timings to Monday-Saturday"
git commit -m "Add new testimonial from patient"
git commit -m "Replace doctor photo"
git commit -m "Add new blog post about tinnitus"
```

---

## 🛠️ Run Website Locally (for testing before pushing)

```bash
npm run dev
```
Then open **http://localhost:3000** in your browser.

To stop it: press `Ctrl + C` in the terminal.

---

## 🎨 Design System Reference

| Element | Font | Color |
|---|---|---|
| Section headings | Playfair Display | Deep Teal `#1B4D3E` |
| Body text | Inter | Gray `#374151` |
| Gold labels & accents | Inter | Gold `#B8892A` |
| Page background | — | Cream `#FAF6F0` |
| Buttons (primary) | Inter Bold | Gold `#B8892A` |
| Buttons (secondary) | Inter Bold | Teal `#1B4D3E` |

**Button classes to reuse anywhere:**
- `.btn-gold` — gold filled button
- `.btn-teal` — teal filled button
- `.btn-outline` — gold outline button

---

## 🔑 Important Accounts & Credentials

> ⚠️ Keep this information private. Do not share publicly.

| Service | URL | Notes |
|---|---|---|
| **GitHub** | github.com/heyyitsritik | Code storage |
| **Vercel** | vercel.com | Website hosting |
| **Formspree** | formspree.io | Contact form emails |
| **Google Analytics** | analytics.google.com | Measurement ID: `G-KS8MVRN3LQ` |
| **Hostslinger** | hostslinger.com | Domain provider for `communiqueclinic.com` |
| **Hashnode** | hashnode.com | Blog platform for articles |

---

## 📱 What the Website Looks Like on Different Screens

| Screen | Behavior |
|---|---|
| **Mobile** | Single column, hamburger menu, floating buttons visible |
| **Tablet** | Mixed layout, some 2-column sections |
| **Desktop** | Full 2-column layouts, full navbar |

The website is **mobile-first** — it's designed for phones first, then scales up.

---

## ❓ Troubleshooting

| Problem | Solution |
|---|---|
| Website not updating after `git push` | Check Vercel dashboard → Deployments for error logs |
| Contact form not sending emails | Log in to Formspree and check the form ID in `Contact.tsx` |
| Images not showing | Make sure the file is in `public/` folder with exact filename match |
| Domain not working | Check Hostslinger DNS — A record should point to `216.198.79.1` |
| Local site not starting | Run `npm install` first, then `npm run dev` |
| Google Analytics warning | Wait 48 hours after adding the tracking code |

---

*Last updated: June 2025 — Communiqué Speech, Hearing & Balance Clinic* 