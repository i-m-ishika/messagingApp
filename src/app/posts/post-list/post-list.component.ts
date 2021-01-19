import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import {Subscription} from 'rxjs';
import {Post} from '../post';
import { PostService } from '../post.service';
@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls:['./post-list.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class PostListComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  postsSubs: Subscription;
  constructor(private postService: PostService){ }
  ngOnInit(){
    this.postService.getPosts();
    this.postsSubs = this.postService.getPostUpdateListener().subscribe(data=>{
      this.posts=data;
    });

  }
  ngOnDestroy(){
    this.postsSubs.unsubscribe();
  }

}
