import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

const dishes = [
  {
    name: "Sweet & Sour Chicken",
    tag: "RICE BOWLS",
    description:
      "Treat yourself to our vibrant, mouth-watering Sweet & Sour Chicken. Made with love and packed with authentic flavors, it's a classic that never disappoints. 🍍\n\nWhether you're catching up with friends in our dining room or taking it home to enjoy on the sofa, we've got your cravings sorted.",
    detail: "Served with rice and greens",
    price: "£11.95",
    images: ["/sweet-and-sour-chicken.jpg"],
  },
  {
    name: "Chicken Katsu Curry",
    tag: "SIGNATURE DISH",
    description:
      "The dish that started it all. Golden, panko-breaded chicken breast fried to a perfect crisp, laid over fragrant steamed rice and drenched in our signature Japanese curry sauce — rich, warming and utterly satisfying.\n\nFinished with pickled vegetables and fresh greens, every element of this bowl is made with care. Once you try it, you'll know why it's our most ordered dish.",
    detail: "Served with rice, greens and pickles",
    price: "£12.50",
    images: ["/Chicken Katsu Curry 001.jpg", "/Chicken Katsu Curry 002.jpg"],
  },
  {
    name: "Golden Katsu Curry",
    tag: "SIGNATURE DISH",
    description:
      "Our most-loved dish. A rich, deeply savoury Japanese curry sauce poured over a perfectly crispy panko-breaded cutlet, served alongside steamed rice, pickled vegetables and fresh greens. Choose from chicken, pork or our pumpkin croquette for a vegetarian option.",
    detail: "Available as Chicken Katsu, Pork Katsu or Pumpkin Croquette",
    price: "From £12.00",
    images: ["/708345357_122113591244745440_2199551205051780291_n.jpg"],
  },
  {
    name: "Korean Fried Chicken",
    tag: "SMALL PLATES",
    description:
      "Crispy double-fried chicken tossed in your choice of sauce. Our Sweet & Spicy Gochujang glaze brings the heat with a sticky, bold kick, while the Soy Garlic version is rich, umami and deeply satisfying. Impossible to stop at one.",
    detail: "Choice of Sweet & Spicy (Gochujang) or Soy Garlic",
    price: "£6.50",
    images: ["/702621121_122112095726745440_4742910413460175683_n.jpg"],
  },
  {
    name: "Char Siu Bowl",
    tag: "RICE BOWLS",
    description:
      "Slow-roasted Cantonese BBQ pork glazed in a rich soy, honey and five-spice sauce until caramelised and tender. Served over steamed rice with seasonal greens and a soft-boiled egg. One of our most comforting bowls on the menu.",
    detail: "Served with rice, greens and soft egg",
    price: "£12.00",
    images: ["/703776651_122112695564745440_7702234441131313472_n.jpg"],
  },
  {
    name: "Curry Udon",
    tag: "UDON",
    description:
      "Thick, chewy udon noodles swimming in our signature Japanese curry broth — warming, fragrant and full of depth. Topped with your choice of protein and served with fresh greens. The ultimate comfort noodle dish.",
    detail: "Available with Chicken Katsu, Pork Katsu or Pumpkin Croquette",
    price: "From £12.00",
    images: ["/704147921_122112695576745440_7509673315337575297_n.jpg"],
  },
  {
    name: "Gyoza",
    tag: "SMALL PLATES",
    description:
      "Pan-fried dumplings with a golden, crispy base and a tender steamed top. Filled with your choice of chicken & vegetable, pork or vegetable, and served with a light soy dipping sauce. A perfect starter or side.",
    detail: "Choice of Chicken & Veg, Pork or Vegetable",
    price: "£5.50",
    images: ["/705277047_122113591256745440_2776381173450473019_n.jpg"],
  },
  {
    name: "Crispy Roast Pork Bowl",
    tag: "RICE BOWLS",
    description:
      "Cantonese-style roast pork belly with irresistibly crispy crackling skin and tender, flavourful meat underneath. Served with fragrant steamed rice, seasonal greens and our house sauce. A proper feast in a bowl.",
    detail: "Served with rice and greens",
    price: "£11.50",
    images: ["/706078218_122113362392745440_2640088751417966549_n.jpg"],
  },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <main>
        <section className="relative h-[40vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <Image
              src="/dish-03.jpg"
              alt="Showcase"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <FadeIn className="relative z-10 px-6 pt-16">
            <div className="text-sm tracking-widest text-[#c9a961] mb-6">SHOWCASE</div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-4">
              The Dishes
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A closer look at what makes The 6th Bite special
            </p>
          </FadeIn>
        </section>

        <section className="py-24 bg-[#0a0a0a]">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto space-y-32">
              {dishes.map((dish, index) => (
                <FadeIn key={dish.name} delay={100}>
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {dish.images.length === 1 ? (
                      <div className="relative w-full aspect-square overflow-hidden rounded-sm">
                        <Image
                          src={dish.images[0]}
                          alt={dish.name}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {dish.images.map((src, i) => (
                          <div key={i} className="relative w-full aspect-square overflow-hidden rounded-sm">
                            <Image
                              src={src}
                              alt={`${dish.name} ${i + 1}`}
                              fill
                              className="object-cover transition-transform duration-700 hover:scale-105"
                              sizes="(max-width: 1024px) 50vw, 25vw"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-col justify-center">
                      <div className="text-sm tracking-widest text-[#c9a961] mb-4">
                        {dish.tag}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                        {dish.name}
                      </h2>
                      <div className="space-y-4 mb-6">
                        {dish.description.split("\n\n").map((para, i) => (
                          <p key={i} className="text-white/60 text-lg leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm text-white/40 italic mb-8">
                        {dish.detail}
                      </p>
                      <div className="flex items-center justify-between border-t border-white/10 pt-8">
                        <span className="text-2xl font-light text-[#c9a961]">
                          {dish.price}
                        </span>
                        <Link
                          href="/order"
                          className="px-8 py-3 bg-[#c9a961] text-white text-sm tracking-widest hover:bg-[#b89851] transition-all duration-300"
                        >
                          ORDER NOW
                        </Link>
                      </div>
                    </div>

                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
