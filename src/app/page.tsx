'use client';

import { useState, useEffect, useMemo } from 'react';
import HeroSection from './components/layout/sections/HeroSection';
import FacultyCard from './components/ui/FacultyCard';
import { getAllSLIITFaculties } from './data/faculty-programs';
import Link from 'next/link';

// Complete Faculty Programs Data (from your comprehensive calculator)
const facultyPrograms = {
  'software-engineering': {
    name: 'Software Engineering',
    code: 'SE',
    description: 'Discipline of designing, creating and maintaining software',
    icon: '💻',
    color: 'blue'
  },
  'information-technology': {
    name: 'Information Technology',
    code: 'IT',
    description: 'Technically focused program for strong IT foundation',
    icon: '🖥️',
    color: 'green'
  },
  'data-science': {
    name: 'Data Science',
    code: 'DS',
    description: 'Fundamentals of computer science, statistics, and applied mathematics',
    icon: '📊',
    color: 'purple'
  },
  'computer-systems-network': {
    name: 'Computer Systems & Network Engineering',
    code: 'CSNE',
    description: 'Computer network engineering and systems administration',
    icon: '🌐',
    color: 'cyan'
  },
  'cyber-security': {
    name: 'Cyber Security',
    code: 'CS',
    description: 'Accelerated career in cyber/information security',
    icon: '🔒',
    color: 'red'
  },
  'information-systems': {
    name: 'Information Systems Engineering',
    code: 'ISE',
    description: 'Where technology meets business',
    icon: '🏢',
    color: 'indigo'
  },
  'interactive-media': {
    name: 'Interactive Media',
    code: 'IM',
    description: 'Create interactive media content transforming society',
    icon: '🎨',
    color: 'pink'
  }
};

// Complete curriculum data with ALL 7 programs - both Old (2021) and New (2025) syllabus
const curriculumData = {
  'software-engineering': {
    '2025': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1120", credits: 4 },
        { name: "Data Communication Networks", code: "IT1030", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1130", credits: 4 },
        { name: "Fundamentals of Computing", code: "IT1140", credits: 3 }
      ],
      'Y1S2': [
        { name: "Discrete Mathematics", code: "IT1160", credits: 4 },
        { name: "Data Structures and Algorithms", code: "IT1170", credits: 4 },
        { name: "Software Engineering", code: "SE1010", credits: 4 },
        { name: "Technical Writing", code: "IT1150", credits: 4 }
      ],
      'Y2S1': [
        { name: "Probability and Statistics", code: "IT2120", credits: 4 },
        { name: "Object Oriented Programming", code: "SE2010", credits: 4 },
        { name: "Operating Systems & Sys Admin", code: "IT2130", credits: 4 },
        { name: "Databases", code: "IT2140", credits: 4 }
      ],
      'Y2S2': [
        { name: "Artificial Intelligence & Machine Learning", code: "IT2011", credits: 4 },
        { name: "IT Project", code: "IT2150", credits: 4 },
        { name: "Web and Mobile Technologies", code: "SE2020", credits: 4 },
        { name: "Professional Skills", code: "IT2160", credits: 4 }
      ],
      'Y3': [
        { name: "Industry Economics & Management", code: "IT3120", credits: 4, typical_semester: "S1", core: true },
        { name: "Software Engineering Frameworks", code: "SE3090", credits: 4, typical_semester: "S1", core: true },
        { name: "Architecture based Development", code: "SE3100", credits: 4, typical_semester: "S1", core: false },
        { name: "Quality Management in Software Engineering", code: "SE3110", credits: 4, typical_semester: "S1", core: false },
        { name: "Industry Training", code: "IT3190", credits: 4, typical_semester: "S2", core: true },
        { name: "Distributed Systems", code: "SE3120", credits: 4, typical_semester: "S2", core: false },
        { name: "User Experience Research & Design", code: "SE3130", credits: 4, typical_semester: "S2", core: false },
        { name: "Research Methods", code: "IT3160", credits: 4, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project - I", code: "IT4200", credits: 6, typical_semester: "S1", core: true },
        { name: "Secure Software Development", code: "SE4070", credits: 4, typical_semester: "S1", core: false },
        { name: "Cloud Native Development", code: "SE4080", credits: 4, typical_semester: "S1", core: false },
        { name: "Deep Learning", code: "SE4100", credits: 4, typical_semester: "S1", core: false },
        { name: "Research Project - II", code: "IT4200", credits: 6, typical_semester: "S2", core: true },
        { name: "Current Trends in Software Engineering", code: "SE4110", credits: 4, typical_semester: "S2", core: false },
        { name: "Enterprise Application Development", code: "SE4120", credits: 4, typical_semester: "S2", core: false },
        { name: "Big Data & Data Analytics", code: "SE4140", credits: 4, typical_semester: "S2", core: false }
      ]
    },
    '2021': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1010", credits: 4 },
        { name: "Introduction to Computer Systems", code: "IT1020", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1030", credits: 4 },
        { name: "Communication Skills", code: "IT1040", credits: 3 }
      ],
      'Y1S2': [
        { name: "Object Oriented Concepts", code: "IT1050", credits: 2 },
        { name: "Software Process Modeling", code: "IT1060", credits: 3 },
        { name: "English for Academic Purposes", code: "IT1080", credits: 3 },
        { name: "Information Systems and Data Modeling", code: "IT1090", credits: 4 },
        { name: "Internet and Web Technologies", code: "IT1100", credits: 4 }
      ],
      'Y2S1': [
        { name: "Software Engineering", code: "IT2020", credits: 4 },
        { name: "Object Oriented Programming", code: "IT2030", credits: 4 },
        { name: "Database Management Systems", code: "IT2040", credits: 4 },
        { name: "Computer Networks", code: "IT2050", credits: 4 },
        { name: "Operating Systems and System Administration", code: "IT2060", credits: 4 }
      ],
      'Y2S2': [
        { name: "Mobile Application Development", code: "IT2010", credits: 4 },
        { name: "Data Structures and Algorithms", code: "IT2070", credits: 4 },
        { name: "IT Project", code: "IT2080", credits: 4 },
        { name: "Professional Skills", code: "IT2090", credits: 2 },
        { name: "Probability and Statistics", code: "IT2110", credits: 3 }
      ],
      'Y3': [
        { name: "Software Engineering Process & Quality Management", code: "SE3010", credits: 4, typical_semester: "S1", core: true },
        { name: "Distributed Systems", code: "SE3020", credits: 4, typical_semester: "S1", core: true },
        { name: "Software Architecture", code: "SE3030", credits: 4, typical_semester: "S1", core: true },
        { name: "Application Frameworks", code: "SE3040", credits: 4, typical_semester: "S1", core: false },
        { name: "User Experience Engineering", code: "SE3050", credits: 3, typical_semester: "S1", core: false },
        { name: "Database Systems", code: "SE3060", credits: 4, typical_semester: "S2", core: true },
        { name: "Case Studies in Software Engineering", code: "SE3070", credits: 4, typical_semester: "S2", core: false },
        { name: "Software Project Management", code: "SE3080", credits: 3, typical_semester: "S2", core: false },
        { name: "Industry Placement", code: "IT3110", credits: 8, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project", code: "IT4010", credits: 16, typical_semester: "Both", core: true },
        { name: "Current Trends in Software Engineering", code: "SE4010", credits: 4, typical_semester: "S1", core: false },
        { name: "Secure Software Development", code: "SE4030", credits: 4, typical_semester: "S1", core: false }
      ]
    }
  },

'data-science': {
  '2025': {
    'Y1S1': [
      { name: "Introduction to Programming", code: "IT1120", credits: 4 },
      { name: "Data Communication Networks", code: "IE1030", credits: 4 },
      { name: "Mathematics for Computing", code: "IT1130", credits: 4 },
      { name: "Fundamentals of Computing", code: "IT1140", credits: 4 }
    ],
    'Y1S2': [
      { name: "Discrete Mathematics", code: "IT1160", credits: 4 },
      { name: "Data Structures and Algorithms", code: "IT1170", credits: 4 },
      { name: "Software Engineering", code: "SE1010", credits: 4 },
      { name: "Technical Writing", code: "IT1150", credits: 4 }
    ],
    'Y2S1': [
      { name: "Probability and Statistics", code: "IT2120", credits: 4 },
      { name: "Object Oriented Programming", code: "IT2010", credits: 4 },
      { name: "Operating Systems & System Administration", code: "IT2130", credits: 4 },
      { name: "Database Design and Development", code: "IT2140", credits: 4 }
    ],
    'Y2S2': [
      { name: "Artificial Intelligence & Machine Learning", code: "IT2011", credits: 4 },
      { name: "IT Project", code: "IT2150", credits: 4 },
      { name: "Web and Mobile Technologies", code: "SE2020", credits: 4 },
      { name: "Professional Skills", code: "IT2160", credits: 4 }
    ],
    'Y3': [
      { name: "Industrial Economics & Management", code: "IT3120", credits: 4, typical_semester: "S1", core: true },
      { name: "Statistical Modelling", code: "IT3081", credits: 4, typical_semester: "S1", core: true },
      { name: "Machine Learning", code: "IT3091", credits: 4, typical_semester: "S1", core: true },
      { name: "Data Warehousing and Business Intelligence", code: "IT3101", credits: 4, typical_semester: "S1", core: false },
      { name: "Industry Training", code: "IT3190", credits: 4, typical_semester: "S2", core: true },
      { name: "Deep Learning", code: "IT3111", credits: 4, typical_semester: "S2", core: false },
      { name: "Cloud Data Analytics", code: "IT3121", credits: 4, typical_semester: "S2", core: false },
      { name: "Research Methods", code: "IT3160", credits: 4, typical_semester: "S2", core: true }
    ],
    'Y4': [
      { name: "Research Project - I", code: "IT4200", credits: 4, typical_semester: "S1", core: true },
      { name: "Modern Topics in Data Science", code: "IT4051", credits: 4, typical_semester: "S1", core: false },
      { name: "Natural Language Processing", code: "IT4061", credits: 4, typical_semester: "S1", core: false },
      { name: "Software Engineering Concepts", code: "IT4081", credits: 4, typical_semester: "S1", core: false },
      { name: "Research Project - II", code: "IT4200", credits: 8, typical_semester: "S2", core: true },
      { name: "Data Governance, Privacy and Security", code: "IT4071", credits: 4, typical_semester: "S2", core: false },
      { name: "Database Implementation and Administration", code: "IT4101", credits: 4, typical_semester: "S2", core: false },
      { name: "MLOps for Data Analytics", code: "IT4111", credits: 4, typical_semester: "S2", core: false }
    ]
  },
  '2021': {
    'Y1S1': [
      { name: "Introduction to Programming", code: "IT1010", credits: 4 },
      { name: "Introduction to Computer Systems", code: "IT1020", credits: 4 },
      { name: "Mathematics for Computing", code: "IT1030", credits: 4 },
      { name: "Communication Skills", code: "IT1040", credits: 3 }
    ],
    'Y1S2': [
      { name: "Object Oriented Concepts", code: "IT1050", credits: 2 },
      { name: "Software Process Modeling", code: "IT1060", credits: 3 },
      { name: "English for Academic Purposes", code: "IT1080", credits: 3 },
      { name: "Information Systems and Data Modeling", code: "IT1090", credits: 4 },
      { name: "Internet and Web Technologies", code: "IT1100", credits: 4 }
    ],
    'Y2S1': [
      { name: "Software Engineering", code: "IT2020", credits: 4 },
      { name: "Object Oriented Programming", code: "IT2030", credits: 4 },
      { name: "Database Management Systems", code: "IT2040", credits: 4 },
      { name: "Computer Networks", code: "IT2050", credits: 4 },
      { name: "Operating Systems and System Administration", code: "IT2060", credits: 4 }
    ],
    'Y2S2': [
      { name: "Mobile Application Development", code: "IT2010", credits: 4 },
      { name: "Data Structures and Algorithms", code: "IT2070", credits: 4 },
      { name: "IT Project", code: "IT2080", credits: 4 },
      { name: "Professional Skills", code: "IT2090", credits: 2 },
      { name: "Probability and Statistics", code: "IT2110", credits: 3 }
    ],
    'Y3': [
      { name: "Programming Applications and Frameworks", code: "IT3030", credits: 4, typical_semester: "S1", core: true },
      { name: "Theory and Practices in Statistical Modelling", code: "IT3011", credits: 4, typical_semester: "S1", core: true },
      { name: "Data Warehousing and Business Intelligence", code: "IT3021", credits: 4, typical_semester: "S1", core: true },
      { name: "Database Systems and Data-Driven Application", code: "IT3031", credits: 4, typical_semester: "S1", core: false },
      { name: "Information Retrieval and Web Analytics", code: "IT3060", credits: 4, typical_semester: "S1", core: false },
      { name: "Fundamentals of Data Mining", code: "IT3051", credits: 4, typical_semester: "S2", core: true },
      { name: "Massive Data Processing and cloud Computing", code: "IT3061", credits: 4, typical_semester: "S2", core: false },
      { name: "Machine Learning and Optimization Methods", code: "IT3071", credits: 4, typical_semester: "S2", core: true },
      { name: "Industry Placement", code: "IT3110", credits: 8, typical_semester: "S2", core: true }
    ],
    'Y4': [
      { name: "Research Project", code: "IT4010", credits: 16, typical_semester: "Both", core: true },
      { name: "Database Administration and Storage Systems", code: "IT4011", credits: 4, typical_semester: "S1", core: false },
      { name: "Internet of Things and Big Data Analytics", code: "IT4021", credits: 4, typical_semester: "S1", core: false },
      { name: "Visual Analytics and User Experience Design", code: "IT4031", credits: 4, typical_semester: "S1", core: false },
      { name: "Introduction to Information Security Analytics", code: "IT4041", credits: 4, typical_semester: "S1", core: false }
    ]
  }
},

  
  'information-technology': {
    '2025': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1120", credits: 4 },
        { name: "Data Communication Networks", code: "IE1030", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1130", credits: 4 },
        { name: "Fundamentals of Computing", code: "IT1140", credits: 4 }
      ],
      'Y1S2': [
        { name: "Discrete Mathematics", code: "IT1160", credits: 4 },
        { name: "Data Structures and Algorithms", code: "IT1170", credits: 4 },
        { name: "Software Engineering", code: "SE1010", credits: 4 },
        { name: "Technical Writing", code: "IT1150", credits: 4 }
      ],
      'Y2S1': [
        { name: "Probability and Statistics", code: "IT2120", credits: 4 },
        { name: "Object Oriented Programming", code: "SE2010", credits: 4 },
        { name: "Operating Systems & System Administration", code: "IT2130", credits: 4 },
        { name: "Database Design and Development", code: "IT2140", credits: 4 }
      ],
      'Y2S2': [
        { name: "Artificial Intelligence & Machine Learning", code: "IT2011", credits: 4 },
        { name: "IT Project", code: "IT2150", credits: 4 },
        { name: "Web and Mobile Technologies", code: "SE2020", credits: 4 },
        { name: "Professional Skills", code: "IT2160", credits: 4 }
      ],
      'Y3': [
        { name: "Industrial Economics & Management", code: "IT3120", credits: 4, typical_semester: "S1", core: true },
        { name: "Application Development", code: "IT3130", credits: 4, typical_semester: "S1", core: true },
        { name: "Database Systems", code: "IT3140", credits: 4, typical_semester: "S1", core: true },
        { name: "IT Process and Infrastructure Management", code: "IT3150", credits: 4, typical_semester: "S1", core: false },
        { name: "Industry Training", code: "IT3190", credits: 0, typical_semester: "S2", core: true },
        { name: "Cloud Technologies", code: "IT3180", credits: 4, typical_semester: "S2", core: false },
        { name: "Data Analytics", code: "IT3200", credits: 4, typical_semester: "S2", core: false },
        { name: "Research Methods", code: "IT3160", credits: 4, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project - I", code: "IT4200", credits: 4, typical_semester: "S1", core: true },
        { name: "Information Security", code: "IT4210", credits: 4, typical_semester: "S1", core: false },
        { name: "Intelligent Systems Development", code: "IT4150", credits: 4, typical_semester: "S1", core: false },
        { name: "IT Policy Management and Governance", code: "IT4180", credits: 4, typical_semester: "S1", core: false },
        { name: "Research Project - II", code: "IT4200", credits: 8, typical_semester: "S2", core: true },
        { name: "Current Trends in IT", code: "IT4190", credits: 4, typical_semester: "S2", core: false },
        { name: "Enterprise Application Development", code: "SE4120", credits: 4, typical_semester: "S2", core: false },
        { name: "Human Computer Interaction", code: "IT4170", credits: 4, typical_semester: "S2", core: false }
      ]
    },
    '2021': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1010", credits: 4 },
        { name: "Introduction to Computer Systems", code: "IT1020", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1030", credits: 4 },
        { name: "Communication Skills", code: "IT1040", credits: 3 }
      ],
      'Y1S2': [
        { name: "Object Oriented Concepts", code: "IT1050", credits: 2 },
        { name: "Software Process Modeling", code: "IT1060", credits: 3 },
        { name: "English for Academic Purposes", code: "IT1080", credits: 3 },
        { name: "Information Systems and Data Modeling", code: "IT1090", credits: 4 },
        { name: "Internet and Web Technologies", code: "IT1100", credits: 4 }
      ],
      'Y2S1': [
        { name: "Software Engineering", code: "IT2020", credits: 4 },
        { name: "Object Oriented Programming", code: "IT2030", credits: 4 },
        { name: "Database Management Systems", code: "IT2040", credits: 4 },
        { name: "Computer Networks", code: "IT2050", credits: 4 },
        { name: "Operating Systems and System Administration", code: "IT2060", credits: 4 }
      ],
      'Y2S2': [
        { name: "Mobile Application Development", code: "IT2010", credits: 4 },
        { name: "Data Structures and Algorithms", code: "IT2070", credits: 4 },
        { name: "IT Project", code: "IT2080", credits: 4 },
        { name: "Professional Skills", code: "IT2090", credits: 2 },
        { name: "Probability and Statistics", code: "IT2110", credits: 3 }
      ],
      'Y3': [
        { name: "Network Design and Management", code: "IT3010", credits: 4, typical_semester: "S1", core: true },
        { name: "Database Systems", code: "IT3020", credits: 4, typical_semester: "S1", core: true },
        { name: "Programming Applications & Frameworks", code: "IT3030", credits: 4, typical_semester: "S1", core: true },
        { name: "IT Project Management", code: "IT3040", credits: 4, typical_semester: "S1", core: false },
        { name: "Human Computer Interaction", code: "IT3060", credits: 4, typical_semester: "S2", core: false },
        { name: "Information Assurance & Security", code: "IT3070", credits: 4, typical_semester: "S2", core: false },
        { name: "Data Science & Analytics", code: "IT3080", credits: 4, typical_semester: "S2", core: false },
        { name: "Business Management for IT", code: "IT3090", credits: 3, typical_semester: "S2", core: false },
        { name: "Industry Placement", code: "IT3110", credits: 8, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project", code: "IT4010", credits: 16, typical_semester: "Both", core: true },
        { name: "Modern Topics in IT", code: "IT4020", credits: 4, typical_semester: "S1", core: false }
      ]
    }
  },

  'computer-systems-network': {
    '2025': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1120", credits: 4 },
        { name: "Data Communication Networks", code: "IE1030", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1130", credits: 4 },
        { name: "Computer Systems Fundamentals", code: "IE1040", credits: 4 }
      ],
      'Y1S2': [
        { name: "Discrete Mathematics", code: "IT1160", credits: 4 },
        { name: "Data Structures and Algorithms", code: "IT1170", credits: 4 },
        { name: "Network Design and Analysis", code: "IE1050", credits: 4 },
        { name: "Technical Writing", code: "IT1150", credits: 4 }
      ],
      'Y2S1': [
        { name: "Probability and Statistics", code: "IT2120", credits: 4 },
        { name: "Network Programming", code: "IE2010", credits: 4 },
        { name: "Operating Systems & System Administration", code: "IT2130", credits: 4 },
        { name: "Database Design and Development", code: "IT2140", credits: 4 }
      ],
      'Y2S2': [
        { name: "Network Security", code: "IE2020", credits: 4 },
        { name: "IT Project", code: "IT2150", credits: 4 },
        { name: "Wireless and Mobile Networks", code: "IE2030", credits: 4 },
        { name: "Professional Skills", code: "IT2160", credits: 4 }
      ],
      'Y3': [
        { name: "Industrial Economics & Management", code: "IT3120", credits: 4, typical_semester: "S1", core: true },
        { name: "Network Management and Performance", code: "IE3010", credits: 4, typical_semester: "S1", core: true },
        { name: "Computer Systems Architecture", code: "IE3020", credits: 4, typical_semester: "S1", core: true },
        { name: "Cloud Computing and Virtualization", code: "IE3030", credits: 4, typical_semester: "S1", core: false },
        { name: "Industry Training", code: "IT3190", credits: 4, typical_semester: "S2", core: true },
        { name: "Network Protocol Analysis", code: "IE3040", credits: 4, typical_semester: "S2", core: false },
        { name: "Distributed Systems", code: "IE3050", credits: 4, typical_semester: "S2", core: false },
        { name: "Research Methods", code: "IT3160", credits: 4, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project - I", code: "IT4200", credits: 4, typical_semester: "S1", core: true },
        { name: "Advanced Network Engineering", code: "IE4010", credits: 4, typical_semester: "S1", core: false },
        { name: "Internet of Things", code: "IE4020", credits: 4, typical_semester: "S1", core: false },
        { name: "Network Automation", code: "IE4030", credits: 4, typical_semester: "S1", core: false },
        { name: "Research Project - II", code: "IT4200", credits: 8, typical_semester: "S2", core: true },
        { name: "Current Trends in Networking", code: "IE4040", credits: 4, typical_semester: "S2", core: false },
        { name: "5G Networks and Beyond", code: "IE4050", credits: 4, typical_semester: "S2", core: false },
        { name: "Network Forensics", code: "IE4060", credits: 4, typical_semester: "S2", core: false }
      ]
    },
    '2021': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1010", credits: 4 },
        { name: "Introduction to Computer Systems", code: "IT1020", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1030", credits: 4 },
        { name: "Communication Skills", code: "IT1040", credits: 3 }
      ],
      'Y1S2': [
        { name: "Computer Networks", code: "IE1010", credits: 4 },
        { name: "Network Fundamentals", code: "IE1020", credits: 3 },
        { name: "English for Academic Purposes", code: "IT1080", credits: 3 },
        { name: "Network Design Principles", code: "IE1030", credits: 4 },
        { name: "Internet Technologies", code: "IE1040", credits: 4 }
      ],
      'Y2S1': [
        { name: "Network Routing and Switching", code: "IE2010", credits: 4 },
        { name: "Network Security Fundamentals", code: "IE2020", credits: 4 },
        { name: "System Administration", code: "IE2030", credits: 4 },
        { name: "Database Systems", code: "IT2040", credits: 4 },
        { name: "Network Programming", code: "IE2040", credits: 4 }
      ],
      'Y2S2': [
        { name: "Wireless Networks", code: "IE2050", credits: 4 },
        { name: "Network Management", code: "IE2060", credits: 4 },
        { name: "IT Project", code: "IT2080", credits: 4 },
        { name: "Professional Skills", code: "IT2090", credits: 2 },
        { name: "Applied Statistics", code: "IT2110", credits: 3 }
      ],
      'Y3': [
        { name: "Advanced Network Security", code: "IE3010", credits: 4, typical_semester: "S1", core: true },
        { name: "Network Performance Analysis", code: "IE3020", credits: 4, typical_semester: "S1", core: true },
        { name: "Voice over IP", code: "IE3030", credits: 4, typical_semester: "S1", core: false },
        { name: "Project Management", code: "IT3040", credits: 4, typical_semester: "S1", core: false },
        { name: "Network Troubleshooting", code: "IE3040", credits: 4, typical_semester: "S2", core: false },
        { name: "Mobile Networks", code: "IE3050", credits: 4, typical_semester: "S2", core: false },
        { name: "Cloud Computing", code: "IE3060", credits: 4, typical_semester: "S2", core: false },
        { name: "Industry Placement", code: "IT3110", credits: 8, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project", code: "IT4010", credits: 16, typical_semester: "Both", core: true },
        { name: "Network Architecture Design", code: "IE4010", credits: 4, typical_semester: "S1", core: false },
        { name: "Emerging Network Technologies", code: "IE4020", credits: 4, typical_semester: "S1", core: false }
      ]
    }
  },

  'cyber-security': {
    '2025': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1120", credits: 4 },
        { name: "Data Communication Networks", code: "IE1030", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1130", credits: 4 },
        { name: "Cyber Security Fundamentals", code: "CS1010", credits: 4 }
      ],
      'Y1S2': [
        { name: "Discrete Mathematics", code: "IT1160", credits: 4 },
        { name: "Data Structures and Algorithms", code: "IT1170", credits: 4 },
        { name: "Cryptography Basics", code: "CS1020", credits: 4 },
        { name: "Technical Writing", code: "IT1150", credits: 4 }
      ],
      'Y2S1': [
        { name: "Probability and Statistics", code: "IT2120", credits: 4 },
        { name: "Secure Programming", code: "CS2010", credits: 4 },
        { name: "Operating Systems Security", code: "CS2020", credits: 4 },
        { name: "Database Security", code: "CS2030", credits: 4 }
      ],
      'Y2S2': [
        { name: "Network Security", code: "CS2040", credits: 4 },
        { name: "IT Project", code: "IT2150", credits: 4 },
        { name: "Ethical Hacking and Penetration Testing", code: "CS2050", credits: 4 },
        { name: "Professional Skills", code: "IT2160", credits: 4 }
      ],
      'Y3': [
        { name: "Industrial Economics & Management", code: "IT3120", credits: 4, typical_semester: "S1", core: true },
        { name: "Digital Forensics", code: "CS3010", credits: 4, typical_semester: "S1", core: true },
        { name: "Incident Response and Management", code: "CS3020", credits: 4, typical_semester: "S1", core: true },
        { name: "Security Architecture", code: "CS3030", credits: 4, typical_semester: "S1", core: false },
        { name: "Industry Training", code: "IT3190", credits: 4, typical_semester: "S2", core: true },
        { name: "Malware Analysis", code: "CS3040", credits: 4, typical_semester: "S2", core: false },
        { name: "Security Risk Assessment", code: "CS3050", credits: 4, typical_semester: "S2", core: false },
        { name: "Research Methods", code: "IT3160", credits: 4, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project - I", code: "IT4200", credits: 4, typical_semester: "S1", core: true },
        { name: "Advanced Cryptography", code: "CS4010", credits: 4, typical_semester: "S1", core: false },
        { name: "Cloud Security", code: "CS4020", credits: 4, typical_semester: "S1", core: false },
        { name: "Cyber Threat Intelligence", code: "CS4030", credits: 4, typical_semester: "S1", core: false },
        { name: "Research Project - II", code: "IT4200", credits: 8, typical_semester: "S2", core: true },
        { name: "Current Trends in Cyber Security", code: "CS4040", credits: 4, typical_semester: "S2", core: false },
        { name: "Security Governance and Compliance", code: "CS4050", credits: 4, typical_semester: "S2", core: false },
        { name: "AI for Cyber Security", code: "CS4060", credits: 4, typical_semester: "S2", core: false }
      ]
    },
    '2021': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1010", credits: 4 },
        { name: "Introduction to Computer Systems", code: "IT1020", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1030", credits: 4 },
        { name: "Communication Skills", code: "IT1040", credits: 3 }
      ],
      'Y1S2': [
        { name: "Information Security Fundamentals", code: "CS1010", credits: 4 },
        { name: "Network Security Basics", code: "CS1020", credits: 3 },
        { name: "English for Academic Purposes", code: "IT1080", credits: 3 },
        { name: "Cryptography and Data Protection", code: "CS1030", credits: 4 },
        { name: "Web Security", code: "CS1040", credits: 4 }
      ],
      'Y2S1': [
        { name: "Secure Software Development", code: "CS2010", credits: 4 },
        { name: "Ethical Hacking", code: "CS2020", credits: 4 },
        { name: "Database Security", code: "CS2030", credits: 4 },
        { name: "Computer Networks", code: "IT2050", credits: 4 },
        { name: "Operating System Security", code: "CS2040", credits: 4 }
      ],
      'Y2S2': [
        { name: "Digital Forensics", code: "CS2050", credits: 4 },
        { name: "Penetration Testing", code: "CS2060", credits: 4 },
        { name: "IT Project", code: "IT2080", credits: 4 },
        { name: "Professional Skills", code: "IT2090", credits: 2 },
        { name: "Security Statistics", code: "CS2070", credits: 3 }
      ],
      'Y3': [
        { name: "Incident Response", code: "CS3010", credits: 4, typical_semester: "S1", core: true },
        { name: "Security Risk Management", code: "CS3020", credits: 4, typical_semester: "S1", core: true },
        { name: "Malware Analysis", code: "CS3030", credits: 4, typical_semester: "S1", core: false },
        { name: "Security Project Management", code: "CS3040", credits: 4, typical_semester: "S1", core: false },
        { name: "Advanced Cryptography", code: "CS3050", credits: 4, typical_semester: "S2", core: false },
        { name: "Security Architecture", code: "CS3060", credits: 4, typical_semester: "S2", core: false },
        { name: "Cyber Threat Intelligence", code: "CS3070", credits: 4, typical_semester: "S2", core: false },
        { name: "Industry Placement", code: "IT3110", credits: 8, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project", code: "IT4010", credits: 16, typical_semester: "Both", core: true },
        { name: "Security Governance", code: "CS4010", credits: 4, typical_semester: "S1", core: false },
        { name: "Advanced Security Topics", code: "CS4020", credits: 4, typical_semester: "S1", core: false }
      ]
    }
  },

  'information-systems': {
    '2025': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1120", credits: 4 },
        { name: "Business Information Systems", code: "IS1010", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1130", credits: 4 },
        { name: "Systems Analysis Fundamentals", code: "IS1020", credits: 4 }
      ],
      'Y1S2': [
        { name: "Discrete Mathematics", code: "IT1160", credits: 4 },
        { name: "Data Structures and Algorithms", code: "IT1170", credits: 4 },
        { name: "Business Process Management", code: "IS1030", credits: 4 },
        { name: "Technical Writing", code: "IT1150", credits: 4 }
      ],
      'Y2S1': [
        { name: "Probability and Statistics", code: "IT2120", credits: 4 },
        { name: "Object Oriented Programming", code: "SE2010", credits: 4 },
        { name: "Enterprise Systems", code: "IS2010", credits: 4 },
        { name: "Database Design and Development", code: "IT2140", credits: 4 }
      ],
      'Y2S2': [
        { name: "Business Intelligence", code: "IS2020", credits: 4 },
        { name: "IT Project", code: "IT2150", credits: 4 },
        { name: "Web and Mobile Technologies", code: "SE2020", credits: 4 },
        { name: "Professional Skills", code: "IT2160", credits: 4 }
      ],
      'Y3': [
        { name: "Industrial Economics & Management", code: "IT3120", credits: 4, typical_semester: "S1", core: true },
        { name: "Enterprise Architecture", code: "IS3010", credits: 4, typical_semester: "S1", core: true },
        { name: "IT Governance", code: "IS3020", credits: 4, typical_semester: "S1", core: true },
        { name: "Systems Integration", code: "IS3030", credits: 4, typical_semester: "S1", core: false },
        { name: "Industry Training", code: "IT3190", credits: 4, typical_semester: "S2", core: true },
        { name: "Digital Transformation", code: "IS3040", credits: 4, typical_semester: "S2", core: false },
        { name: "Business Analytics", code: "IS3050", credits: 4, typical_semester: "S2", core: false },
        { name: "Research Methods", code: "IT3160", credits: 4, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project - I", code: "IT4200", credits: 4, typical_semester: "S1", core: true },
        { name: "Strategic Information Systems", code: "IS4010", credits: 4, typical_semester: "S1", core: false },
        { name: "ERP Systems", code: "IS4020", credits: 4, typical_semester: "S1", core: false },
        { name: "Information Systems Security", code: "IS4030", credits: 4, typical_semester: "S1", core: false },
        { name: "Research Project - II", code: "IT4200", credits: 8, typical_semester: "S2", core: true },
        { name: "Current Trends in Information Systems", code: "IS4040", credits: 4, typical_semester: "S2", core: false },
        { name: "IT Service Management", code: "IS4050", credits: 4, typical_semester: "S2", core: false },
        { name: "Knowledge Management Systems", code: "IS4060", credits: 4, typical_semester: "S2", core: false }
      ]
    },
    '2021': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1010", credits: 4 },
        { name: "Business Systems", code: "IS1010", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1030", credits: 4 },
        { name: "Communication Skills", code: "IT1040", credits: 3 }
      ],
      'Y1S2': [
        { name: "Systems Analysis and Design", code: "IS1020", credits: 4 },
        { name: "Business Process Modeling", code: "IS1030", credits: 3 },
        { name: "English for Academic Purposes", code: "IT1080", credits: 3 },
        { name: "Database Fundamentals", code: "IS1040", credits: 4 },
        { name: "Web Technologies", code: "IS1050", credits: 4 }
      ],
      'Y2S1': [
        { name: "Enterprise Systems", code: "IS2010", credits: 4 },
        { name: "Object Oriented Programming", code: "IT2030", credits: 4 },
        { name: "Database Management", code: "IT2040", credits: 4 },
        { name: "Computer Networks", code: "IT2050", credits: 4 },
        { name: "Business Intelligence", code: "IS2020", credits: 4 }
      ],
      'Y2S2': [
        { name: "ERP Systems", code: "IS2030", credits: 4 },
        { name: "Information Systems Development", code: "IS2040", credits: 4 },
        { name: "IT Project", code: "IT2080", credits: 4 },
        { name: "Professional Skills", code: "IT2090", credits: 2 },
        { name: "Business Statistics", code: "IS2050", credits: 3 }
      ],
      'Y3': [
        { name: "IT Governance", code: "IS3010", credits: 4, typical_semester: "S1", core: true },
        { name: "Enterprise Architecture", code: "IS3020", credits: 4, typical_semester: "S1", core: true },
        { name: "Business Analytics", code: "IS3030", credits: 4, typical_semester: "S1", core: false },
        { name: "Project Management", code: "IT3040", credits: 4, typical_semester: "S1", core: false },
        { name: "Strategic Information Systems", code: "IS3040", credits: 4, typical_semester: "S2", core: false },
        { name: "Digital Business", code: "IS3050", credits: 4, typical_semester: "S2", core: false },
        { name: "IT Service Management", code: "IS3060", credits: 4, typical_semester: "S2", core: false },
        { name: "Industry Placement", code: "IT3110", credits: 8, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project", code: "IT4010", credits: 16, typical_semester: "Both", core: true },
        { name: "Information Systems Strategy", code: "IS4010", credits: 4, typical_semester: "S1", core: false },
        { name: "Emerging IS Technologies", code: "IS4020", credits: 4, typical_semester: "S1", core: false }
      ]
    }
  },

  'interactive-media': {
    '2025': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1120", credits: 4 },
        { name: "Digital Media Fundamentals", code: "IM1010", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1130", credits: 4 },
        { name: "Design Principles", code: "IM1020", credits: 4 }
      ],
      'Y1S2': [
        { name: "Discrete Mathematics", code: "IT1160", credits: 4 },
        { name: "Interactive Design", code: "IM1030", credits: 4 },
        { name: "Web Technologies", code: "IM1040", credits: 4 },
        { name: "Technical Writing", code: "IT1150", credits: 4 }
      ],
      'Y2S1': [
        { name: "Probability and Statistics", code: "IT2120", credits: 4 },
        { name: "Multimedia Programming", code: "IM2010", credits: 4 },
        { name: "User Experience Design", code: "IM2020", credits: 4 },
        { name: "Database Design and Development", code: "IT2140", credits: 4 }
      ],
      'Y2S2': [
        { name: "3D Graphics and Animation", code: "IM2030", credits: 4 },
        { name: "IT Project", code: "IT2150", credits: 4 },
        { name: "Game Development", code: "IM2040", credits: 4 },
        { name: "Professional Skills", code: "IT2160", credits: 4 }
      ],
      'Y3': [
        { name: "Industrial Economics & Management", code: "IT3120", credits: 4, typical_semester: "S1", core: true },
        { name: "Virtual and Augmented Reality", code: "IM3010", credits: 4, typical_semester: "S1", core: true },
        { name: "Mobile App Development", code: "IM3020", credits: 4, typical_semester: "S1", core: false },
        { name: "Digital Media Production", code: "IM3030", credits: 4, typical_semester: "S1", core: false },
        { name: "Industry Training", code: "IT3190", credits: 4, typical_semester: "S2", core: true },
        { name: "Interactive Media Analytics", code: "IM3040", credits: 4, typical_semester: "S2", core: false },
        { name: "Advanced Game Development", code: "IM3050", credits: 4, typical_semester: "S2", core: false },
        { name: "Research Methods", code: "IT3160", credits: 4, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project - I", code: "IT4200", credits: 4, typical_semester: "S1", core: true },
        { name: "AI for Interactive Media", code: "IM4010", credits: 4, typical_semester: "S1", core: false },
        { name: "Cross-Platform Development", code: "IM4020", credits: 4, typical_semester: "S1", core: false },
        { name: "Digital Marketing", code: "IM4030", credits: 4, typical_semester: "S1", core: false },
        { name: "Research Project - II", code: "IT4200", credits: 8, typical_semester: "S2", core: true },
        { name: "Current Trends in Interactive Media", code: "IM4040", credits: 4, typical_semester: "S2", core: false },
        { name: "Entrepreneurship in Digital Media", code: "IM4050", credits: 4, typical_semester: "S2", core: false },
        { name: "Interactive Media Ethics", code: "IM4060", credits: 4, typical_semester: "S2", core: false }
      ]
    },
    '2021': {
      'Y1S1': [
        { name: "Introduction to Programming", code: "IT1010", credits: 4 },
        { name: "Digital Media Basics", code: "IM1010", credits: 4 },
        { name: "Mathematics for Computing", code: "IT1030", credits: 4 },
        { name: "Communication Skills", code: "IT1040", credits: 3 }
      ],
      'Y1S2': [
        { name: "Web Design and Development", code: "IM1020", credits: 4 },
        { name: "Graphic Design", code: "IM1030", credits: 3 },
        { name: "English for Academic Purposes", code: "IT1080", credits: 3 },
        { name: "Animation Principles", code: "IM1040", credits: 4 },
        { name: "Interactive Design", code: "IM1050", credits: 4 }
      ],
      'Y2S1': [
        { name: "Game Development", code: "IM2010", credits: 4 },
        { name: "Object Oriented Programming", code: "IT2030", credits: 4 },
        { name: "Database Systems", code: "IT2040", credits: 4 },
        { name: "3D Modeling", code: "IM2020", credits: 4 },
        { name: "User Interface Design", code: "IM2030", credits: 4 }
      ],
      'Y2S2': [
        { name: "Mobile Application Development", code: "IM2040", credits: 4 },
        { name: "Interactive Media Project", code: "IM2050", credits: 4 },
        { name: "IT Project", code: "IT2080", credits: 4 },
        { name: "Professional Skills", code: "IT2090", credits: 2 },
        { name: "Digital Media Statistics", code: "IM2060", credits: 3 }
      ],
      'Y3': [
        { name: "Virtual Reality Development", code: "IM3010", credits: 4, typical_semester: "S1", core: true },
        { name: "Advanced Game Programming", code: "IM3020", credits: 4, typical_semester: "S1", core: false },
        { name: "Digital Video Production", code: "IM3030", credits: 4, typical_semester: "S1", core: false },
        { name: "Project Management", code: "IT3040", credits: 4, typical_semester: "S1", core: false },
        { name: "Augmented Reality", code: "IM3040", credits: 4, typical_semester: "S2", core: false },
        { name: "Interactive Media Business", code: "IM3050", credits: 4, typical_semester: "S2", core: false },
        { name: "Social Media Analytics", code: "IM3060", credits: 4, typical_semester: "S2", core: false },
        { name: "Industry Placement", code: "IT3110", credits: 8, typical_semester: "S2", core: true }
      ],
      'Y4': [
        { name: "Research Project", code: "IT4010", credits: 16, typical_semester: "Both", core: true },
        { name: "Emerging Media Technologies", code: "IM4010", credits: 4, typical_semester: "S1", core: false },
        { name: "Interactive Media Entrepreneurship", code: "IM4020", credits: 4, typical_semester: "S1", core: false }
      ]
    }
  }
};

// SLIIT Grade Scale (from your comprehensive calculator)
const sliitGradeScale = [
  { grade: "A+", gpa: 4.0, range: "90-100" },
  { grade: "A", gpa: 4.0, range: "80-89" },
  { grade: "A-", gpa: 3.7, range: "75-79" },
  { grade: "B+", gpa: 3.3, range: "70-74" },
  { grade: "B", gpa: 3.0, range: "65-69" },
  { grade: "B-", gpa: 2.7, range: "60-64" },
  { grade: "C+", gpa: 2.3, range: "55-59" },
  { grade: "C", gpa: 2.0, range: "45-54" },
  { grade: "C-", gpa: 1.7, range: "40-44" },
  { grade: "D+", gpa: 1.3, range: "35-39" },
  { grade: "D", gpa: 1.0, range: "30-34" },
  { grade: "E", gpa: 0.0, range: "0-29" },
];

interface Course {
  id: number;
  name: string;
  code?: string;
  credits: number;
  grade: string;
}

// Enhanced Circular Progress Component (from your comprehensive calculator)
const CircularGPAMeter = ({ gpa, size = 140 }: { gpa: number; size?: number }) => {
  const radius = (size - 40) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (gpa / 4.0) * 100;

  const getGpaColor = (gpa: number) => {
    if (gpa >= 3.7) return '#10b981';
    if (gpa >= 3.0) return '#06b6d4';
    if (gpa >= 2.0) return '#f59e0b';
    return '#ef4444';
  };

  const getGpaGradient = (gpa: number) => {
    if (gpa >= 3.7) return 'from-emerald-400 to-green-500';
    if (gpa >= 3.0) return 'from-cyan-400 to-blue-500';
    if (gpa >= 2.0) return 'from-amber-400 to-orange-500';
    return 'from-rose-400 to-red-500';
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 hidden sm:block">
        {[0, 1, 2, 3, 4].map(value => {
          const angle = (value / 4) * 270 - 135;
          const x = Math.cos((angle * Math.PI) / 180) * (radius + 25) + size / 2;
          const y = Math.sin((angle * Math.PI) / 180) * (radius + 25) + size / 2;
          return (
            <div
              key={value}
              className="absolute text-sm font-medium text-slate-500"
              style={{
                left: x - 10,
                top: y - 10,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {value.toFixed(1)}
            </div>
          );
        })}
      </div>

      <svg width={size} height={size} className="transform -rotate-[135deg]">
        <path
          d={`M ${size/2 - radius} ${size/2} A ${radius} ${radius} 0 1 1 ${size/2 + radius * Math.cos(Math.PI * 3/4)} ${size/2 + radius * Math.sin(Math.PI * 3/4)}`}
          stroke="#e5e7eb"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={`M ${size/2 - radius} ${size/2} A ${radius} ${radius} 0 1 1 ${size/2 + radius * Math.cos(Math.PI * 3/4)} ${size/2 + radius * Math.sin(Math.PI * 3/4)}`}
          stroke={getGpaColor(gpa)}
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: circumference * 0.75,
            strokeDashoffset: circumference * 0.75 - (progress / 100) * circumference * 0.75,
            transition: 'stroke-dashoffset 1s ease-out, stroke 0.3s ease-in-out',
          }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${getGpaGradient(gpa)} bg-clip-text text-transparent`}>
          {gpa.toFixed(2)}
        </div>
        <div className="text-xs text-slate-500 mt-1 font-medium">GPA</div>
        <div className="text-xs text-slate-400">of 4.0</div>
      </div>
    </div>
  );
};

export default function Home() {
  const faculties = getAllSLIITFaculties();
  
  // Unified Calculator State
  const [calculatorMode, setCalculatorMode] = useState<'foc' | 'custom'>('foc');
  
  // FOC Calculator State (reusing your comprehensive calculator logic)
  const [selectedFaculty, setSelectedFaculty] = useState<string>('software-engineering');
  const [selectedSyllabus, setSelectedSyllabus] = useState<string>('2025');
  const [selectedSemester, setSelectedSemester] = useState<string>('Y1S1');
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedY3Modules, setSelectedY3Modules] = useState<string[]>([]);
  const [selectedY4Modules, setSelectedY4Modules] = useState<string[]>([]);
  const [yearSetupMode, setYearSetupMode] = useState<{[key: string]: 'quick' | 'custom'}>({
    Y3: 'quick',
    Y4: 'quick'
  });

  // Custom Calculator State
  const [customCourses, setCustomCourses] = useState<Course[]>([]);

  // FOC Calculator Functions (reusing your exact logic)
  const handleFacultyChange = (faculty: string) => {
    setSelectedFaculty(faculty);
    setSelectedSemester('Y1S1');
    setSelectedY3Modules([]);
    setSelectedY4Modules([]);
    setCourses([]);
  };

  const handleSyllabusChange = (syllabus: string) => {
    setSelectedSyllabus(syllabus);
    setSelectedSemester('Y1S1');
    setSelectedY3Modules([]);
    setSelectedY4Modules([]);
    setCourses([]);
  };

  const handleSemesterChange = (semester: string) => {
    setSelectedSemester(semester);
    setSelectedY3Modules([]);
    setSelectedY4Modules([]);
    
    if (semester === 'Y3' || semester === 'Y4') {
      setCourses([]);
    } else if (curriculumData[selectedFaculty as keyof typeof curriculumData]?.[selectedSyllabus as keyof typeof curriculumData[keyof typeof curriculumData]]?.[semester as keyof typeof curriculumData[keyof typeof curriculumData][keyof typeof curriculumData[keyof typeof curriculumData]]]) {
      const semesterData = curriculumData[selectedFaculty as keyof typeof curriculumData][selectedSyllabus as keyof typeof curriculumData[keyof typeof curriculumData]][semester as keyof typeof curriculumData[keyof typeof curriculumData][keyof typeof curriculumData[keyof typeof curriculumData]]];
      if (Array.isArray(semesterData)) {
        setCourses(semesterData.map((course, index) => ({
          id: index + 1,
          name: course.name,
          code: course.code,
          credits: course.credits,
          grade: 'A+'
        })));
      }
    }
  };

  const handleYearModuleToggle = (year: 'Y3' | 'Y4', moduleCode: string) => {
    if (year === 'Y3') {
      setSelectedY3Modules(prev => 
        prev.includes(moduleCode) 
          ? prev.filter(code => code !== moduleCode)
          : [...prev, moduleCode]
      );
    } else {
      setSelectedY4Modules(prev => 
        prev.includes(moduleCode) 
          ? prev.filter(code => code !== moduleCode)
          : [...prev, moduleCode]
      );
    }
  };

  const loadQuickSetup = (year: 'Y3' | 'Y4') => {
    const yearData = curriculumData[selectedFaculty as keyof typeof curriculumData]?.[selectedSyllabus as keyof typeof curriculumData[keyof typeof curriculumData]]?.[year];
    if (Array.isArray(yearData)) {
      const quickModules = yearData
        .filter(module => module.core || Math.random() > 0.3)
        .map(module => module.code);
      
      if (year === 'Y3') {
        setSelectedY3Modules(quickModules);
      } else {
        setSelectedY4Modules(quickModules);
      }
    }
  };

  const generateYearCourses = () => {
    if (selectedSemester !== 'Y3' && selectedSemester !== 'Y4') return;
    
    const yearData = curriculumData[selectedFaculty as keyof typeof curriculumData]?.[selectedSyllabus as keyof typeof curriculumData[keyof typeof curriculumData]]?.[selectedSemester as 'Y3' | 'Y4'];
    if (!Array.isArray(yearData)) return;

    const selectedModules = selectedSemester === 'Y3' ? selectedY3Modules : selectedY4Modules;
    const yearCourses = yearData
      .filter(module => selectedModules.includes(module.code))
      .map((module, index) => ({
        id: index + 1,
        name: module.name,
        code: module.code,
        credits: module.credits,
        grade: 'A+' as const
      }));

    setCourses(yearCourses);
  };

  const addCourseRow = () => {
    setCourses([...courses, { id: Date.now(), name: '', credits: 3, grade: 'A+' }]);
  };

  const updateCourse = (id: number, field: keyof Omit<Course, 'id'>, value: string | number) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const removeCourseRow = (id: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  // Custom Calculator Functions
  const addCustomCourse = () => {
    const newCourse: Course = {
      id: Date.now(),
      name: '',
      code: '',
      credits: 3,
      grade: 'A+'
    };
    setCustomCourses([...customCourses, newCourse]);
  };

  const removeCustomCourse = (id: number) => {
    setCustomCourses(courses => courses.filter(course => course.id !== id));
  };

  const updateCustomCourse = (id: number, field: keyof Omit<Course, 'id'>, value: string | number) => {
    setCustomCourses(courses => courses.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  // Update courses when year module selection changes
  useMemo(() => {
    if (selectedSemester === 'Y3' || selectedSemester === 'Y4') {
      generateYearCourses();
    }
  }, [selectedY3Modules, selectedY4Modules, selectedSemester]);

  // Calculate GPA
  const calculateGPA = (courseList: Course[]) => {
    const gradeMap = new Map(sliitGradeScale.map(item => [item.grade, item.gpa]));
    const totalPoints = courseList.reduce((acc, c) => acc + ((gradeMap.get(c.grade) || 0) * c.credits), 0);
    const totalCredits = courseList.reduce((acc, c) => acc + Number(c.credits), 0);
    return totalCredits === 0 ? 0 : Number((totalPoints / totalCredits).toFixed(2));
  };

  // Get GPA Status
  const getGPAStatus = (gpa: number) => {
    if (gpa >= 3.7) return { status: 'First Class Honours', color: 'text-green-600', bg: 'bg-green-100' };
    if (gpa >= 3.0) return { status: 'Second Class Honours (Upper)', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (gpa >= 2.0) return { status: 'Second Class Honours (Lower)', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (gpa >= 1.0) return { status: 'General Pass', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { status: 'Fail', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const getGpaColor = (gpa: number) => {
    if (gpa >= 3.7) return 'text-emerald-400';
    if (gpa >= 3.0) return 'text-cyan-400';
    if (gpa >= 2.0) return 'text-amber-400';
    return 'text-rose-400';
  };

  // Get available semesters for selected faculty and syllabus
  const availableSemesters = curriculumData[selectedFaculty as keyof typeof curriculumData]?.[selectedSyllabus as keyof typeof curriculumData[keyof typeof curriculumData]]
    ? Object.keys(curriculumData[selectedFaculty as keyof typeof curriculumData][selectedSyllabus as keyof typeof curriculumData[keyof typeof curriculumData]]) 
    : [];

  // Get year modules for module pool interface
  const getYearModules = (year: 'Y3' | 'Y4') => {
    const yearData = curriculumData[selectedFaculty as keyof typeof curriculumData]?.[selectedSyllabus as keyof typeof curriculumData[keyof typeof curriculumData]]?.[year];
    return Array.isArray(yearData) ? yearData : [];
  };

  const isYearBasedSemester = selectedSemester === 'Y3' || selectedSemester === 'Y4';
  const currentCourses = calculatorMode === 'foc' ? courses : customCourses;
  const currentGPA = calculateGPA(currentCourses);
  const currentStatus = getGPAStatus(currentGPA);
  const totalCredits = currentCourses.reduce((acc, c) => acc + Number(c.credits), 0);
  const namedCourses = currentCourses.filter(c => c.name.trim() !== '');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Unified Calculator Section */}
      <section id="calculator" className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              SLIIT GPA Calculator
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Choose your calculator type and calculate your SLIIT GPA with precision
            </p>
          </div>

          {/* Unified Calculator Interface */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Tab Header */}
            <div className="border-b border-slate-200">
              <div className="grid grid-cols-2 gap-0">
                <button
                  onClick={() => setCalculatorMode('foc')}
                  className={`px-4 py-6 md:py-8 text-center transition-all duration-300 ${
                    calculatorMode === 'foc'
                      ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-xl md:text-2xl">💻</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold">Faculty of Computing</h3>
                      <p className="text-xs md:text-sm opacity-90">Complete curriculum calculator</p>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setCalculatorMode('custom')}
                  className={`px-4 py-6 md:py-8 text-center transition-all duration-300 ${
                    calculatorMode === 'custom'
                      ? 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-xl md:text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold">Other Faculties</h3>
                      <p className="text-xs md:text-sm opacity-90">Business, Engineering, Law & more</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Calculator Content */}
            <div className="p-4 md:p-8">
              
              {/* Faculty of Computing Calculator */}
              {calculatorMode === 'foc' && (
                <div className="space-y-6 md:space-y-8">
                  
                  {/* Faculty Program Selection */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">🏫</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">Select Computing Program</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {Object.entries(facultyPrograms).map(([key, program]) => {
                        const getColorClasses = (programKey: string, isSelected: boolean) => {
                          const colorMap = {
                            'software-engineering': {
                              selected: 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/25',
                              hover: 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 hover:border-blue-300'
                            },
                            'information-technology': {
                              selected: 'bg-gradient-to-br from-green-500 to-green-600 border-green-400 text-white shadow-lg shadow-green-500/25',
                              hover: 'hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 hover:border-green-300'
                            },
                            'data-science': {
                              selected: 'bg-gradient-to-br from-purple-500 to-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/25',
                              hover: 'hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 hover:border-purple-300'
                            },
                            'computer-systems-network': {
                              selected: 'bg-gradient-to-br from-cyan-500 to-cyan-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/25',
                              hover: 'hover:bg-gradient-to-br hover:from-cyan-50 hover:to-cyan-100 hover:border-cyan-300'
                            },
                            'cyber-security': {
                              selected: 'bg-gradient-to-br from-red-500 to-red-600 border-red-400 text-white shadow-lg shadow-red-500/25',
                              hover: 'hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 hover:border-red-300'
                            },
                            'information-systems': {
                              selected: 'bg-gradient-to-br from-indigo-500 to-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/25',
                              hover: 'hover:bg-gradient-to-br hover:from-indigo-50 hover:to-indigo-100 hover:border-indigo-300'
                            },
                            'interactive-media': {
                              selected: 'bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400 text-white shadow-lg shadow-pink-500/25',
                              hover: 'hover:bg-gradient-to-br hover:from-pink-50 hover:to-pink-100 hover:border-pink-300'
                            }
                          };

                          const colors = colorMap[programKey as keyof typeof colorMap];
                          if (!colors) return 'bg-white border-slate-200 text-slate-700';
                          
                          return isSelected ? colors.selected : `bg-white border-slate-200 text-slate-700 ${colors.hover}`;
                        };

                        return (
                          <button
                            key={key}
                            onClick={() => handleFacultyChange(key)}
                            className={`p-3 rounded-lg border-2 transition-all duration-300 text-sm font-medium hover:scale-105 ${getColorClasses(key, selectedFaculty === key)}`}
                          >
                            <div className="text-lg mb-2">{program.icon}</div>
                            <div className="font-bold text-xs">{program.name}</div>
                            <div className="text-xs opacity-75 mt-1">{program.code}</div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Faculty Info */}
                    {facultyPrograms[selectedFaculty as keyof typeof facultyPrograms] && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{facultyPrograms[selectedFaculty as keyof typeof facultyPrograms].icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-blue-800 mb-1">
                              {facultyPrograms[selectedFaculty as keyof typeof facultyPrograms].name}
                            </h4>
                            <p className="text-sm text-blue-700">
                              {facultyPrograms[selectedFaculty as keyof typeof facultyPrograms].description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Syllabus Selection */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-orange-600">📋</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">Select Curriculum</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => handleSyllabusChange('2025')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${
                          selectedSyllabus === '2025'
                            ? 'bg-gradient-to-br from-green-500 to-green-600 border-green-400 text-white shadow-lg shadow-green-500/25'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-green-50 hover:border-green-300'
                        }`}
                      >
                        <div className="text-lg mb-2">🆕</div>
                        <div className="font-bold">New Curriculum (2025)</div>
                        <div className="text-xs opacity-75 mt-1">Joined 2024 or later</div>
                      </button>
                      
                      <button
                        onClick={() => handleSyllabusChange('2021')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${
                          selectedSyllabus === '2021'
                            ? 'bg-gradient-to-br from-amber-500 to-amber-600 border-amber-400 text-white shadow-lg shadow-amber-500/25'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-amber-50 hover:border-amber-300'
                        }`}
                      >
                        <div className="text-lg mb-2">📚</div>
                        <div className="font-bold">Old Curriculum (2021)</div>
                        <div className="text-xs opacity-75 mt-1">Joined before 2024</div>
                      </button>
                    </div>
                  </div>

                  {/* Semester Selection */}
                  {availableSemesters.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600">📅</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Select Academic Level</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {availableSemesters.map(semester => (
                          <button
                            key={semester}
                            onClick={() => handleSemesterChange(semester)}
                            className={`p-3 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                              selectedSemester === semester
                                ? 'bg-green-500 border-green-400 text-white'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-green-50'
                            }`}
                          >
                            {semester}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Year-Based Module Selection for Y3/Y4 (reusing your exact logic) */}
                  {isYearBasedSemester && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600">🎯</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">
                          {selectedSemester} Module Selection
                        </h3>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        {/* Setup Mode Selection */}
<div className="mb-6">
  <p className="text-sm text-slate-600 mb-4">
    SLIIT offers flexible scheduling for {selectedSemester}. Choose your setup approach:
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <button
      onClick={() => {
        setYearSetupMode({...yearSetupMode, [selectedSemester]: 'quick'});
        loadQuickSetup(selectedSemester as 'Y3' | 'Y4');
      }}
      className={`p-4 rounded-lg border-2 transition-all ${
        yearSetupMode[selectedSemester] === 'quick'
          ? 'border-blue-400 bg-blue-50 text-blue-700'
          : 'border-slate-200 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300'
      }`}
    >
      <div className="text-lg mb-2">⚡</div>
      <div className="font-semibold text-sm">Quick Setup</div>
      <div className="text-xs text-blue-600">Load typical modules</div>
    </button>
    
    <button
      onClick={() => {
        setYearSetupMode({...yearSetupMode, [selectedSemester]: 'custom'});
        if (selectedSemester === 'Y3') setSelectedY3Modules([]);
        else setSelectedY4Modules([]);
      }}
      className={`p-4 rounded-lg border-2 transition-all ${
        yearSetupMode[selectedSemester] === 'custom'
          ? 'border-purple-400 bg-purple-50 text-purple-700'
          : 'border-slate-200 bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300'
      }`}
    >
      <div className="text-lg mb-2">🎛️</div>
      <div className="font-semibold text-sm">Custom Selection</div>
      <div className="text-xs text-purple-600">Choose specific modules</div>
    </button>
    
    <button
      onClick={() => loadQuickSetup(selectedSemester as 'Y3' | 'Y4')}
      className="p-4 rounded-lg border-2 border-green-200 bg-green-50 text-green-700 hover:bg-green-100 hover:border-green-300 transition-all"
    >
      <div className="text-lg mb-2">📚</div>
      <div className="font-semibold text-sm">Load All</div>
      <div className="text-xs text-green-600">Select all available</div>
    </button>
  </div>
</div>


                        {/* Module Selection Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {getYearModules(selectedSemester as 'Y3' | 'Y4').map(module => {
                            const selectedModules = selectedSemester === 'Y3' ? selectedY3Modules : selectedY4Modules;
                            const isSelected = selectedModules.includes(module.code);
                            
                            return (
                              <div
                                key={module.code}
                                onClick={() => handleYearModuleToggle(selectedSemester as 'Y3' | 'Y4', module.code)}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                  isSelected
                                    ? 'bg-blue-50 border-blue-300 shadow-md'
                                    : 'bg-white border-slate-200 hover:border-blue-200 hover:bg-blue-25'
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div className="mt-1">
                                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                      isSelected ? 'bg-blue-500 border-blue-500' : 'border-slate-300'
                                    }`}>
                                      {isSelected && <span className="text-white text-xs">✓</span>}
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                      <div className="font-bold text-slate-800 text-sm">{module.name}</div>
                                      {module.core && (
                                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded ml-2">
                                          Core
                                        </span>
                                      )}
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                                      <span>{module.code}</span>
                                      <span>•</span>
                                      <span>{module.credits} credits</span>
                                      {module.typical_semester && (
                                        <>
                                          <span>•</span>
                                          <span className="px-2 py-0.5 bg-slate-200 rounded text-xs">
                                            Usually {module.typical_semester}
                                          </span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Selection Summary */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="text-sm font-bold text-blue-800">
                              Selected: {selectedSemester === 'Y3' ? selectedY3Modules.length : selectedY4Modules.length} modules
                            </div>
                            <div className="text-xs text-blue-600">
                              {getYearModules(selectedSemester as 'Y3' | 'Y4')
                                .filter(m => (selectedSemester === 'Y3' ? selectedY3Modules : selectedY4Modules).includes(m.code))
                                .reduce((acc, m) => acc + m.credits, 0)} total credits
                            </div>
                          </div>
                          
                          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="text-sm font-bold text-green-800">
                              Core Modules: {getYearModules(selectedSemester as 'Y3' | 'Y4')
                                .filter(m => m.core && (selectedSemester === 'Y3' ? selectedY3Modules : selectedY4Modules).includes(m.code))
                                .length}
                            </div>
                            <div className="text-xs text-green-600">
                              / {getYearModules(selectedSemester as 'Y3' | 'Y4').filter(m => m.core).length} required
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              if (selectedSemester === 'Y3') setSelectedY3Modules([]);
                              else setSelectedY4Modules([]);
                            }}
                            className="p-3 text-sm text-red-600 hover:bg-red-50 rounded-lg border border-red-200 transition-colors"
                          >
                            Clear All Selections
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Course Input Section */}
                  {(!isYearBasedSemester || courses.length > 0) && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600">📝</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Course Grades</h3>
                        {!isYearBasedSemester && (
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                            {facultyPrograms[selectedFaculty as keyof typeof facultyPrograms]?.name} - {selectedSemester} ({selectedSyllabus} Curriculum)
                          </span>
                        )}
                        {isYearBasedSemester && courses.length > 0 && (
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                            {selectedSemester} Selected Modules ({selectedSyllabus} Curriculum)
                          </span>
                        )}
                      </div>

                      <div className="bg-slate-50 rounded-xl p-4 md:p-6 border border-slate-200">
                        
                        {/* Mobile: Card Layout */}
                        <div className="block md:hidden space-y-4">
                          {courses.map((course, index) => (
                            <div key={course.id} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                              <div className="flex justify-between items-center mb-3">
                                <div className="flex flex-col">
                                  <span className="text-sm font-bold text-slate-800">{course.name}</span>
                                  {course.code && <span className="text-xs text-slate-500">{course.code}</span>}
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-xs font-bold text-slate-700 mb-1">Credits</label>
                                  <div className="bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm font-bold text-slate-800 text-center">
                                    {course.credits}
                                  </div>
                                </div>
                                
                                <div>
                                  <label className="block text-xs font-bold text-slate-700 mb-1">Grade</label>
                                  <select
                                    value={course.grade}
                                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                                    className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-cyan-500"
                                  >
                                    {sliitGradeScale.map(grade => (
                                      <option key={grade.grade} value={grade.grade}>
                                        {grade.grade} ({grade.gpa})
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Desktop: Table Layout */}
                        <div className="hidden md:block overflow-x-auto">
                          <table className="w-full text-sm text-slate-800 border-collapse">
                            <thead>
                              <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                <th className="text-left py-3 pl-6 rounded-l-lg font-bold">Module Name</th>
                                <th className="w-20 text-center py-3 font-bold">Code</th>
                                <th className="w-24 text-center py-3 font-bold">Credits</th>
                                <th className="w-28 text-center py-3 pr-6 rounded-r-lg font-bold">Grade</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              {courses.map((course) => (
                                <tr key={course.id} className="hover:bg-blue-50 transition-colors duration-200">
                                  <td className="py-4 pl-6 pr-4 font-bold text-slate-800">{course.name}</td>
                                  <td className="py-4 text-center">
                                    <span className="text-xs text-slate-500 font-mono">{course.code || '-'}</span>
                                  </td>
                                  <td className="py-4 text-center">
                                    <span className="font-bold text-slate-800">{course.credits}</span>
                                  </td>
                                  <td className="py-4 pr-6 text-center">
                                    <select
                                      value={course.grade}
                                      onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                                      className="w-24 rounded-lg border-2 border-slate-300 px-2 py-2 font-bold text-slate-800 focus:border-cyan-500"
                                    >
                                      {sliitGradeScale.map(grade => (
                                        <option key={grade.grade} value={grade.grade}>
                                          {grade.grade}
                                        </option>
                                      ))}
                                    </select>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Custom Calculator for Other Faculties */}
              {calculatorMode === 'custom' && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Custom Course Calculator</h3>
                    <p className="text-slate-600">For Business, Engineering, Law, Architecture & other faculties</p>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-slate-800 mb-2 md:mb-0">Your Courses</h4>
                      <button
                        onClick={addCustomCourse}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors"
                      >
                        + Add Course
                      </button>
                    </div>

                    {customCourses.length === 0 ? (
                      <div className="text-center py-12">
                        <div className="text-6xl mb-4">📚</div>
                        <p className="text-slate-600 font-medium mb-4">No courses added yet</p>
                        <button
                          onClick={addCustomCourse}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                        >
                          Add Your First Course
                        </button>
                      </div>
                    ) : (
                      <>
                        {/* Mobile Course Cards */}
                        <div className="block md:hidden space-y-4">
                          {customCourses.map((course) => (
                            <div key={course.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                              <div className="space-y-3">
                                <div>
                                  <label className="block text-xs font-bold text-slate-700 mb-1">Course Name</label>
                                  <input
                                    type="text"
                                    value={course.name}
                                    onChange={(e) => updateCustomCourse(course.id, 'name', e.target.value)}
                                    placeholder="Enter course name"
                                    className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-green-500"
                                  />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Credits</label>
                                    <input
                                      type="number"
                                      value={course.credits}
                                      onChange={(e) => updateCustomCourse(course.id, 'credits', parseInt(e.target.value) || 0)}
                                      className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-green-500"
                                      min="1"
                                      max="8"
                                    />
                                  </div>
                                  
                                  <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Grade</label>
                                    <select
                                      value={course.grade}
                                      onChange={(e) => updateCustomCourse(course.id, 'grade', e.target.value)}
                                      className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-green-500"
                                    >
                                      {sliitGradeScale.map(grade => (
                                        <option key={grade.grade} value={grade.grade}>
                                          {grade.grade} ({grade.gpa})
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                
                                <button
                                  onClick={() => removeCustomCourse(course.id)}
                                  className="w-full bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-red-600 transition-colors"
                                >
                                  Remove Course
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Desktop Course Table */}
                        <div className="hidden md:block overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-slate-100">
                                <th className="text-left p-3 font-bold text-slate-800">Course Name</th>
                                <th className="text-left p-3 font-bold text-slate-800">Credits</th>
                                <th className="text-left p-3 font-bold text-slate-800">Grade</th>
                                <th className="text-left p-3 font-bold text-slate-800">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {customCourses.map((course) => (
                                <tr key={course.id} className="border-b border-slate-200">
                                  <td className="p-3">
                                    <input
                                      type="text"
                                      value={course.name}
                                      onChange={(e) => updateCustomCourse(course.id, 'name', e.target.value)}
                                      placeholder="Course name"
                                      className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 font-bold text-slate-800 focus:border-green-500"
                                    />
                                  </td>
                                  <td className="p-3">
                                    <input
                                      type="number"
                                      value={course.credits}
                                      onChange={(e) => updateCustomCourse(course.id, 'credits', parseInt(e.target.value) || 0)}
                                      className="w-20 rounded-lg border-2 border-slate-300 px-3 py-2 font-bold text-slate-800 focus:border-green-500"
                                      min="1"
                                      max="8"
                                    />
                                  </td>
                                  <td className="p-3">
                                    <select
                                      value={course.grade}
                                      onChange={(e) => updateCustomCourse(course.id, 'grade', e.target.value)}
                                      className="w-24 rounded-lg border-2 border-slate-300 px-3 py-2 font-bold text-slate-800 focus:border-green-500"
                                    >
                                      {sliitGradeScale.map(grade => (
                                        <option key={grade.grade} value={grade.grade}>
                                          {grade.grade}
                                        </option>
                                      ))}
                                    </select>
                                  </td>
                                  <td className="p-3">
                                    <button
                                      onClick={() => removeCustomCourse(course.id)}
                                      className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold hover:bg-red-600 transition-colors"
                                    >
                                      Remove
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Results Section */}
              {currentCourses.length > 0 && (
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200 mt-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">
                    {calculatorMode === 'foc' ? 'Faculty of Computing Results' : 'Your GPA Results'}
                  </h4>
                  
                  {/* Main GPA Display Card */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 mb-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                      
                      {/* GPA Meter */}
                      <div className="flex-shrink-0">
                        <CircularGPAMeter gpa={currentGPA} size={140} />
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                          <div className="text-2xl font-bold text-blue-600">{namedCourses.length}</div>
                          <div className="text-xs text-blue-700 font-bold mt-1">Modules</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                          <div className="text-2xl font-bold text-green-600">{totalCredits}</div>
                          <div className="text-xs text-green-700 font-bold mt-1">Credits</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                          <div className="text-2xl font-bold text-purple-600">{((currentGPA / 4.0) * 100).toFixed(0)}%</div>
                          <div className="text-xs text-purple-700 font-bold mt-1">Percentage</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                          <div className="text-2xl font-bold text-orange-600">
                            {calculatorMode === 'foc' ? selectedSyllabus : 'Custom'}
                          </div>
                          <div className="text-xs text-orange-700 font-bold mt-1">
                            {calculatorMode === 'foc' ? 'Curriculum' : 'Mode'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                 
                </div>
              )}

              {/* Quick Access to Faculty Pages */}
              <div className="mt-8 text-center">
                <p className="text-slate-600 mb-4">Need more specialized features?</p>
                <Link 
                  href="/faculty/computing" 
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-bold border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300"
                >
                  Visit Faculty-Specific Calculators →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Grading Scale Reference */}
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

      {/* SLIIT Faculties Section */}
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

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {faculties.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>
      </section>

      {/* About SLIIT Section */}
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

          {/* Statistics Grid */}
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

          {/* About Text */}
          <div className="text-center">
            <p className="text-base md:text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
              SLIIT offers a wide range of undergraduate and postgraduate programs across multiple faculties. 
              Our GPA calculator helps SLIIT students track their academic performance using the university's 
              grading system and credit structures. Whether you&apos;re in Computing, Business, Engineering, or any 
              other faculty, calculate your GPA with confidence using our specialized tools.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
