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
    image: "/sweet-and-sour-chicken.jpg",
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

                    <div className="relative w-full aspect-square overflow-hidden rounded-sm">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

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
