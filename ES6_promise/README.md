# 🚀 ES6 Promises - Holberton School

A comprehensive collection of ES6 Promise implementations, async/await patterns, and error handling techniques.

## 📋 Table of Contents

1. [🌟 Project Overview](#project-overview)
2. [⚙️ Setup and Configuration](#setup-and-configuration)
3. [📂 Project Structure](#project-structure)
4. [📝 Task Implementations](#task-implementations)
5. [🧪 Testing](#testing)
6. [🔧 Development Commands](#development-commands)
7. [📚 Learning Objectives](#learning-objectives)
8. [🔗 Additional Resources](#additional-resources)

## 🌟 Project Overview

This project explores ES6 Promises, async/await syntax, error handling, and modern JavaScript asynchronous programming patterns. It includes implementations of various Promise patterns, utility functions, and comprehensive error handling strategies.

### **Technologies Used:**
- **Node.js** v20.19.4
- **Babel** for ES6+ transpilation
- **Jest** v29.6.1 for testing
- **ESLint** for code quality

### **Key Concepts Covered:**
- Promise creation and resolution
- Promise chaining with `.then()`, `.catch()`, `.finally()`
- `Promise.all()`, `Promise.allSettled()`, `Promise.race()`
- Async/await syntax
- Error handling and guardrail patterns
- Load balancing with Promises

## ⚙️ Setup and Configuration

### **Prerequisites:**
- Node.js v20.x or higher
- npm v9.x or higher

### **Installation:**
```bash
npm install
```

### **Project Configuration Files:**

#### `package.json`
```json
{
  "name": "es6_promise",
  "version": "1.0.0",
  "description": "Holberton School ES6 Promises",
  "main": "0-promise.js",
  "scripts": {
    "test": "jest",
    "dev": "babel-node"
  },
  "devDependencies": {
    "@babel/core": "^7.22.5",
    "@babel/node": "^7.22.5",
    "@babel/preset-env": "^7.22.5",
    "babel-jest": "^29.6.1",
    "jest": "^29.6.1"
  }
}
```

#### `babel.config.js`
```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { node: 'current' }
    }]
  ]
};
```

## 📂 Project Structure

```
ES6_promise/
├── 📄 README.md                    # This comprehensive guide
├── ⚙️ package.json                  # Project configuration
├── ⚙️ babel.config.js               # Babel configuration
├── ⚙️ eslint.config.js              # ESLint configuration
│
├── 🔧 utils.js                      # Utility functions
│
├── 📝 Task Implementations:
├── 0-promise.js                     # Basic Promise creation
├── 1-promise.js                     # Conditional Promise resolution
├── 2-then.js                        # Promise handlers (.then, .catch, .finally)
├── 3-all.js                         # Promise.all() implementation
├── 4-user-promise.js                # Simple resolved Promise
├── 5-photo-reject.js                # Rejected Promise
├── 6-final-user.js                  # Promise.allSettled() with mapping
├── 7-load_balancer.js               # Promise.race() load balancer
├── 8-try.js                         # Error throwing function
├── 9-try.js                         # Guardrail pattern with try-catch
└── 100-await.js                     # Async/await implementation
│
└── 🧪 Test Files:
    ├── 0-main.js → 9-main.js        # Individual task tests
    └── 100-main.js                  # Async/await test
```

## 📝 Task Implementations

### **Task 0: Keep every promise you make** 📋
**File:** `0-promise.js`

Creates a basic Promise that resolves immediately.

```javascript
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve();
  });
}
```

**Test:** `npm run dev 0-main.js`
**Output:** `true` (confirms it's a Promise instance)

---

### **Task 1: Don't make a promise if you can't keep it** 🤝
**File:** `1-promise.js`

Creates a conditional Promise based on boolean parameter.

```javascript
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
```

**Test:** `npm run dev 1-main.js`
**Success:** `{ status: 200, body: 'Success' }`
**Error:** `Error: The fake API is not working currently`

---

### **Task 2: Catch me if you can!** 🎯
**File:** `2-then.js`

Demonstrates Promise chaining with `.then()`, `.catch()`, and `.finally()`.

```javascript
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success'
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
```

**Features:**
- ✅ Standardizes successful responses
- ✅ Converts errors to Error objects
- ✅ Always logs API response

---

### **Task 3: Handle multiple successful promises** 🤹
**File:** `3-all.js` + `utils.js`

Uses `Promise.all()` to handle multiple concurrent operations.

```javascript
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([
    uploadPhoto(),
    createUser('Guillaume', 'Salva')
  ])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
```

**Output:** `photo-profile-1 Guillaume Salva`

---

### **Task 4: Simple promise** 🌟
**File:** `4-user-promise.js`

Returns a resolved Promise with user data.

```javascript
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
```

**Usage:** Always resolves with user object structure.

---

### **Task 5: Reject the promises** ❌
**File:** `5-photo-reject.js`

Returns a rejected Promise with custom error message.

```javascript
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
```

**Behavior:** Always rejects with filename-specific error message.

---

### **Task 6: Handle multiple promises** 🛡️
**File:** `6-final-user.js`

Uses `Promise.allSettled()` for resilient error handling.

```javascript
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return results.map((res) => {
    if (res.status === 'fulfilled') {
      return { status: res.status, value: res.value };
    }
    return { status: res.status, value: res.reason.toString() };
  });
}
```

**Output Structure:**
```javascript
[
  { status: "fulfilled", value: { firstName: "Bob", lastName: "Dylan" } },
  { status: "rejected", value: "Error: bob_dylan.jpg cannot be processed" }
]
```

---

### **Task 7: Load balancer** ⚖️
**File:** `7-load_balancer.js`

Implements load balancing using `Promise.race()`.

```javascript
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
```

**Behavior:** Returns result from whichever Promise resolves first.

---

### **Task 8: Throw an error** ⚠️
**File:** `8-try.js`

Function with error throwing for division by zero.

```javascript
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
```

**Usage:** Safe division with explicit error handling.

---

### **Task 9: Guardrail** 🛡️
**File:** `9-try.js`

Implements guardrail pattern for safe function execution.

```javascript
export default function guardrail(mathFunction) {
  const queue = [];
  
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  
  return queue;
}
```

**Output Examples:**
- Success: `[5, 'Guardrail was processed']`
- Error: `['Error: cannot divide by 0', 'Guardrail was processed']`

---

### **Task 10: Await / Async** 🔄
**File:** `100-await.js`

Modern async/await implementation with error handling.

```javascript
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser('Guillaume', 'Salva');
    
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
```

**Features:**
- ✅ Sequential async operations
- ✅ Comprehensive error handling
- ✅ Consistent return structure

## 🧪 Testing

### **Run Individual Tests:**
```bash
npm run dev 0-main.js    # Test Task 0
npm run dev 1-main.js    # Test Task 1
# ... and so on
```

### **Run All Tests:**
```bash
npm test                 # Run Jest test suite
```

## 🔧 Development Commands

### **Babel Transpilation:**
```bash
npm run dev <filename>   # Run file with Babel transpilation
```

### **Code Quality:**
```bash
npm run lint <filename>  # Run ESLint on specific file
```

### **Package Management:**
```bash
npm install              # Install dependencies
npm audit               # Check for vulnerabilities
```

## 📚 Learning Objectives

By completing this project, you will understand:

### **✅ Promise Fundamentals:**
- Creating and resolving Promises
- Promise states (pending, fulfilled, rejected)
- Promise chaining with `.then()`, `.catch()`, `.finally()`

### **✅ Promise Combinators:**
- `Promise.all()` - All must succeed
- `Promise.allSettled()` - Wait for all, handle partial failures
- `Promise.race()` - First to resolve wins

### **✅ Error Handling:**
- Try-catch blocks with Promises
- Guardrail patterns for safe execution
- Error transformation and logging

### **✅ Async/Await:**
- Modern asynchronous syntax
- Sequential vs. parallel execution
- Error handling with async/await

### **✅ Practical Patterns:**
- Load balancing with Promise.race()
- Data validation and transformation
- Resilient error handling strategies

## 🔗 Additional Resources

### **External Resources:**
- [MDN Promise Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ES6 Features Overview](https://github.com/lukehoban/es6features)
- [Async/Await Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

## 🏆 Completion Status

| Task | File | Status | Description |
|------|------|--------|-------------|
| 0 | `0-promise.js` | ✅ | Basic Promise creation |
| 1 | `1-promise.js` | ✅ | Conditional Promise resolution |
| 2 | `2-then.js` | ✅ | Promise handlers |
| 3 | `3-all.js` | ✅ | Promise.all() implementation |
| 4 | `4-user-promise.js` | ✅ | Simple resolved Promise |
| 5 | `5-photo-reject.js` | ✅ | Rejected Promise |
| 6 | `6-final-user.js` | ✅ | Promise.allSettled() |
| 7 | `7-load_balancer.js` | ✅ | Promise.race() load balancer |
| 8 | `8-try.js` | ✅ | Error throwing |
| 9 | `9-try.js` | ✅ | Guardrail pattern |
| 10 | `100-await.js` | ✅ | Async/await implementation |

---

## 🎯 Key Takeaways

1. **Promises provide powerful async control** - Better than callbacks
2. **Error handling is crucial** - Always plan for failure scenarios
3. **Choose the right combinator** - `all()`, `allSettled()`, or `race()`
4. **Async/await improves readability** - Modern syntax over Promise chains
5. **Guardrail patterns enhance reliability** - Safe execution with logging

**Ready to master ES6 Promises!** 🚀

---

## 👨‍💻 Author

**Héctor Soto** - [@hector17rock](https://github.com/hector17rock)
- 🎓 Holberton School Web Backend Specialization Student
- 💻 Full Stack Developer in Training
- 🌟 Passionate about modern JavaScript and asynchronous programming

*Created for Holberton School Web Backend Specialization*
