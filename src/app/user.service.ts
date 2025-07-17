import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getFirstName(email: string): Observable<string> {
    return this.http.get(`${this.baseUrl}/first-name?email=${email}`, {
      responseType: "text",
    });
  }
}
