import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../../models/Author';

@Component({
  selector: 'app-show-all-author',
  templateUrl: './show-all-author.component.html',
  styleUrls: ['./show-all-author.component.css']
})
export class ShowAllAuthorComponent implements OnInit {

  AllAuthors: Author[] = [];

  delAuthor: Author = {
    _id: '',
    name: '',
    quotes: [],
  }

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    this.refreshAll();

  }

  refreshAll() {
    this.http.getAuthors()
      .subscribe((data: Author[]) => this.AllAuthors = data);
  }

  deleteObjectByIdButton(str: string): void {
    console.log(`Delete event is working with string param: ${str}`);
    this.http.deleteAuthor(str)
      .subscribe((data: Author) => {
        this.delAuthor = data;
        this.refreshAll();
      });

  }


  searchAuthorByIdButton(author_id: string): void {
    this.router.navigate(['/view-author/', author_id]);
  }
}