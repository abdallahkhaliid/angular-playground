import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { IPost } from '../interfaces/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  error$ = new Subject<string>();
  private readonly baseUrl = 'https://http-angular-4262b-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient) {}

  createPost(title: string, content: string): Observable<{ name: string }> {
    const postData: Omit<IPost, 'id'> = { title, content };
    return this.http.post<{ name: string }>(this.baseUrl, postData);
  }

  fetchPosts(): Observable<IPost[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('pageIndex', 1);
    searchParams = searchParams.append('pageSize', 20);
    return this.http
      .get<{
        [key: string]: Omit<IPost, 'id'>;
      } | null>(this.baseUrl, { headers: { 'X-Page-Index': '1' }, params: searchParams })
      .pipe(
        map((responseData) => {
          if (!responseData) {
            return [];
          }
          const postsArray: IPost[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
      );
  }

  clearPosts(): Observable<null> {
    return this.http.delete<null>(this.baseUrl);
  }
}
