import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Server, Code, Shield, Network, Mail, ExternalLink, ChevronRight, Cloud } from "lucide-react";
import { SiNextdotjs, SiCloudflare, SiPostgresql, SiStripe, SiPython, SiGo, SiNginx, SiReact, SiVuedotjs, SiDocker } from "react-icons/si";

export default function Home() {
  useEffect(() => {
    // Basic SEO setup for SPA
    document.title = "Tenor Creative LLC | The senior technical team agencies build on";
    
    // Add meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Tenor Creative is the senior technical build arm that agencies and founders trust for custom software, automation, and systems. Principal: Seth Brasile.');

    // JSON-LD Schema
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tenor Creative LLC",
      "url": "https://tenorcreative.com",
      "founder": {
        "@type": "Person",
        "name": "Seth Brasile",
        "sameAs": [
          "https://sethbrasile.com",
          "https://github.com/sethbrasile",
          "https://www.linkedin.com/in/sethbrasile-43a315a0"
        ]
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "seth@tenorcreative.com",
        "contactType": "customer service"
      },
      "areaServed": "Remote",
      "knowsAbout": [
        "Custom Software Development",
        "Business Process Automation",
        "AI Agents",
        "Cloud Infrastructure",
        "DevOps",
        "Technical Consulting"
      ]
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono font-bold text-xl tracking-tight text-primary">
            TENOR<span className="text-accent">_</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 font-mono text-sm">
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#agency" className="hover:text-accent transition-colors">White-Label</a>
            <a href="#work" className="hover:text-accent transition-colors">Work</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 md:pt-36 md:pb-40 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background"></div>
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                The senior technical team <br className="hidden md:block"/>
                <span className="text-accent">agencies build on.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl font-mono leading-relaxed">
                Custom software, automation, and resilient systems. 
                Delivered with precision. No fluff, just production-grade execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 font-mono">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                  data-testid="link-agency-cta"
                >
                  Partner with us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors"
                  data-testid="link-services-cta"
                >
                  Explore capabilities
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Capabilities</h2>
              <p className="text-muted-foreground font-mono max-w-2xl">
                When off-the-shelf tools hit their ceiling, we build the systems that scale with your operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-background border border-border rounded-lg shadow-sm">
                <Code className="h-8 w-8 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">Custom Apps & SaaS</h3>
                <p className="text-muted-foreground mb-4">
                  Full-stack application and SaaS development on a modern edge stack. Built for businesses that need software molded to their exact shape.
                </p>
                <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                  <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-2 text-accent"/> Next.js, React, Nuxt</li>
                  <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-2 text-accent"/> PostgreSQL, Neon, Drizzle</li>
                  <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-2 text-accent"/> Cloudflare Workers, Edge</li>
                </ul>
              </div>

              <div className="p-8 bg-background border border-border rounded-lg shadow-sm">
                <Terminal className="h-8 w-8 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">Automation & AI Tooling</h3>
                <p className="text-muted-foreground mb-4">
                  Business-process automation, AI agents, internal tooling, and RAG pipelines. Stop manual work from eating your team's bandwidth.
                </p>
                <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                  <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-2 text-accent"/> AI Agents & Integrations</li>
                  <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-2 text-accent"/> RAG Pipelines (Python, Postgres)</li>
                  <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-2 text-accent"/> Declarative Workflows</li>
                </ul>
              </div>

              <div className="p-8 bg-background border border-border rounded-lg shadow-sm md:col-span-2">
                <Server className="h-8 w-8 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">Infrastructure, DevOps & Consulting</h3>
                <p className="text-muted-foreground mb-4 max-w-3xl">
                  CI/CD, cloud architecture, security hardening, immutable infra, and fractional-CTO advisory. Solving problems of reliability, scale, and compliance before they become emergencies.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                    <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-2 text-accent"/> Immutable Infrastructure</li>
                    <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-2 text-accent"/> Zero-Trust Ingress & Security</li>
                  </ul>
                  <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                    <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-2 text-accent"/> CI/CD Pipelines</li>
                    <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-2 text-accent"/> CRM Setup & Data Plumbing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Partner Section */}
        <section id="agency" className="py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The White-Label Model</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    We operate as the invisible technical arm for marketing, design, and SEO agencies. You own the client relationship; we execute the complex builds.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                      <span><strong>NDA-friendly & Non-compete:</strong> We never poach your clients. We deliver under your brand.</span>
                    </li>
                    <li className="flex items-start">
                      <Network className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                      <span><strong>Senior Execution:</strong> Led by our principal, pulling in vetted collaborators only for capacity. No junior hand-offs.</span>
                    </li>
                    <li className="flex items-start">
                      <Terminal className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                      <span><strong>Proven Partnership:</strong> Already the technical backbone for PPMC and others. A repeatable, reliable process.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 bg-card border border-border p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Network className="h-32 w-32" />
                </div>
                <h3 className="font-mono font-bold text-lg mb-4 text-primary">Engagement Modes</h3>
                <ul className="space-y-4 font-mono text-sm">
                  <li className="border-b border-border pb-4">
                    <div className="font-bold mb-1">01. Project-Based</div>
                    <div className="text-muted-foreground">Scoped builds with clear deliverables.</div>
                  </li>
                  <li className="border-b border-border pb-4">
                    <div className="font-bold mb-1">02. Retainer / Partnership</div>
                    <div className="text-muted-foreground">Ongoing capacity for your agency's pipeline.</div>
                  </li>
                  <li>
                    <div className="font-bold mb-1">03. Advisory</div>
                    <div className="text-muted-foreground">Fractional CTO and technical architecture.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Work</h2>
            
            <div className="space-y-12">
              {/* Project 1 */}
              <div className="group border border-border p-6 md:p-8 rounded-lg bg-background transition-colors hover:border-accent/50">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      Margin Check
                      <a href="https://margin-check.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent"><ExternalLink className="h-5 w-5" /></a>
                    </h3>
                    <p className="text-muted-foreground mt-2 font-mono text-sm max-w-2xl">
                      Solo-built SaaS ingesting Etsy CSV exports, surfacing real per-listing profit margins after all fees.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 font-mono text-xs">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">Next.js 16</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">Cloudflare Workers</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">Neon + Drizzle</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">Stripe</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group border border-border p-6 md:p-8 rounded-lg bg-background transition-colors hover:border-accent/50">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      Potluck Planner
                      <a href="https://potluck-planner.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent"><ExternalLink className="h-5 w-5" /></a>
                    </h3>
                    <p className="text-muted-foreground mt-2 font-mono text-sm max-w-2xl">
                      Event-coordination SaaS featuring passkeys/WebAuthn, OAuth, magic links, payments, email/SMS, and background job handlers.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 font-mono text-xs">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">Next.js 15</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">Better Auth</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">Inngest</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">Twilio</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group border border-border p-6 md:p-8 rounded-lg bg-background transition-colors hover:border-accent/50">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">Team RAG Pipeline</h3>
                    <p className="text-muted-foreground mt-2 font-mono text-sm max-w-2xl">
                      Dual-database privacy boundary by design — shared topics in Postgres, private topics in local SQLite that never touches shared infra. Data classification enforced at storage layer.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 font-mono text-xs">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">Python</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">PostgreSQL</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">SQLite</span>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group border border-border p-6 md:p-8 rounded-lg bg-background transition-colors hover:border-accent/50">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">Immutable Reverse-Proxy Edge</h3>
                    <p className="text-muted-foreground mt-2 font-mono text-sm max-w-2xl">
                      Fedora CoreOS immutable reverse proxy terminating SSL on LAN side for IDS/IPS inspection. Deployed in production.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 font-mono text-xs">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">Fedora CoreOS</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">NGINX</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">fail2ban</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Principal</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I'm Seth Brasile. I've spent 12+ years across full-stack development, DevOps, and regulated-industry IT (casinos, healthcare, manufacturing, government). 
                  </p>
                  <p>
                    I built the BetterLife platform from zero and led a 6-engineer team through its v2 cloud-native migration. I've automated security and compliance across 3,200 enterprise endpoints at an MSP and served as a PCI-DSS SME. 
                  </p>
                  <p>
                    Today, I ship production-grade SaaS solo on modern edge stacks, and I co-own PPMC and a real-estate partnership. I scope builds like an owner, because I am one. I'm an engineer who's been on-call at 2am, not just a coder.
                  </p>
                  <div className="pt-4 flex gap-4 font-mono text-sm">
                    <a href="https://sethbrasile.com" target="_blank" rel="noreferrer" className="text-primary hover:text-accent flex items-center">
                      Portfolio <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <a href="https://github.com/sethbrasile" target="_blank" rel="noreferrer" className="text-primary hover:text-accent flex items-center">
                      GitHub <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <a href="https://www.linkedin.com/in/sethbrasile-43a315a0" target="_blank" rel="noreferrer" className="text-primary hover:text-accent flex items-center">
                      LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg self-start">
                <h3 className="font-mono font-bold mb-4 border-b border-border pb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <SiNextdotjs className="h-6 w-6 hover:text-foreground transition-colors" title="Next.js" />
                  <SiReact className="h-6 w-6 hover:text-foreground transition-colors" title="React" />
                  <SiVuedotjs className="h-6 w-6 hover:text-foreground transition-colors" title="Vue/Nuxt" />
                  <SiPython className="h-6 w-6 hover:text-foreground transition-colors" title="Python" />
                  <SiGo className="h-6 w-6 hover:text-foreground transition-colors" title="Go" />
                  <SiPostgresql className="h-6 w-6 hover:text-foreground transition-colors" title="PostgreSQL" />
                  <SiCloudflare className="h-6 w-6 hover:text-foreground transition-colors" title="Cloudflare" />
                  <SiDocker className="h-6 w-6 hover:text-foreground transition-colors" title="Docker" />
                  <SiNginx className="h-6 w-6 hover:text-foreground transition-colors" title="NGINX" />
                  <Cloud className="h-6 w-6 hover:text-foreground transition-colors" title="Azure" />
                  <SiStripe className="h-6 w-6 hover:text-foreground transition-colors" title="Stripe" />
                </div>
                <div className="mt-6 font-mono text-xs text-muted-foreground space-y-1">
                  <p>+ CI/CD, Immutable Infra</p>
                  <p>+ gRPC, mTLS, REST</p>
                  <p>+ Active Directory, Okta</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start a Conversation</h2>
            <p className="text-primary-foreground/80 font-mono mb-10 max-w-2xl mx-auto">
              Ready to discuss a build, architecture review, or white-label partnership? Reach out directly.
            </p>
            
            <a 
              href="mailto:seth@tenorcreative.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-bold rounded-md hover:bg-background/90 transition-colors text-lg"
              data-testid="link-mailto"
            >
              <Mail className="mr-3 h-5 w-5" />
              seth@tenorcreative.com
            </a>

            <div className="mt-16 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm font-mono text-primary-foreground/60 mb-2">Looking for marketing, SEO, or a website instead?</p>
              <a 
                href="https://pricklypearmarketing.co" 
                target="_blank" 
                rel="noreferrer"
                className="text-accent hover:text-accent/80 font-bold flex items-center justify-center transition-colors"
              >
                Visit PPMC <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 text-sm text-muted-foreground font-mono">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p>&copy; {new Date().getFullYear()} Tenor Creative LLC. All rights reserved.</p>
            <p className="mt-1">Based in Durant, OK — Operating Remote</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://sethbrasile.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">CV</a>
            <a href="https://github.com/sethbrasile" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://bytemycache.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Blog</a>
          </div>
        </div>
      </footer>

      {/* Hidden SEO FAQ */}
      <div className="sr-only">
        <h2>Frequently Asked Questions</h2>
        <dl>
          <dt>What does Tenor Creative do?</dt>
          <dd>Tenor Creative is a senior technical build arm specializing in custom software, automation, and systems architecture.</dd>
          
          <dt>Does Tenor work white-label for agencies?</dt>
          <dd>Yes, Tenor Creative operates as a white-label technical subcontractor for agencies, delivering complex builds under their brand.</dd>
          
          <dt>How is Tenor different from PPMC?</dt>
          <dd>Tenor handles technical builds, automation, and systems. PPMC handles marketing, SEO, and web design.</dd>
          
          <dt>How do I start a project?</dt>
          <dd>Email seth@tenorcreative.com to schedule a technical discovery conversation.</dd>
        </dl>
      </div>
    </div>
  );
}
