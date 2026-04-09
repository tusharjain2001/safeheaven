import hps1 from "../assets/hps-1.jpg";
import hps2 from "../assets/hps-2.jpg";
import hps3 from "../assets/hps-3.jpg";
import hps4 from "../assets/hps-4.jpg";
import hps5 from "../assets/hps-5.jpg";
import hps6 from "../assets/hps-6.jpg";
import iconLounge from "../assets/icon-hps-lounge.svg";
import iconOffice from "../assets/icon-hps-office.svg";
import iconDoor from "../assets/icon-hps-door.svg";
import iconGarage from "../assets/icon-hps-garage.svg";
import iconBath from "../assets/icon-robust-bath.svg";
import iconBed from "../assets/icon-robust-bed.svg";

const photoCards = [
  { image: hps1, caption: "Main Lounge Room" },
  { image: hps2, caption: "Garage with Equipment Storage" },
  { image: hps3, caption: "Bedrooms fitted with Electric Hoist" },
  { image: hps4, caption: "Extra Large Career Rooms to work and rest" },
  { image: hps5, caption: "Spacious Bathrooms with accessible cabinets" },
  { image: hps6, caption: "Custom Rooms- office, tech or own design" },
];

const featureCards = [
  {
    icon: iconLounge,
    title: "Lounge Rooms",
    items: [
      "Two lounge rooms in every HPS home",
      "Larger spaces for participants to live comfortably",
      "Privacy with a guest bathroom attached to second lounge room",
    ],
  },
  {
    icon: iconOffice,
    title: "Home office/ Tech Room",
    items: [
      "Designs of tech room or home office available",
      "Request your own customisation - we'll tailor the room to suit.",
      "Space for participants to work, study and play.",
    ],
  },
  {
    icon: iconDoor,
    title: "Doors and Access",
    items: [
      "Custom door widths for your wheelchair or aid",
      "Sliding and assisted door systems",
      "Smooth, threshold-free movement",
    ],
  },
  {
    icon: iconGarage,
    title: "Garage",
    items: [
      "Dedicated wheelchair and equipment storage area",
      "Lockable storage for medications or valuables",
      "Non slip flooring",
      "Motor vehicle storage",
    ],
  },
  {
    icon: iconBed,
    title: "Bedrooms & Support",
    items: [
      "Ceiling mounted electric hoists",
      "Accessible storage",
      "Flexible configurations for equipment",
      "Larger then average sda bedrooms",
      "Careers room with work space and lockable storage",
      "TV wall mounted in every bedroom including careers room",
    ],
  },
  {
    icon: iconBath,
    title: "Bathrooms & Toilets",
    items: [
      "Custom toilet height and seat",
      "Reinforced grab rails",
      "Non-slip, easy-clean flooring",
      "Generous turning space for carers",
      "Electric Hoist Access",
    ],
  },
];

function HpsSection() {
  return (
    <section
      className="w-full py-16 sm:py-20"
      style={{ backgroundColor: "#CFEBB6", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full border border-[#0A1553] px-5 py-2.5 text-sm text-[#0A1553] sm:text-base">
          More Than Accessible. Truly Liveable.
        </span>
        <h2
          className="mt-5 text-[1.9rem] font-bold text-[#0A1553] sm:text-4xl lg:text-[3.5rem]"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          High Physical Support (HPS)
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#0A1553] sm:text-lg">
          We believe independence isn&apos;t a luxury, it&apos;s a right. Our
          High Physical Support homes are thoughtfully customised around
          adaptability and convenience, so you can focus on living the life you
          choose.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {photoCards.map((card) => (
            <div
              key={card.caption}
              className="relative overflow-hidden rounded-[12px]"
            >
              <img
                src={card.image}
                alt={card.caption}
                className="h-[220px] w-full object-cover sm:h-[280px]"
              />
              <div className="absolute bottom-3 left-3 max-w-[80%] rounded-[12px] bg-[rgba(252,250,250,0.9)] px-4 py-2">
                <p
                  className="text-[14px] leading-6 text-[#191816] sm:text-[16px] sm:leading-10"
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
          className="text-xl font-bold leading-snug text-[#003AA0] sm:text-2xl lg:text-[2rem]"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Our HPS customisable homes are larger with dedicated home office and
          tech room and separate living areas for each participants
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
              <div className="flex items-center gap-3 rounded-[12px] bg-[#D7EEFF]/50 p-2">
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

export default HpsSection;
