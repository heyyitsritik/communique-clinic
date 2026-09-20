import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Speech Therapy in Gurgaon | Communiqué Clinic, Dwarka Expressway',
  description:
    'Evidence-based speech therapy in Gurgaon for children and adults. Assessment and individualised therapy for speech delay, language delay, stuttering, voice, autism and adult neurogenic disorders. Dwarka Expressway, Sector 113.',
  keywords: [
    'speech therapy Gurgaon',
    'speech therapist Dwarka Expressway',
    'child speech delay Gurgaon',
    'speech language pathologist Gurugram',
    'stuttering therapy Gurgaon',
    'autism speech therapy Gurgaon',
    'adult speech therapy Gurugram',
    'speech therapy Sector 113',
    'language delay treatment Gurgaon',
    'SLP Gurgaon',
  ],
}

/* ─── Data ──────────────────────────────────────────────── */

const services = [
  {
    num: '01',
    title: 'Speech & Language Delay',
    desc: 'Comprehensive assessment and therapy for children with delayed speech, limited vocabulary, sentence development difficulties, comprehension concerns or functional communication needs.',
    icon: '🗣️',
  },
  {
    num: '02',
    title: 'Articulation & Speech Clarity',
    desc: 'Evaluation and therapy for sound errors, unclear speech and age-inappropriate speech sound patterns that make communication difficult for others to understand.',
    icon: '👄',
  },
  {
    num: '03',
    title: 'Stuttering & Fluency',
    desc: 'Individualised strategies and therapy for children, adolescents and adults experiencing stuttering, cluttering or other fluency difficulties.',
    icon: '🔄',
  },
  {
    num: '04',
    title: 'Autism & Social Communication',
    desc: 'Targeted support for functional communication, language development, social communication skills and participation in everyday situations for children with autism spectrum conditions.',
    icon: '🧩',
  },
  {
    num: '05',
    title: 'Voice Therapy',
    desc: 'Assessment and therapy for voice quality concerns, vocal strain, hoarseness and selected functional voice difficulties affecting communication and daily life.',
    icon: '🎙️',
  },
  {
    num: '06',
    title: 'Adult Neurogenic Disorders',
    desc: 'Speech-language rehabilitation for adults experiencing aphasia, dysarthria or other communication difficulties following stroke, brain injury or neurological conditions.',
    icon: '🧠',
  },
]

const approachSteps = [
  { num: '01', title: 'Referral & Initial Enquiry', desc: 'Contact us by phone or WhatsApp. We discuss your concern, answer your questions and schedule an assessment appointment.' },
  { num: '02', title: 'Comprehensive Assessment', desc: 'A detailed speech and language assessment identifies the nature, severity and contributing factors of the communication difficulty.' },
  { num: '03', title: 'Individualised Therapy Plan', desc: 'A therapy programme is designed around your specific goals, communication profile and daily-life priorities — not a generic protocol.' },
  { num: '04', title: 'Structured Therapy Sessions', desc: 'Regular sessions with progress monitoring, family guidance and home practice support to maximise outcomes between appointments.' },
  { num: '05', title: 'Review & Outcome Measurement', desc: 'Periodic review of progress against goals, adjustment of the programme where needed and clear guidance on next steps.' },
]

const checklistItems = [
  { age: '12 months', signs: 'No babbling or pointing' },
  { age: '18 months', signs: 'Fewer than 10 words' },
  { age: '2 years', signs: 'Fewer than 50 words or no two-word combinations' },
  { age: '3 years', signs: 'Strangers find it difficult to understand your child' },
  { age: '4 years', signs: 'Speech is mostly unclear even to family' },
  { age: 'Any age', signs: 'Sudden change in speech, language or voice' },
  { age: 'Any age', signs: 'Stammering or hesitation that is increasing' },
  { age: 'Any age', signs: 'Regression in previously acquired language skills' },
]

const trustPoints = [
  { icon: '🎓', title: 'AIISH-Trained Clinician', desc: "M.Aud. + BASLP from All India Institute of Speech and Hearing, Mysore — India's premier speech and hearing institution." },
  { icon: '🧪', title: 'Assessment Before Therapy', desc: 'Every therapy programme begins with a comprehensive assessment — because treating a symptom without understanding its cause rarely works.' },
  { icon: '👨‍👩‍👧', title: 'Family Involvement', desc: 'Parents and family members are active participants in the therapy process — because change happens in everyday life, not only in the clinic.' },
  { icon: '📋', title: 'Individualised Goals', desc: 'Therapy is built around your communication priorities and daily-life needs — not a generic protocol.' },
  { icon: '🔄', title: 'Progress Monitoring', desc: 'Regular outcome measurement ensures therapy is working and allows timely adjustments to the programme.' },
  { icon: '📍', title: 'Dwarka Expressway Location', desc: 'Conveniently located at M3M Market, Sector 113 — serving New Gurgaon, Dwarka Expressway and surrounding areas.' },
]

const faqs = [
  {
    q: 'At what age should I be concerned about my child\'s speech?',
    a: 'As a general guide: most children say their first words by 12 months, combine two words by 18–24 months and speak in short sentences by 3 years. However, speech and language development varies. If you have a concern at any age, an assessment is a more reliable answer than waiting to see if the child "grows out of it."',
  },
  {
    q: 'What is the difference between speech delay and language delay?',
    a: 'Speech refers to the physical production of sounds — articulation, clarity, fluency and voice. Language refers to the understanding and use of words, sentences and meaning. A child can have a speech difficulty without a language difficulty, or vice versa. A comprehensive assessment identifies which area is affected and guides the therapy approach.',
  },
  {
    q: 'How long does speech therapy take?',
    a: 'Duration depends on the nature and severity of the difficulty, the age of the child or adult, consistency of attendance and the level of home practice. Some concerns resolve with short-term focused therapy; others require longer-term support. A realistic timeline will be discussed after the initial assessment.',
  },
  {
    q: 'Can adults benefit from speech therapy?',
    a: 'Yes. Speech-language therapy for adults addresses a range of conditions including aphasia and dysarthria following stroke or brain injury, voice difficulties, stuttering and communication challenges associated with neurological conditions. Adult therapy is equally evidence-based and goal-directed.',
  },
  {
    q: 'Does my child need a doctor\'s referral for speech therapy?',
    a: 'A doctor\'s referral is not required to book a speech and language assessment at Communiqué. You can contact us directly. However, if a neurological, hearing or developmental concern is suspected, we may recommend a review by the appropriate medical specialist as part of the overall assessment process.',
  },
  {
    q: 'Is the 1-Minute Speech Check a diagnosis?',
    a: 'No. The 1-Minute Speech Check is a free preliminary screening — not a formal diagnosis. It allows our Speech-Language Pathologist to observe your child\'s communication in a natural setting and provide guidance on whether a comprehensive assessment is recommended. A formal diagnosis requires an in-person clinical assessment.',
  },
  {
    q: 'What is the 1-Minute Speech Check and how does it work?',
    a: 'You record a short natural video of your child communicating — playing, talking or interacting as they normally would. You answer a few questions about your child\'s age and your concern. Our SLP reviews the video and contacts you with preliminary observations and a recommendation on the next step. It is free, confidential and takes about 5 minutes to submit.',
  },
  {
    q: 'What makes Communiqué different from other speech therapy providers in Gurgaon?',
    a: 'Communiqué is a clinical audiology and speech-language practice — not a therapy centre that runs group sessions or generic programmes. Every patient receives a comprehensive assessment before therapy begins, an individualised programme built around their specific goals, and structured progress monitoring. We also offer integrated hearing assessment where relevant — which many speech-therapy-only providers cannot.',
  },
]

export default function SpeechTherapyPage() {
  return (
    <main style={{ background: '#FAF6F0', fontFamily: 'var(--font-inter, Inter, system-ui, sans-serif)' }}>

      {/* ANNOUNCEMENT BAR */}
      <div style={{ background: '#1B4D3E', color: 'white', textAlign: 'center', padding: '10px 18px', fontSize: '13px', lineHeight: 1.5 }}>
        Serving Dwarka Expressway · New Gurgaon · Sector 113 &nbsp;|&nbsp;
        <a href="tel:+918796270575" style={{ color: '#d4a843', fontWeight: 700 }}>Call 8796270575</a>
        &nbsp;|&nbsp; SCO 90, M3M Market, Sector 113, Gurugram
      </div>

      {/* 1-MINUTE SPEECH CHECK */}
      <section style={{ background: 'linear-gradient(135deg, #1B4D3E 0%, #153d30 60%, #0f2d22 100%)', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="check-grid">
          {/* Left — content */}
          <div>
            <div style={{ display: 'inline-flex', background: 'rgba(184,137,42,0.2)', border: '1px solid rgba(184,137,42,0.4)', borderRadius: 999, padding: '6px 16px', fontSize: 12, fontWeight: 700, color: '#d4a843', marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Free · Confidential · Reviewed by an SLP
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(28px,4vw,46px)', color: 'white', margin: '0 0 8px', fontWeight: 700, lineHeight: 1.15 }}>
              Communiqué<br />
              <span style={{ color: '#B8892A' }}>1-Minute Speech Check™</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0' }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)', flexShrink: 0 }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, lineHeight: 1.7, margin: '0 0 12px', maxWidth: 520 }}>
              Wondering whether your child's speech or language development needs attention?
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.7, margin: '0 0 28px', maxWidth: 520 }}>
              Record a natural 1-minute video of your child and receive a <strong style={{ color: '#d4a843' }}>free preliminary review</strong> from our Speech-Language Pathologist — with clear guidance on whether an assessment is recommended.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {['Speech clarity and intelligibility', 'Language use and vocabulary', 'Fluency and stuttering signs', 'Social communication and interaction', 'Next-step guidance from an SLP'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#B8892A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: 'white', fontSize: 11, fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.6, maxWidth: 480 }}>
              This preliminary review is not a formal diagnosis and does not replace a comprehensive clinical assessment.
            </p>
          </div>

          {/* Right — photo + steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Photo */}
            <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', height: 300 }}>
              <Image src="/speech-check.jpg" alt="Parent recording child for speech check" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 560px" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,45,34,0.6) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                <p style={{ color: 'white', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 16, fontWeight: 700, margin: 0 }}>Upload. We Review. You Know What To Do Next.</p>
              </div>
            </div>

            {/* How it works */}
            <div style={{ background: 'white', borderRadius: 20, padding: '24px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8892A', margin: '0 0 16px' }}>How It Works</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { step: '1', text: 'Answer 4 quick questions about your child\'s age and your concern' },
                  { step: '2', text: 'Record a 1-minute natural video of your child communicating' },
                  { step: '3', text: 'Submit — our SLP reviews within 1 working day' },
                  { step: '4', text: 'Receive preliminary observations and a clear next-step recommendation' },
                ].map((s) => (
                  <div key={s.step} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1B4D3E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{s.step}</div>
                    <p style={{ margin: 0, fontSize: 13, color: '#4b5563', lineHeight: 1.55 }}>{s.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #F0EAE0' }}>
                <a href="https://wa.me/918796270575?text=Hi%2C+I'd+like+to+submit+a+video+for+the+1-Minute+Speech+Check." target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#25D366', color: 'white', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', textAlign: 'center' }}>
                  🎥 Submit Your 1-Minute Video on WhatsApp
                </a>
                <p style={{ margin: '8px 0 0', fontSize: 11, color: '#9ca3af', textAlign: 'center' }}>Free · Confidential · No obligation to book</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto', display: 'grid', gridTemplateColumns: '1fr 440px', gap: 48, alignItems: 'center' }} className="hero-grid">
          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', background: '#1B4D3E12', borderRadius: 999, padding: '6px 16px', fontSize: 12, fontWeight: 700, color: '#1B4D3E', marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Speech Therapy · Dwarka Expressway, Gurugram
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(30px,4.5vw,52px)', lineHeight: 1.1, margin: '0 0 6px', fontWeight: 700, color: '#1B4D3E' }}>
              Helping you communicate<br />
              <span style={{ color: '#B8892A' }}>with greater confidence.</span>
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0' }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)', flexShrink: 0 }} />
            </div>
            <p style={{ fontSize: 17, color: '#4b5563', margin: '0 0 12px', lineHeight: 1.65, maxWidth: 560 }}>
              Evidence-based speech, language, voice and fluency therapy for children and adults — with assessment-led treatment and individualised goals.
            </p>
            <p style={{ fontSize: 15, color: '#6b7280', margin: '0 0 32px', lineHeight: 1.65, maxWidth: 540 }}>
              At Communiqué, every therapy programme begins with a comprehensive assessment — because treating a symptom without understanding its cause rarely works.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
              <a href="#book" style={{ background: '#1B4D3E', color: 'white', padding: '15px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                📅 Book a Speech & Language Assessment
              </a>
              <a href="https://wa.me/918796270575?text=Hi%2C+I'd+like+to+know+more+about+speech+therapy." target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '13px 22px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                💬 WhatsApp
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
              {['🎓 AIISH-Trained Clinician', '👶 Children & Adults', '📋 Assessment-Led Therapy'].map((t) => (
                <div key={t} style={{ fontSize: 13, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 6 }}>{t}</div>
              ))}
            </div>
          </div>

          {/* Right — hero image + card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', height: 340 }}>
              <Image src="/speech-therapy-hero.jpg" alt="Speech therapy session at Communiqué Clinic" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 440px" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,77,62,0.5) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                <p style={{ color: 'white', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 16, fontWeight: 700, margin: 0 }}>Assessment before therapy — always.</p>
              </div>
            </div>
            <div id="book" style={{ background: '#FAF6F0', borderRadius: 16, padding: '20px', border: '1px solid #F0EAE0' }}>
              <p style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 16, fontWeight: 700, color: '#1B4D3E', margin: '0 0 8px' }}>Not sure if therapy is needed?</p>
              <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 14px', lineHeight: 1.6 }}>A proper assessment identifies whether the difficulty relates to speech, language, fluency, voice or communication — and what to do next.</p>
              <a href="tel:+918796270575" style={{ display: 'block', background: '#1B4D3E', color: 'white', padding: '12px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', textAlign: 'center', marginBottom: 8 }}>
                📞 Call 8796270575
              </a>
              <a href="https://wa.me/918796270575?text=Hi%2C+I'd+like+to+discuss+speech+therapy+for+my+child." target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#25D366', color: 'white', padding: '12px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', textAlign: 'center' }}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE HELP WITH */}
      <section style={{ background: '#FAF6F0', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>What We Help With</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              Speech therapy tailored to the person —<br />
              <span style={{ color: '#B8892A' }}>not just the symptom.</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: '#6b7280', maxWidth: 560, margin: 'auto', lineHeight: 1.6 }}>
              Therapy begins with understanding the communication difficulty and defining practical, measurable goals.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="services-grid">
            {services.map((s) => (
              <div key={s.num} style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 20, padding: '28px 24px', borderTop: '3px solid #B8892A', boxShadow: '0 4px 16px rgba(27,77,62,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#1B4D3E12', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1B4D3E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{s.num}</div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 17, margin: '0 0 10px', fontWeight: 700 }}>{s.title}</h3>
                <p style={{ color: '#6b7280', margin: 0, fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSESSMENT SECTION — photo left, content right */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="assess-layout">
            {/* Left — photo */}
            <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', height: 520 }}>
              <Image src="/speech-child.jpg" alt="Child speech therapy assessment at Communiqué Clinic" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 560px" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,77,62,0.55) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <p style={{ color: 'white', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 18, fontWeight: 700, margin: 0 }}>
                  Understanding the difficulty before treating it.
                </p>
              </div>
            </div>
            {/* Right — content */}
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>The Assessment</p>
              <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,34px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
                Every therapy programme<br />
                <span style={{ color: '#B8892A' }}>begins with assessment.</span>
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ height: 1, width: 60, background: '#B8892A' }} />
                <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)', flexShrink: 0 }} />
              </div>
              <p style={{ color: '#6b7280', lineHeight: 1.7, marginBottom: 24, fontSize: 15 }}>
                A comprehensive speech and language assessment identifies the nature, severity and contributing factors of the communication difficulty — and forms the foundation of an effective therapy plan.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {[
                  { icon: '🗣️', title: 'Speech Sound Assessment', desc: 'Evaluation of articulation, phonological patterns and speech intelligibility.' },
                  { icon: '📚', title: 'Language Assessment', desc: 'Receptive and expressive language, vocabulary, sentence structure and comprehension.' },
                  { icon: '🔄', title: 'Fluency Assessment', desc: 'Nature and severity of stuttering or other fluency difficulties.' },
                  { icon: '🎙️', title: 'Voice Assessment', desc: 'Voice quality, pitch, loudness and vocal function.' },
                  { icon: '🧩', title: 'Social Communication', desc: 'Pragmatic language, social interaction and communication in context.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: '#FAF6F0', borderRadius: 12, padding: '14px 16px', border: '1px solid #F0EAE0' }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <p style={{ margin: '0 0 2px', fontWeight: 700, color: '#1B4D3E', fontSize: 14 }}>{item.title}</p>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: 13, lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#book" style={{ background: '#1B4D3E', color: 'white', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
                📅 Book a Speech & Language Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH — 5 STEPS */}
      <section style={{ background: '#FAF6F0', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Our Approach</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              How speech therapy works<br />
              <span style={{ color: '#B8892A' }}>at Communiqué.</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: '#6b7280', maxWidth: 560, margin: 'auto', lineHeight: 1.6 }}>
              A structured, goal-directed process — from initial enquiry to measurable outcomes.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }} className="approach-grid">
            {approachSteps.map((s, i) => (
              <div key={s.num} style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 20, padding: '24px 20px', borderTop: '3px solid #1B4D3E', position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 40, fontWeight: 800, color: '#1B4D3E', opacity: 0.06, position: 'absolute', top: 12, right: 16, lineHeight: 1 }}>{s.num}</div>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#1B4D3E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, marginBottom: 14 }}>{s.num}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 15, margin: '0 0 8px', fontWeight: 700 }}>{s.title}</h3>
                <p style={{ color: '#6b7280', margin: 0, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                {i < approachSteps.length - 1 && (
                  <div style={{ position: 'absolute', right: -10, top: '50%', transform: 'translateY(-50%)', color: '#B8892A', fontSize: 18, fontWeight: 700, zIndex: 1 }} className="approach-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP — CHILDREN VS ADULTS */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Who We Help</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              Speech and language support<br />
              <span style={{ color: '#B8892A' }}>for every stage of life.</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="who-grid">
            {/* Children */}
            <div style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 24, overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: 260 }}>
                <Image src="/speech-child.jpg" alt="Child speech therapy" fill style={{ objectFit: 'cover' }} sizes="580px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,77,62,0.7) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <p style={{ margin: 0, color: '#d4a843', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>For Children</p>
                  <p style={{ margin: '4px 0 0', color: 'white', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 22, fontWeight: 700 }}>Paediatric Speech Therapy</p>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.65, margin: '0 0 16px' }}>
                  Early identification and intervention makes a significant difference to communication outcomes. We work with children from toddlerhood through adolescence.
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {['Speech sound errors and unclear speech', 'Late talking and language delay', 'Autism spectrum and social communication', 'Stuttering and fluency difficulties', 'School-age language and literacy support', 'Voice concerns in children'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#4b5563' }}>
                      <span style={{ color: '#B8892A', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                {/* When to seek help */}
                <div style={{ marginTop: 20, background: 'white', borderRadius: 14, padding: '16px', border: '1px solid #F0EAE0' }}>
                  <p style={{ margin: '0 0 12px', fontSize: 13, fontWeight: 700, color: '#1B4D3E' }}>⚠️ Signs worth discussing with an SLP:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {checklistItems.map((c) => (
                      <div key={c.age} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 12 }}>
                        <span style={{ background: '#1B4D3E', color: 'white', borderRadius: 4, padding: '1px 6px', fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{c.age}</span>
                        <span style={{ color: '#6b7280' }}>{c.signs}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Adults */}
            <div style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 24, overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: 260 }}>
                <Image src="/speech-adult.jpg" alt="Adult speech therapy" fill style={{ objectFit: 'cover' }} sizes="580px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,77,62,0.7) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <p style={{ margin: 0, color: '#d4a843', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>For Adults</p>
                  <p style={{ margin: '4px 0 0', color: 'white', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 22, fontWeight: 700 }}>Adult Speech Rehabilitation</p>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.65, margin: '0 0 16px' }}>
                  Communication difficulties in adults can arise from neurological conditions, voice problems or long-standing speech and fluency concerns. Assessment-led therapy supports recovery and quality of life.
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {['Aphasia following stroke or brain injury', 'Dysarthria and motor speech disorders', 'Voice difficulties and vocal strain', 'Stuttering and fluency concerns', 'Communication changes after neurological conditions', 'Functional communication rehabilitation'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#4b5563' }}>
                      <span style={{ color: '#B8892A', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 20, background: 'white', borderRadius: 14, padding: '16px', border: '1px solid #F0EAE0', borderLeft: '4px solid #B8892A' }}>
                  <p style={{ margin: 0, color: '#1B4D3E', fontSize: 13, lineHeight: 1.65 }}>
                    <strong>Important:</strong> Adults experiencing sudden changes in speech, voice or swallowing should seek medical review promptly. Speech-language therapy is often most effective when started early after a neurological event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COMMUNIQUÉ */}
      <section style={{ background: '#FAF6F0', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Why Communiqué</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              Why entrust your communication<br />
              <span style={{ color: '#B8892A' }}>to Communiqué?</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="trust-grid">
            {trustPoints.map((t) => (
              <div key={t.title} style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 20, padding: '26px 24px', borderLeft: '3px solid #B8892A', boxShadow: '0 4px 16px rgba(27,77,62,0.06)' }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{t.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 17, margin: '0 0 8px', fontWeight: 700 }}>{t.title}</h3>
                <p style={{ color: '#6b7280', margin: 0, fontSize: 14, lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Integrated care callout */}
          <div style={{ marginTop: 24, background: 'linear-gradient(135deg, #1B4D3E, #153d30)', borderRadius: 20, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 18, fontWeight: 700, color: 'white', margin: '0 0 6px' }}>
                Speech and hearing — under one roof.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', margin: 0, fontSize: 14, maxWidth: 560 }}>
                Communiqué offers integrated speech-language and audiological care. When hearing is a contributing factor to a communication difficulty — which it sometimes is — we can assess both in the same clinic.
              </p>
            </div>
            <a href="/" style={{ background: '#B8892A', color: 'white', padding: '13px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              View All Services →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Common Questions</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,3vw,34px)', color: '#1B4D3E', margin: 0, fontWeight: 700 }}>
              Speech therapy questions — answered honestly
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 14, overflow: 'hidden' }}>
                <summary style={{ padding: '18px 20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14, listStyle: 'none', fontWeight: 700, color: '#1B4D3E', fontSize: 14, fontFamily: 'var(--font-playfair, Georgia, serif)', lineHeight: 1.4 }}>
                  {f.q}
                  <span style={{ color: '#B8892A', fontSize: 20, fontWeight: 700, flexShrink: 0, marginTop: -2 }}>+</span>
                </summary>
                <div style={{ padding: '0 20px 18px', color: '#6b7280', lineHeight: 1.75, fontSize: 14 }}>
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: 1160, margin: 'auto', padding: '64px 18px 80px' }}>
        <div style={{ background: 'linear-gradient(135deg, #1B4D3E, #0f2d22)', borderRadius: 28, padding: '56px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }} className="final-cta-grid">
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4a843', marginBottom: 14 }}>
              Serving Dwarka Expressway · New Gurgaon · Sector 113
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,3vw,36px)', color: 'white', margin: '0 0 12px', fontWeight: 700, lineHeight: 1.2 }}>
              Ready to take the first step<br />
              <span style={{ color: '#B8892A' }}>toward better communication?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, margin: '0 0 16px', lineHeight: 1.6 }}>
              1-Minute Speech Check → Assessment → Individualised Therapy → Progress Monitoring → Outcome Review
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 6px', fontSize: 15 }}>
              📍 SCO 90, 3rd Floor, M3M Market, Sector 113, Dwarka Expressway, Gurugram
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: 15 }}>
              📞{' '}
              <a href="tel:+918796270575" style={{ color: '#d4a843' }}>8796270575</a>
              &nbsp;·&nbsp;
              <a href="tel:+918700138433" style={{ color: '#d4a843' }}>8700138433</a>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
            <a href="#book" style={{ background: '#B8892A', color: 'white', padding: '15px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
              📅 Book Assessment
            </a>
            <a href="https://wa.me/918796270575?text=Hi%2C+I'd+like+to+know+more+about+speech+therapy." target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
              💬 WhatsApp Us
            </a>
            <a href="https://wa.me/918796270575?text=Hi%2C+I'd+like+to+submit+a+video+for+the+1-Minute+Speech+Check." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.2)' }}>
              🎥 1-Min Speech Check
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', borderTop: '1px solid #F0EAE0', padding: 10, display: 'flex', gap: 8, zIndex: 50 }} className="mobile-sticky">
        <a href="#book" style={{ flex: 1, background: '#1B4D3E', color: 'white', padding: '12px 10px', borderRadius: 8, fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontSize: 14 }}>
          Book Assessment
        </a>
        <a href="https://wa.me/918796270575?text=Hi%2C+I'd+like+to+submit+a+video+for+the+1-Minute+Speech+Check." target="_blank" rel="noopener noreferrer" style={{ flex: 1, background: '#25D366', color: 'white', padding: '12px 10px', borderRadius: 8, fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontSize: 14 }}>
          🎥 Speech Check
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) { .mobile-sticky { display: none !important; } }
        @media (max-width: 900px) {
          .check-grid { grid-template-columns: 1fr !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .assess-layout { grid-template-columns: 1fr !important; }
          .approach-grid { grid-template-columns: 1fr 1fr !important; }
          .approach-arrow { display: none !important; }
          .who-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr 1fr !important; }
          .final-cta-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .approach-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) { body { padding-bottom: 70px; } }
      `}</style>

    </main>
  )
}