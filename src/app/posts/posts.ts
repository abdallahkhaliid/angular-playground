import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPost } from '../interfaces/posts';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts implements OnInit, OnDestroy {
  loadedPosts = signal<IPost[]>([]);
  isFetching = signal(false);
  error = signal<string | null>(null);

  private errorSub?: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.errorSub = this.postService.error$.subscribe((errorMessage: string) => {
      this.error.set(errorMessage);
    });
  }

  onHandleError() {
    this.error.set(null);
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postService.createPost(postData.title, postData.content).subscribe({
      next: (responseData) => {
        console.log(responseData);
      },
      error: (err) => {
        this.postService.error$.next(this.extractMessage(err, 'Creating post failed!'));
      },
    });
  }

  onFetchPosts() {
    this.isFetching.set(true);
    this.postService.fetchPosts().subscribe({
      next: (posts) => {
        this.loadedPosts.set(posts);
        this.isFetching.set(false);
      },
      error: (err) => {
        console.error('Fetch failed', err);
        this.error.set(this.extractMessage(err, 'Fetching posts failed!'));
        this.isFetching.set(false);
      },
    });
  }

  onClearPosts() {
    this.postService.clearPosts().subscribe(() => {
      this.loadedPosts.set([]);
    });
  }

  ngOnDestroy() {
    this.errorSub?.unsubscribe();
  }

  private extractMessage(err: any, fallback: string): string {
    // Firebase returns { error: "Permission denied" } in the response body
    return err?.error?.error ?? err?.message ?? fallback;
  }
}
