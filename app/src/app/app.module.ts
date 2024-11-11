import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DisplayBlogComponent } from './display-blog/display-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';
import { YourBlogsComponent } from './your-blogs/your-blogs.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { DeleteAuthorComponent } from './delete-author/delete-author.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAuthorsComponent,
    ListBlogsComponent,
    CreateBlogComponent,
    DisplayBlogComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    YourBlogsComponent,
    CreateAuthorComponent,
    EditAuthorComponent,
    DeleteAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  // Add FormsModule here
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
