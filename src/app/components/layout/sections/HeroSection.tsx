import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            SLIIT GPA Calculator
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Calculate your SLIIT GPA with precision using curriculum data and grading scales
          </p>
          
          {/* Description */}
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Accurate and easy-to-use GPA calculator designed specifically for Sri Lanka Institute of Information Technology students. 
            Track your academic progress across all faculties.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#calculator" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Calculate GPA Now
            </Link>
            <Link 
              href="#faculties" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Browse Faculties
            </Link>
          </div>
          
          {/* Features List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">SLIIT Curriculum Data</h3>
              <p className="text-blue-100 text-sm">
                Built with SLIIT course structures and credit systems
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">All Faculties</h3>
              <p className="text-blue-100 text-sm">
                Computing, Business, Engineering, Law, Architecture & more
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-blue-100 text-sm">
                Works perfectly on all devices for SLIIT students on-the-go
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
