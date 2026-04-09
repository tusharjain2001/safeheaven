import heroVideoThumb from "../assets/hero-video-thumb.jpg";
import iconPlay from "../assets/icon-play.svg";

function HeroSection() {
  return (
    <section
      className="w-full px-4 pt-10 pb-16 sm:px-6 sm:pb-20 lg:px-8 xl:px-16"
      style={{ backgroundColor: "#E7F5FF", fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_480px] lg:gap-10">
        {/* Left: Hero Text */}
        <div className="flex flex-col">
          <h1
            className="text-4xl font-bold leading-tight tracking-tight text-[#0A1553] sm:text-5xl xl:text-[56px] xl:leading-[1.1]"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            The First Fully{" "}
            <em className="not-italic text-[#0085EA]">Customisable</em> SDA
            Home
          </h1>

          <p
            className="mt-4 text-base font-medium uppercase tracking-wide text-[#0A1553]"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            We Make The Home Fit You, Not You Fit The Home.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-7 text-[#0A1553]">
            At Safe Haven Housing, we customise every home to suit your
            individual needs. You request your requirements; we create your Safe
            Haven SDA Home, designed with you in mind, meaning more privacy,
            more space, more safety and more freedom.
          </p>

          {/* Video Thumbnail */}
          <div className="mt-8 self-start overflow-hidden rounded-[20px] border-2 border-[#0A1553] shadow-lg">
            <div className="relative">
              <img
                src={heroVideoThumb}
                alt="Safe Haven home tour video"
                className="h-[220px] w-full object-cover sm:h-[260px] lg:h-[280px] xl:w-[580px]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-full border border-white bg-black/50 py-2 pl-2 pr-4 text-white transition-colors duration-200 hover:bg-black/70"
                >
                  <img
                    src={iconPlay}
                    alt=""
                    aria-hidden="true"
                    className="h-10 w-10 object-contain"
                  />
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "Public Sans, sans-serif" }}
                  >
                    Watch Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form Card */}
        <div className="rounded-[20px] bg-white px-8 py-8 shadow-[0px_4px_16px_rgba(0,0,0,0.15)]">
          <div>
            <h2
              className="text-[2rem] font-semibold leading-tight text-[#0A1553]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Let&apos;s design a home
            </h2>
            <p className="mt-1 text-xl font-medium text-[#0A1553]">
              that truly works for you!
            </p>
          </div>

          <hr className="my-4 border-[#0A1553]/20" />

          <p className="text-xl font-normal text-[#191816]">
            Let&apos;s find the right home for you
          </p>
          <p className="mt-1 text-sm text-[#666]">
            Quick, free, and no obligation. Takes about 2 minutes.
          </p>

          <form className="mt-5 space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <label
                  className="block text-sm text-[#666]"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Joanne"
                  className="mt-1 h-14 w-full rounded-[5px] bg-[#ECECEC] px-4 text-base text-[#939191] placeholder:text-[#939191] focus:outline-none focus:ring-2 focus:ring-[#0085EA]"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-sm text-[#666]"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Smith"
                  className="mt-1 h-14 w-full rounded-[5px] bg-[#ECECEC] px-4 text-base text-[#939191] placeholder:text-[#939191] focus:outline-none focus:ring-2 focus:ring-[#0085EA]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#666]" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Joanne Smith@example.com"
                className="mt-1 h-14 w-full rounded-[5px] bg-[#ECECEC] px-4 text-base text-[#939191] placeholder:text-[#939191] focus:outline-none focus:ring-2 focus:ring-[#0085EA]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#666]" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+61 XXXXX"
                className="mt-1 h-14 w-full rounded-[5px] bg-[#ECECEC] px-4 text-base text-[#939191] placeholder:text-[#939191] focus:outline-none focus:ring-2 focus:ring-[#0085EA]"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="rounded-xl bg-[#003AA0] px-10 py-3 text-lg font-normal text-white transition-colors duration-200 hover:bg-[#002f81]"
                style={{ fontFamily: "Public Sans, sans-serif" }}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
