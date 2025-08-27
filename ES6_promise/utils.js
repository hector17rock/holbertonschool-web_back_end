export function uploadPhoto(filename) {
  return Promise.resolve({
    status: 200,
    body: `photo-profile-1`,
  });
}

export function createUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
