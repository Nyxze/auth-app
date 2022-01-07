import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map,tap, catchError } from 'rxjs/operators';

export interface RandomUserInterface {
  name: string;
  firstName: string;
  picture: string;
  adress: string;
}

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {

  readonly url = 'https://randomuser.me/api';
  userList: Observable<RandomUserInterface[]> = new Observable<
    RandomUserInterface[]
  >();
  search = {
    nat: '',
    gender: '',
    results: 10,
  };

  constructor(private http: HttpClient) {}


  private mapUser(resp: any): RandomUserInterface[] {
    const users = resp.results.map((item: any) => {
      return {
        name: item.name.last,
        firstName: item.name.first,
        picture: item.picture.thumbnail,
        adress: item.location.street.number + ' ' + item.location.street.name,
      };
    });
    return users;
  }
  loadUsers(){
    const httpParams = new HttpParams()
      .set('results', this.search.results)
      .set('nat', this.search.nat)
      .set('gender', this.search.gender);

    this.userList = this.http.get(this.url, { params: httpParams }).pipe(
      tap((res)=>console.log('raw',res)),
      map((res: any) => this.mapUser(res)),
      tap((res)=>console.log('process',res)),
      catchError((err,source)=>{
        console.log(err)
        return source
      })
    )
  }
}


