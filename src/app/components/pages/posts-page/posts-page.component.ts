import { Post } from '../../models/Post';
import { PostsService } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private PostsService: PostsService) { }

  ngOnInit(): void {
    this.PostsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
