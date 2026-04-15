import { Metadata } from 'next';
import CalculatorDashboard from '@/app/components/calculators/CalculatorDashboard';

export const metadata: Metadata = {
  title: 'SLIIT Software Engineering GPA Calculator (Old & New Syllabus)',
  description: 'Calculate your GPA for the SLIIT BSc (Hons) in Software Engineering. This page covers both the new 2025 curriculum and the old 2021 syllabus, career paths, and a detailed module breakdown.',
  alternates: {
    canonical: '/faculty/computing/software-engineering',
  },
};

export default function SoftwareEngineeringPage() {
  return (
    <div className="py-6 md:py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pre-filtered Calculator Section */}
        <section className="mb-16">
          <CalculatorDashboard
            lockedCalculator="computing"
            computingPreselectedProgram="software-engineering"
            title="SLIIT Software Engineering GPA Calculator"
        description="GPA estimates for the SLIIT BSc (Hons) in Software Engineering using supported old and new syllabus data."
          />
        </section>

        {/* SEO Content Section - Redesigned */}
        <section className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-6 md:p-12 space-y-12">

          {/* Section 1: Introduction */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Mastering Your Future: A Deep Dive into SLIIT&apos;s Software Engineering Degree
            </h2>
            <p className="text-lg text-slate-600">
              The Bachelor of Science Honours in Software Engineering at SLIIT is a cornerstone program designed to shape the architects of the digital future. Itâ€™s a systematic, disciplined approach to designing, developing, and maintaining the software that powers our world, blending computer science with engineering and project management.
            </p>
          </div>

          {/* Section 2: Why Choose SE at SLIIT? */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-5xl">ðŸŽ“</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Why Choose Software Engineering at SLIIT?</h3>
                <p className="text-slate-700 leading-relaxed">
                  SLIIT&apos;s program is distinguished by its industry-aligned curriculum, continuously updated to reflect the latest technological advancements. With a strong emphasis on hands-on learning through expansive labs, real-world projects, and a mandatory industry placement, graduates are not just academically qualified but also career-ready from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Career Pathways */}
          <div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Career Pathways: Your Future After Graduation</h2>
              <p className="text-lg text-slate-600 mb-10">
                A degree in Software Engineering from SLIIT opens doors to a vast array of lucrative and impactful career roles across the global tech industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'ðŸ’»', title: 'Software Engineer/Developer', description: 'Design, develop, and test software applications for businesses, consumers, and governments.' },
                { icon: 'ðŸš€', title: 'Full Stack Developer', description: 'Master both front-end (UI) and back-end (server) development to build complete web applications.' },
                { icon: 'ðŸ“±', title: 'Mobile Application Developer', description: 'Specialize in creating innovative applications for iOS and Android platforms.' },
                { icon: 'ðŸŽ¨', title: 'UI/UX Engineer', description: 'Blend technical skill with creative design to build intuitive and enjoyable user experiences.' },
                { icon: 'ðŸ”—', title: 'System Analyst', description: 'Act as the bridge between business problems and technology solutions, optimizing systems and processes.' },
                { icon: 'â˜ï¸', title: 'Cloud & Enterprise Developer', description: 'Develop scalable, resilient applications using cloud platforms like AWS, Azure, and Google Cloud.' },
              ].map((career) => (
                <div key={career.title} className="bg-slate-50/50 rounded-2xl p-6 border border-slate-200 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-3xl">{career.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{career.title}</h4>
                  <p className="text-sm text-slate-600">{career.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Curriculum Evolution */}
          <div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Curriculum Evolution: 2021 vs. 2025</h2>
              <p className="text-lg text-slate-600 mb-10">
                SLIIT constantly refines its curriculum. The 2025 syllabus marks a strategic shift towards modern paradigms, AI integration, and specialized, career-focused modules.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200">
                <h4 className="font-bold text-amber-800 text-xl mb-3">2021 Syllabus Focus</h4>
                <p className="text-amber-700">
                  Focused on foundational principles like Software Process Modeling and traditional frameworks, providing a broad, robust understanding of classic software engineering.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                <h4 className="font-bold text-green-800 text-xl mb-3">2025 Syllabus Focus</h4>
                <p className="text-green-700">
                  Emphasizes modern, hands-on skills in areas like Web/Mobile Tech, Cloud Native Development, and Secure Software Development to meet direct industry demand.
                </p>
              </div>
            </div>
            <div className="mt-8">
                <h4 className="text-xl font-bold text-slate-800 text-center mb-6">Key Module Upgrades</h4>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                        <span className="text-2xl mt-1">1ï¸âƒ£</span>
                        <div>
                            <strong className="text-slate-700">First Year Foundations:</strong>
                            <p className="text-sm text-slate-600">The 2025 syllabus introduces &quot;Data Communication Networks&quot; and a focused &quot;Technical Writing&quot; course early on, emphasizing the networked nature of modern software from day one.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                        <span className="text-2xl mt-1">2ï¸âƒ£</span>
                        <div>
                            <strong className="text-slate-700">Second Year Specialization:</strong>
                            <p className="text-sm text-slate-600">&quot;Artificial Intelligence & Machine Learning&quot; is now a core second-year module, reflecting the universal importance of AI. &quot;Web and Mobile Technologies&quot; is also introduced much earlier.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                        <span className="text-2xl mt-1">ðŸŽ“</span>
                        <div>
                            <strong className="text-slate-700">Final Year Electives:</strong>
                            <p className="text-sm text-slate-600">The 2025 syllabus offers a clearer path to specialization with electives like &quot;Cloud Native Development,&quot; &quot;Deep Learning,&quot; and &quot;Big Data,&quot; allowing students to build a highly marketable skill set.</p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>

          {/* Section 5: Final Word */}
          <div className="text-center bg-slate-800 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">Your Academic Journey Starts Now</h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Your GPA is more than a number; it reflects your dedication and readiness for the professional world. By using this calculator and understanding your curriculum, you&apos;re taking a proactive step toward academic excellence. Stay engaged, collaborate, and make the most of the resources at SLIIT.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
