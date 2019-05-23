import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { createAuthor } from '../../models/createAuthor';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  newAuthor: createAuthor = {
    name: '',
  }

  authorError: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService,
  ) { }

  ngOnInit() {

  }

  onCreate() {
    this.http.addAuthor(this.newAuthor)
      .subscribe(data => {
        if (data['errors']) {
          this.authorError = data['errors']['name']['message'];
        }
        else {
          this.router.navigateByUrl('');
        }
      });
  }
}
