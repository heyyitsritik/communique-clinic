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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TLCZT78F');`,
          }}
        />
        {/* End Google Tag Manager */}

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
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLCZT78F" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  )
}