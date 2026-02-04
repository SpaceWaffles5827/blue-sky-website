import ContactForm from "./Comps/NavBar/ContactForm/ContactForm";
import NavBar from "./Comps/NavBar/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col text-ink-900">
        <section
          id="home"
          className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(42,108,247,0.18),transparent_60%),linear-gradient(130deg,#f6f9ff_0%,#e7f0ff_45%,#ffffff_100%)] px-5 pb-20 pt-28 sm:px-[6vw] sm:pb-24 sm:pt-32 lg:pt-36"
        >
          <div className="pointer-events-none absolute -right-36 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(143,196,255,0.32)_0%,rgba(143,196,255,0.12)_55%,transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.65),transparent_40%),linear-gradient(to_right,rgba(11,26,43,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,26,43,0.05)_1px,transparent_1px)] bg-[length:auto,120px_120px,120px_120px] opacity-60" />
          <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-12 items-center gap-10 lg:gap-12">
            <div className="col-span-12 flex flex-col gap-5 lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-strong">
                Precision automation partner
              </p>
              <h1 className="font-display text-[clamp(2.4rem,3vw+1.6rem,5rem)] leading-[1.08] tracking-[-0.02em]">
                Blue Sky <span className="block text-accent">Industrial Solutions</span>
              </h1>
              <p className="max-w-[560px] text-lg text-ink-700">
                Simplifying your automation solutions with custom system design,
                validation-ready documentation, and on-site support for regulated
                manufacturing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(42,108,247,0.25)] transition hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_16px_32px_rgba(42,108,247,0.3)]"
                  href="#contact"
                  scroll={true}
                >
                  Start a project
                </Link>
                <Link
                  className="rounded-full border border-ink-900/20 bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink-700 transition hover:border-accent hover:text-ink-900"
                  href="#about"
                  scroll={true}
                >
                  See our approach
                </Link>
              </div>
              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-1 rounded-[18px] border border-ink-900/10 bg-white/70 px-4 py-3">
                  <span className="font-display text-lg font-semibold">10+ years</span>
                  <span className="text-sm text-ink-500">pharma automation</span>
                </div>
                <div className="flex flex-col gap-1 rounded-[18px] border border-ink-900/10 bg-white/70 px-4 py-3">
                  <span className="font-display text-lg font-semibold">Hands-on</span>
                  <span className="text-sm text-ink-500">support team</span>
                </div>
                <div className="flex flex-col gap-1 rounded-[18px] border border-ink-900/10 bg-white/70 px-4 py-3">
                  <span className="font-display text-lg font-semibold">Validated</span>
                  <span className="text-sm text-ink-500">compliance workflows</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 flex flex-col items-center gap-4 lg:col-span-5">
              <div className="relative aspect-[16/9] w-full max-w-[560px] overflow-hidden rounded-[28px] border border-ink-900/10 bg-[#0a1d3b] shadow-[0_30px_60px_rgba(11,26,43,0.18)]">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/IMG_0820.MOV"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-ink-900/80 px-3 py-1 text-xs text-white">
                  Conveyor Line Integration
                </span>
              </div>
              <div className="rounded-[18px] border border-ink-900/10 bg-surface-bright px-5 py-4 text-sm text-ink-700 shadow-[0_12px_24px_rgba(11,26,43,0.12)]">
                Systems engineered for uptime, traceability, and cleanroom
                performance.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-surface-alt to-surface px-5 py-20 sm:px-[6vw] sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="flex max-w-[720px] flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Capabilities
              </p>
              <h2 className="font-display text-[clamp(2rem,2.2vw+1.4rem,3.2rem)] leading-tight">
                Automation that scales with your production floor.
              </h2>
              <p className="text-lg text-ink-700">
                From equipment integration to digital traceability, we design
                and deploy systems built for performance, compliance, and
                long-term growth.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-12 items-center gap-8">
              <div className="col-span-12 justify-self-center lg:col-span-5">
                <div className="relative aspect-[720/854] w-full max-w-[420px] overflow-hidden rounded-[28px] shadow-[0_28px_50px_rgba(11,26,43,0.16)]">
                  <video
                    className="h-full w-full object-contain bg-[#0a1d3b]"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/IMG_0692-crop.MOV"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-ink-900/80 px-3 py-1 text-xs text-white">
                      Filling Automation
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 grid gap-5 sm:grid-cols-2 lg:col-span-7">
                <div className="relative overflow-hidden rounded-[18px] border border-ink-900/10 bg-gradient-to-b from-white to-[#f2f7ff] p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(11,26,43,0.12)]">
                  <span className="absolute inset-x-0 top-0 h-[3px] bg-[rgba(42,108,247,0.35)]" />
                  <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[radial-gradient(circle_at_top_left,rgba(42,108,247,0.22),transparent_60%),rgba(42,108,247,0.12)] text-accent shadow-[0_10px_20px_rgba(11,26,43,0.08)]">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                  </div>
                  <div className="relative z-10 mt-4 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-ink-900">
                      Throughput Gains
                    </h3>
                    <p className="text-sm text-ink-500">
                      Increase line speed with automation that cuts cycle time,
                      reduces rework, and keeps operators focused on quality.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[18px] border border-ink-900/10 bg-gradient-to-b from-white to-[#f2f7ff] p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(11,26,43,0.12)]">
                  <span className="absolute inset-x-0 top-0 h-[3px] bg-[rgba(42,108,247,0.35)]" />
                  <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[radial-gradient(circle_at_top_left,rgba(42,108,247,0.22),transparent_60%),rgba(42,108,247,0.12)] text-accent shadow-[0_10px_20px_rgba(11,26,43,0.08)]">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" x2="4" y1="21" y2="14" />
                      <line x1="4" x2="4" y1="10" y2="3" />
                      <line x1="12" x2="12" y1="21" y2="12" />
                      <line x1="12" x2="12" y1="8" y2="3" />
                      <line x1="20" x2="20" y1="21" y2="16" />
                      <line x1="20" x2="20" y1="12" y2="3" />
                      <line x1="2" x2="6" y1="14" y2="14" />
                      <line x1="10" x2="14" y1="8" y2="8" />
                      <line x1="18" x2="22" y1="16" y2="16" />
                    </svg>
                  </div>
                  <div className="relative z-10 mt-4 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-ink-900">
                      Flexible Integration
                    </h3>
                    <p className="text-sm text-ink-500">
                      We connect legacy equipment and modern controls without
                      disrupting production or validation timelines.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[18px] border border-ink-900/10 bg-gradient-to-b from-white to-[#f2f7ff] p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(11,26,43,0.12)]">
                  <span className="absolute inset-x-0 top-0 h-[3px] bg-[rgba(42,108,247,0.35)]" />
                  <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[radial-gradient(circle_at_top_left,rgba(42,108,247,0.22),transparent_60%),rgba(42,108,247,0.12)] text-accent shadow-[0_10px_20px_rgba(11,26,43,0.08)]">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="relative z-10 mt-4 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-ink-900">
                      Compliance Ready
                    </h3>
                    <p className="text-sm text-ink-500">
                      Documentation and validation protocols aligned with GMP and
                      GAMP so audits stay smooth.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[18px] border border-ink-900/10 bg-gradient-to-b from-white to-[#f2f7ff] p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(11,26,43,0.12)]">
                  <span className="absolute inset-x-0 top-0 h-[3px] bg-[rgba(42,108,247,0.35)]" />
                  <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[radial-gradient(circle_at_top_left,rgba(42,108,247,0.22),transparent_60%),rgba(42,108,247,0.12)] text-accent shadow-[0_10px_20px_rgba(11,26,43,0.08)]">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                    </svg>
                  </div>
                  <div className="relative z-10 mt-4 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-ink-900">
                      Reliable Support
                    </h3>
                    <p className="text-sm text-ink-500">
                      On-site commissioning and remote monitoring keep your lines
                      running with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="relative overflow-hidden bg-gradient-to-br from-[#0a1d3b] via-[#143562] to-[#1e4f8b] px-5 py-20 text-white sm:px-[6vw] sm:py-24 lg:py-28"
        >
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute inset-0 animate-starfield bg-[radial-gradient(rgba(255,255,255,0.75)_1px,transparent_1px),radial-gradient(rgba(255,255,255,0.45)_1px,transparent_1px)] bg-[length:140px_140px,90px_90px]" />
            <div className="absolute inset-0 animate-starfield-slow bg-[radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[length:200px_200px,120px_120px] opacity-70" />
            <div className="absolute inset-0 animate-twinkle bg-[radial-gradient(rgba(255,255,255,0.95)_1px,transparent_1px),radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[length:180px_180px,110px_110px] opacity-60" />
            <div className="absolute -top-24 right-10 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(143,196,255,0.35)_0%,transparent_70%)] blur-2xl" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1200px]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 flex flex-col gap-5 text-white/90 lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  About Us
                </p>
                <h2 className="font-display text-[clamp(2rem,2.2vw+1.4rem,3.2rem)] leading-tight text-white">
                  A partner built for regulated environments.
                </h2>
                <p>
                  Blue Sky Industrial Solutions has been at the forefront of
                  pharmaceutical automation for over a decade. We pair automation
                  engineers with validation specialists to deliver turnkey
                  systems that perform on the floor and stand up to audit.
                </p>
                <p className="font-semibold text-white">
                  Our goal is simple: keep your operations running while building
                  a smarter, safer production pipeline.
                </p>
              </div>
              <div className="col-span-12 w-fit max-w-[420px] justify-self-center rounded-[28px] border border-white/15 bg-white/10 px-7 py-5 backdrop-blur-md lg:col-span-5">
                <h3 className="font-display text-xl font-semibold text-white">
                  What you can expect
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-white/85 marker:text-gold">
                  <li>End-to-end system design, validation, and training</li>
                  <li>Documentation aligned with GMP and GAMP expectations</li>
                  <li>On-site commissioning with remote support follow-through</li>
                  <li>Iterative upgrades that keep production online</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-surface px-5 py-20 sm:px-[6vw] sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 flex flex-col gap-4 lg:col-span-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Contact
                </p>
                <h2 className="font-display text-[clamp(2rem,2.2vw+1.4rem,3.2rem)] leading-tight">
                  Let&apos;s build your next automation system.
                </h2>
                <p className="text-lg text-ink-700">
                  Ready to transform your operations with automation? Tell us
                  about your line, timeline, and compliance requirements.
                </p>
                <div className="mt-3 flex flex-col gap-4">
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      Email
                    </span>
                    <a className="text-base text-ink-900" href="mailto:jhartwig@blueskyindsol.com">
                      jhartwig@blueskyindsol.com
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      Phone
                    </span>
                    <a className="text-base text-ink-900" href="tel:+12565291351">
                      +1 (256) 529-1351
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      Location
                    </span>
                    <p className="text-base text-ink-900">
                      Fort Worth, Texas, with on-site deployment nationwide
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 flex flex-col gap-4 rounded-[28px] border border-ink-900/10 bg-white p-8 shadow-[0_20px_40px_rgba(11,26,43,0.1)] lg:col-span-6">
                <h3 className="text-xl font-semibold text-ink-900">Project kickoff</h3>
                <p className="text-sm text-ink-700">
                  Share a few details and our team will reach out.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
