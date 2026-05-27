import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-[#c9a961] border-t border-[#b89851]">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <Link href="/" className="inline-block mb-6">
            <Image 
              src="/logos/dark-version-v2.png" 
              alt="The 6th Bite" 
              width={250} 
              height={84}
              className="w-[250px] h-auto mx-auto"
            />
          </Link>
          <p className="text-black/70 mb-2 text-sm tracking-wide">
            ASIAN FUSION COMFORT FOOD IN DOUGLAS
          </p>
          <p className="text-black/60 text-sm">
            Chinese, Japanese and Korean-inspired dishes for dine-in and takeaway.
          </p>
          <div className="mt-8 pt-8 border-t border-black/20">
            <p className="text-black/50 text-xs tracking-wide">
              © 2026 THE 6TH BITE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
