function DesignSection() {
  return (
    <section
      className="w-full px-4 py-8 text-white sm:px-6 lg:px-8"
      style={{ backgroundColor: "#0A1553", fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-[2.1rem]">
          Let&apos;s design a home, that is truly for YOU
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
          Our team is ready to listen to your needs, walk you through our
          available properties, and begin creating a home that is truly yours.
          The first step is simply reaching out.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-medium text-[#0A1553] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Enquire Now
        </a>
      </div>
    </section>
  );
}

export default DesignSection;
