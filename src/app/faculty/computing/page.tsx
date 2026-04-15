import { Metadata } from 'next';
import Link from 'next/link';
import CalculatorDashboard from '@/app/components/calculators/CalculatorDashboard';

export const metadata: Metadata = {
  title: 'SLIIT Faculty of Computing GPA Calculator',
  description: 'Calculate your SLIIT Faculty of Computing GPA for Software Engineering, Data Science, IT, Cyber Security and more programs.',
  keywords: 'SLIIT Computing GPA, Software Engineering GPA, Data Science GPA, SLIIT IT GPA Calculator',
};

export default function ComputingFacultyPage() {
  return (
    <div className="bg-slate-50 py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CalculatorDashboard
          lockedCalculator="computing"
          title="SLIIT Faculty of Computing GPA Calculator"
        description="SLIIT Computing GPA estimates based on supported FOC curriculum data."
        />

        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">Available Computing Program Page</h2>
              <p className="mt-2 text-slate-600">
                The dedicated Software Engineering calculator page is available for students who want a pre-filtered program view.
              </p>
            </div>
            <Link
              href="/faculty/computing/software-engineering"
              className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
            >
              Software Engineering GPA
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
