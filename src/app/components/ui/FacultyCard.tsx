import Link from 'next/link';
import { FacultyProgram } from '@/app/data/faculty-programs';

interface FacultyCardProps {
  faculty: FacultyProgram;
}

const FacultyCard = ({ faculty }: FacultyCardProps) => {
  return (
    <div className="group">
      <Link href={faculty.slug}>
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
          {/* Header with Gradient */}
          <div className={`bg-gradient-to-r ${faculty.color} p-6 text-white`}>
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                {faculty.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{faculty.name}</h3>
                <p className="text-sm opacity-90">{faculty.fullName}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-slate-600 mb-4 leading-relaxed">
              {faculty.description}
            </p>

            {/* Programs List */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-800 mb-2">Programs Available:</h4>
              <div className="flex flex-wrap gap-2">
                {faculty.programs.slice(0, 3).map((program, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-lg"
                  >
                    {program}
                  </span>
                ))}
                {faculty.programs.length > 3 && (
                  <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-lg">
                    +{faculty.programs.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4 border-t border-slate-200">
              <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                Calculate GPA →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FacultyCard;
