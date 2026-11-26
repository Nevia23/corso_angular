import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class PersoneServices {
  url = 'http://localhost:9090/rest/persone/';

  private http = inject(HttpClient);

  create(body: {}) {
    return this.http.post(this.url + "create", body);
  }
}
