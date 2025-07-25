import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SLIIT Faculty of Computing GPA Calculator',
  description: 'Calculate your SLIIT Faculty of Computing GPA for Software Engineering, Data Science, IT, Cyber Security and more programs.',
  keywords: 'SLIIT Computing GPA, Software Engineering GPA, Data Science GPA, SLIIT IT GPA Calculator',
};

export default function ComputingFacultyPage() {
  const computingPrograms = [
    {
      name: 'Software Engineering',
      slug: '/faculty/computing/software-engineering',
      description: 'Design, create and maintain software systems',
      icon: '💻',
      color: 'blue'
    },
    {
      name: 'Information Technology',
      slug: '/faculty/computing/information-technology',
      description: 'Technically focused program for IT foundation',
      icon: '🖥️', 
      color: 'green'
    },
    {
      name: 'Data Science',
      slug: '/faculty/computing/data-science',
      description: 'Computer science, statistics, and mathematics',
      icon: '📊',
      color: 'purple'
    },
    // Add more programs...
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faculty Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">💻</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Faculty of Computing
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Specialized GPA calculators for all SLIIT Computing programs with curriculum data and academic planning tools
          </p>
        </div>

        {/* Quick Calculator Link */}
        <div className="mb-12 text-center">
          <Link 
            href="/#calculator"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Use Faculty of Computing Calculator
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {computingPrograms.map((program) => (
            <div key={program.slug} className="group">
              <Link href={program.slug}>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className={`bg-gradient-to-r from-${program.color}-500 to-${program.color}-600 p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{program.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4">{program.description}</p>
                    <span className="text-blue-600 font-bold text-sm group-hover:text-blue-700">
                      Calculate GPA →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
