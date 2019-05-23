import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Author } from '../../models/Author';
import { Quote } from '../../models/Quote';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {
  thisAuthor: Author = {
    _id: '',
    name: '',
    quotes: []
  };
  allQuotes: Quote[] = [];

  return: any;

  constructor(
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loadAuthor();
  }

  loadAuthor() {
    this.route.params.subscribe((params: Params) => {
      this.http.getAuthor(params.id)
        .subscribe((data: Author) => this.thisAuthor = data);
    });
  }
  voteUpButton(authorID: string, quoteID: string) {
    this.http.increaseVote(authorID, quoteID)
      .subscribe((data: Author) => {
        this.thisAuthor = data;
        this.loadAuthor();
      });
  }

  voteDownButton(authorID: string, quoteID: string) {
    this.http.decreaseVote(authorID, quoteID)
      .subscribe((data: Author) => {
        this.thisAuthor = data;
        this.loadAuthor();
      });
  }

  removeQuoteButton(authorID: string, quoteID: string) {
    this.http.removeQuote(authorID, quoteID)
      .subscribe((data: Author) => {
        this.return = data;
        this.loadAuthor();
      });
  }

}
