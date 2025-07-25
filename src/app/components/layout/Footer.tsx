import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SLIIT GPA Calculator</h3>
                <p className="text-slate-400 text-sm">Official & Accurate</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              The most accurate SLIIT GPA calculator built specifically for Sri Lanka Institute of Information Technology students. Calculate your GPA with official curriculum data.
            </p>
            <p className="text-slate-400 text-sm">
              © 2025 SLIIT GPA Calculator. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/faculty/computing" className="text-slate-300 hover:text-white transition-colors">
                  Computing Faculty
                </Link>
              </li>
              <li>
                <Link href="/faculty/business" className="text-slate-300 hover:text-white transition-colors">
                  Business Faculty
                </Link>
              </li>
              <li>
                <Link href="/faculty/engineering" className="text-slate-300 hover:text-white transition-colors">
                  Engineering Faculty
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About SLIIT
                </Link>
              </li>
              <li>
                <Link href="/grading-system" className="text-slate-300 hover:text-white transition-colors">
                  Grading System
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.sliit.lk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Official SLIIT Website
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
