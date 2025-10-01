'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaculty, setExpandedFaculty] = useState<string | null>(null);

  const facultyMenus = {
    computing: {
      name: 'Computing',
      icon: '💻',
      programs: [
        { name: 'Software Engineering', href: '/faculty/computing/software-engineering' },
        { name: 'Information Technology', href: '/faculty/computing/information-technology' },
        { name: 'Data Science', href: '/faculty/computing/data-science' },
        { name: 'Cyber Security', href: '/faculty/computing/cyber-security' },
        { name: 'Computer Systems & Network', href: '/faculty/computing/computer-systems-network' },
        { name: 'Information Systems', href: '/faculty/computing/information-systems' },
        { name: 'Interactive Media', href: '/faculty/computing/interactive-media' }
      ]
    },
    business: {
      name: 'Business',
      icon: '💼',
      programs: [
        { name: 'Business Administration', href: '/faculty/business/business-administration' },
        { name: 'Marketing Management', href: '/faculty/business/marketing-management' },
        { name: 'Human Resource Management', href: '/faculty/business/hr-management' },
        { name: 'Accounting & Finance', href: '/faculty/business/accounting-finance' },
        { name: 'MBA Programs', href: '/faculty/business/mba' }
      ]
    },
    engineering: {
      name: 'Engineering',
      icon: '⚙️',
      programs: [
        { name: 'Civil Engineering', href: '/faculty/engineering/civil' },
        { name: 'Electrical Engineering', href: '/faculty/engineering/electrical' },
        { name: 'Mechanical Engineering', href: '/faculty/engineering/mechanical' },
        { name: 'Electronic Engineering', href: '/faculty/engineering/electronic' }
      ]
    },
    law: {
      name: 'Law',
      icon: '⚖️',
      programs: [
        { name: 'LLB Honours', href: '/faculty/law/llb-honours' }
      ]
    },
    architecture: {
      name: 'Architecture',
      icon: '🏗️',
      programs: [
        { name: 'Architecture', href: '/faculty/architecture/architecture' },
        { name: 'Quantity Surveying', href: '/faculty/architecture/quantity-surveying' }
      ]
    },
    humanities: {
      name: 'Humanities & Sciences',
      icon: '📚',
      programs: [
        { name: 'English Language', href: '/faculty/humanities/english-language' },
        { name: 'Psychology', href: '/faculty/humanities/psychology' },
        { name: 'Mass Communication', href: '/faculty/humanities/mass-communication' }
      ]
    },
    hospitality: {
      name: 'Hospitality & Culinary',
      icon: '🍽️',
      programs: [
        { name: 'Hotel Management', href: '/faculty/hospitality/hotel-management' },
        { name: 'Culinary Arts', href: '/faculty/hospitality/culinary-arts' }
      ]
    },
    graduate: {
      name: 'Graduate Studies',
      icon: '🎓',
      programs: [
        { name: 'MBA Programs', href: '/faculty/graduate/mba' },
        { name: 'MSc Programs', href: '/faculty/graduate/msc-programs' },
        { name: 'PhD Programs', href: '/faculty/graduate/phd-programs' }
      ]
    }
  };

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
              <p className="text-xs text-slate-500">Accurate & Trusted</p>
            </div>
          </Link>

          {/* Desktop Navigation with Fixed Hover Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors px-3 py-2"
            >
              Home
            </Link>

            {/* Faculty Dropdowns - CSS Only Approach */}
            {Object.entries(facultyMenus).map(([key, faculty]) => (
              <div 
                key={key}
                className="relative group"
              >
                <Link
                  href={`/faculty/${key}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg group-hover:bg-blue-50"
                >
                  <span>{faculty.icon}</span>
                  <span>{faculty.name}</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Fixed Dropdown Menu */}
                <div className="absolute left-0 top-full w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {/* Faculty Main Link */}
                  <Link
                    href={`/faculty/${key}`}
                    className="block px-5 py-3 text-sm font-bold text-slate-800 hover:bg-blue-50 border-b border-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{faculty.icon}</span>
                      <div>
                        <div className="font-bold">Faculty of {faculty.name}</div>
                        <div className="text-xs text-slate-500 font-normal">View all programs</div>
                      </div>
                    </div>
                  </Link>
                  
                  {/* Program Links */}
                  <div className="py-2">
                    <div className="px-5 py-2">
                      <div className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Programs</div>
                    </div>
                    {faculty.programs.map((program) => (
                      <Link
                        key={program.href}
                        href={program.href}
                        className="block px-5 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
                          {program.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Quick Calculator Link */}
                  <div className="border-t border-slate-100 px-5 py-3 mt-2">
                    <Link
                      href="/#calculator"
                      className="inline-flex items-center gap-2 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all"
                    >
                      <span>🧮</span>
                      <span>Use Calculator</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <a 
              href="https://www.seoservicessrilanka.com/" 
              target="_blank"
              rel="dofollow"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors px-3 py-2"
            >
              About
            </a>

            <Link 
              href="/#calculator" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg"
            >
              Calculate GPA
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-slate-600 mb-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-slate-600 mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Fixed Mobile Menu with Proper Scrolling */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40 top-16"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto">
              <div className="py-4 space-y-2">
                
                <Link 
                  href="/" 
                  className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors mx-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🏠 Home
                </Link>
                
                {/* Accordion Faculty Sections */}
                {Object.entries(facultyMenus).map(([key, faculty]) => (
                  <div key={key} className="mx-4">
                    <div className="space-y-1">
                      {/* Faculty Header - Clickable */}
                      <button
                        onClick={() => setExpandedFaculty(expandedFaculty === key ? null : key)}
                        className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-bold transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{faculty.icon}</span>
                          <span>Faculty of {faculty.name}</span>
                        </div>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${expandedFaculty === key ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Faculty Main Link */}
                      <Link 
                        href={`/faculty/${key}`}
                        className="block px-4 py-2 ml-8 text-sm text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        → View All {faculty.name} Programs
                      </Link>
                      
                      {/* Collapsible Program Links */}
                      {expandedFaculty === key && (
                        <div className="ml-12 space-y-1 pl-4 border-l-2 border-slate-100">
                          {faculty.programs.map((program) => (
                            <Link
                              key={program.href}
                              href={program.href}
                              className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {program.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                <Link 
                  href="/about" 
                  className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors mx-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ℹ️ About
                </Link>

                {/* Mobile Calculator Button */}
                <div className="pt-4 px-4 pb-8">
                  <Link 
                    href="/#calculator" 
                    className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center px-4 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🧮 Calculate Your GPA
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
