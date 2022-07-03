function parseCount(n) {
    const parsed=Number.parseInt(n)
    if (Number.isNaN(parsed)) {
      throw new Error ("Невалидное значение") 
  }
  else {return parsed}
  }
  
  function validateCount(n) {
  try {
      return parseCount(n)
    }
    catch (Error) {
      return Error;
    }
   
  }
  class Triangle {
    constructor(a,b,c){
        if ((a+b)<c) {
            throw new Error ("Треугольник с такими сторонами не существует")
          }
          if ((a+c)<b) {
            throw new Error ("Треугольник с такими сторонами не существует")
          }
          if ((b+c)<a) {
            throw new Error ("Треугольник с такими сторонами не существует")
          }
      this.a=a
      this.b=b
      this.c=c
     
    }
    getPerimeter() {
     return this.a+this.b+this.c
    }
    getArea(){
      let p=(this.getPerimeter())/2
      return  +Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3)
    }
  }

  function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
}