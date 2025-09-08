// Reusable gradient button classes
export const goldGradientBtn = `relative inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-neutral-900 shadow-xl focus:outline-none focus:ring-4 focus:ring-white/40 active:translate-y-px transition-transform bg-[linear-gradient(135deg,#c3922e_0%,#fbc926_20%,#eed688_45%,#fffbcc_60%,#fbc926_80%,#c3922e_100%)] [background-size:180%_180%] hover:[background-position:80%_20%]`

export const GradientSheen = () => (
  <span className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
    <span className="absolute -inset-1 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.25)_35%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.25)_65%,transparent_100%)] translate-x-[-120%] hover:translate-x-[120%] transition-transform duration-700 ease-out" />
  </span>
)

// Usage Example (Book Now Button)
export default function GradientButtonDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 p-6">
      <button className={`${goldGradientBtn} relative overflow-hidden`}>
        <GradientSheen />
        <span className="relative z-10">Book Now</span>
      </button>
    </div>
  )
}
