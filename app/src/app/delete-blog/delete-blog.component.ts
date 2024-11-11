import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../models/blogs.model';
import { TigercaveServiceService } from '../service/tigercave-service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrl: './delete-blog.component.css'
})
export class DeleteBlogComponent {
  @Input() blog!: Blog;

  wasSubmitted: boolean = false;

  constructor(private service: TigercaveServiceService, private location: Location) { }

  ngOnInit() {
  }

  public deleteBlog() {
    let status = this.service.deleteBlog(this.blog.blogId, () => {
      console.log("Blog deleted successfully");
      // You can add more actions here if needed after the album is created
  });

    console.log("The return from deleteBlog() was " + status);
    this.wasSubmitted = true;
  }

    // Method to navigate back to the previous page
    public cancel(): void {
      this.location.back();
    }
}
