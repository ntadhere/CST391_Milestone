import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../models/blogs.model';
import { TigercaveServiceService } from '../service/tigercave-service.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.css'
})
export class EditBlogComponent implements OnInit{
  @Input() blog!: Blog;

  // blog: Blog = {
  //   blogId: 0,
  //   title: "",
  //   authorName: "",
  //   description: "",
  //   year: 0,
  //   image: "",
  // };

  wasSubmitted: boolean = false;

  constructor(private service: TigercaveServiceService) { }

  ngOnInit() {
  }

  public onSubmit() {
    let status = this.service.updateBlog(this.blog, () => {
      console.log("Blog updated successfully");
      // You can add more actions here if needed after the album is created
  });

    console.log("The return from updateBlog() was " + status);
    this.wasSubmitted = true;
  }
}
