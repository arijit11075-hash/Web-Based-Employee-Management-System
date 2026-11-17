Project Overview: Employee Management System

A modern, responsive web application built with HTML, CSS, and JavaScript designed to manage company employees, roles, and administrative workflows efficiently across different user levels.

Complete Project Scope :

1. Login & Authentication Page (index.html)
- Purpose: Serves as the primary entry point and authentication gate for all system users.
- Features: 
  - Clean corporate layout with a centered container and custom styling.
  - Input fields for user credentials (Email/Username and Password).
  - Role selection dropdown to differentiate between Manager and Employee access.
  - Form structure prepared for dynamic JavaScript authentication and role-based routing.

2. Manager Dashboard (manager.html)
- Purpose: Provides administrators and managers with full control over company statistics, employee records, and administrative actions.
- Features:
  - Sidebar Navigation: Dedicated menu layout linking to Dashboard, Employees, Leave Requests, and Logout options.
  - Analytics Stats Cards: Quick-view metric cards displaying Total Employees, Pending Leave Requests, and Present Today count.
  - Employee Management Table: Tabular interface listing employee ID, name, email, and department, equipped with interactive Edit and Delete action buttons alongside an Add Employee trigger.

3. Employee Dashboard (employee.html)
- Purpose: Dedicated panel for standard employees to view personal information and submit requests.
- Features:
  - Personal profile summary and status overview.
  - Attendance tracking and leave application interface.

4. Core Scripting & Logic (script.js)
- Purpose: Powers the interactivity, data handling, and security of the application.
- Features:
  - Role-based validation to redirect users to their respective dashboards upon login.
  - LocalStorage integration for handling dynamic employee data (Adding, Editing, and Deleting records).

