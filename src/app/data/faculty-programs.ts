export interface FacultyProgram {
  id: string;
  name: string;
  fullName: string;
  description: string;
  programs: string[];
  slug: string;
  color: string;
  icon: string;
}

export const sliitFaculties: FacultyProgram[] = [
  {
    id: 'computing',
    name: 'Computing',
    fullName: 'Faculty of Computing',
    description: 'Software Engineering, Data Science, IT, Cyber Security, and more computing programs',
    programs: [
      'Software Engineering',
      'Information Technology', 
      'Data Science',
      'Computer Systems & Network',
      'Cyber Security',
      'Information Systems',
      'Interactive Media'
    ],
    slug: '/faculty/computing',
    color: 'from-blue-500 to-cyan-500',
    icon: '💻'
  },
  {
    id: 'business',
    name: 'Business',
    fullName: 'Faculty of Business',
    description: 'MBA, Business Administration, Marketing, HR, and Accounting programs',
    programs: [
      'Business Administration',
      'Marketing Management',
      'Human Resource Management',
      'Accounting & Finance',
      'MBA Programs'
    ],
    slug: '/faculty/business',
    color: 'from-green-500 to-emerald-500',
    icon: '💼'
  },
  {
    id: 'engineering',
    name: 'Engineering',
    fullName: 'Faculty of Engineering',
    description: 'Civil, Electrical, Mechanical, and Electronic Engineering programs',
    programs: [
      'Civil Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Electronic Engineering'
    ],
    slug: '/faculty/engineering',
    color: 'from-orange-500 to-red-500',
    icon: '⚙️'
  },
  {
    id: 'law',
    name: 'Law',
    fullName: 'Faculty of Law',
    description: 'LLB Honours and legal studies programs',
    programs: [
      'LLB Honours'
    ],
    slug: '/faculty/law',
    color: 'from-purple-500 to-indigo-500',
    icon: '⚖️'
  },
  {
    id: 'architecture',
    name: 'Architecture',
    fullName: 'Faculty of Architecture',
    description: 'Architecture and Quantity Surveying programs',
    programs: [
      'Architecture',
      'Quantity Surveying'
    ],
    slug: '/faculty/architecture',
    color: 'from-teal-500 to-cyan-500',
    icon: '🏗️'
  },
  {
    id: 'humanities',
    name: 'Humanities',
    fullName: 'Faculty of Humanities & Sciences',
    description: 'English Language, Psychology, and Mass Communication programs',
    programs: [
      'English Language',
      'Psychology', 
      'Mass Communication'
    ],
    slug: '/faculty/humanities',
    color: 'from-pink-500 to-rose-500',
    icon: '📚'
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    fullName: 'Faculty of Hospitality & Culinary',
    description: 'Hotel Management and Culinary Arts programs',
    programs: [
      'Hotel Management',
      'Culinary Arts'
    ],
    slug: '/faculty/hospitality',
    color: 'from-amber-500 to-yellow-500',
    icon: '🍽️'
  },
  {
    id: 'graduate',
    name: 'Graduate Studies',
    fullName: 'Faculty of Graduate Studies',
    description: 'MBA, MSc, and PhD programs for advanced studies',
    programs: [
      'MBA Programs',
      'MSc Programs',
      'PhD Programs'
    ],
    slug: '/faculty/graduate',
    color: 'from-slate-500 to-gray-500',
    icon: '🎓'
  }
];

export const getSLIITFaculty = (id: string): FacultyProgram | undefined => {
  return sliitFaculties.find(faculty => faculty.id === id);
};

export const getAllSLIITFaculties = (): FacultyProgram[] => {
  return sliitFaculties;
};
