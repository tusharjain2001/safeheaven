import logo from "../assets/white-logo.svg";

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
      className="w-full text-white"
      style={{ backgroundColor: "#0A1553", fontFamily: "Inter, sans-serif" }}
    >
      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr]">

          {/* Left: Logo + Contact */}
          <div className="flex flex-col gap-3">
            <img
              src={logo}
              alt="Safe Haven Housing"
              className="h-16 w-auto"
            />

            <div className="mt-4 flex flex-col gap-3 text-[18px]" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {/* Phone */}
              <div>
                <p>
                  <span className="font-bold">Phone:</span>
                  <br />
                  <a href="tel:0408791489" className="font-normal">0408 79 1 489</a>
                </p>
              </div>
              <div className="h-px w-[100px] bg-white" />

              {/* Email */}
              <div>
                <p className="font-bold">Email:</p>
                <a
                  href="mailto:admin@safehavenhousing.com.au"
                  className="font-normal underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  admin@safehavenhousing.com.au
                </a>
              </div>
              <div className="h-px w-[100px] bg-white" />

              {/* Website */}
              <a
                href="https://safehavenhousing.com.au"
                className="font-medium"
                target="_blank"
                rel="noreferrer"
              >
                safehavenhousing.com.au
              </a>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16 lg:justify-end lg:py-4">

            {/* Super Robust SDA Homes */}
            <div className="flex flex-col gap-4">
              <p className="text-[20px] font-semibold text-white">Super Robust SDA Homes</p>
              <div className="flex gap-4 text-[14px] font-normal text-white">
                <div className="flex flex-col gap-2 w-[140px]">
                  <p>Security &amp; Protection</p>
                  <p>Bathrooms &amp; Toilets</p>
                  <p>Doors &amp; Access</p>
                </div>
                <div className="flex flex-col gap-2 w-[138px]">
                  <p>Kitchen</p>
                  <p>Bedrooms &amp; Support</p>
                  <p>Assistive technology</p>
                </div>
              </div>
            </div>

            {/* High Physical Support SDA homes */}
            <div className="flex flex-col gap-4">
              <p className="text-[20px] font-semibold text-white">High Physical Support SDA homes</p>
              <div className="flex gap-4 text-[14px] font-normal text-white">
                <div className="flex flex-col gap-2 w-[138px]">
                  <p>Lounge Rooms</p>
                  <p>Doors &amp; Access</p>
                  <p>Bedrooms &amp; Support</p>
                </div>
                <div className="flex flex-col gap-2 w-[164px]">
                  <p>Home office/ Tech Room</p>
                  <p>Garage</p>
                  <p>Bathrooms &amp; Toilets</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-6 sm:flex-row sm:justify-between lg:px-8 xl:px-16">

          {/* Social icons */}
          <div className="flex items-center gap-3 text-white">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
            >
              <TiktokIcon />
            </a>
          </div>

          {/* Links + copyright */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[20px] text-white"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white" />
              <a href="#" className="leading-5">Terms of Service</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white" />
              <a href="#" className="leading-5">Privacy Policy</a>
            </div>
            <p className="leading-5">
              © 2026 <em>Safe Haven</em>. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
