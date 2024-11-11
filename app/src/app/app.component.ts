import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from './models/blogs.model'; // Adjust path as necessary

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedBlogImages: string[] = [];
  title = 'TIGER CAVE';
  version = '1.0';

  constructor(private router: Router) {}

  displayVersion() {
    alert(`Version: ${this.version}`);
  }

  displayAuthorList() {
    // alert('Display list here');
    this.router.navigate(['list-authors'], {
      queryParams: { data: new Date() },
    });
  }
  onBlogSelected(blog: Blog): void {
    this.selectedBlogImages = [blog.image]; // Use album cover image  }
  }
}
