import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) {}

  public noToken() {
    console.warn('No GLO API access token was provided. Please declare one before making requests to the API.');
  }

  public buildQueryString(queryObject): string {
    let builder = '';
    if (queryObject) {
      for (let i = 0; i < Object.keys(queryObject).length; i++) {
        const key = Object.keys(queryObject)[i];
        let value = queryObject[ Object.keys(queryObject)[i] ];
        if ( Array.isArray(value) ) {
          value = value.join();
        }
        builder = builder + '&' + key + '=' + value;
      }
    }
    return builder;
  }

  public request(type, path, body?, queryString?): Observable<any> {
    const base_url = 'https://gloapi.gitkraken.com/v1/glo';
    const access_token = sessionStorage.getItem('gloToken');

    if (sessionStorage.getItem('gloToken')) {
      switch (type) {
        case 'get':
          return this.http.get(base_url + path + '?access_token=' + access_token + queryString);
        case 'post':
          return this.http.post(base_url + path + '?access_token=' + access_token, body);
        case 'delete':
          return this.http.delete(base_url + path + '?access_token=' + access_token);
      }
    } else {
      this.noToken();
    }
  }
}
