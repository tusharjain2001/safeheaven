import robust1 from "../assets/robust-1.jpg";
import robust2 from "../assets/robust-2.jpg";
import robust3 from "../assets/robust-3.jpg";
import robust4 from "../assets/robust-4.jpg";
import robust5 from "../assets/robust-5.jpg";
import robust6 from "../assets/robust-6.jpg";
import iconSecurity from "../assets/icon-robust-security.svg";
import iconKitchen from "../assets/icon-robust-kitchen.svg";
import iconBath from "../assets/icon-robust-bath.svg";
import iconBed from "../assets/icon-robust-bed.svg";
import iconDoor from "../assets/icon-robust-door.svg";
import iconTech from "../assets/icon-robust-tech.svg";

const photoCards = [
  { image: robust1, caption: "Polycarbonate Protected Appliances" },
  { image: robust2, caption: "Security Systems" },
  { image: robust3, caption: "Vandal Proof Bathrooms" },
  { image: robust4, caption: "Lockable Kitchen to keep everyone safe." },
  { image: robust5, caption: "Resistant motorized internal blinds" },
  { image: robust6, caption: "2.1m impact resistant wall" },
];

const featureCards = [
  {
    icon: iconSecurity,
    title: "Security & Protection",
    items: [
      "2.1m reinforced walls",
      "2m heavy-duty fencing with lockable gate to prevent absconding.",
      "Vandal-resistant intercom and protected A/C units",
      "Double-glazed, impact-rated polycarbonate windows",
    ],
  },
  {
    icon: iconKitchen,
    title: "Kitchen",
    items: [
      "Heavy-duty hardware and drawer runners",
      "Impact-resistant bench tops",
      "Reinforced walls",
      "Enclosed lockable kitchens for safety",
      "Separate kitchens for each participants",
    ],
  },
  {
    icon: iconBath,
    title: "Bathrooms & Toilets",
    items: [
      "Ligature and vandal-resistant tapware",
      "Shatter-resistant mirrors",
      "Impact-resistant bench tops.",
      "Concealed pipework",
    ],
  },
  {
    icon: iconBed,
    title: "Bedrooms & Support",
    items: [
      "Larger then standard SDA bedrooms",
      "Heavy-duty lockable personal storage",
      "Support worker room with secure workplace and lockable storage",
    ],
  },
  {
    icon: iconDoor,
    title: "Doors and Access",
    items: [
      "920mm solid core doors with stainless steel jambs",
      "Marine-grade security doors",
      "Reinforced door frames and heavy-duty zone dividers",
    ],
  },
  {
    icon: iconTech,
    title: "Assistive Technology",
    items: [
      "Intergrated tamper resistant smart home features",
      "Motorized cordless blinds with no ligature risk",
      "External impact-resistant roller shutters",
      "Modern and comfortable — not clinical",
    ],
  },
];

function SuperRobustSection() {
  return (
    <section
      className="w-full py-16 sm:py-20"
      style={{ backgroundColor: "#D7EEFF", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full border border-[#0A1553] px-5 py-2.5 text-base text-[#0A1553]">
          Ultimate Safety. Absolute Peace of Mind
        </span>
        <h2
          className="mt-5 text-4xl font-bold text-[#0A1553] sm:text-[3.5rem]"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Super Robust
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-7 text-[#0A1553]">
          Some homes need to do more. Our Super Robust properties are
          thoughtfully designed to provide the highest level of protection,
          giving Participants, Careers and families the safety and reassurance
          they deserve.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {photoCards.map((card) => (
            <div
              key={card.caption}
              className="relative overflow-hidden rounded-[12px]"
            >
              <img
                src={card.image}
                alt={card.caption}
                className="h-[280px] w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 rounded-[12px] bg-[rgba(252,250,250,0.9)] px-4 py-2">
                <p
                  className="text-[16px] leading-10 text-[#191816]"
                  style={{ fontFamily: "Public Sans, sans-serif" }}
                >
                  {card.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statement */}
      <div className="mx-auto mt-14 max-w-4xl px-4 text-center sm:px-6">
        <p
          className="text-2xl font-bold leading-snug text-[#003AA0] sm:text-[2rem]"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Our robust homes all provide separate living, dinning and kitchen
          areas for each participant— for safety and peace of mind
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 overflow-hidden rounded-[10px] bg-white p-4"
            >
              <div className="flex items-center gap-3 rounded-[12px] bg-[#CFEBB6]/50 p-2">
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 shrink-0 object-contain"
                />
                <span
                  className="text-lg font-semibold text-[#191816]"
                  style={{ fontFamily: "Public Sans, sans-serif" }}
                >
                  {card.title}
                </span>
              </div>
              <ul className="list-disc space-y-1 pl-5 text-[15px] leading-6 text-[#191816]">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuperRobustSection;
