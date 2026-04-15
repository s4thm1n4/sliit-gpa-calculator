import { Metadata } from 'next';
import CalculatorDashboard from '@/app/components/calculators/CalculatorDashboard';

export const metadata: Metadata = {
  title: 'SLIIT Business Faculty GPA Calculator - School Of Business',
  description: 'A comprehensive GPA calculator for all SLIIT Business School programs, including Business Management, Marketing, Accounting & Finance, and more. Calculate your GPA with the latest curriculum data.',
  alternates: {
    canonical: '/faculty/business',
  },
};

export default function BusinessFacultyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CalculatorDashboard
          lockedCalculator="business"
          title="SLIIT Business Faculty GPA Calculator"
        description="SLIIT Business GPA estimates based on supported Business program curriculum data."
        />
      </div>
    </div>
  );
}
