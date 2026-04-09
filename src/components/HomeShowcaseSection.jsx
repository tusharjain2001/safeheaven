import home from "../assets/home.svg";

function HomeShowcaseSection() {
  return (
    <section
      className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{ backgroundColor: "#CFEBB6", fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.18fr] lg:gap-14">
        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#191816] sm:text-5xl">
            Let&apos;s design A HOME, that is truly for YOU
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[#191816]/85">
            Our team is ready to listen to your needs, walk you through our
            available properties, and begin creating a home that is truly
            yours. The first step is simply reaching out.
          </p>
          <a
            href="#"
            className="mt-9 inline-flex items-center justify-center rounded-xl px-6 py-3 text-xl font-medium text-white shadow-[0_12px_24px_rgba(0,133,234,0.25)] transition-transform duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: "#0085EA", fontFamily: "Public Sans, sans-serif" }}
          >
            Enquire Now
          </a>
        </div>

        <div className="overflow-hidden rounded-[1.35rem] shadow-[0_16px_40px_rgba(25,24,22,0.12)]">
          <img
            src={home}
            alt="Accessible Safe Haven home exterior"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeShowcaseSection;
