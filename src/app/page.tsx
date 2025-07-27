'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getAllSLIITFaculties } from './data/faculty-programs';
import HeroSection from './components/layout/sections/HeroSection';
import FacultyCard from './components/ui/FacultyCard';
import FocCalculator from '@/app/components/calculators/FocCalculator'; 
import { sliitGradeScale } from './data/grades';

// SEO Content Data
const faqData = [
    {
      question: "What Counts as a “Good” GPA at SLIIT?",
      answer: "A cumulative GPA of 3.0 is generally competitive; 3.7+ often secures Dean’s List and First-Class Honours consideration."
    },
    {
      question: "How Do I Convert Letter Grades to Numerical Points Quickly?",
      answer: "Use the built-in conversion table above, or enter the letter in our SLIIT GPA Calculator to auto-populate the grade-point field."
    },
    {
      question: "Can I Calculate Semester GPA Separately From CGPA?",
      answer: "Yes. Select “Semester” mode, type module names, credit hours, and grades; the tool outputs both Semester GPA and running Cumulative GPA."
    },
    {
        question: "Does SLIIT Use Weighted GPA?",
        answer: "For final honours, SLIIT weights each academic year differently (e.g., 0%, 20%, 30%, 50% for Computing)."
    },
    {
        question: "How Do Incomplete or Withdrawn Fail Grades Affect My GPA?",
        answer: "Incomplete (IC): no effect until the grade is resolved. Withdrawn Fail (WF): counts as 0.0 grade points and drags GPA downward—plan withdrawals before census."
    },
    {
        question: "Are AP/IB or External Credits Included?",
        answer: "Only modules recorded on your official SLIIT Transcript with credit points contribute to CGPA; advanced-standing credits transfer as “Credit Awarded” and carry no grade points."
    },
     {
      question: "How Many Credit Hours Should I Take to Boost GPA?",
      answer: "Lightening your course load (e.g., 15 credits instead of 18) can improve study habits and raise average scores—quality outweighs quantity."
    },
    {
      question: "Where Can I See My Official GPA?",
      answer: "Check Student System > Academic History or request a stamped Academic Transcript from the Registrar’s Office."
    },
    {
      question: "Can I Recalculate After Repeats?",
      answer: "Yes. Once you repeat a module, the higher grade replaces the earlier attempt in CGPA calculations, but both appear on the transcript."
    }
  ];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the SLIIT GPA Calculator convert percentage marks to letter grades?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It applies SLIIT’s official grading scale (e.g., 90–100 = A+, 80–89 = A) then maps each letter to grade points before calculating GPA."
      }
    },
    {
      "@type": "Question",
      "name": "Can I input lab credit points separately from lecture units?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Each lab, studio or lecture carries its own credit value—enter them as separate rows so the calculator multiplies each grade by its specific credit load."
      }
    },
    {
      "@type": "Question",
      "name": "Does the tool support weighted GPA for Advanced Placement (AP) classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SLIIT does not weight AP/IB courses; the calculator treats them as standard modules unless your faculty applies extra weighting."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to my cumulative GPA if I receive an Incomplete grade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Incomplete (IC) modules are excluded until a final letter grade is recorded, preventing temporary GPA drops."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a way to model grade improvement for scholarship applications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the 'What-If' scenario feature: adjust future grades to see projected CGPA and eligibility for scholarships requiring minimum GPA thresholds."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate SGPA (Semester GPA) versus CGPA (Cumulative GPA)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Select 'Semester' mode for SGPA or 'Cumulative' mode for CGPA; the calculator runs the correct formula for each."
      }
    },
    {
      "@type": "Question",
      "name": "Can the calculator process modules from Western Sydney University twinning programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Enter the module’s credit points and letter grade; the calculator will include them in your SLIIT GPA provided they appear on your transcript."
      }
    },
    {
      "@type": "Question",
      "name": "How are Withdrawn-Without-Penalty courses reflected in academic metrics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Withdrawn-Without-Penalty entries remove the module’s credits from attempted totals, so they do not affect GPA."
      }
    },
    {
      "@type": "Question",
      "name": "Does the GPA Calculator align with SLIIT’s Assessment Policy and Examinations Board thresholds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The grading table and pass criteria come directly from SLIIT’s latest Assessment Policy documents to ensure accuracy."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find official results before entering data into the calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Log in to the Student System, navigate to Academic History or ACORN, and copy the letter grades and credit points into the calculator."
      }
    }
  ]
};

// Accordion Component for the FAQ section
const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-slate-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left py-4 px-1"
        >
          <h3 className="text-md font-semibold text-slate-800">{question}</h3>
          <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-1 pb-4 text-slate-600">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    );
};

export default function Home() {
  const faculties = getAllSLIITFaculties();

  return (
    <div className="min-h-screen">
      <Head>
        <title>SLIIT GPA Calculator - Calculate Your GPA Instantly</title>
        <meta name="description" content="The most accurate and easy-to-use SLIIT GPA calculator for all faculties including Computing, Business, and Engineering. Calculate Semester GPA, CGPA, and WGPA with the latest curriculum data." />
        <meta name="keywords" content="SLIIT GPA calculator, GPA calculator Sri Lanka, SLIIT, calculate GPA, SLIIT Engineering GPA, SLIIT Business GPA, SLIIT Computing GPA, WGPA calculator" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </Head>
      
      <HeroSection />

      <section id="calculator" className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              SLIIT GPA Calculator
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Choose your calculator type and calculate your SLIIT GPA with precision
            </p>
          </div>
          
          <FocCalculator />

        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              SLIIT Grading Scale Reference
            </h2>
            <p className="text-slate-600">
              Standard grading scale used across all SLIIT faculties
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
              <h3 className="text-xl font-bold text-center">Grade Point Scale</h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {sliitGradeScale.map(grade => (
                  <div key={grade.grade} className="flex justify-between items-center py-3 px-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl hover:from-slate-100 hover:to-blue-100 transition-all duration-200 border border-slate-200">
                    <span className="font-bold text-slate-800 text-lg">{grade.grade}</span>
                    <span className="text-slate-600 font-bold">{grade.gpa.toFixed(1)}</span>
                    <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded">{grade.range}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200">
                <div className="text-center">
                  <div className="font-bold text-slate-700 mb-2 flex items-center justify-center gap-2">
                    <span className="text-green-500">✅</span>
                    Pass Requirement
                  </div>
                  <div className="text-sm text-slate-600">
                    Minimum &quot;C&quot; grade (2.0 GPA) required. 80% attendance mandatory.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faculties" className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              SLIIT Faculty Programs
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Explore specialized calculators and information for each SLIIT faculty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {faculties.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              About Sri Lanka Institute of Information Technology
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Established in 1999, SLIIT is the largest degree awarding institute in Sri Lanka
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg border border-slate-200">
                <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">13,000+</div>
                <div className="text-slate-700 font-bold text-sm md:text-base">Students</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg border border-slate-200">
                <div className="text-2xl md:text-4xl font-bold text-cyan-600 mb-2">500+</div>
                <div className="text-slate-700 font-bold text-sm md:text-base">Academic Staff</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg border border-slate-200">
                <div className="text-2xl md:text-4xl font-bold text-teal-600 mb-2">8</div>
                <div className="text-slate-700 font-bold text-sm md:text-base">Faculties</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg border border-slate-200">
                <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-slate-700 font-bold text-sm md:text-base">Programs</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
              SLIIT offers a wide range of undergraduate and postgraduate programs across multiple faculties. 
              Our GPA calculator helps SLIIT students track their academic performance using the university&apos;s 
              grading system and credit structures. Whether you&apos;re in Computing, Business, Engineering, or any 
              other faculty, calculate your GPA with confidence using our specialized tools.
            </p>
          </div>
           <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
                What Is the SLIIT GPA Calculator and Why Should You Care?
              </h2>
              <p className="text-slate-700 leading-relaxed text-center">
                The SLIIT GPA Calculator is a purpose-built tool that converts your letter grades and credit points into a precise Grade Point Average (GPA)—the metric SLIIT uses to judge academic performance, honours eligibility and scholarship candidacy. Whether you study Computing, Business, Engineering or Humanities, a clear GPA snapshot guides time management, course selection and graduate-program applications.
              </p>
            </div>
            <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">How Does SLIIT Actually Calculate GPA?</h2>
                <p className="text-slate-700 leading-relaxed text-center mb-6">
                Short answer: each letter grade carries a numerical value (A+ = 4.0, A = 4.0, etc.). Multiply that value by each module’s credit load, add the results, then divide by total attempted credits. SLIIT requires a minimum C (2.0) per module for credit to count toward your degree.
                </p>
            </div>
            <div className="mb-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6">Why Does GPA Matter at SLIIT?</h2>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">🏆</span>
                        <div>
                            <h4 className="font-bold text-slate-800">Honours & Distinction</h4>
                            <p className="text-slate-600">Weighted GPA (WGPA) decides First-Class, Second-Upper or Distinction classifications.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1">💼</span>
                        <div>
                            <h4 className="font-bold text-slate-800">Scholarships & Internships</h4>
                            <p className="text-slate-600">Many merit awards and tech placements set minimum cumulative GPA thresholds (often 3.0+).</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-purple-500 mt-1">🎓</span>
                        <div>
                            <h4 className="font-bold text-slate-800">Graduate Admissions</h4>
                            <p className="text-slate-600">Local and global MSc/MBA programs convert your CGPA into their own scale during evaluation.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">📋</span>
                        <div>
                            <h4 className="font-bold text-slate-800">Registrar & Academic Advising</h4>
                            <p className="text-slate-600">A low semester GPA can trigger probation or mandatory study-skills workshops.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6">
                Frequently Asked Questions
              </h2>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6">Proven Strategies to Raise Your GPA</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Regular Class Attendance", icon: "✔️", text: "Research shows attendance correlates with higher final test grades." },
                  { title: "Time Management", icon: "⏰", text: "Break study blocks into 50-minute sessions; use the Central Library’s bookable study rooms." },
                  { title: "Utilize Academic Resources", icon: "📚", text: "Writing centres, peer-tutoring labs, and virtual librarian chat provide assignment support." },
                  { title: "Practice Past Papers", icon: "✍️", text: "Familiarity with exam style lifts marks and confidence." },
                  { title: "Communicate With Professors", icon: "🗣️", text: "Early feedback on labs or studios can convert a potential C- into a solid B." },
                  { title: "Use Our Calculator", icon: "🧮", text: "Plan 'what-if' scenarios to understand the grades you need for your target GPA." }
                ].map((strategy, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">{strategy.icon}</div>
                    <h4 className="font-bold text-slate-800 mb-2">{strategy.title}</h4>
                    <p className="text-sm text-slate-600">{strategy.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}