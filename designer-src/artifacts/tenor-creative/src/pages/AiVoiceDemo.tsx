import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Phone,
  PhoneCall,
  PhoneOff,
  ShieldCheck,
  BellOff,
  UserCheck,
  ArrowLeft,
  ChevronRight,
  Voicemail,
  Zap,
} from "lucide-react";

const DEMO_NUMBER = "9032944808";
const DEMO_NUMBER_DISPLAY = "(903) 294-4808";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

function PulseRing() {
  return (
    <span className="absolute inset-0 rounded-full animate-ping bg-accent opacity-20 pointer-events-none" />
  );
}

export default function AiVoiceDemo() {
  const [dialed, setDialed] = useState(false);

  useEffect(() => {
    document.title = "AI Answering Service Demo — Tenor Creative";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Call (903) 294-4808 and experience a live AI answering service — real-time spam filtering, intelligent call screening, and automatic callback flagging. Built by Tenor Creative."
    );
  }, []);

  function handleDial() {
    setDialed(true);
    window.location.href = `tel:${DEMO_NUMBER}`;
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono font-bold text-xl tracking-tight text-primary"
          >
            TENOR<span className="text-accent">_</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs uppercase tracking-widest mb-8">
                <Zap className="h-3.5 w-3.5" />
                Live demo — real AI, real call
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Your phone line,{" "}
              <span className="text-accent">working smarter.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-xl md:text-2xl text-muted-foreground font-mono leading-relaxed mb-6 max-w-2xl mx-auto"
            >
              Call the number below. An AI answers, screens the call, and
              handles it — spam and junk never get through, real callers always
              do.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base text-muted-foreground mb-14 max-w-xl mx-auto"
            >
              This is what it sounds like when your business line has an AI
              answering service instead of voicemail. Try it from any phone.
            </motion.p>

            {/* CTA Card */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-block"
            >
              <div className="bg-card border border-border rounded-2xl px-10 py-10 shadow-lg text-center">
                <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-3">
                  Demo number
                </p>
                <a
                  href={`tel:${DEMO_NUMBER}`}
                  className="font-bold text-5xl md:text-6xl tracking-tight text-foreground hover:text-accent transition-colors"
                  data-testid="link-phone-number"
                  aria-label={`Call demo number ${DEMO_NUMBER_DISPLAY}`}
                >
                  {DEMO_NUMBER_DISPLAY}
                </a>
                <p className="text-sm text-muted-foreground font-mono mt-2 mb-8">
                  Works from any phone — mobile or desktop
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="relative inline-flex">
                    {!dialed && <PulseRing />}
                    <button
                      onClick={handleDial}
                      className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg rounded-full hover:bg-accent/90 active:scale-95 transition-all shadow-md"
                      data-testid="button-dial-demo"
                      aria-label={`Dial ${DEMO_NUMBER_DISPLAY}`}
                    >
                      <PhoneCall className="h-5 w-5" />
                      Dial now
                    </button>
                  </div>
                </div>

                {dialed && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 text-sm text-accent font-mono"
                  >
                    Dialing… if nothing opened, call {DEMO_NUMBER_DISPLAY}{" "}
                    directly.
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What happens on every call
              </h2>
              <p className="text-muted-foreground font-mono max-w-xl mx-auto">
                Three things happen automatically, every time — no voicemail
                box, no missed opportunities, no spam noise.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <PhoneCall className="h-7 w-7 text-accent" />,
                  step: "01",
                  title: "AI answers instantly",
                  body: "Every call is answered in seconds — no rings into the void, no generic voicemail greeting. The AI introduces your business, engages the caller, and starts qualifying.",
                },
                {
                  icon: <ShieldCheck className="h-7 w-7 text-accent" />,
                  step: "02",
                  title: "Spam is filtered out",
                  body: "Robocalls, spam dialers, and obvious junk are identified and dismissed cleanly. They never make it to your inbox, your notification, or your attention. You never know they called.",
                },
                {
                  icon: <UserCheck className="h-7 w-7 text-accent" />,
                  step: "03",
                  title: "Real people get handled — or flagged",
                  body: "Real callers get a useful experience. If they hang up before leaving a message, the system flags the call as a manual callback needed — so no genuine lead slips through the cracks.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-8 bg-background border border-border rounded-xl"
                >
                  <div className="flex items-start justify-between mb-6">
                    {item.icon}
                    <span className="font-mono text-xs text-muted-foreground/50 font-bold">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Two problems it solves cleanly
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Voicemail replacement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="p-8 bg-card border border-border rounded-xl"
              >
                <Voicemail className="h-8 w-8 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">
                  A smarter voicemail replacement
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  Voicemail is passive — it records everything and makes you
                  sort through it. This is active: the AI asks the right
                  questions, understands the caller's intent, and only surfaces
                  what actually needs your attention.
                </p>
                <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                  {[
                    "Caller intent captured before you listen",
                    "Hang-ups from real callers flagged for callback",
                    "No box to check, no audio scrubbing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Spam guard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="p-8 bg-card border border-border rounded-xl"
              >
                <BellOff className="h-8 w-8 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">
                  Spam guard for your business line
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  Business lines attract robocalls. Screening them yourself
                  wastes time; ignoring your phone loses real clients. The AI
                  sits in between: every call is answered, but only real people
                  get any further.
                </p>
                <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                  {[
                    "Robocalls and dialers dismissed automatically",
                    "Real callers get a professional, helpful experience",
                    "You only see what matters",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Callback flagging callout */}
        <section className="py-16 border-y border-border bg-accent/5">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <PhoneOff className="h-8 w-8 text-accent mx-auto mb-5" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Hang-ups don't mean lost leads
              </h2>
              <p className="text-muted-foreground font-mono leading-relaxed max-w-xl mx-auto">
                When a real person hangs up before leaving a message, the AI
                knows the difference between a real caller and a bot abandoning
                the call. Real hang-ups get flagged as a manual callback action
                — so you can follow up on your terms. Spam hang-ups disappear
                into the void, where they belong.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want this on your business line?
              </h2>
              <p className="text-muted-foreground font-mono mb-10 max-w-lg mx-auto">
                This is a custom-built integration — designed around your
                specific workflow, not a SaaS subscription. Let's scope it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-7 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors font-mono"
                  data-testid="link-contact-cta"
                >
                  Get in touch
                </a>
                <a
                  href={`tel:${DEMO_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-border bg-background font-medium rounded-md hover:bg-card transition-colors font-mono text-muted-foreground hover:text-foreground"
                  data-testid="link-call-again"
                >
                  <Phone className="h-4 w-4" />
                  Call the demo again
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Tenor Creative LLC · Durant, OK ·
            Remote
          </span>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              tenorcreative.com
            </Link>
            <a
              href="mailto:seth@tenorcreative.com"
              className="hover:text-foreground transition-colors"
            >
              seth@tenorcreative.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
