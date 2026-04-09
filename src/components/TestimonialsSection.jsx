import iconQuote from "../assets/icon-quote.svg";

// card width + gap = one slot. This MUST match the CSS below.
const CARD_W = 320;
const CARD_GAP = 24;
const SLOT = CARD_W + CARD_GAP; // 344 px

const row1 = [
  "Finally, a place that feels like mine.",
  "I feel independent for the first time.",
  "There's actually room for all my equipment.",
  "My Carer has their own proper space too.",
  "It doesn't feel like a hospital at all.",
];

const row2 = [
  "I didn't have to compromise on anything.",
  "They actually listened to what I needed.",
  "Moving in was easy- everything was ready.",
  "Finally a place that feels like mine.",
  "Moving in was easy- everything was ready.",
];

function TestimonialCard({ quote }) {
  return (
    <div
      className="flex h-[190px] flex-col justify-center gap-4 rounded-[10px] bg-white px-7 py-5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      style={{ width: `${CARD_W}px`, fontFamily: "Inter, sans-serif", flexShrink: 0 }}
    >
      <img src={iconQuote} alt="" aria-hidden="true" className="h-8 w-10 object-contain" />
      <p className="text-[17px] italic leading-7 text-black">{quote}</p>
    </div>
  );
}

function MarqueeRow({ quotes, direction }) {
  // Triple the cards so the screen is always filled during the loop
  const tripled = [...quotes, ...quotes, ...quotes];

  // Exact pixel width of ONE original set — used as animation distance
  const setWidth = quotes.length * SLOT;

  const containerStyle = {
    display: "flex",
    width: "max-content",
    willChange: "transform",
    "--marquee-width": `${setWidth}px`,
    animation: `${direction === "ltr" ? "marquee-ltr" : "marquee-rtl"} 40s linear infinite`,
  };

  return (
    <div className="marquee-track" style={{ overflow: "hidden" }}>
      <div className="marquee-inner" style={containerStyle}>
        {tripled.map((quote, i) => (
          <div key={i} style={{ marginRight: `${CARD_GAP}px`, flexShrink: 0 }}>
            <TestimonialCard quote={quote} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section
      className="w-full overflow-hidden bg-white py-16 sm:py-20"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex flex-col items-center px-4 text-center sm:px-6">
        <span className="inline-flex items-center rounded-full border border-[#0049C8] px-5 py-2.5 text-base text-[#0049C8]">
          What Residents Say
        </span>
        <h2
          className="mt-5 text-[1.9rem] font-bold leading-tight text-[#0A1553] sm:text-4xl lg:text-[3.5rem] lg:leading-[1.1]"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Hear It From The People Who Call
          <span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> </span>
          Safe Haven Home
        </h2>
        <p className="mt-4 text-base text-[#0A1553] sm:text-lg">
          Real words from real participants living in their Safe Haven homes.
        </p>
      </div>

      {/* Scrolling rows */}
      <div className="mt-12 py-10" style={{ backgroundColor: "#D7EEFF" }}>
        <MarqueeRow quotes={row1} direction="ltr" />
        <div className="mt-5">
          <MarqueeRow quotes={row2} direction="rtl" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
