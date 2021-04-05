import { Component, Input, OnInit } from '@angular/core';
import { comments } from 'src/app/interfaces/comments.interface';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() id: number = 0;
  comments: any[] = [];
  constructor(private commentsService: PeticionesService) { }

  ngOnInit(): void {
    this.mostrarComentarios(this.id);
  }
  mostrarComentarios(id: number) {
    this.commentsService.getComments(id).subscribe((resp) => {
      // console.log(resp);
      // console.log(id);
      this.comments.push(resp);
      // console.log(this.comments);
    })

  }
}
