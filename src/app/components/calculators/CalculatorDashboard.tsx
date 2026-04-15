'use client';

import { useState } from 'react';
import Link from 'next/link';
import BusinessCalculator from '@/app/components/ui/BusinessCalculator';
import FocCalculator from './FocCalculator';

export type CalculatorKind = 'computing' | 'business';

interface CalculatorDashboardProps {
  activeCalculator?: CalculatorKind;
  defaultCalculator?: CalculatorKind;
  lockedCalculator?: CalculatorKind;
  onCalculatorChange?: (calculator: CalculatorKind) => void;
  title?: string;
  description?: string;
  computingPreselectedProgram?: string;
  showHeader?: boolean;
  className?: string;
}

const calculatorTabs: Array<{
  id: CalculatorKind;
  label: string;
  eyebrow: string;
  description: string;
}> = [
  {
    id: 'computing',
    label: 'Computing',
    eyebrow: 'FOC',
    description: 'Software Engineering, IT, Data Science and related computing programs',
  },
  {
    id: 'business',
    label: 'Business',
    eyebrow: 'Business',
    description: 'Business Management, Analytics, Marketing, Accounting and related programs',
  },
];

export default function CalculatorDashboard({
  activeCalculator,
  defaultCalculator = 'computing',
  lockedCalculator,
  onCalculatorChange,
  title = 'SLIIT GPA Calculator',
  description = 'GPA estimates for supported SLIIT Computing and Business curriculum data.',
  computingPreselectedProgram,
  showHeader = true,
  className = '',
}: CalculatorDashboardProps) {
  const [internalCalculator, setInternalCalculator] = useState<CalculatorKind>(defaultCalculator);
  const selectedCalculator = lockedCalculator ?? activeCalculator ?? internalCalculator;
  const selectedTab = calculatorTabs.find(tab => tab.id === selectedCalculator) ?? calculatorTabs[0];
  const isLocked = Boolean(lockedCalculator);

  const handleCalculatorChange = (calculator: CalculatorKind) => {
    if (isLocked) return;
    onCalculatorChange?.(calculator);
    if (!activeCalculator) {
      setInternalCalculator(calculator);
    }
  };

  return (
    <section id="calculator" className={`scroll-mt-24 ${className}`}>
      {showHeader && (
        <div className="mb-5 md:mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Curriculum-based GPA tool
          </div>
          <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
                {title}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
                {description}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:min-w-80">
              <div>
                <div className="text-lg font-extrabold text-slate-950">2</div>
                <div className="text-xs font-semibold text-slate-500">Faculties</div>
              </div>
              <div>
                <div className="text-lg font-extrabold text-slate-950">2025</div>
                <div className="text-xs font-semibold text-slate-500">Curriculum</div>
              </div>
              <div>
                <div className="text-lg font-extrabold text-slate-950">4.0</div>
                <div className="text-xs font-semibold text-slate-500">Scale</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-4 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        {isLocked ? (
          <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-950 px-4 py-3 text-white">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-300">
                {selectedTab.eyebrow}
              </div>
              <div className="text-lg font-bold">{selectedTab.label} GPA Calculator</div>
            </div>
            <Link
              href="/#calculator"
              className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Main calculator
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {calculatorTabs.map(tab => {
              const isActive = selectedCalculator === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleCalculatorChange(tab.id)}
                  className={`rounded-lg border px-4 py-4 text-left transition-colors ${
                    isActive
                      ? 'border-slate-950 bg-slate-950 text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wide ${isActive ? 'text-cyan-200' : 'text-slate-500'}`}>
                        {tab.eyebrow}
                      </div>
                      <div className="mt-1 text-lg font-extrabold">{tab.label}</div>
                      <p className={`mt-1 text-sm leading-5 ${isActive ? 'text-slate-200' : 'text-slate-600'}`}>
                        {tab.description}
                      </p>
                    </div>
                    <span className={`mt-1 h-3 w-3 rounded-full border ${isActive ? 'border-cyan-300 bg-cyan-300' : 'border-slate-300'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div aria-live="polite">
        {selectedCalculator === 'computing' ? (
          <FocCalculator embedded preselectedProgram={computingPreselectedProgram} />
        ) : (
          <BusinessCalculator embedded showHeader={false} />
        )}
      </div>
    </section>
  );
}
