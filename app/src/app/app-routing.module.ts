import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { YourBlogsComponent } from './your-blogs/your-blogs.component';
import { DisplayBlogComponent } from './display-blog/display-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';

const routes: Routes = [
  { path: 'create-blog', component: CreateBlogComponent },
  { path: 'create-author', component: CreateAuthorComponent },
  { path: 'list-authors', component: ListAuthorsComponent },
  { path: 'list-blogs', component: ListBlogsComponent },
  { path: 'your-blogs', component: YourBlogsComponent },
  { path: 'display/:id', component: DisplayBlogComponent },
  { path: 'edit/:author/:id', component: EditBlogComponent },
  { path: 'delete/:author/:id', component: DeleteBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
