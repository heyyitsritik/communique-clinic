import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Communiqué — Speech, Hearing & Balance Clinic | Gurugram',
  description:
    'Expert audiological care in Gurugram. Hearing assessments, speech therapy, vestibular & balance disorders, tinnitus management. Led by Dr. Saurabh Chitoshiya (ASLP), M.Aud., BASLP.',
  keywords: [
    'audiologist Gurugram',
    'hearing clinic Gurgaon',
    'speech therapy Gurugram',
    'balance disorder treatment',
    'tinnitus management Gurgaon',
    'hearing aid Gurugram',
    'BERA test Gurgaon',
    'Communique clinic Sector 113',
    'Dr Saurabh Chitoshiya',
    'cochlear implant mapping Gurugram',
  ],
  authors: [{ name: 'Dr. Saurabh Chitoshiya' }],
  creator: 'Communiqué Speech, Hearing & Balance Clinic',
  openGraph: {
    title: 'Communiqué Speech, Hearing & Balance Clinic',
    description:
      'Complete hearing, speech & balance care for all age groups. SCO 90, M3M Market, Sector 113, Gurugram.',
    url: 'https://communiqueclinic.com',
    siteName: 'Communiqué Clinic',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1B4D3E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KS8MVRN3LQ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KS8MVRN3LQ');
            `,
          }}
        />

        
        {/* Local Business Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalClinic',
              name: 'Communiqué Speech, Hearing & Balance Clinic',
              description:
                'Complete hearing, speech & balance care for all age groups.',
              url: 'https://communiqueclinic.com',
              telephone: '+918796270575',
              email: 'communique.clinic@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'SCO 90, M3M Market',
                addressLocality: 'Sector 113, Gurugram',
                addressRegion: 'Haryana',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.4089',
                longitude: '76.9952',
              },
              openingHours: 'Mo-Su 10:30-19:30',
              medicalSpecialty: 'Audiology',
              hasMap: 'https://maps.app.goo.gl/Hk9ee23DKqHGyuwn7',
              sameAs: ['https://www.instagram.com/communiq.in'],
            }),
          }}
        />
      </head>
      <body className="font-inter bg-cream text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
