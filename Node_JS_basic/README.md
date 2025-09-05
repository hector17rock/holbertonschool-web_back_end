# 🚀 Node.js Basic - Complete Backend Development Project

A comprehensive Node.js backend development project covering fundamental concepts, file I/O operations, HTTP servers, Express.js framework, and advanced server architecture patterns. 💻✨

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Task Implementations](#task-implementations)
- [API Documentation](#api-documentation)
- [Usage Examples](#usage-examples)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)

## 🚀 Project Overview

This project demonstrates progressive backend development skills through 8 comprehensive tasks: 🎯

1. **🟢 Basic JavaScript execution in Node.js**
2. **⌨️ Interactive command-line programs**
3. **📁 Synchronous and asynchronous file operations**
4. **🌐 HTTP server creation with Node's built-in modules**
5. **🔗 Advanced HTTP routing and CSV data processing**
6. **⚡ Express.js framework introduction**
7. **🏗️ Complex Express applications with database integration**
8. **🏛️ Enterprise-level MVC architecture with ES6 modules**

## 🛠 Technologies Used

- **⚡ Runtime**: Node.js v20.19.4+
- **🚀 Framework**: Express.js v4.17.1
- **🔄 Transpiler**: Babel v6.26.0 with babel-preset-env
- **✅ Linting**: ESLint v6.8.0 with Airbnb configuration
- **🧪 Testing**: Mocha v6.2.3 with Chai v4.4.1
- **🔥 Development**: Nodemon v2.0.22 for hot-reloading
- **💎 Code Quality**: ESLint, Babel, ES6+ features

## 📦 Setup and Installation

### ⚙️ Prerequisites
```bash
# Node.js and npm installation required 📋
node --version  # v20.19.4+ ⚡
npm --version   # 6.14.0+ 📦
```

### 🔧 Installation
```bash
# Clone the repository 📁
git clone <repository-url>
cd Node_JS_basic

# Install dependencies 📥
npm install

# Verify installation ✅
npm run check-lint
```

### 💻 Development Environment
```bash
# Start development server (for full_server) 🚀
npm run dev

# Run linting 🔍
npm run lint
npm run check-lint

# Run tests 🧪
npm test
```

## 📁 Project Structure

```
Node_JS_basic/
├── 📄 Basic Tasks (0-3)
│   ├── 0-console.js              # Console output basics
│   ├── 1-stdin.js                # Interactive CLI input
│   ├── 2-read_file.js            # Synchronous file reading
│   ├── 3-read_file_async.js      # Asynchronous file operations
│   └── *-main*.js                # Test files for each task
│
├── 🌐 HTTP Servers (4-7)
│   ├── 4-http.js                 # Basic HTTP server
│   ├── 5-http.js                 # Advanced HTTP with routing
│   ├── 6-http_express.js         # Simple Express server
│   └── 7-http_express.js         # Complex Express application
│
├── 🏗️ Enterprise Architecture (Task 8)
│   └── full_server/
│       ├── controllers/
│       │   ├── AppController.js      # Homepage controller
│       │   └── StudentsController.js # Student data controller
│       ├── routes/
│       │   └── index.js              # Express route definitions
│       ├── utils.js                  # Database utilities
│       └── server.js                 # Main application server
│
├── 📊 Data Files
│   ├── database.csv              # Student data (10 records)
│   └── database_with_empty_lines.csv # Test data with edge cases
│
├── ⚙️ Configuration
│   ├── package.json              # Project dependencies & scripts
│   ├── .babelrc                  # Babel ES6 transpilation config
│   ├── .eslintrc.js              # ESLint code quality rules
│   └── babel.config.js           # Additional Babel configuration
│
└── 📚 Documentation
    └── README.md                 # This comprehensive guide
```

## 📋 Task Implementations

### 🟢 Task 0: Basic Console Output
**🎯 Purpose**: Create a function that displays messages to stdout.

**✨ Features**:
- 🖨️ Simple console.log wrapper function
- 📦 Module export for reusability
- 🏗️ Foundation for Node.js basics

### ⌨️ Task 1: Interactive CLI Program
**🎯 Purpose**: Interactive command-line program that reads user input.

**✨ Features**:
- 📥 Process.stdin for user input
- ⚡ Real-time input processing
- 🚪 Graceful exit handling

### 📁 Task 2: Synchronous File Reading
**🎯 Purpose**: Synchronously read and process CSV student data.

**✨ Features**:
- 📖 fs.readFileSync for immediate file reading
- 📊 CSV parsing and data processing
- 👥 Student grouping by field of study
- ⚠️ Error handling for missing files

### ⚡ Task 3: Asynchronous File Operations
**🎯 Purpose**: Asynchronously process CSV data using Promises.

**✨ Features**:
- 📂 fs.readFile with callbacks
- 🤝 Promise-based error handling
- 🔄 Non-blocking file operations
- 📊 Same data processing as Task 2

### 🌐 Task 4: Basic HTTP Server
**🎯 Purpose**: Create a basic HTTP server that responds to all endpoints.

**✨ Features**:
- 🔧 Node.js built-in http module
- 🌍 Universal response handling
- 🔌 Port 1245 configuration
- 📝 Plain text responses

### 🔗 Task 5: Advanced HTTP Server with Routing
**🎯 Purpose**: HTTP server with route handling and CSV integration.

**✨ Features**:
- **🏠 Route `/`**: Returns "Hello Holberton School!"
- **👥 Route `/students`**: Returns formatted student data from CSV
- 🗺️ URL parsing and routing logic
- 📋 Command-line database file argument
- ⚠️ Error handling for database access

### ⚡ Task 6: Simple Express Server
**🎯 Purpose**: Introduction to Express.js framework with basic routing.

**✨ Features**:
- 🚀 Express.js framework setup
- 🎨 Clean route definition syntax
- 🚫 Automatic 404 handling
- 🔗 Express middleware support ready

### 🏗️ Task 7: Complex Express Application
**🎯 Purpose**: Advanced Express server with database integration and error handling.

**✨ Features**:
- **📊 Database Integration**: CSV file processing
- **🔀 Route Parameters**: Dynamic routing support
- **⚠️ Error Handling**: Graceful database error management
- **🤝 Promise-based**: Non-blocking database operations

### 🏛️ Task 8: Enterprise MVC Architecture
**🎯 Purpose**: Complete enterprise-level application with:

**🏗️ Architecture Features**:
- **🎭 MVC Pattern**: Separation of concerns
- **📦 ES6 Modules**: Modern JavaScript imports/exports
- **🎮 Controller Classes**: Organized business logic
- **🔧 Utility Functions**: Reusable database operations
- **🗺️ Route Management**: Centralized routing configuration

**🚀 Advanced Features**:
- **🏠 AppController**: Homepage management
- **👥 StudentsController**: Student data operations with filtering
- **✅ Parameter Validation**: Major field validation (CS/SWE only)
- **📝 Alphabetical Sorting**: Case-insensitive field sorting
- **🔄 Babel Integration**: ES6+ transpilation support

## 🌐 API Documentation

### HTTP Servers (Tasks 4-7) - Port 1245

#### 🏠 Base Endpoints
- **GET `/`** 🎯
  - 📝 Response: `Hello Holberton School!`
  - ✅ Status: 200
  - 📄 Content-Type: text/plain

#### 👥 Student Data Endpoints (Tasks 5, 7, 8)
- **GET `/students`** 📊
  - 📋 Response: Complete student list grouped by field
  - 📈 Status: 200 | 500
  - 💡 Example Response:
    ```
    This is the list of our students
    Number of students: 10
    Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
    Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
    ```

#### 🚀 Advanced Endpoints (Task 8)
- **GET `/students/:major`** 🎯
  - 📝 Parameters: `major` (CS or SWE)
  - 📊 Response: Filtered student list by major
  - 📈 Status: 200 | 500
  - ✅ Example: `/students/CS` → `List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie`
  - ❌ Error: `/students/French` → `Major parameter must be CS or SWE` (Status: 500)

## 💻 Usage Examples

### 🎮 Running Individual Tasks
```bash
# Task 0: Console output 🖨️
node 0-main.js

# Task 1: Interactive CLI ⌨️
node 1-stdin.js

# Task 2: Sync file reading 📁
node 2-main_0.js

# Task 3: Async file reading ⚡
node 3-main_0.js
```

### 🌐 HTTP Servers
```bash
# Task 4: Basic HTTP 🔧
node 4-http.js
curl localhost:1245

# Task 5: Advanced HTTP 🔗
node 5-http.js database.csv
curl localhost:1245/students

# Task 6: Simple Express ⚡
node 6-http_express.js
curl localhost:1245

# Task 7: Complex Express 🏗️
node 7-http_express.js database.csv
curl localhost:1245/students

# Task 8: Enterprise MVC 🏛️
npm run dev
curl localhost:1245/students/CS
```

### 🧪 API Testing Examples
```bash
# Test homepage 🏠
curl localhost:1245
# Response: Hello Holberton School! ✅

# Test student listing 👥
curl localhost:1245/students
# Response: Full student data with counts 📊

# Test specific major (Task 8) 🎯
curl localhost:1245/students/SWE
# Response: List: Guillaume, Joseph, Paul, Tommy ✅

# Test error handling ⚠️
curl localhost:1245/students/InvalidMajor
# Response: Major parameter must be CS or SWE (Status: 500) ❌
```

## 🧪 Testing

### 🤖 Automated Testing
```bash
# Run all tests 🧪
npm test

# Run specific test file 📋
npm test <test-file>

# Run with coverage 📊
npm run test:coverage
```

### 🔧 Manual Testing
```bash
# Test file operations 📁
node 2-main_0.js    # Valid database ✅
node 2-main_1.js    # Non-existent file ❌
node 2-main_empty.js # Empty database 🗂️

# Test HTTP endpoints 🌐
curl -i localhost:1245/            # Homepage 🏠
curl -i localhost:1245/students    # Student data 👥
curl -i localhost:1245/nonexistent # 404 handling 🚫
```

### 📊 Test Data
- **📄 database.csv**: 10 student records (CS: 6, SWE: 4) 👥
- **📝 database_with_empty_lines.csv**: Test data with edge cases 🔍

## ✅ Code Quality

### 🔍 Linting
```bash
# Lint all numbered tasks (0-7) 📋
npm run check-lint

# Lint specific files 🎯
npm run lint <file>

# Lint full_server directory 🏗️
./node_modules/.bin/eslint full_server/**/*.js

# Auto-fix linting issues 🔧
./node_modules/.bin/eslint <file> --fix
```

### 📝 Code Standards
- **✅ ESLint Configuration**: Airbnb JavaScript Style Guide
- **🚀 ES6+ Features**: Arrow functions, destructuring, template literals
- **⚠️ Error Handling**: Proper Promise rejection and try/catch blocks
- **🧩 Modular Design**: Reusable functions and clear separation of concerns

## 🏗️ Advanced Features

### Task 8: Enterprise Architecture

#### 🎭 MVC Pattern Implementation
```
full_server/
├── 📊 models/         # Data layer (utils.js)
├── 🖼️ views/          # Presentation layer (HTTP responses)
└── 🎮 controllers/    # Business logic layer
```

#### 📦 ES6 Module System
```javascript
// Modern import/export syntax ✨
import express from 'express';
import { readDatabase } from '../utils';
export default AppController;
```

#### 🔥 Development Features
- **🔄 Hot Reloading**: Nodemon for automatic server restart
- **🔄 Babel Transpilation**: ES6+ → ES5 compatibility
- **⚙️ Environment Configuration**: Flexible database path handling

### ⚠️ Error Handling Strategies
- **📁 File Operations**: Graceful CSV reading errors
- **🌐 HTTP Responses**: Appropriate status codes (200, 404, 500)
- **✅ Parameter Validation**: Input sanitization and validation
- **💾 Database Errors**: User-friendly error messages

## 🔧 Troubleshooting

### 🚨 Common Issues

#### 🔌 Port Already in Use
```bash
# Kill process using port 1245 💀
lsof -ti:1245 | xargs kill -9

# Or use different port in development 🔄
```

#### 🔄 Babel/ES6 Issues
```bash
# Ensure .babelrc is properly configured ⚙️
cat .babelrc
# Should contain: {"presets": ["env"]} ✅

# Install missing babel packages 📦
npm install --save-dev babel-register babel-preset-env
```

#### 🔍 Linting Errors
```bash
# Auto-fix common issues 🔧
npm run lint -- --fix

# Check specific rules 📋
./node_modules/.bin/eslint <file> --print-config
```

#### 📁 File Reading Issues
```bash
# Ensure CSV files exist and have correct format 📊
ls -la *.csv

# Check file permissions 🔐
chmod 644 database.csv
```

### 💡 Development Tips

1. **🧪 Server Testing**: Use curl or Postman for API testing
2. **👀 File Changes**: Nodemon watches for changes automatically
3. **🐛 Debugging**: Add console.log statements for troubleshooting
4. **📋 Error Logs**: Check server console for detailed error messages

## 📈 Performance Considerations

- **⚡ Async Operations**: Non-blocking file I/O operations
- **💾 Memory Management**: Efficient CSV processing without loading entire files
- **🚀 Error Handling**: Fast-fail approach for invalid inputs
- **🗄️ Caching**: Consider implementing data caching for production use

## 🎓 Learning Outcomes

By completing this project, you'll gain expertise in:

### 🟢 Core Node.js Concepts
- **⚡ Runtime Environment**: Understanding Node.js execution model
- **📦 Module System**: CommonJS and ES6 module patterns
- **🔄 Asynchronous Programming**: Callbacks, Promises, and async patterns
- **📁 File System Operations**: Reading and processing data files

### 🌐 Web Development
- **🔗 HTTP Protocol**: Request/response cycle and status codes
- **🏗️ Server Creation**: Both raw Node.js and Express.js approaches
- **🗺️ Routing**: URL parsing and endpoint management
- **🎯 API Design**: RESTful endpoint creation and documentation

### 🏗️ Software Engineering
- **🎭 MVC Architecture**: Separation of concerns and code organization
- **⚠️ Error Handling**: Graceful error management and user feedback
- **💎 Code Quality**: Linting, formatting, and best practices
- **🧪 Testing**: Manual and automated testing strategies

### 🛠️ Modern Development Tools
- **🔄 Babel**: ES6+ transpilation for compatibility
- **🔍 ESLint**: Code quality and consistency enforcement
- **🔥 Nodemon**: Development productivity with hot-reloading
- **📦 NPM**: Package management and script automation

## 🤝 Contributing

1. ✅ Follow ESLint configuration for code style
2. 🧪 Add tests for new features
3. 📚 Update documentation for API changes
4. 🔍 Ensure all linting checks pass before committing

## 📄 License

ISC License - See package.json for details.

---

**🎓 Project completed as part of Holberton School's Backend Development curriculum.**

## 👨‍💻 Author

**Héctor Soto** - [@hector17rock](https://github.com/hector17rock)  
🎓 Holberton School - Full-Stack Software Engineering  
💻 Backend Development Specialization  
🌟 Building innovative web solutions with Node.js

### Connect with me:
- 🐙 GitHub: [hector17rock](https://github.com/hector17rock)
- 📚 Learning: Node.js, Express.js, Backend Architecture
- 🚀 Focus: Server-side JavaScript development and API design

---

**Version**: 1.0.0  
**Node.js**: v20.19.4+  
**Last Updated**: 2025-09-05
