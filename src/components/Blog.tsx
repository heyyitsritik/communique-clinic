'use client'
import { useReveal } from '@/lib/useReveal'

// ─────────────────────────────────────────────────────────
// HOW TO ADD A NEW BLOG POST (no coding needed):
//
// 1. Go to https://hashnode.com and sign in
// 2. Write your article there (like Google Docs)
// 3. Copy the article URL from Hashnode
// 4. Add a new object to the POSTS array below:
//    {
//      title: 'Your Article Title',
//      excerpt: 'A short 1-2 sentence summary of the article',
//      date: 'June 2025',
//      readTime: '4 min read',
//      category: 'Hearing Health',
//      emoji: '👂',
//      url: 'https://your-hashnode-post-url',
//    }
// 5. Save the file and run: git add . && git commit -m "New blog post" && git push
// ─────────────────────────────────────────────────────────

const POSTS = [
  {
    title: '5 Early Signs of Hearing Loss You Should Never Ignore',
    excerpt:
      'Hearing loss often develops gradually. Recognising the early signs can make a significant difference in treatment outcomes for both children and adults.',
    date: 'June 2025',
    readTime: '4 min read',
    category: 'Hearing Health',
    emoji: '👂',
    url: 'https://hashnode.com', // Replace with real Hashnode post URL
  },
  {
    title: 'What is Vertigo? Understanding Dizziness and Balance Disorders',
    excerpt:
      'Vertigo is not just "feeling dizzy." Learn about the vestibular system, common causes of balance disorders, and how modern testing can identify the root cause.',
    date: 'May 2025',
    readTime: '5 min read',
    category: 'Balance & Vestibular',
    emoji: '⚖️',
    url: 'https://hashnode.com',
  },
  {
    title: 'Speech Delay in Children: When to Seek Professional Help',
    excerpt:
      'Every child develops differently, but certain milestones matter. A speech-language pathologist explains what parents should watch for and when to act.',
    date: 'May 2025',
    readTime: '6 min read',
    category: 'Speech Therapy',
    emoji: '🗣️',
    url: 'https://hashnode.com',
  },
  {
    title: 'Living with Tinnitus: Causes, Myths, and Evidence-Based Relief',
    excerpt:
      'That ringing in your ears has a name — tinnitus. Dr. Saurabh explains the science behind it and the most effective management approaches available today.',
    date: 'April 2025',
    readTime: '5 min read',
    category: 'Tinnitus',
    emoji: '🔔',
    url: 'https://hashnode.com',
  },
  {
    title: 'BERA Test for Newborns: What Parents Need to Know',
    excerpt:
      'Early hearing screening in newborns is critical for speech and language development. We walk parents through what the BERA test involves and why it matters.',
    date: 'April 2025',
    readTime: '4 min read',
    category: 'Child Hearing',
    emoji: '👶',
    url: 'https://hashnode.com',
  },
  {
    title: 'Hearing Aids vs Cochlear Implants: Which is Right for You?',
    excerpt:
      'Not all hearing solutions are the same. This guide explains the key differences, candidacy criteria, and what to expect from each option.',
    date: 'March 2025',
    readTime: '7 min read',
    category: 'Hearing Aid',
    emoji: '🎧',
    url: 'https://hashnode.com',
  },
]

const categoryColors: Record<string, string> = {
  'Hearing Health':      '#1B4D3E',
  'Balance & Vestibular':'#2a6a5a',
  'Speech Therapy':      '#3a7a6a',
  'Tinnitus':            '#B8892A',
  'Child Hearing':       '#c99830',
  'Hearing Aid':         '#1B4D3E',
}

export default function Blog() {
  const sectionRef = useReveal()

  return (
    <section id="blog" className="py-20 md:py-28" style={{ background: '#FAF6F0' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div ref={sectionRef} className="reveal text-center mb-14">
          <p className="section-label mb-3">Knowledge Centre</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            Health Articles &amp; Insights
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Expert guidance on hearing, speech, balance and more — written by Dr. Saurabh
            Chitoshiya to help you make informed decisions about your health.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card bg-white rounded-2xl overflow-hidden border border-cream-dark flex flex-col group"
            >
              {/* Card header */}
              <div
                className="px-6 py-8 flex flex-col gap-3"
                style={{ background: `${categoryColors[post.category]}08` }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: `${categoryColors[post.category]}18`,
                      color: categoryColors[post.category],
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="text-2xl">{post.emoji}</span>
                </div>
                <h3 className="font-playfair font-bold text-teal-900 text-lg leading-snug group-hover:text-gold-600 transition-colors">
                  {post.title}
                </h3>
              </div>

              {/* Card body */}
              <div className="px-6 py-5 flex flex-col flex-1">
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-cream-dark">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>📅 {post.date}</span>
                    <span>·</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                  <span
                    className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{ color: '#B8892A' }}
                  >
                    Read →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Hashnode CTA */}
        <div className="mt-12 text-center">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl border border-cream-dark px-8 py-6 shadow-sm"
          >
            <div className="text-left">
              <p className="font-playfair font-bold text-teal-900 text-lg">
                Read all articles on our Hashnode blog
              </p>
              <p className="text-gray-500 text-sm mt-1">
                New health insights published regularly by Dr. Saurabh
              </p>
            </div>
            <a
              href="https://hashnode.com/@communiqueclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold whitespace-nowrap flex-shrink-0"
            >
              📖 View All Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
