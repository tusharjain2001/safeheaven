import house from "../assets/house.svg";
import navigator from "../assets/navigator.svg";
import profile from "../assets/profile.svg";

const stepCards = [
  {
    icon: navigator,
    alt: "Navigator icon",
    text: "Choose your SDA home from one of our properties",
  },
  {
    icon: profile,
    alt: "Profile icon",
    text: "We customise it to suit your personal needs and preferences",
  },
  {
    icon: house,
    alt: "House icon",
    text: "Move into your Safe Haven - perfectly designed for you",
  },
];

function StepsSection() {
  return (
    <section
      className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
      style={{ backgroundColor: "#0085EA", fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stepCards.map((card) => (
          <article
            key={card.text}
            className="flex items-center gap-4 rounded-[10px] bg-white px-5 py-4 shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
          >
            <img
              src={card.icon}
              alt={card.alt}
              className="h-7 w-7 shrink-0 object-contain"
            />
            <p
              className="text-[1.02rem] font-medium leading-6 text-black"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {card.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StepsSection;
