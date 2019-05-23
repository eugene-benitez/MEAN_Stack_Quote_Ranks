import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Author } from '../../models/Author';
import { createAuthor } from '../../models/createAuthor';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {


  thisAuthor: Author = {
    _id: '',
    name: '',
    quotes: [],


  };

  editAuthor: createAuthor = {
    name: '',
  }

  authorError = "";

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

  onEdit() {
    this.http.updateAuthor(this.thisAuthor._id, this.editAuthor)
      .subscribe(data => {
        if (data['errors']) {
          this.authorError = data['errors']['name']['message']
        }
        else {
          this.router.navigateByUrl('show-all-author')
        }
      });
  }
}


