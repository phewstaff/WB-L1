/* Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы
для расчета площади и периметра. Затем создайте подклассы, представляющие различные фигуры,
такие как прямоугольник, круг и треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры. */

class Shape {
  constructor() {
    // Общие свойства или инициализация, которых нет в данном примере
  }

  // Метод для вычисления площади
  calculateArea() {
    // Реализация, специфичная для каждой фигуры
  }

  // Метод для вычисления периметра
  calculatePerimeter() {
    // Реализация, специфичная для каждой фигуры
  }
}

// Подкласс для Прямоугольника
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height; // Умножаем высоту и ширину
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Подкласс для Круга
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2); // ПИ * r^2
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius; // ПИ * r
  }
}

// Подкласс для Треугольника
class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();

    // Проверка на валидность Треугольника
    if (this.isValidTriangle(side1, side2, side3)) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    } else {
      throw new Error("Неправильные размеры для треугольника");
    }
  }

  isValidTriangle(a, b, c) {
    // Теорема неравенства Треугольника - каждая сторона должна быть меньше суммы двух других
    return a + b > c && b + c > a && c + a > b;
  }

  calculateArea() {
    // Вычислить полупериметр
    const s = (this.side1 + this.side2 + this.side3) / 2;

    // Формула Герона для вычисл. площади, используя полупериметр
    const area = Math.sqrt(
      s * (s - this.side1) * (s - this.side2) * (s - this.side3)
    );

    return area;
  }

  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// Примеры

// Прямоуг высота ширина
const rectangle = new Rectangle(5, 8);
console.log("Прямоугольник Площадь:", rectangle.calculateArea()); // 40
console.log("Прямоугольник Периметр:", rectangle.calculatePerimeter()); // 26

// Круг радиус
const circle = new Circle(3);
console.log("Окружность Площадь:", circle.calculateArea().toFixed(2)); // 28.27
console.log("Окружность Периметр:", circle.calculatePerimeter().toFixed(2)); // 18.85

// Треугольник 3 стороны
const triangle = new Triangle(3, 4, 5);
console.log("Треуголник Площадь:", triangle.calculateArea()); // 6
console.log("Треуголник Периметр:", triangle.calculatePerimeter()); // 12
