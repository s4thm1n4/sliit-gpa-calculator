import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    faculties: {
      title: 'SLIIT Faculties',
      icon: '🏫',
      links: [
        { name: 'Faculty of Computing', href: '/faculty/computing', icon: '💻' },
        { name: 'Faculty of Business', href: '/faculty/business', icon: '💼' },
        { name: 'Faculty of Engineering', href: '/faculty/engineering', icon: '⚙️' },
        { name: 'Faculty of Law', href: '/faculty/law', icon: '⚖️' },
        { name: 'Faculty of Architecture', href: '/faculty/architecture', icon: '🏗️' },
        { name: 'Humanities & Sciences', href: '/faculty/humanities', icon: '📚' }
      ]
    },
    programs: {
      title: 'Popular Programs',
      icon: '🎓',
      links: [
        { name: 'Software Engineering', href: '/faculty/computing/software-engineering', badge: 'Popular' },
        { name: 'Data Science', href: '/faculty/computing/data-science', badge: 'Trending' },
        { name: 'Business Administration', href: '/faculty/business/business-administration', badge: null },
        { name: 'Civil Engineering', href: '/faculty/engineering/civil', badge: null },
        { name: 'MBA Programs', href: '/faculty/business/mba', badge: 'Graduate' },
        { name: 'Cyber Security', href: '/faculty/computing/cyber-security', badge: 'Hot' }
      ]
    },
    tools: {
      title: 'GPA Tools',
      icon: '🧮',
      links: [
        { name: 'GPA Calculator', href: '/#calculator', icon: '🔢' },
        { name: 'Grade Scale Guide', href: '/grading-system', icon: '📊' },
        { name: 'Credit System Info', href: '/credit-system', icon: '📚' },
        { name: 'Academic Planning', href: '/academic-planning', icon: '📅' },
        { name: 'Semester Tracker', href: '/semester-tracker', icon: '📈' },
        { name: 'Graduation Calculator', href: '/graduation-calculator', icon: '🎯' }
      ]
    },
    resources: {
      title: 'Resources & Support',
      icon: '📖',
      links: [
        { name: 'How to Calculate GPA', href: '/how-to-calculate', icon: '❓' },
        { name: 'SLIIT Academic Calendar', href: '/academic-calendar', icon: '📅' },
        { name: 'Student Handbook', href: '/student-handbook', icon: '📘' },
        { name: 'Academic Regulations', href: '/academic-regulations', icon: '📋' },
        { name: 'Contact Academic Office', href: '/contact-academic', icon: '📞' },
        { name: 'Technical Support', href: '/support', icon: '🔧' }
      ]
    }
  };

  const socialLinks = [
    { name: 'SLIIT Website', href: 'https://www.sliit.lk', icon: '🌐', external: true },
    { name: 'SLIIT Facebook', href: 'https://facebook.com/sliit.lk', icon: '📘', external: true },
    { name: 'SLIIT LinkedIn', href: 'https://linkedin.com/school/sliit', icon: '💼', external: true },
    { name: 'SLIIT YouTube', href: 'https://youtube.com/sliitsl', icon: '📺', external: true }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Footer Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl font-bold">S</span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">SLIIT GPA Calculator</h3>
              <p className="text-slate-400 text-sm">Your trusted academic companion</p>
            </div>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The most comprehensive GPA calculator designed specifically for Sri Lanka Institute of Information Technology students. 
            Calculate, track, and plan your academic journey with confidence.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Faculty Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">{footerSections.faculties.icon}</span>
              <h4 className="text-lg font-bold text-white">{footerSections.faculties.title}</h4>
            </div>
            <ul className="space-y-3">
              {footerSections.faculties.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <span className="text-sm group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="text-sm hover:underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">{footerSections.programs.icon}</span>
              <h4 className="text-lg font-bold text-white">{footerSections.programs.title}</h4>
            </div>
            <ul className="space-y-3">
              {footerSections.programs.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="flex items-center justify-between text-slate-300 hover:text-white transition-colors group"
                  >
                    <span className="text-sm hover:underline">{link.name}</span>
                    {link.badge && (
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ml-2 ${
                        link.badge === 'Popular' ? 'bg-green-500/20 text-green-300' :
                        link.badge === 'Trending' ? 'bg-purple-500/20 text-purple-300' :
                        link.badge === 'Graduate' ? 'bg-blue-500/20 text-blue-300' :
                        link.badge === 'Hot' ? 'bg-red-500/20 text-red-300' :
                        'bg-slate-500/20 text-slate-300'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">{footerSections.tools.icon}</span>
              <h4 className="text-lg font-bold text-white">{footerSections.tools.title}</h4>
            </div>
            <ul className="space-y-3">
              {footerSections.tools.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <span className="text-sm group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="text-sm hover:underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">{footerSections.resources.icon}</span>
              <h4 className="text-lg font-bold text-white">{footerSections.resources.title}</h4>
            </div>
            <ul className="space-y-3">
              {footerSections.resources.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <span className="text-sm group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="text-sm hover:underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Calculate Your GPA?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Use our comprehensive calculator with official SLIIT curriculum data and grading scales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#calculator" 
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🧮 Calculate GPA Now
            </Link>
            <Link 
              href="/faculty/computing" 
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              💻 Browse Faculties
            </Link>
          </div>
        </div>

        {/* Social Links & SLIIT Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* SLIIT Quick Stats */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>📊</span>
              SLIIT at a Glance
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">13,000+</div>
                <div className="text-xs text-slate-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">500+</div>
                <div className="text-xs text-slate-400">Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">8</div>
                <div className="text-xs text-slate-400">Faculties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">50+</div>
                <div className="text-xs text-slate-400">Programs</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>🌐</span>
              Connect with SLIIT
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target={social.external ? "_blank" : "_self"}
                  rel={social.external ? "noopener noreferrer" : ""}
                  className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
                >
                  <span className="text-sm group-hover:scale-110 transition-transform">{social.icon}</span>
                  <span className="text-sm text-slate-300 group-hover:text-white">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom with Enhanced Disclaimer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {/* Prominent Disclaimer Section */}
          <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <span className="text-amber-400 text-lg">⚠️</span>
              </div>
              <div className="text-sm text-amber-200">
                <h4 className="font-bold text-amber-100 mb-2">Important Disclaimer</h4>
                <p className="leading-relaxed">
                  <strong>This website is NOT official and is NOT affiliated with Sri Lanka Institute of Information Technology (SLIIT).</strong> 
                  This is a personal project created by an individual developer for educational and non-commercial purposes only. 
                  All GPA calculations are based on publicly available information and should be verified with official SLIIT academic records.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400 text-center md:text-left">
              <p className="mb-1">
                © {currentYear} SLIIT GPA Calculator. All rights reserved.
              </p>
              <p className="text-xs">
                <span className="text-amber-300">⚠️ Unofficial Project</span> • 
                Personal Educational Tool • 
                <span className="text-slate-300">Not affiliated with SLIIT administration</span>
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/disclaimer" className="text-slate-400 hover:text-amber-300 transition-colors font-medium">
                Full Disclaimer
              </Link>
              <Link href="/sitemap" className="text-slate-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
