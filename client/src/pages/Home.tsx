import { FormEvent, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, Circle, Info, Instagram, Linkedin, Menu, MessageCircle, Moon, Play, Plus, Send, Sparkles, Sun } from "lucide-react";

const softImage = "/manus-storage/smsknits-soft-structure_0db83cdc.jpg";
const atelierImage = "/manus-storage/smsknits-atelier-motion_20f8fc25.jpg";

const whyUsItems = [
  {
    question: "Can you work with an idea that is still taking shape?",
    answer: "Yes. We are often brought in before the brief is fully formed. Our team helps turn references, rough sketches and a feeling into a clear material and production direction.",
  },
  {
    question: "How do you keep quality consistent at scale?",
    answer: "We build the quality checkpoints into the process early: yarn, gauge, hand feel, measurements and finishing are reviewed before the production run gathers momentum.",
  },
  {
    question: "Will we know what is happening between milestones?",
    answer: "You will. Clear handoffs, practical updates and a named point of contact keep the work visible from first swatch through final inspection.",
  },
  {
    question: "What makes the relationship last beyond one collection?",
    answer: "We remember the details that make your product yours. Over time, that shared language makes the next sample sharper, the decisions faster and the work more consistent.",
  },
];

const faqItems = [
  {
    question: "What is your minimum order quantity?",
    answer: "It depends on the yarn, gauge and construction, but we are happy to discuss smaller development runs and growing quantities. Share your target and we will suggest the most practical starting point.",
  },
  {
    question: "Do you support sampling before production?",
    answer: "Yes. Development and sampling are at the heart of our process. We can work from references, tech packs or an early conversation and make the decisions tangible before production begins.",
  },
  {
    question: "Which materials and knit structures can you work with?",
    answer: "We work across cottons, wools, blends and selected specialty yarns, with structure and finishing tailored to the garment. If you have a specific material direction, bring it to the first conversation.",
  },
  {
    question: "How early should we get in touch?",
    answer: "As early as you can. The more time we have to test yarn, gauge and construction, the more considered the final garment can be. A rough brief is enough to begin.",
  },
];

function Mark() {
  return <span className="brand-mark" aria-hidden="true">S</span>;
}

function ThemeToggle({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) {
  return (
    <button type="button" className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={darkMode}>
      <span className="theme-toggle-icon">{darkMode ? <Sun size={15} /> : <Moon size={15} />}</span>
    </button>
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

function AccordionRow({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`accordion-row ${isOpen ? "is-open" : ""}`}>
      <button type="button" className="accordion-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className="accordion-icon">{isOpen ? <MinusIcon /> : <Plus size={16} />}</span>
      </button>
      <div className="accordion-answer" hidden={!isOpen}><p>{answer}</p></div>
    </div>
  );
}

function MinusIcon() {
  return <span className="minus-icon" aria-hidden="true" />;
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
      <div className="form-progress"><div className="progress-copy"><span>PROJECT BRIEF</span><strong>Step {step} of 2</strong></div><div className="progress-track"><span style={{ width: `${step === 1 ? "50%" : "100%"}` }} /></div></div>
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
  const [openWhy, setOpenWhy] = useState<string | null>(whyUsItems[0].question);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <main className={`soft-site anthropic-theme ${darkMode ? "dark-mode" : ""}`}>
      <header className={`site-nav ${menuOpen ? "nav-open" : ""}`}>
        <a className="site-brand" href="#top"><Mark /><span>sms<span>knits</span></span></a>
        <button className="mobile-menu" type="button" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}><Menu size={19} /></button>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#about">About</a><a href="#capabilities">Capabilities</a><a href="#process">Process</a><a href="#enquiry">Enquire</a></nav>
        <a className="nav-cta" href="#enquiry">Start a project <ArrowUpRight size={14} /></a>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      {menuOpen && <nav className="mobile-nav"><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#enquiry" onClick={() => setMenuOpen(false)}>Enquire</a><div className="mobile-theme-toggle"><ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} /></div></nav>}

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={13} /> Knitwear manufacturing / India</p>
          <h1>Made to<br /><em>hold its shape.</em></h1>
          <p className="hero-lede">We help thoughtful brands turn yarn, structure and intent into garments built for everyday life.</p>
          <div className="hero-actions"><a className="primary-button" href="#capabilities">Explore capabilities <ArrowDown size={14} /></a><a className="quiet-link" href="#about">Why SMS Knits <ArrowRight size={14} /></a></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image" style={{ backgroundImage: `url(${softImage})` }} />
          <div className="hero-image-tint" />
          <MotionFrame label="TEXTURE / MOTION STUDY 01" />
          <div className="hero-vertical-label">YARN / STRUCTURE / INTENT</div>
        </div>
        <div className="hero-bottom"><span>Scroll to explore</span><span className="scroll-line" /><span>01—08</span></div>
      </section>

      <section className="proof-strip"><div><strong>16</strong><span>years of craft</span></div><div><strong>24</strong><span>active machines</span></div><div><strong>03</strong><span>steps to sample</span></div><div className="proof-note"><span className="proof-dot" /> Built for brands who notice the difference.</div></section>

      <section className="intro-section section-wrap" id="studio">
        <div className="intro-statement"><SectionLabel index="01">The studio</SectionLabel><h2>Good garments begin<br />with a <em>good conversation.</em></h2></div>
        <div className="intro-detail"><p>SMS Knits is a garment manufacturing partner for brands who care about the things you can feel: the hand of the fabric, the balance of a seam, the way a piece holds its shape after the tenth wear.</p><a className="text-button" href="#about">Meet the studio <ArrowRight size={14} /></a></div>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap">
          <div className="section-heading-row about-heading"><div><SectionLabel index="02">About us</SectionLabel><h2>A little more<br />behind the <em>stitch.</em></h2></div><p>Our work is technical, tactile and built around the belief that the best partnerships get better with every collection.</p></div>
          <nav className="about-nav" aria-label="About Us sections"><span>Explore the story</span><a href="#history">01 / History</a><a href="#why-us">02 / Why us</a><a href="#faq">03 / FAQ</a></nav>

          <div className="history-grid" id="history">
            <div className="history-lead"><span className="history-year">EST. 2008</span><h3>Small beginnings.<br /><em>Long-term thinking.</em></h3><div className="history-rule" /></div>
            <div className="history-copy"><p className="history-opening">SMS Knits began with a simple idea: make the kind of garment people want to keep wearing.</p><p>What started as a focused knitwear unit has grown into a considered manufacturing partner for independent labels and established teams alike. The scale has changed. The standard has not.</p><div className="history-timeline"><div><span>2008</span><p>One line, a small team and a promise to learn every detail.</p></div><div><span>2014</span><p>Expanded development and sampling to work closer with brands.</p></div><div><span>NOW</span><p>A connected studio, production floor and quality practice.</p></div></div></div>
          </div>

          <div className="why-grid" id="why-us">
            <div className="why-intro"><SectionLabel index="03">Why us</SectionLabel><h2>Good answers<br />to the <em>right questions.</em></h2><p>There is more to a production partner than a machine count. Here is how we think about the relationship.</p></div>
            <div className="accordion-list">{whyUsItems.map((item) => <AccordionRow key={item.question} {...item} isOpen={openWhy === item.question} onToggle={() => setOpenWhy(openWhy === item.question ? null : item.question)} />)}</div>
          </div>
        </div>
          <div className="brands-marquee" aria-label="Brands we have worked with"><div className="brands-kicker">Brands we’ve worked with</div><div className="marquee-window"><div className="brands-row"><div className="brands-track brands-track-forward">{["NORTH / STANDARD", "FORM / FIELD", "COMMON THREAD", "STUDIO 07", "MORNING OBJECTS", "NORTH / STANDARD", "FORM / FIELD", "COMMON THREAD", "STUDIO 07", "MORNING OBJECTS"].map((brand, index) => <span key={`forward-${brand}-${index}`}><i />{brand}</span>)}</div><div className="brands-track brands-track-reverse">{["MORNING OBJECTS", "STUDIO 07", "COMMON THREAD", "FORM / FIELD", "NORTH / STANDARD", "MORNING OBJECTS", "STUDIO 07", "COMMON THREAD", "FORM / FIELD", "NORTH / STANDARD"].map((brand, index) => <span key={`reverse-${brand}-${index}`}><i />{brand}</span>)}</div></div></div></div>
      </section>

      <section className="faq-section" id="faq"><div className="section-wrap faq-inner"><div className="faq-intro"><SectionLabel index="04">FAQ</SectionLabel><h2>Before we<br /><em>get started.</em></h2><p>Still finding your way into the first conversation? These are a few of the practical things brands ask us most.</p><a href="#enquiry" className="quiet-link">Ask us something else <ArrowRight size={14} /></a></div><div className="accordion-list faq-list">{faqItems.map((item) => <AccordionRow key={item.question} {...item} isOpen={openFaq === item.question} onToggle={() => setOpenFaq(openFaq === item.question ? null : item.question)} />)}</div></div></section>

      <section className="capabilities-section section-wrap" id="capabilities">
        <div className="section-heading-row"><div><SectionLabel index="05">Capabilities</SectionLabel><h2>From first swatch<br />to <em>final stitch.</em></h2></div><p>One considered flow, with the right people involved at every stage.</p></div>
        <div className="capabilities-grid">
          <article className="capability-card capability-large"><div className="capability-number">01</div><MotionFrame variant="machine" label="PROCESS / MOTION STUDY 02" /><div className="capability-copy"><h3>Development<br /><em>& sampling</em></h3><p>Translate an idea into a sample that gives your team something real to react to.</p><a href="#enquiry">Start with a brief <ArrowUpRight size={14} /></a></div></article>
          <article className="capability-card"><div className="capability-number">02</div><div className="capability-photo" style={{ backgroundImage: `url(${atelierImage})` }}><div className="photo-label">YARN / 04—08—25</div></div><div className="capability-copy"><h3>Knitting<br /><em>& production</em></h3><p>Consistent output, from yarn selection through the production run.</p><a href="#enquiry">Talk production <ArrowUpRight size={14} /></a></div></article>
          <article className="capability-card capability-dark"><div className="capability-number">03</div><div className="quality-art"><span className="quality-ring ring-one" /><span className="quality-ring ring-two" /><span className="quality-cross" /><span className="quality-label">QC / 100%</span></div><div className="capability-copy"><h3>Quality<br /><em>as standard</em></h3><p>Clear checkpoints and a final inspection that protects the work.</p><a href="#enquiry">Ask about quality <ArrowUpRight size={14} /></a></div></article>
        </div>
      </section>

      <section className="process-section" id="process"><div className="section-wrap process-inner"><div className="process-intro"><SectionLabel index="06">The process</SectionLabel><h2>Simple in theory.<br /><em>Considered in practice.</em></h2><p>We keep the handoffs clear so the work can stay focused on what matters.</p></div><div className="process-list"><div className="process-item"><span>01</span><div><h3>Tell us the idea</h3><p>Share your references, material direction, target and constraints.</p></div><ArrowRight size={16} /></div><div className="process-item"><span>02</span><div><h3>Make it tangible</h3><p>We work through yarn, gauge, shape and first-sample decisions.</p></div><ArrowRight size={16} /></div><div className="process-item"><span>03</span><div><h3>Build the run</h3><p>Once the details are right, production moves with visibility.</p></div><ArrowRight size={16} /></div></div></div></section>

      <section className="motion-section section-wrap"><div className="motion-section-copy"><SectionLabel index="07">Material in motion</SectionLabel><h2>Let the details<br /><em>move you.</em></h2><p>The future site can use short, silent loops to show the texture and rhythm behind the finished garment.</p><a href="#enquiry" className="quiet-link">Plan a content shoot <ArrowRight size={14} /></a></div><div className="motion-gallery"><div className="gallery-main" style={{ backgroundImage: `url(${softImage})` }}><div className="gallery-overlay" /><div className="gallery-caption">A close-up is worth a thousand adjectives.</div></div><MotionFrame variant="atelier" label="FORM / MOTION STUDY 03" /></div></section>

      <section className="enquiry-section" id="enquiry"><div className="section-wrap enquiry-inner"><div className="enquiry-intro"><SectionLabel index="08">Start a project</SectionLabel><h2>Bring us the<br /><em>first thread.</em></h2><p>Tell us enough to start a useful conversation. We’ll take it from there.</p><div className="enquiry-aside"><span className="aside-line" /><div><strong>Prefer WhatsApp?</strong><p>Send a quick note and our team can point you in the right direction.</p><a href="https://wa.me/?text=Hello%20SMS%20Knits%2C%20I%27d%20like%20to%20discuss%20a%20garment%20project." target="_blank" rel="noreferrer">Open WhatsApp <ArrowUpRight size={13} /></a></div></div></div><div className="form-card"><EnquiryForm /></div></div></section>

      <footer className="site-footer"><div className="footer-main"><a className="site-brand footer-brand" href="#top"><Mark /><span>sms<span>knits</span></span></a><p>Garment manufacturing<br />for thoughtful brands.</p><a href="#enquiry" className="footer-cta">Start a conversation <ArrowUpRight size={14} /></a></div><div className="footer-bottom"><span>© 2026 SMS Knits. All rights reserved.</span><span className="footer-socials"><a href="#top" aria-label="Instagram"><Instagram size={14} /></a><a href="#top" aria-label="LinkedIn"><Linkedin size={14} /></a><a href="#top" aria-label="Back to top"><ArrowUpRight size={14} /></a></span></div></footer>

      <a className="whatsapp-bubble" href="https://wa.me/?text=Hello%20SMS%20Knits%2C%20I%27d%20like%20to%20discuss%20a%20garment%20project." target="_blank" rel="noreferrer" aria-label="Chat with SMS Knits on WhatsApp"><MessageCircle size={21} /><span>Chat with us</span></a>
    </main>
  );
}
