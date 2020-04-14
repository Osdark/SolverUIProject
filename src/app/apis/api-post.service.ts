import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

import {Observable} from 'rxjs';

import {SolverHistory} from "../posts/store/posts/post.model";

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {
  api = 'http://localhost:8595/';
  fileUrl = 'file';
  historyUrl = 'history';

  constructor(private http: HttpClient) {
  }

  postFile(file: FormData): Observable<HttpResponse<Blob>> {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http.post<Blob>(
      `${this.api}${this.fileUrl}`, file, {headers, observe: "response"}
    );
  }

  postHistory(history: SolverHistory): Observable<HttpResponse<SolverHistory>> {
    return this.http.post<SolverHistory>(
      `${this.api}${this.historyUrl}`, history, {observe: "response"}
    );
  }
}
