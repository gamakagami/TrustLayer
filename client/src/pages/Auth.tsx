import React, { useState } from 'react'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle sign in
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#0b0d16] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:28px_28px] px-4 py-16">
      {/* top accent bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-400 to-indigo-500" />

      {/* header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-100">
          TrustLayer
        </h1>
        <p className="mt-3 italic text-slate-400 text-lg">
          Answers you can trace back to the source.
        </p>
      </div>

      {/* card */}
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#171a2b]/80 backdrop-blur-sm p-8 shadow-2xl shadow-black/40">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs font-semibold tracking-widest text-slate-400 uppercase"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@organization.com"
              className="w-full rounded-lg border border-white/10 bg-[#0d0f1a] px-4 py-3 text-slate-200 placeholder:text-slate-500 outline-none transition focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-400/20"
            />
          </div>

          {/* password */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-xs font-semibold tracking-widest text-slate-400 uppercase"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-slate-200 transition"
              >
                Forgot?
              </a>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-white/10 bg-[#0d0f1a] px-4 py-3 text-slate-200 placeholder:text-slate-500 outline-none transition focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-400/20"
            />
          </div>

          {/* sign in button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#aec5ec] py-3.5 font-bold text-slate-900 transition hover:bg-[#c1d3f0] active:bg-[#9bb6e6]"
          >
            Sign in
          </button>

          {/* divider */}
          <div className="border-t border-white/10" />

          {/* sso */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 py-3.5 font-semibold text-slate-200 transition hover:bg-white/5"
          >
            <ShieldIcon />
            Sign in with SSO
          </button>
        </form>
      </div>

      {/* footer links */}
      <div className="mt-8 text-center text-slate-400">
        Don&apos;t have an account?{' '}
        <a href="#" className="underline decoration-slate-500 underline-offset-4 text-slate-200 hover:text-white transition">
          Create one
        </a>
      </div>

      <div className="mt-10 flex gap-8 text-xs tracking-wide text-slate-600">
        <a href="#" className="hover:text-slate-400 transition">
          SECURITY POLICY
        </a>
        <a href="#" className="hover:text-slate-400 transition">
          TERMS OF SERVICE
        </a>
      </div>
    </div>
  )
}

function ShieldIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-slate-300"
    >
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" />
      <circle cx="12" cy="10" r="2.2" />
      <path d="M9 16c0-1.7 1.3-3 3-3s3 1.3 3 3" />
    </svg>
  )
}