import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls:['./post-create.component.scss']
})
export class PostCreateComponent{
  errorMessage= 'Please enter a non empty value.'
  constructor(private postService: PostService){ }

  onClickSavePost(form: NgForm){
    if(form.invalid){
      return;
    }
    this.postService.addPost(form.value.title, form.value.content)
    form.resetForm();
  }
}
