import { useState } from "react";
import logo from "../assets/logo.svg";

const navItems = ["Why Us", "Customisation", "What's Included", "Contact Us"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="w-full bg-white px-4 py-4 sm:px-4 lg:px-8 xl:px-12"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Mobile top bar */}
      <div className="flex w-full items-center justify-between gap-3 lg:hidden">
        <a href="/" className="flex shrink-0 items-start gap-3">
          <img src={logo} alt="Safe Haven Housing" className="h-12 w-auto sm:h-14" />
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-[#003AA0] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#002f81]"
          >
            Enquire Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#003AA0]/20 text-[#003AA0] transition-colors hover:bg-[#003AA0]/5"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="mt-4 flex flex-col gap-1 border-t border-[#003AA0]/10 pt-4 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#191816] transition-colors hover:bg-[#003AA0]/5 hover:text-[#003AA0]"
            >
              {item}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-[#003AA0]/10 pt-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-[#003AA0] px-5 py-3 text-sm font-semibold text-[#003AA0] transition-all hover:bg-[#003AA0] hover:text-white"
            >
              Let&apos;s Customise
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-[#003AA0] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#002f81]"
            >
              Enquire Now
            </a>
          </div>
        </nav>
      )}

      {/* Desktop nav — hidden on mobile */}
      <nav className="hidden w-full lg:flex lg:items-center lg:justify-between">
        <div className="flex shrink-0 items-center">
          <a href="/" className="flex items-start justify-start gap-3">
            <img src={logo} alt="Safe Haven Housing" className="h-14 w-auto" />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center gap-x-10 px-10">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[15px] font-medium text-[#191816] transition-colors hover:text-[#003AA0]"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl border border-[#003AA0] px-5 py-3 text-sm font-semibold text-[#003AA0] transition-all hover:bg-[#003AA0] hover:text-white"
          >
            Let&apos;s Customise
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-[#003AA0] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#002f81]"
          >
            Enquire Now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
