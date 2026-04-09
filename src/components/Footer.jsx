import logo from "../assets/white-logo.svg";

const robustLinks = [
  "Security & Protection",
  "Kitchen",
  "Bathrooms & Toilets",
  "Bedrooms & Support",
  "Doors & Access",
  "Assistive technology",
];

const residentLinks = [
  "Lounge Rooms",
  "Home office/ Tech Room",
  "Doors & Access",
  "Garage",
  "Bedrooms & Support",
  "Bathrooms & Toilets",
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6h1.4V4.8c-.2 0-1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H9v3h2.1v7h2.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8Zm0 1.8A2.4 2.4 0 1 0 14.4 12 2.4 2.4 0 0 0 12 9.6Z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M14.2 3c.2 1.7 1.2 3.2 2.8 4 .9.5 1.9.8 3 .8v2.7a8.2 8.2 0 0 1-3.4-.8v5.8c0 3.3-2.6 5.6-5.8 5.6A5.8 5.8 0 0 1 5 15.3a5.8 5.8 0 0 1 7.3-5.6v2.8a3 3 0 1 0 1.9 2.8V3h2Z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer
      className="w-full px-5 py-8 text-white sm:px-8 lg:px-12 xl:px-16"
      style={{ backgroundColor: "#141E68", fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.7fr]">
          <div>
            <img
              src={logo}
              alt="Safe Haven Housing"
              className="h-14 w-auto sm:h-16"
            />
            <p className="mt-5 max-w-sm text-[14px] leading-5 text-white/70 italic">
              Safe Haven Housing is not an SDA provider, we provide customised
              Super Robust and High Physical Support SDA homes. We collaborate
              and align with the right SDA provider to look after the home.
            </p>

            <div className="mt-5 space-y-4 text-[15px]">
              <div>
                <p className="font-semibold text-white">Phone:</p>
                <a href="tel:0408791489" className="mt-1 inline-block text-white/90">
                  0408 79 14 89
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Email:</p>
                <a
                  href="mailto:admin@safehavenhousing.com.au"
                  className="mt-1 inline-block text-white/90 underline underline-offset-2"
                >
                  admin@safehavenhousing.com.au
                </a>
              </div>
              <a
                href="https://safehavenhousing.com.au"
                className="inline-block text-white/90"
              >
                safehavenhousing.com.au
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="rounded-2xl border border-white/30 px-2 py-2 sm:px-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="text"
                  placeholder="Write you message here!"
                  className="h-12 flex-1 bg-transparent px-4 text-[18px] text-white placeholder:text-white/55 focus:outline-none"
                />
                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-base font-medium shadow-sm"
                  style={{ color: "#1A226B", fontFamily: "Public Sans, sans-serif" }}
                >
                  Enquire Now
                </button>
              </div>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-[1.1rem] font-semibold text-white">Why Safe Haven</h3>
                <h4 className="mt-4 text-[1.1rem] font-semibold text-white">
                  Super Robust SDA Homes
                </h4>
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-[13px] text-white/80">
                  {robustLinks.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[1.1rem] font-semibold text-white">
                  What Residents Say
                </h3>
                <h4 className="mt-4 text-[1.1rem] font-semibold text-white">
                  High Physical Support SDA homes
                </h4>
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-[13px] text-white/80">
                  {residentLinks.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/40 pt-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 text-white">
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/14"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/14"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/14"
              >
                <TiktokIcon />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-white/90">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <p>
                © 2026 <span className="italic">Safe Haven.</span> All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
