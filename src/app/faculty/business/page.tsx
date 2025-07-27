import { Metadata } from 'next';
import BusinessCalculator from '@/app/components/ui/BusinessCalculator';

export const metadata: Metadata = {
  title: 'SLIIT Business Faculty GPA Calculator - School Of Business',
  description: 'A comprehensive GPA calculator for all SLIIT Business School programs, including Business Management, Marketing, Accounting & Finance, and more. Calculate your GPA with the latest curriculum data.',
  alternates: {
    canonical: '/faculty/business',
  },
};

export default function BusinessFacultyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <BusinessCalculator />
    </div>
  );
}