class PrintEditionItem {

  type=null
  

  
  constructor (name,releaseDate,pagesCount,state=100) {
    this.name=name
    this.releaseDate=releaseDate
    this.pagesCount=pagesCount;
    this.state=state;
  }
  set state(value) {
        if (value<0) {
          this._state=0
        }
        else if (value>100) {
          this._state=100
        }
    else {
      this._state=value;
    }
        }
          get state() {
           return this._state 
          }

get State () {
       return this._state 
      }



  fix() {
   this.state=this.state * 1.5}
  
  }

class Magazine extends PrintEditionItem {
  constructor (name,releaseDate,pagesCount,state) {
    super(name,releaseDate,pagesCount,state)
  this.type="magazine";
  
}
}
class Book extends PrintEditionItem {
 constructor (author,name,releaseDate,pagesCount,state) {
    super(name,releaseDate,pagesCount,state)
   this.type="book"
   this.author=author
  
}
}
class NovelBook extends Book {
  constructor (name,releaseDate,pagesCount,state) {
    super(name,releaseDate,pagesCount,state)
  this.type="novel";
  
  }
}
class FantasticBook extends Book {
  constructor (name,releaseDate,pagesCount,state) {
    super(name,releaseDate,pagesCount,state)
  this.type="fantastic";}

}
  class DetectiveBook extends Book {
  constructor (name,releaseDate,pagesCount,state) {
    super(name,releaseDate,pagesCount,state)
  this.type="detective";
  }
  }


class Library {
constructor (name) {
  this.name=name
  this.books=[]
}

addBook(book) {
  if (this.books===undefined) {
   this.books=[]
  }
  else if (this.state>30) {
    this.books.push(book)
  }
}
}

