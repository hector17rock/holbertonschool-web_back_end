// Common ES6 Promise patterns with uploadPhoto and createUser

// Mock functions (replace these with your actual implementations)
const uploadPhoto = (filename) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (filename) {
        resolve({
          status: 200,
          body: `photo-profile-${Math.floor(Math.random() * 1000)}`
        });
      } else {
        reject(new Error('No filename provided'));
      }
    }, 500);
  });
};

const createUser = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstName && lastName) {
        resolve({
          firstName,
          lastName
        });
      } else {
        reject(new Error('Missing user information'));
      }
    }, 300);
  });
};

// Pattern 1: Sequential operations with async/await
async function createProfileSequential() {
  console.log('🔄 Creating profile sequentially...');
  
  try {
    // Upload photo first
    const photo = await uploadPhoto('avatar.jpg');
    console.log('📸 Photo result:', photo);
    
    // Then create user
    const user = await createUser('Guillaume', 'Salva');
    console.log('👤 User result:', user);
    
    return { photo, user };
  } catch (error) {
    console.error('❌ Sequential error:', error.message);
    throw error;
  }
}

// Pattern 2: Parallel operations with Promise.all
async function createProfileParallel() {
  console.log('⚡ Creating profile in parallel...');
  
  try {
    const [photo, user] = await Promise.all([
      uploadPhoto('avatar.jpg'),
      createUser('Guillaume', 'Salva')
    ]);
    
    console.log('📸 Photo result:', photo);
    console.log('👤 User result:', user);
    
    return { photo, user };
  } catch (error) {
    console.error('❌ Parallel error:', error.message);
    throw error;
  }
}

// Pattern 3: Graceful error handling with Promise.allSettled
async function createProfileResilient() {
  console.log('🛡️  Creating profile with error resilience...');
  
  const results = await Promise.allSettled([
    uploadPhoto('avatar.jpg'),
    createUser('Guillaume', 'Salva')
  ]);
  
  const response = { success: [], failed: [] };
  
  results.forEach((result, index) => {
    const operation = index === 0 ? 'photo' : 'user';
    
    if (result.status === 'fulfilled') {
      response.success.push({ operation, data: result.value });
      console.log(`✅ ${operation} succeeded:`, result.value);
    } else {
      response.failed.push({ operation, error: result.reason.message });
      console.log(`❌ ${operation} failed:`, result.reason.message);
    }
  });
  
  return response;
}

// Pattern 4: Promise chaining with .then()
function createProfileChained() {
  console.log('🔗 Creating profile with promise chaining...');
  
  return uploadPhoto('avatar.jpg')
    .then(photoResult => {
      console.log('📸 Photo uploaded:', photoResult);
      // Pass photo result to next step
      return createUser('Guillaume', 'Salva')
        .then(userResult => {
          console.log('👤 User created:', userResult);
          return { photo: photoResult, user: userResult };
        });
    })
    .catch(error => {
      console.error('❌ Chain error:', error.message);
      throw error;
    });
}

// Pattern 5: Conditional operations
async function createProfileConditional(needsPhoto = true) {
  console.log('🤔 Creating profile with conditions...');
  
  try {
    const operations = [];
    
    // Always create user
    operations.push(createUser('Guillaume', 'Salva'));
    
    // Only upload photo if needed
    if (needsPhoto) {
      operations.push(uploadPhoto('avatar.jpg'));
    }
    
    const results = await Promise.all(operations);
    
    const response = { user: results[0] };
    if (needsPhoto) {
      response.photo = results[1];
    }
    
    console.log('📋 Results:', response);
    return response;
  } catch (error) {
    console.error('❌ Conditional error:', error.message);
    throw error;
  }
}

// Run examples
async function runAllExamples() {
  console.log('🚀 ES6 Promise Patterns Demo\n');
  
  try {
    // Example 1: Sequential
    await createProfileSequential();
    console.log('\\n' + '-'.repeat(50) + '\\n');
    
    // Example 2: Parallel
    await createProfileParallel();
    console.log('\\n' + '-'.repeat(50) + '\\n');
    
    // Example 3: Resilient
    await createProfileResilient();
    console.log('\\n' + '-'.repeat(50) + '\\n');
    
    // Example 4: Chained
    await createProfileChained();
    console.log('\\n' + '-'.repeat(50) + '\\n');
    
    // Example 5: Conditional (with photo)
    await createProfileConditional(true);
    console.log('\\n' + '-'.repeat(30) + '\\n');
    
    // Example 5b: Conditional (without photo)
    await createProfileConditional(false);
    
  } catch (error) {
    console.error('Demo failed:', error.message);
  }
  
  console.log('\\n🎉 All examples completed!');
}

runAllExamples();
