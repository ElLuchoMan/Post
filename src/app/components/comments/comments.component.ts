import { Component, OnInit } from '@angular/core';
import { comments } from 'src/app/interfaces/comments.interface';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: comments[] = [];
  constructor() { }

  ngOnInit(): void {
  }
 
}
