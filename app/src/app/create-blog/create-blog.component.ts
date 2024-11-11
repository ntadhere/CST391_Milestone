import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blogs.model';
import { TigercaveServiceService } from '../service/tigercave-service.service';


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export class CreateBlogComponent implements OnInit{
  blog: Blog = {
    blogId: Math.floor(Math.random() * 1000000),
    title: "",
    authorName: "",
    description: "",
    year: 0,
    image: "",
  };

  wasSubmitted: boolean = false;

  constructor(private service: TigercaveServiceService) { }

  ngOnInit() {
  }

  public onSubmit() {
    // // Parse the Tracks and add to the Album then call the Service to create the new Album
    // let tracks: Track[] = [];
    // let tracksAll = this.tracksRaw.split('\n');
    // for (let i = 0; i < tracksAll.length; ++i) {
    //   let title = "";
    //   let lyrics = "";
    //   let video = "";
    //   let trackInfo = tracksAll[i];
    //   let trackParts = trackInfo.split(':');
    //   if (trackParts.length == 3) {
    //     title = trackParts[0];
    //     lyrics = trackParts[1];
    //     video = trackParts[2];
    //   }
    //   else if (trackParts.length == 2) {
    //     title = trackParts[0];
    //     lyrics = trackParts[1];
    //   }
    //   else {
    //     title = trackParts[0];
    //   }
    //   tracks.push(
    //     { trackId: Math.floor(Math.random() * 1000000), number: i + 1, title, lyrics, video }
    //   );
    // }
    // this.album.tracks = tracks;
    // console.log(this.album);
    let status = this.service.createBlog(this.blog, () => {
      console.log("Blog created successfully");
      // You can add more actions here if needed after the album is created
  });

    console.log("The return from createBlog() was " + status);
    this.wasSubmitted = true;
  }
}
