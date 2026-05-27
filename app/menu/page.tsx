import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <main>
        <section className="relative h-[40vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <Image 
              src="/dish-02.jpg"
              alt="Our Menu"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 px-6 pt-16">
            <div className="text-sm tracking-widest text-[#c9a961] mb-6">OUR MENU</div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-4">
              The 6th Bite
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore our selection of Asian comfort food
            </p>
          </div>
        </section>

        <section className="relative py-32 bg-[#0a0a0a]">
          <div className="w-full px-6 md:px-12 lg:px-20">

            <div className="space-y-20">
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-[#c9a961] mb-8 tracking-wide">RICE BOWLS</h2>
                
                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-8">
                    <h3 className="text-xl text-white font-light mb-3">GOLDEN KATSU CURRY</h3>
                    <p className="text-white/60 italic mb-4">Our signature Japanese curry with rich, savoury flavour. Served with rice, greens and pickles.</p>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex justify-between">
                        <span>Chicken Katsu</span>
                        <span className="text-[#c9a961]">12.50</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pork Katsu</span>
                        <span className="text-[#c9a961]">13.00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pumpkin Croquette</span>
                        <span className="text-[#c9a961]">12.00</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl text-white font-light">SWEET SOUR CHICKEN BOWL</h3>
                      <span className="text-[#c9a961]">11.95</span>
                    </div>
                    <p className="text-white/60 italic">Crispy battered chicken in a tangy sweet & sour sauce, served with rice and greens.</p>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl text-white font-light">CHAR SIU BOWL</h3>
                      <span className="text-[#c9a961]">12.00</span>
                    </div>
                    <p className="text-white/60 italic">Sticky Cantonese BBQ pork in a rich soy glaze, served with rice, greens and a soft egg.</p>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl text-white font-light">TERIYAKI CHICKEN BOWL</h3>
                      <span className="text-[#c9a961]">11.00</span>
                    </div>
                    <p className="text-white/60 italic">Grilled chicken thigh glazed in savoury teriyaki sauce. Served with rice, greens and pickles.</p>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl text-white font-light">BRAISED BEEF BRISKET BOWL</h3>
                      <span className="text-[#c9a961]">13.00</span>
                    </div>
                    <p className="text-white/60 italic">Slow-braised beef brisket in a rich soy-based sauce, served with rice and green.</p>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl text-white font-light">CRISPY ROAST PORK BOWL</h3>
                      <span className="text-[#c9a961]">11.50</span>
                    </div>
                    <p className="text-white/60 italic">Cantonese-style crispy roast pork belly with crackling skin. Served with rice and greens.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light text-[#c9a961] mb-8 tracking-wide">UDON</h2>
                
                <div className="border-b border-white/10 pb-8">
                  <h3 className="text-xl text-white font-light mb-3">CURRY UDON</h3>
                  <p className="text-white/60 italic mb-4">Udon noodles in a rich, savoury Japanese curry, served with greens.</p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex justify-between">
                      <span>Chicken Katsu</span>
                      <span className="text-[#c9a961]">12.50</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pork Katsu</span>
                      <span className="text-[#c9a961]">13.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pumpkin Croquette</span>
                      <span className="text-[#c9a961]">12.00</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light text-[#c9a961] mb-8 tracking-wide">SMALL PLATES</h2>
                
                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-8">
                    <h3 className="text-xl text-white font-light mb-3">KOREAN FRIED CHICKEN</h3>
                    <p className="text-white/60 italic mb-4">Authentic Korean-style fried chicken, tossed in your choice of sauce.</p>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex justify-between">
                        <span>Sweet & Spicy (Gochujang)</span>
                        <span className="text-[#c9a961]">6.50</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Soy Garlic</span>
                        <span className="text-[#c9a961]">6.50</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl text-white font-light">FRIED OYSTERS</h3>
                      <span className="text-[#c9a961]">6.99</span>
                    </div>
                    <p className="text-white/60 italic">Golden crispy oysters finished with rich tonkatsu sauce.</p>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <h3 className="text-xl text-white font-light mb-3">GYOZA</h3>
                    <p className="text-white/60 italic mb-4">Crispy fried dumplings served with a light soy dipping sauce.</p>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex justify-between">
                        <span>Chicken & Vegetable</span>
                        <span className="text-[#c9a961]">5.50</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pork</span>
                        <span className="text-[#c9a961]">5.50</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Vegetable</span>
                        <span className="text-[#c9a961]">5.50</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl text-white font-light">PUMPKIN CROQUETTES</h3>
                      <span className="text-[#c9a961]">4.50</span>
                    </div>
                    <p className="text-white/60 italic">Crispy pumpkin croquettes with a soft, naturally sweet centre.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light text-[#c9a961] mb-8 tracking-wide">SIDES</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-white/70 pb-4 border-b border-white/10">
                    <span>Chips</span>
                    <span className="text-[#c9a961]">3.00</span>
                  </div>
                  <div className="flex justify-between items-center text-white/70 pb-4 border-b border-white/10">
                    <span>Sweet Potato Chips</span>
                    <span className="text-[#c9a961]">4.50</span>
                  </div>
                  <div className="flex justify-between items-center text-white/70 pb-4 border-b border-white/10">
                    <span>Curry Sauce</span>
                    <span className="text-[#c9a961]">2.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
