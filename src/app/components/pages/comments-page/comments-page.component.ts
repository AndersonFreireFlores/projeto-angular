import { Comment } from '../../models/Comment';
import { CommentService } from './../../../services/comment.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-comments',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }
}


