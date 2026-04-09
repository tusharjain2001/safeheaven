import landlord1 from "../assets/landlord-1.jpg";
import landlord2 from "../assets/landlord-2.jpg";
import landlord3 from "../assets/landlord-3.jpg";
import landlord4 from "../assets/landlord-4.jpg";
import landlord5 from "../assets/landlord5.svg";
import landlord6 from "../assets/landlord-6.jpg";
import iconLandlord1 from "../assets/icon-landlord-1.svg";
import iconLandlord2 from "../assets/icon-landlord-2.svg";
import iconLandlord3 from "../assets/icon-landlord-3.svg";
import iconLandlord4 from "../assets/icon-landlord-4.svg";
import iconLandlord5 from "../assets/icon-landlord-5.svg";
import iconLandlord6 from "../assets/icon-landlord-6.svg";

const photoCards = [
  {
    image: landlord1,
    icon: iconLandlord1,
    caption: "Bigger spaces than most SDA properties on the market.",
  },
  {
    image: landlord2,
    icon: iconLandlord2,
    caption:
      "Private living area for each participant, because privacy isn't an upgrade, it's essential.",
  },
  {
    image: landlord3,
    icon: iconLandlord3,
    caption: "Dedicated storage for essential equipment.",
  },
  {
    image: landlord4,
    icon: iconLandlord4,
    caption: "Location: Community connection focused for the long term.",
  },
  {
    image: landlord5,
    icon: iconLandlord5,
    caption: "Ongoing property management support.",
  },
  {
    image: landlord6,
    icon: iconLandlord6,
    caption:
      "Wide range of optional extras and upgrades to personalise further.",
  },
];

function PhotoCard({ image, icon, caption }) {
  return (
    <div className="group rounded-[12px] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden rounded-[12px]">
        <img
          src={image}
          alt={caption}
          className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 flex w-[65%] flex-col gap-3 rounded-[10px] border border-[#D7EEFF] bg-[rgba(252,250,250,0.9)] p-4 transition-transform duration-300 group-hover:-translate-y-1 sm:w-[52%]">
          <img src={icon} alt="" aria-hidden="true" className="icon-bounce h-10 w-10 object-contain" />
          <p className="text-[18px] leading-6 text-[#191816]">{caption}</p>
        </div>
      </div>
    </div>
  );
}

function WhySafeHavenSection() {
  return (
    <section
      id="why-safe-haven"
      className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-[#0A1553] bg-[#D7EEFF] px-5 py-2.5 text-base text-[#0A1553]">
            Why Safe Haven
          </span>
          <h2
            className="mt-5 max-w-3xl text-[1.9rem] font-bold leading-tight text-[#0A1553] sm:text-4xl lg:text-[56px] lg:leading-[61px]"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            The only SDA LANDLORD that truly tailors every home to you
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-7 text-[#0A1553]">
            We go beyond industry standards at every step — because a house only
            becomes a home when it&apos;s built around your life.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {photoCards.map((card) => (
            <PhotoCard
              key={card.caption}
              image={card.image}
              icon={card.icon}
              caption={card.caption}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySafeHavenSection;
