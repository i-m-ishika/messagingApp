import { Injectable } from '@angular/core';
import {Post} from '../posts/post';
import {Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostService{
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  constructor(private httpClient: HttpClient){ }
  getPosts(){
    this.httpClient.get<{message: string, posts: Post[]}>('http://localhost:3000/posts').subscribe( response => {
      this.posts = response.posts;
      this.postsUpdated.next([...this.posts]);
    });
  }
  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }
  addPost(title: string, content: string){
    const post: Post = {title, content};
    this.httpClient.post<{message: string}>('http://localhost:3000/posts', post).subscribe(response => {
      console.log("Data received by server Success! Response: " + response.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }
}
