

const employees = [ 
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Prepare project report",
        "taskDescription": "Create and submit the monthly performance report.",
        "taskDate": "2025-11-05",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Database backup",
        "taskDescription": "Backup all company data to secure server.",
        "taskDate": "2025-11-06",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Client meeting",
        "taskDescription": "Discuss project requirements with the client.",
        "taskDate": "2025-11-08",
        "category": "Meeting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Design homepage",
        "taskDescription": "Create the homepage UI for the new project.",
        "taskDate": "2025-11-07",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code review",
        "taskDescription": "Review teammate’s code for bugs.",
        "taskDate": "2025-11-05",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Fix login bug",
        "taskDescription": "Resolve authentication issue in login module.",
        "taskDate": "2025-11-06",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Test API endpoints",
        "taskDescription": "Run tests for all REST API endpoints.",
        "taskDate": "2025-11-07",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Deploy update",
        "taskDescription": "Deploy the latest build to staging server.",
        "taskDate": "2025-11-08",
        "category": "Deployment",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Write unit tests",
        "taskDescription": "Add test cases for new functions.",
        "taskDate": "2025-11-07",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update documentation",
        "taskDescription": "Update the README file with setup steps.",
        "taskDate": "2025-11-06",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Database optimization",
        "taskDescription": "Optimize SQL queries for better performance.",
        "taskDate": "2025-11-09",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Prepare training material",
        "taskDescription": "Create slides for team training session.",
        "taskDate": "2025-11-10",
        "category": "Training",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix UI alignment",
        "taskDescription": "Correct layout issues on dashboard page.",
        "taskDate": "2025-11-08",
        "category": "UI",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Security audit",
        "taskDescription": "Check system for vulnerabilities.",
        "taskDate": "2025-11-07",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Meera",
    "email": "admin@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Review project progress",
        "taskDescription": "Analyze team performance and project timeline.",
        "taskDate": "2025-11-07",
        "category": "Management",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Approve budget",
        "taskDescription": "Review and approve project budget for Q4.",
        "taskDate": "2025-11-05",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
