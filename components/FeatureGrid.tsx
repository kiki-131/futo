import Image from "next/image";

const features = [
  {
    id: 1,
    title: "ハンドクラフト雑貨",
    description: "職人の手仕事が光る、世界に一つだけの温もりある雑貨たち。",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "オーガニックリネン",
    description: "肌に優しく、使うほどに馴染む上質なリネン素材のファブリック。",
    image: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "ウッドインテリア",
    description: "天然木の風合いを活かした、シンプルで飽きのこない家具。",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
  },
];

export default function FeatureGrid() {
  return (
    <section id="products" className="py-20 bg-[#F9F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Featured Items</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            日々の暮らしを彩る、厳選されたアイテムをご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                {/* Using standard img tag for simplicity in this example, but Next.js Image is recommended for production */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
