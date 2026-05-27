import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <main>
        <section className="relative h-screen flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <Image 
              src="/store-front.jpg"
              alt="The 6th Bite"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="relative z-10 px-6 max-w-5xl">
            <div className="mb-8">
              <div className="inline-block px-6 py-2 border border-[#c9a961]/30 text-[#c9a961] text-sm tracking-widest mb-8">
                ASIAN FUSION COMFORT FOOD
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-tight">
              Asian comfort food in the heart of Douglas
            </h1>
            <p className="text-lg text-white mb-16 max-w-3xl mx-auto leading-relaxed">
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

            <div className="text-sm text-white tracking-wide">
              MONDAY–FRIDAY, 11:30–14:30<br />
              5 PROSPECT HILL, DOUGLAS, IM1 1ES
            </div>
          </div>
        </section>

        <section className="relative py-32 bg-[#faf9f7] overflow-hidden">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-[400px_1fr_400px] gap-16 items-center">
              
              <div className="hidden lg:block">
                <div className="relative w-full aspect-square">
                  <Image 
                    src="/dish-01.jpg"
                    alt="The 6th Bite Dish"
                    fill
                    className="object-cover rounded-sm"
                    sizes="(min-width: 1024px) 400px, 0px"
                  />
                </div>
              </div>

              <div className="text-center px-4">
                <div className="text-sm tracking-widest text-[#c9a961] mb-6">ABOUT US</div>
                <h2 className="text-5xl md:text-7xl font-light text-[#1a1a1a] mb-12 leading-tight">
                  Comfort food, crafted with care
                </h2>
                <p className="text-xl md:text-2xl text-[#4a4a4a] leading-relaxed font-light">
                  A small Asian fusion lunch spot serving comforting, flavour-packed dishes in the heart of Douglas. At The 6th Bite, we bring together Chinese, Japanese and Korean-inspired flavours in a simple, satisfying menu made for busy lunch breaks, casual meetups and takeaway cravings. Expect crispy textures, rich sauces, warm bowls and generous comfort food — prepared fresh and served with care. The 6th Bite was born from a love of Asian comfort food and a desire to bring authentic, satisfying flavours to Douglas. We believe in simple, honest cooking that celebrates the best of Chinese, Japanese, and Korean cuisine. Every dish is prepared fresh daily, using quality ingredients and traditional techniques. Whether you're grabbing a quick lunch or settling in for a relaxed meal, we're here to make your day a little more delicious.
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="relative w-full aspect-square">
                  <Image 
                    src="/dish-02.jpg"
                    alt="The 6th Bite Dish"
                    fill
                    className="object-cover rounded-sm"
                    sizes="(min-width: 1024px) 400px, 0px"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-sm tracking-widest text-[#c9a961] mb-4">OUR FOOD</div>
              <h2 className="text-4xl md:text-5xl font-light text-white">A taste of what&apos;s waiting</h2>
            </div>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
              {[
                "708345357_122113591244745440_2199551205051780291_n.jpg",
                "688824149_122109742010745440_5914503175046393282_n.jpg",
                "689353545_122110716380745440_366540252959685477_n.jpg",
                "694459431_122109752618745440_4497850610344960325_n.jpg",
                "702621121_122112095726745440_4742910413460175683_n.jpg",
                "702621123_122112095756745440_5071284249193951152_n.jpg",
                "702996129_122112095714745440_3128567690296679873_n.jpg",
                "703776651_122112695564745440_7702234441131313472_n.jpg",
                "704147921_122112695576745440_7509673315337575297_n.jpg",
                "705277047_122113591256745440_2776381173450473019_n.jpg",
                "706078218_122113362392745440_2640088751417966549_n.jpg",
              ].map((filename) => (
                <div key={filename} className="break-inside-avoid overflow-hidden">
                  <Image
                    src={`/${filename}`}
                    alt="The 6th Bite dish"
                    width={600}
                    height={600}
                    className="w-full object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
