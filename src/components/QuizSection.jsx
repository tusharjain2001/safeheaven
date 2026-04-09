import gradientHome from "../assets/gradient-home.svg";

function QuizSection() {
  return (
    <section className="w-full" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="grid w-full items-stretch lg:grid-cols-[1.05fr_0.95fr]">
        <div
          className="flex items-center px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12 xl:px-16"
          style={{ backgroundColor: "#0049C8" }}
        >
          <div className="w-full max-w-xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Start Designing Your Safe Haven Home Today.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/85">
              Our team is ready to listen to your needs, walk you through our
              available properties, and begin creating a home that is truly
              yours. The first step is simply reaching out.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl border border-white px-5 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-white hover:text-[#0049C8]"
                style={{ fontFamily: "Public Sans, sans-serif" }}
              >
                Enquire Now
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-base font-medium shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ color: "#0049C8", fontFamily: "Public Sans, sans-serif" }}
              >
                Take the Quick Quiz
              </a>
            </div>
          </div>
        </div>

        <div className="min-h-[240px] sm:min-h-[320px]">
          <img
            src={gradientHome}
            alt="Safe Haven home with gradient overlay"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default QuizSection;
