import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
// import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpClient {

  headers: any = new Headers();

  constructor(private http: Http) {
    this.createAuthorizationHeader(this.headers);
  }


  // login(loginDetails, url) {
  //
  //   let headers = new Headers({
  //     'Authorization': 'Basic ' + btoa(loginDetails.login + ':' + loginDetails.pass),
  //     'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
  //   });
  //
  //   let options = new RequestOptions({
  //     headers: headers
  //   });
  //
  //   return this.http.post(url,{}, options)
  //             .catch((error: any) => Observable.throw(error.json().error || 'Server Error')); // handle 401 error - bad credentials
  // }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' + btoa('bill:abc123'));
  }

  get(url) {
    return this.http.get(url, {headers : this.headers});

  }

  post(url, data) {
    return this.http.post(url, data, {
      headers : this.headers
    });
  }

  put(url, data) {
    return this.http.put(url, data, {
      headers : this.headers
    });
  }

  delete(url) {
    return this.http.delete(url, {
      headers : this.headers
    });
  }

}
