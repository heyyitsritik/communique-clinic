import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hearing Aid Simulator | Communiqué Clinic',
  description: 'Interactive hearing aid demonstration and patient counseling tool',
}

export default function SimulatorPage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh' }}>
      <iframe
        src="/simulator.html"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
        title="Hearing Aid Simulator"
      />
    </main>
  )
}