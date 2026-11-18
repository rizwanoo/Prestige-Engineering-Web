import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { BorderlessCTA } from '../components/BorderlessCTA';
import { BRAND_INFO, SUPPORTING_PHOTOS } from '../data/brandData';
import { useGsapReveal } from '../hooks/useGsapReveal';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  projectLocation: string;
  approxSqFt: string;
  projectType: string;
  preferredContact: string;
  description: string;
}

const PROJECT_TYPES = [
  'General Epoxy Flooring Enquiry',
  'Residential / Garage Epoxy Flooring',
  'High-Gloss & Decorative Epoxy Finish',
  'Commercial / Showroom Floor Enquiry',
];

const CONTACT_METHODS = ['Instagram Direct Message', 'Email', 'Phone'];

export const ContactPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [searchParams] = useSearchParams();
  useGsapReveal(pageRef);

  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: 'Phoenix, AZ',
    approxSqFt: '',
    projectType: PROJECT_TYPES[0],
    preferredContact: CONTACT_METHODS[0],
    description: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [preparedBrief, setPreparedBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const topic = searchParams.get('topic');
    if (topic) {
      setForm((prev) => ({
        ...prev,
        description: prev.description || `Interested in: ${topic}`,
      }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (form.phone.trim() && !/^[0-9+\-()\s]{7,20}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }
    if (!form.projectLocation.trim()) {
      nextErrors.projectLocation = 'Please enter your Phoenix-area project location.';
    }
    if (!form.description.trim()) {
      nextErrors.description = 'Please describe your flooring space or goals.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handlePrepareBrief = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formatted = [
      `Hi Prestige Engineering (@pres.tigeengineering),`,
      ``,
      `Epoxy Flooring Enquiry:`,
      `• Name: ${form.fullName.trim()}`,
      `• Location: ${form.projectLocation.trim()}`,
      `• Project Type: ${form.projectType}`,
      form.approxSqFt.trim() ? `• Approx. Area: ${form.approxSqFt.trim()} sq ft` : null,
      `• Preferred Reply: ${form.preferredContact}`,
      `• Email: ${form.email.trim()}`,
      form.phone.trim() ? `• Phone: ${form.phone.trim()}` : null,
      ``,
      `Project Details:`,
      form.description.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    setPreparedBrief(formatted);
    setCopied(false);
  };

  const handleCopyBrief = async () => {
    if (!preparedBrief) return;
    try {
      await navigator.clipboard.writeText(preparedBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div ref={pageRef}>
      {/* 1. Full-Bleed Architectural Header */}
      <section className="relative min-h-[500px] h-[60vh] max-h-[640px] w-full overflow-hidden flex items-end bg-[#1D252D]">
        <div className="absolute inset-0 gsap-hero-parallax">
          <img
            src={SUPPORTING_PHOTOS.polishedConcrete.src}
            alt={SUPPORTING_PHOTOS.polishedConcrete.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#161D24]/90 via-[#161D24]/45 to-[#161D24]/55"
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pb-14 lg:pb-18 pt-36">
          <p className="gsap-hero-item text-xs font-semibold uppercase tracking-[0.16em] text-[#E0E4E8]">
            {BRAND_INFO.location} · Direct Enquiries
          </p>
          <h1
            className="gsap-hero-item mt-4 text-white font-extrabold tracking-[-0.025em] leading-[1.06] max-w-4xl"
            style={{ fontSize: 'clamp(2.25rem, 4.6vw, 4rem)' }}
          >
            Contact Prestige Engineering
          </h1>
          <p className="gsap-hero-item mt-5 text-base sm:text-lg text-[#F0F2F4] leading-relaxed max-w-2xl">
            Looking for epoxy flooring in Phoenix, Arizona? Message{' '}
            {BRAND_INFO.instagramHandle} directly on Instagram for the fastest response, or prepare
            a detailed project brief below to paste straight into your DM.
          </p>
        </div>
      </section>

      {/* 2. PRIMARY CONTACT CHANNEL: INSTAGRAM DIRECT MESSAGE */}
      <section className="bg-[#2457A6] text-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 gsap-reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E0E4E8]">
                Primary Contact Method · Verified Official Profile
              </p>
              <h2
                className="mt-4 font-bold tracking-[-0.02em] leading-[1.12] text-white"
                style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.85rem)' }}
              >
                Message {BRAND_INFO.instagramHandle} directly on Instagram.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#F0F2F4] leading-relaxed max-w-2xl">
                Prestige Engineering’s official Instagram bio directs all flooring enquiries to
                Instagram Direct Message (“looking for epoxy flooring? dm for details”). No
                third-party email or phone number has been published—connecting on Instagram puts
                you in direct contact with the business.
              </p>

              <div className="mt-8">
                <BorderlessCTA
                  label="Message Us on Instagram"
                  href={BRAND_INFO.instagramUrl}
                  external
                  tone="orange"
                />
              </div>
            </div>

            <div className="lg:col-span-4 lg:pl-10 lg:border-l border-white/25 gsap-reveal">
              <div className="flex items-center gap-4">
                <img
                  src={BRAND_INFO.officialProfileAvatar}
                  alt="Prestige Engineering Instagram Profile"
                  className="w-16 h-16 object-cover border border-white/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-lg font-bold text-white">{BRAND_INFO.name}</p>
                  <p className="text-sm text-[#E0E4E8]">{BRAND_INFO.instagramHandle}</p>
                  <p className="text-xs text-[#E0E4E8]/80 mt-1">{BRAND_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT ENQUIRY BRIEF COMPOSER + PHOENIX AREA REFERENCE */}
      <section className="bg-[#F7F7F5] text-[#29333D] py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            {/* Left: Architectural Form (Borderless Bottom-Hairline Inputs) */}
            <div className="lg:col-span-7 gsap-reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2457A6]">
                Structured Project Brief Composer
              </p>
              <h2
                className="mt-3 font-bold tracking-[-0.02em] leading-[1.12] text-[#29333D]"
                style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}
              >
                Prepare your flooring enquiry details.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#414A52] leading-relaxed">
                Complete the fields below to format a clean estimate brief. Because Prestige
                Engineering receives enquiries via Instagram DM rather than an automated email
                inbox, submitting generates a ready-to-send message you can copy directly into
                Instagram.
              </p>

              <form onSubmit={handlePrepareBrief} noValidate className="mt-10 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#414A52]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Your name"
                      className="input-architectural"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs font-medium text-[#B93815]">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#414A52]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="input-architectural"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-[#B93815]">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#414A52]"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(602) 000-0000"
                      className="input-architectural"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-[#B93815]">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="projectLocation"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#414A52]"
                    >
                      Project Location *
                    </label>
                    <input
                      id="projectLocation"
                      type="text"
                      value={form.projectLocation}
                      onChange={(e) => setForm({ ...form, projectLocation: e.target.value })}
                      placeholder="Phoenix, Scottsdale, Tempe..."
                      className="input-architectural"
                    />
                    {errors.projectLocation && (
                      <p className="mt-1.5 text-xs font-medium text-[#B93815]">
                        {errors.projectLocation}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <label
                      htmlFor="approxSqFt"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#414A52]"
                    >
                      Approx. Sq. Footage
                    </label>
                    <input
                      id="approxSqFt"
                      type="text"
                      value={form.approxSqFt}
                      onChange={(e) => setForm({ ...form, approxSqFt: e.target.value })}
                      placeholder="e.g. 550"
                      className="input-architectural tabular-nums"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#414A52]"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="input-architectural"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredContact"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#414A52]"
                    >
                      Preferred Contact
                    </label>
                    <select
                      id="preferredContact"
                      value={form.preferredContact}
                      onChange={(e) => setForm({ ...form, preferredContact: e.target.value })}
                      className="input-architectural"
                    >
                      {CONTACT_METHODS.map((method) => (
                        <option key={method} value={method}>
                          {method}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#414A52]"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Describe your concrete floor, desired epoxy look, and timeline..."
                    className="input-architectural resize-y"
                  />
                  {errors.description && (
                    <p className="mt-1.5 text-xs font-medium text-[#B93815]">{errors.description}</p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-x-10 gap-y-4">
                  <BorderlessCTA
                    type="submit"
                    label="Generate Instagram DM Brief"
                    tone="cobalt"
                  />
                  <BorderlessCTA
                    label="Open Instagram Directly"
                    href={BRAND_INFO.instagramUrl}
                    external
                    tone="dark"
                  />
                </div>
              </form>

              {/* Honest Ready-to-Send DM Brief Output (Never pretends an email was transmitted) */}
              {preparedBrief && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-10 pt-8 border-t-2 border-[#2457A6]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2457A6]">
                    Your Enquiry Brief Is Ready to Send via Instagram DM
                  </p>
                  <p className="mt-2 text-sm text-[#414A52]">
                    No automated email server is attached to this form—copy your formatted brief
                    below and paste it directly into a message to {BRAND_INFO.instagramHandle}.
                  </p>

                  <pre className="mt-4 p-5 bg-[#E9EAEC] text-[#29333D] text-sm whitespace-pre-wrap font-sans leading-relaxed overflow-x-auto">
                    {preparedBrief}
                  </pre>

                  <div className="mt-6 flex flex-wrap items-center gap-8">
                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="cta-borderless text-[#2457A6] hover:text-[#F28C28]"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Brief Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Brief Text</span>
                        </>
                      )}
                    </button>

                    <a
                      href={BRAND_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-borderless text-[#29333D] hover:text-[#2457A6]"
                    >
                      <span>Open Instagram &amp; Paste DM</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Phoenix, Arizona Area Reference (No fake street address or map pin) */}
            <div className="lg:col-span-5 lg:pl-10 lg:border-l border-[#B9C0C8] space-y-10 gsap-reveal">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8C]">
                  Area Reference · Phoenix Metro
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#29333D]">
                  {BRAND_INFO.location}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#414A52] leading-relaxed">
                  Prestige Engineering identifies Phoenix, Arizona as its service location. No
                  physical showroom or street address has been published—all consultations begin
                  directly through Instagram Direct Message.
                </p>
              </div>

              {/* Clean Architectural Area Reference Graphic (Explicitly labeled as area reference) */}
              <div className="border-t border-b border-[#B9C0C8] py-8">
                <svg
                  viewBox="0 0 420 220"
                  role="img"
                  aria-label="General area reference schematic for Phoenix, Arizona"
                  className="w-full h-auto"
                >
                  <rect width="420" height="220" fill="#E9EAEC" />
                  <path
                    d="M0 110 H420 M210 0 V220 M60 0 L320 220 M0 175 L420 55"
                    stroke="#B9C0C8"
                    strokeWidth="1"
                  />
                  <circle
                    cx="210"
                    cy="110"
                    r="62"
                    fill="#2457A6"
                    fillOpacity="0.1"
                    stroke="#2457A6"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle cx="210" cy="110" r="6" fill="#F28C28" />
                  <text
                    x="210"
                    y="32"
                    textAnchor="middle"
                    fill="#526F8C"
                    fontSize="10"
                    fontWeight="600"
                    letterSpacing="2"
                  >
                    GENERAL AREA REFERENCE ONLY
                  </text>
                  <text
                    x="210"
                    y="196"
                    textAnchor="middle"
                    fill="#29333D"
                    fontSize="13"
                    fontWeight="700"
                    letterSpacing="1.5"
                  >
                    PHOENIX, ARIZONA · USA
                  </text>
                </svg>
                <p className="mt-3 text-xs text-[#526F8C]">
                  Area reference visual for Phoenix, Arizona—not a specific street address.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#526F8C]">
                  Official Contact Summary
                </p>
                <dl className="mt-4 divide-y divide-[#E0E4E8] text-sm">
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#414A52]">Business Name</dt>
                    <dd className="font-semibold text-[#29333D]">{BRAND_INFO.name}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#414A52]">Specialization</dt>
                    <dd className="font-semibold text-[#29333D]">{BRAND_INFO.primaryCategory}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#414A52]">Instagram</dt>
                    <dd className="font-semibold text-[#2457A6]">
                      <a
                        href={BRAND_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F28C28]"
                      >
                        {BRAND_INFO.instagramHandle}
                      </a>
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#414A52]">Enquiry Method</dt>
                    <dd className="font-semibold text-[#29333D]">Direct Message</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
