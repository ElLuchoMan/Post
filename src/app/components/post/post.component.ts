import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: posts[] = [];
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.mostrarPosts();
  }
  mostrarPosts() {
    this.postService.getPost().subscribe((resp) => {
      console.log(resp);
    });
  }

}
