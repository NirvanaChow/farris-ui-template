import {
  ILookupHttpService,
  RemoteParams,
  LookupGridResult
} from '@farris/ui-lookup';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
export class LookupHttpService implements ILookupHttpService {
  constructor(private http: HttpClient) {}

  getData(url: string, params?: RemoteParams): Observable<LookupGridResult> {
    let httpHeader = new HttpHeaders();
    httpHeader = httpHeader.append(
      'SessionId',
      '7a36b8ce-1395-4995-936f-690728a12339'
    );

    let httpParams = new HttpParams();
    if (params) {
      // if (params) {
      //     httpParams = httpParams.set('pageIndex', params.pageIndex.toString());
      //     httpParams = httpParams.set('pageSize', params.pageSize.toString());
      // }

      if (params.condition) {
        httpParams = httpParams.set(
          'condition',
          JSON.stringify(params.condition)
        );
      }

      // if (params.search) {
      //     httpParams = httpParams.set('search', JSON.stringify(params.search));
      // }
    }

    const data$ = this.http.get(url, {
      headers: httpHeader,
      params: { query: JSON.stringify(params) }
    });

    return data$;
  }
}
