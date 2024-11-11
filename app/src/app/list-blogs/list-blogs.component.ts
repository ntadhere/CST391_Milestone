import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TigercaveServiceService } from '../service/tigercave-service.service';
import { Blog } from '../models/blogs.model';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrl: './list-blogs.component.css'
})
export class ListBlogsComponent implements OnInit{
  title = 'LIST OF BLOGS';

  constructor(private route: ActivatedRoute, private service: TigercaveServiceService) {}

  readSelectedBlog: Blog | null = null;
  editSelectedBlog: Blog | null = null;
  deleteSelectedBlog: Blog | null = null;
  blogs: Blog[] = [];

  ngOnInit()
   {
      console.log("Getting data...");
      this.service.getAllBlogs((blogs: Blog[]) => {
      this.blogs = blogs;
      console.log('this.blogs', this.blogs);
      });
  }

  // Method to read a select blog
  onReadSelectBlog(blog: Blog)
  {
    this.readSelectedBlog = blog;
  }
  // Method to edit a select blog
  onEditSelectBlog(blog: Blog)
  {
    this.editSelectedBlog = blog;
  }
  // Method to read  a select blog
  onDeleteSelectBlog(blog: Blog)
  {
    this.deleteSelectedBlog = blog;
  }

}
