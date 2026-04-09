import tick from "../assets/tick.svg";

const standards = [
  "Separate living area for each participant",
  "Home office or dedicated tech room",
  "Additional and lockable storage space",
  "Superior furnishings and furniture upgrades",
  "Upgraded carer's room with secure storage",
  "Ongoing property management support",
  "Dedicated Equipment Spaces & Storage Racks",
  "Community connection focused for the long term",
];

function StandardsSection() {
  return (
    <section
      className="w-full px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{ backgroundColor: "#0A1553", fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="max-w-xl">
          <h2 className="text-[1.9rem] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s design A HOME, that is truly for YOU
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/82">
            Our team is ready to listen to your needs, walk you through our
            available properties, and begin creating a home that is truly
            yours. The first step is simply reaching out.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-base font-medium shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
            style={{ color: "#003AA0", fontFamily: "Public Sans, sans-serif" }}
          >
            Enquire Now
          </a>
        </div>

        <div
          className="rounded-[1.3rem] px-6 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:px-8 sm:py-8"
          style={{ backgroundColor: "#FFFFFF2E" }}
        >
          <h3
            className="text-[1.9rem] font-semibold leading-tight sm:text-[2.1rem]"
            style={{ color: "#D7EEFF" }}
          >
            Our Minimum Standard Includes:
          </h3>

          <div className="mt-6 space-y-3">
            {standards.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#FFFFFF4D" }}
                >
                  <img
                    src={tick}
                    alt=""
                    aria-hidden="true"
                    className="h-3 w-3 object-contain"
                  />
                </span>
                <p className="text-sm leading-6 text-white sm:text-[0.98rem]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StandardsSection;
