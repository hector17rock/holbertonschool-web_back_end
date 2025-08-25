// Export a WeakMap instance
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Get the current count for this endpoint (default to 0 if not found)
  let count = weakMap.get(endpoint) || 0;
  
  // Increment the count
  count += 1;
  
  // Store the updated count in the WeakMap
  weakMap.set(endpoint, count);
  
  // Check if the count has reached the limit
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
