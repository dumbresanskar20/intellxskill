// All constants / mock data for the site

import type { Course, CourseCategory } from '../types'
import databricksCourseImg from '../assets/databricks-course.png'
import sqlServerCourseImg from '../assets/sql-server-course.jpg'
import ssisPowerBiCourseImg from '../assets/ssis-powerbi-course.jpg'
import snowflakeCourseImg from '../assets/snowflake-course.png'
import coreSqlDbaCourseImg from '../assets/core-sql-dba-course.png'
import sapCourseImg from '../assets/sap-course.png'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Courses', href: '#courses' },
  { label: 'Certificates', href: '#certificate' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQs', href: 'faq' },
]

export const STATS = [
  { value: 100, suffix: '+', label: 'Hours Training', icon: 'Clock' },
  { value: 5, suffix: '', label: 'Industry Tools', icon: 'Wrench' },
  { value: 7, suffix: '+', label: 'Career Roles', icon: 'Briefcase' },
  { value: 100, suffix: '%', label: 'Job Assistance', icon: 'Trophy' },
]

export const WHY_CARDS = [
  {
    id: 1,
    icon: 'Affordable',
    title: 'Affordable Fees',
    description: 'Accessible pricing with flexible payment plans.',
  },
  {
    id: 2,
    icon: 'Industry',
    title: 'Industry Training',
    description: 'Learn from experienced industry analytics professionals.',
  },
  {
    id: 3,
    icon: 'Projects',
    title: 'Real-Time Projects',
    description: 'Build a portfolio with real-world projects.',
  },
  {
    id: 4,
    icon: 'Interviews',
    title: 'Mock Interviews',
    description: 'Prepare for interviews with expert feedback.',
  },
  {
    id: 5,
    icon: 'Assessments',
    title: 'Assessments',
    description: 'Track your progress with regular evaluations.',
  },
  {
    id: 6,
    icon: 'JobAssistance',
    title: '100% Job Assistance',
    description: 'Dedicated support for top company placements.',
  },
]






export const COURSES: Course[] = [
  // 1

  {
    id: 1,
    slug: 'advanced-data-analytics-databricks-ai',
    title: 'Advanced Data Analytics with Databricks & AI',
    category: 'Data Analytics & Business Intelligence',
    duration: '100 Hours',
    sessions: 'Live Sessions',
    mode: 'Online',
    level: 'Beginner to Advanced',

    description:
      'Master Advanced Excel with AI, SQL Server, Python for Data Analytics, Databricks, PySpark, Delta Lake, and Microsoft Power BI through practical training, real-world projects, assessments, and career-focused learning.',

    tags: [
      'Advanced Excel',
      'Excel with AI',
      'SQL Server',
      'Python',
      'Pandas',
      'NumPy',
      'Data Visualization',
      'Databricks',
      'PySpark',
      'Delta Lake',
      'Data Engineering',
      'Power BI',
      'Power Query',
      'DAX',
      'Data Analytics',
      'Business Intelligence',
    ],

    color: 'from-cyan-400 to-blue-600',
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    bannerGrad: 'from-cyan-500 via-blue-600 to-indigo-700',
    image: databricksCourseImg,
    syllabus: [
      'Microsoft Advanced Excel with AI',
      'Microsoft SQL Server',
      'Python for Data Analyst',
      'Databricks',
      'Microsoft Power BI',
    ],

    modules: [

      // =========================================================
      // CONCEPT 1 — MICROSOFT ADVANCED EXCEL WITH AI
      // =========================================================

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 1 – Excel Fundamentals',
        lessons: [
          'Introduction to Microsoft Excel interface',
          'Workbook vs Worksheet vs Table',
          'Cell, Row, Column basics',
          'Ribbon, Toolbar & Navigation',
          'Basic shortcuts for speed',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 2 – Data Entry & Formatting',
        lessons: [
          'Clean data entry standards (MIS accuracy)',
          'Formatting (fonts, alignment, styles)',
          'Conditional formatting (error/highlight tracking)',
          'Excel Tables (structured MIS data)',
          'Data validation (drop-down controls)',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 3 – Core Formulas',
        lessons: [
          'Arithmetic formulas (+, -, *, /)',
          'SUM',
          'AVERAGE',
          'MIN',
          'MAX',
          'COUNT',
          'IF',
          'IFS',
          'AND',
          'OR',
          'NOT',
          'Text functions (LEFT, RIGHT, MID, TRIM, CONCAT, TEXTJOIN)',
          'Date functions (TODAY, NOW, DATE, DATEDIF)',
          'Error handling (IFERROR)',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 4 – Advanced Functions',
        lessons: [
          'XLOOKUP',
          'XMATCH',
          'FILTER',
          'SORT',
          'SORTBY',
          'UNIQUE',
          'Dynamic arrays concept',
          'LET function',
          'LAMBDA function',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 5 – Data Cleaning',
        lessons: [
          'Power Query (ETL tool)',
          'Import Excel / CSV data',
          'Remove duplicates',
          'Null handling',
          'Split & merge columns',
          'Data transformation',
          'Append & merge datasets',
          'Auto refresh reports',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 6 – Analysis & Reporting',
        lessons: [
          'Sorting & filtering',
          'Subtotal & grouping',
          'What-if analysis',
          'Goal Seek',
          'Scenario Manager',
          'Analysis ToolPak',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 7 – Pivot Tables',
        lessons: [
          'Pivot tables from raw data',
          'Grouping & summarizing',
          'Pivot charts',
          'Slicers & timelines',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 8 – Dashboarding',
        lessons: [
          'Charts (bar, line, pie)',
          'Advanced chart formatting',
          'KPI-style report layout',
          'Interactive dashboards using slicers',
          'Dynamic reporting structure',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 9 – Automation',
        lessons: [
          'Macro recording (basic automation)',
          'Buttons for report generation',
          'Office Scripts (basic awareness)',
          'Power Automate integration (workflow idea)',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 10 – AI & Modern Excel',
        lessons: [
          'Analyze Data feature',
          'Smart insights suggestions',
          'Forecast Sheet',
          'Flash Fill intelligence',
          'Pattern detection',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 11 – MIS Reporting & Productivity Tools',
        lessons: [
          'Multiple Worksheet & Workbook Data',
          'Consolidation',
          'Dynamic Data Validation & Controlled Data Entry',
          'Named Ranges',
          'Find & Replace',
          'Go To Special',
          'Report Formatting',
          'Print Setup & PDF Export',
          'Daily MIS Report Preparation',
          'Weekly MIS Report Preparation',
          'Monthly MIS Report Preparation',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 12 – Real-World MIS Projects',
        lessons: [
          'Sales MIS Report (daily/monthly)',
          'HR Attendance Report',
          'Payroll & salary sheet',
          'Expense tracking system',
          'Inventory MIS report',
          'Automated MIS reporting system',
        ],
      },


      // =========================================================
      // CONCEPT 2 — MICROSOFT SQL SERVER
      // =========================================================

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 1 – Introduction',
        lessons: [
          'Overview of SQL Server & its editions',
          'Installation & Configuration of SQL Server',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 2 – Database Basics',
        lessons: [
          'Creating and Managing Databases',
          'Data Types in SQL Server',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 3 – Constraints',
        lessons: [
          'Primary Key',
          'Foreign Key',
          'Unique',
          'Check',
          'Default',
          'NOT NULL',
          'Identity',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 4 – SQL Commands',
        lessons: [
          'DML',
          'DDL',
          'DQL',
          'DCL',
          'TCL',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 5 – SQL Operators',
        lessons: [
          'Arithmetic',
          'Comparison',
          'Logical',
          'LIKE',
          'IN',
          'BETWEEN',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 6 – SQL Query Fundamentals',
        lessons: [
          'SELECT Statement',
          'TOP',
          'DISTINCT',
          'UNION',
          'UNION ALL',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 7 – Aggregate Functions',
        lessons: [
          'COUNT',
          'SUM',
          'MIN & MAX',
          'AVG',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 8 – SQL Clauses',
        lessons: [
          'WHERE',
          'ORDER BY',
          'GROUP BY',
          'HAVING',
          'DISTINCT',
          'TOP',
          'ALIAS',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 9 – Joins',
        lessons: [
          'INNER JOIN',
          'LEFT JOIN',
          'RIGHT JOIN',
          'FULL JOIN',
          'SELF JOIN',
          'CROSS JOIN',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 10 – Window Functions',
        lessons: [
          'ROW_NUMBER()',
          'RANK()',
          'DENSE_RANK()',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 11 – Indexing',
        lessons: [
          'Clustered Index',
          'Non-Clustered Index',
          'Query Optimization',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 12 – Advanced SQL',
        lessons: [
          'Stored Procedures',
          'CTE',
          'Views',
          'Functions',
        ],
      },


      // =========================================================
      // CONCEPT 3 — PYTHON FOR DATA ANALYST
      // =========================================================

      {
        concept: 'Python for Data Analyst',
        title: 'Module 1 – Introduction to Python',
        lessons: [
          'What is Python?',
          'Installing Python & VS Code',
          'Writing First Python Program',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 2 – Python Basics',
        lessons: [
          'Variables and Data Types',
          'Input & Output',
          'Functions',
          'Type Casting',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 3 – Python for Data Analyst',
        lessons: [
          'Python for Data Cleaning',
          'Python for Data Analysis',
          'Python for Automation',
          'Python for Visualization',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 4 – Conditional Statements',
        lessons: [
          'if',
          'if-else',
          'if-elif-else',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 5 – Loops',
        lessons: [
          'for Loop',
          'while Loop',
          'range()',
          'break',
          'continue',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 6 – Data Structures',
        lessons: [
          'Strings',
          'String Methods',
          'Slicing',
          'Lists',
          'List Methods',
          'Tuples',
          'Tuple Basics',
          'Dictionaries',
          'Dictionary Methods',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 7 – Operators',
        lessons: [
          'Arithmetic Operators',
          'Comparison Operators',
          'Logical Operators',
          'Assignment Operators',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 8 – Functions',
        lessons: [
          'Defining Functions',
          'Arguments & Return Values',
          'Lambda Functions',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 9 – File Handling',
        lessons: [
          'Reading CSV Files',
          'Writing CSV Files',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 10 – Pandas',
        lessons: [
          'Series & DataFrames',
          'Reading CSV/Excel Files',
          'Filtering Data',
          'Sorting Data',
          'GroupBy',
          'Merge & Join',
          'Handling Null Values',
          'Data Cleaning/Transformation',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 11 – Data Visualization',
        lessons: [
          'Matplotlib',
          'Line Charts',
          'Bar Charts',
          'Pie Charts',
          'Seaborn',
          'Heatmaps',
          'Distribution Plots',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 12 – Power BI + Python Integration',
        lessons: [
          'Installing / Configuring Python for Power BI',
          'Running Python Scripts in Power BI',
          'Importing Processed Data into Power BI',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 13 – NumPy',
        lessons: [
          'Arrays',
          'Indexing & Slicing',
          'Mathematical Operations',
        ],
      },


      // =========================================================
      // CONCEPT 4 — DATABRICKS
      // =========================================================

      {
        concept: 'Databricks',
        title: 'Module 1 – Introduction to Big Data',
        lessons: [
          'Evolution of Data Engineering',
          'Batch vs Real-Time Processing',
          'Why Spark?',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 2 – Databricks Overview',
        lessons: [
          'Databricks Architecture',
          'Workspace',
          'Clusters',
          'Notebooks',
          'Unity Catalog Overview',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 3 – PySpark Fundamentals',
        lessons: [
          'SparkSession',
          'RDDs, DataFrames, and Datasets',
          'Transformations vs Actions',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 4 – Data Ingestion in Databricks',
        lessons: [
          'Reading CSV',
          'Reading JSON',
          'Reading Parquet',
          'Reading from AWS S3',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 5 – Data Transformation using PySpark',
        lessons: [
          'Working with Delta Tables',
          'Filtering and Aggregations',
          'Handling Null Values',
          'String and Date Functions',
          'UDFs',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 6 – Joins and Window Functions',
        lessons: [
          'Join Types',
          'Broadcast Joins',
          'Window Functions',
          'Real-world Examples',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 7 – Delta Lake',
        lessons: [
          'ACID Transactions',
          'Time Travel',
          'Merge (Upsert)',
          'Optimize and Vacuum',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 8 – Building ETL Pipelines',
        lessons: [
          'Bronze, Silver, Gold Architecture',
          'Incremental Loading',
          'CDC Concepts',
          'Error Handling',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 9 – Performance Tuning',
        lessons: [
          'Partitioning',
          'Caching and Persistence',
          'Spark UI',
          'AQE',
          'Join Optimization',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 10 – Databricks Workflows',
        lessons: [
          'Job Scheduling',
          'Notebook Orchestration',
          'Monitoring and Alerting',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 11 – Real-Time Processing',
        lessons: [
          'Structured Streaming',
          'Kafka Integration',
          'Streaming with Delta Lake',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 12 – End-to-End Project',
        lessons: [
          'SQL Server/Salesforce → S3 → Databricks',
          'Data Transformation',
          'Delta Lake',
          'Reporting Layer',
        ],
      },

      {
        concept: 'Databricks',
        title: 'Module 13 – Industry Best Practices',
        lessons: [
          'Code Structure',
          'Reusable Framework Design',
          'CI/CD Concepts',
          'Production Deployment',
        ],
      },


      // =========================================================
      // CONCEPT 5 — MICROSOFT POWER BI
      // =========================================================

      {
        concept: 'Microsoft Power BI',
        title: 'Module 1 – Introduction to Power BI',
        lessons: [
          'What is Power BI?',
          'Why is Power BI Important?',
          'Power BI Ecosystem',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 2 – Power BI Installation & Setup',
        lessons: [
          'How to Install Power BI Desktop',
          'System Requirements',
          'First Look at Power BI Interface',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 3 – Connecting to Data Sources',
        lessons: [
          'Common Data Sources (Excel, SQL, Online Services)',
          'Import Mode vs Direct Query',
          'Live Data Refresh',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 4 – Data Transformation with Power Query',
        lessons: [
          'Cleaning & Transforming Data',
          'Removing Duplicates',
          'Handling Null Values',
          'Merging & Splitting Columns',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 5 – Data Modeling Basics',
        lessons: [
          'Creating Relationships Between Tables',
          'Understanding Star & Snowflake Schema',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 6 – Introduction to DAX',
        lessons: [
          'What is DAX?',
          'Basic Functions (SUM, COUNT, AVERAGE, IF, SWITCH)',
          'Creating Measures & Calculated Columns',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 7 – Creating Visualizations',
        lessons: [
          'Types of Charts: Bar, Line, Pie, Maps, Tables',
          'Formatting and Customizing Visuals',
          'Best Practices for Effective Data Representation',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 8 – Filters, Slicers, and Drill-through',
        lessons: [
          'Applying Filters at Different Levels',
          'Slicers and Their Use Cases',
          'Drill-through and Tooltip Pages',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 9 – Publishing & Sharing Reports',
        lessons: [
          'Publishing to Power BI Service',
          'Creating Dashboards',
          'Sharing Reports & Collaborating',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 10 – Power BI Best Practices',
        lessons: [
          'Performance Optimization Techniques',
          'Data Modeling Best Practices',
          'Visual Design Tips',
        ],
      },
    ],

    skills: [
      'Microsoft Advanced Excel',
      'Excel with AI',
      'MIS Reporting',
      'Excel Dashboarding',
      'Power Query',
      'Microsoft SQL Server',
      'SQL Query Development',
      'Advanced SQL',
      'Database Management',
      'Python',
      'Python for Data Analysis',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Data Cleaning',
      'Data Visualization',
      'Databricks',
      'PySpark',
      'Delta Lake',
      'Data Engineering',
      'ETL Pipelines',
      'Real-Time Data Processing',
      'Microsoft Power BI',
      'DAX',
      'Data Modeling',
      'Dashboard Development',
      'Business Intelligence',
      'Data Analytics',
    ],

    tools: [
      'Microsoft Excel',
      'Microsoft SQL Server',
      'SQL Server Management Studio (SSMS)',
      'Python',
      'VS Code',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Databricks',
      'PySpark',
      'Delta Lake',
      'Apache Spark',
      'AWS S3',
      'Microsoft Power BI',
      'Power Query',
      'Power BI Service',
    ],

    projects: [
      {
        title: 'Advanced Excel & MIS Reporting Project',
        desc:
          'Build real-world MIS reports including Sales MIS, HR Attendance, Payroll, Expense Tracking, Inventory MIS, dashboards, and automated MIS reporting using Advanced Excel and AI features.',
      },

      {
        title: 'Python Data Analytics Project',
        desc:
          'Perform practical data cleaning, transformation, analysis, visualization, CSV/Excel processing, and business insights using Python, Pandas, NumPy, Matplotlib, and Seaborn.',
      },

      {
        title: 'Databricks End-to-End Data Engineering Project',
        desc:
          'Build an industry-oriented data pipeline using SQL Server/Salesforce, AWS S3, Databricks, PySpark, Delta Lake, ETL processing, Bronze-Silver-Gold architecture, and reporting.',
      },

      {
        title: 'Power BI Business Intelligence Dashboard',
        desc:
          'Create interactive Power BI dashboards using Power Query, data modeling, DAX, filters, slicers, drill-through, visualization techniques, and Power BI Service.',
      },
    ],

    careers: [
      'SQL Developer',
      'Data Analyst',
      'Reporting Analyst',
      'BI Analyst',
      'MIS Executive',
      'Power BI Developer',
      'Data Visualization Specialist',
    ],

    faqs: [
      {
        q: 'How long is the course?',
        a:
          'The Advanced Data Analytics with Databricks & AI program is 100 hours and includes practical training, projects, assessments, and career support.',
      },

      {
        q: 'Is this course suitable for beginners?',
        a:
          'Yes. The program covers foundational to advanced concepts across Excel, SQL Server, Python, Databricks, and Power BI.',
      },

      {
        q: 'Is the course available online?',
        a:
          'Yes. The program is available as online training with weekday and weekend batches.',
      },

      {
        q: 'What technologies are covered?',
        a:
          'The program covers Microsoft Advanced Excel with AI, SQL Server, Python, Pandas, NumPy, Databricks, PySpark, Delta Lake, and Microsoft Power BI.',
      },

      {
        q: 'Does the course include practical projects?',
        a:
          'Yes. The program includes practical projects, real-world scenarios, assessments, quizzes, and hands-on training.',
      },

      {
        q: 'Does the program include interview preparation?',
        a:
          'Yes. The program includes interview preparation, mock sessions, and career-focused guidance.',
      },

      {
        q: 'What job roles can I target after completing this course?',
        a:
          'Potential roles include SQL Developer, Data Analyst, Reporting Analyst, BI Analyst, MIS Executive, Power BI Developer, and Data Visualization Specialist.',
      },

      {
        q: 'Is job assistance provided?',
        a:
          'The program provides career support and job assistance as described in the course syllabus.',
      },
    ],
  },


  // 2
  {
    id: 2,
    slug: 'sql-server',
    title: 'Advanced SQL Server Program',
    category: 'SQL',
    duration: '100 Hours',
    sessions: '80 Live Sessions',
    mode: 'Online (Live + Recorded)',
    level: 'Beginner to Advanced',
    description: 'Master SQL Development to Design, Build, Optimize, and Manage Enterprise-Grade Database Solutions for Real-World Business Applications.',
    tags: ['T-SQL', 'Database Design', 'Window Functions', 'Performance Tuning', 'Stored Procedures'],
    color: 'from-blue-600 via-indigo-700 to-slate-900',
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    bannerGrad: 'from-blue-600 via-blue-700 to-indigo-800',
    image: sqlServerCourseImg,
    syllabus: [
      'Database Fundamentals, Setup & SQL Data Types (Numeric, String, Date, Boolean)',
      'SQL Querying Essentials: SELECT, WHERE, HAVING, ORDER BY Clauses',
      'Data Integrity with Constraints & Relational Database Design (1NF/2NF/3NF)',
      'Dimension & Fact Table Design with Star & Snowflake Schemas',
      'Mastering SQL Joins (Inner, Left, Right, Full, Cross, Self Joins) & Set Operators',
      'Built-in Functions, Common Table Expressions (CTEs) & Subqueries',
      'Programmability: Stored Procedures, User Defined Functions (UDFs) & Triggers',
      'Performance Tuning: Indexes, Execution Plans & Query Optimization',
    ],
    modules: [
      {
        title: 'Module 1 – Database Fundamentals, Data Types & SQL Commands',
        lessons: [
          'SQL Server Overview, Editions & Architecture',
          'Installation, Configuration & Workspace Setup',
          'Database Schemas, Tables, Rows & Columns',
          'SQL Data Types (Numeric, String, Date & Time, Boolean/BIT)',
          'Introduction to SQL Commands (DDL, DML, DQL, DCL, TCL)',
        ],
      },
      {
        title: 'Module 2 – Query Filtering, Sorting & Operators',
        lessons: [
          'Query Filtering & Sorting with WHERE, HAVING, & ORDER BY Clauses',
          'Arithmetic, Comparison & Logical Operators',
          'Pattern Matching with LIKE & Range Filtering (BETWEEN, IN)',
          'Data Summarization & Grouping (GROUP BY)',
          'Data Integrity & Constraints (Primary, Foreign, Unique, Check, Default, NOT NULL)',
        ],
      },
      {
        title: 'Module 3 – Relational Database Design & SQL Joins',
        lessons: [
          'Database Normalization (1NF, 2NF, 3NF) & Star/Snowflake Schemas',
          'Dimension & Fact Table Design',
          'Querying Multiple Tables (INNER, LEFT, RIGHT, FULL OUTER JOINs)',
          'Advanced Joins (CROSS & SELF JOIN)',
          'Set Operations (UNION, UNION ALL, INTERSECT, EXCEPT)',
        ],
      },
      {
        title: 'Module 4 – SQL Functions & Advanced Querying',
        lessons: [
          'Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)',
          'Built-in SQL Functions (String, Numeric, Date/Time, Conversion)',
          'Handling NULL Values (ISNULL, COALESCE) & Conditional Logic (CASE)',
          'CTEs (Common Table Expressions) & Nested Sub-queries',
          'Views (Virtual Tables) for Security & Simplification',
        ],
      },
      {
        title: 'Module 5 – Advanced SQL Objects & Performance Tuning',
        lessons: [
          'Programmability: Stored Procedures & User Defined Functions (UDFs)',
          'Database Triggers & Event Handling',
          'Clustered vs. Non-Clustered Indexes',
          'Query Execution Plans & Optimization Techniques',
          'Performance Tuning & System Efficiency Best Practices',
        ],
      },
    ],
    skills: ['SQL Server & T-SQL', 'Database Design & Normalization', 'SQL Commands, Operators & Clauses', 'SQL Constraints & Integrity', 'Advanced SQL Joins & Set Operators', 'CTEs, Views & Subqueries', 'Stored Procedures, UDFs & Triggers', 'Performance Tuning & Optimization'],
    tools: ['Microsoft SQL Server 2022', 'SSMS 20', 'SQL Server Profiler', 'Database Engine Tuning Advisor'],
    projects: [
      { title: 'Enterprise Relational Database Design', desc: 'Design, normalize, and build a secure relational database schema with full integrity constraints.' },
      { title: 'Advanced Transactional & Analytical Querying', desc: 'Write complex analytical queries using window functions, self-joins, and set operators for business reporting.' },
      { title: 'Database Optimization & Performance Challenge', desc: 'Optimize query execution plans using proper indexing, stored procedures, and profile tools.' },
    ],
    careers: ['SQL Developer', 'Database Developer', 'Database Administrator (DBA)', 'Data Analyst', 'Data Engineer', 'BI Developer'],
    faqs: [
      { q: 'What are the prerequisites for this Advanced SQL Server program?', a: 'No prior database or programming experience is required! The program starts from foundational database concepts and progresses to advanced enterprise-grade SQL querying.' },
      { q: 'Is this course online and recorded?', a: 'Yes, this is an online training program with live sessions as well as lifetime access to recorded sessions and learning materials.' },
      { q: 'Will I receive a certificate and placement assistance?', a: 'Yes! Upon completion, you receive an industry-recognized certificate from IntellxSkill Technologies along with 100% job placement assistance.' },
      { q: 'Which SQL Server tools will we use?', a: 'We will use the latest Microsoft SQL Server 2022 and SQL Server Management Studio (SSMS 20) for hands-on labs and project work.' },
    ],
  },
  // 3
  {
    id: 3,
    slug: 'advanced-sql-server-ssis-power-bi',
    title: 'Advanced SQL Server, SSIS & Power BI Program',
    category: 'Data Analytics & Business Intelligence',
    duration: '100 Hours',
    sessions: 'Live Sessions',
    mode: 'Online',
    level: 'Beginner to Advanced',

    description:
      'Learn Modern Data Warehousing and BI Tools to Build Industry-Ready Analytics Solutions. Gain comprehensive hands-on training in Microsoft SQL Server, SQL Server Integration Services (SSIS), and Microsoft Power BI with real-time projects, assignments, and interview preparation.',

    tags: [
      'SQL Server',
      'SSIS',
      'Power BI',
      'ETL',
      'Data Warehousing',
      'Business Intelligence',
      'Data Analytics',
      'DAX',
    ],

    color: 'from-cyan-400 to-blue-600',
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    bannerGrad: 'from-cyan-500 via-blue-600 to-indigo-700',
    image: ssisPowerBiCourseImg,

    syllabus: [
      'Microsoft SQL Server',
      'SQL Server Integration Services (SSIS)',
      'Microsoft Power BI',
    ],

    modules: [

      // =========================================================
      // CONCEPT 1 — MICROSOFT SQL SERVER
      // =========================================================

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 1 – Introduction',
        lessons: [
          'Overview of SQL Server & its editions',
          'Installation & Configuration of SQL Server',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 2 – Database Basics',
        lessons: [
          'Creating and Managing Databases',
          'Data Types in SQL Server',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 3 – Constraints',
        lessons: [
          'Primary Key',
          'Foreign Key',
          'Unique',
          'Check',
          'Default',
          'NOT NULL',
          'Identity',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 4 – SQL Commands',
        lessons: [
          'DML',
          'DDL',
          'DQL',
          'DCL',
          'TCL',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 5 – SQL Operators',
        lessons: [
          'Arithmetic',
          'Comparison',
          'Logical',
          'LIKE',
          'IN',
          'BETWEEN',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 6 – SQL Query Fundamentals',
        lessons: [
          'SELECT Statement',
          'TOP',
          'DISTINCT',
          'UNION',
          'UNION ALL',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 7 – Aggregate Functions',
        lessons: [
          'COUNT',
          'SUM',
          'MIN & MAX',
          'AVG',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 8 – SQL Clauses',
        lessons: [
          'WHERE',
          'ORDER BY',
          'GROUP BY',
          'HAVING',
          'DISTINCT',
          'TOP',
          'ALIAS',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 9 – Joins',
        lessons: [
          'INNER JOIN',
          'LEFT JOIN',
          'RIGHT JOIN',
          'FULL JOIN',
          'SELF JOIN',
          'CROSS JOIN',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 10 – Window Functions',
        lessons: [
          'ROW_NUMBER()',
          'RANK()',
          'DENSE_RANK()',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 11 – Indexing',
        lessons: [
          'Clustered Index',
          'Non-Clustered Index',
          'Query Optimization',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 12 – Advanced SQL',
        lessons: [
          'Stored Procedures',
          'CTE',
          'Views',
          'Functions',
        ],
      },


      // =========================================================
      // CONCEPT 2 — SQL SERVER INTEGRATION SERVICES (SSIS)
      // =========================================================

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 1 – Data Warehousing & Business Intelligence Fundamentals',
        lessons: [
          'Introduction to Data & BI',
          'What is Data?',
          'What is Database?',
          'Introduction to Business Intelligence (BI)',
          'Introduction to Data Warehousing',
          'OLTP vs OLAP',
          'What is ETL?',
          'ETL Lifecycle',
          'Data Mart Concepts',
          'Staging Area',
          'Fact Tables & Dimension Tables',
          'Star Schema & Snowflake Schema',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 2 – Introduction to SSIS & Architecture',
        lessons: [
          'SSIS Fundamentals',
          'What is SSIS?',
          'Why SSIS?',
          'Advantages of SSIS',
          'Features of SSIS',
          'SSIS Architecture',
          'SSIS Package Structure',
          'SSIS Components',
          'Control Flow',
          'Data Flow',
          'Event Handlers',
          'Package Explorer',
          'Parameters',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 3 – Working with Control Flow',
        lessons: [
          'Control Flow Basics',
          'Tasks',
          'Containers',
          'Precedence Constraints',
          'Expressions',
          'Working with Tasks',
          'Execute SQL Task',
          'Execute Process Task',
          'Execute Package Task',
          'Script Task',
          'Send Mail Task',
          'File System Task',
          'Bulk Insert Task',
          'Data Profiling Task',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 4 – Working with Data Flow Task',
        lessons: [
          'Data Flow Architecture',
          'Sources',
          'Transformations',
          'Destinations',
          'Data Sources',
          'OLEDB Source',
          'SQL Server Source',
          'Flat File Source',
          'Excel Source',
          'Data Destinations',
          'OLEDB Destination',
          'SQL Server Destination',
          'Flat File Destination',
          'Excel Destination',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 5 – SSIS Transformations',
        lessons: [
          'Basic Transformations',
          'Derived Column Transformation',
          'Data Conversion Transformation',
          'Conditional Split Transformation',
          'Sort Transformation',
          'Aggregate Transformation',
          'Multicast Transformation',
          'Union All Transformation',
          'Merge Transformation',
          'Merge Join Transformation',
          'Advanced Transformations',
          'Lookup Transformation',
          'Slowly Changing Dimension (SCD)',
          'Row Count Transformation',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 6 – Variables, Parameters & Expressions',
        lessons: [
          'Variables',
          'System Variables',
          'User Variables',
          'Variable Scope',
          'Parameters',
          'Package Parameters',
          'Project Parameters',
          'Expressions',
          'Expression Builder',
          'Dynamic File Names',
          'Dynamic SQL Queries',
          'Dynamic Connection Strings',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 7 – Working with Files & Dynamic ETL',
        lessons: [
          'Flat File Handling',
          'Single File Processing',
          'Multiple File Processing',
          'Dynamic File Loading',
          'Excel Handling',
          'Dynamic Excel Loading',
          'Worksheet Automation',
          'Looping Techniques',
          'Foreach File Enumerator',
          'Foreach Folder Enumerator',
          'Foreach ADO Enumerator',
          'Dynamic Package Development',
          'Dynamic Variables',
          'Dynamic Connections',
          'Dynamic File Paths',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 8 – Error Handling & Debugging',
        lessons: [
          'Error Handling',
          'Redirect Rows',
          'Ignore Failures',
          'Fail Components',
          'Error Outputs',
          'Debugging Techniques',
          'Breakpoints',
          'Data Viewers',
          'Watch Window',
          'Logging',
          'SSIS Logging',
          'Log Providers',
          'Event Handling',
          'OnError',
          'OnWarning',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 9 – Package Configurations & Transactions',
        lessons: [
          'Configurations',
          'SQL Server Configuration',
          'Environment Variables',
          'Transactions',
          'Transaction Handling',
          'Commit & Rollback',
          'Checkpoints',
          'Restartability',
          'Failure Recovery',
          'Real-Time Scenarios',
          'Restart Failed Packages',
          'Recover ETL Jobs',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 10 – Deployment & SSIS Catalog',
        lessons: [
          'Deployment Models',
          'Package Deployment Model',
          'Project Deployment Model',
          'SSIS Catalog',
          'Creating SSISDB',
          'Catalog Configuration',
          'Environment Setup',
          'Package Deployment',
          'Deploy using SSDT',
          'Deploy using SSMS',
          'Package Execution',
          'Execute from SSDT',
          'Execute from SSMS',
          'Execute using DTEXEC Utility',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 11 – Scheduling & Automation',
        lessons: [
          'SQL Server Agent',
          'Creating Jobs',
          'Job Steps',
          'Scheduling Packages',
          'Monitoring Jobs',
          'Automation',
          'Daily ETL Jobs',
          'Batch Processing',
          'Automated File Handling',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 12 – SSIS Security & Administration',
        lessons: [
          'Security Concepts',
          'Protection Levels',
          'Package Encryption',
          'Roles & Permissions',
          'Administration',
          'SSIS Service Management',
          'Monitoring Package Execution',
          'Viewing Reports',
          'Catalog Reports',
        ],
      },

      {
        concept: 'SQL Server Integration Services (SSIS)',
        title: 'Module 13 – Performance Tuning & Optimization',
        lessons: [
          'Performance Optimization',
          'Fast Load Options',
          'Buffer Optimization',
          'Parallel Processing',
          'Efficient Lookup Design',
          'Package Optimization',
          'Reduce Memory Usage',
          'Improve Data Flow Speed',
          'Optimize Large Data Loads',
        ],
      },


      // =========================================================
      // CONCEPT 3 — MICROSOFT POWER BI
      // =========================================================

      {
        concept: 'Microsoft Power BI',
        title: 'Module 1 – Introduction to Power BI',
        lessons: [
          'What is Power BI?',
          'Why is Power BI Important?',
          'Power BI Ecosystem',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 2 – Power BI Installation & Setup',
        lessons: [
          'How to Install Power BI Desktop',
          'System Requirements',
          'First Look at Power BI Interface',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 3 – Connecting to Data Sources',
        lessons: [
          'Common Data Sources (Excel, SQL, Online Services)',
          'Import Mode vs. Direct Query',
          'Live Data Refresh',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 4 – Data Transformation with Power Query',
        lessons: [
          'Cleaning & Transforming Data',
          'Removing Duplicates, Handling Null Values',
          'Merging & Splitting Columns',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 5 – Data Modeling Basics',
        lessons: [
          'Creating Relationships Between Tables',
          'Understanding Star & Snowflake Schema',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 6 – Introduction to DAX',
        lessons: [
          'What is DAX?',
          'Basic Functions (SUM, COUNT, AVERAGE, IF, SWITCH)',
          'Creating Measures & Calculated Columns',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 7 – Creating Visualizations',
        lessons: [
          'Types of Charts: Bar, Line, Pie, Maps, Tables',
          'Formatting and Customizing Visuals',
          'Best Practices for Effective Data Representation',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 8 – Filters, Slicers, and Drill-through',
        lessons: [
          'Applying Filters at Different Levels',
          'Slicers and Their Use Cases',
          'Drill-through and Tooltip Pages',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 9 – Publishing & Sharing Reports',
        lessons: [
          'Publishing to Power BI Service',
          'Creating Dashboards',
          'Sharing Reports & Collaborating',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 10 – Power BI Best Practices',
        lessons: [
          'Performance Optimization Techniques',
          'Data Modeling Best Practices',
          'Visual Design Tips',
        ],
      },
    ],

    skills: [
      'Microsoft SQL Server',
      'SQL Query Development',
      'Advanced SQL',
      'Database Management',
      'Database Development',
      'Data Warehousing',
      'ETL Development',
      'SQL Server Integration Services (SSIS)',
      'Data Integration',
      'Dynamic ETL',
      'SSIS Package Development',
      'SSIS Deployment',
      'ETL Performance Optimization',
      'Microsoft Power BI',
      'Power Query',
      'DAX',
      'Data Modeling',
      'Dashboard Development',
      'Business Intelligence',
      'Data Analytics',
    ],

    tools: [
      'Microsoft SQL Server',
      'SQL Server Management Studio (SSMS)',
      'SQL Server Integration Services (SSIS)',
      'SQL Server Data Tools (SSDT)',
      'SQL Server Agent',
      'DTEXEC Utility',
      'Power BI Desktop',
      'Power BI Service',
    ],

    projects: [
      {
        title: 'SQL Server Data Analytics Project',
        desc:
          'Apply SQL Server database development, SQL queries, data manipulation, joins, functions, indexing, stored procedures, and query optimization to real-world business data.',
      },
      {
        title: 'SSIS ETL & Data Warehousing Project',
        desc:
          'Build industry-based ETL workflows using SSIS for data extraction, transformation, loading, dynamic file processing, data warehousing, deployment, scheduling, and optimization.',
      },
      {
        title: 'Power BI Business Intelligence Dashboard',
        desc:
          'Create interactive dashboards and reports using real-world datasets with Power Query, data modeling, DAX, filters, slicers, drill-through, and Power BI Service.',
      },
    ],

    careers: [
      'SQL Developer',
      'Database Administrator (DBA)',
      'Data Analyst',
      'Database Engineer',
      'SSIS Developer',
      'Data Integration Specialist',
      'ETL Developer',
      'Data Engineer',
      'Power BI Developer',
      'Business Intelligence Analyst',
      'Reporting Analyst',
      'BI Consultant',
    ],

    faqs: [
      {
        q: 'How long is the course?',
        a:
          'The complete Advanced SQL Server, SSIS & Power BI Program is 100 hours and includes real-time projects, assignments, and interview preparation.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a:
          'Yes. The program is designed from Beginner to Advanced level and covers SQL Server, SSIS, and Power BI.',
      },
      {
        q: 'Is the course available online?',
        a:
          'Yes. The program is offered online with live sessions and practical training.',
      },
      {
        q: 'Does the course include real-time projects?',
        a:
          'Yes. The program includes real-time projects, industry-based projects, case studies, practical assignments, and hands-on training.',
      },
      {
        q: 'Who is this course for?',
        a:
          'The course is designed for SQL professionals, Data Analysts, ETL Developers, Power BI Developers, Business Intelligence professionals, IT professionals transitioning into Data Analytics and Business Intelligence, and professionals preparing for advanced SQL Server, SSIS and Power BI roles.',
      },
      {
        q: 'Does the program include interview preparation?',
        a:
          'Yes. The program includes interview preparation along with mock sessions, resume building, commonly asked questions, and communication guidance.',
      },
      {
        q: 'Is placement assistance provided?',
        a:
          'Yes. Placement assistance includes job referrals, placement guidance, portfolio building, and career opportunities.',
      },
    ],
  },
  // 4
  {
    id: 4,
    slug: 'advanced-data-analytics-snowflake-ai',
    title: 'Advanced Data Analytics with Snowflake & AI',
    category: 'Data Analytics & AI',
    duration: '100 Hours',
    sessions: 'Online Training',
    mode: 'Online',
    level: 'Beginner to Advanced',

    description:
      'Master modern data analytics with Microsoft Excel, SQL Server, Python, Snowflake, and Power BI. Build practical skills in data cleaning, analysis, automation, cloud data warehousing, data visualization, business intelligence, and AI-powered Excel analytics using real-world datasets and practical projects.',

    tags: [
      'Advanced Excel',
      'Excel with AI',
      'SQL Server',
      'Python',
      'Pandas',
      'NumPy',
      'Snowflake',
      'Power BI',
      'Data Analytics',
      'Data Visualization',
      'Data Warehousing',
      'Business Intelligence',
    ],

    color: 'from-purple-400 to-blue-600',
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    bannerGrad: 'from-purple-500 via-blue-600 to-cyan-700',
    image: snowflakeCourseImg,

    syllabus: [
      'Microsoft Advanced Excel with AI',
      'Microsoft SQL Server',
      'Python for Data Analyst',
      'Snowflake',
      'Microsoft Power BI',
    ],

    modules: [

      // =========================================================
      // CONCEPT 1 — MICROSOFT ADVANCED EXCEL WITH AI
      // =========================================================

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 1 – Excel Fundamentals',
        lessons: [
          'Introduction to Microsoft Excel interface',
          'Workbook vs Worksheet vs Table',
          'Cell, Row, Column basics',
          'Ribbon, Toolbar & Navigation',
          'Basic shortcuts for speed',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 2 – Data Entry & Formatting',
        lessons: [
          'Clean data entry standards (MIS accuracy)',
          'Formatting (fonts, alignment, styles)',
          'Conditional formatting (error/highlight tracking)',
          'Excel Tables (structured MIS data)',
          'Data validation (drop-down controls)',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 3 – Core Formulas',
        lessons: [
          'Arithmetic formulas (+, -, *, /)',
          'SUM, AVERAGE, MIN, MAX, COUNT',
          'IF, IFS, AND, OR, NOT',
          'Text functions (LEFT, RIGHT, MID, TRIM, CONCAT, TEXTJOIN)',
          'Date functions (TODAY, NOW, DATE, DATEDIF)',
          'Error handling (IFERROR)',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 4 – Advanced Functions',
        lessons: [
          'XLOOKUP, XMATCH',
          'FILTER, SORT, SORTBY, UNIQUE',
          'Dynamic arrays concept',
          'LET function',
          'LAMBDA function',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 5 – Data Cleaning',
        lessons: [
          'Power Query (ETL tool)',
          'Import Excel / CSV data',
          'Remove duplicates, null handling',
          'Split & merge columns',
          'Data transformation',
          'Append & merge datasets',
          'Auto refresh reports',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 6 – Analysis & Reporting',
        lessons: [
          'Sorting & filtering',
          'Subtotal & grouping',
          'What-if analysis',
          'Goal Seek',
          'Scenario Manager',
          'Analysis ToolPak',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 7 – Pivot Tables',
        lessons: [
          'Pivot tables from raw data',
          'Grouping & summarizing',
          'Pivot charts',
          'Slicers & timelines',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 8 – Dashboarding',
        lessons: [
          'Charts (bar, line, pie)',
          'Advanced chart formatting',
          'KPI-style report layout (visual MIS reporting)',
          'Interactive dashboards using slicers',
          'Dynamic reporting structure',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 9 – Automation',
        lessons: [
          'Macro recording (basic automation)',
          'Buttons for report generation',
          'Office Scripts (basic awareness)',
          'Power Automate integration (workflow idea)',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 10 – AI & Modern Excel',
        lessons: [
          'Analyze Data feature',
          'Smart insights suggestions',
          'Forecast Sheet',
          'Flash Fill intelligence',
          'Pattern detection',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 11 – MIS Reporting & Productivity Tools',
        lessons: [
          'Multiple Worksheet & Workbook Data',
          'Consolidation',
          'Dynamic Data Validation & Controlled Data Entry',
          'Named Ranges, Find & Replace, Go To Special',
          'Report Formatting, Print Setup & PDF Export',
          'Daily, Weekly & Monthly MIS Report Preparation',
        ],
      },

      {
        concept: 'Microsoft Advanced Excel with AI',
        title: 'Module 12 – Real-World MIS Projects',
        lessons: [
          'Sales MIS Report (daily/monthly)',
          'HR Attendance Report',
          'Payroll & salary sheet',
          'Expense tracking system',
          'Inventory MIS report',
          'Automated MIS reporting system',
        ],
      },


      // =========================================================
      // CONCEPT 2 — MICROSOFT SQL SERVER
      // =========================================================

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 1 – Introduction',
        lessons: [
          'Overview of SQL Server & its editions',
          'Installation & Configuration of SQL Server',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 2 – Database Basics',
        lessons: [
          'Creating and Managing Databases',
          'Data Types in SQL Server',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 3 – Constraints',
        lessons: [
          'Primary Key',
          'Foreign Key',
          'Unique',
          'Check',
          'Default',
          'NOT NULL',
          'Identity',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 4 – SQL Commands',
        lessons: [
          'DML',
          'DDL',
          'DQL',
          'DCL',
          'TCL',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 5 – SQL Operators',
        lessons: [
          'Arithmetic',
          'Comparison',
          'Logical',
          'LIKE',
          'IN',
          'BETWEEN',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 6 – SQL Query Fundamentals',
        lessons: [
          'SELECT Statement',
          'TOP',
          'DISTINCT',
          'UNION',
          'UNION ALL',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 7 – Aggregate Functions',
        lessons: [
          'COUNT',
          'SUM',
          'MIN & MAX',
          'AVG',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 8 – SQL Clauses',
        lessons: [
          'WHERE',
          'ORDER BY',
          'GROUP BY',
          'HAVING',
          'DISTINCT',
          'TOP',
          'ALIAS',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 9 – Joins',
        lessons: [
          'INNER JOIN',
          'LEFT JOIN',
          'RIGHT JOIN',
          'FULL JOIN',
          'SELF JOIN',
          'CROSS JOIN',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 10 – Window Functions',
        lessons: [
          'ROW_NUMBER()',
          'RANK()',
          'DENSE_RANK()',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 11 – Indexing',
        lessons: [
          'Clustered Index',
          'Non-Clustered Index',
          'Query Optimization',
        ],
      },

      {
        concept: 'Microsoft SQL Server',
        title: 'Module 12 – Advanced SQL',
        lessons: [
          'Stored Procedures',
          'CTE',
          'Views',
          'Functions',
        ],
      },


      // =========================================================
      // CONCEPT 3 — PYTHON FOR DATA ANALYST
      // =========================================================

      {
        concept: 'Python for Data Analyst',
        title: 'Module 1 – Introduction to Python',
        lessons: [
          'What is Python?',
          'Installing Python & VS Code',
          'Writing First Python Program',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 2 – Python Basics',
        lessons: [
          'Variables and Data Types',
          'Input & Output',
          'Functions',
          'Type Casting',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 3 – Conditional Statements',
        lessons: [
          'if',
          'if-else',
          'if-elif-else',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 4 – Loops',
        lessons: [
          'for Loop',
          'while Loop',
          'range()',
          'break',
          'continue',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 5 – Data Structures',
        lessons: [
          'Strings',
          'String Methods',
          'Slicing',
          'Lists',
          'List Methods',
          'Tuples',
          'Tuple Basics',
          'Dictionaries',
          'Dictionary Methods',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 6 – Operators',
        lessons: [
          'Arithmetic Operators',
          'Comparison Operators',
          'Logical Operators',
          'Assignment Operators',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 7 – Functions',
        lessons: [
          'Defining Functions',
          'Arguments & Return Values',
          'Lambda Functions',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 8 – File Handling',
        lessons: [
          'Reading CSV Files',
          'Writing CSV Files',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 9 – NumPy',
        lessons: [
          'Arrays',
          'Indexing & Slicing',
          'Mathematical Operations',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 10 – Pandas',
        lessons: [
          'Series & DataFrames',
          'Reading CSV/Excel Files',
          'Filtering Data',
          'Sorting Data',
          'GroupBy',
          'Merge & Join',
          'Handling Null Values',
          'Data Cleaning/Transformation',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 11 – Data Visualization',
        lessons: [
          'Matplotlib',
          'Line Charts',
          'Bar Charts',
          'Pie Charts',
          'Seaborn',
          'Heatmaps',
          'Distribution Plots',
        ],
      },

      {
        concept: 'Python for Data Analyst',
        title: 'Module 12 – Power BI + Python Integration',
        lessons: [
          'Installing /Configuring Python for Power BI',
          'Running Python Scripts in Power BI',
          'Importing Python Processed Data into Power BI',
        ],
      },


      // =========================================================
      // CONCEPT 4 — SNOWFLAKE
      // =========================================================

      {
        concept: 'Snowflake',
        title: 'Module 1 – Data Warehouse Fundamentals',
        lessons: [
          'Data Warehouse Concepts',
          'OLTP vs OLAP',
          'Snowflake Overview',
          'Snowflake Architecture',
          'Object Hierarchy',
        ],
      },

      {
        concept: 'Snowflake',
        title: 'Module 2 – Snowflake Environment Setup',
        lessons: [
          'Snowflake Account Setup',
          'Snowsight Interface',
          'Databases & Schemas',
          'Virtual Warehouses',
          'Users & Roles',
        ],
      },

      {
        concept: 'Snowflake',
        title: 'Module 3 – Snowflake SQL Overview',
        lessons: [
          'DDL Commands',
          'DML Commands',
          'Query Execution',
          'Data Retrieval',
          'SQL in Snowflake',
        ],
      },

      {
        concept: 'Snowflake',
        title: 'Module 4 – Snowflake Database Objects',
        lessons: [
          'Permanent Tables',
          'Temporary Tables',
          'Transient Tables',
          'Views',
          'Secure Views',
          'Materialized Views',
        ],
      },

      {
        concept: 'Snowflake',
        title: 'Module 5 – Data Modeling in Snowflake',
        lessons: [
          'Fact Tables',
          'Dimension Tables',
          'Star Schema',
          'Snowflake Schema',
          'Analytical Data Models',
        ],
      },

      {
        concept: 'Snowflake',
        title: 'Module 6 – Performance Optimization',
        lessons: [
          'Virtual Warehouses',
          'Auto Suspend & Resume',
          'Query History',
          'Query Profile',
          'Cost Optimization',
        ],
      },

      {
        concept: 'Snowflake',
        title: 'Module 7 – Advanced Snowflake Features',
        lessons: [
          'Time Travel',
          'Zero-Copy Cloning',
          'Data Sharing Overview',
          'Streams & Tasks Overview',
        ],
      },

      {
        concept: 'Snowflake',
        title: 'Module 8 – Data Loading & Unloading',
        lessons: [
          'Internal Stages',
          'External Stages',
          'File Formats',
          'Loading CSV Files',
          'COPY INTO Command',
          'Data Validation Techniques',
          'Unloading Data from Snowflake',
        ],
      },

      {
        concept: 'Snowflake',
        title: 'Module 9 – Security & Access Control',
        lessons: [
          'User Management',
          'Role Management',
          'RBAC',
          'Grant & Revoke Permissions',
        ],
      },

      {
        concept: 'Snowflake',
        title: 'Module 10 – Snowflake to Power BI Integration',
        lessons: [
          'Snowflake Connection',
          'Import Mode',
          'DirectQuery Mode',
          'Data Refresh',
          'Dashboard Publishing',
        ],
      },


      // =========================================================
      // CONCEPT 5 — MICROSOFT POWER BI
      // =========================================================

      {
        concept: 'Microsoft Power BI',
        title: 'Module 1 – Introduction to Power BI',
        lessons: [
          'What is Power BI?',
          'Why is Power BI Important?',
          'Power BI Ecosystem',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 2 – Power BI Installation & Setup',
        lessons: [
          'How to Install Power BI Desktop',
          'System Requirements',
          'First Look at Power BI Interface',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 3 – Connecting to Data Sources',
        lessons: [
          'Common Data Sources (Excel, SQL, Online Services)',
          'Import Mode vs. Direct Query',
          'Live Data Refresh',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 4 – Data Transformation with Power Query',
        lessons: [
          'Cleaning & Transforming Data',
          'Removing Duplicates, Handling Null Values',
          'Merging & Splitting Columns',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 5 – Data Modeling Basics',
        lessons: [
          'Creating Relationships Between Tables',
          'Understanding Star & Snowflake Schema',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 6 – Introduction to DAX',
        lessons: [
          'What is DAX?',
          'Basic Functions (SUM, COUNT, AVERAGE, IF, SWITCH)',
          'Creating Measures & Calculated Columns',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 7 – Creating Visualizations',
        lessons: [
          'Types of Charts: Bar, Line, Pie, Maps, Tables',
          'Formatting and Customizing Visuals',
          'Best Practices for Effective Data Representation',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 8 – Filters, Slicers, and Drill-through',
        lessons: [
          'Applying Filters at Different Levels',
          'Slicers and Their Use Cases',
          'Drill-through and Tooltip Pages',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 9 – Publishing & Sharing Reports',
        lessons: [
          'Publishing to Power BI Service',
          'Creating Dashboards',
          'Sharing Reports & Collaborating',
        ],
      },

      {
        concept: 'Microsoft Power BI',
        title: 'Module 10 – Power BI Best Practices',
        lessons: [
          'Performance Optimization Techniques',
          'Data Modeling Best Practices',
          'Visual Design Tips',
        ],
      },
    ],

    skills: [
      'Advanced Microsoft Excel',
      'Excel Data Analysis',
      'Excel MIS Reporting',
      'Excel Dashboarding',
      'Excel Automation',
      'AI-Powered Excel Analysis',
      'SQL Server',
      'SQL Query Development',
      'Database Management',
      'Python',
      'Python Data Analysis',
      'NumPy',
      'Pandas',
      'Data Cleaning',
      'Data Transformation',
      'Data Visualization',
      'Snowflake',
      'Cloud Data Warehousing',
      'Snowflake SQL',
      'Data Modeling',
      'Power BI',
      'Power Query',
      'DAX',
      'Business Intelligence',
    ],

    tools: [
      'Microsoft Excel',
      'Power Query',
      'Microsoft SQL Server',
      'Python',
      'VS Code',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Snowflake',
      'Snowsight',
      'Power BI Desktop',
      'Power BI Service',
    ],

    projects: [
      {
        title: 'Advanced Excel MIS Projects',
        desc:
          'Build real-world MIS solutions including Sales MIS, HR Attendance, Payroll & Salary, Expense Tracking, Inventory MIS, and an Automated MIS Reporting System.',
      },

      {
        title: 'SQL Server Data Analysis Project',
        desc:
          'Practice writing SQL queries, joins, database management, and data analysis using real-time datasets.',
      },

      {
        title: 'Python Data Analysis Project',
        desc:
          'Perform data cleaning, transformation, analysis, automation, and visualization using Python, Pandas, NumPy, Matplotlib, and Seaborn.',
      },

      {
        title: 'Snowflake Cloud Data Warehouse Project',
        desc:
          'Work with cloud data warehousing concepts, Snowflake SQL, database objects, data modeling, data loading, optimization, security, and Power BI integration.',
      },

      {
        title: 'Power BI Business Intelligence Project',
        desc:
          'Build interactive dashboards and visualize business insights using real-world data, Power Query, data modeling, DAX, and Power BI Service.',
      },
    ],

    careers: [
      'SQL Developer',
      'Reporting Analyst',
      'BI Analyst',
      'MIS Executive',
      'Data Analyst',
      'Power BI Developer',
      'Data Visualization Specialist',
    ],

    faqs: [
      {
        q: 'How long is the course?',
        a:
          'The Advanced Data Analytics with Snowflake & AI program is 100 hours.',
      },

      {
        q: 'Is the course available online?',
        a:
          'Yes. The program is delivered through online training, with weekday and weekend batches available.',
      },

      {
        q: 'Which technologies are covered?',
        a:
          'The program covers Microsoft Advanced Excel with AI, Microsoft SQL Server, Python, Snowflake, and Microsoft Power BI.',
      },

      {
        q: 'Will I work on real-world projects?',
        a:
          'Yes. The program includes practical projects and real-world business applications, including MIS projects, data analysis, dashboards, and cloud data warehousing.',
      },

      {
        q: 'Does the course include interview preparation?',
        a:
          'Yes. The program includes interview preparation with mock sessions and expert feedback.',
      },

      {
        q: 'Are assessments included?',
        a:
          'Yes. Module-wise assessments and quizzes are included to track learning progress and reinforce concepts.',
      },

      {
        q: 'Is job assistance provided?',
        a:
          'Yes. The program provides 100% job assistance and career support.',
      },

      {
        q: 'Will I receive a certificate?',
        a:
          'Yes. The PDF includes a certificate of completion for the Advanced Data Analytics with Snowflake & AI program.',
      },
    ],
  },
  // 5
  {
    id: 5,
    slug: 'core-sql-server-dba-program',
    title: 'Core Sql Server Dba Program',
    category: 'SQL',
    duration: '100 Hours',
    sessions: 'Weekday & Weekend Batches Available',
    mode: 'Online Training',
    level: 'Beginner to Advanced',
    description:
      'Advanced SQL Server DBA Program – Build Expertise in Database Administration, Security & High Availability with 30+ Practical Labs, 10 Production Projects, and 50+ Troubleshooting Cases.',

    tags: [
      'SQL Server DBA',
      'High Availability',
      'Performance Tuning',
      'Database Security',
      'Disaster Recovery',
      'T-SQL',
    ],

    color: 'from-blue-600 via-indigo-700 to-slate-900',
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    bannerGrad: 'from-blue-600 via-indigo-700 to-slate-900',
    image: coreSqlDbaCourseImg,

    syllabus: [
      'SQL Server Foundation & Database Architecture (Instance, Editions & Installation)',
      'SQL Basics (DDL/DML/DCL/TCL), Data Types & Bulk Operations (BULK INSERT)',
      'Constraints, Indexes, SQL Joins & Views with Row-Level Security (RLS)',
      'Programmability: Stored Procedures, UDFs, Triggers, Locks & Isolation Levels',
      'Database Administration: Linked Servers, Backup & Restore Strategies (VERIFYONLY)',
      'Automation & Maintenance: SQL Server Agent Jobs, MSDB History, Maintenance Plans & Database Mail',
      'Security & Access Management: Logins, Users, Roles, Security & Policy-Based Management',
      'Performance Tuning: Execution Plans, Index Tuning, Statistics & Missing Index Analysis',
      'High Availability & Disaster Recovery: Replication (Part 1 & 2), Log Shipping, Mirroring & Always On',
      'Troubleshooting & Maintenance: DBCC Commands, TempDB, Memory Pressure, Upgrades & Health Checks',
    ],

    modules: [
      {
        title: 'MODULE 1 – SQL Server Foundation',
        lessons: [
          '1. Database Architecture',
          '2. SQL Server Instance & Server Architecture',
          '3. SQL Server Versions, Editions & Licensing',
          '4. SQL Server Installation & Configuration',
          '5. SQL Basics (DDL-DML-DCL-TCL)',
          '6. SQL Server Data Types',
          '7. Bulk Import & Export (Excel, CSV, BULK INSERT)',
          '8. Schemas, Database Objects & Security',
          '9. Constraints',
          '10. Indexes',
          '11. SQL Joins',
          '12. Views & Row-Level Security (RLS)',
          '13. Stored Procedures',
          '14. User Defined Functions (UDF)',
          '15. Triggers & Database Automation',
          '16. Transactions, Locks & Isolation Levels',
        ],
      },

      {
        title: 'MODULE 2 – SQL Server Administration',
        lessons: [
          '1. Linked Servers',
          '2. Backup Strategy (Full, Differential & Log)',
          '3. Restore Strategy (GUI & T-SQL)',
          '4. Backup Validation (RESTORE VERIFYONLY)',
          '5. Recovery Models',
          '6. SQL Server Agent Jobs',
          '7. MSDB History',
          '8. Maintenance Plans',
          '9. Database Mail & Alerts',
          '10. Login, Users, Roles & Security Management',
          '11. Policy-Based Management',
          '12. Database Migration',
        ],
      },

      {
        title: 'MODULE 3 – Performance Tuning',
        lessons: [
          '1. Query Performance Analysis',
          '2. Execution Plans & Query Cost',
          '3. Index Management & Index Tuning',
          '4. Statistics Management',
          '5. Missing Index Analysis',
        ],
      },

      {
        title: 'MODULE 4 – High Availability & Disaster Recovery',
        lessons: [
          '1. SQL Server Replication – Part 1',
          '  • Replication Architecture',
          '  • Publisher, Distributor & Subscriber',
          '  • Snapshot Replication',
          '  • Use Cases',
          '2. SQL Server Replication – Part 2',
          '  • Transactional Replication',
          '  • Merge Replication',
          '  • Monitoring & Troubleshooting',
          '  • Realtime Lab',
          '3. Log Shipping',
          '  • Log Shipping Architecture',
          '  • Configuration',
          '  • Monitoring',
          '  • Failover',
          '  • Realtime Scenario',
          '4. Database Mirroring',
          '  • Mirroring Architecture',
          '  • High Safety Mode',
          '  • High Performance Mode',
          '  • Witness Server',
          '  • Failover',
          '  • Realtime Scenario',
          '5. Always On Availability Groups (Introduction)',
        ],
      },

      {
        title: 'MODULE 5 – Troubleshooting & Maintenance',
        lessons: [
          'Approach One',
          '1. DBCC Commands & Database Repair',
          '2. Transaction Log Space Management',
          '3. TempDB Management',
          '4. Memory & SQL Server Performance Issues',
          '5. DAC (Dedicated Administrator Connection)',
          'Approach Two',
          '6. Service Packs & Cumulative Updates',
          '7. SQL Server Upgrade & Rollback',
          '8. System Database Rebuild',
          '9. SQL Server Health Check',
          '10. Production Monitoring & Best Practices',
        ],
      },
    ],

    skills: [
      'SQL Server Database Administration (DBA)',
      'SQL Server Instance Architecture',
      'Backup & Restore Strategies',
      'Point-in-Time Recovery',
      'Database Security & RLS',
      'T-SQL & Database Objects',
      'Performance Tuning & Execution Plans',
      'Index & Statistics Management',
      'SQL Server Replication',
      'Log Shipping',
      'Database Mirroring',
      'Always On Availability Groups',
      'DBCC Commands & Repair',
      'TempDB & Transaction Log Management',
      'Database Migration & Upgrades',
      'Production Troubleshooting',
    ],

    tools: [
      'Microsoft SQL Server',
      'SQL Server Management Studio (SSMS)',
      'SQL Server Agent',
      'SQL Server Profiler',
      'Database Engine Tuning Advisor',
      'DBCC Utilities & DAC',
    ],

    projects: [
      {
        title: 'Project 1: SQL Server Installation & Configuration',
        desc: 'Install SQL Server, configure services, memory allocation, TempDB files, and SQL Server Agent settings.',
      },
      {
        title: 'Project 2: Enterprise Backup & Restore Solution',
        desc: 'Design full, differential, and transaction log backup strategies with restore validation (VERIFYONLY) and point-in-time recovery.',
      },
      {
        title: 'Project 3: SQL Server Security',
        desc: 'Configure logins, database users, server/database roles, granular permissions, and row-level security (RLS) policies.',
      },
      {
        title: 'Project 4: Performance Tuning',
        desc: 'Analyze slow queries, inspect execution plans, optimize indexes, manage statistics, and identify missing indexes.',
      },
      {
        title: 'Project 5: High Availability',
        desc: 'Configure transactional & snapshot replication, log shipping, database mirroring with witness server, and Always On Availability Groups.',
      },
      {
        title: 'Project 6: Database Migration',
        desc: 'Execute seamless database migrations using backup/restore, detach & attach methods, copy database wizard, and linked server scripts.',
      },
      {
        title: 'Project 7: Production Troubleshooting',
        desc: 'Troubleshoot production incidents: database offline, login failures, service startup issues, log file full, TempDB full, blocking sessions, deadlocks, and memory pressure.',
      },
      {
        title: 'Project 8: SQL Server Health Check',
        desc: 'Perform full database health checks reviewing DB status, backup status, failed jobs, disk space, index fragmentation, security, and performance.',
      },
      {
        title: 'Project 9: Production Monitoring Dashboard',
        desc: 'Set up real-time production monitoring for CPU/memory usage, blocking sessions, database sizes, backup status, job status, and performance counters.',
      },
      {
        title: 'Project 10: End-to-End Production Environment',
        desc: 'Build a production-ready environment from scratch: fresh SQL Server installation, database creation, security configuration, backup strategy, HA setup, health checks, and final documentation.',
      },
    ],

    careers: [
      'SQL Server Database Administrator (DBA)',
      'Production Support DBA',
      'Senior SQL DBA',
      'Database Operations Engineer',
      'Database Infrastructure Engineer',
      'SQL Server Performance Tuning Specialist',
    ],

    faqs: [
      {
        q: 'What is the duration and format of the Core SQL Server DBA Program?',
        a: 'The CORE SQL SERVER DBA PROGRAM is a 100-hour online training course featuring live weekday and weekend batches, hands-on practical labs, and lifetime access to session recordings.',
      },
      {
        q: 'What are the main modules covered in the syllabus?',
        a: 'The program is divided into 5 core modules: Module 1 (SQL Server Foundation), Module 2 (SQL Server Administration), Module 3 (Performance Tuning), Module 4 (High Availability & Disaster Recovery), and Module 5 (Troubleshooting & Maintenance).',
      },
      {
        q: 'How many practical labs and projects are included?',
        a: 'The program includes 30+ hands-on practical labs, 10 production-based projects, and 50+ production troubleshooting cases covering real-world DBA scenarios.',
      },
      {
        q: 'Will I learn High Availability and Disaster Recovery (HA/DR)?',
        a: 'Yes. You will learn SQL Server Replication (Snapshot, Transactional, Merge), Log Shipping, Database Mirroring (High Safety & High Performance), and an introduction to Always On Availability Groups.',
      },
      {
        q: 'Is job assistance and certification provided upon completion?',
        a: 'Yes! IntellxSkill Technologies provides 100% Job Assistance, resume optimization, 200+ interview questions prep, mock interviews, and an industry-recognized Certificate of Completion.',
      },
    ],
  },
  // 6
  {
    id: 6,
    slug: 'SAP MM + S/4 HANA Program',
    title: 'SAP MM + S/4 HANA Program',
    category: 'SAP',
    duration: '100 Hours',
    sessions: 'Live + Recorded Training',
    mode: 'Online Training',
    level: 'Beginner to Advanced',
    description:
      'Master SAP Materials Management (MM) from fundamentals to advanced configuration, covering procurement, inventory management, master data, valuation, pricing, release procedures, SAP S/4HANA, integration, reporting, migration, and SAP Fiori.',

    tags: [
      'SAP MM',
      'SAP S/4HANA',
      'Materials Management',
      'Procurement',
      'Inventory Management',
      'Purchasing',
      'SAP HANA',
      'Material Master',
      'Vendor Master',
      'SAP Fiori',
    ],

    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    bannerGrad: 'from-blue-600 via-indigo-600 to-purple-700',
    image: sapCourseImg,

    syllabus: [
      'Introduction to SAP MM & ERP',
      'SAP HANA & S/4HANA',
      'Enterprise Organizational Structure',
      'Master Data',
      'Business Partner Configuration',
      'Source Determination',
      'Purchasing',
      'Purchasing Document Types & Configuration',
      'Service Procurement',
      'Non-Material Procurement',
      'Optimized Purchasing',
      'Special Stocks & Special Procurement',
      'Inventory Management',
      'Physical Inventory',
      'Valuation & Account Assignment',
      'Release Procedure for Purchasing Documents',
      'Conditions, Pricing Procedure & Price Determination',
      'Valuation & Account Determination',
      'Integration with Other SAP Modules',
      'Output Determination',
      'SAP Migration Cockpit / LTMC',
      'Standard & Custom Reports',
      'BRF+ Output Management',
      'Introduction to SAP Fiori',
    ],

    modules: [
      {
        title: 'Module 1 – Introduction to SAP MM',
        lessons: [
          'Introduction to ERP',
          'SAP Overview',
          'Functions and Objectives of SAP MM',
          'MM Business Cycle',
          'New Technologies in SAP Business Processes',
        ],
      },

      {
        title: 'Module 2 – SAP HANA & S/4HANA',
        lessons: [
          'SAP HANA Technology',
          'SAP S/4HANA Introduction',
          'S/4HANA vs ECC',
          'Need for a New Business Suite',
        ],
      },

      {
        title: 'Module 3 – Enterprise Organizational Structure',
        lessons: [
          'Company',
          'Company Code',
          'Plant',
          'Storage Location',
          'Purchasing Organization',
          'Purchasing Group',
          'Organizational Assignments',
        ],
      },

      {
        title: 'Module 4 – Master Data',
        lessons: [
          'Material Master',
          'Vendor Master',
          'Supplier Account Group',
          'Info Record',
          'Number Ranges',
          'Business Partner Role & Category',
          'Source List',
          'CVI – Customer Vendor Integration',
        ],
      },

      {
        title: 'Module 5 – Business Partner Configuration',
        lessons: [
          'Configure Business Partner Roles and Categories',
          'Supplier Account Groups',
          'Configure Number Ranges',
          'Business Partner and Supplier Relationship',
          'Supplier Master Data Configuration',
          'Supplier Configuration using Business Partner in S/4HANA',
        ],
      },

      {
        title: 'Module 6 – Source Determination',
        lessons: [
          'Source Determination Concept',
          'Material Master in Source Determination',
          'Vendor Master',
          'Info Records',
          'Source Lists',
          'Approved Sources of Supply',
        ],
      },

      {
        title: 'Module 7 – Purchasing',
        lessons: [
          'Purchase Requisition (PR)',
          'Request for Quotation (RFQ)',
          'Maintain Quotation',
          'Purchase Order (PO)',
          'Contract',
          'Outline Agreements',
          'Schedule Agreement',
        ],
      },

      {
        title: 'Module 8 – Document Types for Purchasing Documents',
        lessons: [
          'Define Document Types',
          'Define Number Ranges for Document Types',
          'Define Screen Layout at Document Level',
          'Purchasing Document Configuration',
        ],
      },

      {
        title: 'Module 9 – Procedure for Services',
        lessons: [
          'Creation of Service Master',
          'Creation of Service PO',
          'Service Entry Sheet',
          'Service Procurement Process',
        ],
      },

      {
        title: 'Module 10 – Non-Material Purchase Order',
        lessons: [
          'Introduction to Non-Material Procurement',
          'Create Non-Material Purchase Orders',
          'Manage Non-Material Purchasing Requirements',
        ],
      },

      {
        title: 'Module 11 – Optimized Purchasing',
        lessons: [
          'Automatic Purchase Order with Reference to PR',
          'Automatic Purchase Order with Reference to GR',
          'Optimized Purchasing Processes',
        ],
      },

      {
        title: 'Module 12 – Special Stocks & Special Procurement Types',
        lessons: [
          'Consignment',
          'Stock Transport Order (STO)',
          'Subcontracting',
          'Pipeline Procurement',
          'Returnable Transport Packaging (RTP)',
          'Special Procurement Scenarios',
        ],
      },

      {
        title: 'Module 13 – Inventory Management',
        lessons: [
          'Goods Movement',
          'Goods Receipt (GR)',
          'Goods Issue (GI)',
          'Transfer Posting (TP)',
          'Reservation',
          'Material Movement Processing',
          'Inventory Updates in SAP',
        ],
      },

      {
        title: 'Module 14 – Physical Inventory',
        lessons: [
          'Creating Physical Inventory Document',
          'Entering Physical Inventory Count',
          'Inventory Difference List',
          'Posting Inventory Differences',
          'Physical Stock Verification',
        ],
      },

      {
        title: 'Module 15 – Valuation & Account Assignment',
        lessons: [
          'Introduction to Material Valuation',
          'Split Valuation',
          'Configure Split Valuation',
          'Global Valuation Types',
          'Maintain Valuation Types',
          'Global Valuation Categories',
          'Assign Valuation Categories',
          'Creation of Classes',
          'Creation of Characteristics',
        ],
      },

      {
        title: 'Module 16 – Release Procedure for Purchasing Documents',
        lessons: [
          'Release Group',
          'Release Indicator',
          'Release Codes',
          'Release Prerequisites',
          'Release Strategies',
          'Purchasing Document Approval Process',
        ],
      },

      {
        title: 'Module 17 – Conditions, Pricing Procedure & Price Determination',
        lessons: [
          'Define Access Sequence',
          'Define Condition Types',
          'Define Calculation Schema',
          'Define Schema Group',
          'Schema Group – Vendor',
          'Schema Group – Purchasing Organization',
          'Define Schema Determination',
          'Calculation Schema for Standard Purchase Orders',
        ],
      },

      {
        title: 'Module 18 – Valuation & Account Determination',
        lessons: [
          'Valuation',
          'Account Determination',
          'Valuation-Related Configuration',
        ],
      },

      {
        title: 'Module 19 – Integration with Other Modules',
        lessons: [
          'MM with FI/CO',
          'MM with PP',
          'Integration of Purchasing and Inventory Transactions',
          'Cross-Module Business Processes',
        ],
      },

      {
        title: 'Module 20 – Output Determination',
        lessons: [
          'Define Output Types',
          'Business Rules for Output Parameters',
          'Purchasing-Related Outputs',
          'Output Parameter Determination',
        ],
      },

      {
        title: 'Module 21 – SAP Migration Cockpit / LTMC',
        lessons: [
          'SAP Migration Cockpit',
          'Direct Data Migration from SAP System',
          'Staging Table Approach',
          'Data Preparation for Migration',
        ],
      },

      {
        title: 'Module 22 – Standard Reports',
        lessons: [
          'Standard SAP Reports',
          'Available Standard Reports',
          'Using Standard Reports',
          'Business Reporting Requirements',
        ],
      },

      {
        title: 'Module 23 – Custom Reports',
        lessons: [
          'Identify Business Reporting Requirements',
          'Fetching Data from SAP Database Tables',
          'Basic Approach to Custom Reports',
          'Custom Reporting Based on Business Requirements',
        ],
      },

      {
        title: 'Module 24 – BRF+ Output Management',
        lessons: [
          'Introduction to BRF+',
          'Business Rules',
          'Output Parameter Determination',
          'BRF+ in Output Management',
          'Converting Business Requirements into Configurable Rules',
        ],
      },

      {
        title: 'Module 25 – Introduction to SAP Fiori',
        lessons: [
          'SAP Fiori Introduction',
          'Fiori Apps Installation',
          'Assign Roles to Users',
        ],
      },
    ],

    skills: [
      'SAP MM',
      'SAP S/4HANA',
      'SAP HANA',
      'ERP Fundamentals',
      'Materials Management',
      'Procurement',
      'Purchasing',
      'Purchase Requisition',
      'RFQ & Quotations',
      'Purchase Orders',
      'Contracts & Outline Agreements',
      'Material Master',
      'Vendor Master',
      'Business Partner',
      'Source Determination',
      'Inventory Management',
      'Goods Receipt & Goods Issue',
      'Physical Inventory',
      'Material Valuation',
      'Account Determination',
      'Pricing & Conditions',
      'Release Procedures',
      'Special Procurement',
      'SAP Integration',
      'SAP Migration',
      'SAP Reporting',
      'BRF+',
      'SAP Fiori',
    ],

    tools: [
      'SAP ERP',
      'SAP ECC',
      'SAP S/4HANA',
      'SAP HANA',
      'SAP MM',
      'SAP Fiori',
      'SAP Migration Cockpit / LTMC',
      'BRF+',
    ],

    projects: [
      {
        title: 'End-to-End Procurement Process',
        desc: 'Configure and execute an end-to-end SAP MM purchasing process from material requirement and purchase requisition through supplier procurement and purchase order processing.',
      },
      {
        title: 'Inventory Management System',
        desc: 'Work with goods receipts, goods issues, reservations, transfer postings, and physical inventory processes to manage stock in SAP.',
      },
      {
        title: 'Supplier & Business Partner Configuration',
        desc: 'Configure supplier-related master data using Business Partner roles, supplier account groups, number ranges, and purchasing information.',
      },
      {
        title: 'Special Procurement Scenarios',
        desc: 'Work through consignment, stock transport orders, subcontracting, pipeline procurement, and returnable transport packaging scenarios.',
      },
      {
        title: 'SAP MM Pricing & Release Strategy',
        desc: 'Configure purchasing conditions, calculation schemas, pricing procedures, and release strategies for purchasing documents.',
      },
      {
        title: 'SAP MM Reporting & Migration',
        desc: 'Explore standard and custom reporting, data migration using SAP Migration Cockpit/LTMC, and output management with BRF+.',
      },
    ],

    careers: [
      'SAP MM Consultant',
      'SAP MM Functional Consultant',
      'SAP S/4HANA MM Consultant',
      'SAP Procurement Consultant',
      'SAP Materials Management Consultant',
      'SAP MM Support Consultant',
      'SAP Functional Analyst',
    ],

    faqs: [
      {
        q: 'What is the duration of the SAP MM course?',
        a: 'The SAP MM program is a 100-hour online training program.',
      },
      {
        q: 'What does this SAP MM course cover?',
        a: 'The program covers SAP MM fundamentals, S/4HANA, organizational structure, master data, procurement, purchasing, inventory management, valuation, pricing, release procedures, integration, reporting, migration, BRF+, and SAP Fiori.',
      },
      {
        q: 'Will I learn SAP S/4HANA?',
        a: 'Yes. The course includes SAP HANA, SAP S/4HANA, the differences between S/4HANA and ECC, and the transition to the next-generation SAP ERP platform.',
      },
      {
        q: 'Will I learn the complete SAP MM purchasing process?',
        a: 'Yes. The purchasing curriculum covers Purchase Requisitions, RFQs, quotations, Purchase Orders, contracts, outline agreements, and schedule agreements.',
      },
      {
        q: 'Does the course cover inventory management?',
        a: 'Yes. Inventory Management includes Goods Receipt, Goods Issue, Transfer Posting, Reservations, Goods Movements, and Physical Inventory.',
      },
      {
        q: 'Will I learn SAP MM configuration?',
        a: 'Yes. The curriculum includes configuration topics such as organizational structure, Business Partner, number ranges, document types, release procedures, pricing procedures, valuation, account determination, and output determination.',
      },
      {
        q: 'Does the course cover special procurement?',
        a: 'Yes. It covers Consignment, Stock Transport Orders, Subcontracting, Pipeline Procurement, and Returnable Transport Packaging.',
      },
      {
        q: 'Will I learn SAP Fiori?',
        a: 'Yes. The final module introduces SAP Fiori, Fiori app installation, and assigning roles to users.',
      },
      {
        q: 'Does the course include reporting and migration?',
        a: 'Yes. The program covers standard reports, custom reports, SAP Migration Cockpit/LTMC, and BRF+ Output Management.',
      },
      {
        q: 'Does the training include practical learning?',
        a: 'Yes. The program includes practical projects, assessments and quizzes, doubt clearing, interview preparation, and career support.',
      },
    ],
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Data Analyst',
    company: 'Infosys',
    review: 'The Cloud Data Analytics program completely transformed my career. The hands-on projects and mock interviews gave me the confidence to crack interviews at top MNCs. Highly recommend IntellxSkill!',
    rating: 5,
    avatar: 'PS',
    avatarColor: 'from-blue-400 to-indigo-600',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'BI Engineer',
    company: 'Wipro',
    review: 'Exceptional training quality! The Power BI and Snowflake modules were incredibly detailed. Got placed within 3 weeks of completing the course. The placement cell is truly amazing.',
    rating: 5,
    avatar: 'RM',
    avatarColor: 'from-orange-400 to-rose-500',
  },
  {
    id: 3,
    name: 'Sneha Patel',
    role: 'SQL Developer',
    company: 'TCS',
    review: 'From a complete beginner to a SQL expert – IntellxSkill made it possible. The instructor explanations are crystal clear, and the real-time projects made all the difference.',
    rating: 5,
    avatar: 'SP',
    avatarColor: 'from-emerald-400 to-teal-600',
  },
  {
    id: 4,
    name: 'Arjun Nair',
    role: 'Data Engineer',
    company: 'Accenture',
    review: 'The curriculum is perfectly aligned with industry requirements. Python for Data Analytics was especially well-structured. IntellxSkill is the best investment I made for my career.',
    rating: 5,
    avatar: 'AN',
    avatarColor: 'from-purple-400 to-violet-600',
  },
  {
    id: 5,
    name: 'Kavitha Reddy',
    role: 'Analytics Consultant',
    company: 'Deloitte',
    review: 'The mentors here are phenomenal! They go above and beyond to help students understand concepts. The certificate from IntellxSkill carries real value in the job market.',
    rating: 5,
    avatar: 'KR',
    avatarColor: 'from-rose-400 to-pink-600',
  },
  {
    id: 6,
    name: 'Vikram Singh',
    role: 'Power BI Developer',
    company: 'HCL Technologies',
    review: 'IntellxSkill provides world-class education at affordable prices. The Excel with AI module was mind-blowing. I now build enterprise dashboards for Fortune 500 clients!',
    rating: 5,
    avatar: 'VS',
    avatarColor: 'from-sky-400 to-blue-600',
  },
]

export const HIRING_PARTNERS = [
  { name: 'Tech Mahindra', initials: 'TM', color: '#8B1A4A' },
  { name: 'Infosys', initials: 'IN', color: '#007CC3' },
  { name: 'Cognizant', initials: 'CG', color: '#1A4B8C' },
  { name: 'American Express', initials: 'AE', color: '#006FCF' },
  { name: 'Microsoft', initials: 'MS', color: '#00A4EF' },
  { name: 'Cisco', initials: 'CI', color: '#049FD9' },
  { name: 'Deloitte', initials: 'DT', color: '#86BC25' },
  { name: 'McKinsey & Company', initials: 'MK', color: '#003A70' },
  { name: 'Titan', initials: 'TI', color: '#1B2A4A' },
  { name: 'Coinbase', initials: 'CB', color: '#0052FF' },
  { name: 'Visa', initials: 'VI', color: '#1A1F71' },
  { name: 'CarWale', initials: 'CW', color: '#E84427' },
  { name: 'CarTrade', initials: 'CT', color: '#FF6600' },
  { name: 'Carat Lane', initials: 'CL', color: '#C5A04E' },
  { name: 'EazyDiner', initials: 'ED', color: '#D4213D' },
  { name: 'HealthKart', initials: 'HK', color: '#00B4D8' },
  { name: 'IRCTC', initials: 'IR', color: '#E23A2E' },
  { name: 'Nagarro', initials: 'NG', color: '#1F2937' },
  { name: 'Yes Bank', initials: 'YB', color: '#005BAA' },
  { name: 'Bajaj Finserv', initials: 'BF', color: '#003B71' },
  { name: 'HSBC', initials: 'HS', color: '#DB0011' },
  { name: 'Kotak Mahindra Bank', initials: 'KM', color: '#ED1C24' },
  { name: 'IndusInd Bank', initials: 'IB', color: '#8B0000' },
  { name: 'Citi', initials: 'CT', color: '#003B70' },
  { name: 'Wipro', initials: 'WI', color: '#44127C' },
  { name: 'TCS', initials: 'TC', color: '#0067B1' },
  { name: 'Accenture', initials: 'AC', color: '#A100FF' },
  { name: 'HCL Technologies', initials: 'HC', color: '#0070AD' },
  { name: 'Capgemini', initials: 'CG', color: '#0070AD' },
  { name: 'Oracle', initials: 'OR', color: '#F80000' },
  { name: 'IBM', initials: 'IB', color: '#054ADA' },
  { name: 'Amazon', initials: 'AZ', color: '#FF9900' },
  { name: 'Google', initials: 'GO', color: '#4285F4' },
  { name: 'Flipkart', initials: 'FK', color: '#2874F0' },
  { name: 'Zomato', initials: 'ZO', color: '#E23744' },
  { name: 'Swiggy', initials: 'SW', color: '#FC8019' },
]

export const CONTACT_INFO = {
  address: '3rd Floor, Tech Hub, Andheri East, Mumbai - 400069, Maharashtra',
  phone: '+91 98765 43210',
  email: 'info@intellxskill.com',
  website: 'www.intellxskill.com',
  hours: 'Mon–Sat: 9:00 AM – 7:00 PM',
}

export const COURSE_OPTIONS = [
  'CORE SQL SERVER DBA PROGRAM',
  'Advanced SQL Server, SSIS & Power BI Program',
  'Microsoft SQL Server',
  'Snowflake Data Warehousing',
  'Python for Data Analytics',
  'Microsoft Power BI',
  'Full Program Bundle',
]

export const SOCIAL_LINKS = [
  { icon: 'Linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/intellxskilltechnologies-undefined-402892414/' },
  { icon: 'Youtube', label: 'YouTube', href: 'https://www.youtube.com/@IntellxskillTechnologies' },
  { icon: 'Instagram', label: 'Instagram', href: 'https://www.instagram.com/intellxskill_technologies/' },
  { icon: 'Facebook', label: 'Facebook', href: 'https://www.facebook.com/?checkpoint_src=any' },
]

export const ABOUT_TABS = [
  {
    id: 'approach',
    label: 'Our Approach',
    icon: 'Lightbulb',
    title: 'Learn by Doing, Not Just Watching',
    description: 'Our curriculum is built around practical application. Every concept is reinforced with hands-on labs, real datasets, and live projects that mirror actual industry workflows.',
    points: [
      'Live instructor-led sessions with Q&A',
      'Hands-on labs with real industry datasets',
      'Weekly capstone projects',
      'Industry mentorship & guidance',
    ],
  },
  {
    id: 'assessments',
    label: 'Assessments',
    icon: 'ClipboardCheck',
    title: 'Track Your Mastery at Every Step',
    description: 'We use a multi-tiered assessment system to ensure every student achieves mastery before moving forward, building confidence progressively.',
    points: [
      'Module-end quizzes & practical tests',
      'Weekly assignments & submissions',
      'Mid-program comprehensive review',
      'Final capstone project evaluation',
    ],
  },
  {
    id: 'career',
    label: 'Career Support',
    icon: 'Briefcase',
    title: 'We Don\'t Stop Until You\'re Hired',
    description: 'Our dedicated career services team works with you from day one to ensure you land your dream role in data analytics or BI engineering.',
    points: [
      'Resume & LinkedIn profile optimization',
      'Mock interviews with industry experts',
      'Direct placement referrals to 150+ companies',
      'Lifetime career support membership',
    ],
  },
]

export const FILTER_CATEGORIES: CourseCategory[] = ['All', 'Databricks & AI', 'SQL', 'Data Analytics & Business Intelligence', 'Data Analytics & AI', 'SAP']
