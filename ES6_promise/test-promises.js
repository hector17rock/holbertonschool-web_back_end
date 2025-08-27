import {
  setupUserProfile,
  chainedPhotoAndUser,
  racePhotoUploads
} from './promise-utils.js';

async function runTests() {
  console.log('🧪 Testing ES6 Promise patterns with uploadPhoto and createUser\n');
  
  // Test 1: Complete profile setup with Promise.allSettled
  console.log('📋 Test 1: Complete profile setup (handles partial failures)');
  try {
    const result = await setupUserProfile('avatar.jpg', 'Guillaume', 'Salva');
    console.log('Result:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  console.log('\n' + '='.repeat(60) + '\n');
  
  // Test 2: Test with invalid data to see error handling
  console.log('📋 Test 2: Profile setup with invalid photo filename');
  try {
    const result = await setupUserProfile('', 'Guillaume', 'Salva');
    console.log('Result:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  console.log('\n' + '='.repeat(60) + '\n');
  
  // Test 3: Promise chaining
  console.log('📋 Test 3: Chained operations (sequential)');
  try {
    const result = await chainedPhotoAndUser('profile.png', 'Guillaume', 'Salva');
    console.log('Final result:', result);
  } catch (error) {
    console.error('Chain error:', error.message);
  }
  
  console.log('\n' + '='.repeat(60) + '\n');
  
  // Test 4: Promise.race
  console.log('📋 Test 4: Racing multiple photo uploads');
  try {
    const result = await racePhotoUploads([
      'fast-photo.jpg',
      'slow-photo.jpg',
      'medium-photo.jpg'
    ]);
    console.log('Winner:', result);
  } catch (error) {
    console.error('Race error:', error.message);
  }
  
  console.log('\n✅ All tests completed!');
}

// Run the tests
runTests().catch(console.error);
