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

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M18.244 2H21l-6.02 6.88L22 22h-5.49l-4.3-6.314L6.684 22H3.927l6.44-7.36L2 2h5.63l3.887 5.703L18.244 2Zm-.967 18.338h1.527L6.8 3.574H5.161l12.116 16.764Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M21.6 7.2a2.99 2.99 0 0 0-2.1-2.12C17.64 4.6 12 4.6 12 4.6s-5.64 0-7.5.48A2.99 2.99 0 0 0 2.4 7.2 31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.8 2.99 2.99 0 0 0 2.1 2.12c1.86.48 7.5.48 7.5.48s5.64 0 7.5-.48a2.99 2.99 0 0 0 2.1-2.12A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer
      className="w-full text-white"
      style={{ backgroundColor: "#0A1553", fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-5 pt-10 pb-0 sm:px-6 lg:px-8 xl:px-16">

        {/* Top row: Logo | Enquire bar + disclaimer */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-8">
          <img
            src={logo}
            alt="Safe Haven Housing"
            className="h-16 w-auto sm:h-16"
          />

          {/* Right column: enquire bar + disclaimer */}
          <div className="flex flex-col gap-3 lg:items-end">
            {/* Enquire Now bar — full-width on mobile, max-capped on desktop */}
            <div
              className="flex w-full items-center justify-between rounded-2xl border border-[rgba(215,238,255,0.5)] px-2 py-3 lg:max-w-[657px]"
              style={{ fontFamily: "Public Sans, sans-serif" }}
            >
              <input
                type="text"
                placeholder="Write your message here!"
                className="min-w-0 flex-1 bg-transparent px-3 py-1 text-[15px] text-white/50 placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="button"
                className="shrink-0 rounded-xl bg-[#FCFAFA] px-4 py-2 text-[15px] font-normal text-[#0A1553] transition-opacity hover:opacity-90"
              >
                Enquire Now
              </button>
            </div>

            {/* Disclaimer */}
            <p
              className="text-[13px] font-semibold leading-6 text-[#a2cbeb] sm:text-[15px] lg:mt-8 lg:text-right"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Safe Haven Housing is not an SDA provider, we provide customised Super Robust and High Physical
              <br className="hidden sm:block" />
              {" "}Support SDA homes. We collaborate and align with the right SDA provider to look after the home.
            </p>
          </div>
        </div>

        {/* Main content: Contact left | Link columns right */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[295px_1fr] lg:mt-10">

          {/* Contact */}
          <div className="flex flex-col gap-[12px] text-[16px] sm:text-[18px]" style={{ fontFamily: "DM Sans, sans-serif" }}>
            <div>
              <p className="font-bold leading-normal">Phone:</p>
              <a href="tel:1300111744" className="font-normal leading-normal">1300 111 744</a>
            </div>
            <div className="h-px w-[100px] bg-white" />

            <div>
              <p className="font-bold leading-normal">Email:</p>
              <a
                href="mailto:admin@safehavenhousing.com.au"
                className="break-all font-normal underline leading-normal"
                target="_blank"
                rel="noreferrer"
              >
                admin@safehavenhousing.com.au
              </a>
            </div>
            <div className="h-px w-[100px] bg-white" />

            <a
              href="https://safehavenhousing.com.au"
              className="font-medium leading-normal"
              target="_blank"
              rel="noreferrer"
            >
              safehavenhousing.com.au
            </a>
          </div>

          {/* Link columns */}
          <div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:ml-auto lg:w-fit lg:gap-12 lg:py-12"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {/* Super Robust SDA Homes */}
            <div className="flex flex-col gap-4">
              <p className="text-[18px] font-semibold text-white sm:text-[20px]">Super Robust SDA Homes</p>
              <div className="flex gap-4 text-[13px] font-normal text-white sm:text-[14px]">
                <div className="flex flex-col gap-[8px]">
                  <p>Security &amp; Protection</p>
                  <p>Bathrooms &amp; Toilets</p>
                  <p>Doors &amp; Access</p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <p>Kitchen</p>
                  <p>Bedrooms &amp; Support</p>
                  <p>Assistive technology</p>
                </div>
              </div>
            </div>

            {/* High Physical Support SDA homes */}
            <div className="flex flex-col gap-4">
              <p className="text-[18px] font-semibold text-white sm:text-[20px]">High Physical Support SDA homes</p>
              <div className="flex gap-4 text-[13px] font-normal text-white sm:text-[14px]">
                <div className="flex flex-col gap-[8px]">
                  <p>Lounge Rooms</p>
                  <p>Doors &amp; Access</p>
                  <p>Bedrooms &amp; Support</p>
                </div>
                <div className="flex flex-col gap-[8px]">
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
      <div className="mt-8 border-t border-white/30 sm:mt-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-6 sm:flex-row sm:justify-between sm:px-6 lg:px-8 xl:px-16">

          {/* Social icons */}
          <div className="flex items-center gap-3 text-white">
            <a
              href="https://www.facebook.com/safehavenhousing.au/"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/safehavenhousing.au/"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://x.com/safehavenhouses"
              aria-label="Twitter"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.youtube.com/@SafeHavenHousing"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
              target="_blank"
              rel="noreferrer"
            >
              <YoutubeIcon />
            </a>
          </div>

          {/* Links + copyright */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[16px] text-white sm:gap-x-6 sm:text-[18px]"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white" />
              <a href="#">Terms of Service</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white" />
              <a href="#">Privacy Policy</a>
            </div>
            <p className="text-center">
              © 2026 <em>Safe Haven</em>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
