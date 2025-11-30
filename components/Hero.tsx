import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#2C2C2C]">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/nanbutetsubin.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay to ensure text readability and warm tone */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-md mb-6 tracking-wide leading-tight">
          Bringing Beautiful<br className="md:hidden" /> Warmth to Life.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 font-light tracking-wider drop-shadow-sm">
          Simple designs with elegance and warmth,<br className="md:hidden" /> curated from Japan.
        </p>
        
        <Link 
          href="#products" 
          className="inline-block bg-white/90 hover:bg-white text-gray-800 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 tracking-widest"
        >
          View Collection
        </Link>
      </div>
    </section>
  );
}
