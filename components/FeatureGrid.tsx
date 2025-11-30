import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Japanese Craft",
    description: "Handcrafted items with unique warmth and tradition, made by skilled artisans.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=800&auto=format&fit=crop", // Pottery/Craft
  },
  {
    id: 2,
    title: "Japanese Tea",
    description: "Premium tea leaves grown in the rich nature of Japan, offering a moment of peace.",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=800&auto=format&fit=crop", // Tea
  },
  {
    id: 3,
    title: "Timeless Design",
    description: "Simple and elegant designs that blend seamlessly into your daily life.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop", // Minimalist/Design
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
            Curated Japanese excellence for your lifestyle.
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
