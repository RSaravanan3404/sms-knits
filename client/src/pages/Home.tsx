import { useState } from "react";
import { ArrowUpRight, Check, ChevronRight, Circle, Heart, Menu, MoveRight, Play, Plus, Sparkles } from "lucide-react";

type ThemeId = "soft" | "factory" | "atelier";

type Theme = {
  id: ThemeId;
  number: string;
  name: string;
  shortName: string;
  description: string;
  vibe: string;
  colors: string[];
  image: string;
  code: string;
  heroTitle: string;
  heroCopy: string;
  kicker: string;
  button: string;
};

const themes: Theme[] = [
  {
    id: "soft",
    number: "01",
    name: "Soft Structure",
    shortName: "Warm editorial",
    description: "Quietly premium, tactile and considered.",
    vibe: "Human / precise / calm",
    colors: ["#1D1D1B", "#F5F1EA", "#C9795E", "#697568"],
    image: "/manus-storage/smsknits-soft-structure_0db83cdc.jpg",
    code: "SMK / 01",
    heroTitle: "Made to hold its shape.",
    heroCopy: "Knitwear manufacturing for brands that care about the details.",
    kicker: "The material story",
    button: "View capabilities",
  },
  {
    id: "factory",
    number: "02",
    name: "Factory Signal",
    shortName: "Technical confidence",
    description: "Operational clarity with a sharp, modern edge.",
    vibe: "System / signal / proof",
    colors: ["#111312", "#EDE9E0", "#C8E66B", "#8FB8D9"],
    image: "/manus-storage/smsknits-factory-signal_8a790454.jpg",
    code: "SMK / 02",
    heroTitle: "Engineered for consistency.",
    heroCopy: "From yarn selection to final inspection, we make the process visible.",
    kicker: "The production signal",
    button: "Explore the system",
  },
  {
    id: "atelier",
    number: "03",
    name: "Atelier in Motion",
    shortName: "Fashion-led",
    description: "Cinematic, expressive and built for a strong first impression.",
    vibe: "Studio / movement / form",
    colors: ["#0D0D0C", "#F7F6F2", "#E45038", "#2E4EA1"],
    image: "/manus-storage/smsknits-atelier-motion_20f8fc25.jpg",
    code: "SMK / 03",
    heroTitle: "The knit is the beginning.",
    heroCopy: "We turn yarn, structure and intent into garments built for everyday life.",
    kicker: "The studio point of view",
    button: "Enter the atelier",
  },
];

function Swatches({ colors }: { colors: string[] }) {
  return (
    <div className="swatches" aria-label="Theme color swatches">
      {colors.map((color) => (
        <span key={color} className="swatch" style={{ backgroundColor: color }} title={color} />
      ))}
    </div>
  );
}

function MiniLogo({ theme }: { theme: Theme }) {
  return (
    <span className="mini-logo" aria-label="SMS Knits">
      <span className="mini-logo-mark">S</span>
      <span className="mini-logo-text">sms<span>knits</span></span>
    </span>
  );
}

function CapabilityArt({ theme }: { theme: Theme }) {
  if (theme.id === "factory") {
    return (
      <div className="capability-art signal-art" aria-hidden="true">
        <span className="scan-line" />
        <span className="signal-dot signal-dot-one" />
        <span className="signal-dot signal-dot-two" />
        <span className="signal-dot signal-dot-three" />
        <div className="signal-grid" />
        <span className="signal-readout">KNIT / 04—08—25</span>
      </div>
    );
  }

  if (theme.id === "atelier") {
    return (
      <div className="capability-art atelier-art" aria-hidden="true">
        <span className="atelier-ribbon atelier-ribbon-one" />
        <span className="atelier-ribbon atelier-ribbon-two" />
        <span className="atelier-ribbon atelier-ribbon-three" />
        <span className="atelier-stamp">FORM<br />/ 001</span>
      </div>
    );
  }

  return (
    <div className="capability-art soft-art" aria-hidden="true">
      <span className="soft-thread soft-thread-one" />
      <span className="soft-thread soft-thread-two" />
      <span className="soft-thread soft-thread-three" />
      <span className="soft-tag">100%<br />cotton</span>
    </div>
  );
}

function ThemePanel({ theme, selected, onSelect }: { theme: Theme; selected: boolean; onSelect: () => void }) {
  return (
    <article className={`theme-card theme-${theme.id} ${selected ? "is-selected" : ""}`}>
      <div className="theme-card-header">
        <div className="theme-card-title">
          <span className="theme-number">{theme.number}</span>
          <div>
            <p className="theme-card-eyebrow">{theme.shortName}</p>
            <h2>{theme.name}</h2>
          </div>
        </div>
        <button className="select-theme-button" type="button" onClick={onSelect} aria-pressed={selected} aria-label={`Choose ${theme.name}`}>
          {selected ? <Check size={15} strokeWidth={2.5} /> : <Heart size={15} />}
        </button>
      </div>

      <p className="theme-card-description">{theme.description}</p>
      <div className="theme-card-meta">
        <span>{theme.vibe}</span>
        <Swatches colors={theme.colors} />
      </div>

      <div className="mini-site" aria-label={`${theme.name} website preview`}>
        <div className="mini-site-nav">
          <MiniLogo theme={theme} />
          <div className="mini-site-links">
            <span>Studio</span><span>Capabilities</span><span>Journal</span>
          </div>
          <button className="mini-menu" type="button" aria-label="Open menu"><Menu size={13} /></button>
        </div>

        <div className="mini-hero" style={{ backgroundImage: `url(${theme.image})` }}>
          <div className="mini-hero-shade" />
          <div className="mini-hero-topline">
            <span>{theme.code}</span>
            <span className="mini-status"><Circle size={6} fill="currentColor" /> LIVE PREVIEW</span>
          </div>
          <div className="mini-hero-copy">
            <p className="mini-kicker">{theme.kicker}</p>
            <h3>{theme.heroTitle}</h3>
            <p>{theme.heroCopy}</p>
            <button className="mini-cta" type="button">{theme.button} <ArrowUpRight size={13} /></button>
          </div>
          <div className="mini-play"><Play size={11} fill="currentColor" /></div>
          <span className="mini-scroll">SCROLL TO EXPLORE <MoveRight size={12} /></span>
        </div>

        <div className="mini-site-body">
          <div className="mini-section-heading">
            <p className="mini-label">01 / CAPABILITIES</p>
            <h4>Built around the<br /><em>right details.</em></h4>
          </div>
          <div className="mini-capability-grid">
            <CapabilityArt theme={theme} />
            <div className="mini-capability-copy">
              <span className="mini-label">YARN → GARMENT</span>
              <p>Development, sampling and production — in one considered flow.</p>
              <span className="mini-link">See how we work <ChevronRight size={12} /></span>
            </div>
          </div>
          <div className="mini-metrics">
            <div><strong>16</strong><span>years of craft</span></div>
            <div><strong>24</strong><span>active machines</span></div>
            <div><strong>03</strong><span>steps to sample</span></div>
          </div>
          <div className="mini-enquiry">
            <div><p className="mini-label">START A CONVERSATION</p><strong>Have a project in mind?</strong></div>
            <button type="button" aria-label="Start an enquiry"><Plus size={15} /></button>
          </div>
        </div>
      </div>

      <button className="choose-direction" type="button" onClick={onSelect}>
        <span>{selected ? "Current favourite" : "Choose this direction"}</span>
        <ArrowUpRight size={16} />
      </button>
    </article>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<ThemeId>("soft");
  const currentTheme = themes.find((theme) => theme.id === selected) ?? themes[0];

  return (
    <main className="theme-lab">
      <header className="lab-header">
        <div className="lab-brand"><span className="lab-brand-mark">S</span> SMS KNITS <span className="lab-brand-divider" /> VISUAL LAB</div>
        <div className="lab-header-right"><span>THEME TEST / 01</span><span className="live-dot" /> <span>2026</span></div>
      </header>

      <section className="lab-intro">
        <div className="intro-copy">
          <p className="eyebrow"><Sparkles size={13} /> Brand direction study</p>
          <h1>Three ways to make<br /><em>the knit</em> the signal.</h1>
          <p className="intro-description">A side-by-side visual test for SMS Knits. Same story, three distinct personalities — built to help us choose the right foundation before we curate the full content library.</p>
        </div>
        <div className="intro-note">
          <span className="note-index">01</span>
          <p>Compare the palette, typography, edge language and motion character of each direction below.</p>
          <span className="note-arrow"><MoveRight size={18} /></span>
        </div>
      </section>

      <section className="comparison-intro">
        <div><p className="section-overline">SELECT A DIRECTION</p><h2>The same homepage,<br /><em>three different signals.</em></h2></div>
        <div className="comparison-view-note"><span className="compare-line" /> <span>Desktop comparison view<br /><small>Scroll horizontally on smaller screens</small></span></div>
      </section>

      <section className="theme-grid" aria-label="Theme comparisons">
        {themes.map((theme) => <ThemePanel key={theme.id} theme={theme} selected={selected === theme.id} onSelect={() => setSelected(theme.id)} />)}
      </section>

      <section className="decision-bar">
        <div className="decision-badge"><span className="decision-pulse" /> CURRENT FAVOURITE</div>
        <div className="decision-copy"><span>Based on your selection</span><strong>{currentTheme.name}</strong></div>
        <p>{currentTheme.description} Use the controls above to compare another direction.</p>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top <ArrowUpRight size={15} /></button>
      </section>

      <footer className="lab-footer">
        <span>SMS KNITS / BRAND SYSTEM EXPLORATION</span>
        <span>Made for a sharper first impression.</span>
      </footer>
    </main>
  );
}
