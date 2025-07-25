import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">SLIIT GPA Calculator</h1>
              <p className="text-xs text-slate-500">Official & Accurate</p>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/faculty/computing" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Computing
            </Link>
            <Link 
              href="/faculty/business" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Business
            </Link>
            <Link 
              href="/faculty/engineering" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Engineering
            </Link>
            <Link 
              href="/about" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-4 h-0.5 bg-slate-600 mb-1"></span>
              <span className="block w-4 h-0.5 bg-slate-600 mb-1"></span>
              <span className="block w-4 h-0.5 bg-slate-600"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
