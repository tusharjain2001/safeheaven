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
      <div className="mx-auto flex max-w-7xl justify-center">
        <div
          className="inline-block w-fit max-w-full rounded-[1.3rem] px-6 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-[0_24px_56px_rgba(0,0,0,0.28)] sm:px-8 sm:py-8"
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
              <div key={item} className="flex max-w-fit items-start gap-3">
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
