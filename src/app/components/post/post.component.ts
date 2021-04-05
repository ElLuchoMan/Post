import { Component, Input, OnInit } from '@angular/core';
import { posts } from 'src/app/interfaces/post.interface';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  idenviar: number = 0;
  // comments: any[] = [];
  constructor(private postService: PeticionesService) { }
  ngOnInit(): void {
    this.mostrarPosts();
  }
  mostrarPosts() {
    this.postService.getPost().subscribe((resp) => {
      // console.log(resp);
      this.posts.push(resp);
      // console.log(this.posts);
    });
  }
  setId(id: number) {
    this.postService.post = id;
    // console.log(this.postService.post);
    this.idenviar = id;
    console.log(this.idenviar);
  }
}
