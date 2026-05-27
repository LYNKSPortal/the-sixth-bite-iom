import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logos/light-version.png" 
              alt="The 6th Bite" 
              width={200} 
              height={67}
              className="w-[200px] h-auto"
              priority
            />
          </Link>
          <div className="hidden md:flex gap-8 text-sm tracking-wide">
            <Link href="/about" className="text-white/70 hover:text-white transition-colors">ABOUT</Link>
            <Link href="/menu" className="text-white/70 hover:text-white transition-colors">MENU</Link>
            <Link href="/visit" className="text-white/70 hover:text-white transition-colors">VISIT</Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          
          <div className="relative z-10 px-6 max-w-5xl">
            <div className="mb-8">
              <div className="inline-block px-6 py-2 border border-[#c9a961]/30 text-[#c9a961] text-sm tracking-widest mb-8">
                ASIAN FUSION COMFORT FOOD
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-8">
              The 6th Bite
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
              Asian comfort food in the heart of Douglas.
            </p>
            <p className="text-lg text-white/60 mb-16 max-w-3xl mx-auto leading-relaxed">
              Rice bowls, noodles, curries, warm sides and drinks inspired by Chinese, Japanese and Korean flavours — made for dine-in or takeaway.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/menu" 
                className="px-10 py-4 bg-[#c9a961] text-white text-sm tracking-widest hover:bg-[#b89851] transition-all duration-300"
              >
                VIEW MENU
              </Link>
              <Link 
                href="/visit" 
                className="px-10 py-4 border border-white/30 text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                FIND US
              </Link>
            </div>

            <div className="text-sm text-white/50 tracking-wide">
              MONDAY–FRIDAY, 11:30–14:30<br />
              5 PROSPECT HILL, DOUGLAS, IM1 1ES
            </div>
          </div>
        </section>

        <section className="relative py-32 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/about" className="group relative bg-[#1a1a1a] border border-white/10 p-12 hover:border-[#c9a961]/50 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-block p-4 bg-[#c9a961]/10 border border-[#c9a961]/30 mb-6">
                    <svg className="w-8 h-8 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#c9a961] transition-colors">About Us</h3>
                  <p className="text-white/60">Learn about our story and passion for Asian comfort food.</p>
                </div>
              </Link>

              <Link href="/menu" className="group relative bg-[#1a1a1a] border border-white/10 p-12 hover:border-[#c9a961]/50 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-block p-4 bg-[#c9a961]/10 border border-[#c9a961]/30 mb-6">
                    <svg className="w-8 h-8 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#c9a961] transition-colors">Our Menu</h3>
                  <p className="text-white/60">Explore our selection of rice bowls, udon, and small plates.</p>
                </div>
              </Link>

              <Link href="/visit" className="group relative bg-[#1a1a1a] border border-white/10 p-12 hover:border-[#c9a961]/50 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-block p-4 bg-[#c9a961]/10 border border-[#c9a961]/30 mb-6">
                    <svg className="w-8 h-8 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#c9a961] transition-colors">Visit Us</h3>
                  <p className="text-white/60">Find our location, hours, and contact information.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <footer className="relative py-16 bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h3 className="text-3xl font-light tracking-wider text-white mb-6">THE 6TH BITE</h3>
              <p className="text-white/50 mb-2 text-sm tracking-wide">
                ASIAN FUSION COMFORT FOOD IN DOUGLAS
              </p>
              <p className="text-white/40 text-sm">
                Chinese, Japanese and Korean-inspired dishes for dine-in and takeaway.
              </p>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/30 text-xs tracking-wide">
                  © 2026 THE 6TH BITE. ALL RIGHTS RESERVED.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

                <h3 className="text-2xl md:text-3xl font-light text-[#c9a961] mb-8 tracking-wide">RICE BOWLS</h3>
                
                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-8">
                    <h4 className="text-xl text-white font-light mb-3">GOLDEN KATSU CURRY</h4>
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
                      <h4 className="text-xl text-white font-light">SWEET SOUR CHICKEN BOWL</h4>
                      <span className="text-[#c9a961]">11.95</span>
                    </div>
                    <p className="text-white/60 italic">Crispy battered chicken in a tangy sweet & sour sauce, served with rice and greens.</p>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl text-white font-light">CHAR SIU BOWL</h4>
                      <span className="text-[#c9a961]">12.00</span>
                    </div>
                    <p className="text-white/60 italic">Sticky Cantonese BBQ pork in a rich soy glaze, served with rice, greens and a soft egg.</p>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl text-white font-light">TERIYAKI CHICKEN BOWL</h4>
                      <span className="text-[#c9a961]">11.00</span>
                    </div>
                    <p className="text-white/60 italic">Grilled chicken thigh glazed in savoury teriyaki sauce. Served with rice, greens and pickles.</p>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl text-white font-light">BRAISED BEEF BRISKET BOWL</h4>
                      <span className="text-[#c9a961]">13.00</span>
                    </div>
                    <p className="text-white/60 italic">Slow-braised beef brisket in a rich soy-based sauce, served with rice and green.</p>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl text-white font-light">CRISPY ROAST PORK BOWL</h4>
                      <span className="text-[#c9a961]">11.50</span>
                    </div>
                    <p className="text-white/60 italic">Cantonese-style crispy roast pork belly with crackling skin. Served with rice and greens.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-[#c9a961] mb-8 tracking-wide">UDON</h3>
                
                <div className="border-b border-white/10 pb-8">
                  <h4 className="text-xl text-white font-light mb-3">CURRY UDON</h4>
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
                <h3 className="text-2xl md:text-3xl font-light text-[#c9a961] mb-8 tracking-wide">SMALL PLATES</h3>
                
                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-8">
                    <h4 className="text-xl text-white font-light mb-3">KOREAN FRIED CHICKEN</h4>
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
                      <h4 className="text-xl text-white font-light">FRIED OYSTERS</h4>
                      <span className="text-[#c9a961]">6.99</span>
                    </div>
                    <p className="text-white/60 italic">Golden crispy oysters finished with rich tonkatsu sauce.</p>
                  </div>

                  <div className="border-b border-white/10 pb-8">
                    <h4 className="text-xl text-white font-light mb-3">GYOZA</h4>
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
                      <h4 className="text-xl text-white font-light">PUMPKIN CROQUETTES</h4>
                      <span className="text-[#c9a961]">4.50</span>
                    </div>
                    <p className="text-white/60 italic">Crispy pumpkin croquettes with a soft, naturally sweet centre.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-[#c9a961] mb-8 tracking-wide">SIDES</h3>
                
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

        <section className="relative py-32 bg-gradient-to-br from-[#c9a961] to-[#b89851] text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Lunch in Douglas, sorted.
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Dine in with us or grab it to go.
            </p>
            <a 
              href="https://maps.google.com/?q=5+Prospect+Hill,+Douglas,+IM1+1ES" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-[#1a1a1a] text-sm tracking-widest hover:bg-[#f5f5f5] transition-all duration-300"
            >
              GET DIRECTIONS
            </a>
          </div>
        </section>

        <section id="visit" className="relative py-32 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <div className="text-sm tracking-widest text-[#c9a961] mb-6">VISIT US</div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Find The 6th Bite
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center md:text-left">
                <div className="inline-block p-4 bg-[#c9a961]/10 border border-[#c9a961]/30 mb-6">
                  <svg className="w-6 h-6 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white mb-4 tracking-wide">ADDRESS</h3>
                <p className="text-white/60 leading-relaxed">
                  5 Prospect Hill<br />
                  Douglas<br />
                  Isle of Man<br />
                  IM1 1ES
                </p>
              </div>

              <div className="text-center md:text-left">
                <div className="inline-block p-4 bg-[#c9a961]/10 border border-[#c9a961]/30 mb-6">
                  <svg className="w-6 h-6 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white mb-4 tracking-wide">OPENING HOURS</h3>
                <p className="text-white/60 leading-relaxed">
                  Monday–Friday<br />
                  11:30–14:30
                </p>
              </div>

              <div className="text-center md:text-left">
                <div className="inline-block p-4 bg-[#c9a961]/10 border border-[#c9a961]/30 mb-6">
                  <svg className="w-6 h-6 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white mb-4 tracking-wide">CONTACT</h3>
                <p className="text-white/60 leading-relaxed">
                  <a href="tel:07624488331" className="hover:text-[#c9a961] transition-colors">
                    07624 488331
                  </a>
                  <br />
                  <a href="mailto:contact@thesixthbite.im" className="hover:text-[#c9a961] transition-colors">
                    contact@thesixthbite.im
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative py-16 bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h3 className="text-3xl font-light tracking-wider text-white mb-6">THE 6TH BITE</h3>
              <p className="text-white/50 mb-2 text-sm tracking-wide">
                ASIAN FUSION COMFORT FOOD IN DOUGLAS
              </p>
              <p className="text-white/40 text-sm">
                Chinese, Japanese and Korean-inspired dishes for dine-in and takeaway.
              </p>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/30 text-xs tracking-wide">
                  © 2026 THE 6TH BITE. ALL RIGHTS RESERVED.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
