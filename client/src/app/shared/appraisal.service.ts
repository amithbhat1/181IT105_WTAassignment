import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Appraisal } from './appraisal.model';

@Injectable()
export class AppraisalService {
  selectedAppraisal: Appraisal;
  appraisals: Appraisal[];
  readonly baseURL = 'http://localhost:7000/appraisals/';

  constructor(private http: HttpClient) { }

  postAppraisal(app: Appraisal) {
    return this.http.post(this.baseURL, app);
  }

  getAppraisalList() {
    return this.http.get(this.baseURL);
  }

  putAppraisal(app: Appraisal) {
    return this.http.put(this.baseURL + `/${app._id}`, app);
  }

  deleteAppraisal(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
