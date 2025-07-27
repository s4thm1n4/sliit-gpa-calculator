'use client';

import { useState, useMemo, useEffect } from 'react';

// All data and logic is now self-contained in this component.

const facultyPrograms = {
  'software-engineering': {
    name: 'Software Engineering',
    code: 'SE',
    description: 'Discipline of designing, creating and maintaining software',
    icon: '💻',
  },
  'information-technology': {
    name: 'Information Technology',
    code: 'IT',
    description: 'Technically focused program for strong IT foundation',
    icon: '🖥️',
  },
  'data-science': {
    name: 'Data Science',
    code: 'DS',
    description: 'Fundamentals of computer science, statistics, and applied mathematics',
    icon: '📊',
  },
  'computer-systems-network': {
    name: 'Computer Systems & Network Engineering',
    code: 'CSNE',
    description: 'Computer network engineering and systems administration',
    icon: '🌐',
  },
  'cyber-security': {
    name: 'Cyber Security',
    code: 'CS',
    description: 'Accelerated career in cyber/information security',
    icon: '🔒',
  },
  'information-systems': {
    name: 'Information Systems Engineering',
    code: 'ISE',
    description: 'Where technology meets business',
    icon: '🏢',
  },
  'interactive-media': {
    name: 'Interactive Media',
    code: 'IM',
    description: 'Create interactive media content transforming society',
    icon: '🎨',
  }
};

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

export default function FocCalculator({ preselectedProgram }: { preselectedProgram?: string }) {
  const [selectedFaculty, setSelectedFaculty] = useState<string>(preselectedProgram || 'software-engineering');
  const [selectedSyllabus, setSelectedSyllabus] = useState<string>('2025');
  const [selectedSemester, setSelectedSemester] = useState<string>('Y1S1');
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedY3Modules, setSelectedY3Modules] = useState<string[]>([]);
  const [selectedY4Modules, setSelectedY4Modules] = useState<string[]>([]);
  const [yearSetupMode, setYearSetupMode] = useState<{[key: string]: 'quick' | 'custom'}>({
    Y3: 'quick',
    Y4: 'quick'
  });

  const handleFacultyChange = (faculty: string) => {
    if (preselectedProgram) return; // Prevent changing if pre-selected
    setSelectedFaculty(faculty);
    setSelectedSemester('Y1S1');
    setCourses([]);
    setSelectedY3Modules([]);
    setSelectedY4Modules([]);
  };

  const handleSyllabusChange = (syllabus: string) => {
    setSelectedSyllabus(syllabus);
    setSelectedSemester('Y1S1');
    setCourses([]);
    setSelectedY3Modules([]);
    setSelectedY4Modules([]);
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

    const updateCourse = (id: number, field: keyof Omit<Course, 'id'>, value: string | number) => {
        setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
    };

    const addCourseRow = () => {
        setCourses([...courses, { id: Date.now(), name: '', credits: 3, grade: 'A+' }]);
    };

    const removeCourseRow = (id: number) => {
        if (courses.length > 0) {
            setCourses(courses.filter(c => c.id !== id));
        }
    };
    
    useMemo(() => {
        if (selectedSemester === 'Y3' || selectedSemester === 'Y4') {
          generateYearCourses();
        }
    }, [selectedY3Modules, selectedY4Modules, selectedSemester]);


    const calculateGPA = (courseList: Course[]) => {
        const gradeMap = new Map(sliitGradeScale.map(item => [item.grade, item.gpa]));
        const totalPoints = courseList.reduce((acc, c) => acc + ((gradeMap.get(c.grade) || 0) * c.credits), 0);
        const totalCredits = courseList.reduce((acc, c) => acc + Number(c.credits), 0);
        return totalCredits === 0 ? 0 : Number((totalPoints / totalCredits).toFixed(2));
    };

    const getYearModules = (year: 'Y3' | 'Y4') => {
        const yearData = curriculumData[selectedFaculty as keyof typeof curriculumData]?.[selectedSyllabus as keyof typeof curriculumData[keyof typeof curriculumData]]?.[year];
        return Array.isArray(yearData) ? yearData : [];
    };

    const currentGPA = calculateGPA(courses);
    const totalCredits = courses.reduce((acc, c) => acc + Number(c.credits), 0);
    const availableSemesters = curriculumData[selectedFaculty as keyof typeof curriculumData]?.[selectedSyllabus as keyof typeof curriculumData[keyof typeof curriculumData]]
        ? Object.keys(curriculumData[selectedFaculty as keyof typeof curriculumData][selectedSyllabus as keyof typeof curriculumData[keyof typeof curriculumData]]) 
        : [];
    const isYearBasedSemester = selectedSemester === 'Y3' || selectedSemester === 'Y4';
  
    useEffect(() => {
        // Automatically load the first semester's courses when the component mounts or program changes
        handleSemesterChange('Y1S1');
    }, [selectedFaculty, selectedSyllabus]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-4 md:p-8">
            <div className="space-y-6 md:space-y-8">
            <div>
                <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600">🏫</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Select Computing Program</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {Object.entries(facultyPrograms).map(([key, program]) => (
                    <button
                        key={key}
                        onClick={() => handleFacultyChange(key)}
                        disabled={!!preselectedProgram}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 text-sm font-medium hover:scale-105 
                        ${selectedFaculty === key 
                            ? 'bg-gradient-to-br from-blue-500 to-cyan-600 border-blue-400 text-white shadow-lg shadow-blue-500/25' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-300'}
                        ${preselectedProgram ? 'cursor-not-allowed opacity-80' : ''}`}
                    >
                        <div className="text-lg mb-2">{program.icon}</div>
                        <div className="font-bold text-xs">{program.name}</div>
                        <div className="text-xs opacity-75 mt-1">{program.code}</div>
                    </button>
                    ))}
                </div>
            </div>
            {/* Rest of the calculator UI */}
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
                          onClick={() => {
                            const allModuleCodes = getYearModules(selectedSemester as 'Y3' | 'Y4').map(m => m.code);
                            if (selectedSemester === 'Y3') {
                                setSelectedY3Modules(allModuleCodes);
                            } else {
                                setSelectedY4Modules(allModuleCodes);
                            }
                          }}
                          className="p-4 rounded-lg border-2 border-green-200 bg-green-50 text-green-700 hover:bg-green-100 hover:border-green-300 transition-all"
                        >
                          <div className="text-lg mb-2">📚</div>
                          <div className="font-semibold text-sm">Load All</div>
                          <div className="text-xs text-green-600">Select all available</div>
                        </button>
                      </div>
                    </div>

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
                  </div>
                </div>
            )}

            {courses.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600">📝</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">Course Grades</h3>
                    </div>
                    <button onClick={addCourseRow} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors">
                      + Add Subject
                    </button>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 md:p-6 border border-slate-200">
                    <div className="block md:hidden space-y-4">
                        {courses.map((course) => (
                            <div key={course.id} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex-1">
                                        <input 
                                            type="text"
                                            value={course.name}
                                            onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                                            className="w-full text-sm font-bold text-slate-800 bg-transparent border-none p-0 focus:ring-0"
                                            placeholder="Course Name"
                                        />
                                        {course.code && <span className="text-xs text-slate-500">{course.code}</span>}
                                    </div>
                                    <button onClick={() => removeCourseRow(course.id)} className="text-red-500 hover:text-red-700 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Credits</label>
                                        <input
                                            type="number"
                                            value={course.credits}
                                            onChange={(e) => updateCourse(course.id, 'credits', parseInt(e.target.value) || 0)}
                                            className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-cyan-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Grade</label>
                                        <select
                                            value={course.grade}
                                            onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                                            className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-cyan-500"
                                        >
                                            {sliitGradeScale.map(grade => ( <option key={grade.grade} value={grade.grade}>{grade.grade}</option>))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full text-sm text-slate-800 border-collapse">
                          <thead>
                          <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                              <th className="text-left py-3 pl-6 rounded-l-lg font-bold">Module Name</th>
                              <th className="w-20 text-center py-3 font-bold">Code</th>
                              <th className="w-24 text-center py-3 font-bold">Credits</th>
                              <th className="w-28 text-center py-3 font-bold">Grade</th>
                              <th className="w-20 text-center py-3 pr-6 rounded-r-lg font-bold"></th>
                          </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                          {courses.map((course) => (
                              <tr key={course.id} className="hover:bg-blue-50 transition-colors duration-200">
                              <td className="py-4 pl-6 pr-4 font-bold text-slate-800">
                                <input 
                                    type="text"
                                    value={course.name}
                                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                                    className="w-full bg-transparent border-none p-0 focus:ring-0"
                                    placeholder="Course Name"
                                />
                              </td>
                              <td className="py-4 text-center">
                                  <span className="text-xs text-slate-500 font-mono">{course.code || '-'}</span>
                              </td>
                              <td className="py-4 text-center">
                                  <input
                                    type="number"
                                    value={course.credits}
                                    onChange={(e) => updateCourse(course.id, 'credits', parseInt(e.target.value) || 0)}
                                    className="w-16 rounded-lg border-2 border-slate-300 px-2 py-1 font-bold text-slate-800 focus:border-cyan-500 text-center"
                                  />
                              </td>
                              <td className="py-4 text-center">
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
                              <td className="py-4 pr-6 text-center">
                                  <button onClick={() => removeCourseRow(course.id)} className="text-red-500 hover:text-red-700">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                      </svg>
                                  </button>
                              </td>
                              </tr>
                          ))}
                          </tbody>
                      </table>
                    </div>
                  </div>
                </div>
            )}

            {courses.length > 0 && (
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200 mt-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">
                    Your GPA Results
                  </h4>
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 mb-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                      <div className="flex-shrink-0">
                        <CircularGPAMeter gpa={currentGPA} size={140} />
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-2 gap-4 w-full">
                        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                          <div className="text-2xl font-bold text-blue-600">{courses.length}</div>
                          <div className="text-xs text-blue-700 font-bold mt-1">Modules</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200">
                          <div className="text-2xl font-bold text-cyan-600">{totalCredits}</div>
                          <div className="text-xs text-cyan-700 font-bold mt-1">Credits</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )}
            </div>
        </div>
    </div>
  );
}