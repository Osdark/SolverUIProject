import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from './store/posts/post.model';
import {PostsService} from './store/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public loading: boolean;
  public posts$: Observable<Post[]>;

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.postService.loadPosts();
    this.posts$ = this.postService.getPosts();
    this.postService.getLoading().subscribe(l => this.loading = l);
  }
}
