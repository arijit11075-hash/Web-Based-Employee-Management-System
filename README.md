Project Overview: Employee Management System

A modern, responsive web application built with HTML, CSS, and JavaScript designed to manage company employees, roles, and administrative workflows efficiently across different user levels.

Complete Project Scope :

1. Login & Authentication Page (index.html)
- Purpose: Serves as the primary entry point and authentication gate for all system users.
- Features: 
  - Clean corporate layout with a centered container and custom styling.
  - Input fields for user credentials (Email/Username and Password).
  - Role selection dropdown to differentiate between Manager, Supervisor, and Employee access.
  - Form structure prepared for dynamic JavaScript authentication and role-based routing.

2. Manager Dashboard (manager.html)
- Purpose: Provides administrators and managers with full control over company statistics, employee records, and administrative actions.
- Features:
  - Sidebar Navigation: Dedicated menu layout linking to Dashboard, Employees, Leave Requests, and Logout options.
  - Analytics Stats Cards: Quick-view metric cards displaying Total Employees, Pending Leave Requests, and Present Today count.
  - Employee Management Table: Tabular interface listing employee ID, name, email, and department, equipped with interactive Edit and Delete action buttons alongside an Add Employee trigger.

3. Supervisor Dashboard (supervisor.html)
- Purpose: Dedicated dashboard for supervisors to monitor assigned team members and handle approvals.
- Features:
  - Profile and contact overview for Supervisor Md Zarif Azfar (zaryifs@gmail.com).
  - Metrics cards for team count, attendance, and pending leave requests.
  - Assigned team management and interactive leave approval/rejection actions.

4. Employee Dashboard (employee.html)
- Purpose: Dedicated panel for standard employees to view personal information and submit requests.
- Features:
  - Personal profile summary and status overview.
  - Attendance tracking and leave application interface.

5. Core Scripting & Logic (script.js)
- Purpose: Powers the interactivity, data handling, and security of the application.
- Features:
  - Role-based validation to redirect users to their respective dashboards upon login.
  - Supervisor password validation with attempt tracking and lockout protection.
  - LocalStorage integration for handling dynamic employee data (Adding, Editing, and Deleting records).

