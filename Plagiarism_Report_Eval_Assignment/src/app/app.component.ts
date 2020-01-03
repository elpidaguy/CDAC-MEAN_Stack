import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  username = '';
  password = '';
  loginError = '';
  _isError:boolean = false;
  title = 'PlagiarismReport';
  books:any = [];
  bookId:any = 1;
  content:string = '';
  bookTitle:string = '';
  _isLoggedIn:boolean = false;
  _isplagCheck:boolean = false;

  plagWords:any = [];
  plagSentence:any = [];

  public onSubmit()
  {
    if(this.username == "gurdeep" && this.password == "123")
    {
      this._isError = false;
      this._isLoggedIn = true;
      this.loginError = '';
      // localStorage.setItem("_isLoggedIn", this._isLoggedIn.toString() );
      // console.log(this.bookId);
    }
    else
    {
      this._isError = true;
      this.loginError = "username or password is invalid";
    }
  }

  public addNewBook()
  {
    let bookObj = {
      "bookId":this.bookId,
      "bookTitle":this.bookTitle,
      "content":this.content
    }
    
    this.books.push(bookObj);
    this.resetForm();
  }

  public resetForm()
  {
  this.bookId = this.books.length+1;
  this.bookTitle = '';
  this.content = '';
  }

  public checkPlagiarism()
  {
    var wordCount = 0;
    var sentenceCount = 0;

    //for words
    // console.log(this.books);
    this.books[0].content.split(" ").forEach((token) => {
      wordCount = 0;
      // console.log(i);
      this.books.forEach((book) => {
        // console.log(book);
        var re = new RegExp(token, 'g');
        wordCount += (book.content.match(re) || []).length;
      });
      this.plagWords.push({ "token": token, "count": wordCount });
    });

    //for sentence
    this.books[0].content.split(".").forEach((token) => {
      sentenceCount = 0;
      console.log(token);
      if(token != '')
      {
      this.books.forEach((book) => {
        // console.log(book);
        var re = new RegExp(token, 'g');
        sentenceCount += (book.content.match(re) || []).length;
      });
    }
      this.plagSentence.push({ "token": token, "count": sentenceCount });
    });

    console.log(this.plagSentence);
    this._isplagCheck = true;
  }
}
