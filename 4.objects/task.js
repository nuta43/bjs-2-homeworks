function Student (name,gender,age) {
  this.name=name;
  this.gender=gender;
  this.age=age;
    
  }
  Student.prototype.setSubject = function (subjectName) {
  this.subject=subjectName
  }
  
  Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks=[]
     this.marks.push(mark)
    
  }
   else {
        this.marks.push(mark)
      }
  }
  
  
      Student.prototype.addMarks = function (mark1,mark2,mark3,...rest) {
        this.marks=[]
        this.marks.push(mark1,mark2,mark3,...rest)
        
    }
  Student.prototype.getAverage=function (arr) {
    let sum=0
    for (i=0;i<this.marks.length;i++){
    sum+=this.marks[i]
    }
    return sum/this.marks.length
  }
  Student.prototype.exclude = function (reason) {
  this.excluded=reason
  
    delete this.subject
  delete this.marks
    
    }
    class Library {
      constructor (name,books) {
        this.name=name(String)
        this.books=books
        this.books=[]
      }
      }
      Library.addBook=function(book) {
        if (this.state>30) {
          this.books.push(book)
        }
      }