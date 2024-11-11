import { Component, Input } from '@angular/core';
import { Blog } from '../models/blogs.model';


@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrl: './display-blog.component.css'
})
export class DisplayBlogComponent {
  @Input() blog!: Blog;
}
