// Import or define your uploadPhoto and createUser functions here
// For this example, I'll create mock versions

export function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (!filename || filename.trim() === '') {
      reject(new Error('Invalid filename'));
      return;
    }
    
    // Simulate API call delay
    setTimeout(() => {
      resolve({
        status: 200,
        body: `photo-profile-${Date.now()}`,
      });
    }, Math.random() * 1000 + 500);
  });
}

export function createUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (!firstName || !lastName) {
      reject(new Error('First name and last name are required'));
      return;
    }
    
    // Simulate API call delay
    setTimeout(() => {
      resolve({
        firstName,
        lastName,
      });
    }, Math.random() * 1000 + 500);
  });
}

// Utility function to handle photo upload response
export function handleUploadResponse(response) {
  if (response.status === 200) {
    return {
      success: true,
      photoId: response.body,
      message: 'Photo uploaded successfully',
    };
  }
  return {
    success: false,
    error: 'Upload failed',
  };
}

// Utility function to handle user creation response
export function handleUserResponse(response) {
  return {
    success: true,
    fullName: `${response.firstName} ${response.lastName}`,
    user: response,
  };
}

// Combined function that handles both operations
export async function setupUserProfile(filename, firstName, lastName) {
  try {
    const [photoResponse, userResponse] = await Promise.allSettled([
      uploadPhoto(filename),
      createUser(firstName, lastName)
    ]);
    
    const result = {
      timestamp: new Date().toISOString(),
      operations: [],
    };
    
    // Handle photo upload result
    if (photoResponse.status === 'fulfilled') {
      result.operations.push({
        type: 'photo',
        success: true,
        data: handleUploadResponse(photoResponse.value),
      });
    } else {
      result.operations.push({
        type: 'photo',
        success: false,
        error: photoResponse.reason.message,
      });
    }
    
    // Handle user creation result
    if (userResponse.status === 'fulfilled') {
      result.operations.push({
        type: 'user',
        success: true,
        data: handleUserResponse(userResponse.value),
      });
    } else {
      result.operations.push({
        type: 'user',
        success: false,
        error: userResponse.reason.message,
      });
    }
    
    return result;
  } catch (error) {
    throw new Error(`Profile setup failed: ${error.message}`);
  }
}

// Promise chain example
export function chainedPhotoAndUser(filename, firstName, lastName) {
  return uploadPhoto(filename)
    .then(photoResponse => {
      console.log('✅ Photo uploaded:', handleUploadResponse(photoResponse));
      return createUser(firstName, lastName);
    })
    .then(userResponse => {
      console.log('✅ User created:', handleUserResponse(userResponse));
      return userResponse;
    })
    .catch(error => {
      console.error('❌ Chain failed:', error.message);
      throw error;
    });
}

// Race condition example - first one wins
export function racePhotoUploads(filenames) {
  const uploadPromises = filenames.map(filename => uploadPhoto(filename));
  
  return Promise.race(uploadPromises)
    .then(result => {
      console.log('🏆 First upload completed:', result);
      return result;
    })
    .catch(error => {
      console.error('❌ All uploads failed:', error.message);
      throw error;
    });
}
