import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SLIIT Faculty of Business GPA Calculator',
  description: 'Calculate your SLIIT Business faculty GPA for MBA, Business Administration, Marketing, HR and Accounting programs.',
  keywords: 'SLIIT Business GPA, MBA GPA Calculator, Business Administration GPA, SLIIT Marketing GPA',
};

export default function BusinessFacultyPage() {
  const businessPrograms = [
    {
      name: 'Business Administration',
      description: 'Comprehensive business management education',
      icon: '💼',
      credits: '120 Credits',
      duration: '4 Years'
    },
    {
      name: 'Marketing Management', 
      description: 'Strategic marketing and brand management',
      icon: '📈',
      credits: '120 Credits',
      duration: '4 Years'
    },
    {
      name: 'Human Resource Management',
      description: 'People management and organizational behavior',
      icon: '👥',
      credits: '120 Credits', 
      duration: '4 Years'
    },
    {
      name: 'Accounting & Finance',
      description: 'Financial analysis and accounting principles',
      icon: '💰',
      credits: '120 Credits',
      duration: '4 Years'
    },
    {
      name: 'MBA Programs',
      description: 'Advanced business administration for professionals',
      icon: '🎓',
      credits: '60 Credits',
      duration: '2 Years'
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faculty Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">💼</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Faculty of Business
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Calculate your SLIIT Business faculty GPA with our specialized calculator designed for business programs
          </p>
        </div>

        {/* Custom Calculator Link */}
        <div className="mb-12 text-center">
          <Link 
            href="/#calculator"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Use Custom Calculator for Business
          </Link>
        </div>

        {/* Programs Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Business Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{program.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{program.description}</p>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{program.credits}</span>
                  <span>{program.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Faculty Information */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About SLIIT Business Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-700 mb-4">
                The Faculty of Business at SLIIT offers comprehensive business education with a focus on practical skills and industry relevance. Our programs are designed to prepare students for leadership roles in the global business environment.
              </p>
              <ul className="text-slate-700 space-y-2">
                <li>• Industry-aligned curriculum</li>
                <li>• Experienced faculty members</li>
                <li>• Strong industry partnerships</li>
                <li>• Career development support</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Students</span>
                  <span className="font-bold text-green-600">3,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Programs</span>
                  <span className="font-bold text-green-600">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Faculty</span>
                  <span className="font-bold text-green-600">80+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Industry Partners</span>
                  <span className="font-bold text-green-600">150+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
