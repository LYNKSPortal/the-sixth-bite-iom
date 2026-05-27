import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <main>
        <section className="relative h-[40vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <Image 
              src="/dish-01.jpg"
              alt="Order Now"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 px-6 pt-16">
            <div className="text-sm tracking-widest text-[#c9a961] mb-6">ORDER NOW</div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-4">
              Get your food
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Order online for pickup or delivery
            </p>
          </div>
        </section>

        <section className="relative py-32 bg-[#0a0a0a]">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                  How to order
                </h2>
                <p className="text-lg text-white/60">
                  Choose your preferred ordering method below
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-20">
                
                <div className="bg-[#1a1a1a] border border-white/10 p-10 rounded-sm hover:border-[#c9a961]/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-[#c9a961]/10 border border-[#c9a961]/30 mb-6 rounded-sm">
                      <svg className="w-8 h-8 text-[#c9a961]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4">WhatsApp</h3>
                    <p className="text-white/60 mb-8 leading-relaxed">
                      Message us directly on WhatsApp to place your order. Quick and easy!
                    </p>
                    <a 
                      href="https://wa.me/447624488331"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-sm tracking-widest hover:bg-[#20BA5A] transition-all duration-300 rounded-sm w-full justify-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      ORDER VIA WHATSAPP
                    </a>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] border border-white/10 p-10 rounded-sm hover:border-[#c9a961]/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-[#c9a961]/10 border border-[#c9a961]/30 mb-6 rounded-sm">
                      <svg className="w-8 h-8 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4">Call Us</h3>
                    <p className="text-white/60 mb-8 leading-relaxed">
                      Give us a call to place your order over the phone.
                    </p>
                    <a 
                      href="tel:07624488331"
                      className="inline-block px-8 py-4 bg-[#c9a961] text-white text-sm tracking-widest hover:bg-[#b89851] transition-all duration-300 w-full"
                    >
                      CALL 07624 488331
                    </a>
                  </div>
                </div>

              </div>

              <div className="bg-[#1a1a1a] border border-white/10 p-12 rounded-sm text-center">
                <h3 className="text-2xl font-light text-white mb-4">Walk-in orders welcome</h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  You can also visit us in person at 5 Prospect Hill, Douglas to place your order.
                </p>
                <p className="text-sm text-[#c9a961] tracking-wide">
                  MONDAY–FRIDAY, 11:30–14:30
                </p>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
