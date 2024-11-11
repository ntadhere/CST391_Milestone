
import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../models/authors.model';
import { TigercaveServiceService } from '../service/tigercave-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-author',
  templateUrl: './delete-author.component.html',
  styleUrl: './delete-author.component.css'
})

export class DeleteAuthorComponent {
  @Input() author!: Author;

  wasSubmitted: boolean = false;

  constructor(private service: TigercaveServiceService, private location: Location) { }

  ngOnInit() {
  }

  public deleteBlog() {
    let status = this.service.deleteAuthor(this.author.authorId, () => {
      console.log("Author deleted successfully");
      // You can add more actions here if needed after the album is created
  });

    console.log("The return from deleteAuthor() was " + status);
    this.wasSubmitted = true;
  }

    // Method to navigate back to the previous page
    public cancel(): void {
      this.location.back();
    }
}
