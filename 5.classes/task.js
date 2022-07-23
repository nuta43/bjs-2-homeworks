class PrintEditionItem {

  constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
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
  constructor (name,releaseDate,pagesCount) {
    super(name,releaseDate,pagesCount)
  this.type="magazine";
  
}
}
class Book extends PrintEditionItem {
 constructor (author,name,releaseDate,pagesCount) {
    super(name,releaseDate,pagesCount)
   this.type="book"
   this.author=author
  
}
}
class NovelBook extends Book {
  constructor (author,name,releaseDate,pagesCount) {
    super(author,name,releaseDate,pagesCount)
  this.type="novel";
  
  }
}
class FantasticBook extends Book {
  constructor (author,name,releaseDate,pagesCount) {
    super(author,name,releaseDate,pagesCount)
  this.type="fantastic";}

}
  class DetectiveBook extends Book {
  constructor (author,name,releaseDate,pagesCount) {
    super(author,name,releaseDate,pagesCount)
  this.type="detective";
  }
  }

  class Library {
    constructor(name,books) { 
      this.name = name
      this.books = []
    } 


addBook(book) {
  if(book.state > 30) {
    this.books.push(book);
}
return this.books;
} 

findBookBy(type, value) {
  for (let i = 0; i < this.books.length; i++) {
    if(this.books[i][type] === value) 
    return this.books[i];
}
return null;
}
giveBookByName(bookName) {
  for (let i = 0; i < this.books.length; i++) {
    if (this.books[i].name === bookName) return this.books.splice([i],1)[0];
}
return null;
}
  }
