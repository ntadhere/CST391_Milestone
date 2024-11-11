import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../models/authors.model';
import { TigercaveServiceService } from '../service/tigercave-service.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrl: './edit-author.component.css'
})

export class EditAuthorComponent implements OnInit{
  @Input() author!: Author;

  wasSubmitted: boolean = false;

  constructor(private service: TigercaveServiceService) { }

  ngOnInit() {
  }

  public onSubmit() {
    let status = this.service.updateAuthor(this.author, () => {
      console.log("Author updated successfully");
      // You can add more actions here if needed after the album is created
  });

    console.log("The return from updateAuthor() was " + status);
    this.wasSubmitted = true;
  }
}
