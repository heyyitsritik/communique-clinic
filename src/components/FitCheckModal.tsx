'use client'

import { useState } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────
type Step = 1 | 2 | 3 | 4

interface Answers {
  hearingLoss: string
  lifestyle: string
  budget: string
  name: string
  phone: string
}

interface Props {
  productName: string
  onClose: () => void
}

// ─── Data ────────────────────────────────────────────────────────────────────
const LIFESTYLE_OPTIONS = [
  {
    key: 'calm',
    label: 'Calm and comfortable',
    desc: 'Quiet, mostly indoor home life. Conversations one on one.',
  },
  {
    key: 'social',
    label: 'Social and fulfilling',
    desc: 'An easy pace. Walks, outings, family gatherings.',
  },
  {
    key: 'active',
    label: 'Active professional',
    desc: 'High demand days, constantly shifting noisy to quiet.',
  },
]

const BUDGET_OPTIONS = [
  { key: 'under50k',   label: 'Under ₹50,000',       desc: 'Solid, reliable everyday hearing.' },
  { key: '50k-2l',     label: '₹50,000 – ₹2,00,000', desc: 'Noticeably better in noise, phone streaming.' },
  { key: '2l-5l',      label: '₹2,00,000 – ₹5,00,000', desc: 'Best-in-class clarity and automatic switching.' },
  { key: 'notsure',    label: 'Not sure yet',          desc: 'No problem — Dr. Saurabh will walk you through.' },
]

const HEARING_OPTIONS = ['Mild', 'Moderate', 'Severe', 'Profound', 'Not sure']

// ─── Step indicator ──────────────────────────────────────────────────────────
const STEPS = [
  { label: 'Hearing',   icon: '👂' },
  { label: 'Lifestyle', icon: '🌿' },
  { label: 'Budget',    icon: '💰' },
  { label: 'Contact',   icon: '📲' },
]

function StepIndicator({ current }: { current: Step }) {
  return (
    <div className="flex items-center justify-between mb-6 px-1">
      {STEPS.map((s, i) => {
        const num = (i + 1) as Step
        const done = num < current
        const active = num === current
        return (
          <div key={s.label} className="flex flex-col items-center gap-1 flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                done
                  ? 'bg-[#1B4D3E] text-white'
                  : active
                  ? 'bg-[#1B4D3E] text-white ring-4 ring-[#1B4D3E]/20'
                  : 'bg-[#F0EAE0] text-gray-400'
              }`}
            >
              {done ? '✓' : s.icon}
            </div>
            <span
              className={`text-[10px] font-semibold uppercase tracking-wide ${
                active ? 'text-[#1B4D3E]' : done ? 'text-[#1B4D3E]/60' : 'text-gray-400'
              }`}
            >
              {s.label}
            </span>
            {/* connector line — not on last */}
            {i < STEPS.length - 1 && (
              <div
                className="absolute"
                style={{
                  display: 'none', // handled via flexbox gap instead
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Progress bar ─────────────────────────────────────────────────────────────
function ProgressBar({ step }: { step: Step }) {
  return (
    <div className="w-full h-1 bg-[#E8E0D5] rounded-full mb-6 overflow-hidden">
      <div
        className="h-full bg-[#1B4D3E] rounded-full transition-all duration-500"
        style={{ width: `${((step - 1) / 3) * 100}%` }}
      />
    </div>
  )
}

// ─── Option button ────────────────────────────────────────────────────────────
function OptionBtn({
  label,
  desc,
  selected,
  onClick,
}: {
  label: string
  desc?: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-150 ${
        selected
          ? 'border-[#1B4D3E] bg-[#1B4D3E]/5'
          : 'border-[#E8E0D5] bg-white hover:border-[#1B4D3E]/40'
      }`}
    >
      <p className={`font-semibold text-sm ${selected ? 'text-[#1B4D3E]' : 'text-gray-800'}`}>{label}</p>
      {desc && <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>}
    </button>
  )
}

// ─── Main modal ───────────────────────────────────────────────────────────────
export default function FitCheckModal({ productName, onClose }: Props) {
  const [step, setStep] = useState<Step>(1)
  const [answers, setAnswers] = useState<Answers>({
    hearingLoss: '',
    lifestyle: '',
    budget: '',
    name: '',
    phone: '',
  })

  const canContinue = () => {
    if (step === 1) return !!answers.hearingLoss
    if (step === 2) return !!answers.lifestyle
    if (step === 3) return !!answers.budget
    if (step === 4) return answers.name.trim().length > 1 && answers.phone.trim().length >= 10
    return false
  }

  const handleSubmit = () => {
    const lifestyleLabel = LIFESTYLE_OPTIONS.find((l) => l.key === answers.lifestyle)?.label ?? answers.lifestyle
    const budgetLabel    = BUDGET_OPTIONS.find((b) => b.key === answers.budget)?.label ?? answers.budget

    const message = [
      `Hi Dr. Saurabh, I'm interested in the *${productName}*.`,
      ``,
      `Here are my details:`,
      `• Name: ${answers.name}`,
      `• Hearing loss: ${answers.hearingLoss}`,
      `• Lifestyle: ${lifestyleLabel}`,
      `• Budget: ${budgetLabel}`,
      ``,
      `Could you help me check if this is the right fit?`,
    ].join('\n')

    window.open(
      `https://wa.me/918796270575?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
    onClose()
  }

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Modal */}
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="px-6 pt-6 pb-0">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B8892A]">Check Your Fit</p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">Step {step} of 4</span>
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-[#F0EAE0] flex items-center justify-center text-gray-500 hover:bg-[#E8E0D5] transition text-sm font-bold"
              >
                ✕
              </button>
            </div>
          </div>
          <ProgressBar step={step} />
          <StepIndicator current={step} />
        </div>

        {/* Body */}
        <div className="px-6 pb-6">

          {/* ── Step 1: Hearing ── */}
          {step === 1 && (
            <div>
              <h2 className="font-playfair text-xl font-bold text-gray-900 mb-1">
                What level of hearing loss do you have?
              </h2>
              <p className="text-sm text-gray-400 mb-5">
                This helps Dr. Saurabh confirm if this model fits your audiogram.
              </p>
              <div className="space-y-2.5">
                {HEARING_OPTIONS.map((h) => (
                  <OptionBtn
                    key={h}
                    label={h}
                    selected={answers.hearingLoss === h}
                    onClick={() => setAnswers((a) => ({ ...a, hearingLoss: h }))}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── Step 2: Lifestyle ── */}
          {step === 2 && (
            <div>
              <h2 className="font-playfair text-xl font-bold text-gray-900 mb-1">
                Which sounds most like your life?
              </h2>
              <p className="text-sm text-gray-400 mb-5">
                Pick one. This shapes what we recommend.
              </p>
              <div className="space-y-2.5">
                {LIFESTYLE_OPTIONS.map((l) => (
                  <OptionBtn
                    key={l.key}
                    label={l.label}
                    desc={l.desc}
                    selected={answers.lifestyle === l.key}
                    onClick={() => setAnswers((a) => ({ ...a, lifestyle: l.key }))}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── Step 3: Budget ── */}
          {step === 3 && (
            <div>
              <h2 className="font-playfair text-xl font-bold text-gray-900 mb-1">
                Which budget feels right?
              </h2>
              <p className="text-sm text-gray-400 mb-5">
                Whatever you pick, Dr. Saurabh will show you options at every level.
              </p>
              <div className="space-y-2.5">
                {BUDGET_OPTIONS.map((b) => (
                  <OptionBtn
                    key={b.key}
                    label={b.label}
                    desc={b.desc}
                    selected={answers.budget === b.key}
                    onClick={() => setAnswers((a) => ({ ...a, budget: b.key }))}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── Step 4: Contact ── */}
          {step === 4 && (
            <div>
              <h2 className="font-playfair text-xl font-bold text-gray-900 mb-1">
                Almost there
              </h2>
              <p className="text-sm text-gray-400 mb-5">
                Dr. Saurabh will reach out on WhatsApp with your personalised recommendation.
              </p>

              {/* Summary of answers */}
              <div className="bg-[#FAF6F0] rounded-2xl p-4 mb-5 space-y-1.5">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2">Your answers</p>
                {[
                  { label: 'Hearing loss', val: answers.hearingLoss },
                  { label: 'Lifestyle',    val: LIFESTYLE_OPTIONS.find((l) => l.key === answers.lifestyle)?.label ?? '' },
                  { label: 'Budget',       val: BUDGET_OPTIONS.find((b) => b.key === answers.budget)?.label ?? '' },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{r.label}</span>
                    <span className="text-xs font-semibold text-[#1B4D3E]">{r.val}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1 block">Your name</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    value={answers.name}
                    onChange={(e) => setAnswers((a) => ({ ...a, name: e.target.value }))}
                    className="w-full border border-[#E8E0D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B4D3E] transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1 block">WhatsApp number</label>
                  <div className="flex gap-2">
                    <div className="border border-[#E8E0D5] rounded-xl px-3 py-3 text-sm text-gray-500 bg-[#FAF6F0] whitespace-nowrap">
                      +91 🇮🇳
                    </div>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      value={answers.phone}
                      maxLength={10}
                      onChange={(e) => setAnswers((a) => ({ ...a, phone: e.target.value.replace(/\D/g, '') }))}
                      className="flex-1 border border-[#E8E0D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B4D3E] transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Navigation ── */}
          <div className={`flex gap-3 mt-6 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
            {step > 1 && (
              <button
                onClick={() => setStep((s) => (s - 1) as Step)}
                className="px-6 py-3 rounded-full border-2 border-[#E8E0D5] text-sm font-semibold text-gray-600 hover:border-[#1B4D3E] transition"
              >
                ← Back
              </button>
            )}
            {step < 4 ? (
              <button
                disabled={!canContinue()}
                onClick={() => setStep((s) => (s + 1) as Step)}
                className={`flex-1 py-3 rounded-full text-sm font-bold transition ${
                  canContinue()
                    ? 'bg-[#1B4D3E] text-white hover:bg-[#163e32]'
                    : 'bg-[#E8E0D5] text-gray-400 cursor-not-allowed'
                }`}
              >
                Continue →
              </button>
            ) : (
              <button
                disabled={!canContinue()}
                onClick={handleSubmit}
                className={`flex-1 py-3 rounded-full text-sm font-bold transition ${
                  canContinue()
                    ? 'bg-[#25D366] text-white hover:bg-[#1ebe5a]'
                    : 'bg-[#E8E0D5] text-gray-400 cursor-not-allowed'
                }`}
              >
                💬 Send to WhatsApp →
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}