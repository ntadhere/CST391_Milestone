import { Injectable } from '@angular/core';
import * as exampledata from '../../data/list-of-albums.json'; // Import music data file
import { Author } from './../models/authors.model'; // Import Artist model
import { Blog } from '../models/blogs.model'; // Import Album model
import { HttpClient } from '@angular/common/http'; // Import HttpClient for HTTP requests
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TigercaveServiceService {
  // Add a new private HTTP connection property
  private host = "http://localhost:5000";

  // Albums property to hold album data loaded from JSON
  blogs: Blog[] = exampledata;

  constructor(private http: HttpClient) {}

  //---------------------------------------------------------
  // Method to get all unique artists from the albums data
  //---------------------------------------------------------
  // Typescript syntax to define a callback function with
  // an array of Artist as parameter/ The callback returns void.
  // getArtists also returns void, however these are defined independently.

  public getAuthors(callback: (author: Author[]) => void): void {
    this.http.get<Author[]>(this.host + "/authors").subscribe({
      next: (authors: Author[]) => callback(authors),
      error: (error) => {
        console.error('Failed to fetch authors:', error);
        // Handle the error gracefully in the UI or log details for debugging
      },
    });
  }


  public getAllBlogs(callback: (blog: Blog[]) => void): void {
    this.http.get<Blog[]>(this.host + "/blogs").subscribe({
      next: (blogs: Blog[]) => callback(blogs),
      error: (error) => {
        console.error('Failed to fetch blogs:', error);
        // Handle the error gracefully in the UI or log details for debugging
      },
    });
  }

  //--------------------------------------------------------
  // Method to get a specific album by author and blog ID
  //--------------------------------------------------------
  public getBlog(callback: (blogs: Blog[]) => void): void {
    // return the list of blogs

    this.http.get<Blog[]>(this.host + "/blogs").
      subscribe((blogs: Blog[]) => {
        callback(blogs);
      })
  }
  //--------------------------------------------------
  //  Method to get albums by a specific artist
  //--------------------------------------------------
  public getBlogsOfAuthor(authorName: String, callback: (blogs: Blog[]) => void): void {

    let request = this.host + `/blogs/authorName/${authorName}`;
    console.log(`request`, request);
    this.http.get<Blog[]>(request).
      subscribe((blogs: Blog[]) => {
        console.log(`have blogs`, blogs);
        callback(blogs);
      });
  }

  //----------------------------------------------
  // Method to add a new blog
  //----------------------------------------------
  public createBlog(blog: Blog, callback: () => void): void {
    // Add a new Album
    this.http.post<Blog>(this.host + "/blogs", blog)
      .subscribe((data) => {
        callback();
      });
  }
  //----------------------------------------------
  // Method to add a new author
  //----------------------------------------------
  public createAuthor(author: Author, callback: () => void): void {
    // Add a new Author
    this.http.post<Author>(this.host + "/authors", author)
      .subscribe((data) => {
        callback();
      });
  }
  //----------------------------------------------
  // Method to update an existing blog
  //----------------------------------------------
  public updateBlog(blog: Blog, callback: () => void): void {
    this.http.put<Blog>(this.host + "/blogs", blog)
      .subscribe((data) => {
        callback();
      });
  }
  //----------------------------------------------
  // Method to update an existing author
  //----------------------------------------------
  public updateAuthor(author: Author, callback: () => void): void {
    this.http.put<Author>(this.host + "/authors", author)
      .subscribe((data) => {
        callback();
      });
  }

  //---------------------------------------------------
  // Method to delete an blog by author and blog ID
  //---------------------------------------------------
  public deleteBlog(id: number, callback: () => void): void {
    this.http.delete<Blog>(this.host + "/blogs/" + id)
      .subscribe((data) => {
        callback();
      });
  }
  //---------------------------------------------------
  // Method to delete an blog by author and blog ID
  //---------------------------------------------------
  public deleteAuthor(id: number, callback: () => void): void {
    this.http.delete<Author>(this.host + "/authors/" + id)
      .subscribe((data) => {
        callback();
      });
  }
}
