class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Call the constructor of the parent class (Rectangle) with the same argument for width and height
    super(side, side);
  }

  // Override the getArea method if needed

  getPerimeter() {
    return 4 * this.width; // Since all sides of a square are equal, perimeter = 4 * side
  }
}

// Example usage:


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
