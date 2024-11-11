import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TigercaveServiceService } from '../service/tigercave-service.service';
import { Blog } from '../models/blogs.model';
import { Author } from '../models/authors.model';

@Component({
  selector: 'app-your-blogs',
  templateUrl: './your-blogs.component.html',
  styleUrl: './your-blogs.component.css'
})
export class YourBlogsComponent {
  constructor(private route: ActivatedRoute, private service: TigercaveServiceService) {}
  title="BLOGS OF THIS AUTHOR"
  // Step 2: Create an artist property to receive input
  @Input() author!: Author;
  // @Input() blog!: Blog;
  @Output() blogSelected = new EventEmitter<Blog>(); // Emit selected album to parent

  // Step 3: Create an albums property to hold the list of albums
  blogs: Blog[] = [];

  // Step 4: Create a selectedAlbum property
  selectedBlog: Blog | null = null;

  ngOnInit() {
   this.service.getBlogsOfAuthor(this!.author!.name,
     (blogs: Blog[]) => this.blogs = blogs);
  }

  // Step 5: Create onSelectAlbum method
  public onSelectBlog(blog: Blog)
   {
       this.selectedBlog = blog;
       this.blogSelected.emit(blog); // Emit the selected album
   }
}
