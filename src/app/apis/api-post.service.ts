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

  postFile(file: File): Observable<HttpResponse<File>> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'multipart/form-data');
    return this.http.post<File>(
      `${this.api}${this.fileUrl}`, file, {headers, observe: "response"}
    );
  }

  postHistory(history: SolverHistory): Observable<HttpResponse<SolverHistory>> {
    return this.http.post<SolverHistory>(
      `${this.api}${this.historyUrl}`, history, {observe: "response"}
    );
  }
}
