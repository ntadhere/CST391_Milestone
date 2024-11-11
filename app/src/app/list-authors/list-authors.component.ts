import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TigercaveServiceService } from '../service/tigercave-service.service';
import { Author } from '../models/authors.model';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrl: './list-authors.component.css'
})
export class ListAuthorsComponent implements OnInit{
  constructor(private route: ActivatedRoute, private service: TigercaveServiceService) {}

  title= "LIST OF ARTISTS";

  readSelectedAuthor: Author | null = null;
  editSelectedAuthor: Author | null = null;
  deleteSelectedAuthor: Author | null = null;

  authors: Author[] = [];

  ngOnInit()
   {
      console.log("Getting data...");
      this.service.getAuthors((authors: Author[]) => {
      this.authors = authors;
      console.log('this.authors', this.authors);
      });
  }

  // Method to read a select author
  onReadSelectAuthor(author: Author)
  {
    this.readSelectedAuthor = author;
  }
  // Method to edit a select author
  onEditSelectAuthor(author: Author)
  {
    this.editSelectedAuthor = author;
  }
  // Method to read  a select author
  onDeleteSelectAuthor(author: Author)
  {
    this.deleteSelectedAuthor = author;
  }

}
