# 🚀 ES6 Promise Patterns with uploadPhoto and createUser

This guide demonstrates common ES6 Promise patterns using `uploadPhoto` and `createUser` functions.

## 📋 Function Signatures

### uploadPhoto(filename)
Returns a Promise that resolves with:
```javascript
{
  status: 200,
  body: 'photo-profile-1',
}
```

### createUser(firstName, lastName)
Returns a Promise that resolves with:
```javascript
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

## 🎯 Common Patterns

### 1. Sequential Operations (async/await)
Operations run one after another:

```javascript
async function createProfileSequential() {
  try {
    const photo = await uploadPhoto('avatar.jpg');
    console.log('Photo uploaded:', photo);
    
    const user = await createUser('Guillaume', 'Salva');
    console.log('User created:', user);
    
    return { photo, user };
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}
```

### 2. Parallel Operations (Promise.all)
Operations run simultaneously for better performance:

```javascript
async function createProfileParallel() {
  try {
    const [photo, user] = await Promise.all([
      uploadPhoto('avatar.jpg'),
      createUser('Guillaume', 'Salva')
    ]);
    
    return { photo, user };
  } catch (error) {
    // If ANY operation fails, this catch block runs
    console.error('One or both operations failed:', error.message);
    throw error;
  }
}
```

### 3. Resilient Operations (Promise.allSettled)
Handle partial failures gracefully:

```javascript
async function createProfileResilient() {
  const results = await Promise.allSettled([
    uploadPhoto('avatar.jpg'),
    createUser('Guillaume', 'Salva')
  ]);
  
  const response = { success: [], failed: [] };
  
  results.forEach((result, index) => {
    const operation = index === 0 ? 'photo' : 'user';
    
    if (result.status === 'fulfilled') {
      response.success.push({ operation, data: result.value });
    } else {
      response.failed.push({ operation, error: result.reason.message });
    }
  });
  
  return response;
}
```

### 4. Promise Chaining (.then/.catch)
Classic Promise pattern:

```javascript
function createProfileChained() {
  return uploadPhoto('avatar.jpg')
    .then(photoResult => {
      console.log('Photo uploaded:', photoResult);
      return createUser('Guillaume', 'Salva');
    })
    .then(userResult => {
      console.log('User created:', userResult);
      return { photo: photoResult, user: userResult };
    })
    .catch(error => {
      console.error('Chain failed:', error.message);
      throw error;
    });
}
```

### 5. Conditional Operations
Only run operations when needed:

```javascript
async function createProfileConditional(needsPhoto = true) {
  const operations = [createUser('Guillaume', 'Salva')];
  
  if (needsPhoto) {
    operations.push(uploadPhoto('avatar.jpg'));
  }
  
  const results = await Promise.all(operations);
  
  const response = { user: results[0] };
  if (needsPhoto) {
    response.photo = results[1];
  }
  
  return response;
}
```

## ⚡ Performance Comparison

| Pattern | Speed | Error Handling | Use Case |
|---------|--------|----------------|----------|
| **Sequential** | Slower | Stops on first error | When operations depend on each other |
| **Parallel** | Faster | Stops on first error | Independent operations, all must succeed |
| **Resilient** | Faster | Continues on errors | When partial success is acceptable |

## 🔧 Utility Functions

### Response Handlers
```javascript
// Handle uploadPhoto response
function handleUploadResponse(response) {
  return {
    success: response.status === 200,
    photoId: response.body,
    message: response.status === 200 ? 'Upload successful' : 'Upload failed'
  };
}

// Handle createUser response  
function handleUserResponse(response) {
  return {
    success: true,
    fullName: `${response.firstName} ${response.lastName}`,
    user: response
  };
}
```

### Error Handling
```javascript
async function safeOperation(operation, fallback = null) {
  try {
    return await operation();
  } catch (error) {
    console.warn(`Operation failed: ${error.message}`);
    return fallback;
  }
}

// Usage
const photo = await safeOperation(
  () => uploadPhoto('avatar.jpg'),
  { status: 500, body: 'default-avatar' }
);
```

## 🧪 Testing Examples

Run the provided test files:

```bash
# Test all patterns
node common-patterns.js

# Test utilities and advanced patterns  
node test-promises.js
```

## 📚 Key Takeaways

1. **Use `async/await`** for cleaner, more readable code
2. **Use `Promise.all()`** when all operations must succeed
3. **Use `Promise.allSettled()`** when partial failures are acceptable
4. **Always handle errors** appropriately for your use case
5. **Consider performance** - parallel is usually faster than sequential
6. **Structure responses** consistently for easier consumption

## 🔗 Advanced Patterns

### Promise Racing
```javascript
// First successful upload wins
const fastestUpload = await Promise.race([
  uploadPhoto('photo1.jpg'),
  uploadPhoto('photo2.jpg'),
  uploadPhoto('photo3.jpg')
]);
```

### Timeout Handling
```javascript
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), ms)
    )
  ]);
}

const result = await withTimeout(uploadPhoto('slow.jpg'), 5000);
```

### Retry Logic
```javascript
async function retryOperation(operation, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * i));
    }
  }
}

const result = await retryOperation(() => uploadPhoto('important.jpg'));
```

---

💡 **Pro Tip**: Choose the right pattern based on your specific needs - performance, error tolerance, and operation dependencies!
