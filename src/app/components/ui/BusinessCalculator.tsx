'use client';

import { useState } from 'react';

// Data extracted from the Business Faculty Guide 2024 v1

const businessPrograms = {
  'business-management': {
    name: 'Business Management',
    description: 'Multiple skills and abilities for the dynamic business environment.',
    icon: '📈',
  },
  'business-analytics': {
    name: 'Business Analytics',
    description: 'Applying quantitative analytical models to analyse data.',
    icon: '📊',
  },
  'marketing-management': {
    name: 'Marketing Management',
    description: 'In-depth knowledge of marketing, as practiced in today\'s competitive business environment.',
    icon: '🎯',
  },
  'accounting-finance': {
    name: 'Accounting & Finance',
    description: 'In-depth knowledge required by an expert in Accounting & Finance.',
    icon: '💰',
  },
  'human-capital-management': {
    name: 'Human Capital Management',
    description: 'Knowledge, skills and social awareness necessary to manage people both nationally and internationally.',
    icon: '👥',
  },
  'logistics-supply-chain-management': {
    name: 'Logistics & Supply Chain Management',
    description: 'Core knowledge necessary for a wide range of logistics and supply chain activities.',
    icon: '🚚',
  },
  'management-information-systems': {
    name: 'Management Information Systems',
    description: 'Applying information technology to improve business and to enhance the quality of life for individuals in the society.',
    icon: '💻',
  },
  'quality-management': {
    name: 'Quality Management',
    description: 'Crucial role in any company\'s growth and performance.',
    icon: '⭐',
  },
};

const curriculumData = {
  'business-management': {
    'Y1S1': [
      { name: 'Learning and Study Skills', code: 'BM1011', credits: 2 },
      { name: 'Principles of Management', code: 'BM1012', credits: 3 },
      { name: 'Microeconomics', code: 'BM1030', credits: 3 },
      { name: 'Business Mathematics', code: 'BM1014', credits: 3 },
      { name: 'Information Technology for Business', code: 'BM1015', credits: 3 },
      { name: 'English Language Skills', code: 'BM1016', credits: 3 },
    ],
    'Y1S2': [
      { name: 'Self-Management', code: 'BM1041', credits: 2 },
      { name: 'Macroeconomics', code: 'BM1042', credits: 3 },
      { name: 'Financial Accounting', code: 'BM1043', credits: 3 },
      { name: 'Legal & Political Environment in Business', code: 'BM1044', credits: 3 },
      { name: 'Human Resource Management', code: 'BM1045', credits: 3 },
      { name: 'Business Communication', code: 'BM1046', credits: 3 },
    ],
    'Y2S1': [
      { name: 'Personal Development Planning', code: 'BM2011', credits: 2 },
      { name: 'Organizational Behavior', code: 'BM2012', credits: 3 },
      { name: 'Business Information Systems', code: 'BM2013', credits: 3 },
      { name: 'Principles of Marketing', code: 'BM2014', credits: 3 },
      { name: 'Business Statistics', code: 'BM2015', credits: 3 },
      { name: 'Operations Management', code: 'BM2016', credits: 3 },
    ],
    'Y2S2': [
      { name: 'Leadership and Teamwork', code: 'BM2071', credits: 2 },
      { name: 'Business Negotiation', code: 'BM2072', credits: 3 },
      { name: 'Sociology and Psychology', code: 'BM2573', credits: 3 },
      { name: 'Management Accounting', code: 'BM2376', credits: 3 },
      { name: 'Financial Management', code: 'BM2373', credits: 3 },
      { name: 'Entrepreneurship and Managing Innovation', code: 'BM2576', credits: 3 },
    ],
    'Y3S1': [
        { name: 'Career Readiness and Business Etiquettes', code: 'BM3011', credits: 2 },
        { name: 'Business Ethics & Values', code: 'BM3012', credits: 2 },
        { name: 'Economic Analysis for Managers', code: 'BM3513', credits: 3 },
        { name: 'Business Law', code: 'BM3514', credits: 3 },
        { name: 'Project Management', code: 'BM3013', credits: 3 },
        { name: 'People Analytics', code: 'BM3212', credits: 3 },
    ],
    'Y3S2': [
        { name: 'Business Research Methods', code: 'BM3061', credits: 3 },
        { name: 'Business Internship', code: 'BM3031', credits: 6 },
        { name: 'Digital Marketing', code: 'BM3121', credits: 3 },
        { name: 'Human Resource Information Systems', code: 'BM3221', credits: 3 },
    ],
    'Y4S1': [
        { name: 'Comprehensive Research Project', code: 'BM4011', credits: 9 },
        { name: 'Strategic Management', code: 'BM4012', credits: 3 },
        { name: 'Crisis and Business Continuity Management', code: 'BM4513', credits: 3 },
        { name: 'Logistics & Supply Chain Management', code: 'BM4113', credits: 3 },
        { name: 'Taxation', code: 'BM4311', credits: 3 },
    ],
    'Y4S2': [
        { name: 'Diversity Management', code: 'BM4521', credits: 3 },
        { name: 'Sustainable Development in Business Environment', code: 'BM4522', credits: 3 },
        { name: 'International Business Management', code: 'BM4523', credits: 3 },
        { name: 'Managing Productivity and Quality', code: 'BM4524', credits: 3 },
    ]
  },
  'business-analytics': {
    'Y1S1': [
        { name: 'Learning and Study Skills', code: 'BM1011', credits: 1 },
        { name: 'Principles of Management', code: 'BM1012', credits: 3 },
        { name: 'Microeconomics', code: 'BM1030', credits: 3 },
        { name: 'Business Mathematics', code: 'BM1014', credits: 3 },
        { name: 'Information Technology for Business', code: 'BM1015', credits: 3 },
        { name: 'English Language Skills', code: 'BM1016', credits: 2 },
    ],
    'Y1S2': [
        { name: 'Self-Management', code: 'BM1041', credits: 1 },
        { name: 'Macroeconomics', code: 'BM1042', credits: 3 },
        { name: 'Financial Accounting', code: 'BM1043', credits: 3 },
        { name: 'Legal & Political Environment in Business', code: 'BM1044', credits: 3 },
        { name: 'Human Resource Management', code: 'BM1045', credits: 3 },
        { name: 'Business Communication', code: 'BM1046', credits: 2 },
    ],
    'Y2S1': [
        { name: 'Personal Development Planning', code: 'BM2011', credits: 1 },
        { name: 'Organizational Behavior', code: 'BM2012', credits: 3 },
        { name: 'Business Information Systems', code: 'BM2013', credits: 3 },
        { name: 'Principles of Marketing', code: 'BM2014', credits: 3 },
        { name: 'Business Statistics', code: 'BM2015', credits: 3 },
        { name: 'Operations Management', code: 'BM2016', credits: 3 },
    ],
    'Y2S2': [
        { name: 'Leadership and Teamwork', code: 'BM2071', credits: 1 },
        { name: 'Business Negotiation', code: 'BM2072', credits: 2 },
        { name: 'Foundations of Business Analytics', code: 'IM2710', credits: 3 },
        { name: 'Mastering Data Analysis in Excel', code: 'IM2711', credits: 3 },
        { name: 'Database Management Systems', code: 'IM2675', credits: 4 },
        { name: 'Digital Strategy and Innovation', code: 'IM2713', credits: 3 },
    ],
    'Y3S1': [
        { name: 'Customer Analytics', code: 'IM3721', credits: 3 },
        { name: 'Data Science in Real Life', code: 'IM3722', credits: 3 },
        { name: 'Data Visualization', code: 'IM3723', credits: 3 },
        { name: 'Career Readiness and Business Etiquettes', code: 'BM3011', credits: 1 },
        { name: 'Project Management', code: 'BM3013', credits: 3 },
        { name: 'Business Ethics and Values', code: 'BM3012', credits: 2 },
    ],
    'Y3S2': [
        { name: 'R and Python Programming', code: 'IM3641', credits: 4 },
        { name: 'Operations Analytics', code: 'IM3741', credits: 3 },
        { name: 'Business Research Methods', code: 'BM3061', credits: 3 },
        { name: 'Business Internship', code: 'BM3031', credits: 6 },
    ],
    'Y4S1': [
        { name: 'Comprehensive Research Project', code: 'BM4011', credits: 9 },
        { name: 'Strategic Management', code: 'BM4012', credits: 3 },
        { name: 'Business Metrics for Data Driven Companies', code: 'IM4710', credits: 3 },
    ],
    'Y4S2': [
        { name: 'Social Media and Web Analytics', code: 'IM4730', credits: 3 },
        { name: 'Information Systems Management and Security', code: 'IM4711', credits: 3 },
        { name: 'Supply Chain Analytics', code: 'IM4712', credits: 3 },
        { name: 'Decision Modeling for Business Analytics', code: 'IM4750', credits: 3 },
        { name: 'Data Mining and Predictive analytics', code: 'IM4751', credits: 3 },
        { name: 'Accounting Analytics', code: 'IM4740', credits: 3 },
        { name: 'People Analytics', code: 'IM4720', credits: 3 },
    ]
  },
  'marketing-management': {
    'Y1S1': [
        { name: 'Learning and Study Skills', code: 'BM1011', credits: 2 },
        { name: 'Principles of Management', code: 'BM1012', credits: 3 },
        { name: 'Microeconomics', code: 'BM1030', credits: 3 },
        { name: 'Business Mathematics', code: 'BM1014', credits: 3 },
        { name: 'Information Technology for Business', code: 'BM1015', credits: 3 },
        { name: 'English Language Skills', code: 'BM1016', credits: 2 },
    ],
    'Y1S2': [
        { name: 'Self-Management', code: 'BM1041', credits: 1 },
        { name: 'Macroeconomics', code: 'BM1042', credits: 3 },
        { name: 'Financial Accounting', code: 'BM1043', credits: 3 },
        { name: 'Legal & Political Environment in Business', code: 'BM1044', credits: 3 },
        { name: 'Human Resource Management', code: 'BM1045', credits: 3 },
        { name: 'Business Communication', code: 'BM1046', credits: 2 },
    ],
    'Y2S1': [
        { name: 'Personal Development Planning', code: 'BM2011', credits: 2 },
        { name: 'Organizational Behavior', code: 'BM2012', credits: 3 },
        { name: 'Business Information Systems', code: 'BM2013', credits: 2 },
        { name: 'Principles of Marketing', code: 'BM2014', credits: 3 },
        { name: 'Business Statistics', code: 'BM2015', credits: 3 },
        { name: 'Operations Management', code: 'BM2016', credits: 3 },
    ],
    'Y2S2': [
        { name: 'Leadership and Teamwork', code: 'BM2071', credits: 2 },
        { name: 'Business Negotiation', code: 'BM2072', credits: 3 },
        { name: 'Consumer Behavior', code: 'BM2173', credits: 3 },
        { name: 'Integrated Marketing Communication', code: 'BM2174', credits: 3 },
        { name: 'Sales Management', code: 'BM2175', credits: 3 },
        { name: 'Services Marketing', code: 'BM2176', credits: 3 },
    ],
    'Y3S1': [
        { name: 'Career Readiness and Business Etiquettes', code: 'BM3011', credits: 1 },
        { name: 'Business Ethics & Values', code: 'BM3012', credits: 2 },
        { name: 'Business Law', code: 'BM3514', credits: 3 },
        { name: 'Retail and Omnichannel Management', code: 'BM31111', credits: 3 },
        { name: 'Marketing Analytics & Decision Making', code: 'BM3112', credits: 3 },
        { name: 'Advertising', code: 'BM3214', credits: 3 },
    ],
    'Y3S2': [
        { name: 'Business Research Methods', code: 'BM3061', credits: 3 },
        { name: 'Business Internship', code: 'BM3031', credits: 6 },
        { name: 'Digital Marketing', code: 'BM3121', credits: 3 },
        { name: 'Event Management', code: 'BM3122', credits: 3 },
    ],
    'Y4S1': [
        { name: 'Comprehensive Research Project', code: 'BM4011', credits: 9 },
        { name: 'Strategic Management', code: 'BM4012', credits: 3 },
        { name: 'Strategic Brand Management', code: 'BM4111', credits: 3 },
        { name: 'Industrial, Government and Agricultural Marketing', code: 'BM4112', credits: 3 },
        { name: 'Logistics and Supply chain Management', code: 'BM4113', credits: 3 },
    ],
    'Y4S2': [
        { name: 'The Entrepreneurial Marketers', code: 'BM4121', credits: 4 },
        { name: 'Social and Sustainable Marketing', code: 'BM4122', credits: 4 },
        { name: 'Global Marketing', code: 'BM4123', credits: 4 },
    ]
  },
  'accounting-finance': {
    'Y1S1': [
        { name: 'Learning and Study Skills', code: 'BM1011', credits: 2 },
        { name: 'Principles of Management', code: 'BM1012', credits: 3 },
        { name: 'Microeconomics', code: 'BM1030', credits: 3 },
        { name: 'Business Mathematics', code: 'BM1014', credits: 3 },
        { name: 'Information Technology for Business', code: 'BM1015', credits: 3 },
        { name: 'English Language Skills', code: 'BM1016', credits: 2 },
    ],
    'Y1S2': [
        { name: 'Self-Management', code: 'BM1041', credits: 1 },
        { name: 'Macroeconomics', code: 'BM1042', credits: 3 },
        { name: 'Financial Accounting', code: 'BM1043', credits: 3 },
        { name: 'Legal & Political Environment in Business', code: 'BM1044', credits: 3 },
        { name: 'Human Resource Management', code: 'BM1045', credits: 3 },
        { name: 'Business Communication', code: 'BM1046', credits: 2 },
    ],
    'Y2S1': [
        { name: 'Personal Development Planning', code: 'BM2011', credits: 1 },
        { name: 'Organizational Behavior', code: 'BM2012', credits: 3 },
        { name: 'Business Information Systems', code: 'BM2013', credits: 2 },
        { name: 'Principles of Marketing', code: 'BM2014', credits: 3 },
        { name: 'Business Statistics', code: 'BM2015', credits: 3 },
        { name: 'Operations Management', code: 'BM2016', credits: 3 },
    ],
    'Y2S2': [
        { name: 'Leadership and Teamwork', code: 'BM2071', credits: 1 },
        { name: 'Business Negotiation', code: 'BM2072', credits: 2 },
        { name: 'Financial Management', code: 'BM2373', credits: 3 },
        { name: 'Advanced Financial Accounting', code: 'BM2374', credits: 3 },
        { name: 'Application Software in Accounting', code: 'BM2375', credits: 3 },
        { name: 'Management Accounting', code: 'BM2376', credits: 3 },
    ],
    'Y3S1': [
        { name: 'Career Readiness and Business Etiquettes', code: 'BM3011', credits: 1 },
        { name: 'Business Ethics & Values', code: 'BM3012', credits: 2 },
        { name: 'Advanced Management Accounting', code: 'BM3373', credits: 3 },
        { name: 'Financial Reporting', code: 'BM3374', credits: 3 },
        { name: 'Corporate Finance', code: 'BM3375', credits: 3 },
        { name: 'Project Management', code: 'BM3013', credits: 3 },
        { name: 'Business Law', code: 'BM3514', credits: 3 },
    ],
    'Y3S2': [
        { name: 'Business Research Methods', code: 'BM3061', credits: 3 },
        { name: 'Business Internship', code: 'BM3031', credits: 6 },
        { name: 'Financial Analysis for Business', code: 'BM3311', credits: 3 },
        { name: 'Contemporary Issues in Accounting and Finance', code: 'BM3312', credits: 3 },
    ],
    'Y4S1': [
        { name: 'Comprehensive Research Project', code: 'BM4011', credits: 9 },
        { name: 'Strategic Management', code: 'BM4012', credits: 3 },
        { name: 'Taxation', code: 'BM4311', credits: 3 },
        { name: 'Investment Analysis and Portfolio Management', code: 'BM4312', credits: 3 },
        { name: 'Forensic Accounting', code: 'BM4313', credits: 2 },
        { name: 'Data Analytics and Visualization for Accounting', code: 'BM4314', credits: 2 },
    ],
    'Y4S2': [
        { name: 'Strategic Finance', code: 'BM4321', credits: 3 },
        { name: 'International Financial Management', code: 'BM4322', credits: 3 },
        { name: 'Audit and Assurance', code: 'BM4323', credits: 3 },
        { name: 'Financial Modeling', code: 'BM4324', credits: 3 },
    ]
  },
    'human-capital-management': {
        'Y1S1': [
            { name: 'Learning and Study Skills', code: 'BM1011', credits: 1 },
            { name: 'Principles of Management', code: 'BM1012', credits: 3 },
            { name: 'Microeconomics', code: 'BM1030', credits: 3 },
            { name: 'Business Mathematics', code: 'BM1014', credits: 3 },
            { name: 'Information Technology for Business', code: 'BM1015', credits: 3 },
            { name: 'English Language Skills', code: 'BM1016', credits: 2 },
        ],
        'Y1S2': [
            { name: 'Self-Management', code: 'BM1041', credits: 1 },
            { name: 'Macroeconomics', code: 'BM1042', credits: 3 },
            { name: 'Financial Accounting', code: 'BM1043', credits: 3 },
            { name: 'Legal & Political Environment in Business', code: 'BM1044', credits: 3 },
            { name: 'Human Resource Management', code: 'BM1045', credits: 3 },
            { name: 'Business Communication', code: 'BM1046', credits: 2 },
        ],
        'Y2S1': [
            { name: 'Personal Development Planning', code: 'BM2011', credits: 3 },
            { name: 'Organizational Behavior', code: 'BM2012', credits: 3 },
            { name: 'Business Information Systems', code: 'BM2013', credits: 3 },
            { name: 'Principles of Marketing', code: 'BM2014', credits: 3 },
            { name: 'Business Statistics', code: 'BM2015', credits: 3 },
            { name: 'Operations Management', code: 'BM2016', credits: 3 },
        ],
        'Y2S2': [
            { name: 'Leadership and Teamwork', code: 'BM2071', credits: 1 },
            { name: 'Business Negotiation', code: 'BM2072', credits: 2 },
            { name: 'HR Practices', code: 'BM2273', credits: 3 },
            { name: 'Human Capital Development', code: 'BM2274', credits: 3 },
            { name: 'Managing Performance & Rewards', code: 'BM2275', credits: 3 },
            { name: 'Labour Law', code: 'BM2276', credits: 3 },
        ],
        'Y3S1': [
            { name: 'Career Readiness and Business Etiquettes', code: 'BM3011', credits: 1 },
            { name: 'Business Ethics & Values', code: 'BM3012', credits: 2 },
            { name: '4th & 5th Industrial Revolutions & Al in HCM', code: 'BM3211', credits: 3 },
            { name: 'People Analytics', code: 'BM3212', credits: 3 },
            { name: 'Occupational Health and Safety', code: 'BM3213', credits: 3 },
            { name: 'Employee Relations', code: 'BM3214', credits: 3 },
        ],
        'Y3S2': [
            { name: 'Business Research Methods', code: 'BM3061', credits: 3 },
            { name: 'Business Internship', code: 'BM3031', credits: 6 },
            { name: 'Human Resource Information Systems', code: 'BM3221', credits: 3 },
            { name: 'Organizational Change and Development', code: 'BM3222', credits: 3 },
        ],
        'Y4S1': [
            { name: 'Comprehensive Research Project', code: 'BM4011', credits: 9 },
            { name: 'Strategic Management', code: 'BM4012', credits: 3 },
            { name: 'Contemporary Issues in Human Capital Management', code: 'BM4211', credits: 3 },
            { name: 'International Perspective of Human Capital Management', code: 'BM4212', credits: 3 },
            { name: 'Lean Six Sigma in HCM', code: 'BM4213', credits: 3 },
        ],
        'Y4S2': [
            { name: 'Digital HR', code: 'BM4221', credits: 3 },
            { name: 'Strategic Human Resource Management', code: 'BM4222', credits: 3 },
            { name: 'HCM Simulation', code: 'BM4223', credits: 3 },
            { name: 'Entrepreneurship', code: 'BM4224', credits: 3 },
            { name: 'Psychology and Counselling', code: 'BM4225', credits: 3 },
            { name: 'Labour Economics', code: 'BM4226', credits: 3 },
        ]
    },
    'logistics-supply-chain-management': {
        'Y1S1': [
            { name: 'Learning and Study Skills', code: 'BM1011', credits: 1 },
            { name: 'Principles of Management', code: 'BM1012', credits: 3 },
            { name: 'Microeconomics', code: 'BM1030', credits: 3 },
            { name: 'Business Mathematics', code: 'BM1014', credits: 3 },
            { name: 'Information Technology for Business', code: 'BM1015', credits: 3 },
            { name: 'English Language Skills', code: 'BM1016', credits: 2 },
        ],
        'Y1S2': [
            { name: 'Self-Management', code: 'BM1041', credits: 1 },
            { name: 'Macroeconomics', code: 'BM1042', credits: 3 },
            { name: 'Financial Accounting', code: 'BM1043', credits: 3 },
            { name: 'Legal & Political Environment in Business', code: 'BM1044', credits: 3 },
            { name: 'Human Resource Management', code: 'BM1045', credits: 3 },
            { name: 'Business Communication', code: 'BM1046', credits: 2 },
        ],
        'Y2S1': [
            { name: 'Personal Development Planning', code: 'BM2011', credits: 1 },
            { name: 'Organizational Behavior', code: 'BM2012', credits: 3 },
            { name: 'Business Information Systems', code: 'BM2013', credits: 2 },
            { name: 'Principles of Marketing', code: 'BM2014', credits: 3 },
            { name: 'Business Statistics', code: 'BM2015', credits: 3 },
            { name: 'Operations Management', code: 'BM2016', credits: 3 },
        ],
        'Y2S2': [
            { name: 'Leadership and Teamwork', code: 'BM2071', credits: 1 },
            { name: 'Business Negotiation', code: 'BM2072', credits: 2 },
            { name: 'Supply Chain Forecasting', code: 'IM2410', credits: 3 },
            { name: 'Strategic Sourcing', code: 'IM2420', credits: 3 },
            { name: 'Inventory and Warehouse Management', code: 'IM2430', credits: 3 },
            { name: 'Lean Management', code: 'IM2440', credits: 3 },
        ],
        'Y3S1': [
            { name: 'Career Readiness and Business Etiquettes', code: 'BM3011', credits: 1 },
            { name: 'Business Ethics & Values', code: 'BM3012', credits: 2 },
            { name: 'Manufacturing Resource Planning', code: 'IM3411', credits: 4 },
            { name: 'Logistics Management', code: 'IM3421', credits: 4 },
            { name: 'Project Management', code: 'BM3013', credits: 3 },
            { name: 'Strategic Management', code: 'BM3015', credits: 3 },
        ],
        'Y3S2': [
            { name: 'Business Research Methods', code: 'BM3061', credits: 3 },
            { name: 'Business Internship', code: 'BM3031', credits: 6 },
            { name: 'Enterprise Resource Planning', code: 'IE3081', credits: 4 },
        ],
        'Y4S1': [
            { name: 'Comprehensive Research Project', code: 'BM4011', credits: 9 },
            { name: 'Global Supply Chain Management', code: 'IM4411', credits: 3 },
            { name: 'Strategic Supply Chain Management', code: 'IM4412', credits: 3 },
            { name: 'Supplier Relationship Management', code: 'IM4413', credits: 3 },
        ],
        'Y4S2': [
            { name: 'Sustainable Supply Chain Management', code: 'IM4421', credits: 3 },
            { name: 'Lean Six Sigma', code: 'IM4422', credits: 3 },
            { name: 'Transport Management', code: 'IM4423', credits: 3 },
            { name: 'Business Analytics & Simulation', code: 'IM4822', credits: 3 },
            { name: 'Data Science and Industry 4.0', code: 'IM4824', credits: 3 },
        ]
    },
    'management-information-systems': {
        'Y1S1': [
            { name: 'Learning and Study Skills', code: 'BM1011', credits: 1 },
            { name: 'Principles of Management', code: 'BM1012', credits: 3 },
            { name: 'Microeconomics', code: 'BM1030', credits: 3 },
            { name: 'Business Mathematics', code: 'BM1014', credits: 3 },
            { name: 'Information Technology for Business', code: 'BM1015', credits: 3 },
            { name: 'English Language Skills', code: 'BM1016', credits: 2 },
        ],
        'Y1S2': [
            { name: 'Self-Management', code: 'BM1041', credits: 1 },
            { name: 'Macroeconomics', code: 'BM1042', credits: 3 },
            { name: 'Financial Accounting', code: 'BM1043', credits: 3 },
            { name: 'Legal & Political Environment in Business', code: 'BM1044', credits: 3 },
            { name: 'Human Resource Management', code: 'BM1045', credits: 3 },
            { name: 'Business Communication', code: 'BM1046', credits: 2 },
        ],
        'Y2S1': [
            { name: 'Personal Development Planning', code: 'BM2011', credits: 1 },
            { name: 'Organizational Behavior', code: 'BM2012', credits: 3 },
            { name: 'Business Information Systems', code: 'BM2013', credits: 3 },
            { name: 'Principles of Marketing', code: 'BM2014', credits: 3 },
            { name: 'Business Statistics', code: 'BM2015', credits: 3 },
            { name: 'Operations Management', code: 'BM2016', credits: 3 },
        ],
        'Y2S2': [
            { name: 'Leadership and Teamwork', code: 'BM2071', credits: 1 },
            { name: 'Business Negotiation', code: 'BM2072', credits: 2 },
            { name: 'Management Information Systems', code: 'IM2673', credits: 4 },
            { name: 'Electronic Business Strategy', code: 'IM2674', credits: 4 },
            { name: 'Database Management Systems', code: 'IM2675', credits: 4 },
            { name: 'Introduction to Applications Development', code: 'IM2676', credits: 4 },
        ],
        'Y3S1': [
            { name: 'Career Readiness and Business Etiquettes', code: 'BM3011', credits: 1 },
            { name: 'Business Ethics and Values', code: 'BM3012', credits: 2 },
            { name: 'Strategic Management', code: 'BM3015', credits: 3 },
            { name: 'IS Project Management & Practice', code: 'IM3650', credits: 3 },
            { name: 'Data Management & Business Intelligence', code: 'IE3041', credits: 4 },
        ],
        'Y3S2': [
            { name: 'Business Research Methods', code: 'BM3061', credits: 3 },
            { name: 'Business Internship', code: 'BM3031', credits: 6 },
            { name: 'R and Python Programming', code: 'IM3641', credits: 4 },
            { name: 'Enterprise Resource Planning', code: 'IE3081', credits: 4 },
        ],
        'Y4S1': [
            { name: 'Comprehensive Research Project in MIS', code: 'BM4011', credits: 9 },
            { name: 'Software Quality Assurance', code: 'IM4691', credits: 4 },
            { name: 'Object Oriented Programming', code: 'IM4692', credits: 4 },
            { name: 'Digital Entrepreneurship', code: 'IM4611', credits: 3 },
            { name: 'Decision Support Systems', code: 'IM4610', credits: 3 },
        ],
        'Y4S2': [
            { name: 'Information Security & Assurance', code: 'IM4621', credits: 4 },
            { name: 'Data Communication and Networking', code: 'IM4622', credits: 4 },
            { name: 'Business Consultancy', code: 'IM4670', credits: 3 },
            { name: 'Knowledge Management', code: 'IM4671', credits: 3 },
            { name: 'IT Service Management', code: 'IM4650', credits: 3 },
        ]
    },
    'quality-management': {
        'Y1S1': [
            { name: 'Learning and Study Skills', code: 'BM1011', credits: 1 },
            { name: 'Principles of Management', code: 'BM1012', credits: 3 },
            { name: 'Microeconomics', code: 'BM1030', credits: 3 },
            { name: 'Business Mathematics', code: 'BM1014', credits: 3 },
            { name: 'Information Technology for Business', code: 'BM1015', credits: 3 },
            { name: 'English Language Skills', code: 'BM1016', credits: 2 },
        ],
        'Y1S2': [
            { name: 'Self-Management', code: 'BM1041', credits: 1 },
            { name: 'Macroeconomics', code: 'BM1042', credits: 3 },
            { name: 'Financial Accounting', code: 'BM1043', credits: 3 },
            { name: 'Legal & Political Environment in Business', code: 'BM1044', credits: 3 },
            { name: 'Human Resource Management', code: 'BM1045', credits: 3 },
            { name: 'Business Communication', code: 'BM1046', credits: 2 },
        ],
        'Y2S1': [
            { name: 'Personal Development Planning', code: 'BM2011', credits: 1 },
            { name: 'Organizational Behavior', code: 'BM2012', credits: 3 },
            { name: 'Business Information Systems', code: 'BM2013', credits: 3 },
            { name: 'Principles of Marketing', code: 'BM2014', credits: 3 },
            { name: 'Business Statistics', code: 'BM2015', credits: 3 },
            { name: 'Operations Management', code: 'BM2016', credits: 3 },
        ],
        'Y2S2': [
            { name: 'Leadership and Teamwork', code: 'BM2071', credits: 1 },
            { name: 'Business Negotiation', code: 'BM2072', credits: 2 },
            { name: 'Introduction to Quality', code: 'IM2810', credits: 3 },
            { name: 'Quality Tools and Problem-Solving Models', code: 'IM2820', credits: 3 },
            { name: 'Management System Auditing', code: 'IM2830', credits: 3 },
            { name: 'Inventory and Warehouse Management', code: 'IM2430', credits: 3 },
            { name: 'Quantitative and Qualitative Forecasting', code: 'IM2840', credits: 3 },
        ],
        'Y3S1': [
            { name: 'Career Readiness and Business Etiquettes', code: 'BM3011', credits: 1 },
            { name: 'Business Ethics and Values', code: 'BM3012', credits: 2 },
            { name: 'Strategic Management', code: 'BM3015', credits: 3 },
            { name: 'Project Management', code: 'BM3013', credits: 3 },
            { name: 'Managing Quality in Services', code: 'IM3811', credits: 3 },
            { name: 'Customer Experience and Business Process Management', code: 'IM3812', credits: 3 },
        ],
        'Y3S2': [
            { name: 'Business Research Methods', code: 'BM3061', credits: 3 },
            { name: 'Business Internship', code: 'BM3031', credits: 6 },
            { name: 'Toyota Production System and Lean Management', code: 'IM3850', credits: 3 },
            { name: 'Total Productive Maintenance', code: 'IM3870', credits: 3 },
        ],
        'Y4S1': [
            { name: 'Comprehensive Research Project', code: 'BM4011', credits: 9 },
            { name: 'Six Sigma and Lean Six Sigma', code: 'IM4810', credits: 3 },
            { name: 'Process Automation and Artificial Intelligence (AI)', code: 'IM4830', credits: 3 },
            { name: 'Business Excellence Models and Awards', code: 'IM4811', credits: 3 },
            { name: 'Quality Management System Software', code: 'IM4812', credits: 3 },
        ],
        'Y4S2': [
            { name: 'Comprehensive Research Project', code: 'BM4011', credits: 9 },
            { name: 'Experimental Design and Reliability Management', code: 'IM4821', credits: 3 },
            { name: 'Business Analytics and Simulation', code: 'IM4822', credits: 3 },
            { name: 'Managing Innovation and use of Ideation Tools', code: 'IM4823', credits: 3 },
            { name: 'Data Science and Industry 4.0', code: 'IM4824', credits: 3 },
        ]
    }
};

const sliitGradeScale = [
  { grade: 'A+', gpa: 4.0, range: '90-100' },
  { grade: 'A', gpa: 4.0, range: '80-89' },
  { grade: 'A-', gpa: 3.7, range: '75-79' },
  { grade: 'B+', gpa: 3.3, range: '70-74' },
  { grade: 'B', gpa: 3.0, range: '65-69' },
  { grade: 'B-', gpa: 2.7, range: '60-64' },
  { grade: 'C+', gpa: 2.3, range: '55-59' },
  { grade: 'C', gpa: 2.0, range: '45-54' },
  { grade: 'C-', gpa: 1.7, range: '40-44' },
  { grade: 'D+', gpa: 1.3, range: '35-39' },
  { grade: 'D', gpa: 1.0, range: '30-34' },
  { grade: 'E', gpa: 0.0, range: '0-29' },
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

export default function BusinessCalculator() {
    const [calculatorMode, setCalculatorMode] = useState<'curriculum' | 'custom'>('curriculum');
    const [selectedProgram, setSelectedProgram] = useState<string>('business-management');
    const [selectedSemester, setSelectedSemester] = useState<string>('Y1S1');
    const [courses, setCourses] = useState<Course[]>([]);
    const [customCourses, setCustomCourses] = useState<Course[]>([]);

    const handleProgramChange = (program: string) => {
        setSelectedProgram(program);
        setSelectedSemester('Y1S1');
        setCourses([]);
    };

    const handleSemesterChange = (semester: string) => {
        setSelectedSemester(semester);
        if (curriculumData[selectedProgram as keyof typeof curriculumData]?.[semester as keyof typeof curriculumData[keyof typeof curriculumData]]) {
            const semesterData = curriculumData[selectedProgram as keyof typeof curriculumData][semester as keyof typeof curriculumData[keyof typeof curriculumData]];
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

    const updateCourse = (id: number, field: keyof Omit<Course, 'id'>, value: string | number) => {
        setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
    };

    const addCourse = () => {
        const newCourse: Course = {
          id: Date.now(),
          name: '',
          code: 'CUSTOM',
          credits: 3,
          grade: 'A+'
        };
        setCourses([...courses, newCourse]);
    };

    const removeCourse = (id: number) => {
        setCourses(courses.filter(c => c.id !== id));
    };

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

    const calculateGPA = (courseList: Course[]) => {
        const gradeMap = new Map(sliitGradeScale.map(item => [item.grade, item.gpa]));
        const totalPoints = courseList.reduce((acc, c) => acc + ((gradeMap.get(c.grade) || 0) * c.credits), 0);
        const totalCredits = courseList.reduce((acc, c) => acc + Number(c.credits), 0);
        return totalCredits === 0 ? 0 : Number((totalPoints / totalCredits).toFixed(2));
    };

    const currentCourses = calculatorMode === 'curriculum' ? courses : customCourses;
    const currentGPA = calculateGPA(currentCourses);
    const totalCredits = currentCourses.reduce((acc, c) => acc + Number(c.credits), 0);
    const availableSemesters = curriculumData[selectedProgram as keyof typeof curriculumData]
        ? Object.keys(curriculumData[selectedProgram as keyof typeof curriculumData])
        : [];

  return (
    <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💼</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Faculty of Business
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Calculate your SLIIT Business faculty GPA with our specialized calculator designed for business programs
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="border-b border-slate-200">
                <div className="grid grid-cols-2 gap-0">
                    <button
                        onClick={() => setCalculatorMode('curriculum')}
                        className={`px-4 py-6 md:py-8 text-center transition-all duration-300 ${
                            calculatorMode === 'curriculum'
                            ? 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <span className="text-xl md:text-2xl">📚</span>
                            </div>
                            <div>
                            <h3 className="text-lg md:text-xl font-bold">Curriculum Calculator</h3>
                            <p className="text-xs md:text-sm opacity-90">Based on official curriculum</p>
                            </div>
                        </div>
                    </button>
                    <button
                        onClick={() => setCalculatorMode('custom')}
                        className={`px-4 py-6 md:py-8 text-center transition-all duration-300 ${
                            calculatorMode === 'custom'
                            ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <span className="text-xl md:text-2xl">✍️</span>
                            </div>
                            <div>
                            <h3 className="text-lg md:text-xl font-bold">Custom Calculator</h3>
                            <p className="text-xs md:text-sm opacity-90">Enter your own subjects</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="p-4 md:p-8">
                {calculatorMode === 'curriculum' && (
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-green-600">📈</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800">Select Business Program</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {Object.entries(businessPrograms).map(([key, program]) => (
                                <button
                                    key={key}
                                    onClick={() => handleProgramChange(key)}
                                    className={`p-3 rounded-lg border-2 transition-all duration-300 text-sm font-medium hover:scale-105 ${
                                    selectedProgram === key
                                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 border-green-400 text-white shadow-lg shadow-green-500/25'
                                        : 'bg-white border-slate-200 text-slate-700 hover:bg-green-50 hover:border-green-300'
                                    }`}
                                >
                                    <div className="text-lg mb-2">{program.icon}</div>
                                    <div className="font-bold text-xs">{program.name}</div>
                                </button>
                                ))}
                            </div>
                        </div>

                        {availableSemesters.length > 0 && (
                            <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                                <span className="text-cyan-600">📅</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800">Select Academic Level</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                                {availableSemesters.map(semester => (
                                <button
                                    key={semester}
                                    onClick={() => handleSemesterChange(semester)}
                                    className={`p-3 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                                    selectedSemester === semester
                                        ? 'bg-cyan-500 border-cyan-400 text-white'
                                        : 'bg-white border-slate-200 text-slate-700 hover:bg-cyan-50'
                                    }`}
                                >
                                    {semester}
                                </button>
                                ))}
                            </div>
                            </div>
                        )}

                        {courses.length > 0 && (
                            <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600">📝</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800">Course Grades</h3>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-4 md:p-6 border border-slate-200">
                                {/* Mobile Course Cards */}
                                <div className="block md:hidden space-y-4">
                                    {courses.map((course) => (
                                        <div key={course.id} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex flex-col">
                                                <input
                                                    type="text"
                                                    value={course.name}
                                                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                                                    placeholder="Course Name"
                                                    className="text-sm font-bold text-slate-800 bg-transparent"
                                                />
                                                {course.code && <span className="text-xs text-slate-500">{course.code}</span>}
                                                </div>
                                                <button onClick={() => removeCourse(course.id)} className="text-red-500 hover:text-red-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                                </svg>
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                <label className="block text-xs font-bold text-slate-700 mb-1">Credits</label>
                                                <input
                                                    type="number"
                                                    value={course.credits}
                                                    onChange={(e) => updateCourse(course.id, 'credits', parseInt(e.target.value) || 0)}
                                                    className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-emerald-500"
                                                    min="1"
                                                    max="8"
                                                />
                                                </div>
                                                <div>
                                                <label className="block text-xs font-bold text-slate-700 mb-1">Grade</label>
                                                <select
                                                    value={course.grade}
                                                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                                                    className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-emerald-500"
                                                >
                                                    {sliitGradeScale.map(grade => (
                                                    <option key={grade.grade} value={grade.grade}>
                                                        {grade.grade}
                                                    </option>
                                                    ))}
                                                </select>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={addCourse} className="w-full bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors mt-4">
                                        + Add Custom Subject
                                    </button>
                                </div>
                                {/* Desktop Course Table */}
                                <div className="hidden md:block overflow-x-auto">
                                <table className="w-full text-sm text-slate-800 border-collapse">
                                    <thead>
                                    <tr className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                                        <th className="text-left py-3 pl-6 rounded-l-lg font-bold">Module Name</th>
                                        <th className="w-20 text-center py-3 font-bold">Code</th>
                                        <th className="w-24 text-center py-3 font-bold">Credits</th>
                                        <th className="w-28 text-center py-3 font-bold">Grade</th>
                                        <th className="w-20 text-center py-3 pr-6 rounded-r-lg font-bold"></th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                    {courses.map((course) => (
                                        <tr key={course.id} className="hover:bg-green-50 transition-colors duration-200">
                                        <td className="py-4 pl-6 pr-4 font-bold text-slate-800">
                                            <input
                                                type="text"
                                                value={course.name}
                                                onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                                                placeholder="Course Name"
                                                className="w-full bg-transparent"
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
                                                className="w-16 rounded-lg border-2 border-slate-300 px-2 py-1 font-bold text-slate-800 focus:border-emerald-500"
                                                min="1"
                                                max="8"
                                            />
                                        </td>
                                        <td className="py-4 text-center">
                                            <select
                                            value={course.grade}
                                            onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                                            className="w-24 rounded-lg border-2 border-slate-300 px-2 py-2 font-bold text-slate-800 focus:border-emerald-500"
                                            >
                                            {sliitGradeScale.map(grade => (
                                                <option key={grade.grade} value={grade.grade}>
                                                {grade.grade}
                                                </option>
                                            ))}
                                            </select>
                                        </td>
                                        <td className="py-4 pr-6 text-center">
                                            <button onClick={() => removeCourse(course.id)} className="text-red-500 hover:text-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                            </svg>
                                            </button>
                                        </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <button onClick={addCourse} className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors mt-4">
                                    + Add Custom Subject
                                </button>
                                </div>
                            </div>
                            </div>
                        )}
                    </div>
                )}

                {calculatorMode === 'custom' && (
                    <div className="space-y-6">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Custom Course Calculator</h3>
                            <p className="text-slate-600">For any faculty and any subject combination</p>
                        </div>

                        <div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-slate-800 mb-2 md:mb-0">Your Courses</h4>
                            <button
                                onClick={addCustomCourse}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors"
                            >
                                + Add Course
                            </button>
                            </div>
                            {customCourses.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">✍️</div>
                                <p className="text-slate-600 font-medium mb-4">No courses added yet</p>
                                <button
                                onClick={addCustomCourse}
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                                >
                                Add Your First Course
                                </button>
                            </div>
                            ) : (
                            <>
                                {/* Mobile Custom Course Cards */}
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
                                            className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500"
                                        />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Credits</label>
                                            <input
                                            type="number"
                                            value={course.credits}
                                            onChange={(e) => updateCustomCourse(course.id, 'credits', parseInt(e.target.value) || 0)}
                                            className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500"
                                            min="1"
                                            max="8"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Grade</label>
                                            <select
                                            value={course.grade}
                                            onChange={(e) => updateCustomCourse(course.id, 'grade', e.target.value)}
                                            className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500"
                                            >
                                            {sliitGradeScale.map(grade => (
                                                <option key={grade.grade} value={grade.grade}>
                                                {grade.grade}
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
                                {/* Desktop Custom Course Table */}
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
                                            className="w-full rounded-lg border-2 border-slate-300 px-3 py-2 font-bold text-slate-800 focus:border-blue-500"
                                            />
                                        </td>
                                        <td className="p-3">
                                            <input
                                            type="number"
                                            value={course.credits}
                                            onChange={(e) => updateCustomCourse(course.id, 'credits', parseInt(e.target.value) || 0)}
                                            className="w-20 rounded-lg border-2 border-slate-300 px-3 py-2 font-bold text-slate-800 focus:border-blue-500"
                                            min="1"
                                            max="8"
                                            />
                                        </td>
                                        <td className="p-3">
                                            <select
                                            value={course.grade}
                                            onChange={(e) => updateCustomCourse(course.id, 'grade', e.target.value)}
                                            className="w-24 rounded-lg border-2 border-slate-300 px-3 py-2 font-bold text-slate-800 focus:border-blue-500"
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
            </div>

            {currentCourses.length > 0 && (
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
                        <div className="text-2xl font-bold text-blue-600">{currentCourses.length}</div>
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