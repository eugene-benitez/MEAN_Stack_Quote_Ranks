import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Quote } from '../../models/Quote';
import { NewQuote } from '../../models/newQuote';
import { Author } from '../../models/Author';


@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  thisAuthor: Author = {
    _id: '',
    name: '',
    quotes: []
  };

  newQuote: NewQuote = {
    quote: '',
  };

  return: any;

  constructor(
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.http.getAuthor(params.id)
        .subscribe((data: Author) => this.thisAuthor = data);
    });
  }

  onCreateQuote() {
    this.http.createQuote(this.thisAuthor._id, this.newQuote)
      .subscribe((data: Author) => {
        this.return = data;
        this.router.navigateByUrl('/view-author/' + this.thisAuthor._id)
      });
  }
}
