export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          DevOps Training
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Build Incident Response<br />
          <span className="text-[#58a6ff]">Muscle Memory</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Schedule surprise drills, track team response times, and generate improvement reports — so your team is ready when it really matters.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $49/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">3x</div>
            <div className="text-xs text-[#8b949e] mt-1">Faster MTTR</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">100%</div>
            <div className="text-xs text-[#8b949e] mt-1">Automated Drills</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">Slack</div>
            <div className="text-xs text-[#8b949e] mt-1">& Teams Ready</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per team</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited scheduled drills</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time response tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Slack &amp; Teams integration</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automated improvement reports</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Up to 50 team members</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How are drills delivered to my team?</h3>
            <p className="text-[#8b949e] text-sm">Drills are sent automatically via Slack or Microsoft Teams at scheduled times. Team members respond directly in their chat app — no extra tools needed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">What metrics are tracked?</h3>
            <p className="text-[#8b949e] text-sm">We track acknowledgment time, time-to-resolution, participation rate, and trend data over time so you can see exactly where your team improves.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Can I customize drill scenarios?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can create custom scenarios tailored to your stack, or choose from our library of common incident types like database outages, API failures, and security events.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Incident Response Drill Runner. All rights reserved.
      </footer>
    </main>
  );
}
