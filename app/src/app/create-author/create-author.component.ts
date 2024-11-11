import { Component, OnInit } from '@angular/core';
import { Author } from '../models/authors.model';
import { TigercaveServiceService } from '../service/tigercave-service.service';


@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrl: './create-author.component.css'
})

export class CreateAuthorComponent implements OnInit{
  author: Author = {
    authorId: Math.floor(Math.random() * 1000000),
    name: "",
    username: "",
    email: "",
    password: "",
    image: "",
  };

  wasSubmitted: boolean = false;

  constructor(private service: TigercaveServiceService) { }

  ngOnInit() {
  }

  public onSubmit() {
    let status = this.service.createAuthor(this.author, () => {
      console.log("Author created successfully");
      // You can add more actions here if needed after the album is created
  });

    console.log("The return from createAuthor() was " + status);
    this.wasSubmitted = true;
  }
}

