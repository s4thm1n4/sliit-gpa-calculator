import Link from 'next/link';

const calculatorLinks = [
  { name: 'Main GPA Calculator', href: '/#calculator' },
  { name: 'Computing Calculator', href: '/faculty/computing' },
  { name: 'Business Calculator', href: '/faculty/business' },
  { name: 'Software Engineering GPA', href: '/faculty/computing/software-engineering' },
];

const resourceLinks = [
  { name: 'Grade Scale Reference', href: '/#grading-scale' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Full Disclaimer', href: '/disclaimer' },
  { name: 'Sitemap', href: '/sitemap.xml' },
];

const socialLinks = [
  { name: 'SLIIT Website', href: 'https://www.sliit.lk' },
  { name: 'SLIIT Facebook', href: 'https://facebook.com/sliit.lk' },
  { name: 'SLIIT LinkedIn', href: 'https://linkedin.com/school/sliit' },
  { name: 'SLIIT YouTube', href: 'https://youtube.com/sliitsl' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-xl font-extrabold text-slate-950">
                S
              </div>
              <div>
                <h3 className="text-2xl font-extrabold">SLIIT GPA Calculator</h3>
                <p className="text-sm text-slate-400">Unofficial academic planning tool</p>
              </div>
            </div>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              An unofficial GPA calculator for supported SLIIT Computing and Business curriculum data.
              Designed for planning; final academic records should be verified with official SLIIT systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-400">Calculators</h4>
              <ul className="mt-4 space-y-3">
                {calculatorLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-400">Resources</h4>
              <ul className="mt-4 space-y-3">
                {resourceLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-400">Official SLIIT</h4>
              <ul className="mt-4 space-y-3">
                {socialLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300 transition-colors hover:text-white hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-amber-700/30 bg-amber-900/20 p-4">
          <h4 className="font-bold text-amber-100">Important Disclaimer</h4>
          <p className="mt-2 text-sm leading-6 text-amber-200">
            <strong>This website is NOT official and is NOT affiliated with Sri Lanka Institute of Information Technology (SLIIT).</strong>
            {' '}This is a personal project created by an individual developer for educational and non-commercial purposes only.
            All GPA calculations are based on publicly available information and should be verified with official SLIIT academic records.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-800 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-400">
            <p>&copy; {currentYear} SLIIT GPA Calculator. All rights reserved.</p>
            <p className="mt-1 text-xs">
              Developed by{' '}
              <a
                href="https://www.seoservicessrilanka.com/"
                target="_blank"
                rel="dofollow"
                className="font-medium text-blue-300 transition-colors hover:text-blue-200"
              >
                Sathmina Dimath Dissanayake
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/disclaimer" className="text-slate-400 transition-colors hover:text-white">
              Full Disclaimer
            </Link>
            <Link href="/sitemap.xml" className="text-slate-400 transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
