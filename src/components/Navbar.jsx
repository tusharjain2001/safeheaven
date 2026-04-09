import logo from "../assets/logo.svg";

const navItems = ["Why Us", "Customisation", "What's Included", "Contact Us"];

function Navbar() {
  return (
    <header
      className="w-full bg-white px-4 py-4 sm:px-4 lg:px-8 xl:px-12"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <nav className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex shrink-0 items-center">
          <a href="/" className="flex items-start justify-start gap-3">
            <img
              src={logo}
              alt="Safe Haven Housing"
              className="h-12 w-auto sm:h-14"
            />
          </a>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:px-10 xl:gap-x-10">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[15px] font-medium text-[#191816] transition-colors duration-200 hover:text-[#003AA0]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl border border-[#003AA0] px-5 py-3 text-sm font-semibold text-[#003AA0] transition-all duration-200 hover:bg-[#003AA0] hover:text-white"
          >
            Let&apos;s Customise
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-[#003AA0] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#002f81]"
          >
            Enquire Now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
