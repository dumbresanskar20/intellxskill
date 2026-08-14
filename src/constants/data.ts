// All constants / mock data for the site

import { href } from "react-router-dom"
import type { Course } from '../types'

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




export type CourseCategory = 'All' | 'Databricks & AI' | 'Excel' | 'SQL' | 'Snowflake' | 'Python' | 'Power BI'

export const COURSES: Course[] = [
  {
    id: 1,
    slug: 'databricks-analytics-ai',
    title: 'Advanced Data Analytics with Databricks & AI',
    category: 'Databricks & AI' as CourseCategory,
    duration: '100 Hours',
    sessions: '80 Live Sessions',
    mode: 'Online (Live + Recorded)',
    level: 'Beginner to Advanced',
    description: 'Learn Modern Data Warehousing and BI Tools to Build Industry-Ready Analytics Solutions.',
    tags: ['Databricks', 'SQL Server', 'Python', 'Power BI', 'MS Excel'],
    color: 'from-blue-600 via-indigo-700 to-slate-900',
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    bannerGrad: 'from-blue-600 via-indigo-700 to-slate-900',
    syllabus: [
      'MS Excel Fundamentals & Advanced Dataset Analysis',
      'SQL Server Queries, Joins, Window Functions & Indexing',
      'Python for Data Cleaning, Pandas, NumPy & Visualization',
      'Databricks Cloud Platform & PySpark Fundamentals',
      'Delta Lake Architecture (Bronze, Silver, Gold)',
      'Building Scalable ETL Pipelines & Workflows',
      'Microsoft Power BI Dashboards & DAX Measures',
      'Real-Time Big Data Ingestion & Enterprise Analytics',
    ],
    modules: [
      {
        title: 'Module 1 – MS Excel Fundamentals & Data Analysis',
        lessons: ['Excel Interface & Navigation', 'Core Arithmetic & Error Handling (IFERROR)', 'Advanced Formulas (XLOOKUP, LET, LAMBDA)', 'Data Cleaning, Filtering & Conditional Formatting', 'Pivot Tables, Slicers & Dynamic MIS Dashboards'],
      },
      {
        title: 'Module 2 – Microsoft SQL Server & Database Querying',
        lessons: ['SQL Server Setup, DML, DDL & DQL Commands', 'Constraints (Primary, Foreign Key, Unique, Identity)', 'Joins (INNER, LEFT, RIGHT, FULL, CROSS, SELF)', 'Aggregate & Window Functions (ROW_NUMBER, RANK, DENSE_RANK)', 'Stored Procedures, Views, Indexing & Query Optimization'],
      },
      {
        title: 'Module 3 – Python for Data Analytics & Visualization',
        lessons: ['Python Basics, Variables, Control Flow & Loops', 'Data Structures (Lists, Tuples, Dictionaries)', 'NumPy Arrays & Mathematical Operations', 'Pandas DataFrames, GroupBy, Merging & Null Handling', 'Matplotlib & Seaborn Visualizations + Power BI Integration'],
      },
      {
        title: 'Module 4 – Databricks, PySpark & Delta Lake',
        lessons: ['Big Data Architecture, Workspaces & Clusters', 'PySpark DataFrames, Transformations & Actions', 'Data Ingestion from S3, CSV, JSON & Parquet', 'Delta Lake Fundamentals (ACID, Time Travel, Upsert)', 'Building Medallion Architecture (Bronze, Silver, Gold) & Workflows'],
      },
      {
        title: 'Module 5 – Microsoft Power BI & Enterprise BI',
        lessons: ['Power BI Ecosystem, Installation & Data Sources', 'Power Query Transformation & Data Modeling', 'DAX Measures, Functions & Calculated Columns', 'Interactive Reports, Charts, Slicers & Drill-through', 'Publishing to Power BI Service & Performance Optimization'],
      },
    ],
    skills: ['Databricks & PySpark', 'Delta Lake Architecture', 'SQL Server & T-SQL', 'Python Data Science (Pandas/NumPy)', 'Power BI & DAX', 'Advanced MS Excel', 'ETL Pipeline Design', 'Enterprise Data Warehousing'],
    tools: ['Databricks', 'PySpark', 'Microsoft SQL Server', 'Python', 'Power BI Desktop', 'MS Excel', 'Delta Lake'],
    projects: [
      { title: 'End-to-End Databricks & Delta Lake ETL Pipeline', desc: 'Build a scalable cloud data warehouse ingesting SQL Server & S3 datasets using PySpark and Delta Lake medallion architecture.' },
      { title: 'Enterprise Power BI Business Intelligence Dashboard', desc: 'Design an interactive Power BI dashboard featuring custom DAX measures, automated refresh, and drill-through analytics.' },
      { title: 'Automated Multi-Tool MIS Analytics System', desc: 'Perform end-to-end data cleaning, transformation, and automated reporting across Excel, SQL, and Python.' },
    ],
    careers: ['Data Analyst', 'BI Analyst', 'Power BI Developer', 'SQL Developer', 'Reporting Analyst', 'MIS Executive', 'Data Visualization Specialist'],
    faqs: [
      { q: 'What are the prerequisites for this 100-Hour course?', a: 'No prior programming experience is required! The program starts from foundational Excel and SQL concepts and progresses to advanced Databricks and PySpark cloud analytics.' },
      { q: 'Which key technologies are covered in this course?', a: 'You will learn 5 industry-essential technologies: MS Excel, Microsoft SQL Server, Python, Databricks (with PySpark & Delta Lake), and Power BI.' },
      { q: 'Is this course online and recorded?', a: 'Yes, this is a 100-Hour online training program with live sessions as well as lifetime access to recorded sessions and learning materials.' },
      { q: 'Will I receive certification and job assistance?', a: 'Yes! Upon completion, you receive an industry-recognized certificate from IntellxSkill Technologies along with a 6-month practical industry experience certification and 100% job placement assistance.' },
    ],
  },
  {
    id: 2,
    slug: 'sql-server',
    title: 'Advanced SQL Server Program',
    category: 'SQL' as CourseCategory,
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
  {
    id: 3,
    slug: 'advanced-sql-server-ssis-power-bi',
    title: 'Advanced SQL Server, SSIS & Power BI Program',
    category: 'SQL' as CourseCategory,
    duration: '100 Hours',
    sessions: 'Live Sessions + Practical Training',
    mode: 'Online',
    level: 'Beginner to Advanced',
    description:
      'Build industry-ready skills in Microsoft SQL Server, SSIS, and Power BI. Learn database development, ETL, data warehousing, data integration, business intelligence, data visualization, and performance optimization through hands-on training and real-time projects.',
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

    syllabus: [
      'Microsoft SQL Server Fundamentals & Database Management',
      'SQL Commands, Operators, Queries & Joins',
      'Aggregate Functions, Clauses & Window Functions',
      'Indexing, Query Optimization & Advanced SQL',
      'Data Warehousing & Business Intelligence Fundamentals',
      'SSIS Architecture, Control Flow & Data Flow',
      'SSIS Transformations & Dynamic ETL',
      'Error Handling, Debugging & Logging in SSIS',
      'SSIS Deployment, Scheduling & Administration',
      'SSIS Performance Tuning & Optimization',
      'Power BI Installation, Data Sources & Power Query',
      'Data Modeling, DAX, Dashboards & Report Publishing',
    ],

    modules: [
      {
        title: 'Module 1 – Microsoft SQL Server',
        lessons: [
          'SQL Server Overview & Editions',
          'Installation & Configuration',
          'Creating & Managing Databases',
          'SQL Server Data Types',
          'Constraints – Primary Key, Foreign Key, Unique, Check, Default, NOT NULL & Identity',
          'DML, DDL, DQL, DCL & TCL Commands',
          'Arithmetic, Comparison & Logical Operators',
          'LIKE, IN & BETWEEN Operators',
          'SELECT, TOP & DISTINCT',
          'UNION & UNION ALL',
          'Aggregate Functions – COUNT, SUM, MIN, MAX & AVG',
          'WHERE, ORDER BY, GROUP BY & HAVING',
          'Aliases & Query Fundamentals',
          'INNER, LEFT, RIGHT & FULL JOIN',
          'SELF JOIN & CROSS JOIN',
          'ROW_NUMBER, RANK & DENSE_RANK',
          'Clustered & Non-Clustered Indexes',
          'Query Optimization',
          'Stored Procedures, CTEs, Views & Functions',
        ],
      },

      {
        title: 'Module 2 – Data Warehousing & SSIS',
        lessons: [
          'Data & Database Fundamentals',
          'Introduction to Business Intelligence',
          'Introduction to Data Warehousing',
          'OLTP vs OLAP',
          'ETL Lifecycle',
          'Data Mart Concepts',
          'Staging Areas',
          'Fact & Dimension Tables',
          'Star Schema & Snowflake Schema',
          'SSIS Fundamentals & Architecture',
          'SSIS Package Structure & Components',
          'Control Flow, Data Flow & Event Handlers',
          'Tasks, Containers & Precedence Constraints',
          'Execute SQL, Execute Process & Execute Package Tasks',
          'Script, Send Mail, File System & Bulk Insert Tasks',
          'Data Flow Sources & Destinations',
          'OLE DB, SQL Server, Flat File & Excel Sources',
          'Derived Column & Data Conversion',
          'Conditional Split, Sort & Aggregate',
          'Multicast, Union All, Merge & Merge Join',
          'Lookup & Slowly Changing Dimension',
          'Variables, Parameters & Expressions',
          'Dynamic SQL Queries & Connection Strings',
          'Dynamic File Names & File Paths',
          'Dynamic File & Excel Processing',
          'Foreach File, Folder & ADO Enumerators',
          'Error Handling & Error Outputs',
          'Breakpoints, Data Viewers & Watch Window',
          'SSIS Logging & Event Handling',
          'Transactions, Checkpoints & Failure Recovery',
          'SSIS Deployment & SSIS Catalog',
          'SQL Server Agent & Package Scheduling',
          'SSIS Security & Administration',
          'Performance Tuning & Optimization',
        ],
      },

      {
        title: 'Module 3 – Microsoft Power BI',
        lessons: [
          'Introduction to Power BI',
          'Power BI Ecosystem',
          'Power BI Desktop Installation & Setup',
          'Connecting to Excel, SQL & Online Data Sources',
          'Import Mode vs DirectQuery',
          'Live Data Refresh',
          'Power Query Data Cleaning & Transformation',
          'Removing Duplicates & Handling Null Values',
          'Merging & Splitting Columns',
          'Data Modeling Fundamentals',
          'Creating Relationships Between Tables',
          'Star Schema & Snowflake Schema',
          'Introduction to DAX',
          'SUM, COUNT, AVERAGE, IF & SWITCH',
          'Measures & Calculated Columns',
          'Charts, Tables, Maps & Other Visualizations',
          'Visual Formatting & Customization',
          'Filters & Slicers',
          'Drill-through & Tooltip Pages',
          'Publishing Reports to Power BI Service',
          'Creating Dashboards',
          'Report Sharing & Collaboration',
          'Power BI Performance Optimization',
          'Data Modeling Best Practices',
          'Visual Design Best Practices',
        ],
      },
    ],

    skills: [
      'Microsoft SQL Server',
      'Advanced SQL',
      'Database Development',
      'ETL Development',
      'SSIS',
      'Data Warehousing',
      'Business Intelligence',
      'Data Integration',
      'Power Query',
      'DAX',
      'Power BI Dashboard Development',
      'Data Modeling',
      'Performance Optimization',
      'ETL Pipeline Development',
    ],

    tools: [
      'Microsoft SQL Server',
      'SQL Server Management Studio (SSMS)',
      'SQL Server Integration Services (SSIS)',
      'SQL Server Data Tools (SSDT)',
      'SQL Server Agent',
      'Power BI Desktop',
      'Power BI Service',
    ],

    projects: [
      {
        title: 'Real-Time ETL & Data Warehouse Project',
        desc:
          'Work on industry-based projects and case studies involving data integration, ETL processes, data warehousing, and business intelligence workflows.',
      },
      {
        title: 'SQL Analytics & Reporting Project',
        desc:
          'Apply SQL Server database development, advanced queries, data manipulation, and performance optimization to real-world business datasets.',
      },
      {
        title: 'Power BI Business Intelligence Project',
        desc:
          'Build professional dashboards and reports using real-world datasets, data modeling, Power Query, DAX, and Power BI visualization techniques.',
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
          'Yes. The program is designed from Beginner to Advanced level and covers SQL Server, SSIS, and Power BI progressively.',
      },
      {
        q: 'Is the course online?',
        a:
          'Yes. The program is delivered online with live sessions, practical exercises, and hands-on training.',
      },
      {
        q: 'Will I work on real-time projects?',
        a:
          'Yes. The program includes real-time projects, industry-based projects, case studies, practical assignments, and interview preparation.',
      },
      {
        q: 'Who is this course suitable for?',
        a:
          'The course is suitable for SQL professionals, Data Analysts, ETL Developers, Power BI Developers, Business Intelligence professionals, IT professionals transitioning into Data Analytics and BI, and professionals preparing for SQL Server, SSIS and Power BI roles.',
      },
      {
        q: 'Does the course include placement support?',
        a:
          'The program provides placement assistance, job referrals, placement guidance, portfolio building, and career support.',
      },
    ],
  },
  {
    id: 4,
    slug: 'advanced-data-analytics-snowflake-ai',
    title: 'Advanced Data Analytics with Snowflake & AI',
    category: 'Data Analytics' as CourseCategory,
    duration: '100 Hours',
    sessions: 'Live + Recorded Training',
    mode: 'Online Training',
    level: 'Beginner to Advanced',
    description:
      'Master modern data analytics with Microsoft Excel, SQL Server, Python, Snowflake, and Power BI. Build industry-ready analytics solutions through practical projects, data warehousing, visualization, automation, and business intelligence.',
    tags: [
      'Data Analytics',
      'Excel',
      'SQL Server',
      'Python',
      'Snowflake',
      'Power BI',
      'Data Warehousing',
      'Business Intelligence',
      'AI'
    ],
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    bannerGrad: 'from-blue-600 via-cyan-500 to-indigo-600',

    syllabus: [
      'Advanced Microsoft Excel & AI',
      'SQL Server – Beginner to Advanced',
      'Python for Data Analysis',
      'Pandas, NumPy & Data Visualization',
      'Snowflake Cloud Data Warehousing',
      'Snowflake SQL & Database Objects',
      'Data Loading, Unloading & Performance Optimization',
      'Snowflake Security, RBAC & Advanced Features',
      'Power BI Data Transformation & Modeling',
      'DAX, Dashboards & Power BI Service',
      'Real-World Data Analytics Projects',
      'Career Preparation, Assessments & Job Assistance',
    ],

    modules: [
      {
        title: 'Module 1 – Microsoft Advanced Excel with AI',
        lessons: [
          'Excel Interface, Workbooks, Worksheets & Tables',
          'Data Entry, Formatting & Data Validation',
          'Excel Formulas & Core Functions',
          'IF, IFS, AND, OR, NOT & IFERROR',
          'Text & Date Functions',
          'XLOOKUP & XMATCH',
          'FILTER, SORT, SORTBY & UNIQUE',
          'Dynamic Arrays, LET & LAMBDA',
          'Sorting, Filtering & Subtotals',
          'What-If Analysis, Goal Seek & Scenario Manager',
          'Power Query for Data Cleaning & ETL',
          'Pivot Tables & Pivot Charts',
          'Slicers & Timelines',
          'Excel Dashboards & KPI Reports',
          'Macro Recording & Basic Automation',
          'Office Scripts & Power Automate Awareness',
          'AI Features, Analyze Data & Smart Insights',
          'Forecast Sheet, Flash Fill & Pattern Detection',
          'MIS Reporting & Productivity Tools',
          'Real-World MIS Projects',
        ],
      },

      {
        title: 'Module 2 – Microsoft SQL Server',
        lessons: [
          'SQL Server Overview & Editions',
          'SQL Server Installation & Configuration',
          'Database Creation & Management',
          'SQL Server Data Types',
          'DML, DDL, DQL, DCL & TCL',
          'Primary Key, Foreign Key & Unique Constraints',
          'Check, Default, NOT NULL & Identity Constraints',
          'SELECT, TOP & DISTINCT',
          'UNION & UNION ALL',
          'Arithmetic, Comparison & Logical Operators',
          'LIKE, IN & BETWEEN',
          'COUNT, SUM, MIN, MAX & AVG',
          'WHERE, ORDER BY, GROUP BY & HAVING',
          'INNER, LEFT, RIGHT & FULL JOIN',
          'SELF JOIN & CROSS JOIN',
          'ROW_NUMBER, RANK & DENSE_RANK',
          'Clustered & Non-Clustered Indexes',
          'Query Optimization',
          'Stored Procedures, CTEs & Views',
          'SQL Functions',
        ],
      },

      {
        title: 'Module 3 – Python for Data Analysts',
        lessons: [
          'Introduction to Python',
          'Installing Python & VS Code',
          'Writing Your First Python Program',
          'Variables & Data Types',
          'Input & Output',
          'Functions & Type Casting',
          'Conditional Statements',
          'For & While Loops',
          'range(), break & continue',
          'Strings & String Methods',
          'Lists, Tuples & Dictionaries',
          'Arithmetic, Comparison & Logical Operators',
          'Assignment Operators',
          'Defining Functions',
          'Arguments & Return Values',
          'Lambda Functions',
          'Reading & Writing CSV Files',
        ],
      },

      {
        title: 'Module 4 – Pandas, NumPy & Data Visualization',
        lessons: [
          'Pandas Series & DataFrames',
          'Reading CSV & Excel Files',
          'Filtering & Sorting Data',
          'GroupBy Operations',
          'Merge & Join',
          'Handling Null Values',
          'Data Cleaning & Transformation',
          'NumPy Arrays',
          'NumPy Indexing & Slicing',
          'Mathematical Operations with NumPy',
          'Matplotlib Fundamentals',
          'Line, Bar & Pie Charts',
          'Seaborn Visualizations',
          'Heatmaps',
          'Distribution Plots',
        ],
      },

      {
        title: 'Module 5 – Python & Power BI Integration',
        lessons: [
          'Installing & Configuring Python for Power BI',
          'Running Python Scripts in Power BI',
          'Importing Python-Processed Data into Power BI',
        ],
      },

      {
        title: 'Module 6 – Snowflake Data Warehousing Fundamentals',
        lessons: [
          'Data Warehouse Concepts',
          'OLTP vs OLAP',
          'Snowflake Overview',
          'Snowflake Architecture',
          'Snowflake Object Hierarchy',
          'Snowflake Account Setup',
          'Snowsight Interface',
          'Databases & Schemas',
          'Virtual Warehouses',
          'Users & Roles',
        ],
      },

      {
        title: 'Module 7 – Snowflake SQL & Database Objects',
        lessons: [
          'DDL Commands',
          'DML Commands',
          'Query Execution',
          'Data Retrieval',
          'SQL in Snowflake',
          'Permanent Tables',
          'Temporary Tables',
          'Transient Tables',
          'Views',
          'Secure Views',
          'Materialized Views',
          'Fact Tables & Dimension Tables',
          'Star Schema',
          'Snowflake Schema',
          'Analytical Data Models',
        ],
      },

      {
        title: 'Module 8 – Snowflake Data Loading & Advanced Features',
        lessons: [
          'Virtual Warehouse Management',
          'Auto Suspend & Resume',
          'Query History',
          'Query Profile',
          'Cost Optimization',
          'Time Travel',
          'Zero-Copy Cloning',
          'Data Sharing',
          'Streams & Tasks Overview',
          'Internal & External Stages',
          'File Formats',
          'Loading CSV Files',
          'COPY INTO Command',
          'Data Validation',
          'Unloading Data from Snowflake',
        ],
      },

      {
        title: 'Module 9 – Snowflake Security & Power BI Integration',
        lessons: [
          'User Management',
          'Role Management',
          'Role-Based Access Control (RBAC)',
          'GRANT & REVOKE Permissions',
          'Snowflake Connections',
          'Import Mode in Power BI',
          'DirectQuery Mode',
          'Data Refresh',
        ],
      },

      {
        title: 'Module 10 – Microsoft Power BI',
        lessons: [
          'Introduction to Power BI',
          'Power BI Installation & Setup',
          'Power BI Ecosystem',
          'Connecting to Excel, SQL & Online Sources',
          'Import Mode vs DirectQuery',
          'Live Data Refresh',
          'Data Transformation with Power Query',
          'Removing Duplicates & Handling Null Values',
          'Merging & Splitting Columns',
          'Creating Relationships Between Tables',
          'Star & Snowflake Schema',
          'Introduction to DAX',
          'Measures & Calculated Columns',
          'SUM, COUNT, AVERAGE, IF & SWITCH',
          'Bar, Line, Pie, Map & Table Visualizations',
          'Filters & Slicers',
          'Drill-through & Tooltip Pages',
          'Publishing to Power BI Service',
          'Dashboard Creation',
          'Report Sharing & Collaboration',
          'Power BI Performance Optimization',
          'Data Modeling Best Practices',
          'Visual Design Best Practices',
        ],
      },
    ],

    skills: [
      'Advanced Excel',
      'MIS Reporting',
      'Excel Dashboarding',
      'Power Query',
      'SQL Server',
      'SQL Query Writing',
      'Database Management',
      'SQL Joins & Window Functions',
      'Python Programming',
      'Pandas',
      'NumPy',
      'Data Cleaning',
      'Data Transformation',
      'Data Visualization',
      'Snowflake',
      'Cloud Data Warehousing',
      'Data Modeling',
      'Snowflake SQL',
      'Data Loading & Unloading',
      'RBAC & Data Security',
      'Power BI',
      'DAX',
      'Business Intelligence',
      'Dashboard Development',
      'Data Analytics',
    ],

    tools: [
      'Microsoft Excel',
      'Power Query',
      'Microsoft SQL Server',
      'Python',
      'VS Code',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Snowflake',
      'Snowsight',
      'Microsoft Power BI',
      'DAX',
    ],

    projects: [
      {
        title: 'Sales MIS Report',
        desc: 'Create daily and monthly sales MIS reports using Excel, data analysis, and dashboarding techniques.',
      },
      {
        title: 'HR Attendance & Payroll System',
        desc: 'Build HR attendance and payroll reporting systems using real-world business data.',
      },
      {
        title: 'Expense & Inventory MIS',
        desc: 'Develop expense tracking and inventory MIS reports for business reporting and decision-making.',
      },
      {
        title: 'Automated MIS Reporting System',
        desc: 'Create an automated reporting workflow using Excel automation, Power Query, and reporting techniques.',
      },
      {
        title: 'Power BI Business Dashboard',
        desc: 'Transform raw business data into interactive Power BI dashboards with DAX measures, filters, slicers, and drill-through.',
      },
      {
        title: 'Snowflake Analytics Solution',
        desc: 'Build an analytics workflow using Snowflake data warehousing, SQL, data models, loading pipelines, and Power BI integration.',
      },
    ],

    careers: [
      'Data Analyst',
      'SQL Developer',
      'Reporting Analyst',
      'BI Analyst',
      'MIS Executive',
      'Power BI Developer',
      'Data Visualization Specialist',
    ],

    faqs: [
      {
        q: 'What is the duration of the course?',
        a: 'The Advanced Data Analytics with Snowflake & AI program is a 100-hour online training program.',
      },
      {
        q: 'What technologies are covered?',
        a: 'The program covers Microsoft Excel, SQL Server, Python, Snowflake, and Power BI.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. The curriculum progresses from foundational concepts through advanced analytics, data warehousing, BI, and cloud data platform topics.',
      },
      {
        q: 'Will I learn Python for data analysis?',
        a: 'Yes. The Python modules cover Python fundamentals, data structures, functions, file handling, Pandas, NumPy, data cleaning, transformation, and visualization.',
      },
      {
        q: 'Will I learn Snowflake?',
        a: 'Yes. The Snowflake curriculum covers data warehousing concepts, architecture, databases, schemas, virtual warehouses, SQL, data loading, optimization, Time Travel, Zero-Copy Cloning, security, RBAC, and Power BI integration.',
      },
      {
        q: 'Will I learn Power BI and DAX?',
        a: 'Yes. The Power BI modules cover data connections, Power Query, data modeling, DAX, measures, calculated columns, visualizations, filters, slicers, drill-through, publishing, dashboards, and performance optimization.',
      },
      {
        q: 'Does the course include practical projects?',
        a: 'Yes. The program includes practical projects and real-world scenarios, along with assessments, quizzes, interview preparation, and doubt-clearing support.',
      },
      {
        q: 'What career roles can I target after completing the course?',
        a: 'The program identifies roles including Data Analyst, SQL Developer, Reporting Analyst, BI Analyst, MIS Executive, Power BI Developer, and Data Visualization Specialist.',
      },
      {
        q: 'Is job assistance provided?',
        a: 'The program includes 100% job assistance, mock interviews, assessments, practical projects, and career support.',
      },
    ],
  },
  {
    id: 5,
    slug: 'sap-mm',
    title: 'SAP MM',
    category: 'SAP' as CourseCategory,
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
  email: 'hello@intellxskill.com',
  website: 'www.intellxskill.com',
  hours: 'Mon–Sat: 9:00 AM – 7:00 PM',
}

export const COURSE_OPTIONS = [
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

export const FILTER_CATEGORIES: CourseCategory[] = ['All', 'Databricks & AI', 'SQL', 'Snowflake', 'Python', 'Power BI']
