export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="text-2xl font-serif font-bold text-gray-800 mb-6">
          Futo
        </div>
        
        <div className="flex space-x-6 mb-8">
          <a href="https://www.instagram.com/futotokyo.craft1111/" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            Facebook
          </a>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2025 Futo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
