import { useState } from "react";
import GreenTickPopup from "../assets/greentickpopup.png";

const ROLE_OPTIONS = [
  "Participant",
  "Support Coordinator",
  "Family/Guardian",
  "SIL Provider",
];

const FUNDING_OPTIONS = ["Yes", "No"];

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  phoneM: "",
  phoneP: "",
  email: "",
  enquiringAs: ROLE_OPTIONS[0],
  sdaFunding: FUNDING_OPTIONS[0],
  location: "",
};

const API_BASE_URL = "https://safeheaven-backend-v88b.vercel.app";

function HeroSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitState, setSubmitState] = useState({
    loading: false,
    error: "",
    success: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState({ loading: true, error: "", success: "" });

    try {
      const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "We couldn't send your enquiry right now.");
      }

      setSubmitState({ loading: false, error: "", success: "" });
      setFormData(INITIAL_FORM);
      setShowPopup(true);
    } catch (error) {
      setSubmitState({
        loading: false,
        error: error.message || "We couldn't send your enquiry right now.",
        success: "",
      });
    }
  };

  const handleContinue = () => {
    setShowPopup(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-[420px] rounded-2xl bg-white px-8 py-10 shadow-2xl text-center">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none"
              aria-label="Close"
            >
              &#x2715;
            </button>
            <img
              src={GreenTickPopup}
              alt="Success"
              className="mx-auto mb-5 h-20 w-20"
            />
            <h2
              className="text-[1.9rem] font-bold text-[#0A1553]"
              style={{ fontFamily: "Public Sans, sans-serif" }}
            >
              Thank You!
            </h2>
            <p className="mt-3 text-[0.95rem] text-[#555]">
              We will get back to you soon through your phone or email.
            </p>
            <hr className="my-6 border-[#E0E0E0]" />
            <button
              onClick={handleContinue}
              className="w-full rounded-xl bg-[#1148B2] py-3.5 text-[1rem] font-medium text-white transition-colors hover:bg-[#0E3F99]"
              style={{ fontFamily: "Public Sans, sans-serif" }}
            >
              Continue
            </button>
          </div>
        </div>
      )}
      <section
      className="w-full bg-[#EAF6FF] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-10"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto grid max-w-[1320px] items-start gap-8 lg:items-stretch lg:grid-cols-[minmax(0,600px)_490px] lg:justify-between lg:gap-14 xl:grid-cols-[minmax(0,620px)_520px]">
        <div className="flex max-w-[620px] flex-col pt-1 lg:pt-2">
          <h1
            className="max-w-[650px] text-[2.25rem] font-bold leading-[1.2] tracking-[-0.045em] text-[#142774] sm:text-[3rem] lg:text-[3rem] xl:text-[3.25rem]"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            <span className="block">The First Fully</span>
            <span className="block">
              <em className="italic text-[#1D8FF0]">Customisable</em> SDA Home
            </span>
          </h1>

          <p
            className="mt-4 text-[0.95rem] font-semibold uppercase tracking-[0.01em] text-[#142774]"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            We Make The Home Fit You, Not You Fit The Home.
          </p>

          <p className="mt-3 max-w-[570px] text-xs leading-[1.5] text-[#142774] md:text-[1rem]">
            At Safe Haven Housing, we customise every home to suit your needs.
            You request your customisation and we create your Safe Haven. <br />
            <br />
            More Privacy, More Space, More Safety and More Freedom.
          </p>

          <div className="mt-6 w-full max-w-[580px] self-start overflow-hidden rounded-[18px] border-2 border-[#17307C] shadow-[0_10px_24px_rgba(16,35,107,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(16,35,107,0.22)] lg:flex-1">
            <div className="aspect-video w-full bg-[#0A1553] lg:h-full lg:min-h-[420px] lg:aspect-auto">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/RAYOj94JsxI?rel=0"
                title="Safe Haven Housing hero video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="w-full rounded-[18px] bg-white p-6 shadow-[0_8px_24px_rgba(79,120,165,0.22)] sm:p-7">
          <h2
            className="text-[1.75rem] font-medium leading-[1.1] text-[#0A1553] sm:text-[1.9rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Let&apos;s find the right home for you!
          </h2>
          <p className="mt-1 text-[0.94rem] leading-[1.45] text-[#666666]">
            Quick, free, and no obligation. Takes about 2 minutes.
          </p>

          <hr className="my-5 border-[#142774]/15" />

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex-1">
                <label
                  className="block text-[0.78rem] text-[#666666]"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Joanne"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 h-11 w-full rounded-[4px] border border-transparent bg-[#F1F1F1] px-3 text-[0.9rem] text-[#333] placeholder:text-[#A0A0A8] focus:border-[#3A95E8] focus:bg-white focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-[0.78rem] text-[#666666]"
                  htmlFor="lastName"
                >
                  Surname
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Smith"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 h-11 w-full rounded-[4px] border border-transparent bg-[#F1F1F1] px-3 text-[0.9rem] text-[#333] placeholder:text-[#A0A0A8] focus:border-[#3A95E8] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex-1">
                <label
                  className="block text-[0.78rem] text-[#666666]"
                  htmlFor="phoneM"
                >
                  Mobile
                </label>
                <input
                  id="phoneM"
                  name="phoneM"
                  type="tel"
                  placeholder="+61 XXXXX"
                  value={formData.phoneM}
                  onChange={handleChange}
                  className="mt-1 h-11 w-full rounded-[4px] border border-transparent bg-[#F1F1F1] px-3 text-[0.9rem] text-[#333] placeholder:text-[#A0A0A8] focus:border-[#3A95E8] focus:bg-white focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-[0.78rem] text-[#666666]"
                  htmlFor="phoneP"
                >
                  Phone
                </label>
                <input
                  id="phoneP"
                  name="phoneP"
                  type="tel"
                  placeholder="+61 XXXXX"
                  value={formData.phoneP}
                  onChange={handleChange}
                  className="mt-1 h-11 w-full rounded-[4px] border border-[#BEBEC7] bg-white px-3 text-[0.9rem] text-[#333] placeholder:text-[#666] focus:border-[#3A95E8] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-[0.78rem] text-[#666666]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="joannesmith@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 h-11 w-full rounded-[4px] border border-transparent bg-[#F1F1F1] px-3 text-[0.9rem] text-[#333] placeholder:text-[#A0A0A8] focus:border-[#3A95E8] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <p className="mb-2 text-[0.82rem] text-[#666666]">
                You are enquiring as?
              </p>
              <div className="grid grid-cols-2 gap-2">
                {ROLE_OPTIONS.map((role) => (
                  <label
                    key={role}
                    className={`flex min-h-[42px] cursor-pointer items-center gap-2 rounded-[3px] border px-3 py-1.5 text-[0.82rem] text-[#585864] transition-colors ${
                      formData.enquiringAs === role
                        ? "border-[#8FC5F3] bg-[#DDEFFF] text-[#315AA8]"
                        : "border-[#C7C8CF] bg-white hover:border-[#8FC5F3] hover:bg-[#F6FBFF]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="enquiringAs"
                      value={role}
                      checked={formData.enquiringAs === role}
                      onChange={handleChange}
                      className="h-3 w-3 accent-[#2E8CE6]"
                    />
                    {role}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="text-[0.82rem] text-[#666666]">
                Does your enquiry have SDA funding approved?
              </p>
              <div className="flex gap-2">
                {FUNDING_OPTIONS.map((option) => (
                  <label
                    key={option}
                    className={`flex min-h-[34px] cursor-pointer items-center gap-2 rounded-[3px] border px-3 py-1.5 text-[0.82rem] text-[#585864] transition-colors ${
                      formData.sdaFunding === option
                        ? "border-[#8FC5F3] bg-[#DDEFFF] text-[#315AA8]"
                        : "border-[#C7C8CF] bg-white hover:border-[#8FC5F3] hover:bg-[#F6FBFF]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="sdaFunding"
                      value={option}
                      checked={formData.sdaFunding === option}
                      onChange={handleChange}
                      className="h-3 w-3 accent-[#2E8CE6]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label
                className="block text-[0.78rem] text-[#666666]"
                htmlFor="location"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Melbourne"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-1 h-11 w-full rounded-[4px] border border-transparent bg-[#F1F1F1] px-3 text-[0.9rem] text-[#333] placeholder:text-[#A0A0A8] focus:border-[#3A95E8] focus:bg-white focus:outline-none"
              />
            </div>

            {(submitState.error || submitState.success) && (
              <p
                className={`text-sm ${submitState.error ? "text-[#C0362C]" : "text-[#1E7C3A]"}`}
                aria-live="polite"
              >
                {submitState.error || submitState.success}
              </p>
            )}

            <div className="flex justify-end pt-1.5">
              <button
                type="submit"
                disabled={submitState.loading}
                className="rounded-[10px] bg-[#1148B2] px-9 py-3 text-[1rem] font-normal text-white transition-colors duration-200 hover:bg-[#0E3F99] disabled:cursor-not-allowed disabled:opacity-70"
                style={{ fontFamily: "Public Sans, sans-serif" }}
              >
                {submitState.loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}

export default HeroSection;
