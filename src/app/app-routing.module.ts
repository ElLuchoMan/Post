import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'posts', component: PostComponent },
  { path: 'comments', component: CommentsComponent },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
