import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer - SLIIT GPA Calculator',
  description: 'Important disclaimer about the unofficial nature of this SLIIT GPA Calculator project.',
  robots: 'index, follow',
};

export default function DisclaimerPage() {
  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">⚠️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Important Disclaimer
          </h1>
          <p className="text-xl text-slate-700">
            Please read this disclaimer carefully before using our GPA calculator
          </p>
        </div>

        {/* Disclaimer Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
            <h2 className="text-2xl font-bold text-center">Unofficial Educational Project</h2>
          </div>
          
          <div className="p-8 space-y-6">
            
            {/* Main Disclaimer */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-amber-800 mb-3">No Official Affiliation</h3>
              <p className="text-amber-700 leading-relaxed">
                <strong>This website and GPA calculator is NOT official and is NOT affiliated, associated, authorized, 
                endorsed by, or in any way officially connected with Sri Lanka Institute of Information Technology (SLIIT), 
                or any of its subsidiaries or affiliates.</strong>
              </p>
            </div>

            {/* Personal Project */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Personal Educational Project</h3>
              <p className="text-blue-700 leading-relaxed">
                This is a personal project created by an individual developer for educational and non-commercial purposes only. 
                The goal is to help SLIIT students calculate their GPA using publicly available grading information.
              </p>
            </div>

            {/* Accuracy Disclaimer */}
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-800 mb-3">No Accuracy Guarantee</h3>
              <p className="text-red-700 leading-relaxed">
                While we strive for accuracy, we cannot guarantee that all calculations are 100% accurate or up-to-date with 
                the latest SLIIT academic regulations. Always verify your GPA calculations with official SLIIT academic records 
                and consult with your faculty academic office for official grades and transcripts.
              </p>
            </div>

            {/* Usage Terms */}
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">Usage Terms</h3>
              <ul className="text-green-700 space-y-2">
                <li>• This tool is provided free of charge for educational purposes</li>
                <li>• No commercial use or redistribution without permission</li>
                <li>• Users are responsible for verifying all calculations</li>
                <li>• We are not liable for any academic decisions based on our calculations</li>
              </ul>
            </div>

            {/* Contact Information - FIXED: Escaped apostrophe */}
            <div className="bg-slate-50 border-l-4 border-slate-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-3">Questions or Concerns?</h3>
              <p className="text-slate-700 leading-relaxed">
                If you have any questions about this disclaimer or concerns about the use of SLIIT-related terminology, 
                please contact us. We respect SLIIT&apos;s intellectual property and will address any legitimate concerns promptly.
              </p>
            </div>

          </div>
        </div>

        {/* CTA Back to Calculator - FIXED: Using Link instead of <a> */}
        <div className="text-center mt-8">
          <Link 
            href="/#calculator" 
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            I Understand - Use Calculator
          </Link>
        </div>

      </div>
    </div>
  );
}
