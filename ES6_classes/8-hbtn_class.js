export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // When cast to Number, return size
  valueOf() {
    return this._size;
  }

  // When cast to String, return location
  toString() {
    return this._location;
  }
}
