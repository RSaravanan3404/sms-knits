import { FormEvent, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, Circle, Info, Instagram, Linkedin, Menu, MessageCircle, MoveRight, Play, Send, Sparkles, Type } from "lucide-react";

const softImage = "/manus-storage/smsknits-soft-structure_0db83cdc.jpg";
const atelierImage = "/manus-storage/smsknits-atelier-motion_20f8fc25.jpg";

function Mark() {
  return <span className="brand-mark" aria-hidden="true">S</span>;
}

function FontSelector({ fontTheme, setFontTheme }: { fontTheme: "fraunces" | "poppins" | "anthropic"; setFontTheme: (theme: "fraunces" | "poppins" | "anthropic") => void }) {
  return (
    <div className="font-selector" aria-label="Choose typography pairing">
      <span className="font-selector-label"><Type size={13} /> Type</span>
      <div className="font-selector-options" role="group" aria-label="Font pairing options">
        <button type="button" className={fontTheme === "fraunces" ? "active" : ""} onClick={() => setFontTheme("fraunces")} aria-pressed={fontTheme === "fraunces"}>Editorial</button>
        <button type="button" className={fontTheme === "poppins" ? "active" : ""} onClick={() => setFontTheme("poppins")} aria-pressed={fontTheme === "poppins"}>Poppins</button>
        <button type="button" className={fontTheme === "anthropic" ? "active" : ""} onClick={() => setFontTheme("anthropic")} aria-pressed={fontTheme === "anthropic"}>Anthropic</button>
      </div>
    </div>
  );
}

function MotionFrame({ variant = "fabric", label = "MOTION STUDY / 01" }: { variant?: "fabric" | "machine" | "atelier"; label?: string }) {
  return (
    <div className={`motion-frame motion-${variant}`}>
      <div className="motion-grain" />
      <div className="motion-lines" />
      {variant === "fabric" && <><span className="thread thread-a" /><span className="thread thread-b" /><span className="thread thread-c" /></>}
      {variant === "machine" && <><span className="machine-needle" /><span className="machine-track" /><span className="machine-dot dot-a" /><span className="machine-dot dot-b" /></>}
      {variant === "atelier" && <><span className="atelier-fold fold-a" /><span className="atelier-fold fold-b" /><span className="atelier-fold fold-c" /></>}
      <div className="motion-caption"><span>{label}</span><span className="motion-caption-dot" /></div>
      <div className="motion-play"><Play size={13} fill="currentColor" /></div>
    </div>
  );
}

function SectionLabel({ children, index }: { children: string; index: string }) {
  return <p className="section-label"><span>{index}</span>{children}</p>;
}

function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(1);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <span className="success-icon"><Check size={21} /></span>
        <p className="section-label"><span>DONE</span>ENQUIRY RECEIVED</p>
        <h3>We’ll be in touch<br /><em>shortly.</em></h3>
        <p>Thanks for sharing the first details of your project. Our team will review the brief and come back with the right next step.</p>
        <button type="button" className="text-button" onClick={() => setSent(false)}>Send another enquiry <ArrowRight size={14} /></button>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-progress"><div className="progress-copy"><span>PROJECT BRIEF</span><strong>Step {step} of 2</strong></div><div className="progress-track"><span style={{ width: `${step === 1 ? "50%" : "100%" }` }} /></div></div>
      {step === 1 ? <>
        <div className="form-intro"><div><p className="form-kicker">01 / YOUR DETAILS</p><h3>Tell us who’s<br /><em>behind the idea.</em></h3></div><span className="form-step-icon"><Circle size={20} /></span></div>
        <div className="form-row two-up">
          <label>Full name<input required name="name" placeholder="Your name" /></label>
          <label>Work email<input required type="email" name="email" placeholder="you@brand.com" /></label>
        </div>
        <div className="form-row two-up">
          <label>Company / brand<input required name="company" placeholder="Brand or company name" /></label>
          <label>Country / market<input name="market" placeholder="Where are you based?" /></label>
        </div>
        <div className="form-helper"><Info size={14} /><span>We work with independent labels, growing teams and established brands.</span></div>
        <button className="form-next" type="button" onClick={() => setStep(2)}>Continue to project details <ArrowRight size={15} /></button>
      </> : <>
        <div className="form-intro"><div><p className="form-kicker">02 / THE PROJECT</p><h3>Give us the<br /><em>shape of it.</em></h3></div><span className="form-step-icon"><CheckCircle2 size={20} /></span></div>
        <div className="form-row two-up">
          <label>Project type<select required name="project"><option value="">Select one</option><option>Full garment production</option><option>Development & sampling</option><option>Knitting production</option><option>Finishing & quality</option></select><ChevronDown size={15} /></label>
          <label>Estimated quantity<select name="quantity"><option value="">Select range</option><option>Under 100 units</option><option>100–500 units</option><option>500–2,000 units</option><option>2,000+ units</option></select><ChevronDown size={15} /></label>
        </div>
        <div className="form-row two-up">
          <label>Target delivery<select name="timeline"><option value="">Select timing</option><option>As soon as possible</option><option>Within 8 weeks</option><option>Within 3 months</option><option>Exploring / no date yet</option></select><ChevronDown size={15} /></label>
          <label>Preferred material<input name="material" placeholder="e.g. organic cotton, wool blend" /></label>
        </div>
        <label>Tell us about the project<textarea required name="message" rows={4} placeholder="What are you making, and where are you in the process?" /></label>
        <div className="form-bottom"><button className="form-back" type="button" onClick={() => setStep(1)}><ArrowRight size={14} /> Back</button><p>By enquiring, you’re opening a conversation — not committing to production.</p><button className="submit-button" type="submit">Send enquiry <Send size={14} /></button></div>
      </>}
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontTheme, setFontTheme] = useState<"fraunces" | "poppins" | "anthropic">("fraunces");
  return (
    <main className={`soft-site font-${fontTheme}`}>
      <header className={`site-nav ${menuOpen ? "nav-open" : ""}`}>
        <a className="site-brand" href="#top"><Mark /><span>sms<span>knits</span></span></a>
        <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Menu size={19} /></button>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#studio">Studio</a><a href="#capabilities">Capabilities</a><a href="#process">Process</a><a href="#enquiry">Enquire</a></nav>
        <FontSelector fontTheme={fontTheme} setFontTheme={setFontTheme} />
        <a className="nav-cta" href="#enquiry">Start a project <ArrowUpRight size={14} /></a>
      </header>
      {menuOpen && <nav className="mobile-nav"><a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a><a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#enquiry" onClick={() => setMenuOpen(false)}>Enquire</a><div className="mobile-font-selector"><FontSelector fontTheme={fontTheme} setFontTheme={setFontTheme} /></div></nav>}

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={13} /> Knitwear manufacturing / India</p>
          <h1>Made to<br /><em>hold its shape.</em></h1>
          <p className="hero-lede">We help thoughtful brands turn yarn, structure and intent into garments built for everyday life.</p>
          <div className="hero-actions"><a className="primary-button" href="#capabilities">Explore capabilities <ArrowDown size={14} /></a><a className="quiet-link" href="#studio">Why SMS Knits <ArrowRight size={14} /></a></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image" style={{ backgroundImage: `url(${softImage})` }} />
          <div className="hero-image-tint" />
          <MotionFrame label="TEXTURE / MOTION STUDY 01" />
          <div className="hero-vertical-label">YARN / STRUCTURE / INTENT</div>
        </div>
        <div className="hero-bottom"><span>Scroll to explore</span><span className="scroll-line" /><span>01—06</span></div>
      </section>

      <section className="proof-strip"><div><strong>16</strong><span>years of craft</span></div><div><strong>24</strong><span>active machines</span></div><div><strong>03</strong><span>steps to sample</span></div><div className="proof-note"><span className="proof-dot" /> Built for brands who notice the difference.</div></section>

      <section className="intro-section section-wrap" id="studio">
        <div className="intro-statement"><SectionLabel index="01">The studio</SectionLabel><h2>Good garments begin<br />with a <em>good conversation.</em></h2></div>
        <div className="intro-detail"><p>SMS Knits is a garment manufacturing partner for brands who care about the things you can feel: the hand of the fabric, the balance of a seam, the way a piece holds its shape after the tenth wear.</p><a className="text-button" href="#process">Our way of working <ArrowRight size={14} /></a></div>
      </section>

      <section className="capabilities-section section-wrap" id="capabilities">
        <div className="section-heading-row"><div><SectionLabel index="02">Capabilities</SectionLabel><h2>From first swatch<br />to <em>final stitch.</em></h2></div><p>One considered flow, with the right people involved at every stage.</p></div>
        <div className="capabilities-grid">
          <article className="capability-card capability-large"><div className="capability-number">01</div><MotionFrame variant="machine" label="PROCESS / MOTION STUDY 02" /><div className="capability-copy"><h3>Development<br /><em>& sampling</em></h3><p>Translate an idea into a sample that gives your team something real to react to.</p><a href="#enquiry">Start with a brief <ArrowUpRight size={14} /></a></div></article>
          <article className="capability-card"><div className="capability-number">02</div><div className="capability-photo" style={{ backgroundImage: `url(${atelierImage})` }}><div className="photo-label">YARN / 04—08—25</div></div><div className="capability-copy"><h3>Knitting<br /><em>& production</em></h3><p>Consistent output, from yarn selection through the production run.</p><a href="#enquiry">Talk production <ArrowUpRight size={14} /></a></div></article>
          <article className="capability-card capability-dark"><div className="capability-number">03</div><div className="quality-art"><span className="quality-ring ring-one" /><span className="quality-ring ring-two" /><span className="quality-cross" /><span className="quality-label">QC / 100%</span></div><div className="capability-copy"><h3>Quality<br /><em>as standard</em></h3><p>Clear checkpoints and a final inspection that protects the work.</p><a href="#enquiry">Ask about quality <ArrowUpRight size={14} /></a></div></article>
        </div>
      </section>

      <section className="process-section" id="process"><div className="section-wrap process-inner"><div className="process-intro"><SectionLabel index="03">The process</SectionLabel><h2>Simple in theory.<br /><em>Considered in practice.</em></h2><p>We keep the handoffs clear so the work can stay focused on what matters.</p></div><div className="process-list"><div className="process-item"><span>01</span><div><h3>Tell us the idea</h3><p>Share your references, material direction, target and constraints.</p></div><ArrowRight size={16} /></div><div className="process-item"><span>02</span><div><h3>Make it tangible</h3><p>We work through yarn, gauge, shape and first-sample decisions.</p></div><ArrowRight size={16} /></div><div className="process-item"><span>03</span><div><h3>Build the run</h3><p>Once the details are right, production moves with visibility.</p></div><ArrowRight size={16} /></div></div></div></section>

      <section className="motion-section section-wrap"><div className="motion-section-copy"><SectionLabel index="04">Material in motion</SectionLabel><h2>Let the details<br /><em>move you.</em></h2><p>The future site can use short, silent loops to show the texture and rhythm behind the finished garment.</p><a href="#enquiry" className="quiet-link">Plan a content shoot <ArrowRight size={14} /></a></div><div className="motion-gallery"><div className="gallery-main" style={{ backgroundImage: `url(${softImage})` }}><div className="gallery-overlay" /><div className="gallery-caption">A close-up is worth a thousand adjectives.</div></div><MotionFrame variant="atelier" label="FORM / MOTION STUDY 03" /></div></section>

      <section className="enquiry-section" id="enquiry"><div className="section-wrap enquiry-inner"><div className="enquiry-intro"><SectionLabel index="05">Start a project</SectionLabel><h2>Bring us the<br /><em>first thread.</em></h2><p>Tell us enough to start a useful conversation. We’ll take it from there.</p><div className="enquiry-aside"><span className="aside-line" /><div><strong>Prefer WhatsApp?</strong><p>Send a quick note and our team can point you in the right direction.</p><a href="https://wa.me/?text=Hello%20SMS%20Knits%2C%20I%27d%20like%20to%20discuss%20a%20garment%20project." target="_blank" rel="noreferrer">Open WhatsApp <ArrowUpRight size={13} /></a></div></div></div><div className="form-card"><EnquiryForm /></div></div></section>

      <footer className="site-footer"><div className="footer-main"><a className="site-brand footer-brand" href="#top"><Mark /><span>sms<span>knits</span></span></a><p>Garment manufacturing<br />for thoughtful brands.</p><a href="#enquiry" className="footer-cta">Start a conversation <ArrowUpRight size={14} /></a></div><div className="footer-bottom"><span>© 2026 SMS Knits. All rights reserved.</span><span className="footer-socials"><a href="#top" aria-label="Instagram"><Instagram size={14} /></a><a href="#top" aria-label="LinkedIn"><Linkedin size={14} /></a><a href="#top" aria-label="Back to top"><ArrowUpRight size={14} /></a></span></div></footer>

      <a className="whatsapp-bubble" href="https://wa.me/?text=Hello%20SMS%20Knits%2C%20I%27d%20like%20to%20discuss%20a%20garment%20project." target="_blank" rel="noreferrer" aria-label="Chat with SMS Knits on WhatsApp"><MessageCircle size={21} /><span>Chat with us</span></a>
    </main>
  );
}
