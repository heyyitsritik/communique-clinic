import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Online Hearing Screening | Communiqué Clinic',
  description:
    'Take a free 4-minute online hearing screening test from home. Check how well you hear across key speech frequencies. Results shared instantly via WhatsApp.',
}

export default function HearingScreeningPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0]">
      <iframe
        src="/hearing-screening.html"
        className="w-full border-0"
        style={{ height: '100vh', minHeight: '100dvh' }}
        title="Online Hearing Screening — Communiqué Clinic"
        allow="autoplay"
      />
    </main>
  )
}